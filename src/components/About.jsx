import Section from './Section.jsx';
import { about, portrait } from '../content.js';

export default function About() {
  const srcSet = (ext) =>
    portrait.largeurs.map((w) => `${portrait.base}-${w}.${ext} ${w}w`).join(', ');

  return (
    <Section id="apropos" eyebrow={about.eyebrow} title={about.title} className="about">
      <div className="about-grid">
        <div className="about-texts">
          {about.paragraphs.map((p) => (
            <p className="about-text" key={p}>{p}</p>
          ))}
        </div>

        <figure className="about-photo">
          <picture>
            <source type="image/webp" srcSet={srcSet('webp')} sizes="(max-width: 860px) 60vw, 380px" />
            <img
              src={`${portrait.base}-600.jpg`}
              srcSet={srcSet('jpg')}
              sizes="(max-width: 860px) 60vw, 380px"
              width={portrait.width}
              height={portrait.height}
              alt={portrait.alt}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <figcaption>{portrait.legende}</figcaption>
        </figure>
      </div>
    </Section>
  );
}
