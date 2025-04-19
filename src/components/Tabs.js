import React, { useState } from 'react';
import { TabContainer, TabList, Tab, TabPanel } from '../styles/StyledComponents';

const Tabs = ({ tabs, defaultTab = 0, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Ensure children is an array
  const childrenArray = React.Children.toArray(children);

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab 
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </Tab>
        ))}
      </TabList>
      
      {childrenArray.map((child, index) => (
        <TabPanel key={index} active={activeTab === index}>
          {child}
        </TabPanel>
      ))}
    </TabContainer>
  );
};

export default Tabs; 