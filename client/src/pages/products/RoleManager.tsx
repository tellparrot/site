import { ChevronRight, Users, Lock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function RoleManager() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Role Management Platform</h1>
            <p className="text-xl mb-8 text-blue-100">
              A comprehensive solution for managing roles, permissions, and access controls across your organization.
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
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Complete Role Management</h2>
              <p className="text-gray-600">
                Streamline your role assignment process and maintain clear accountability with our role management platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Role request workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Automated approvals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>User onboarding automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Role Reviews</h4>
                    <p className="text-gray-600">Regular role attestation and reviews</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Access Control</h4>
                    <p className="text-gray-600">Fine-grained permission management</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Audit Trails</h4>
                    <p className="text-gray-600">Complete history of role changes</p>
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
              Join leading organizations using our platform to manage roles efficiently.
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