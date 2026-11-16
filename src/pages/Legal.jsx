import { contact } from '../shared.js';
import { useContent, useLang, langues } from '../i18n.jsx';

function Line({ label, children }) {
  return (
    <p className="legal-line">
      <strong>{label}</strong> {children}
    </p>
  );
}

export default function Legal() {
  const { legal, site, ui, legalPage: t } = useContent();
  const lang = useLang();
  // Le retour pointait toujours vers « / » : depuis la version anglaise,
  // il renvoyait sur l'accueil français.
  const accueil = langues.find((l) => l.code === lang).racine;

  return (
    <section className="legal">
      <div className="wrap">
        <a className="back" href={accueil}>
          <span aria-hidden="true">←</span> {ui.retourAccueil}
        </a>
        <div className="eyebrow">{t.eyebrow}</div>
        <h1>{t.titre}</h1>

        <h2>{t.editeur}</h2>
        <Line label={t.responsable}>Raphaël Perrot</Line>
        <Line label={t.statut}>{t.statutValeur}</Line>
        <Line label={t.activite}>{legal.activity}</Line>
        {contact.address && <Line label={t.siege}>{contact.address}</Line>}
        <Line label={t.siret}>{contact.siret}</Line>
        {legal.registered && <Line label={t.immatriculation}>{legal.registered}</Line>}
        <Line label={t.contactLabel}>
          <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phone}
        </Line>
        <Line label={t.tva}>{legal.vat}</Line>

        <h2>{t.hebergement}</h2>
        <Line label={legal.host.name}>
          {legal.host.address} —{' '}
          <a href={legal.host.url} target="_blank" rel="noopener noreferrer">
            {legal.host.url.replace('https://', '')}
            <span className="sr-only"> {ui.nouvelleFenetre}</span>
          </a>
        </Line>

        <h2>{t.piTitre}</h2>
        <p>{t.piTexte}</p>

        <h2>{t.donneesTitre}</h2>
        <p>{t.donneesTexte}</p>
        <p>
          {t.rgpd.avant}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {t.rgpd.entre}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            CNIL
            <span className="sr-only"> {ui.nouvelleFenetre}</span>
          </a>
          {t.rgpd.apres}
        </p>

        <h2>{t.cookiesTitre}</h2>
        <p>{t.cookiesTexte}</p>

        <h2>{t.liensTitre}</h2>
        <p>{t.liensTexte}</p>

        <p className="legal-updated">{t.miseAJour}{site.url}</p>
      </div>
    </section>
  );
}
