import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'
import Typewriter from '../components/Typewriter'

export default function Home() {
  const openBooking = () => {
    const btn = document.querySelector('[class*="fixed"][class*="left-6"]')
    if (btn) btn.click()
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-deep-navy via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/95 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 animate-flash">
              <span className="animate-pulse">🔥</span>
              25% OFF on All Services
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald rounded-full animate-ping" />
              Visiting Charge ₹99 Only
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald rounded-full animate-ping" />
              Technicians Available Now – {siteContent.serviceCity}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Gas Stove Troubles?<br />
            <Typewriter />
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Certified technicians at your door in 2–4 hours. Every brand, every problem, backed by a 30-day warranty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={openBooking} className="px-8 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-base font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all hover:scale-105">
              Book Service Now
            </button>
            <a href={`tel:+${siteContent.phoneRaw}`} className="px-8 py-3.5 border-2 border-white/30 text-white rounded-full text-base font-semibold hover:bg-white/10 transition-all">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-12 z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-primary-50 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary">2–4 hrs</div>
            <div className="text-sm font-semibold text-gray-800 mt-1">Same Day Service</div>
            <div className="text-xs text-gray-500 mt-0.5">Book before 5 PM</div>
          </div>
          <div className="bg-sapphire-light rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-sapphire">5,000+</div>
            <div className="text-sm font-semibold text-gray-800 mt-1">Happy Customers</div>
            <div className="text-xs text-gray-500 mt-0.5">Across {siteContent.serviceCity}</div>
          </div>
          <div className="bg-emerald-light rounded-2xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-emerald-dark">4.9★</div>
            <div className="text-sm font-semibold text-gray-800 mt-1">Average Rating</div>
            <div className="text-xs text-gray-500 mt-0.5">All platforms</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Safety is Our <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Top Priority</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 flex flex-col items-center justify-center gap-4 min-h-[300px]">
              <img
                src={`${import.meta.env.BASE_URL}images/certified-technicians.png`}
                alt="Certified & ID-Verified Technicians"
                className="w-full max-w-[420px] object-contain rounded-2xl"
              />
            </div>
            <div className="space-y-4">
              {[
                { icon: '✓', label: '10+ Years Experience' },
                { icon: '✓', label: 'ID-Verified Technicians' },
                { icon: '✓', label: 'Zero Leakage Guaranteed' },
                { icon: '✓', label: 'Same Day Output' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary font-bold text-sm">{item.icon}</div>
                  <span className="font-medium text-gray-800">{item.label}</span>
                </div>
              ))}
              <button onClick={openBooking} className="mt-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-sm font-semibold">
                Book An Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Book Your Gas Expert Today!</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.homeServices.map((s, i) => (
              <div key={i} className="group bg-gradient-to-br from-sapphire to-sapphire rounded-2xl overflow-hidden text-white hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className={s.image ? 'relative h-44 bg-white overflow-hidden' : 'p-6 pb-0'}>
                  {s.image ? (
                    <img src={s.image} alt={s.title} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                      {['🔧', '🧹', '🔩', '⚠️'][i]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{s.desc}</p>
                  <button onClick={openBooking} className="px-4 py-2 bg-white text-sapphire rounded-full text-xs font-semibold hover:bg-sapphire-light transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-primary font-semibold text-sm hover:underline">See All Services →</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.howItWorks.map((step, i) => {
              const colors = ['bg-gold/10 text-gold border-gold/30', 'bg-sapphire-light text-sapphire border-sapphire/30', 'bg-emerald-light text-emerald-dark border-emerald/30']
              const icons = ['📞', '🔧', '✅']
              return (
                <div key={i} className="text-center">
                  <div className={`w-20 h-20 rounded-2xl ${colors[i]} border-2 flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {icons[i]}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                  <p className="text-xs text-gray-400 mt-2 italic">{step.extra}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Customer Reviews</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Trusted by 5,000+ Families in {siteContent.serviceCity}</h2>
            <div className="flex items-center justify-center gap-1 mt-4 text-gold">
              {[...Array(5)].map((_, i) => <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              <span className="text-gray-600 text-sm ml-2">4.9/5 Average Rating</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <svg key={j} className="w-4 h-4 fill-gold" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-sm text-gray-600 mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span>{t.location}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="text-emerald-dark">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Service Coverage</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">We Serve All of {siteContent.serviceCity}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">High-Demand Areas</h3>
              <div className="flex flex-wrap gap-2">
                {siteContent.serviceAreas.highDemand.map((area, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 border border-gray-100">{area}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Also Covered</h3>
              <div className="flex flex-wrap gap-2">
                {siteContent.serviceAreas.alsoCovered.map((area, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-600 border border-gray-100">{area}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href={`tel:+${siteContent.phoneRaw}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-sm font-semibold">
              Check My Area Availability
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          </div>
          <div className="space-y-3">
            {siteContent.faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-sm font-semibold text-gray-900">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={`https://wa.me/${siteContent.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-full text-sm font-semibold hover:bg-emerald-dark transition-colors">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-primary via-sapphire to-emerald">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-emerald rounded-full animate-ping" />
            Technicians Available Now
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Don't Wait For An Emergency. Get It Fixed Today.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${siteContent.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-emerald text-white rounded-full text-base font-semibold hover:bg-emerald-dark transition-colors">
              Book on WhatsApp
            </a>
            <a href={`tel:+${siteContent.phoneRaw}`} className="px-8 py-3.5 border-2 border-white text-white rounded-full text-base font-semibold hover:bg-white/10 transition-colors">
              Call {siteContent.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
