import { useContent, useLang, langues } from '../i18n.jsx';

export default function ServicesPage() {
  const { servicesPage } = useContent();
  const lang = useLang();
  const racine = langues.find((l) => l.code === lang).racine;

  return (
    <section className="services-page">
      <div className="wrap">
        <a className="back" href={racine}>
          <span aria-hidden="true">←</span> {lang === 'fr' ? "Retour à l'accueil" : 'Back to home'}
        </a>
        <div className="eyebrow">{servicesPage.eyebrow}</div>
        <h1>{servicesPage.title}</h1>
        <p className="intro">{servicesPage.intro}</p>

        <div className="offres">
          {servicesPage.blocs.map((b) => (
            <article className="offre card" key={b.titre}>
              <h2>{b.titre}</h2>
              <p className="offre-pour">{b.pour}</p>
              <p>{b.texte}</p>
              <ul className="offre-liste">
                {b.exemples.map((e) => (
                  <li key={e}>
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {e}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="stack">
          <h2>{servicesPage.stack.titre}</h2>
          <p className="intro">{servicesPage.stack.texte}</p>
          <div className="stack-grid">
            {servicesPage.stack.groupes.map(([groupe, outils]) => (
              <div className="stack-groupe" key={groupe}>
                <div className="label">{groupe}</div>
                <div className="tags">
                  {outils.map((o) => (
                    <span className="tag" key={o}>{o}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="services-cta">
          <h2>{servicesPage.cta.titre}</h2>
          <p>{servicesPage.cta.texte}</p>
          <a className="btn btn-primary" href={`${racine === '/' ? '' : racine}/#contact`.replace('//', '/')}>
            {servicesPage.cta.bouton}
          </a>
        </div>
      </div>
    </section>
  );
}
