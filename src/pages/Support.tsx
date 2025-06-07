
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Phone, Mail, Clock, Search, BookOpen, Users, Zap, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Support That Actually
            <br />
            <span className="text-purple-600">Helps</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Real engineers, not bots. Fast responses, not endless tickets. Solutions that work, not generic suggestions.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for help..."
                className="pl-12 py-4 text-lg rounded-full border-2 border-purple-200 focus:border-purple-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, stat: "< 2hrs", label: "Average Response" },
              { icon: Users, stat: "24/7", label: "Human Engineers" },
              { icon: CheckCircle, stat: "99.9%", label: "Issue Resolution" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Support Channel</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Instant help for quick questions",
                availability: "24/7 Available",
                responseTime: "< 5 minutes",
                bestFor: "Quick questions, account issues",
                color: "bg-blue-500",
                badge: "Fastest"
              },
              {
                icon: Phone,
                title: "Emergency Hotline",
                description: "Critical infrastructure issues",
                availability: "24/7 Emergency Line",
                responseTime: "Immediate",
                bestFor: "Production outages, critical issues",
                color: "bg-red-500",
                badge: "Critical"
              },
              {
                icon: Mail,
                title: "Technical Support",
                description: "Detailed technical assistance",
                availability: "Business Hours",
                responseTime: "< 2 hours",
                bestFor: "Complex configurations, integrations",
                color: "bg-purple-500",
                badge: "Detailed"
              }
            ].map((channel, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${channel.color} rounded-xl flex items-center justify-center`}>
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary">{channel.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <CardDescription>{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Availability:</span>
                      <span className="text-sm font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Response:</span>
                      <span className="text-sm font-medium">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Best for:</span>
                      <span className="text-sm font-medium">{channel.bestFor}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Status Banner */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-green-800">All Systems Operational</span>
            </div>
            <p className="text-green-700">
              All CloudAdda services are running smoothly. Check our <a href="#" className="underline">status page</a> for real-time updates.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Help Resources</h2>
            <p className="text-xl text-gray-600">Find answers to common questions and learn best practices</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: "Documentation",
                description: "Comprehensive guides and API references",
                items: ["Getting Started Guide", "API Documentation", "Best Practices", "Troubleshooting"]
              },
              {
                icon: Users,
                title: "Community Forum",
                description: "Connect with other CloudAdda users",
                items: ["User Discussions", "Feature Requests", "Tips & Tricks", "Success Stories"]
              },
              {
                icon: Zap,
                title: "Video Tutorials",
                description: "Step-by-step video guides",
                items: ["Setup Tutorials", "Advanced Features", "Integration Guides", "Webinar Recordings"]
              }
            ].map((resource, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full mt-4">
                    Explore {resource.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How quickly do you respond to support tickets?",
                answer: "We respond to all support tickets within 2 hours during business hours. For emergency issues, we have a 24/7 hotline with immediate response. Live chat is available 24/7 with responses typically within 5 minutes."
              },
              {
                question: "What's included in your support coverage?",
                answer: "Our support covers all aspects of our platform including setup assistance, troubleshooting, performance optimization, integration help, and best practices guidance. We also provide proactive monitoring and alerts for your infrastructure."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes! We have a dedicated emergency hotline for critical issues that's available 24/7. For non-emergency technical discussions, we can schedule phone calls during business hours."
              },
              {
                question: "Can you help with custom configurations and integrations?",
                answer: "Absolutely! Our engineering team specializes in custom setups and can help integrate CloudAdda with your existing tools and workflows. We also offer professional services for complex implementations."
              },
              {
                question: "What if I need help outside of business hours?",
                answer: "We have 24/7 live chat support and an emergency hotline for critical issues. Our global team ensures someone is always available to help, regardless of your timezone."
              },
              {
                question: "Do you provide training for new users?",
                answer: "Yes! We offer comprehensive onboarding sessions, video tutorials, documentation, and can arrange custom training sessions for your team. Our goal is to make sure you're successful from day one."
              },
              {
                question: "How do you handle security-related support requests?",
                answer: "Security issues are treated with the highest priority. We have dedicated security engineers available 24/7 and follow strict protocols for handling security-related inquiries with complete confidentiality."
              },
              {
                question: "Can you help migrate from our current provider?",
                answer: "Yes! We provide comprehensive migration assistance including planning, execution, and validation. Our team will work with you to ensure a smooth transition with minimal downtime."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Support Promise */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Support Promise</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">What We Guarantee</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Real engineers, not bots</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>< 2 hour response time SLA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>24/7 emergency support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Proactive monitoring and alerts</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
              <p className="text-left">
                Your success is our success. We don't just provide infrastructure—we become your trusted partner. 
                Every support interaction is an opportunity to help you achieve your goals faster and more efficiently.
              </p>
            </div>
          </div>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Experience Our Support
          </Button>
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

export default Support;
