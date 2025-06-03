
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star, Rocket, Target, Clock, TrendingUp } from "lucide-react";

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
                    Your Cloud.
                  </span>
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900 block mb-6">
                    Fully Handled.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  High-Performance Labs, Virtual Desktops & VPS – Provisioned Fast. Backed by Humans.
                </p>
                <p className="text-lg text-gray-500 max-w-lg">
                  No complexity. No guesswork. Just the perfect cloud environment for your training, teams, or business workloads – ready in hours, not days.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                  <Target className="mr-2 h-5 w-5" />
                  Talk to Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/6df3b19a-2c57-45c8-89b1-a0f0e58db9ab.png" alt="3D illustration of a person with laptop and lightbulb idea" className="w-full max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Purple Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-12">
            {/* Main headline */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                CloudAdda is <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Born in India</span>, 
                <br />Built for the World
              </h2>
              <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
                We're not a low-end provider. We're a new kind of cloud — built around your actual needs. 
                No bloated control panels, no guessing, no jargon.
              </p>
            </div>

            {/* Three specializations */}
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-semibold text-white">
                We specialize in three things, and we do them well:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Training Infrastructure</h4>
                  <p className="text-purple-100 leading-relaxed">
                    Custom labs that work flawlessly for your courses and workshops
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Desktops for Teams</h4>
                  <p className="text-purple-100 leading-relaxed">
                    Powerful cloud desktops that enable remote work without compromise
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Fast VPS for People Who Care</h4>
                  <p className="text-purple-100 leading-relaxed">
                    Premium hosting infrastructure that delivers real performance
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom commitment text */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-xl lg:text-2xl text-white font-medium">
                All of it with <span className="text-yellow-300 font-bold">elite customer service</span>, 
                <span className="text-yellow-300 font-bold"> clear pricing</span>, and a 
                <span className="text-yellow-300 font-bold"> 100% commitment to reliability</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Floating elements for premium feel */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/10 rounded-full blur-xl"></div>
      </section>

      {/* Why CloudAdda - 3 Column Value Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why CloudAdda</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast, Hassle-Free Provisioning</h3>
              <p className="text-gray-600">We deliver fully configured infrastructure — fast. From training labs to DaaS and VPS, we handle setup, security, OS, IPs, and everything else.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Built for Scale, Ready for Speed</h3>
              <p className="text-gray-600">Blazing fast NVMe storage. EPYC processors. Private cloud-grade infrastructure. You're not getting a cheap VPS — you're getting a great one.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Human-Centered Support</h3>
              <p className="text-gray-600">Get real help, fast. Our expert support team is available and attentive — no tickets disappearing into a black hole.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Product Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Training Labs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="text-2xl">🔬</div>
                    <h3 className="text-3xl font-bold text-gray-900">Training Labs</h3>
                    <p className="text-sm text-red-600 uppercase tracking-wide font-semibold">for Institutes & Corporates</p>
                    <h4 className="text-xl font-semibold text-gray-900">Custom Cloud Labs. Provisioned by Us, Ready for You.</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We don't give you buttons. We give you ready-to-go environments. Just tell us your training needs, and we'll spin up optimized virtual labs tailored for each course or workshop.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-700 font-medium flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        No Self-Setup. Just Results.
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      <strong>Ideal for:</strong> Training companies, EdTech platforms, IT trainers, and corporate L&D teams.
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3">
                      Request Labs Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 lg:p-12 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 w-full max-w-md">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-white font-semibold text-lg">Interactive Lab Environment</div>
                      <div className="text-purple-200 text-sm">Ready-to-use development environments for your students</div>
                      <div className="space-y-2 mt-6">
                        <div className="bg-white/20 rounded h-4"></div>
                        <div className="bg-white/30 rounded h-4 w-3/4"></div>
                        <div className="bg-white/25 rounded h-4 w-5/6"></div>
                      </div>
                      <div className="mt-6 space-y-3">
                        <div className="flex items-center text-white text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          Fully isolated VMs for each student
                        </div>
                        <div className="flex items-center text-white text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          Custom images, pre-installed dev tools
                        </div>
                        <div className="flex items-center text-white text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          Admin dashboard for instructors
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DaaS */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-teal-500 to-teal-700 p-8 lg:p-12 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 w-full max-w-md">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-white font-semibold text-lg">Cloud Desktop Dashboard</div>
                      <div className="text-teal-200 text-sm">Professional desktops that enable remote work</div>
                      <div className="space-y-3 mt-6">
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-400 rounded"></div>
                            <div className="text-white text-sm">Windows 11 Pro</div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-orange-400 rounded"></div>
                            <div className="text-white text-sm">Ubuntu 22.04 LTS</div>
                          </div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-400 rounded"></div>
                            <div className="text-white text-sm">Custom OS Images</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-teal-600 rounded-lg p-3 mt-4">
                        <div className="text-white text-xs">DaaS (Cloud Desktops)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="text-2xl">💻</div>
                    <h3 className="text-3xl font-bold text-gray-900">DaaS</h3>
                    <p className="text-sm text-red-600 uppercase tracking-wide font-semibold">Desktop as a Service</p>
                    <h4 className="text-xl font-semibold text-gray-900">Cloud Desktops Built for Serious Work.</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Provide your teams with fast, secure, always-available desktops – perfect for remote work, developers, offshore teams, and data teams.
                    </p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-purple-700 font-bold text-lg">2vCPU / 4GB RAM from ₹3,299/month per user</p>
                      <p className="text-gray-600 text-sm mt-2"><strong>Includes:</strong> Persistent storage, root access, secure logins, your preferred OS, and full control.</p>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3">
                      See Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* VPS */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="text-2xl">🚀</div>
                    <h3 className="text-3xl font-bold text-gray-900">VPS Hosting</h3>
                    <h4 className="text-xl font-semibold text-gray-900">VPS That Doesn't Feel Like Shared Hosting.</h4>
                    <p className="text-gray-600 leading-relaxed">
                      SSD? No thanks. We run on blazing-fast NVMe and AMD EPYC hardware — because quality isn't optional.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      Whether you're hosting apps, APIs, or your own clients — CloudAdda gives you raw power with responsive support.
                    </p>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <p className="text-purple-700 font-bold text-lg">Starts at ₹799/month. Comes with love.</p>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3">
                      View VPS Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-12 flex items-center justify-center text-green-400 font-mono">
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 w-full max-w-md border border-green-500/30">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm ml-4">terminal</span>
                      </div>
                      <div className="text-green-400 text-sm">
                        <div>$ sudo systemctl status nginx</div>
                        <div className="text-green-300">● nginx.service - active (running)</div>
                        <div className="mt-2">$ htop</div>
                        <div className="text-yellow-400">CPU: EPYC 7763 [████████████] 100%</div>
                        <div className="text-blue-400">MEM: 32GB NVMe Storage</div>
                        <div className="mt-2">$ uptime</div>
                        <div className="text-green-300">99.99% uptime, 0 users, load: 0.1</div>
                      </div>
                      <div className="mt-4 flex items-center text-green-400 text-xs">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        VPS Instance Running
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Uses CloudAdda */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who Uses CloudAdda?</h2>
            <p className="text-xl text-gray-600">Trusted by tech-driven teams who don't compromise.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12">
            <div className="space-y-2">
              <div className="text-green-600 font-bold">✔️ EdTech companies running live trainings</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-600 font-bold">✔️ Remote-first startups equipping offshore teams</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-600 font-bold">✔️ DevOps teams needing stable, powerful infrastructure</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-600 font-bold">✔️ Small businesses looking for affordable, reliable desktops</div>
            </div>
            <div className="space-y-2">
              <div className="text-green-600 font-bold">✔️ Agencies delivering client work on isolated servers</div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600">Our customers don't settle for cheap clouds. They choose better clouds.</p>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why We're Different</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl">🛠️</div>
              <h3 className="font-bold text-gray-900">Not Just a Panel. A Partner.</h3>
              <p className="text-gray-600">We handle the heavy lifting — OS, firewalls, RAID, backups, IP config, network tuning. You get more than a server — you get outcomes.</p>
            </div>
            
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl">🏁</div>
              <h3 className="font-bold text-gray-900">Fast Setup. Instant Upgrades.</h3>
              <p className="text-gray-600">We provision DaaS and VPS in minutes. Labs are delivered in hours. Scaling? Adding users? Just say the word.</p>
            </div>
            
            <div className="text-center space-y-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl">🔐</div>
              <h3 className="font-bold text-gray-900">Secure by Default</h3>
              <p className="text-gray-600">Enterprise-grade security. Private instances. Full isolation. Zero nonsense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Customer Testimonials</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6">
                "We moved our entire remote workforce to CloudAdda's DaaS. It's been 99.99% uptime, blazing fast, and the support is a real human — every time."
              </p>
              <p className="text-gray-900 font-semibold">— CTO, EdTech company</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-600 mb-6">
                "Their labs made our workshops run smoothly across 200 students. We didn't touch a single setup detail."
              </p>
              <p className="text-gray-900 font-semibold">— Training Head, IT Academy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pricing Preview</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Product</th>
                  <th className="py-4 px-6 text-left">Starting Price</th>
                  <th className="py-4 px-6 text-left">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Labs</td>
                  <td className="py-4 px-6 text-purple-600 font-bold">Custom Quote</td>
                  <td className="py-4 px-6">Tailored infra, pre-configured, fast setup</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">DaaS</td>
                  <td className="py-4 px-6 text-purple-600 font-bold">₹3,299/user</td>
                  <td className="py-4 px-6">Cloud desktops with full control</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">VPS Hosting</td>
                  <td className="py-4 px-6 text-purple-600 font-bold">₹799/month</td>
                  <td className="py-4 px-6">NVMe + EPYC, root access, great support</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8 space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3">
              Full Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-8 py-3">
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About CloudAdda */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About CloudAdda</h2>
            <p className="text-xl text-gray-600">Born in India, Built for the World</p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-600">
              We're not a low-end provider. We're a new kind of cloud — built around your actual needs. No bloated control panels, no guessing, no jargon.
            </p>
            
            <div className="text-left space-y-4 bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">We specialize in three things, and we do them well:</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Training Infrastructure</strong></li>
                <li>• <strong>Desktops for teams</strong></li>
                <li>• <strong>Fast VPS for people who care</strong></li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-600">
              All of it with elite customer service, clear pricing, and a 100% commitment to reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Experience a Better Cloud?
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto">
              Whether you're running a training, onboarding a remote team, or launching apps — CloudAdda is here to make it painless, fast, and powerful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Book a Free Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full transition-all duration-300">
                Explore Plans
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
                Your Cloud. Fully Handled.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Training Labs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Virtual Desktops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">VPS Hosting</a></li>
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
