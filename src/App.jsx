import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import Pricing from './components/sections/Pricing';
import TrustProcess from './components/sections/TrustProcess';
import ContactSection from './components/sections/ContactSection';
import CookiePolicyPage from './pages/CookiePolicyPage';
import WhatsAppButton from './components/ui/WhatsAppButton';
import CookieBanner from './components/ui/CookieBanner';
import { contact } from './data/content';

// Al cambiar de ruta: ir a la sección del hash (p. ej. /#precios) o al inicio de la página
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Layout() {
  return (
    <div className="min-h-screen bg-base-950 text-white">
      <ScrollManager />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton href={contact.whatsappLink} />
      <CookieBanner />
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <Pricing />
      <TrustProcess />
      <ContactSection />
    </main>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          </Route>
        </Routes>
      </Router>
    </MotionConfig>
  );
}

export default App;
