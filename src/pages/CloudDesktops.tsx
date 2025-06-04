
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Rocket, Cpu, Lock, TrendingUp, Users, Palette, TestTube, UserCheck, Calculator, Brain, Shield, Zap, Play, Monitor, Code, BarChart3, Layers3, CheckCircle, AlertTriangle, Server } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktops = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
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
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Support</a>
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
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              The End of 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> "It's Not Working"</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
              Laggy laptops. Fragile setups. Security nightmares. Your team deserves better — high-performance cloud desktops that just work.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                <Rocket className="mr-3 h-6 w-6" />
                Launch Your First Desktop
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-xl px-12 py-6 rounded-full backdrop-blur-sm">
                <Calculator className="mr-3 h-6 w-6" />
                See Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Remote Teams */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Built for Remote Teams That Build Things</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Brain,
                title: "Designed for Doers",
                description: "Whether it's developers, analysts, or product testers — CloudAdda desktops deliver speed, security, and uptime.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Shield,
                title: "Locked-Down, Not Locked-In",
                description: "Encrypted. Isolated. Role-based access. Your data stays safe — and portable.",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: Zap,
                title: "Zero Lag, Even on Bad Networks",
                description: "We use high-throughput servers with NVMe + EPYC CPUs — because your code, builds, and apps deserve better.",
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Before vs After</h2>
          </div>
          
          {/* Enhanced Table Design */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                    <th className="py-8 px-8 text-left text-white text-2xl font-bold">Aspect</th>
                    <th className="py-8 px-8 text-center text-white text-2xl font-bold flex items-center justify-center">
                      <AlertTriangle className="mr-3 h-8 w-8 text-red-400" />
                      Before CloudAdda
                    </th>
                    <th className="py-8 px-8 text-center text-white text-2xl font-bold">
                      <div className="flex items-center justify-center">
                        <CheckCircle className="mr-3 h-8 w-8 text-green-400" />
                        After CloudAdda
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      aspect: "💻 Performance", 
                      before: "Laptops from 2019 struggling to run basic apps",
                      after: "High-powered desktops with real CPU/GPU strength"
                    },
                    {
                      aspect: "🛠 Setup",
                      before: "Manual installs, config chaos", 
                      after: "One-click desktops provisioned in minutes"
                    },
                    {
                      aspect: "🔐 Security",
                      before: "No VPN? No control. Data on local drives.",
                      after: "Centralized, secure access. Zero local storage."
                    },
                    {
                      aspect: "🧑‍💻 Experience", 
                      before: "\"System froze on Zoom again.\"",
                      after: "\"My workflow is actually smooth now.\""
                    }
                  ].map((row, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                      <td className="py-8 px-8 text-xl font-semibold text-gray-900">{row.aspect}</td>
                      <td className="py-8 px-8 text-center">
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mx-4">
                          <p className="text-gray-700 text-lg leading-relaxed">{row.before}</p>
                        </div>
                      </td>
                      <td className="py-8 px-8 text-center">
                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mx-4">
                          <p className="text-gray-700 text-lg leading-relaxed font-medium">{row.after}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Perfect For...</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Developers & QA Teams",
                description: "Spin up desktop environments with IDEs, Docker, VS Code, or custom stacks — no setup needed.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: BarChart3,
                title: "Data Analysts",
                description: "Run heavy spreadsheets, BI tools, or R notebooks — without crashing your system.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Layers3,
                title: "Product Teams",
                description: "Need to run multi-platform tests, demos, or client PoCs? Just clone a desktop and go.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((use_case, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${use_case.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <use_case.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">{use_case.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{use_case.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">How It Works</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "1",
                  title: "Choose Your Specs",
                  description: "Pick the core count, RAM, storage, and OS (macOS, Windows, or Linux). You can customize user access too."
                },
                {
                  step: "2", 
                  title: "Launch in Minutes",
                  description: "Provision desktops instantly via our dashboard — scale up or down anytime."
                },
                {
                  step: "3",
                  title: "Access From Anywhere", 
                  description: "Log in from any device. Desktops feel native, even on 4G. Your sessions are auto-saved and resilient."
                },
                {
                  step: "4",
                  title: "Control Everything",
                  description: "Admins can track usage, pause/resume VMs, or enforce policy with just a few clicks."
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 lg:max-w-lg">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                      <CardHeader className="pb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                            {item.step}
                          </div>
                          <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex w-24 justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="flex-1 lg:max-w-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes CloudAdda Different */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">What Makes CloudAdda Different</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Rocket,
                title: "Blazing Fast Infrastructure",
                description: "No shared CPU throttling. No noisy neighbors. Just dedicated power — when you need it."
              },
              {
                icon: Users,
                title: "Real Support. Not Scripts.",
                description: "Our engineers know what \"ssh latency\" and \"GPU passthrough\" mean — and how to fix it."
              },
              {
                icon: Server,
                title: "Works with Your Stack",
                description: "From Android Studio to Jupyter to VS Code — our desktops run anything you do."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-xl text-white/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Wins */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white rounded-3xl shadow-xl border-0 p-8">
              <CardContent className="pt-0">
                <div className="text-4xl text-purple-500 mb-6">"</div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  I fired up 6 desktops in 10 minutes. My dev team was coding the same afternoon.
                </p>
                <div className="text-lg font-semibold text-gray-900">CTO, Fintech Startup</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-3xl shadow-xl border-0 p-8">
              <CardContent className="pt-0">
                <div className="text-4xl text-purple-500 mb-6">"</div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We dropped our laptop budget and doubled our productivity.
                </p>
                <div className="text-lg font-semibold text-gray-900">Engineering Head, SaaS Co.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Callout */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl shadow-2xl p-12 border-4 border-cyan-100">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Starting at <span className="text-cyan-600">₹3,299/user/month</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No surprise billing. No complicated dashboards. Just pay for what you use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                View All Plans
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 text-xl px-12 py-6 rounded-full">
                Try 7 Days Free
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Let Your Team Work Like a 2025 Tech Company — Not a 2015 One
          </h2>
          <p className="text-2xl text-white/90 mb-12 leading-relaxed">
            CloudAdda Desktops are fast, flexible, and secure. Your infra should accelerate your work — not block it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-cyan-500 hover:bg-gray-50 text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              <Rocket className="mr-3 h-6 w-6" />
              Launch Your First Desktop
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-500 text-xl px-12 py-6 rounded-full backdrop-blur-sm">
              <Users className="mr-3 h-6 w-6" />
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
