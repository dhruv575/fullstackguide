import styled from 'styled-components';

// Main layout components
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: var(--header-height);
  padding: 0 var(--spacing-lg);
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: var(--box-shadow);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
`;

export const NavBar = styled.nav`
  display: flex;
  margin-left: auto;
  
  a {
    margin-left: var(--spacing-md);
    color: var(--text-color);
    font-weight: 500;
    
    &:hover {
      color: var(--primary-color);
      text-decoration: none;
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex: 1;
`;

export const Sidebar = styled.aside`
  width: var(--sidebar-width);
  border-right: 1px solid var(--border-color);
  padding: var(--spacing-md);
  overflow-y: auto;
  background-color: #fafafa;
  position: sticky;
  height: calc(100vh - var(--header-height));
  top: var(--header-height);
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: var(--spacing-lg);
  overflow-y: auto;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

export const Footer = styled.footer`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  text-align: center;
  font-size: 0.9rem;
  color: var(--secondary-color);
`;

// Navigation components
export const NavItem = styled.div`
  padding: var(--spacing-sm) 0;
  cursor: pointer;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  font-weight: ${props => props.active ? '600' : '400'};
  border-left: 3px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  padding-left: ${props => props.active ? 'calc(var(--spacing-md) - 3px)' : 'var(--spacing-md)'};
  
  &:hover {
    color: var(--primary-color);
  }
`;

export const NavSection = styled.div`
  margin-bottom: var(--spacing-lg);
  
  h3 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--secondary-color);
    margin-bottom: var(--spacing-sm);
  }
`;

// Content components
export const Section = styled.section`
  margin-bottom: var(--spacing-xl);
`;

export const Card = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  background-color: white;
  box-shadow: var(--box-shadow);
`;

export const CodeBlock = styled.div`
  background-color: var(--code-background);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-md);
  overflow: hidden;
  
  pre {
    margin: 0;
    padding: var(--spacing-md);
  }
`;

export const TabContainer = styled.div`
  margin-bottom: var(--spacing-md);
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: var(--spacing-md);
`;

export const Tab = styled.div`
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  
  &:hover {
    color: var(--primary-color);
  }
`;

export const TabPanel = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
`;

// Utility components
export const Button = styled.button`
  background-color: ${props => props.primary ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  border: ${props => props.primary ? 'none' : '1px solid var(--primary-color)'};
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#005ccb' : 'rgba(0, 112, 243, 0.1)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--border-color);
  margin: var(--spacing-lg) 0;
`;

export const Badge = styled.span`
  background-color: ${props => {
    if (props.success) return 'var(--success-color)';
    if (props.warning) return 'var(--warning-color)';
    if (props.error) return 'var(--error-color)';
    return 'var(--primary-color)';
  }};
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
`;

export const Tooltip = styled.div`
  position: relative;
  
  &:hover:after {
    content: "${props => props.text}";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: 4px;
    font-size: 0.8rem;
    white-space: nowrap;
    z-index: 100;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 1}, 1fr);
  gap: ${props => props.gap || 'var(--spacing-md)'};
`;

export const Box = styled.div`
  padding: ${props => props.padding || 'var(--spacing-md)'};
  margin: ${props => props.margin || '0'};
  background-color: ${props => props.bgColor || 'transparent'};
  border-radius: ${props => props.borderRadius || 'var(--border-radius)'};
  border: ${props => props.border || 'none'};
`; 