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
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Plan */}
            <Card className="flex flex-col h-full">
              <CardHeader className="flex-1">
                <div className="min-h-[2rem]">
                  <span className="text-sm font-semibold text-transparent">Most Popular</span>
                </div>
                <CardTitle className="min-h-[2rem]">Team</CardTitle>
                <CardDescription className="min-h-[3rem]">For smaller organizations</CardDescription>
                <div className="mt-4 min-h-[2.5rem]">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 min-h-[12rem]">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Core role management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Basic workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Standard support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => navigate("/start-trial")}>Get Started</Button>
              </CardFooter>
            </Card>

            {/* Business Plan */}
            <Card className="flex flex-col h-full border-blue-600">
              <CardHeader className="flex-1">
                <div className="min-h-[2rem]">
                  <span className="text-sm font-semibold text-blue-600">Most Popular</span>
                </div>
                <CardTitle className="min-h-[2rem]">Business</CardTitle>
                <CardDescription className="min-h-[3rem]">For mid-sized companies</CardDescription>
                <div className="mt-4 min-h-[2.5rem]">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 min-h-[12rem]">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Advanced workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Custom domains</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => navigate("/start-trial")}>Get Started</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col h-full">
              <CardHeader className="flex-1">
                <div className="min-h-[2rem]">
                  <span className="text-sm font-semibold text-transparent">Most Popular</span>
                </div>
                <CardTitle className="min-h-[2rem]">Enterprise</CardTitle>
                <CardDescription className="min-h-[3rem]">For large organizations</CardDescription>
                <div className="mt-4 min-h-[2.5rem]">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4 min-h-[12rem]">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Custom implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Advanced integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Custom features</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => navigate("/contact-sales")}>Contact Sales</Button>
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
            <div className="space-y-8">
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time.</p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards and wire transfers for enterprise plans.</p>
              </div>
              <div className="text-left">
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