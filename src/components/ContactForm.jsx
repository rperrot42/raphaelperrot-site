import { useState } from 'react';
import { contact } from '../shared.js';
import { useLang } from '../i18n.jsx';

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
  },
};

export default function ContactForm({ idPrefix = 'c', onSent }) {
  const [status, setStatus] = useState('idle');
  const lang = useLang();
  const t = T[lang];
  const id = (n) => `${idPrefix}-${n}`;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) return;

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
      if (!res.ok || reponse?.ok !== true) throw new Error('refusé');
      form.reset();
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

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor={id('name')}>{t.nom}</label>
          <input id={id('name')} name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor={id('email')}>{t.email}</label>
          <input id={id('email')} name="email" type="email" required autoComplete="email" />
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
        <textarea id={id('message')} name="message" rows="6" required placeholder={t.exemple} />
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
