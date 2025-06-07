
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Star, Shield, Zap, Users, Globe, HeartHandshake, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="text-purple-600">Transparent Pricing.</span>
            <br />
            No Hidden Gotchas. Ever.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choose the plan that fits your needs. All plans include 24/7 support, 99.9% uptime SLA, and our commitment to your success.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Training Labs */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-purple-200">
                <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Labs</h3>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900">Custom Quote</div>
                      <div className="text-gray-600 text-lg">Based on your exact requirements</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                    We ask 3-5 questions about your training needs, then deliver a complete lab environment.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Same-day delivery possible",
                      "Fully customized environments",
                      "Windows, Linux, or mixed stacks",
                      "Scalable to any number of users",
                      "24/7 monitoring and support",
                      "Pre-configured tools and software"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Virtual Desktops */}
            <div className="group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-200">
                <div className="h-3 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <div className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Desktops</h3>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900">₹3,299</div>
                      <div className="text-gray-600 text-lg">per user/month</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                    High-performance cloud desktops with 2vCPU, 4GB RAM, and enterprise-grade security.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "2vCPU, 4GB RAM, SSD storage",
                      "99.9% uptime guarantee",
                      "Built-in security & compliance",
                      "Instant scaling",
                      "Multi-device access",
                      "Automated backups"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                    Launch Desktop
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* VPS Hosting */}
            <div className="group relative">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-purple-200">
                <div className="h-3 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <div className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">VPS Hosting</h3>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900">₹1,499</div>
                      <div className="text-gray-600 text-lg">per month</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">
                    NVMe-powered virtual servers with AMD EPYC processors and dedicated resources.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "NVMe SSD storage",
                      "AMD EPYC processors",
                      "Full root access",
                      "Multiple data center locations",
                      "DDoS protection included",
                      "Weekly automated backups"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                    Get VPS Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "99.9%", label: "Uptime SLA", icon: Shield },
              { number: "24/7", label: "Human Support", icon: Users },
              { number: "< 2hrs", label: "Setup Time", icon: Zap },
              { number: "500+", label: "Happy Clients", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                question: "Can I customize my plan based on specific requirements?",
                answer: "Absolutely! We specialize in custom solutions. Contact our team to discuss your specific needs and get a tailored quote."
              },
              {
                question: "What's included in the 24/7 support?",
                answer: "Real engineers, not bots. Emergency hotline, live chat, and email support with <2 hour average response time."
              },
              {
                question: "Do you offer trial periods?",
                answer: "Yes! We offer demo sessions and trial periods for all our services. Contact us to schedule your personalized demo."
              },
              {
                question: "What about data security and compliance?",
                answer: "Enterprise-grade security with ISO 27001 compliance, encrypted data transfer, and secure data centers in multiple locations."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join 500+ companies who've made the smart switch to CloudAdda.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full">
              Start Your Trial
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

export default Pricing;
