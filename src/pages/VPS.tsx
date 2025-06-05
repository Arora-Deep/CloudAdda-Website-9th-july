
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Cpu, HardDrive, Globe, TrendingUp, Brain, BarChart3, CheckCircle, Zap, Server, Database, Settings, Rocket, Activity, Award, Users, Shield } from "lucide-react";
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

      {/* Hero Section - Matching Homepage Style */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200">
                <Server className="mr-2 h-4 w-4" />
                VPS Hosting That Actually Delivers
              </div>
              
              <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                Power Without
                <span className="block text-purple-600">The BS.</span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 leading-relaxed">
                NVMe speed, AMD EPYC cores, and real human support at half the price of AWS. No throttling, no surprises, no regrets.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Deploy Your VPS Now
                  <Server className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  View Live Benchmarks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Numbers Don't Lie</h2>
            <p className="text-xl text-gray-600">Real performance. Real benchmarks. Real results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "50%",
                label: "Lower Cost",
                description: "vs AWS, Azure, GCP",
                icon: TrendingUp,
                color: "text-green-600",
                bgColor: "bg-green-50"
              },
              {
                metric: "3.2x",
                label: "Faster I/O",
                description: "NVMe vs standard SSD",
                icon: Zap,
                color: "text-purple-600",
                bgColor: "bg-purple-50"
              },
              {
                metric: "99.98%",
                label: "Uptime SLA",
                description: "Guaranteed availability",
                icon: Shield,
                color: "text-orange-600",
                bgColor: "bg-orange-50"
              }
            ].map((item, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{item.metric}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Developers Choose CloudAdda</h2>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Dedicated Resources",
                    description: "Your vCPUs are yours. No sharing, no throttling, no performance lottery.",
                    icon: Cpu,
                    highlight: "100% Dedicated"
                  },
                  {
                    title: "NVMe Storage",
                    description: "Lightning-fast I/O that makes your applications actually responsive.",
                    icon: HardDrive,
                    highlight: "3.2x Faster"
                  },
                  {
                    title: "Real Human Support",
                    description: "Engineers who actually understand infrastructure, not chatbots.",
                    icon: Users,
                    highlight: "< 2hr Response"
                  },
                  {
                    title: "Transparent Pricing",
                    description: "No surprise bills. No hidden fees. Just honest, flat-rate pricing.",
                    icon: Award,
                    highlight: "50% Less Cost"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-6 group cursor-pointer hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <feature.icon className="w-7 h-7 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Live Performance Monitor</h4>
                  
                  <div className="space-y-6">
                    {[
                      { label: "CPU Usage", value: "23%", bar: "23" },
                      { label: "Memory", value: "1.2GB / 8GB", bar: "15" },
                      { label: "Disk I/O", value: "250 MB/s", bar: "40" },
                      { label: "Network", value: "45 Mbps", bar: "30" }
                    ].map((stat, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                          <span className="text-sm text-gray-600">{stat.value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${stat.bar}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-green-600" />
                      <span className="text-green-700 font-semibold">All systems optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Mosaic */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for Every Workload</h2>
            <p className="text-xl text-gray-600">From startups to scale-ups, we've got your compute covered</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Web Applications", icon: Globe, description: "Fast, scalable hosting for your apps" },
              { name: "AI/ML Workloads", icon: Brain, description: "GPU-accelerated computing power" },
              { name: "Game Servers", icon: Monitor, description: "Low-latency, high-performance gaming" },
              { name: "Development", icon: Settings, description: "Isolated dev and staging environments" },
              { name: "E-commerce", icon: BarChart3, description: "Handle traffic spikes with ease" },
              { name: "Databases", icon: Database, description: "Optimized for database workloads" },
              { name: "APIs", icon: Server, description: "Reliable backend infrastructure" },
              { name: "Startups", icon: Rocket, description: "Scale from MVP to millions of users" }
            ].map((useCase, index) => (
              <div 
                key={index}
                className="group hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <useCase.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{useCase.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Spotlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Pricing That Makes Sense</h2>
            <p className="text-xl text-gray-600">No hidden fees. No surprise bills. Just honest compute.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Starter", 
                price: "₹799", 
                period: "/month",
                specs: ["2 vCPU", "4GB RAM", "50GB NVMe", "1TB Transfer"],
                popular: false,
                description: "Perfect for small projects and testing"
              },
              { 
                name: "Professional", 
                price: "₹1,399", 
                period: "/month",
                specs: ["4 vCPU", "8GB RAM", "100GB NVMe", "2TB Transfer"],
                popular: true,
                description: "Ideal for production applications"
              },
              { 
                name: "Performance", 
                price: "₹2,799", 
                period: "/month",
                specs: ["8 vCPU", "16GB RAM", "200GB NVMe", "4TB Transfer"],
                popular: false,
                description: "For high-traffic, demanding workloads"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-purple-50 border-2 border-purple-500 shadow-2xl scale-105' 
                    : 'bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  
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
          
          <div className="text-center mt-12">
            <p className="text-gray-600">All plans include full root access, 24/7 support, and instant provisioning</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready for VPS That Actually Works?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Deploy in 60 seconds. Scale in real-time. Support that cares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Deploy Your VPS Now
              <Server className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-16 py-6 text-xl border-gray-300 hover:bg-gray-50">
              Talk to an Engineer
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

export default VPS;
