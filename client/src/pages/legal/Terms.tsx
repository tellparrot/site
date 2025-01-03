import { Scale, FileText, AlertCircle } from "lucide-react"

export function Terms() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl mb-8 text-blue-100">
              Please read these terms carefully before using our service
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Scale className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Agreement to Terms</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our service.
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Use License</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    We grant you a limited, non-exclusive, non-transferable license to:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>Access and use the service for your internal business purposes</li>
                    <li>Create and manage role assignments</li>
                    <li>Configure and maintain governance standards</li>
                    <li>Generate and export reports</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Restrictions</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    You are restricted from:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>Modifying or copying the materials</li>
                    <li>Using the materials for commercial purposes</li>
                    <li>Attempting to reverse engineer the software</li>
                    <li>Removing any copyright or proprietary notations</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}