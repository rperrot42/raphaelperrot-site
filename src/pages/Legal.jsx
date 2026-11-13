import { useEffect } from 'react';
import { contact, legal, site } from '../content.js';

function Line({ label, children }) {
  return (
    <p className="legal-line">
      <strong>{label}</strong> {children}
    </p>
  );
}

export default function Legal() {
  useEffect(() => {
    document.title = 'Mentions légales — Raphaël Perrot';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Mentions légales du site raphaelperrot.com : éditeur, hébergeur, propriété intellectuelle et traitement des données personnelles.');
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${site.url}/mentions-legales`);
  }, []);

  return (
    <section className="legal">
      <div className="wrap">
        <a className="back" href="/">
          <span aria-hidden="true">←</span> Retour à l'accueil
        </a>
        <div className="eyebrow">Informations légales</div>
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <Line label="Responsable de la publication :">Raphaël Perrot</Line>
        <Line label="Statut :">Entrepreneur individuel (auto-entrepreneur)</Line>
        <Line label="Activité :">{legal.activity}</Line>
        {contact.address && <Line label="Siège social :">{contact.address}</Line>}
        <Line label="SIRET :">{contact.siret}</Line>
        {legal.registered && <Line label="Immatriculation :">{legal.registered}</Line>}
        <Line label="Contact :">
          <a href={`mailto:${contact.email}`}>{contact.email}</a> · {contact.phone}
        </Line>
        <Line label="TVA :">{legal.vat}</Line>

        <h2>Hébergement</h2>
        <Line label={legal.host.name}>
          {legal.host.address} —{' '}
          <a href={legal.host.url} target="_blank" rel="noopener noreferrer">
            {legal.host.url.replace('https://', '')}
          </a>
        </Line>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des textes, visuels et éléments graphiques de ce site est la propriété de Raphaël
          Perrot, sauf mention contraire. Toute reproduction ou réutilisation, totale ou partielle, sans
          autorisation écrite préalable est interdite.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Les informations transmises via le formulaire de contact (nom, adresse e-mail, message) servent
          uniquement à répondre à votre demande. Elles ne sont ni revendues, ni cédées, ni utilisées à des
          fins de prospection, et sont conservées douze mois au maximum après le dernier échange.
        </p>
        <p>
          Conformément au Règlement général sur la protection des données (RGPD) et à la loi
          « Informatique et Libertés », vous disposez d'un droit d'accès, de rectification, d'effacement,
          de limitation et d'opposition sur vos données. Pour l'exercer, écrivez à{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>. Vous pouvez également introduire une
          réclamation auprès de la{' '}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.
        </p>

        <h2>Cookies et mesure d'audience</h2>
        <p>
          Ce site ne dépose aucun cookie, n'utilise aucun traceur publicitaire et n'intègre aucun outil de
          mesure d'audience. Les polices de caractères sont hébergées sur le site lui-même : aucune donnée
          n'est transmise à un service tiers lors de votre visite.
        </p>

        <h2>Liens externes</h2>
        <p>
          Ce site peut renvoyer vers des sites tiers. Leur contenu n'engage que leurs éditeurs respectifs.
        </p>

        <p className="legal-updated">Dernière mise à jour : novembre 2026 · {site.url}</p>
      </div>
    </section>
  );
}
