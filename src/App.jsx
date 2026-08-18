import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import AIInProduction from './components/AIInProduction.jsx'
import WhoWeHelp from './components/WhoWeHelp.jsx'
import WhyUs from './components/WhyUs.jsx'
import Work from './components/Work.jsx'
import HowWeWork from './components/HowWeWork.jsx'
import Team from './components/Team.jsx'
import Approach from './components/Approach.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import ContactForm from './components/ContactForm.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main className="relative z-[2]">
        <Hero />
        <Marquee />
        <Services />
        <AIInProduction />
        <WhoWeHelp />
        <WhyUs />
        <Work />
        <HowWeWork />
        <Team />
        <Approach />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
