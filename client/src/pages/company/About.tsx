import { Building2, Users, Heart, Target } from "lucide-react"
import { useEffect } from "react"

export function About() {
  console.log("About component mounting")

  useEffect(() => {
    console.log("About component mounted")
    return () => console.log("About component unmounting")
  }, [])

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Parrot</h1>
            <p className="text-xl mb-8 text-blue-100">
              We're on a mission to revolutionize role management and data governance
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                At Parrot, we believe in simplifying complex role management and data governance processes. Our platform helps organizations maintain security, compliance, and efficiency in their operations.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Vision</h3>
                    <p className="text-gray-600">To be the leading platform for role management and data governance</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Values</h3>
                    <p className="text-gray-600">Security, Simplicity, Innovation, and Customer Success</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Founded in 2020</h3>
                <p className="text-gray-600">Started with a vision to simplify role management</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Team</h3>
                <p className="text-gray-600">Diverse team across multiple continents</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Co-founder",
                image: "/images/team/john-smith.jpg",
              },
              {
                name: "Sarah Johnson", 
                role: "CTO & Co-founder",
                image: "/images/team/sarah-johnson.jpg",
              },
              {
                name: "Michael Brown",
                role: "Head of Product",
                image: "/images/team/michael-brown.jpg", 
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}