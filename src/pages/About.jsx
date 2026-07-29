import { siteContent } from '../data/content'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-navy via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Dedicated To <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Family Safety</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are {siteContent.serviceCity}'s most trusted gas service partner, serving thousands of happy families.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 z-10 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {siteContent.aboutStats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">{siteContent.serviceCity}'s Most Trusted Gas Service Partner</h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>We are Yes Gas Agency, a premier gas stove repair and service provider based in {siteContent.serviceCity}, serving customers since 2014.</p>
                <p>Our team of certified and background-verified technicians specializes in safe, reliable, and affordable solutions for all gas stove needs.</p>
                <p>We support all major brands and provide emergency service 24/7. Your safety is our top priority.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-50 rounded-3xl p-8 min-h-[300px] flex items-center justify-center">
              <div className="text-6xl">🔧</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To provide absolutely safe, zero-leak, and highly efficient gas services within 60 minutes for every household in {siteContent.serviceCity}, ensuring peace of mind at every meal.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To become the gold standard in domestic gas apparatus maintenance across India, pioneered by technology, speed, and uncompromising safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary text-xl mb-4">
                  {['🛡️', '🚚', '⏳', '🏠', '🪪', '📋'][i]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-800 via-navy-900 to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Best Gas Service?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:+${siteContent.phoneRaw}`} className="px-8 py-3.5 bg-white text-gray-900 rounded-full text-base font-semibold hover:bg-gray-100">
              Call {siteContent.phone}
            </a>
            <a href={`https://wa.me/${siteContent.phoneRaw}`} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border-2 border-white text-white rounded-full text-base font-semibold hover:bg-white/10">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
