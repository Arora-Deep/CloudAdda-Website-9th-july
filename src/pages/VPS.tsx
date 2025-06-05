
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
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl">🚀</span>
              <span className="text-3xl font-bold text-purple-600 ml-2">CloudAdda VPS — The VPS Built for Builders</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Finally — VPS Hosting That's
              <span className="text-purple-600"> Fast, Fair, and Freakishly Reliable</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Engineered for speed. Priced for reality. We deliver NVMe + AMD EPYC power at half the cost of AWS — without the complexity, surprises, or slow support.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Server className="mr-3 h-6 w-6" />
              Deploy Your VPS Now
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: Who This Is For */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">You Don't Need a Cloud PhD. You Just Need Power.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Startups & Founders",
                description: "Deploy fast. Pivot faster. No lock-in, no nonsense.",
                icon: Rocket,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Developers & DevOps",
                description: "SSH in, scale up, build cool stuff. You're in full control.",
                icon: Settings,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Growing Teams",
                description: "Spin up backend infra, VDI, or containers — reliably and affordably.",
                icon: TrendingUp,
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors mb-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why CloudAdda VPS */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">The VPS You'd Build Yourself — If You Had the Time</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NVMe SSD + AMD EPYC Cores",
                description: "Performance that embarrasses shared cloud.",
                emoji: "⚡"
              },
              {
                title: "Instant Scalability",
                description: "Need more power? Click, done. No migration drama.",
                emoji: "🚀"
              },
              {
                title: "Full Root Access",
                description: "No gatekeeping. No artificial limits.",
                emoji: "🔓"
              },
              {
                title: "Zero Throttling",
                description: "Get every vCPU cycle you pay for — no tricks.",
                emoji: "💪"
              },
              {
                title: "Pay Less. Get More.",
                description: "We cost half of AWS. And we're faster.",
                emoji: "💰"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-0 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0 text-center">
                  <div className="text-4xl mb-6">{item.emoji}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What You Can Run */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Run Anything. Scale Everything.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Web Apps", icon: Globe, color: "from-blue-500 to-blue-600" },
              { name: "Game Servers", icon: Monitor, color: "from-purple-500 to-purple-600" },
              { name: "Developer Environments", icon: Settings, color: "from-green-500 to-green-600" },
              { name: "AI/ML Tools", icon: Brain, color: "from-orange-500 to-orange-600" },
              { name: "Backend APIs", icon: Server, color: "from-red-500 to-red-600" },
              { name: "Databases", icon: Database, color: "from-yellow-500 to-orange-500" }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">{item.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-purple-600">If it needs power and uptime, it belongs on CloudAdda.</p>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">You Spin It. You Scale It. You Rule It.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Choose Your Specs",
                description: "vCPU, RAM, storage — all yours to define.",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2",
                title: "Deploy in Seconds",
                description: "Provisioned in under 60 seconds.",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "3",
                title: "Manage Easily",
                description: "Simple panel, full root, APIs — no fluff, no friction.",
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors mb-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Before vs After */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">What Happens When You Leave the "Big Clouds"</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 to-green-400 hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  category: "Performance",
                  before: "Throttled, oversold CPUs",
                  after: "NVMe + EPYC at full speed"
                },
                {
                  category: "Pricing",
                  before: "Confusing bills, surprise fees",
                  after: "Transparent. Flat. Fair."
                },
                {
                  category: "Support",
                  before: "Wait days, get templated replies",
                  after: "Engineers, not bots. Always."
                },
                {
                  category: "Simplicity",
                  before: "Bloated dashboards",
                  after: "Fast, focused control panel"
                },
                {
                  category: "Setup Time",
                  before: "Hours or days",
                  after: "60 seconds or less"
                }
              ].map((item, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="p-8 rounded-3xl border-2 border-red-200 bg-red-50 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl font-bold text-red-700 mb-2">{item.category} - Before CloudAdda</h3>
                    <p className="text-lg text-gray-700">{item.before}</p>
                  </div>
                  
                  <div className="hidden lg:flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8 rounded-3xl border-2 border-green-200 bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <h3 className="text-xl font-bold text-green-700 mb-2">{item.category} - After CloudAdda</h3>
                    <p className="text-lg text-gray-700">{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Plans & Pricing */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Crazy Fast. Surprisingly Affordable.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Starter",
                price: "₹799/mo",
                specs: "2vCPU / 4GB RAM / 50GB NVMe",
                color: "from-blue-500 to-blue-600"
              },
              {
                name: "Pro",
                price: "₹1399/mo", 
                specs: "4vCPU / 8GB RAM / 100GB NVMe",
                color: "from-purple-500 to-purple-600",
                popular: true
              },
              {
                name: "Elite",
                price: "₹2799/mo",
                specs: "8vCPU / 16GB RAM / 200GB NVMe",
                color: "from-orange-500 to-orange-600"
              }
            ].map((plan, index) => (
              <Card key={index} className={`bg-white/10 backdrop-blur-sm rounded-3xl border-0 transform hover:scale-105 transition-all duration-300 ${plan.popular ? 'ring-4 ring-yellow-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-yellow-400 text-purple-900 text-center py-2 rounded-t-3xl font-bold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Server className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-yellow-300">{plan.price}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-200 text-lg">{plan.specs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl mb-8">Add-ons: Extra storage, bandwidth, backups — scale anytime.</p>
            <p className="text-lg text-gray-300">All plans come with full root access, instant provisioning, and 24/7 real engineer support.</p>
          </div>
        </div>
      </section>

      {/* Section 7: Why We're Different */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">This Is How VPS Should Be</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "We Build for Speed",
                description: "Every VM gets dedicated resources. Period.",
                emoji: "⚡"
              },
              {
                title: "We Speak Human",
                description: "Support is fast, real, and ridiculously helpful.",
                emoji: "💬"
              },
              {
                title: "We Don't Lock You In",
                description: "No contracts. No BS. Just scalable compute.",
                emoji: "🔓"
              },
              {
                title: "Made in India. Optimized for the World.",
                description: "Low-latency infra designed for real workloads.",
                emoji: "🌍"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className="text-4xl mb-6">{item.emoji}</div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors mb-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-32 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Try the VPS That's Actually Worth the Price
          </h2>
          <p className="text-2xl text-gray-200 mb-12">
            No throttling. No asterisks. No regrets.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
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
