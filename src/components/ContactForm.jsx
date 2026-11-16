import { useRef, useState } from 'react';
import { contact } from '../shared.js';
import { useLang } from '../i18n.jsx';

const MESSAGE_MIN = 5;
const MESSAGE_MAX = 5000;
const NOM_MAX = 120;

const T = {
  fr: {
    nom: 'Votre nom', email: 'Votre e-mail',
    tel: 'Votre téléphone', facultatif: '(facultatif)',
    message: 'Votre projet, en quelques lignes',
    exemple: "Par exemple : je vends mes produits sur les marchés et j'aimerais pouvoir les proposer en ligne.",
    envoyer: 'Envoyer ma demande', envoi: 'Envoi en cours…',
    titreOk: 'Message envoyé', texteOk: 'Merci. Je vous réponds sous 24 h ouvrées.',
    plusRapide: "Besoin d'une réponse plus rapide ? Appelez-moi au",
    erreur: "L'envoi a échoué. Appelez-moi au",
    ou: 'ou écrivez à',
    legal: 'Vos coordonnées servent uniquement à vous répondre. Ni revendues, ni utilisées pour de la prospection.',
    enSavoirPlus: 'En savoir plus',
    legalLien: '/mentions-legales',
    err: {
      nomVide: 'Indiquez votre nom, que je sache à qui je réponds.',
      nomLong: `Ce nom dépasse ${NOM_MAX} caractères.`,
      emailVide: 'Il me faut votre e-mail pour pouvoir vous répondre.',
      emailInvalide: "Cette adresse e-mail n'a pas l'air valide.",
      messageVide: 'Dites-moi en quelques mots ce dont vous avez besoin.',
      messageCourt: 'Quelques mots de plus, que je comprenne votre demande.',
      messageLong: 'Ce message est trop long. Allez à l’essentiel, on détaillera ensuite.',
      autre: 'Ce champ doit être corrigé.',
    },
    indice: `${MESSAGE_MIN} caractères minimum`,
    manque: (n) => (n === 1 ? 'encore 1 caractère' : `encore ${n} caractères`),
    restants: (n) => (n === 1 ? '1 caractère restant' : `${n} caractères restants`),
  },
  en: {
    nom: 'Your name', email: 'Your email',
    tel: 'Your phone', facultatif: '(optional)',
    message: 'Your project, in a few lines',
    exemple: 'For example: I sell my products at markets and would like to offer them online.',
    envoyer: 'Send my enquiry', envoi: 'Sending…',
    titreOk: 'Message sent', texteOk: 'Thank you. I reply within one working day.',
    plusRapide: 'Need a faster answer? Call me on',
    erreur: 'Sending failed. Call me on',
    ou: 'or write to',
    legal: 'Your details are only used to reply to you. Never sold, never used for cold outreach.',
    enSavoirPlus: 'Learn more',
    legalLien: '/en/legal-notice',
    err: {
      nomVide: "Let me know your name, so I know who I'm replying to.",
      nomLong: `That name is longer than ${NOM_MAX} characters.`,
      emailVide: 'I need your email address to be able to reply.',
      emailInvalide: "That email address doesn't look valid.",
      messageVide: 'Tell me in a few words what you need.',
      messageCourt: 'A few more words, so I can understand what you need.',
      messageLong: 'That message is too long. Give me the gist — we can go into detail later.',
      autre: 'This field needs fixing.',
    },
    indice: `${MESSAGE_MIN} characters minimum`,
    manque: (n) => (n === 1 ? '1 more character' : `${n} more characters`),
    restants: (n) => (n === 1 ? '1 character left' : `${n} characters left`),
  },
};

// Volontairement permissive : la validation stricte reste côté serveur.
// Ici on veut seulement attraper la faute de frappe évidente.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function valider(valeurs, t) {
  const e = {};
  const nom = valeurs.name.trim();
  const email = valeurs.email.trim();
  const message = valeurs.message.trim();

  if (!nom) e.name = t.err.nomVide;
  else if (nom.length > NOM_MAX) e.name = t.err.nomLong;

  if (!email) e.email = t.err.emailVide;
  else if (!EMAIL.test(email)) e.email = t.err.emailInvalide;

  if (!message) e.message = t.err.messageVide;
  else if (message.length < MESSAGE_MIN) e.message = t.err.messageCourt;
  else if (message.length > MESSAGE_MAX) e.message = t.err.messageLong;

  return e;
}

// Le serveur ne connaît pas la langue du visiteur : il renvoie des codes de
// champ, les libellés restent ici.
const CODE_VERS_CHAMP = { nom: 'name', email: 'email', message: 'message' };

