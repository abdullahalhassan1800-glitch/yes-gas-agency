import { siteContent } from '../data/content'

export default function Pricing() {
  const openBooking = () => {
    const btn = document.querySelector('[class*="fixed"][class*="left-6"]')
    if (btn) btn.click()
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-navy via-navy-800 to-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Transparent Pricing</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No hidden fees. Quality service at fair prices.
          </p>
        </div>
      </section>

      {/* Offer Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-gold/10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-3 text-center text-sm font-semibold text-primary">
          🔥 Limited Time Offer: <span className="font-bold">25% OFF on All Services</span>
          <span className="text-primary/80 font-normal"> • Visiting Charge ₹99 Only</span>
          <button onClick={openBooking} className="ml-2 underline underline-offset-2 hover:text-primary-dark transition-colors">Book Now →</button>
        </div>
      </div>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteContent.pricingPlans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-6 border ${plan.popular ? 'border-primary shadow-lg shadow-primary/10 ring-2 ring-primary' : 'border-gray-100 shadow-sm'} hover:shadow-md transition-shadow`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mt-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mt-3">{plan.price}</div>
                <p className="text-xs text-gray-500 mt-1">{plan.desc}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={openBooking} className={`mt-6 w-full px-4 py-3 rounded-full text-sm font-semibold ${
                  plan.popular ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Complete Price Reference</h2>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">Service</th>
                  <th className="text-right px-6 py-3 font-semibold text-gray-700">Price Range</th>
                </tr>
              </thead>
              <tbody>
                {siteContent.priceTable.map((item, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3.5 text-gray-800">{item.service}</td>
                    <td className="px-6 py-3.5 text-right font-medium text-primary">{item.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Pricing FAQs</h2>
          <div className="space-y-3">
            {siteContent.pricingFaqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-sm font-semibold text-gray-900">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Need a Custom Quote?</h2>
          <a href={`tel:+${siteContent.phoneRaw}`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full text-base font-semibold hover:bg-gray-100">
            Call {siteContent.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
