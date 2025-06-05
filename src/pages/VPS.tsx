
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Cpu, HardDrive, Globe, TrendingUp, Brain, BarChart3, CheckCircle, Zap, Server, Database, Settings, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const VPS = () => {
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
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-purple-50 rounded-full text-purple-600 text-sm font-semibold tracking-wide">
              CloudAdda VPS — The VPS Built for Builders
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
              Finally — VPS Hosting That's
              <span className="text-purple-600"> Fast, Fair, and Freakishly Reliable</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Engineered for speed. Priced for reality. We deliver NVMe + AMD EPYC power at half the cost of AWS — without the complexity, surprises, or slow support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <Server className="mr-3 h-5 w-5" />
                Deploy Your VPS Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-10 py-6 text-lg font-semibold">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Who This Is For - Hexagon Layout */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">You Don't Need a Cloud PhD. You Just Need Power.</h2>
          </div>
          
          <div className="relative flex justify-center items-center min-h-96">
            {/* Central Hub */}
            <div className="absolute z-10 w-32 h-32 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center shadow-xl">
              <Zap className="w-12 h-12 text-purple-600" />
            </div>
            
            {/* Orbiting Cards */}
            <div className="relative w-full max-w-4xl h-96">
              {[
                { title: "Startups & Founders", description: "Deploy fast. Pivot faster. No lock-in, no nonsense.", icon: Rocket, position: "top" },
                { title: "Developers & DevOps", description: "SSH in, scale up, build cool stuff. You're in full control.", icon: Settings, position: "left" },
                { title: "Growing Teams", description: "Spin up backend infra, VDI, or containers — reliably and affordably.", icon: TrendingUp, position: "right" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`absolute w-72 group hover:scale-105 transition-all duration-500 ${
                    item.position === 'top' ? 'top-0 left-1/2 transform -translate-x-1/2' :
                    item.position === 'left' ? 'bottom-0 left-0' :
                    'bottom-0 right-0'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                      <item.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  {/* Connection Line */}
                  <div className={`absolute w-px h-16 bg-purple-300 ${
                    item.position === 'top' ? 'bottom-0 left-1/2 transform -translate-x-1/2' :
                    item.position === 'left' ? 'top-0 right-0' :
                    'top-0 left-0'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why CloudAdda VPS - Diagonal Split Layout */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">The VPS You'd Build Yourself — If You Had the Time</h2>
          </div>
          
          <div className="space-y-20">
            {[
              { title: "NVMe SSD + AMD EPYC Cores", description: "Performance that embarrasses shared cloud.", icon: Cpu, side: "left" },
              { title: "Instant Scalability", description: "Need more power? Click, done. No migration drama.", icon: TrendingUp, side: "right" },
              { title: "Full Root Access", description: "No gatekeeping. No artificial limits.", icon: Settings, side: "left" },
              { title: "Zero Throttling", description: "Get every vCPU cycle you pay for — no tricks.", icon: Zap, side: "right" },
              { title: "Pay Less. Get More.", description: "We cost half of AWS. And we're faster.", icon: CheckCircle, side: "left" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center ${item.side === 'right' ? 'flex-row-reverse' : ''} group`}>
                <div className="flex-1 text-center">
                  <div className={`inline-flex items-center space-x-6 ${item.side === 'right' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 transition-all duration-300 group-hover:scale-110">
                      <item.icon className="w-12 h-12 text-purple-600" />
                    </div>
                    <div className={`${item.side === 'right' ? 'text-right' : 'text-left'} max-w-md`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-lg text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="w-px h-32 bg-gray-200 mx-20 hidden lg:block"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What You Can Run - Flowing Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Run Anything. Scale Everything.</h2>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 bg-gray-200 p-1 rounded-3xl">
              {[
                { name: "Web Apps", icon: Globe },
                { name: "Game Servers", icon: Monitor },
                { name: "Developer Environments", icon: Settings },
                { name: "AI/ML Tools", icon: Brain },
                { name: "Backend APIs", icon: Server },
                { name: "Databases", icon: Database }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:bg-purple-50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 transition-colors">
                    <item.icon className="w-8 h-8 text-gray-600 group-hover:text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-2xl font-bold text-purple-600">If it needs power and uptime, it belongs on CloudAdda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works - Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">You Spin It. You Scale It. You Rule It.</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200"></div>
            
            <div className="space-y-20">
              {[
                { step: "1", title: "Choose Your Specs", description: "vCPU, RAM, storage — all yours to define.", side: "left" },
                { step: "2", title: "Deploy in Seconds", description: "Provisioned in under 60 seconds.", side: "right" },
                { step: "3", title: "Manage Easily", description: "Simple panel, full root, APIs — no fluff, no friction.", side: "left" }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${item.side === 'right' ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <div className={`max-w-md ${item.side === 'right' ? 'ml-auto text-right' : ''}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                        <p className="text-gray-600 text-lg">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Before vs After - Split Screen */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">What Happens When You Leave the "Big Clouds"</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-1 bg-gray-200 p-1 rounded-3xl">
            <div className="bg-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-red-600 mb-12 text-center">Before CloudAdda</h3>
              <div className="space-y-8">
                {[
                  { category: "Performance", issue: "Throttled, oversold CPUs" },
                  { category: "Pricing", issue: "Confusing bills, surprise fees" },
                  { category: "Support", issue: "Wait days, get templated replies" },
                  { category: "Simplicity", issue: "Bloated dashboards" },
                  { category: "Setup Time", issue: "Hours or days" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.category}</h4>
                      <p className="text-red-700">{item.issue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-green-600 mb-12 text-center">After CloudAdda</h3>
              <div className="space-y-8">
                {[
                  { category: "Performance", solution: "NVMe + EPYC at full speed" },
                  { category: "Pricing", solution: "Transparent. Flat. Fair." },
                  { category: "Support", solution: "Engineers, not bots. Always." },
                  { category: "Simplicity", solution: "Fast, focused control panel" },
                  { category: "Setup Time", solution: "60 seconds or less" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.category}</h4>
                      <p className="text-green-700">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing - Spotlight Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">Crazy Fast. Surprisingly Affordable.</h2>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "₹799/mo", specs: "2vCPU / 4GB RAM / 50GB NVMe", popular: false },
                { name: "Pro", price: "₹1399/mo", specs: "4vCPU / 8GB RAM / 100GB NVMe", popular: true },
                { name: "Elite", price: "₹2799/mo", specs: "8vCPU / 16GB RAM / 200GB NVMe", popular: false }
              ].map((plan, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-purple-500 bg-purple-50 shadow-2xl scale-105' 
                      : 'border-gray-200 bg-white hover:border-purple-300 shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-6">{plan.price}</div>
                    <p className="text-gray-600 mb-8 text-lg">{plan.specs}</p>
                    <Button 
                      className={`w-full rounded-full py-3 text-lg font-semibold ${
                        plan.popular 
                          ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 space-y-4">
              <p className="text-xl text-gray-600">Add-ons: Extra storage, bandwidth, backups — scale anytime.</p>
              <p className="text-gray-500">All plans come with full root access, instant provisioning, and 24/7 real engineer support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why We're Different - Floating Elements */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">This Is How VPS Should Be</h2>
          </div>
          
          <div className="relative min-h-96">
            {[
              { title: "We Build for Speed", description: "Every VM gets dedicated resources. Period.", position: "top-left" },
              { title: "We Speak Human", description: "Support is fast, real, and ridiculously helpful.", position: "top-right" },
              { title: "We Don't Lock You In", description: "No contracts. No BS. Just scalable compute.", position: "bottom-left" },
              { title: "Made in India. Optimized for the World.", description: "Low-latency infra designed for real workloads.", position: "bottom-right" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`absolute w-80 group hover:scale-105 transition-all duration-500 ${
                  item.position === 'top-left' ? 'top-0 left-0' :
                  item.position === 'top-right' ? 'top-0 right-0' :
                  item.position === 'bottom-left' ? 'bottom-0 left-0' :
                  'bottom-0 right-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
            
            {/* Central connecting element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center">
              <Server className="w-16 h-16 text-purple-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Try the VPS That's Actually Worth the Price
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            No throttling. No asterisks. No regrets.
          </p>
          
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Server className="mr-3 h-6 w-6" />
            Launch Your VPS Now
          </Button>
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

export default VPS;
