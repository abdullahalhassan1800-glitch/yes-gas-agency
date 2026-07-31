import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-deep-navy via-navy-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Manoj Gas Fix" className="h-10 w-auto" />
              <div>
                <div className="text-lg font-bold leading-tight">Manoj Gas</div>
                <div className="text-[10px] font-medium text-primary uppercase tracking-widest leading-tight">Fix</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delhi's most trusted gas stove repair service. Certified technicians, same-day service, 30-day warranty.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              {siteContent.nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-primary text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Services</h3>
            <ul className="space-y-2">
              {siteContent.services.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>{siteContent.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href={`tel:+${siteContent.phoneRaw}`} className="hover:text-primary">{siteContent.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href={`mailto:${siteContent.email}`} className="hover:text-primary">{siteContent.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex items-center justify-center">
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Manoj Gas Fix Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
