
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Rocket, Brain, Shield, Zap, Code, BarChart3, TestTube, Play, Users, Server, Calculator, CheckCircle, AlertTriangle, Clock, TrendingUp, Award, Star, Monitor, Cloud, Lock, Globe, Gauge, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktops = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Log In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-8 shadow-sm border border-blue-200">
                <Monitor className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-600">High-Performance Cloud Desktops</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                The End of
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  "It's Not Working"
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Laggy laptops. Fragile setups. Security nightmares. Your team deserves better — high-performance cloud desktops that just work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-xl">
                  <Rocket className="mr-3 h-5 w-5" />
                  Launch Your Desktop
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-full">
                  <Calculator className="mr-3 h-5 w-5" />
                  View Pricing
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative flex justify-center items-center h-full min-h-[600px]">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl border-2 border-blue-200 flex items-center justify-center">
                <div className="text-blue-400 text-center">
                  <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Cloud className="w-16 h-16" />
                  </div>
                  <p className="text-sm">Cloud Desktop Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CloudAdda Desktops?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of enterprise-grade virtual desktops designed for modern remote teams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Lightning Fast Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  High-throughput servers with NVMe storage and EPYC CPUs deliver zero-lag performance, even on poor networks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Encrypted, isolated environments with role-based access control and full compliance support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Access Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Work from any device, anywhere in the world. Your desktop feels native with auto-saved sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Remote Teams</h2>
            <p className="text-xl text-gray-600">
              Built specifically for teams that build things
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Developers & QA Teams</h3>
              <p className="text-gray-600">
                Pre-configured environments with IDEs, Docker, VS Code, and custom stacks ready in minutes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analysts</h3>
              <p className="text-gray-600">
                Run heavy spreadsheets, BI tools, and R notebooks without crashing your local system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TestTube className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Teams</h3>
              <p className="text-gray-600">
                Multi-platform testing, demos, and client PoCs with scalable testing environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get your team up and running in minutes, not hours
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Configuration</h3>
                  <p className="text-gray-600">Select CPU cores, RAM, storage, and OS (Windows, macOS, or Linux) based on your team's needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy Instantly</h3>
                  <p className="text-gray-600">Launch desktop environments in minutes through our intuitive dashboard with auto-scaling capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Access From Anywhere</h3>
                  <p className="text-gray-600">Connect from any device with native-feeling performance and automatic session management.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Manage Everything</h3>
                  <p className="text-gray-600">Full admin control with usage tracking, policy enforcement, and centralized management.</p>
                </div>
              </div>
            </div>
            
            {/* Illustration Space */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl border-2 border-blue-200 flex items-center justify-center">
                <div className="text-blue-400 text-center">
                  <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Monitor className="w-12 h-12" />
                  </div>
                  <p className="text-sm">Desktop Management Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Numbers Don't Lie</h2>
            <p className="text-xl text-blue-100">
              Companies switching to CloudAdda see immediate improvements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-4">73%</div>
              <h3 className="text-xl font-semibold mb-2">Productivity Increase</h3>
              <p className="text-blue-100">Teams report dramatic workflow improvements when hardware stops being a bottleneck.</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-white mb-4">4.2</div>
              <h3 className="text-xl font-semibold mb-2">Hours Saved Daily</h3>
              <p className="text-blue-100">Per developer through eliminated setup time and faster builds.</p>
            </div>
            
            <div>
              <div className="text-5xl font-bold text-white mb-4">₹4.8L</div>
              <h3 className="text-xl font-semibold mb-2">Annual Savings</h3>
              <p className="text-blue-100">Per team through reduced hardware and maintenance costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "I fired up 6 desktops in 10 minutes. My dev team was coding the same afternoon."
                </p>
                <p className="text-lg font-semibold text-gray-900">– CTO, Fintech Startup</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic">
                  "We dropped our laptop budget and doubled our productivity."
                </p>
                <p className="text-lg font-semibold text-gray-900">– Engineering Head, SaaS Company</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Starting at <span className="text-blue-600">₹3,299/user/month</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No surprise billing. No complicated dashboards. Just pay for what you use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full">
                <ArrowRight className="mr-2 h-5 w-5" />
                View All Plans
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-blue-300 hover:bg-blue-50 text-lg px-8 py-4 rounded-full">
                <Play className="mr-2 h-5 w-5" />
                Try 7 Days Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Ready to Transform Your Team's Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Join hundreds of companies already using CloudAdda to power their remote teams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-12 py-6 rounded-full font-semibold">
              <Rocket className="mr-3 h-6 w-6" />
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-12 py-6 rounded-full">
              <Users className="mr-3 h-6 w-6" />
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </div>
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
                <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloudDesktops;
