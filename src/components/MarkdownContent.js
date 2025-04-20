import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Tabs from './Tabs';
import styled from 'styled-components';

// Styled container for markdown content
const MarkdownContainer = styled.div`
  width: 100%;
  overflow-x: hidden;

  img {
    max-width: 100%;
    height: auto;
  }

  pre {
    max-width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
    
    h3 {
      font-size: 1.3rem;
    }
    
    code {
      word-break: break-word;
    }
  }
`;

// Custom components for the markdown renderer
const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : '';
    
    // Handle special case for OS-specific code blocks
    if (language === 'mac' || language === 'windows') {
      const content = String(children).replace(/\n$/, '');
      const osCodeBlocks = {
        mac: language === 'mac' ? content : null,
        windows: language === 'windows' ? content : null
      };
      
      return (
        <Tabs tabs={['Mac', 'Windows']} defaultTab={language === 'mac' ? 0 : 1}>
          <SyntaxHighlighter 
            style={tomorrow} 
            language="bash" 
            PreTag="div"
            customStyle={{ maxWidth: '100%', overflow: 'auto' }}
            {...props}
          >
            {osCodeBlocks.mac || '# No Mac-specific instructions available'}
          </SyntaxHighlighter>
          
          <SyntaxHighlighter 
            style={tomorrow} 
            language="powershell" 
            PreTag="div"
            customStyle={{ maxWidth: '100%', overflow: 'auto' }}
            {...props}
          >
            {osCodeBlocks.windows || '# No Windows-specific instructions available'}
          </SyntaxHighlighter>
        </Tabs>
      );
    }
    
    return !inline && match ? (
      <SyntaxHighlighter
        style={tomorrow}
        language={match[1]}
        PreTag="div"
        customStyle={{ maxWidth: '100%', overflow: 'auto' }}
        wrapLongLines={true}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  // Ensure tables are responsive
  table({ node, ...props }) {
    return (
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table {...props} />
      </div>
    );
  },
  // Ensure images are responsive
  img({ node, ...props }) {
    return <img style={{ maxWidth: '100%', height: 'auto' }} {...props} />;
  },
};

const MarkdownContent = ({ content }) => {
  const processedContent = content
    // Replace paired Mac/Windows code blocks with a single tabbed block
    .replace(/```mac\n([\s\S]*?)```\s*\n\s*```windows\n([\s\S]*?)```/g, (match, macCode, windowsCode) => {
      return `\`\`\`os-tabs
MAC_CONTENT: ${macCode}
WINDOWS_CONTENT: ${windowsCode}
\`\`\``;
    })
    // Replace paired Windows/Mac code blocks with a single tabbed block
    .replace(/```windows\n([\s\S]*?)```\s*\n\s*```mac\n([\s\S]*?)```/g, (match, windowsCode, macCode) => {
      return `\`\`\`os-tabs
MAC_CONTENT: ${macCode}
WINDOWS_CONTENT: ${windowsCode}
\`\`\``;
    });

  // Custom components that handle our special os-tabs code blocks
  const customComponents = {
    ...components,
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      if (language === 'os-tabs') {
        const content = String(children);
        const macMatch = content.match(/MAC_CONTENT: ([\s\S]*?)(?=WINDOWS_CONTENT:|$)/);
        const windowsMatch = content.match(/WINDOWS_CONTENT: ([\s\S]*?)$/);
        
        const macCode = macMatch ? macMatch[1].trim() : '# No Mac-specific instructions available';
        const windowsCode = windowsMatch ? windowsMatch[1].trim() : '# No Windows-specific instructions available';
        
        return (
          <Tabs tabs={['Mac', 'Windows']} defaultTab={0}>
            <SyntaxHighlighter 
              style={tomorrow} 
              language="bash" 
              PreTag="div"
              customStyle={{ maxWidth: '100%', overflow: 'auto' }}
              wrapLongLines={true}
              {...props}
            >
              {macCode}
            </SyntaxHighlighter>
            
            <SyntaxHighlighter 
              style={tomorrow} 
              language="powershell" 
              PreTag="div"
              customStyle={{ maxWidth: '100%', overflow: 'auto' }}
              wrapLongLines={true}
              {...props}
            >
              {windowsCode}
            </SyntaxHighlighter>
          </Tabs>
        );
      }
      
      // Fall back to the original code component
      return components.code({ node, inline, className, children, ...props });
    }
  };

  return (
    <MarkdownContainer className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={customComponents}
      >
        {processedContent}
      </ReactMarkdown>
    </MarkdownContainer>
  );
};

export default MarkdownContent; 