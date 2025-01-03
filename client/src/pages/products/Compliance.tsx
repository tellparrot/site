import { Shield, FileText, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Compliance() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Compliance Management</h1>
            <p className="text-xl mb-8 text-blue-100">
              Stay compliant with automated documentation and continuous monitoring
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
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Automated Compliance</h2>
              <p className="text-gray-600">
                Streamline your compliance processes with automated documentation and monitoring
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Automated compliance documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Real-time monitoring and alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Compliance reporting and analytics</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Documentation</h4>
                    <p className="text-gray-600">Automated compliance documentation</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Monitoring</h4>
                    <p className="text-gray-600">Continuous compliance monitoring</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reporting</h4>
                    <p className="text-gray-600">Comprehensive compliance reports</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your compliance?</h2>
            <p className="text-gray-600 mb-8">
              Join leading organizations using Parrot for efficient compliance management
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