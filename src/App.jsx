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

function isLegalRoute() {
  if (typeof window === 'undefined') return false;
  return window.location.pathname.replace(/\/+$/, '') === '/mentions-legales';
}

export default function App() {
  const legal = isLegalRoute();

  return (
    <>
      <Header home={!legal} />
      <main id="main">
        {legal ? (
          <Legal />
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
    </>
  );
}
