import Section from './Section.jsx';
import { sport } from '../content.js';

export default function Sport() {
  return (
    <Section id="sport" eyebrow="En dehors du code" title={sport.title} intro={sport.text}>
      {sport.youtubeId && (
        <div className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${sport.youtubeId}`}
            title="Vidéo VTT enduro"
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="grid">
        {sport.cards.map((c) => (
          <article className="card" key={c.title}>
            <h3>{c.title}</h3>
            {c.lines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </article>
        ))}
      </div>
    </Section>
  );
}
