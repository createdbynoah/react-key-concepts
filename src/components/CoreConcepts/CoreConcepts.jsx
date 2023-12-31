import CoreConcept from '../CoreConcept/CoreConcept';
import Section from '../Section/Section';
import { CORE_CONCEPTS } from '../../data';

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept {...concept} key={concept.title} />
        ))}
      </ul>
    </Section>
  );
}
