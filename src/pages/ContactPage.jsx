import { contact } from '../shared.js';
import { useContent, useLang, langues } from '../i18n.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default function ContactPage() {
  const { contactPage, contactSection } = useContent();
  const lang = useLang();
  const racine = langues.find((l) => l.code === lang).racine;

  return (
    <section className="contact-page">
      <div className="wrap">
        <a className="back" href={racine}>
          <span aria-hidden="true">←</span> {lang === 'fr' ? "Retour à l'accueil" : 'Back to home'}
        </a>

        <div className="eyebrow">{contactPage.eyebrow}</div>
        <h1>{contactPage.title}</h1>
        <p className="intro">{contactPage.intro}</p>

        <div className="contact-page-grid">
          <div className="contact-page-form">
            <ContactForm idPrefix="page" />
          </div>

          <aside className="contact-page-aside">
            <div className="label">{contactPage.ouDirect}</div>

            <a className="contact-direct clair" href={contact.phoneLink}>
              <span className="label">{contactPage.appel}</span>
              <strong>{contact.phone}</strong>
            </a>
            <a className="contact-direct clair" href={`mailto:${contact.email}`}>
              <span className="label">{contactPage.mail}</span>
              <strong>{contact.email}</strong>
            </a>

            <ul className="reassure clair">
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

            <div className="steps-next clair">
              <div className="label">{lang === 'fr' ? 'Ce qui se passe ensuite' : 'What happens next'}</div>
              <ol>
                {contactSection.etapes.map((e) => <li key={e}>{e}</li>)}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
