
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">Product</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-red-500 transition-colors flex items-center">
                  Solutions <span className="ml-1">▼</span>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-red-500 transition-colors flex items-center">
                  Resources <span className="ml-1">▼</span>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-red-500 transition-colors flex items-center">
                  About Us <span className="ml-1">▼</span>
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">Pricing</a>
              <Button variant="ghost" className="text-red-500 hover:text-red-600">
                Log In
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-8">
                <h1 className="leading-tight">
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900 block mb-2">
                    Infrastructure Chaos
                  </span>
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900 block mb-2">
                    Ends Here.
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent text-4xl lg:text-5xl font-bold block">
                    Labs. Desktops. VPS. Just Done.
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  You've got customers to train. Teams to empower. Products to build. But your infra? It's slow. Messy. Unreliable. CloudAdda fixes that — with battle-tested Labs, blazing-fast Virtual Desktops, and no-nonsense VPS.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Let's Fix Your Infra
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                  See Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/6df3b19a-2c57-45c8-89b1-a0f0e58db9ab.png" alt="3D illustration of a person with laptop and lightbulb idea" className="w-full max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* The Pain Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              You're Not a Cloud Company. Why Are You Doing Cloud's Job?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl leading-relaxed mb-6">
                You're not in business to manage servers. You're here to teach. To launch. To build. But you're stuck provisioning machines, babysitting desktops, firefighting downtime.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                It's burning your time. Killing your margins. And making your team hate Mondays.
              </p>
              <p className="text-2xl font-semibold text-purple-200">
                There's a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Fix Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              CloudAdda Handles Your Infra. So You Can Handle Your Business.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't give you a control panel and disappear. We deliver the infrastructure — fast, fully configured, and rock-solid.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 items-start">
            <div className="space-y-8">
              <div className="relative">
                <img src="/lovable-uploads/eb2c47ec-d601-4c75-b1fc-847f67a73aa6.png" alt="Training Labs" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Training Labs</h3>
                <p className="text-sm text-purple-600 font-semibold">For Training Firms & Enterprises</p>
                <p className="text-gray-600">
                  We don't give you a console. We give you results. Send us your exact training requirements — Windows, Linux, custom stacks, networking labs — and we deliver the whole lab, fully configured, at scale. Faster than your internal team. More reliable than ad-hoc clouds.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                  Schedule a Lab Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <img src="/lovable-uploads/5aab5b8e-c5b5-423b-a473-bcb996375d02.png" alt="Virtual Desktops" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Virtual Desktops</h3>
                <p className="text-sm text-purple-600 font-semibold">DaaS for Modern Teams</p>
                <p className="text-gray-600 mb-4">
                  High-performance, secure desktops — Windows, Linux, or macOS — ready to power remote teams, call centers, dev shops, and full-scale organizations. Blazing fast, customizable, and easier than hiring IT admins.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">💸</span> Starts at ₹3,299/user/month</p>
                  <p><span className="font-semibold">⚡</span> 2vCPU, 4GB RAM, SSD/NVMe, 100% SLA</p>
                  <p><span className="font-semibold">🔐</span> Built-in snapshots, security policies, and remote access</p>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                  Launch a Desktop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <img src="/lovable-uploads/0190e56d-e54b-4c1f-81b8-34e45bd41e84.png" alt="VPS" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Virtual Private Servers</h3>
                <p className="text-sm text-purple-600 font-semibold">For Developers & Startups</p>
                <p className="text-gray-600 mb-4">
                  Don't waste time on cheap, oversold VPS providers. CloudAdda gives you fast, isolated, NVMe-powered instances with real support and predictable performance.
                </p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">💸</span> Starts at ₹699/month</p>
                  <p><span className="font-semibold">🔧</span> 1vCPU, 2GB RAM, full root access</p>
                  <p><span className="font-semibold">🌍</span> Indian & global locations. Backups included.</p>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                  Get a VPS Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Not Everyone. Just the Smart Ones.
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">You're tired of spending hours configuring labs.</p>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">You want your team to work — not wait for IT.</p>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">You care about performance. But you care more about reliability.</p>
              </div>
              <div className="flex items-start space-x-3 text-left">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3"></div>
                <p className="text-lg text-gray-700">You want to scale, without feeling like you're managing a data center.</p>
              </div>
            </div>
            <p className="text-2xl font-semibold text-purple-600 mt-8">
              Then you're our people.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              The Cloud Company That Actually Cares.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">You Talk to Humans</h3>
              <p className="text-gray-600">Engineers, not bots. Every ticket. Every time.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">We Customize Everything</h3>
              <p className="text-gray-600">No one-size-fits-all. We tailor setups to your use case.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">We Move Fast</h3>
              <p className="text-gray-600">Environments provisioned in hours, not days.</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">We Don't Oversell</h3>
              <p className="text-gray-600">When you pay for performance, you get performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Built to Power Real Work, Not Just Slide Decks
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Instructor-led or self-paced — we spin up stable, consistent lab environments. You send a config. We send you a URL.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Remote Product Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Devs and QA running on underpowered laptops? We fix that. Secure desktops in the cloud, with real horsepower.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Bootstrapped Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deploy backend systems, AI workloads, or POCs — fast and affordable. Get enterprise-grade VPS without paying AWS premiums.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              What Our Customers Say (Before They Tell Their Friends)
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "It's like magic. I told them what we needed. Next morning, 40 labs were live. No bugs. No BS."
                </p>
                <p className="font-semibold text-gray-900">— Founder, Corporate Training Platform</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "We switched from AWS Workspaces to CloudAdda. Better speeds. Better support. Better everything."
                </p>
                <p className="font-semibold text-gray-900">— Head of IT, Fintech Startup</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "Honestly? They saved our training business."
                </p>
                <p className="font-semibold text-gray-900">— CEO, EdTech Company</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About CloudAdda Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            CloudAdda is Born in India, Built for the World
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl">
              We're not a low-end provider. We're a new kind of cloud — built around your actual needs. No bloated control panels, no guessing, no jargon.
            </p>
            <p className="text-xl">
              We specialize in three things, and we do them well.
            </p>
            <p className="text-xl">
              All of it with elite customer service, clear pricing, and a 100% commitment to reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Transparent Pricing. No Hidden Gotchas. Ever.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Labs</CardTitle>
                <CardDescription>Custom quote based on your spec</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">We'll ask you 3–5 questions, then send a complete lab setup.</p>
                <p className="text-sm text-purple-600 font-semibold">Same-day delivery possible.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Custom Quote</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-600 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Virtual Desktops</CardTitle>
                <CardDescription>Starting ₹3,299/user/month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">2vCPU, 4GB RAM, SSD.</p>
                <p className="text-sm text-purple-600 font-semibold">Fully scalable. Just add users.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Launch Desktop</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">VPS</CardTitle>
                <CardDescription>Starting ₹1,499/month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">NVMe. AMD EPYC. Perfect isolation.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get VPS Now</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
              View All Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Closer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            You Can't Afford to Waste Time on Bad Infra.
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-xl text-gray-600">
              Bad infrastructure is invisible... until it costs you customers, kills your momentum, or ruins your launch.
            </p>
            <p className="text-xl text-gray-600">
              CloudAdda is for those who can't afford to fail. And those who don't want to build infra teams just to stay online.
            </p>
            <p className="text-2xl font-semibold text-gray-900">
              You bring the vision. We bring the horsepower. Let's go.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full">
              Request Demo
            </Button>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full">
              Start Now
            </Button>
            <Button size="lg" variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50 text-lg px-8 py-4 rounded-full">
              Get Custom Quote
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
                <li><a href="#" className="hover:text-white transition-colors">Training Labs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Virtual Desktops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VPS</a></li>
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

export default Index;
