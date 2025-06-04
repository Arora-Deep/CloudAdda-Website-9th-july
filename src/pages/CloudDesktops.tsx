import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Rocket, Brain, Shield, Zap, Code, BarChart3, TestTube, Play, Users, Server, Calculator, CheckCircle, AlertTriangle, Clock, TrendingUp, Award, Star } from "lucide-react";
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

      {/* Hero Section - White Background Like Homepage */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                The End of
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  "It's Not Working"
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Laggy laptops. Fragile setups. Security nightmares. Your team deserves better — high-performance cloud desktops that just work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-4 rounded-full shadow-xl">
                  <Rocket className="mr-3 h-5 w-5" />
                  Launch Your First Desktop
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4 rounded-full">
                  <Calculator className="mr-3 h-5 w-5" />
                  See Pricing
                </Button>
              </div>
            </div>
            
            {/* Space for 3D Person */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12" />
                  </div>
                  <p className="text-sm">3D Person Element Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Remote Teams - Creative New Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Built for Remote Teams That Build Things
            </h2>
          </div>
          
          {/* Creative Flowing Layout */}
          <div className="relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
            </div>
            
            {/* Feature 1 - Left Aligned */}
            <div className="relative mb-24 flex items-center">
              <div className="flex-1 max-w-xl">
                <div className="group cursor-pointer">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    Designed for Doers
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether it's developers, analysts, or product testers — CloudAdda desktops deliver speed, security, and uptime that keeps your team productive.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <div className="w-64 h-32 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 flex items-center justify-center opacity-80">
                  <div className="text-purple-300 text-center">
                    <Code className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-xs">Visual Element</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Right Aligned */}
            <div className="relative mb-24 flex items-center flex-row-reverse">
              <div className="flex-1 max-w-xl">
                <div className="group cursor-pointer text-right">
                  <div className="flex items-center mb-6 flex-row-reverse">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center ml-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-full h-px bg-gradient-to-l from-green-500 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Locked-Down, Not Locked-In
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Encrypted. Isolated. Role-based access. Your data stays safe — and portable. Complete security without sacrificing flexibility.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex justify-start">
                <div className="w-64 h-32 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border border-green-200 flex items-center justify-center opacity-80">
                  <div className="text-green-300 text-center">
                    <Shield className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-xs">Visual Element</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Center Aligned */}
            <div className="relative text-center">
              <div className="group cursor-pointer max-w-3xl mx-auto">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="w-full h-px bg-gradient-to-l from-transparent via-orange-500 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                  Zero Lag, Even on Bad Networks
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  We use high-throughput servers with NVMe + EPYC CPUs — because your code, builds, and apps deserve better. 
                  No compromises on performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation - Simplified Clean Design */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">The Transformation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See how teams transform their productivity with CloudAdda</p>
          </div>
          
          {/* Clean Before/After Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Before Side */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                  <AlertTriangle className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Before CloudAdda</h3>
                <p className="text-gray-600">The daily struggle with unreliable infrastructure</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">💻 Performance Issues</h4>
                  <p className="text-gray-600">Laptops from 2019 struggling to run basic apps, constant crashes during important meetings</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🛠 Setup Chaos</h4>
                  <p className="text-gray-600">Manual installs, configuration nightmares, and hours wasted on environment setup</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-red-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🔐 Security Nightmares</h4>
                  <p className="text-gray-600">No VPN control, sensitive data scattered across local drives, compliance headaches</p>
                </div>
              </div>
            </div>

            {/* After Side */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">After CloudAdda</h3>
                <p className="text-gray-600">Seamless productivity with enterprise-grade infrastructure</p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">💻 High-Performance Computing</h4>
                  <p className="text-gray-600">Dedicated CPU/GPU power, lightning-fast responses, and zero downtime during critical work</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🛠 One-Click Simplicity</h4>
                  <p className="text-gray-600">Pre-configured environments ready in minutes, automated deployments, and instant scaling</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🔐 Enterprise Security</h4>
                  <p className="text-gray-600">Centralized access control, encrypted data, isolated environments, and full compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation Arrow */}
          <div className="flex justify-center mt-16">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For - Paragraph Style */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">Perfect For...</h2>
          
          <div className="space-y-12 text-left">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Developers & QA Teams</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Spin up desktop environments with IDEs, Docker, VS Code, or custom stacks — no setup needed. 
                  Get your team coding faster with pre-configured environments that just work.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Data Analysts</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Run heavy spreadsheets, BI tools, or R notebooks — without crashing your system. 
                  Process large datasets with the computing power you need, when you need it.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Product Teams</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Need to run multi-platform tests, demos, or client PoCs? Just clone a desktop and go. 
                  Scale your testing environments without the infrastructure headaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works with 3D Person Space */}
      <section className="py-32 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">How It Works</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Specs</h3>
                  <p className="text-gray-600">Pick the core count, RAM, storage, and OS (macOS, Windows, or Linux). You can customize user access too.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch in Minutes</h3>
                  <p className="text-gray-600">Provision desktops instantly via our dashboard — scale up or down anytime.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Access From Anywhere</h3>
                  <p className="text-gray-600">Log in from any device. Desktops feel native, even on 4G. Your sessions are auto-saved and resilient.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Control Everything</h3>
                  <p className="text-gray-600">Admins can track usage, pause/resume VMs, or enforce policy with just a few clicks.</p>
                </div>
              </div>
            </div>
            
            {/* Space for 3D Person */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl border-2 border-purple-200 flex items-center justify-center">
                <div className="text-purple-400 text-center">
                  <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Server className="w-12 h-12" />
                  </div>
                  <p className="text-sm">3D Person Element Space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes CloudAdda Different - Fixed Purple Section */}
      <section className="py-32 text-white" style={{ backgroundColor: '#8B5CF6' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16">What Makes CloudAdda Different</h2>
          
          <div className="space-y-12">
            <p className="text-xl text-white/90 leading-relaxed">
              <strong className="text-white">Blazing Fast Infrastructure.</strong> No shared CPU throttling. No noisy neighbors. 
              Just dedicated power — when you need it. Our high-throughput servers with NVMe storage and EPYC CPUs 
              ensure your applications run at peak performance.
            </p>
            
            <p className="text-xl text-white/90 leading-relaxed">
              <strong className="text-white">Real Support. Not Scripts.</strong> Our engineers know what "ssh latency" 
              and "GPU passthrough" mean — and how to fix it. When you need help, you talk to humans who understand 
              your technical challenges.
            </p>
            
            <p className="text-xl text-white/90 leading-relaxed">
              <strong className="text-white">Works with Your Stack.</strong> From Android Studio to Jupyter to VS Code — 
              our desktops run anything you do. No compromises, no workarounds. Just the tools you need, 
              running the way they should.
            </p>
          </div>
        </div>
      </section>

      {/* New Customer Converting Section - ROI & Results */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies switching to CloudAdda see immediate and measurable improvements across their entire operation
            </p>
          </div>
          
          {/* ROI Metrics in Clean Layout */}
          <div className="relative">
            {/* Metric 1 - Productivity */}
            <div className="relative mb-20 text-center">
              <div className="text-6xl lg:text-7xl font-bold text-green-600 mb-4">73%</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Productivity Increase</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Teams report dramatic improvements in workflow efficiency when they stop wrestling with slow hardware 
                and start focusing on what they do best. No more "waiting for the computer to catch up."
              </p>
            </div>

            {/* Metrics 2 & 3 - Side by Side */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Time Savings */}
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-blue-600 mb-4">4.2 Hours</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Saved Per Developer Daily</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Eliminated setup time, reduced debugging, faster builds, and instant environment switching 
                  adds up to real time savings that compound every single day.
                </p>
              </div>

              {/* Cost Reduction */}
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-purple-600 mb-4">₹4.8L</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Annual Savings Per Team</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Reduced hardware costs, eliminated IT maintenance overhead, lower security risks, 
                  and decreased downtime create substantial cost savings that improve your bottom line.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3 text-gray-600">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">Trusted by 200+ companies across 15+ countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Wins */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white p-8 rounded-2xl shadow-lg border-0">
              <CardContent className="p-0">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "I fired up 6 desktops in 10 minutes. My dev team was coding the same afternoon."
                </p>
                <p className="text-lg font-semibold text-gray-900">– CTO, Fintech Startup</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white p-8 rounded-2xl shadow-lg border-0">
              <CardContent className="p-0">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                  "We dropped our laptop budget and doubled our productivity."
                </p>
                <p className="text-lg font-semibold text-gray-900">– Engineering Head, SaaS Co.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Callout */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl shadow-xl p-12 border border-purple-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Starting at <span className="text-purple-600">₹3,299/user/month</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No surprise billing. No complicated dashboards. Just pay for what you use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full">
                <ArrowRight className="mr-2 h-5 w-5" />
                View All Plans
              </Button>
              <Button size="lg" variant="outline" className="text-purple-600 border-purple-300 hover:bg-purple-50 text-lg px-8 py-4 rounded-full">
                <Play className="mr-2 h-5 w-5" />
                Try 7 Days Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Let Your Team Work Like a 2025 Tech Company —
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Not a 2015 One.
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            CloudAdda Desktops are fast, flexible, and secure. Your infra should accelerate your work — not block it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg px-12 py-6 rounded-full shadow-xl">
              <Rocket className="mr-3 h-6 w-6" />
              Launch Your First Desktop
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-12 py-6 rounded-full">
              <Play className="mr-3 h-6 w-6" />
              Book a Demo with Our Engineers
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
