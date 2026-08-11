import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import ValueProposition from './components/sections/ValueProposition'
import Pricing from './components/sections/Pricing'
import TrustProcess from './components/sections/TrustProcess'
import ContactSection from './components/sections/ContactSection'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { contact } from './data/content'

function App() {
  return (
    <div className="min-h-screen bg-base-950 text-white">
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
    </div>
  )
}

export default App
