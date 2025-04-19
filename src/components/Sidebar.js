import React from 'react';
import { Sidebar as SidebarContainer, NavSection, NavItem } from '../styles/StyledComponents';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { id: 'background', label: 'Background' },
      { id: 'prerequisites', label: 'Prerequisites' },
      { id: 'optional-services', label: 'Optional but Good' },
    ]
  },
  {
    title: 'Building Your Project',
    items: [
      { id: 'setup', label: 'Initial Setup' },
      { id: 'technical-description', label: 'Technical Description' },
      { id: 'backend', label: 'Backend Development' },
      { id: 'frontend', label: 'Frontend Development' },
      { id: 'backend-deployment', label: 'Backend Deployment' },
      { id: 'frontend-deployment', label: 'Frontend Deployment' }
    ]
  }
];

const Sidebar = ({ activeSection, onSectionChange }) => {
  return (
    <SidebarContainer>
      {sections.map((section, index) => (
        <NavSection key={index}>
          <h3>{section.title}</h3>
          {section.items.map((item) => (
            <NavItem 
              key={item.id} 
              active={activeSection === item.id}
              onClick={() => onSectionChange(item.id)}
            >
              {item.label}
            </NavItem>
          ))}
        </NavSection>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar; 