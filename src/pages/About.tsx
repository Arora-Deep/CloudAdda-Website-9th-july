
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Globe, Award, Heart, Target, Zap, Shield, Rocket, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Born in India,
              <br />
              <span className="text-purple-600">Built for the World</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another cloud company. We're the infrastructure partner that actually understands what businesses need to succeed in the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Global Customers", icon: Users },
              { number: "99.9%", label: "Uptime SLA", icon: Shield },
              { number: "24/7", label: "Human Support", icon: Heart }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  CloudAdda was born from frustration. Our founders, seasoned engineers and entrepreneurs, 
                  were tired of fighting with overcomplicated cloud platforms that promised simplicity but 
                  delivered chaos.
                </p>
                <p>
                  <strong>The problem was clear:</strong> Businesses needed reliable infrastructure, 
                  not another dashboard to babysit. They needed solutions that worked, not platforms 
                  that required a PhD to operate.
                </p>
                <p>
                  So we built CloudAdda differently. We focus on three things: Training Labs that deploy 
                  in minutes, Virtual Desktops that scale effortlessly, and VPS hosting that just works. 
                  All backed by support from real engineers who actually care about your success.
                </p>
                <p>
                  <strong>Today,</strong> we're proud to serve 500+ companies worldwide, from startups 
                  in Bangalore to enterprises in Silicon Valley. But our mission remains the same: 
                  make infrastructure invisible so you can focus on what matters.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8">
              <img 
                src="/lovable-uploads/f690fdec-4d37-4062-af23-158e9b86a21e.png" 
                alt="Professional team illustration" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by these core principles that shape how we build products and serve customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: "Customer Success First",
                description: "Your success is our success. We measure ourselves not by features shipped, but by problems solved and goals achieved."
              },
              {
                icon: Heart,
                title: "Human-Centered Support",
                description: "Real engineers, real conversations, real solutions. No bots, no scripts, no 'please restart your computer' responses."
              },
              {
                icon: Zap,
                title: "Simplicity by Design",
                description: "Complex infrastructure should have simple interfaces. We believe powerful doesn't have to mean complicated."
              },
              {
                icon: Shield,
                title: "Reliability Above All",
                description: "Your business depends on us, so we never compromise on uptime, performance, or security. 99.9% isn't just a number—it's a promise."
              },
              {
                icon: Globe,
                title: "Global Scale, Personal Touch",
                description: "Whether you're our first customer or our thousandth, you get the same level of attention and care."
              },
              {
                icon: Rocket,
                title: "Innovation with Purpose",
                description: "We innovate to solve real problems, not just to add features. Every update makes your life easier."
              }
            ].map((value, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-purple-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              To make world-class infrastructure accessible to every business, from the smallest startup 
              to the largest enterprise. We believe that great technology should empower people, not overwhelm them.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experienced leaders driving CloudAdda's vision forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                title: "CEO & Co-Founder",
                bio: "15+ years in cloud infrastructure. Former engineering leader at top tech companies. Passionate about making complex technology simple.",
                image: "/placeholder.svg"
              },
              {
                name: "Priya Sharma",
                title: "CTO & Co-Founder",
                bio: "Former lead architect at major cloud providers. Expert in scalable systems and enterprise infrastructure. Drives our technical excellence.",
                image: "/placeholder.svg"
              },
              {
                name: "Michael Chen",
                title: "VP of Customer Success",
                bio: "10+ years helping businesses succeed with cloud adoption. Previously at leading SaaS companies. Champions customer-first culture.",
                image: "/placeholder.svg"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-semibold">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We're Different</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Engineering Excellence",
                    description: "We hire the best engineers and give them the freedom to build amazing things. Quality code, robust architecture, and thoughtful design are non-negotiable."
                  },
                  {
                    title: "Customer Obsession",
                    description: "Every decision starts with: 'How does this help our customers?' We're not building features—we're solving problems that matter."
                  },
                  {
                    title: "Transparency Always",
                    description: "No hidden fees, no surprise bills, no complex pricing. We believe honest business practices build lasting relationships."
                  },
                  {
                    title: "Global, Remote-First",
                    description: "Our team spans continents but shares one vision. Remote work isn't just our policy—it's proof that great technology connects people."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { stat: "2020", label: "Founded" },
                  { stat: "50+", label: "Team Members" },
                  { stat: "12", label: "Countries Served" },
                  { stat: "99.9%", label: "Customer Satisfaction" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{item.stat}</div>
                    <div className="text-gray-600 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it—hear from the companies that trust CloudAdda.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                quote: "CloudAdda transformed our training business. What used to take days now takes hours. Our students are happier, our trainers are less stressed, and our business is growing faster than ever.",
                author: "Sarah Johnson",
                title: "CEO, TechEd Solutions",
                rating: 5
              },
              {
                quote: "Finally, a cloud provider that understands what we actually need. No complexity, no surprises, just infrastructure that works. Their support team feels like an extension of our own team.",
                author: "Marcus Rodriguez",
                title: "CTO, DevCorp",
                rating: 5
              },
              {
                quote: "We switched from AWS to CloudAdda and never looked back. Better performance, clearer pricing, and support that actually helps. It's been transformational for our operations.",
                author: "Amanda Chen",
                title: "Head of Infrastructure, StartupXYZ",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the CloudAdda Difference?</h2>
          <p className="text-xl mb-8">
            Join the 500+ companies that have made the smart switch to infrastructure that just works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-2 border-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </Link>
              <p className="text-gray-400">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-white transition-colors">Virtual Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-white transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
