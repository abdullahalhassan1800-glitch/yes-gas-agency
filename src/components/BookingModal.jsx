import { useState } from 'react'
import { siteContent } from '../data/content'

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', area: '', problem: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setOpen(false); setSubmitted(false); setForm({ name: '', phone: '', service: '', area: '', problem: '' }) }, 3000)
  }

  if (!open) return (
    <button onClick={() => setOpen(true)} className="fixed bottom-6 left-6 z-[999] px-5 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all hover:scale-105">
      Book Service
    </button>
  )

  return (
    <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <div className="flex items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Yes Gas Agency" className="h-8 w-auto" />
              <span className="font-semibold text-gray-900">Yes Gas Agency</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Book a Service</p>
          </div>
          <button onClick={() => setOpen(false)} className="p-2 hover:bg-gray-100 rounded-full"><svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>

        <div className="px-6 py-4">
          <div className="flex gap-2 mb-6">
            {['Same Day Service', '30-Day Warranty', '4.9★ Rated'].map((pill) => (
              <span key={pill} className="px-3 py-1 bg-primary-50 text-primary text-xs font-medium rounded-full">{pill}</span>
            ))}
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Booking Confirmed!</h3>
              <p className="text-sm text-gray-500 mt-1">Our technician will call you within 15 minutes</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm text-gray-500">+91</span>
                  <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-r-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Enter phone number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select required value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
                  <option value="">Select service</option>
                  {siteContent.services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                  {siteContent.homeServices.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Area</label>
                <input required value={form.area} onChange={(e) => setForm({...form, area: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Delhi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Describe the Problem</label>
                <textarea rows={3} value={form.problem} onChange={(e) => setForm({...form, problem: e.target.value})} className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Briefly describe your issue..." />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex-1 px-4 py-3 bg-gradient-to-r from-sapphire to-sapphire text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-shadow">
                  Confirm Booking
                </button>
                <a href={`tel:+${siteContent.phoneRaw}`} className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl text-sm font-semibold text-center hover:shadow-lg transition-shadow">
                  Call Now
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
