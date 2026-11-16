import { contact } from '../shared.js';
import { useContent, useLang, langues } from '../i18n.jsx';

export default function Footer() {
  const { ui } = useContent();
  const lang = useLang();
  // Le lien pointait toujours vers /mentions-legales : depuis une page
  // anglaise, le visiteur atterrissait sur une page en français.
  const lienLegal = langues.find((l) => l.code === lang).legal;

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Raphaël Perrot · {ui.footerRole}</span>
        <span className="footer-links">
          <span>{ui.footerSiret}&nbsp;: {contact.siret}</span>
          <a href={lienLegal}>{ui.footerLegal}</a>
        </span>
      </div>
    </footer>
  );
}
