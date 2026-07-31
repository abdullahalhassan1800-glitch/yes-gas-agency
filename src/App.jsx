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
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold">
          <span className="animate-pulse">🔥</span>
          <span className="animate-flash">25% OFF on All Services • Visiting Charge ₹99 Only</span>
          <button onClick={openBooking} className="ml-2 px-3 py-1 bg-white text-primary rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
            Claim Offer
          </button>
        </div>
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
