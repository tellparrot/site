import { Briefcase, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "London, UK",
    type: "Full-time",
  },
]

export function Careers() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl mb-8 text-blue-100">
              Help us revolutionize role management and data governance
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => {
                document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join Parrot?</h2>
            <p className="text-gray-600">
              Join a team of passionate individuals working to solve complex challenges in role management and data governance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-8 h-8 text-blue-600" />,
                title: "Challenging Work",
                description: "Work on complex problems that matter",
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-600" />,
                title: "Work-Life Balance",
                description: "Flexible working hours and remote options",
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-600" />,
                title: "Global Impact",
                description: "Make a difference at a global scale",
              },
            ].map((perk) => (
              <div key={perk.title} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{perk.title}</h3>
                <p className="text-gray-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div id="open-positions" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Open Positions</h2>
          <div className="space-y-6">
            {JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button onClick={() => navigate("/get-started")}>
                  Apply Now
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}