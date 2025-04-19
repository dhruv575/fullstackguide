import React from 'react';
import { Header as HeaderContainer, Logo, NavBar } from '../styles/StyledComponents';

// Simple code icon 
const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" fill="#0070f3"/>
  </svg>
);

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <CodeIcon />
        <span>FullStack Guide</span>
      </Logo>
      <NavBar>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">Vercel</a>
        <a href="https://cursor.sh/" target="_blank" rel="noopener noreferrer">Cursor</a>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header; 