import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { AppContainer, MainContent, ContentArea } from './styles/StyledComponents';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Background from './sections/Background';
import Prerequisites from './sections/Prerequisites';
import GettingStarted from './sections/GettingStarted';
import OptionalServices from './sections/OptionalServices';
import TechnicalDescription from './sections/TechnicalDescription';
import BackendDevelopment from './sections/BackendDevelopment';
import FrontendDevelopment from './sections/FrontendDevelopment';
import BackendDeployment from './sections/BackendDeployment';
import FrontendDeployment from './sections/FrontendDeployment';

function App() {
  const [activeSection, setActiveSection] = useState('background');

  // Function to render the active section content
  const renderContent = () => {
    switch (activeSection) {
      case 'background':
        return <Background />;
      case 'prerequisites':
        return <Prerequisites />;
      case 'setup':
        return <GettingStarted />;
      case 'optional-services':
        return <OptionalServices />;
      case 'technical-description':
        return <TechnicalDescription />;
      case 'backend':
        return <BackendDevelopment />;
      case 'frontend':
        return <FrontendDevelopment />;
      case 'backend-deployment':
        return <BackendDeployment />;
      case 'frontend-deployment':
        return <FrontendDeployment />;
      default:
        return <Background />;
    }
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <MainContent>
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <ContentArea>
          {renderContent()}
        </ContentArea>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
