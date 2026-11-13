import Section from './Section.jsx';
import { about } from '../content.js';

export default function About() {
  return (
    <Section id="apropos" eyebrow={about.eyebrow} title={about.title} className="about">
      {about.paragraphs.map((p) => (
        <p className="about-text" key={p}>{p}</p>
      ))}
    </Section>
  );
}
