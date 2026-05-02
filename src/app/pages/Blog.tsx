import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Motor Insurance in Kenya: A Complete Guide",
      excerpt: "Learn about the different types of motor insurance available in Kenya, what they cover, and how to choose the right one for your vehicle.",
      author: "James Muliro",
      date: "April 15, 2026",
      category: "Motor Insurance",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "5 Reasons Why Every Kenyan Needs Health Insurance",
      excerpt: "Healthcare costs are rising. Discover why having health insurance is no longer optional but essential for every Kenyan family.",
      author: "Sarah Wanjiku",
      date: "April 10, 2026",
      category: "Health Insurance",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "How to Choose the Right Life Insurance Policy",
      excerpt: "Life insurance can be confusing. This guide breaks down the different types of life insurance and helps you make an informed decision.",
      author: "Peter Omondi",
      date: "April 5, 2026",
      category: "Life Insurance",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Business Insurance: Protecting Your Kenyan SME",
      excerpt: "Small and medium enterprises face unique risks. Learn how business insurance can safeguard your operations and assets.",
      author: "Grace Njeri",
      date: "March 28, 2026",
      category: "Business Insurance",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Travel Insurance: What You Need to Know Before Your Next Trip",
      excerpt: "Planning a trip abroad? Find out what travel insurance covers and why you shouldn't leave Kenya without it.",
      author: "David Kiprotich",
      date: "March 20, 2026",
      category: "Travel Insurance",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Education Insurance: Securing Your Child's Future",
      excerpt: "Learn how education insurance plans work and why they're a smart investment in your child's academic journey.",
      author: "Mary Achieng",
      date: "March 12, 2026",
      category: "Education Plans",
      readTime: "5 min read",
    },
    {
      id: 7,
      title: "Understanding Insurance Claims: A Step-by-Step Guide",
      excerpt: "Filing an insurance claim can be stressful. This guide walks you through the process and helps you get the best outcome.",
      author: "James Muliro",
      date: "March 5, 2026",
      category: "Insurance Tips",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "10 Common Insurance Myths Debunked",
      excerpt: "Separate fact from fiction. We address the most common misconceptions about insurance in Kenya.",
      author: "Sarah Wanjiku",
      date: "February 28, 2026",
      category: "Insurance Tips",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "All",
    "Motor Insurance",
    "Health Insurance",
    "Life Insurance",
    "Business Insurance",
    "Travel Insurance",
    "Education Plans",
    "Insurance Tips",
  ];

  return (
    <div>
      <section className="brand-hero py-20">
        <div className="container mx-auto px-4">
          <div className="brand-pill mb-5">Practical insurance intelligence</div>
          <h1 className="text-4xl md:text-6xl mb-4 font-bold">Insurance Insights & Tips</h1>
          <p className="text-xl text-[#f3f2f2]/80 max-w-3xl">
            Expert advice and practical tips to help you make informed insurance decisions
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl mb-4 font-bold text-[#0d000a]">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-[#0d000a]/6 hover:bg-[#0d000a] hover:text-[#fedd00] rounded-full text-sm transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="brand-card flex flex-col hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#fedd00]/60">
                <CardHeader>
                  <div className="mb-3">
                    <span className="text-xs bg-[#0d000a] text-[#fedd00] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 text-[#0d000a]">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-[#0d000a]/64">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-[#0d000a]/56 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#0d000a]/56">{post.readTime}</span>
                    <button className="brand-link flex items-center gap-1 font-medium">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-section-soft py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4 font-bold text-[#0d000a]">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-[#0d000a]/65 mb-8 max-w-2xl mx-auto">
            Get the latest insurance tips, industry news, and special offers delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-[#0d000a]/10 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#fedd00]"
            />
            <button className="px-6 py-3 bg-[#0d000a] text-[#fedd00] rounded-full hover:opacity-92 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
