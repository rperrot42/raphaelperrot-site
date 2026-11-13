import { useLang, langues } from '../i18n.jsx';

export default function NotFound() {
  const lang = useLang();
  const l = langues.find((x) => x.code === lang);

  const t = lang === 'fr'
    ? {
        code: 'Erreur 404',
        titre: "Cette page n'existe pas",
        texte: "Le lien est peut-être erroné, ou la page a été déplacée. Voici par où continuer.",
        accueil: "Retour à l'accueil",
        services: 'Voir les services',
        contact: 'Me contacter',
      }
    : {
        code: 'Error 404',
        titre: 'This page does not exist',
        texte: 'The link may be wrong, or the page has moved. Here is where to go next.',
        accueil: 'Back to home',
        services: 'See services',
        contact: 'Get in touch',
      };

  return (
    <section className="notfound">
      <div className="wrap">
        <div className="eyebrow">{t.code}</div>
        <h1>{t.titre}</h1>
        <p className="intro">{t.texte}</p>
        <div className="btns">
          <a className="btn btn-primary" href={l.racine}>{t.accueil}</a>
          <a className="btn btn-ghost" href={l.services}>{t.services}</a>
          <a className="btn btn-ghost" href={l.contact}>{t.contact}</a>
        </div>
      </div>
    </section>
  );
}
