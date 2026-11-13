import Section from './Section.jsx';
import { useContent } from '../i18n.jsx';

export default function Method() {
  const { method } = useContent();
  return (
    <Section id="methode" eyebrow="Méthode" title="Comment je travaille avec vous">
      <ol className="grid steps">
        {method.map((step, i) => (
          <li className="card" key={step.title}>
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
