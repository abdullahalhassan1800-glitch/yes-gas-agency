import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import MobileBar from './components/MobileBar'
import BookingModal from './components/BookingModal'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'

export default function App() {
  const openBooking = () => {
    const btn = document.querySelector('[class*="fixed"][class*="left-6"]')
    if (btn) btn.click()
  }

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        <button onClick={openBooking} className="block w-full overflow-hidden cursor-pointer" aria-label="Claim 25% off offer">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="inline-flex items-center gap-2 px-6 py-2 text-xs sm:text-sm font-semibold">
              <span className="animate-flame inline-block">🔥</span>
              25% OFF on All Services • Visiting Charge ₹99 Only • Book Now →
            </span>
            <span className="inline-flex items-center gap-2 px-6 py-2 text-xs sm:text-sm font-semibold" aria-hidden="true">
              <span className="animate-flame inline-block">🔥</span>
              25% OFF on All Services • Visiting Charge ₹99 Only • Book Now →
            </span>
          </div>
        </button>
      </div>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
      <MobileBar />
      <BookingModal />
    </div>
  )
}
