import { Calendar, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const BLOG_POSTS = [
  {
    id: 1,
    title: "Revolutionizing Role Management in the Modern Enterprise",
    excerpt: "Learn how modern organizations are transforming their role management processes...",
    author: "John Smith",
    date: "2024-03-15",
    category: "Role Management",
    image: "/images/blog/role-management.jpg",
  },
  {
    id: 2,
    title: "The Future of Data Governance",
    excerpt: "Exploring emerging trends in data governance and compliance...",
    author: "Sarah Johnson",
    date: "2024-03-10",
    category: "Data Governance",
    image: "/images/blog/data-governance.jpg",
  },
  {
    id: 3,
    title: "Automating Workflow Management",
    excerpt: "Best practices for implementing automated workflow processes...",
    author: "Michael Brown",
    date: "2024-03-05",
    category: "Automation",
    image: "/images/blog/workflow-automation.jpg",
  },
]

export function Blog() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Parrot Blog</h1>
            <p className="text-xl mb-8 text-blue-100">
              Insights and updates from our team
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src="/images/blog/featured-post.jpg"
              alt="Featured post"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  Featured
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  March 20, 2024
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  John Smith
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                The Evolution of Role Management and Data Governance
              </h2>
              <p className="text-gray-600 mb-6">
                Explore how role management and data governance have evolved in the modern enterprise landscape, and discover the latest trends shaping the future of these critical functions.
              </p>
              <Button onClick={() => navigate("/company/blog/featured")}>
                Read More
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}