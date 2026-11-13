import { useState } from 'react';
import { contact } from '../content.js';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Piège à robots : rempli uniquement par un spammeur.
    if (data.get('_gotcha')) return;

    setStatus('sending');
    try {
      const res = await fetch(contact.formEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Envoi refusé');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2>Un projet, une tâche qui vous fait perdre du temps ?</h2>
        <p className="intro">
          Écrivez-moi ou appelez-moi. On regarde ensemble ce qu'il est possible de faire, sans engagement.
        </p>

        <div className="btns">
          <a className="btn btn-primary" href={`mailto:${contact.email}`}>{contact.email}</a>
          <a className="btn btn-ghost" href={contact.phoneLink}>{contact.phone}</a>
        </div>

        {contact.formEndpoint && (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Votre nom</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Votre e-mail</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Votre projet, en quelques lignes</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" className="gotcha" />

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Envoi…' : 'Envoyer'}
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {status === 'sent' && 'Message envoyé. Je vous réponds sous 24 h ouvrées.'}
              {status === 'error' && (
                <>
                  L'envoi a échoué. Écrivez-moi directement à{' '}
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </>
              )}
            </p>

            <p className="form-legal">
              Vos coordonnées servent uniquement à vous répondre. Elles ne sont ni revendues ni utilisées
              pour de la prospection. <a href="/mentions-legales">En savoir plus</a>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
