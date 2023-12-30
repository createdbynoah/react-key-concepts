import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
  const [activeTab, setActiveTab] = useState();

  function handleClick(item) {
    console.log(`You clicked on the ${item} tab!`);
    setActiveTab(item);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
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
          </menu>
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
        </section>
      </main>
    </div>
  );
}

export default App;
