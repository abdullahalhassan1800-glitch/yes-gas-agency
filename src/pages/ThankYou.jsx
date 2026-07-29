import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

export default function ThankYou() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-emerald-light rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Thank You for Your Enquiry!</h1>
        <p className="text-gray-600 mb-8">Your request has been submitted. Our team will contact you soon.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
