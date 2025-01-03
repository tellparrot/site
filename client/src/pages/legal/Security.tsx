import { Shield, Lock, Server } from "lucide-react"

export function Security() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Security</h1>
            <p className="text-xl mb-8 text-blue-100">
              Learn about our commitment to protecting your data
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
                  <h2 className="text-2xl font-bold">Security Measures</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    We implement comprehensive security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Multi-factor authentication</li>
                    <li>Advanced threat detection and prevention</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Infrastructure Security</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    Our infrastructure is designed with security in mind:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Regular backups and disaster recovery plans</li>
                    <li>Network segmentation and firewalls</li>
                    <li>Continuous monitoring and logging</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold">Compliance</h2>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed">
                    We maintain compliance with industry standards and regulations:
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
                    <li>SOC 2 Type II certified</li>
                    <li>GDPR compliant</li>
                    <li>ISO 27001 certified</li>
                    <li>Regular compliance audits</li>
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