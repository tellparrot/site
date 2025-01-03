import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

export function Pricing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl mb-8 text-blue-100">
              Choose the plan that best fits your organization's needs
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Plan */}
            <Card>
              <CardHeader>
                <div className="min-h-[2rem]">
                  <span className="text-sm font-semibold text-transparent">Popular</span>
                </div>
                <CardTitle>Team</CardTitle>
                <CardDescription>For small teams starting out</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Up to 10 users
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Basic role management
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Standard support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => navigate("/start-trial")}>
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            {/* Business Plan */}
            <Card className="border-blue-600">
              <CardHeader>
                <div className="min-h-[2rem]">
                  <span className="text-sm font-semibold text-blue-600">Most Popular</span>
                </div>
                <CardTitle>Business</CardTitle>
                <CardDescription>For growing organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Up to 50 users
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Advanced workflows
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Advanced analytics
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => navigate("/start-trial")}>
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card>
              <CardHeader>
                <div className="min-h-[2rem]">
                  <span className="text-sm font-semibold text-transparent">Popular</span>
                </div>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Custom implementation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    Custom features
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => navigate("/contact-sales")}>
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8 text-left">
              <div>
                <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards and wire transfers for enterprise plans.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes, all plans come with a 14-day free trial.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}