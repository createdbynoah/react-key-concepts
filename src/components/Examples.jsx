import { useState } from 'react';

import Section from './Section/Section';
import Tabs from './Tabs';
import TabButton from './TabButton/TabButton';
import { EXAMPLES } from '../data';

export default function Examples() {
  const [activeTab, setActiveTab] = useState();

  function handleClick(item) {
    console.log(`You clicked on the ${item} tab!`);
    setActiveTab(item);
  }

  return (
    <Section id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              onClick={handleClick}
              isSelected={activeTab === 'components'}
            >
              Components
            </TabButton>
            <TabButton onClick={handleClick} isSelected={activeTab === 'jsx'}>
              JSX
            </TabButton>
            <TabButton onClick={handleClick} isSelected={activeTab === 'props'}>
              Props
            </TabButton>
            <TabButton onClick={handleClick} isSelected={activeTab === 'state'}>
              State
            </TabButton>
          </>
        }
      >
        {!activeTab && <p>Please select a topic.</p>}
        {activeTab && (
          <div id="tab-content">
            <h3>{EXAMPLES[activeTab].title}</h3>
            <p>{EXAMPLES[activeTab].description}</p>
            <pre>
              <code>{EXAMPLES[activeTab].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
      <menu></menu>
    </Section>
  );
}
