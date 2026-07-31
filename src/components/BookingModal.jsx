import { useEffect, useState } from 'react'
import { siteContent } from '../data/content'
import { submitToSheet } from '../utils/submitToSheet'

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', area: '', problem: '' })

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await submitToSheet({ ...form, source: 'Popup Form' })
    setSubmitting(false)
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
      <div className="relative bg-white w-full sm:max-w-xs sm:rounded-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-navy-800 to-deep-navy px-4 py-3 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Manoj Gas Fix" className="h-7 w-auto rounded-full ring-2 ring-primary" />
            <div>
              <span className="font-semibold text-white text-sm leading-none block">Manoj Gas Fix</span>
              <span className="text-[10px] text-orange-300">Book a Service</span>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>

        <div className="px-4 py-3">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-emerald-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900">Booking Confirmed!</h3>
              <p className="text-xs text-gray-500 mt-1">Our technician will call you within 15 minutes</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="grid grid-cols-1 gap-2.5">
                <div>
                  <label className="block text-xs font-semibold text-navy-800 mb-0.5">Full Name</label>
                  <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full px-3 py-2 bg-sapphire-light/40 border border-navy-900/15 rounded-lg text-xs focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-800 mb-0.5">Phone Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-2.5 bg-sapphire-light/60 border border-r-0 border-navy-900/15 rounded-l-lg text-xs text-navy-800">+91</span>
                    <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="w-full px-3 py-2 bg-sapphire-light/40 border border-navy-900/15 rounded-r-lg text-xs focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Enter phone number" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-800 mb-0.5">Service Needed</label>
                <select required value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className="w-full px-3 py-2 bg-sapphire-light/40 border border-navy-900/15 rounded-lg text-xs focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                  <option value="">Select service</option>
                  {siteContent.services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                  {siteContent.homeServices.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-800 mb-0.5">Your Area</label>
                <input required value={form.area} onChange={(e) => setForm({...form, area: e.target.value})} className="w-full px-3 py-2 bg-sapphire-light/40 border border-navy-900/15 rounded-lg text-xs focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Thane" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-800 mb-0.5">Describe the Problem</label>
                <textarea rows={2} value={form.problem} onChange={(e) => setForm({...form, problem: e.target.value})} className="w-full px-3 py-2 bg-sapphire-light/40 border border-navy-900/15 rounded-lg text-xs focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Briefly describe your issue..." />
              </div>

              <div className="flex gap-2 pt-1">
                <button type="submit" disabled={submitting} className="flex-1 px-3 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg text-xs font-semibold hover:shadow-lg hover:shadow-primary/40 transition-shadow disabled:opacity-60">
                  {submitting ? 'Submitting...' : 'Confirm Booking'}
                </button>
                <a href={`tel:+${siteContent.phoneRaw}`} className="flex-1 px-3 py-2.5 bg-gradient-to-r from-navy-800 to-deep-navy text-white rounded-lg text-xs font-semibold text-center hover:shadow-lg hover:shadow-navy-900/30 transition-shadow">
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
