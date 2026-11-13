import { useRef, useState } from 'react';
import { contact } from '../shared.js';
import { useContent, useLang } from '../i18n.jsx';
import ContactForm from './ContactForm.jsx';

export default function Contact() {
  const { contactSection } = useContent();
  const lang = useLang();
  const dialogue = useRef(null);
  const [ouvert, setOuvert] = useState(false);

  const t = lang === 'fr'
    ? { ecrire: 'Écrivez-moi', appeler: 'Appelez-moi', fermer: 'Fermer',
        titre: 'Écrivez-moi', sousTitre: 'Je vous réponds sous 24 h ouvrées.',
        plutot: 'Vous préférez votre messagerie ?' }
    : { ecrire: 'Write to me', appeler: 'Call me', fermer: 'Close',
        titre: 'Write to me', sousTitre: 'I reply within one working day.',
        plutot: 'Prefer your own mail app?' };

  function ouvrir(e) {
    const d = dialogue.current;
    // Sans <dialog>, on laisse le lien mailto faire son travail.
    if (!d || typeof d.showModal !== 'function') return;
    e.preventDefault();
    d.showModal();
    setOuvert(true);
  }

  function fermer() {
    dialogue.current?.close();
    setOuvert(false);
  }

  // Clic en dehors du contenu : le <dialog> reçoit l'événement lui-même.
  function clicFond(e) {
    if (e.target === dialogue.current) fermer();
  }

  return (
    <section id="contact" className="contact" data-reveal>
      <div className="wrap">
        <div className="eyebrow">{contactSection.eyebrow}</div>
        <h2>{contactSection.title}</h2>
        <p className="intro">{contactSection.intro}</p>

        <div className="contact-grid">
          <div className="contact-aside">
            <a className="contact-direct" href={contact.phoneLink}>
              <span className="label">{t.appeler}</span>
              <strong>{contact.phone}</strong>
            </a>

            {/* Reste un lien mailto : si le navigateur ne gère pas <dialog>,
                le comportement d'origine est conservé. */}
            <a className="contact-direct" href={`mailto:${contact.email}`} onClick={ouvrir}>
              <span className="label">{t.ecrire}</span>
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
              <div className="label">{contactSection.etapes && (lang === 'fr' ? 'Ce qui se passe ensuite' : 'What happens next')}</div>
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

          <div className="contact-form-card">
            <ContactForm idPrefix="inline" />
          </div>
        </div>
      </div>

      {/* Fenêtre ouverte depuis « Écrivez-moi » : le formulaire inline est loin
          sur téléphone, et le mailto ne fonctionne pas sans client de messagerie. */}
      <dialog className="modale" ref={dialogue} onClick={clicFond} onClose={() => setOuvert(false)}>
        <div className="modale-contenu">
          <button className="modale-fermer" type="button" onClick={fermer} aria-label={t.fermer}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <h3 className="modale-titre">{t.titre}</h3>
          <p className="modale-sous-titre">{t.sousTitre}</p>
          {ouvert && <ContactForm idPrefix="modale" />}
          <p className="modale-alt">
            {t.plutot} <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>
      </dialog>
    </section>
  );
}
