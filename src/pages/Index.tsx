
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
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Product</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center">
                  Solutions <span className="ml-1">▼</span>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center">
                  Resources <span className="ml-1">▼</span>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors flex items-center">
                  About Us <span className="ml-1">▼</span>
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Log In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Talk to Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fb923c" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-25"></div>
                  <h1 className="relative leading-tight bg-white rounded-lg p-6">
                    <span className="text-5xl lg:text-6xl font-bold text-gray-900 block mb-4">
                      Powerful Cloud.
                    </span>
                    <span className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent block mb-6">
                      Zero Headaches.
                    </span>
                  </h1>
                </div>
                <div className="relative">
                  <p className="text-xl text-gray-700 max-w-lg leading-relaxed bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-orange-100">
                    Purpose-built infrastructure for Training Labs, Virtual Desktops, and High-Performance VPS.
                    Engineered for speed, simplicity, and real business outcomes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <Target className="mr-2 h-5 w-5" />
                  See What You Can Do
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img src="/lovable-uploads/6df3b19a-2c57-45c8-89b1-a0f0e58db9ab.png" alt="3D illustration of a person with laptop and lightbulb idea" className="relative w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Hook Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23fb923c" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-30"></div>
              <h2 className="relative text-3xl lg:text-4xl font-bold mb-8 bg-gray-900 px-8 py-4 rounded-lg border border-orange-500/20">
                Cloud isn't about servers. It's about getting real work done — faster, better, and with less noise.
              </h2>
            </div>
            <div className="text-xl text-gray-300 space-y-6 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
                <p className="text-orange-400 font-semibold">CloudAdda is the partner you wish you had earlier.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
                <p>We don't just rent out infrastructure. We deliver exactly what your team, your students, or your business needs — fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes CloudAdda Different */}
      <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">What Makes CloudAdda Different</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-orange-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">We Deliver Cloud That's Ready to Use</h3>
              <p className="text-gray-600 leading-relaxed">No dashboard chaos. No cryptic pricing. Just reliable infra, built for outcomes.</p>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-orange-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">We Do the Heavy Lifting (Especially for Labs)</h3>
              <p className="text-gray-600 leading-relaxed">Tell us what your training needs — we'll provision it, test it, and deliver in record time.</p>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-orange-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">You Control Your DaaS & VPS</h3>
              <p className="text-gray-600 leading-relaxed">Need 20 desktops tomorrow? Scale. Need a high-speed VPS? Launch instantly.</p>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-orange-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Human Support That Actually Solves Things</h3>
              <p className="text-gray-600 leading-relaxed">We don't hide behind forms or "Level 1" excuses. Your ticket matters.</p>
            </div>

            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-orange-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-t-xl"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">Hardware That Hits Different</h3>
              <p className="text-gray-600 leading-relaxed">NVMe. AMD EPYC. Tier-1 bandwidth. Performance isn't a buzzword here — it's the default.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Your CloudAdda Toolkit */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Your CloudAdda Toolkit</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Training Labs */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <img src="/lovable-uploads/eb2c47ec-d601-4c75-b1fc-847f67a73aa6.png" alt="Training Labs illustration" className="relative w-full max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Training Labs</h3>
                  </div>
                  <p className="text-sm text-orange-600 uppercase tracking-wide font-semibold">For Training Firms & Enterprises</p>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border-l-4 border-orange-500">
                    <p className="text-gray-700 leading-relaxed">
                      We don't give you a console. We give you results. Send us your exact training requirements — Windows, Linux, custom stacks, networking labs — and we deliver the whole lab, fully configured, at scale.
                    </p>
                  </div>
                  <p className="text-gray-700 font-semibold bg-gray-50 rounded-lg p-3">Faster than your internal team. More reliable than ad-hoc clouds.</p>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-3 transform hover:scale-105 transition-all duration-300">
                    Schedule a Lab Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Virtual Desktops */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <img src="/lovable-uploads/5aab5b8e-c5b5-423b-a473-bcb996375d02.png" alt="Virtual Desktops illustration" className="relative w-full max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Virtual Desktops</h3>
                  </div>
                  <p className="text-sm text-orange-600 uppercase tracking-wide font-semibold">DaaS for Modern Teams</p>
                  <p className="text-gray-700 leading-relaxed">
                    High-performance, secure desktops — Windows, Linux, or macOS — ready to power remote teams, call centers, dev shops, and full-scale organizations.
                  </p>
                  <div className="space-y-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
                    <p className="text-orange-700 font-bold text-lg">Starts at ₹3,299/user/month</p>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p className="flex items-center"><Zap className="w-4 h-4 mr-2 text-orange-500" />2vCPU, 4GB RAM, SSD/NVMe, 100% SLA</p>
                      <p className="flex items-center"><Shield className="w-4 h-4 mr-2 text-orange-500" />Built-in snapshots, security policies, and remote access</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-3 transform hover:scale-105 transition-all duration-300">
                    Launch a Desktop
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* VPS */}
            <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 space-y-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <img src="/lovable-uploads/0190e56d-e54b-4c1f-81b8-34e45bd41e84.png" alt="VPS illustration" className="relative w-full max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Virtual Private Servers</h3>
                  </div>
                  <p className="text-sm text-orange-600 uppercase tracking-wide font-semibold">For Developers & Startups</p>
                  <p className="text-gray-700 leading-relaxed">
                    Don't waste time on cheap, oversold VPS providers. CloudAdda gives you fast, isolated, NVMe-powered instances with real support and predictable performance.
                  </p>
                  <div className="space-y-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4">
                    <p className="text-orange-700 font-bold text-lg">Starts at ₹699/month</p>
                    <div className="space-y-1 text-sm text-gray-700">
                      <p className="flex items-center"><Settings className="w-4 h-4 mr-2 text-orange-500" />1vCPU, 2GB RAM, full root access</p>
                      <p className="flex items-center"><Globe className="w-4 h-4 mr-2 text-orange-500" />Indian & global locations. Backups included.</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full py-3 transform hover:scale-105 transition-all duration-300">
                    Get a VPS Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Who We Serve</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center space-y-4 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">Training Provider</h3>
              <p className="text-gray-600">Labs that feel in-house, but better</p>
            </div>
            
            <div className="group text-center space-y-4 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">Tech Team or Startup</h3>
              <p className="text-gray-600">Desktops and VPS that just work</p>
            </div>
            
            <div className="group text-center space-y-4 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">Corporate L&D Head</h3>
              <p className="text-gray-600">500+ VMs, provisioned in a day</p>
            </div>
            
            <div className="group text-center space-y-4 p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors">Growing Business</h3>
              <p className="text-gray-600">Cloud that scales with you, not against you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teams Stay */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23fb923c" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Why Teams Stay with CloudAdda</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-orange-400 font-bold text-lg">Infra delivered in hours, not days</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-orange-400 font-bold text-lg">Pre-validated training environments</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-orange-400 font-bold text-lg">Super-low latency for Indian customers</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-orange-400 font-bold text-lg">GST invoices, Indian billing, friendly terms</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105">
              <div className="text-orange-400 font-bold text-lg">You talk to actual engineers — always</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Pricing Snapshot</h2>
            <p className="text-gray-600 text-lg">No fake discounts. No mystery billing. Just honest value.</p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-100">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <div className="grid grid-cols-3 gap-6 text-white font-bold text-lg">
                  <div>Product</div>
                  <div>Starts At</div>
                  <div>Key Features</div>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-3 gap-6 p-6 hover:bg-orange-50 transition-colors">
                  <div className="font-medium text-gray-900">Labs</div>
                  <div className="text-orange-600 font-bold text-lg">₹1,499/user/mo</div>
                  <div className="text-gray-600">Done-for-you provisioning</div>
                </div>
                <div className="grid grid-cols-3 gap-6 p-6 hover:bg-orange-50 transition-colors">
                  <div className="font-medium text-gray-900">DaaS</div>
                  <div className="text-orange-600 font-bold text-lg">₹3,299/user/mo</div>
                  <div className="text-gray-600">Fully managed, scalable desktops</div>
                </div>
                <div className="grid grid-cols-3 gap-6 p-6 hover:bg-orange-50 transition-colors">
                  <div className="font-medium text-gray-900">VPS</div>
                  <div className="text-orange-600 font-bold text-lg">₹699/mo</div>
                  <div className="text-gray-600">SSD/NVMe, high availability, snapshots</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 py-3 transform hover:scale-105 transition-all duration-300">
              View Full Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Customers Say It Best</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="flex text-orange-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 mb-6 border-l-4 border-orange-500">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "We switched from a global vendor to CloudAdda for our bootcamp labs — and we've never looked back. Faster setup, smarter support, and it just works."
                </p>
              </div>
              <p className="text-gray-900 font-semibold text-lg">— COO, EdTech Platform</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="flex text-orange-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 mb-6 border-l-4 border-orange-500">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "The DaaS was up and running in hours. The onboarding was personal and smooth. Way better than any enterprise we've worked with."
                </p>
              </div>
              <p className="text-gray-900 font-semibold text-lg">— CTO, 50-person Dev Agency</p>
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
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center space-y-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">Hosted in Indian and Global DCs</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">ISO, GDPR-ready setups available</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">Full snapshots, backups, security isolation</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">Optional firewalls, monitoring & access control</p>
            </div>
            <div className="text-center space-y-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">99.99% uptime SLA backed by real action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Pitch */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23fb923c" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-30"></div>
              <h2 className="relative text-4xl lg:text-5xl font-bold bg-gray-900 px-8 py-6 rounded-lg border border-orange-500/20">
                Cloud should feel powerful. Not painful.
              </h2>
            </div>
            <div className="text-xl text-gray-300 space-y-6 max-w-4xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
                <p>At CloudAdda, we don't sell servers. We solve problems.</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20">
                <p>Whether you're training 50 students, deploying 500 desktops, or spinning up your next big product — we're the cloud partner that shows up, delivers, and sticks around.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
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
                <li><a href="#" className="hover:text-orange-400 transition-colors">Training Labs</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Virtual Desktops</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">VPS</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
