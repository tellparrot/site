import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Users, Mail, Phone, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/useToast"

export function ContactSales() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    console.log('Form fields configuration:', {
      companyName: document.getElementById('company')?.getAttribute('autocomplete'),
      userName: document.getElementById('name')?.getAttribute('autocomplete'),
      email: document.getElementById('email')?.getAttribute('autocomplete'),
      phone: document.getElementById('phone')?.getAttribute('autocomplete')
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Success",
        description: "Your message has been sent. Our team will contact you soon.",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contact Sales</h1>
            <p className="text-xl mb-8 text-blue-100">
              Get in touch with our sales team to learn more about Parrot's enterprise solutions
            </p>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Parrot Enterprise?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Custom Implementation</h3>
                    <p className="text-gray-600">Tailored solutions for your organization's unique needs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Enterprise Support</h3>
                    <p className="text-gray-600">24/7 dedicated support and account management</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Advanced Features</h3>
                    <p className="text-gray-600">Access to enterprise-grade features and integrations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Contact Our Sales Team</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input id="company" name="company" placeholder="Enter your company name" className="pl-10" required autoComplete="organization" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input id="name" name="name" placeholder="Enter your full name" className="pl-10" required autoComplete="name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input id="email" name="email" type="email" placeholder="Enter your work email" className="pl-10" required autoComplete="email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" className="pl-10" required autoComplete="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}