import { useState } from 'react';
import { contact, contactSection } from '../content.js';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

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
        <div className="eyebrow">{contactSection.eyebrow}</div>
        <h2>{contactSection.title}</h2>
        <p className="intro">{contactSection.intro}</p>

        <div className="contact-grid">
          {/* Colonne de gauche : rassurer avant de demander quoi que ce soit */}
          <div className="contact-aside">
            <a className="contact-direct" href={contact.phoneLink}>
              <span className="label">Appelez-moi</span>
              <strong>{contact.phone}</strong>
            </a>
            <a className="contact-direct" href={`mailto:${contact.email}`}>
              <span className="label">Écrivez-moi</span>
              <strong>{contact.email}</strong>
            </a>

            <ul className="reassure">
              {contactSection.rassurances.map(([titre, texte]) => (
                <li key={titre}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <div>
                    <strong>{titre}</strong>
                    <span>{texte}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="steps-next">
              <div className="label">Ce qui se passe ensuite</div>
              <ol>
                {contactSection.etapes.map((e) => <li key={e}>{e}</li>)}
              </ol>
            </div>

            {contact.linkedin && (
              <a className="contact-linkedin" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.4 21h5.16V9.5H2.4V21zm7.74-11.5V21h5.16v-6.36c0-1.68.32-3.3 2.4-3.3 2.05 0 2.08 1.92 2.08 3.4V21H24v-7.3c0-4.3-.93-7.6-5.95-7.6-2.42 0-4.04 1.33-4.7 2.58h-.07V9.5h-3.14z" />
                </svg>
                Voir mon profil LinkedIn
                <span className="sr-only"> (nouvelle fenêtre)</span>
              </a>
            )}
          </div>

          {/* Colonne de droite : le formulaire */}
          <div className="contact-form-card">
            {status === 'sent' ? (
              <div className="form-done" role="status">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12.5l2.5 2.5L16 9.5" />
                </svg>
                <h3>Message envoyé</h3>
                <p>Merci. Je vous réponds sous 24 h ouvrées.</p>
                <p className="small">
                  Besoin d'une réponse plus rapide ? Appelez-moi au{' '}
                  <a href={contact.phoneLink}>{contact.phone}</a>.
                </p>
              </div>
            ) : (
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
                  <label htmlFor="phone">
                    Votre téléphone <span className="optional">(facultatif)</span>
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>

                <div className="field">
                  <label htmlFor="message">Votre projet, en quelques lignes</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Par exemple : je vends mes produits sur les marchés et j'aimerais pouvoir les proposer en ligne."
                  />
                </div>

                <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" className="gotcha" />

                <button className="btn btn-primary btn-block" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                </button>

                <p className="form-status" role="status" aria-live="polite">
                  {status === 'error' && (
                    <>
                      L'envoi a échoué. Appelez-moi au <a href={contact.phoneLink}>{contact.phone}</a> ou
                      écrivez à <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                    </>
                  )}
                </p>

                <p className="form-legal">
                  Vos coordonnées servent uniquement à vous répondre. Ni revendues, ni utilisées pour de
                  la prospection. <a href="/mentions-legales">En savoir plus</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
