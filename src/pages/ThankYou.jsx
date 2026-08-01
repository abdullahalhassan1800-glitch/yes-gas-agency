import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

export default function ThankYou() {
  const location = useLocation()
  const data = location.state || {}

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Thank You for Your Enquiry!</h1>
        <p className="text-gray-600 mb-4">Your request has been submitted. Our team will contact you soon.</p>
        {data.name && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6 text-left text-sm">
            <div className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">Enquiry Summary</div>
            <div className="space-y-1.5">
              <div><span className="text-gray-500">Name:</span> <span className="font-medium text-gray-900">{data.name}</span></div>
              {data.phone && <div><span className="text-gray-500">Phone:</span> <span className="font-medium text-gray-900">+91 {data.phone}</span></div>}
              {data.service && <div><span className="text-gray-500">Service:</span> <span className="font-medium text-gray-900">{data.service}</span></div>}
              {data.area && <div><span className="text-gray-500">Area:</span> <span className="font-medium text-gray-900">{data.area}</span></div>}
            </div>
          </div>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`https://wa.me/${siteContent.phoneRaw}?text=Hi! I just submitted a service enquiry.`} className="px-8 py-3 bg-gradient-to-r from-emerald to-emerald-dark text-white rounded-full text-base font-semibold hover:shadow-lg transition-shadow">
            WhatsApp Us
          </a>
          <a href={`tel:+${siteContent.phoneRaw}`} className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-base font-semibold hover:shadow-lg transition-shadow">
            Call Us Now
          </a>
          <Link to="/" className="px-8 py-3 bg-gray-100 text-gray-800 rounded-full text-base font-semibold hover:bg-gray-200 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
