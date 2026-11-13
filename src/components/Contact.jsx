import { useState } from 'react';
import { contact } from '../shared.js';
import { useContent } from '../i18n.jsx';

export default function Contact() {
  const { contactSection } = useContent();
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
    <section id="contact" className="contact" data-reveal>
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

            <div className="contact-profils">
              {contact.linkedin && (
                <a className="contact-profil" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.4 21h5.16V9.5H2.4V21zm7.74-11.5V21h5.16v-6.36c0-1.68.32-3.3 2.4-3.3 2.05 0 2.08 1.92 2.08 3.4V21H24v-7.3c0-4.3-.93-7.6-5.95-7.6-2.42 0-4.04 1.33-4.7 2.58h-.07V9.5h-3.14z" />
                  </svg>
                  LinkedIn
                  <span className="sr-only"> (nouvelle fenêtre)</span>
                </a>
              )}
              {contact.github && (
                <a className="contact-profil" href={contact.github} target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
                  </svg>
                  GitHub
                  <span className="sr-only"> (nouvelle fenêtre)</span>
                </a>
              )}
            </div>
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
