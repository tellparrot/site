import { LifeBuoy, MessageSquare, BookOpen, Users, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/hooks/useToast"
import { useState, useEffect, useRef } from 'react'

export function Support() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast({
        title: "Success",
        description: "Your message has been sent. We'll get back to you shortly.",
      })
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
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">How can we help?</h1>
            <p className="text-xl mb-8 text-blue-100">
              Get the support you need to succeed with Parrot
            </p>
            <div className="max-w-xl mx-auto">
              <Input
                id="heroSearch"
                name="heroSearch"
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60"
                placeholder="Search our knowledge base..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-8">
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate("/resources/documentation")}>Visit Help Center</Button>
              <Button onClick={() => navigate("/company/contact")}>Contact Us</Button>
              <Button onClick={() => navigate("/resources/community")}>Join Community</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Tickets Section */}
      <div className="mt-8 space-y-4">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold">Support Tickets</h2>
            <p className="text-gray-600 mt-2 mb-6">Need help? Create a support ticket and our team will assist you.</p>
            <Button onClick={() => navigate("/resources/support/tickets")}>View Support Tickets</Button>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" name="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" placeholder="Tell us more about your issue..." className="h-32" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}