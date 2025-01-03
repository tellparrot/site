import { GraduationCap, PlayCircle, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Training() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Training & Certification</h1>
            <p className="text-xl mb-8 text-blue-100">
              Master Parrot with our comprehensive training programs
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => navigate("/get-started")}
            >
              Start Learning
            </Button>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Beginner Courses</h3>
              <p className="text-gray-600 mb-4">Start your journey with Parrot fundamentals</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/get-started")}
              >
                View Courses
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PlayCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Advanced Training</h3>
              <p className="text-gray-600 mb-4">Deep dive into advanced features and best practices</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/get-started")}
              >
                View Courses
              </Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Certification</h3>
              <p className="text-gray-600 mb-4">Get certified and validate your expertise</p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate("/get-started")}
              >
                View Certifications
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold mb-1">Role Management Fundamentals</h3>
                  <p className="text-gray-600">Learn the basics of role management</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Beginner</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">4 hours</span>
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate("/get-started")}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold mb-1">Advanced Workflow Automation</h3>
                  <p className="text-gray-600">Master workflow automation techniques</p>
                </div>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Advanced</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">6 hours</span>
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => navigate("/get-started")}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Paths */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Certification Paths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Parrot Administrator</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Role Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Basic Workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Platform Security</span>
                </li>
              </ul>
              <Button
                className="w-full"
                onClick={() => navigate("/get-started")}
              >
                Get Started
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Workflow Specialist</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Advanced Workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Process Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Integration Patterns</span>
                </li>
              </ul>
              <Button
                className="w-full"
                onClick={() => navigate("/get-started")}
              >
                Get Started
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Security Expert</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Security Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Compliance Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Risk Assessment</span>
                </li>
              </ul>
              <Button
                className="w-full"
                onClick={() => navigate("/get-started")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}