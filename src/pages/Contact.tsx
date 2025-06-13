
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, Send, Users, Heart, ArrowRight, Play, CreditCard, MessageCircle, Headphones, CheckCircle, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Pricing</Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-orange-200 text-orange-600 text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                We're here to help
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Let's Build</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text">
                  Something Amazing
                </span>
                <br />
                <span className="text-gray-900">Together</span>
              </h1>

              {/* Subheadline */}
              <p className="text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
                Ready to transform your infrastructure? We're not just another tech company — we're your cloud partners who actually care about your success.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-12">
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-md">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">24h Response</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-md">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-md">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">No Sales Pressure</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Conversation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>

            {/* 3D Illustration Space */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Card */}
                <div className="w-[400px] h-[400px] bg-gradient-to-br from-white via-orange-50 to-purple-50 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                      <MessageCircle className="w-16 h-16 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">3D Illustration Space</h3>
                    <p className="text-gray-600">Friendly team ready to help</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-lg transform rotate-12 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl shadow-lg transform -rotate-12 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg shadow-lg transform rotate-45 animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Get You to the Right Team</h2>
            <p className="text-xl text-gray-600">We reply in under 24 hours — usually much faster.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Send us a message</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you quickly with personalized recommendations.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-gray-900 font-medium mb-2 block">Full Name</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg h-12"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-medium mb-2 block">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg h-12"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900 font-medium mb-2 block">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg h-12"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiryType" className="text-gray-900 font-medium mb-2 block">What can we help you with?</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger className="border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg h-12">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="training-labs">I want to explore Training Labs</SelectItem>
                      <SelectItem value="cloud-desktops">I'm interested in Cloud Desktops (DaaS)</SelectItem>
                      <SelectItem value="vps">I'm looking for high-performance VPS</SelectItem>
                      <SelectItem value="custom-pricing">I need custom pricing for a project</SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-900 font-medium mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
                    placeholder="Tell us about your project, team size, or any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information & Benefits */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Or reach out directly</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Sales & General Inquiries</h4>
                      <p className="text-orange-600 font-medium">hello@cloudadda.in</p>
                      <p className="text-gray-600 text-sm">Get personalized solutions and pricing</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Technical Support</h4>
                      <p className="text-purple-600 font-medium">support@cloudadda.in</p>
                      <p className="text-gray-600 text-sm">Fast, human help — no ticket black hole</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone & WhatsApp</h4>
                      <p className="text-green-600 font-medium">+91-XXXXXXXXXX</p>
                      <p className="text-gray-600 text-sm">Mon–Sat, 10 AM to 7 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why choose CloudAdda?</h3>
                <div className="space-y-4">
                  {[
                    { icon: Zap, title: "Lightning Fast Setup", description: "Get your infrastructure running in minutes, not days" },
                    { icon: Shield, title: "Enterprise Security", description: "Bank-grade security with 99.9% uptime guarantee" },
                    { icon: Star, title: "Expert Support", description: "Real humans who actually understand your challenges" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Human-first approach
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Human. Helpful. Here for You.</h2>
              <p className="text-xl text-gray-600 mb-6">
                We believe support should feel like a team extension — not a hassle.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                So go ahead, ask us the big stuff or the small stuff.
              </p>
              <p className="text-lg text-gray-900 font-semibold mb-8">
                There's no such thing as a stupid question. Only slow support. And we don't do slow.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-1">&lt;24h</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-purple-50 to-orange-50 rounded-3xl flex items-center justify-center border border-gray-100 shadow-lg">
                <div className="text-center text-gray-600">
                  <Users className="w-32 h-32 mx-auto mb-6 text-purple-600" />
                  <p className="text-lg font-medium">3D Illustration Space</p>
                  <p className="text-sm text-gray-500">Diverse team helping customers succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Not Ready Yet?</h2>
            <p className="text-xl text-gray-600">No worries. You can:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl text-gray-900">Schedule a Demo Call</CardTitle>
                <CardDescription className="text-gray-600">See CloudAdda in action with a personalized demo</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">Watch Product Demo</CardTitle>
                <CardDescription className="text-gray-600">See how CloudAdda can transform your workflow</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                  View Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl text-gray-900">Explore Pricing</CardTitle>
                <CardDescription className="text-gray-600">Find the perfect plan for your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/pricing">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg">
                    View Pricing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Proudly Built in India. Trusted Everywhere.</h3>
          <p className="text-lg text-gray-600">
            From Bangalore to Dubai, from solo devs to 500-seat enterprises — CloudAdda powers teams across Asia, the Middle East, and beyond.
          </p>
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

export default Contact;
