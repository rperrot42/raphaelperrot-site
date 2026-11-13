import Section from './Section.jsx';
import { useContent } from '../i18n.jsx';

function Photo({ photo }) {
  const srcSet = (ext) =>
    photo.largeurs.map((w) => `${photo.base}-${w}.${ext} ${w}w`).join(', ');

  return (
    <figure className="sport-photo">
      <picture>
        <source type="image/webp" srcSet={srcSet('webp')} sizes="(max-width: 900px) 100vw, 620px" />
        <img
          src={`${photo.base}-1200.jpg`}
          srcSet={srcSet('jpg')}
          sizes="(max-width: 900px) 100vw, 620px"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
        />
      </picture>
      {photo.legende && <figcaption>{photo.legende}</figcaption>}
    </figure>
  );
}

export default function Sport() {
  const { sport } = useContent();
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

      <div className="sport-grid">
        {sport.photo && <Photo photo={sport.photo} />}
        <div className="sport-cards">
          {sport.cards.map((c) => (
            <article className="card" key={c.title}>
              <h3>{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
