import Section from './Section.jsx';
import { projects } from '../content.js';

export default function Work() {
  return (
    <Section
      id="realisations"
      eyebrow="Réalisations"
      title="Des projets livrés"
      intro="Chaque projet part du même endroit : un problème concret, et du temps à récupérer."
    >
      <div className="projects">
        {projects.map((p) => (
          <article className="card project" key={p.title}>
            <h3>{p.title}</h3>
            <div className="sub">{p.sub}</div>

            <div className="project-block">
              <div className="label">Le besoin</div>
              <p>{p.problem}</p>
            </div>
            <div className="project-block">
              <div className="label">Ce que j'ai livré</div>
              <p>{p.done}</p>
            </div>

            {p.tags && (
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            )}

            {p.url && (
              <a className="link" href={p.url} target="_blank" rel="noopener noreferrer">
                Voir le site <span aria-hidden="true">→</span>
                <span className="sr-only"> (nouvelle fenêtre)</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
