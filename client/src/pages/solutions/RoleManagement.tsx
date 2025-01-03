import { ChevronRight, Users, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function RoleManagement() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Role Management Solutions</h1>
            <p className="text-xl mb-8 text-blue-100">
              Streamline your organization's role assignments and maintain clear accountability with our comprehensive role management system.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => navigate("/get-started")}
            >
              Get Started
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
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Streamlined Role Assignment</h2>
              <p className="text-gray-600">
                Automate and simplify the process of assigning roles across your organization with our intuitive workflow system.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Automated approval workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Role lifecycle tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Clear ownership model</span>
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
                    <h4 className="font-semibold mb-1">Enhanced Security</h4>
                    <p className="text-gray-600">Maintain tight control over role assignments and permissions</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Improved Efficiency</h4>
                    <p className="text-gray-600">Reduce manual work with automated workflows</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Better Compliance</h4>
                    <p className="text-gray-600">Stay compliant with automated documentation and audit trails</p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your role management?</h2>
            <p className="text-gray-600 mb-8">
              Join leading organizations using Parrot to simplify their role management processes.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/start-trial")}>
                Start Free Trial
              </Button>
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