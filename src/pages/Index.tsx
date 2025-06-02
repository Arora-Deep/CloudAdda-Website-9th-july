
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star, Rocket, Target } from "lucide-react";

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
                Talk to Us
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
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900 block mb-4">
                    Powerful Cloud.
                  </span>
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900 block mb-6">
                    Zero Headaches.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Purpose-built infrastructure for Training Labs, Virtual Desktops, and High-Performance VPS.
                  Engineered for speed, simplicity, and real business outcomes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                  <Target className="mr-2 h-5 w-5" />
                  See What You Can Do
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/6df3b19a-2c57-45c8-89b1-a0f0e58db9ab.png" alt="3D illustration of a person with laptop and lightbulb idea" className="w-full max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Cloud isn't about servers. It's about getting real work done — faster, better, and with less noise.
            </h2>
            <div className="text-xl text-purple-100 space-y-4 max-w-4xl mx-auto">
              <p>CloudAdda is the partner you wish you had earlier.</p>
              <p>We don't just rent out infrastructure. We deliver exactly what your team, your students, or your business needs — fast.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes CloudAdda Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">What Makes CloudAdda Different</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">We Deliver Cloud That's Ready to Use</h3>
              <p className="text-gray-600">No dashboard chaos. No cryptic pricing. Just reliable infra, built for outcomes.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">We Do the Heavy Lifting (Especially for Labs)</h3>
              <p className="text-gray-600">Tell us what your training needs — we'll provision it, test it, and deliver in record time.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">You Control Your DaaS & VPS</h3>
              <p className="text-gray-600">Need 20 desktops tomorrow? Scale. Need a high-speed VPS? Launch instantly.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Human Support That Actually Solves Things</h3>
              <p className="text-gray-600">We don't hide behind forms or "Level 1" excuses. Your ticket matters.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hardware That Hits Different</h3>
              <p className="text-gray-600">NVMe. AMD EPYC. Tier-1 bandwidth. Performance isn't a buzzword here — it's the default.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Your CloudAdda Toolkit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your CloudAdda Toolkit</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Training Labs */}
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div className="relative">
                <img src="/lovable-uploads/eb2c47ec-d601-4c75-b1fc-847f67a73aa6.png" alt="Training Labs illustration" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="text-2xl">🧪</div>
                <h3 className="text-2xl font-bold text-gray-900">Training Labs</h3>
                <p className="text-sm text-gray-600 uppercase tracking-wide">For Training Firms & Enterprises</p>
                <p className="text-gray-600">
                  We don't give you a console. We give you results. Send us your exact training requirements — Windows, Linux, custom stacks, networking labs — and we deliver the whole lab, fully configured, at scale.
                </p>
                <p className="text-gray-600 font-medium">Faster than your internal team. More reliable than ad-hoc clouds.</p>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Schedule a Lab Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Virtual Desktops */}
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div className="relative">
                <img src="/lovable-uploads/5aab5b8e-c5b5-423b-a473-bcb996375d02.png" alt="Virtual Desktops illustration" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="text-2xl">💻</div>
                <h3 className="text-2xl font-bold text-gray-900">Virtual Desktops</h3>
                <p className="text-sm text-gray-600 uppercase tracking-wide">DaaS for Modern Teams</p>
                <p className="text-gray-600">
                  High-performance, secure desktops — Windows, Linux, or macOS — ready to power remote teams, call centers, dev shops, and full-scale organizations.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-600 font-bold">💸 Starts at ₹3,299/user/month</p>
                  <p className="text-gray-600">⚡ 2vCPU, 4GB RAM, SSD/NVMe, 100% SLA</p>
                  <p className="text-gray-600">🔐 Built-in snapshots, security policies, and remote access</p>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Launch a Desktop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* VPS */}
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div className="relative">
                <img src="/lovable-uploads/0190e56d-e54b-4c1f-81b8-34e45bd41e84.png" alt="VPS illustration" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="text-2xl">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900">Virtual Private Servers</h3>
                <p className="text-sm text-gray-600 uppercase tracking-wide">For Developers & Startups</p>
                <p className="text-gray-600">
                  Don't waste time on cheap, oversold VPS providers. CloudAdda gives you fast, isolated, NVMe-powered instances with real support and predictable performance.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-600 font-bold">💸 Starts at ₹699/month</p>
                  <p className="text-gray-600">🔧 1vCPU, 2GB RAM, full root access</p>
                  <p className="text-gray-600">🌍 Indian & global locations. Backups included.</p>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Get a VPS Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Who We Serve</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl">🏫</div>
              <h3 className="font-bold text-gray-900">Training Provider</h3>
              <p className="text-gray-600">Labs that feel in-house, but better</p>
            </div>
            
            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl">👨‍💻</div>
              <h3 className="font-bold text-gray-900">Tech Team or Startup</h3>
              <p className="text-gray-600">Desktops and VPS that just work</p>
            </div>
            
            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl">🧑‍🏫</div>
              <h3 className="font-bold text-gray-900">Corporate L&D Head</h3>
              <p className="text-gray-600">500+ VMs, provisioned in a day</p>
            </div>
            
            <div className="text-center space-y-4 p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl">🤝</div>
              <h3 className="font-bold text-gray-900">Growing Business</h3>
              <p className="text-gray-600">Cloud that scales with you, not against you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teams Stay */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why Teams Stay with CloudAdda</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-purple-600 font-bold">Infra delivered in hours, not days</div>
            </div>
            <div className="space-y-4">
              <div className="text-purple-600 font-bold">Pre-validated training environments</div>
            </div>
            <div className="space-y-4">
              <div className="text-purple-600 font-bold">Super-low latency for Indian customers</div>
            </div>
            <div className="space-y-4">
              <div className="text-purple-600 font-bold">GST invoices, Indian billing, friendly terms</div>
            </div>
            <div className="space-y-4">
              <div className="text-purple-600 font-bold">You talk to actual engineers — always</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pricing Snapshot</h2>
            <p className="text-gray-600">No fake discounts. No mystery billing. Just honest value.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Product</th>
                  <th className="py-4 px-6 text-left">Starts At</th>
                  <th className="py-4 px-6 text-left">Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Labs</td>
                  <td className="py-4 px-6 text-purple-600 font-bold">₹1,499/user/mo</td>
                  <td className="py-4 px-6">Done-for-you provisioning</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">DaaS</td>
                  <td className="py-4 px-6 text-purple-600 font-bold">₹3,299/user/mo</td>
                  <td className="py-4 px-6">Fully managed, scalable desktops</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">VPS</td>
                  <td className="py-4 px-6 text-purple-600 font-bold">₹699/mo</td>
                  <td className="py-4 px-6">SSD/NVMe, high availability, snapshots</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3">
              View Full Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Customers Say It Best</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6">
                "We switched from a global vendor to CloudAdda for our bootcamp labs — and we've never looked back. Faster setup, smarter support, and it just works."
              </p>
              <p className="text-gray-900 font-semibold">— COO, EdTech Platform</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6">
                "The DaaS was up and running in hours. The onboarding was personal and smooth. Way better than any enterprise we've worked with."
              </p>
              <p className="text-gray-900 font-semibold">— CTO, 50-person Dev Agency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Trust, Compliance & Infrastructure</h2>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">🇮🇳</div>
              <p className="text-sm font-medium">Hosted in Indian and Global DCs</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🔐</div>
              <p className="text-sm font-medium">ISO, GDPR-ready setups available</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🧠</div>
              <p className="text-sm font-medium">Full snapshots, backups, security isolation</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🛡️</div>
              <p className="text-sm font-medium">Optional firewalls, monitoring & access control</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🎯</div>
              <p className="text-sm font-medium">99.99% uptime SLA backed by real action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Pitch */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Cloud should feel powerful. Not painful.
            </h2>
            <div className="text-xl text-purple-100 space-y-4 max-w-4xl mx-auto">
              <p>At CloudAdda, we don't sell servers. We solve problems.</p>
              <p>Whether you're training 50 students, deploying 500 desktops, or spinning up your next big product — we're the cloud partner that shows up, delivers, and sticks around.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full transition-all duration-300">
                Get Started Now
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </div>
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
                The cloud partner that shows up, delivers, and sticks around.
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
