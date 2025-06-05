import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Monitor, Cpu, HardDrive, Globe, TrendingUp, Brain, BarChart3, Calculator, CheckCircle, Zap, Server, Database, Settings, Rocket } from "lucide-react";
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
      <section className="pt-20 pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium">
                  🚀 CloudAdda VPS — The VPS Built for Builders
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Finally — VPS Hosting That's
                  <span className="text-purple-600"> Fast, Fair, and Freakishly Reliable</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Engineered for speed. Priced for reality. We deliver NVMe + AMD EPYC power at half the cost of AWS — without the complexity, surprises, or slow support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Server className="mr-3 h-5 w-5" />
                  Deploy Your VPS Now
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8 py-6 text-lg font-semibold">
                  View Pricing
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img src="/lovable-uploads/8a2d7816-a253-40ef-a846-db190a4798a5.png" alt="VPS Infrastructure" className="w-full h-auto rounded-2xl shadow-2xl" />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Who This Is For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">You Don't Need a Cloud PhD. You Just Need Power.</h2>
          </div>
          
          <div className="relative">
            {/* Animated connecting lines */}
            <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-purple-300 to-orange-300 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                {
                  title: "Startups & Founders",
                  description: "Deploy fast. Pivot faster. No lock-in, no nonsense.",
                  icon: Rocket,
                  delay: "0s"
                },
                {
                  title: "Developers & DevOps", 
                  description: "SSH in, scale up, build cool stuff. You're in full control.",
                  icon: Settings,
                  delay: "0.2s"
                },
                {
                  title: "Growing Teams",
                  description: "Spin up backend infra, VDI, or containers — reliably and affordably.",
                  icon: TrendingUp,
                  delay: "0.4s"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animationDelay: item.delay }}
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why CloudAdda VPS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">The VPS You'd Build Yourself — If You Had the Time</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "NVMe SSD + AMD EPYC Cores", description: "Performance that embarrasses shared cloud.", emoji: "⚡" },
              { title: "Instant Scalability", description: "Need more power? Click, done. No migration drama.", emoji: "🚀" },
              { title: "Full Root Access", description: "No gatekeeping. No artificial limits.", emoji: "🔓" },
              { title: "Zero Throttling", description: "Get every vCPU cycle you pay for — no tricks.", emoji: "💪" },
              { title: "Pay Less. Get More.", description: "We cost half of AWS. And we're faster.", emoji: "💰" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-gray-50 rounded-2xl p-6 hover:bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What You Can Run */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Run Anything. Scale Everything.</h2>
          </div>
          
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  className="group flex items-center space-x-4 bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-900">{item.name}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-xl font-bold text-purple-600">If it needs power and uptime, it belongs on CloudAdda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">You Spin It. You Scale It. You Rule It.</h2>
          </div>
          
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              {[
                { step: "1", title: "Choose Your Specs", description: "vCPU, RAM, storage — all yours to define." },
                { step: "2", title: "Deploy in Seconds", description: "Provisioned in under 60 seconds." },
                { step: "3", title: "Manage Easily", description: "Simple panel, full root, APIs — no fluff, no friction." }
              ].map((item, index) => (
                <div key={index} className="flex-1 text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    {index < 2 && (
                      <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-gradient-to-r from-purple-300 to-orange-300"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Before vs After */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Happens When You Leave the "Big Clouds"</h2>
          </div>
          
          <div className="space-y-8">
            {[
              { category: "Performance", before: "Throttled, oversold CPUs", after: "NVMe + EPYC at full speed" },
              { category: "Pricing", before: "Confusing bills, surprise fees", after: "Transparent. Flat. Fair." },
              { category: "Support", before: "Wait days, get templated replies", after: "Engineers, not bots. Always." },
              { category: "Simplicity", before: "Bloated dashboards", after: "Fast, focused control panel" },
              { category: "Setup Time", before: "Hours or days", after: "60 seconds or less" }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center md:text-left">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.category}</h3>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <p className="text-sm text-red-700 font-medium">Before</p>
                        <p className="text-red-900">{item.before}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                        <p className="text-sm text-green-700 font-medium">After</p>
                        <p className="text-green-900">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Plans & Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Crazy Fast. Surprisingly Affordable.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Starter", price: "₹799/mo", specs: "2vCPU / 4GB RAM / 50GB NVMe", popular: false },
              { name: "Pro", price: "₹1399/mo", specs: "4vCPU / 8GB RAM / 100GB NVMe", popular: true },
              { name: "Elite", price: "₹2799/mo", specs: "8vCPU / 16GB RAM / 200GB NVMe", popular: false }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'border-purple-500 shadow-lg' : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.specs}</p>
                  <Button 
                    className={`w-full rounded-full ${
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
          
          <div className="text-center space-y-4">
            <p className="text-lg text-gray-600">Add-ons: Extra storage, bandwidth, backups — scale anytime.</p>
            <p className="text-sm text-gray-500">All plans come with full root access, instant provisioning, and 24/7 real engineer support.</p>
          </div>
        </div>
      </section>

      {/* Section 7: Why We're Different */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">This Is How VPS Should Be</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "We Build for Speed", description: "Every VM gets dedicated resources. Period.", emoji: "⚡" },
              { title: "We Speak Human", description: "Support is fast, real, and ridiculously helpful.", emoji: "💬" },
              { title: "We Don't Lock You In", description: "No contracts. No BS. Just scalable compute.", emoji: "🔓" },
              { title: "Made in India. Optimized for the World.", description: "Low-latency infra designed for real workloads.", emoji: "🌍" }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Try the VPS That's Actually Worth the Price
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            No throttling. No asterisks. No regrets.
          </p>
          
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
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
