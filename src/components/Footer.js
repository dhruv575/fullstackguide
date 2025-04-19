import React from 'react';
import { Footer as FooterContainer } from '../styles/StyledComponents';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <p>© {year} FullStack Guide. Built with React. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer; 