import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Work from './components/Work.jsx';
import Method from './components/Method.jsx';
import Experience from './components/Experience.jsx';
import Sport from './components/Sport.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Legal from './pages/Legal.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import { LangContext, langFromPath, isLegalPath, isServicesPath } from './i18n.jsx';

// `route` est fourni au pré-rendu ; dans le navigateur on lit l'URL courante.
export default function App({ route }) {
  const path =
    route ?? (typeof window === 'undefined' ? '/' : window.location.pathname);
  const lang = langFromPath(path);
  const legal = isLegalPath(path);
  const services = isServicesPath(path);
  const pageSeule = legal || services;

  return (
    <LangContext.Provider value={lang}>
      <Header home={!pageSeule} />
      <main id="main">
        {legal ? (
          <Legal />
        ) : services ? (
          <ServicesPage />
        ) : (
          <>
            <Hero />
            <Services />
            <Work />
            <Method />
            <Experience />
            <Sport />
            <About />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
