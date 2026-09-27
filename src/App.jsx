import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <div className="min-h-screen bg-base-950 text-white">
        <Navbar />
        <main>
          <Hero />
          <ValueProposition />
          <Pricing />
          <TrustProcess />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton href={contact.whatsappLink} />
        <CookieBanner />
        
      </div>} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;