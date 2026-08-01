import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

const steps = [
  {
    title: 'We\'ve received your request',
    desc: 'Your enquiry is in our system and a technician has been notified.',
  },
  {
    title: 'We\'ll call you shortly',
    desc: 'Expect a call within 15 minutes to confirm the details and time slot.',
  },
  {
    title: 'Technician at your door',
    desc: 'A certified, ID-verified technician reaches you in 2–4 hours.',
  },
]

export default function ThankYou() {
  const location = useLocation()
  const data = location.state || {}

  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-navy via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-emerald/15 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center relative">
          <div className="relative mx-auto w-24 h-24 mb-7">
            <div className="absolute inset-0 bg-emerald/30 rounded-full animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-emerald to-emerald-dark rounded-full flex items-center justify-center ring-4 ring-white/20 shadow-lg shadow-emerald/40">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
            Thank You{data.name ? `, ${data.name.split(' ')[0]}` : ''}! 🎉
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Your request has been received. We'll get back to you very soon.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 -mt-8 relative">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full inline-block" />
            What happens next
          </h2>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${i === steps.length - 1 ? 'bg-emerald text-white' : 'bg-primary-50 text-primary'}`}>
                    {i + 1}
                  </div>
                  {i !== steps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1" />}
                </div>
                <div className="pb-6 -mt-0.5">
                  <h3 className="font-semibold text-gray-900 text-base">{step.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry summary */}
      {data.name && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-sapphire rounded-full inline-block" />
              Enquiry Summary
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Name', value: data.name, icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { label: 'Phone', value: data.phone ? `+91 ${data.phone}` : '', icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z' },
                { label: 'Service', value: data.service, icon: 'M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36l-2.12 2.12M7.78 16.24l-2.12 2.12m0-12.72l2.12 2.12m9.44 9.44l2.12 2.12M12 8a4 4 0 100 8 4 4 0 000-8z' },
                { label: 'Area', value: data.area, icon: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              ].filter((item) => item.value).map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                  <span className="w-9 h-9 bg-white rounded-lg flex items-center justify-center text-sapphire shadow-sm">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] text-gray-400 font-semibold uppercase tracking-wide">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-5">Need help right now? Reach us directly:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`https://wa.me/${siteContent.phoneRaw}?text=Hi! I just submitted a service enquiry.`} className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-full text-base font-semibold hover:shadow-lg hover:shadow-emerald/30 hover:scale-[1.02] transition-all inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
            <a href={`tel:+${siteContent.phoneRaw}`} className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-base font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all inline-flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Call {siteContent.phone}
            </a>
          </div>
          <Link to="/" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-sapphire hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
