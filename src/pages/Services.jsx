import { useState } from 'react'
import { siteContent } from '../data/content'

export default function Services() {
  const openBooking = () => {
    const btn = document.querySelector('[class*="fixed"][class*="left-6"]')
    if (btn) btn.click()
  }
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-navy via-navy-800 to-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional gas appliance services across {siteContent.serviceCity}. Same-day service, certified technicians.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald rounded-full" /> ISI Certified</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald rounded-full" /> Same Day Service</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald rounded-full" /> 4.9★ Rated</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald rounded-full" /> 30-Day Warranty</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <div className="text-5xl opacity-30">{['🔧', '🧹', '🔩', '⚠️', '⚡', '🔧'][i]}</div>
                  {service.badge && (
                    <span className={`absolute top-3 right-3 ${service.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}>
                      {service.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <span className="text-primary font-bold text-sm">{service.range}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{service.tagline}</p>
                  <p className="text-xs text-gray-400 mb-4">⏱ {service.time}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                        <svg className="w-3.5 h-3.5 text-emerald mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={openBooking} className="w-full px-4 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Booking</h2>
              <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/thank-you' }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Your phone" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={3} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Tell us about your issue..." />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-sm font-semibold">
                    Book Service
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Call Us</h3>
                <a href={`tel:+${siteContent.phoneRaw}`} className="text-2xl font-bold text-primary">{siteContent.phone}</a>
                <p className="text-xs text-gray-500 mt-1">Available 8 AM – 9 PM</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">WhatsApp</h3>
                <a href={`https://wa.me/${siteContent.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald text-white rounded-full text-sm font-semibold">
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
