import Section from './Section.jsx';
import { useContent } from '../i18n.jsx';

function Photo({ photo }) {
  const srcSet = (ext) =>
    photo.largeurs.map((w) => `${photo.base}-${w}.${ext} ${w}w`).join(', ');

  return (
    <figure className="sport-photo">
      <picture>
        <source type="image/webp" srcSet={srcSet('webp')} sizes="(max-width: 900px) 100vw, 600px" />
        <img
          src={`${photo.base}-800.jpg`}
          srcSet={srcSet('jpg')}
          sizes="(max-width: 900px) 100vw, 600px"
          width={photo.width}
          height={photo.height}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <figcaption>{photo.legende}</figcaption>
    </figure>
  );
}

export default function Sport() {
  const { sport, ui } = useContent();

  return (
    <Section id="sport" eyebrow={ui.sportEyebrow} title={sport.title} intro={sport.text}>
      {sport.photos?.length > 0 && (
        <div className="sport-photos">
          {sport.photos.map((p) => (
            <Photo photo={p} key={p.base} />
          ))}
        </div>
      )}

      {sport.youtubeId && (
        <div className="video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${sport.youtubeId}`}
            title="Vidéo VTT"
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
