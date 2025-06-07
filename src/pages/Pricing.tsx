
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Users, Shield, ArrowRight, Sparkles, Crown } from "lucide-react";
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
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Choose Your
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Perfect Plan</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Start free, scale infinitely. No hidden fees, no surprises. Just powerful infrastructure that grows with you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, label: "99.9% Uptime SLA", value: "Guaranteed" },
              { icon: Users, label: "Happy Customers", value: "10,000+" },
              { icon: Star, label: "Customer Rating", value: "4.9/5" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plans That Scale With You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startups to enterprises, we have the perfect plan for your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Starter",
                price: "₹999",
                period: "/month",
                description: "Perfect for individuals and small teams",
                features: [
                  "5 Training Labs",
                  "Basic Virtual Desktops",
                  "Email Support",
                  "99.9% Uptime",
                  "Basic Monitoring",
                  "Community Access"
                ],
                popular: false,
                color: "from-blue-500 to-purple-500",
                buttonText: "Start Free Trial"
              },
              {
                name: "Professional",
                price: "₹2,999",
                period: "/month",
                description: "For growing teams and businesses",
                features: [
                  "25 Training Labs",
                  "Advanced Virtual Desktops",
                  "Priority Support",
                  "99.9% Uptime SLA",
                  "Advanced Monitoring",
                  "Custom Integrations",
                  "Team Management",
                  "API Access"
                ],
                popular: true,
                color: "from-orange-500 to-pink-500",
                buttonText: "Start Professional"
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "pricing",
                description: "For large organizations with specific needs",
                features: [
                  "Unlimited Labs",
                  "Enterprise Virtual Desktops",
                  "24/7 Dedicated Support",
                  "99.99% Uptime SLA",
                  "White-label Solutions",
                  "On-premise Deployment",
                  "Custom Development",
                  "Dedicated Account Manager"
                ],
                popular: false,
                color: "from-purple-600 to-indigo-600",
                buttonText: "Contact Sales"
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-4 ring-orange-400 shadow-2xl' : 'hover:shadow-xl'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className={`bg-gradient-to-r ${plan.color} text-white text-center py-3 px-4`}>
                      <div className="flex items-center justify-center space-x-2">
                        <Crown className="w-5 h-5" />
                        <span className="font-semibold">Most Popular</span>
                      </div>
                    </div>
                  </div>
                )}
                <CardHeader className={`${plan.popular ? 'pt-16' : 'pt-8'} pb-4`}>
                  <div className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 mb-6">{plan.description}</CardDescription>
                    <div className="flex items-end justify-center space-x-1">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 pb-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white` : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                    size="lg"
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Try CloudAdda risk-free. If you're not completely satisfied within 30 days, we'll refund your money, no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing."
              },
              {
                question: "Is there a free trial?",
                answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, UPI, net banking, and can arrange invoicing for enterprise customers."
              },
              {
                question: "Do you offer discounts?",
                answer: "Yes! We offer discounts for annual billing, non-profits, and educational institutions. Contact us for details."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies already using CloudAdda to power their infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Talk to Sales
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
