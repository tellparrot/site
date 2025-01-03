import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, PlayCircle, Users, Mail } from "lucide-react"
import { useToast } from "@/hooks/useToast"

export function WatchDemo() {
  const [showSchedule, setShowSchedule] = useState(false)
  const { toast } = useToast()

  const handleScheduleDemo = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Success",
        description: "Your demo has been scheduled. Check your email for confirmation.",
      })
      setShowSchedule(false)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Watch a Demo</h1>
            <p className="text-xl mb-8 text-blue-100">
              See how Parrot can transform your role management and governance
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Video Section */}
            <div>
              <div className="bg-gray-900 aspect-video rounded-xl flex items-center justify-center mb-6">
                <PlayCircle className="w-16 h-16 text-white opacity-80" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
              <p className="text-gray-600 mb-6">
                Watch our 5-minute overview to see how Parrot can help streamline your role management and governance processes.
              </p>
              <Button variant="outline" className="w-full" onClick={() => setShowSchedule(true)}>
                Schedule Live Demo
              </Button>
            </div>

            {/* Schedule Form */}
            {showSchedule && (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-6">Schedule a Live Demo</h3>
                <form onSubmit={handleScheduleDemo} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="name" placeholder="Enter your full name" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="email" type="email" placeholder="Enter your work email" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="date" type="date" className="pl-10" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input id="time" type="time" className="pl-10" required />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">Schedule Demo</Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}