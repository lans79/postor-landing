import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Pain from './components/Pain'
import About from './components/About'
import Services from './components/Services'
import Cases from './components/Cases'
import VideoReviews from './components/VideoReviews'
import Reviews from './components/Reviews'
import Process from './components/Process'
import UrgencyStrip from './components/UrgencyStrip'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import MobileStickyBtn from './components/MobileStickyBtn'

export default function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Pain />
        <About />
        <Services />
        <Cases />
        <VideoReviews />
        <Reviews />
        <Process />
        <UrgencyStrip />
        <FAQ />
        <ContactForm />
      </main>
      <MobileStickyBtn />
    </div>
  )
}
