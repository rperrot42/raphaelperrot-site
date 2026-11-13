import { hero } from '../content.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow">{hero.eyebrow}</div>
        <h1>
          {hero.titleStart}
          <em>{hero.titleHighlight}</em>
          {hero.titleEnd}
        </h1>
        <p className="hero-text">{hero.text}</p>
        <div className="btns">
          <a className="btn btn-primary" href="#contact">Parlons de votre projet</a>
          <a className="btn btn-ghost" href="#experience">Mon parcours</a>
        </div>
      </div>
    </section>
  );
}
