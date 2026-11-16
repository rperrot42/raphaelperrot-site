import Section from './Section.jsx';
import { useContent } from '../i18n.jsx';

export default function Experience() {
  const { experience, ui } = useContent();
  return (
    <Section id="experience" eyebrow={ui.experienceEyebrow} title={ui.experienceTitre}>
      {experience.map((job) => (
        <div className="item" key={job.title}>
          <div className="when">{job.when}</div>
          <div>
            <h3>{job.title}</h3>
            <div className="sub">{job.sub}</div>
            <ul>
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            {job.tags && (
              <div className="tags">
                {job.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            )}

            {job.more && (
              <details className="more">
                <summary>{job.moreLabel || 'Voir le détail'}</summary>
                <ul className="plain">
                  {job.more.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        </div>
      ))}
    </Section>
  );
}
