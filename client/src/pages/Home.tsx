import { ChevronRight, ArrowRight, Shield, Users, Database, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Streamline Role Management & Data Governance
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Automate role assignments, maintain governance standards, and ensure compliance with Parrot's unified platform.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => navigate("/start-trial")}
              >
                Start free trial
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => navigate("/watch-demo")}
              >
                Watch demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Simplify Role Management</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Streamline role assignments and approvals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Track role lifecycles from request to retirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Maintain clear ownership and accountability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Domain-Driven Governance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Organize data domains with clear ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Define governance standards and policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Manage data products within domains</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Workflows</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Create structured approval processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Track task progress and completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Maintain audit trails automatically</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Discover Parrot's Core Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage roles, automate governance, and maintain compliance in one unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Role Management</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Role assignment workflows
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  User onboarding automation
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Role review and attestation
                </li>
              </ul>
              <Button
                variant="link"
                className="p-0 text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                onClick={() => navigate("/products/role-manager")}
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Task Management</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Automated workflow creation
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Multi-step approval processes
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Progress monitoring
                </li>
              </ul>
              <Button
                variant="link"
                className="p-0 text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                onClick={() => navigate("/products/task-automation")}
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-blue-100 mb-8">
              Join leading organizations using Parrot to streamline their role management and governance processes.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => navigate("/start-trial")}
              >
                Start free trial
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => navigate("/contact-sales")}
              >
                Contact sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}