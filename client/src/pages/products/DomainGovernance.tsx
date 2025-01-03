import { ChevronRight, Database, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function DomainGovernance() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Domain-Driven Governance Platform</h1>
            <p className="text-xl mb-8 text-blue-100">
              Drive better data decisions with clear ownership and standardized governance across your organization.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => navigate("/start-trial")}
            >
              Start Free Trial 
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Domain-Driven Data Organization</h2>
              <p className="text-gray-600">
                Structure your data domains with clear ownership, standards and policies for more effective governance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Define clear domain boundaries & ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Set & enforce governance policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Manage domain data lifecycles</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Organizational Clarity</h4>
                    <p className="text-gray-600">Clear domain boundaries and ownership</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Standardized Governance</h4>
                    <p className="text-gray-600">Consistent policies across domains</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lifecycle Management</h4>
                    <p className="text-gray-600">Streamlined domain data management</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to improve your data governance?</h2>
            <p className="text-gray-600 mb-8">
              Join leading organizations using Parrot to implement effective domain-driven governance.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/start-trial")}>Start Free Trial</Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/watch-demo")}>
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}