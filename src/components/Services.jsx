import Section from './Section.jsx';
import { useContent } from '../i18n.jsx';

export default function Services() {
  const { services } = useContent();
  return (
    <Section id="services" eyebrow="Services" title="Ce que je fais">
      <div className="grid">
        {services.map((s) => (
          <article className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
