import { Building2, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const CASE_STUDIES = [
  {
    id: 1,
    company: "Global Tech Corp",
    industry: "Technology", 
    challenge: "Managing roles across 10,000+ employees",
    solution: "Implemented automated role management system",
    results: "70% reduction in role assignment time",
    logo: "https://source.unsplash.com/200x200/?tech,1",
  },
  {
    id: 2,
    company: "FinServe Solutions",
    industry: "Financial Services",
    challenge: "Compliance with regulatory requirements",
    solution: "Deployed comprehensive governance framework",
    results: "100% compliance achievement",
    logo: "https://source.unsplash.com/200x200/?finance,1",
  },
  {
    id: 3,
    company: "HealthCare Plus",
    industry: "Healthcare",
    challenge: "Complex approval workflows",
    solution: "Streamlined task automation platform",
    results: "85% faster approval process",
    logo: "https://source.unsplash.com/200x200/?health,1",
  },
]

export function CaseStudies() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Customer Success Stories</h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover how leading organizations achieve success with Parrot
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{study.company}</h3>
                      <p className="text-gray-600">{study.industry}</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <p className="text-gray-600">{study.results}</p>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => navigate(`/case-studies/${study.id}`)}>
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to achieve similar results?</h2>
            <p className="text-gray-600 mb-8">
              Join these successful organizations in transforming your role management and governance
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/start-trial")}>Start Free Trial</Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/contact-sales")}>
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}