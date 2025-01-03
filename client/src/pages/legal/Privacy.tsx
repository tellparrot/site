import { Shield, Lock, Eye } from "lucide-react"

export function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl mb-8 text-blue-100">
              How we collect, use, and protect your information
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
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Data Collection</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    We collect information that you provide directly to us, including when you create an account, use our services, or communicate with us. This may include:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>Name and contact information</li>
                    <li>Account credentials</li>
                    <li>Payment information</li>
                    <li>Usage data and preferences</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>Provide and improve our services</li>
                    <li>Personalize your experience</li>
                    <li>Communicate with you</li>
                    <li>Ensure security and prevent fraud</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Data Protection</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your information. These measures include:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training and confidentiality agreements</li>
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