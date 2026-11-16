import Section from './Section.jsx';
import { useContent, useLang, langues } from '../i18n.jsx';

export default function Services() {
  const { services, ui } = useContent();
  const lang = useLang();
  const lienServices = langues.find((l) => l.code === lang).services;
  return (
    <Section id="services" eyebrow={ui.servicesEyebrow} title={ui.servicesTitre}>
      <div className="grid">
        {services.map((s) => (
          <article className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <a className="link voir-tout" href={lienServices}>
        {lang === 'fr' ? 'Voir tout ce que je peux construire' : 'See everything I can build'}{' '}
        <span aria-hidden="true">→</span>
      </a>
    </Section>
  );
}
