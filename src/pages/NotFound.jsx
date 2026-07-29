import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-base font-semibold">
            Go to Homepage
          </Link>
          <a href={`tel:+${siteContent.phoneRaw}`} className="px-8 py-3 bg-gray-100 text-gray-800 rounded-full text-base font-semibold hover:bg-gray-200">
            Call Us
          </a>
        </div>
      </div>
    </div>
  )
}
