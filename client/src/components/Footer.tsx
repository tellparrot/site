import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="hover:text-white">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/legal/security" className="hover:text-white">Security</Link></li>
              <li><Link to="/changelog" className="hover:text-white">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/company/about" className="hover:text-white">About</Link></li>
              <li><Link to="/company/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/company/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/company/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources/documentation" className="hover:text-white">Documentation</Link></li>
              <li><Link to="/resources/support" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/resources/guides" className="hover:text-white">Guides</Link></li>
              <li><Link to="/resources/api" className="hover:text-white">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/legal/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-white">Terms</Link></li>
              <li><Link to="/legal/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p>&copy; 2024 Parrot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}