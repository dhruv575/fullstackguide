import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #0070f3;
    --secondary-color: #6c757d;
    --background-color: #ffffff;
    --text-color: #333333;
    --border-color: #e0e0e0;
    --code-background: #f5f5f5;
    --sidebar-width: 250px;
    --header-height: 60px;
    --success-color: #28a745;
    --warning-color: #ffc107;
    --error-color: #dc3545;
    --border-radius: 6px;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
    --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: var(--font-family);
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: var(--spacing-md);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  code {
    font-family: var(--font-mono);
    background-color: var(--code-background);
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 0.9em;
  }

  pre {
    font-family: var(--font-mono);
    background-color: var(--code-background);
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    overflow-x: auto;
    margin-bottom: var(--spacing-md);
  }

  button {
    cursor: pointer;
    font-family: var(--font-family);
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: #005ccb;
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
  }

  ul, ol {
    margin-bottom: var(--spacing-md);
    margin-left: var(--spacing-lg);
  }

  blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: var(--spacing-md);
    margin-left: 0;
    margin-bottom: var(--spacing-md);
    font-style: italic;
    color: var(--secondary-color);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--spacing-md);
  }

  th, td {
    padding: var(--spacing-sm);
    border: 1px solid var(--border-color);
    text-align: left;
  }

  th {
    background-color: var(--code-background);
    font-weight: 600;
  }

  hr {
    border: none;
    border-top: 1px solid var(--border-color);
    margin: var(--spacing-lg) 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius);
  }
`;

export default GlobalStyles; 