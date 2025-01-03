import { Book, Search, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

export function Documentation() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl mb-8 text-blue-100">
              Everything you need to know about using Parrot
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                placeholder="Search documentation..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Book className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
              <p className="text-gray-600 mb-4">Learn the basics and get up and running quickly</p>
              <Button variant="link" className="p-0" onClick={() => navigate("/resources/guides")}>
                Learn more <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileText className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">API Reference</h3>
              <p className="text-gray-600 mb-4">Detailed API documentation for developers</p>
              <Button variant="link" className="p-0" onClick={() => navigate("/resources/api")}>
                View API docs <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Book className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
              <p className="text-gray-600 mb-4">Learn recommended patterns and practices</p>
              <Button variant="link" className="p-0" onClick={() => navigate("/resources/guides")}>
                Read more <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
              <div className="space-y-4">
                <a onClick={() => navigate("/products/role-manager")} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-1">Role Management</h3>
                  <p className="text-gray-600">Learn how to manage roles and permissions</p>
                </a>
                <a onClick={() => navigate("/products/task-automation")} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-1">Workflow Automation</h3>
                  <p className="text-gray-600">Create and manage automated workflows</p>
                </a>
                <a onClick={() => navigate("/products/domain-governance")} className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <h3 className="font-semibold mb-1">Data Governance</h3>
                  <p className="text-gray-600">Implement effective data governance</p>
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <div className="text-sm text-gray-500 mb-1">Yesterday</div>
                  <h3 className="font-semibold mb-1">New API Endpoints</h3>
                  <p className="text-gray-600">Added new endpoints for role management</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <div className="text-sm text-gray-500 mb-1">Last week</div>
                  <h3 className="font-semibold mb-1">Updated Workflows</h3>
                  <p className="text-gray-600">Enhanced workflow automation features</p>
                </div>
                <div className="p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <div className="text-sm text-gray-500 mb-1">2 weeks ago</div>
                  <h3 className="font-semibold mb-1">Security Updates</h3>
                  <p className="text-gray-600">Important security patches and updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}