export default function ContactForm({ idPrefix = 'c', onSent }) {
  const [status, setStatus] = useState('idle');
  const [erreurs, setErreurs] = useState({});
  const [longueur, setLongueur] = useState(0);
  const formRef = useRef(null);
  const lang = useLang();
  const t = T[lang];
  const id = (n) => `${idPrefix}-${n}`;
  const errId = (n) => `${idPrefix}-${n}-err`;

  function lire(form) {
    const d = new FormData(form);
    return {
      name: String(d.get('name') ?? ''),
      email: String(d.get('email') ?? ''),
      message: String(d.get('message') ?? ''),
    };
  }

  // Une fois qu'un champ a été signalé, on le revalide à la frappe : l'erreur
  // disparaît dès qu'elle est corrigée, sans attendre un nouvel envoi.
  function handleInput(e) {
    const champ = e.target.name;
    if (champ === 'message') setLongueur(e.target.value.trim().length);
    if (!erreurs[champ]) return;
    const maj = valider(lire(formRef.current), t);
    setErreurs((prec) => {
      const suite = { ...prec };
      if (maj[champ]) suite[champ] = maj[champ];
      else delete suite[champ];
      return suite;
    });
  }

  function focusPremierFautif(champs) {
    const premier = ['name', 'email', 'message'].find((c) => champs[c]);
    if (premier) formRef.current?.elements[premier]?.focus();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) return;

    // Le formulaire porte noValidate : aucune bulle native du navigateur
    // n'apparaît. Les messages sont écrits, traduits, et affichés sous le
    // champ concerné.
    const fautes = valider(lire(form), t);
    if (Object.keys(fautes).length) {
      setErreurs(fautes);
      setStatus('idle');
      focusPremierFautif(fautes);
      return;
    }

    setErreurs({});
    setStatus('sending');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      // Un code 200 ne suffit pas : en développement, Vite renvoie le code
      // source du PHP sans l'exécuter, avec un 200. Sans cette vérification,
      // le formulaire annonçait « Message envoyé » alors que rien ne partait.
      let reponse = null;
      try {
        reponse = await res.json();
      } catch {
        throw new Error('réponse illisible');
      }

      // Filet de sécurité : si le serveur refuse un champ que la validation
      // locale a laissé passer, on l'affiche au bon endroit plutôt que
      // d'annoncer une panne d'envoi.
      if (res.status === 422 && Array.isArray(reponse?.champs) && reponse.champs.length) {
        const locales = valider(lire(form), t);
        const fautesServeur = {};
        for (const code of reponse.champs) {
          const champ = CODE_VERS_CHAMP[code];
          if (champ) fautesServeur[champ] = locales[champ] ?? t.err.autre;
        }
        if (!Object.keys(fautesServeur).length) fautesServeur.message = t.err.autre;
        setErreurs(fautesServeur);
        setStatus('idle');
        focusPremierFautif(fautesServeur);
        return;
      }

      if (!res.ok || reponse?.ok !== true) throw new Error('refusé');
      form.reset();
      setLongueur(0);
      setStatus('sent');
      onSent?.();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-done" role="status">
        <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12.5l2.5 2.5L16 9.5" />
        </svg>
        <h3>{t.titreOk}</h3>
        <p>{t.texteOk}</p>
        <p className="small">
          {t.plusRapide} <a href={contact.phoneLink}>{contact.phone}</a>.
        </p>
      </div>
    );
  }

  const Erreur = ({ champ }) =>
    erreurs[champ] ? (
      <span className="field-error" id={errId(champ)} role="alert">
        <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4.4v4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="8" cy="11.4" r="0.9" fill="currentColor" />
        </svg>
        {erreurs[champ]}
      </span>
    ) : null;

  const champProps = (n) => ({
    name: n,
    id: id(n),
    onInput: handleInput,
    'aria-invalid': erreurs[n] ? true : undefined,
    'aria-describedby': erreurs[n] ? errId(n) : undefined,
  });

  // Compteur : discret tant que tout va bien, informatif quand il le faut.
  const compteur =
    longueur === 0 ? t.indice
    : longueur < MESSAGE_MIN ? t.manque(MESSAGE_MIN - longueur)
    : longueur > MESSAGE_MAX - 500 ? t.restants(Math.max(0, MESSAGE_MAX - longueur))
    : null;

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor={id('name')}>{t.nom}</label>
          <input {...champProps('name')} type="text" maxLength={NOM_MAX} autoComplete="name" />
          <Erreur champ="name" />
        </div>
        <div className="field">
          <label htmlFor={id('email')}>{t.email}</label>
          <input {...champProps('email')} type="email" autoComplete="email" />
          <Erreur champ="email" />
        </div>
      </div>

      <div className="field">
        <label htmlFor={id('phone')}>
          {t.tel} <span className="optional">{t.facultatif}</span>
        </label>
        <input id={id('phone')} name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="field">
        <label htmlFor={id('message')}>{t.message}</label>
        <textarea {...champProps('message')} rows="6" maxLength={MESSAGE_MAX} placeholder={t.exemple} />
        <div className="field-bas">
          <Erreur champ="message" />
          {compteur && (
            <span className={`field-compteur${longueur > 0 && longueur < MESSAGE_MIN ? ' bas' : ''}`} aria-hidden="true">
              {compteur}
            </span>
          )}
        </div>
      </div>

      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" className="gotcha" />

      <button className="btn btn-primary btn-block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t.envoi : t.envoyer}
      </button>

      <p className="form-status" role="status" aria-live="polite">
        {status === 'error' && (
          <>
            {t.erreur} <a href={contact.phoneLink}>{contact.phone}</a> {t.ou}{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </>
        )}
      </p>

      <p className="form-legal">
        {t.legal} <a href={t.legalLien}>{t.enSavoirPlus}</a>.
      </p>
    </form>
  );
}
