import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { siteContent } from '../data/content'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', area: '', service: '', time: '', problem: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/thank-you')
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-navy via-navy-800 to-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get Your Gas Appliance Fixed Today</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Reach out to us — we're here to help 7 days a week.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { icon: '📞', title: 'Call Now', value: siteContent.phone, href: `tel:+${siteContent.phoneRaw}` },
                { icon: '💬', title: 'WhatsApp', value: 'Chat instantly', href: `https://wa.me/${siteContent.phoneRaw}` },
                { icon: '✉️', title: 'Email', value: siteContent.email, href: `mailto:${siteContent.email}` },
                { icon: '🕐', title: 'Working Hours', value: siteContent.workingHours },
                { icon: '📍', title: 'Service Area', value: `${siteContent.serviceCity} & surroundings, 30+ locations covered` },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-gray-500">{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-gray-900 hover:text-primary">{item.value}</a>
                      ) : (
                        <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center text-sm text-gray-500">
                📍 Map: {siteContent.serviceCity}
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Service</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm text-gray-500">+91</span>
                    <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-r-xl text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Enter phone" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area/Address</label>
                  <input required value={form.area} onChange={(e) => setForm({...form, area: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Your area in Delhi" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                  <select required value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none bg-white">
                    <option value="">Select service</option>
                    {siteContent.services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <select value={form.time} onChange={(e) => setForm({...form, time: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none bg-white">
                    <option value="">Any time</option>
                    <option>Morning (8 AM – 12 PM)</option>
                    <option>Afternoon (12 PM – 4 PM)</option>
                    <option>Evening (4 PM – 8 PM)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Describe the Problem</label>
                  <textarea rows={3} value={form.problem} onChange={(e) => setForm({...form, problem: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary outline-none resize-none" placeholder="Briefly describe your issue..." />
                </div>
                <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                  <button type="submit" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
                    Submit Enquiry
                  </button>
                  <a href={`tel:+${siteContent.phoneRaw}`} className="px-8 py-3 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold text-center hover:bg-gray-200 transition-colors">
                    Call {siteContent.phone}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Certified Technicians', '2–4 Hour Arrival', '4.9★ Rated', '30-Day Warranty'].map((item, i) => (
              <div key={i} className="text-sm font-medium text-gray-700">
                <span className="w-2 h-2 bg-emerald rounded-full inline-block mr-1.5" />
                {item}
              </div>
            ))}
          </div>
          <div className="text-center mt-6 text-sm text-gray-500">
            4.9 / 5 Average Rating — Trusted by 5,000+ families in {siteContent.serviceCity}
          </div>
        </div>
      </section>
    </div>
  )
}
