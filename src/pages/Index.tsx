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
                  <span className="text-purple-600 text-4xl lg:text-5xl font-bold block">
                    Labs. Desktops. VPS. Just Done.
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                  You've got customers to train. Teams to empower. Products to build. But your infra? It's slow. Messy. Unreliable. CloudAdda fixes that — with battle-tested Labs, blazing-fast Virtual Desktops, and no-nonsense VPS.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Let's Fix Your Infra
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50">
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
      <section className="py-20 bg-purple-600 text-white">
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
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
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
                  <p><span className="font-semibold">Starts at ₹3,299/user/month</span></p>
                  <p><span className="font-semibold">2vCPU, 4GB RAM, SSD/NVMe, 100% SLA</span></p>
                  <p><span className="font-semibold">Built-in snapshots, security policies, and remote access</span></p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
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
                  <p><span className="font-semibold">Starts at ₹699/month</span></p>
                  <p><span className="font-semibold">1vCPU, 2GB RAM, full root access</span></p>
                  <p><span className="font-semibold">Indian & global locations. Backups included.</span></p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                  Get a VPS Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section - REDESIGNED */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              It's Not for Everyone.
              <br />
              <span className="text-purple-600">
                Just the Smart Ones.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-8">
                If
              </div>
              
              {[
                "You're tired of spending hours configuring labs.",
                "You want your team to work — not wait for IT.",
                "You care about performance. But you care more about reliability.",
                "You want to scale, without feeling like you're managing a data center."
              ].map((text, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {text}
                  </p>
                </div>
              ))}
              
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mt-12">
                Then you're our people.
              </div>
              <div className="w-24 h-1 bg-purple-600 rounded-full"></div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/f690fdec-4d37-4062-af23-158e9b86a21e.png" 
                alt="Professional man in business suit with welcoming gesture" 
                className="w-full max-w-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - REDESIGNED */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              The Cloud Company That
              <br />
              <span className="text-purple-600">
                Actually Cares.
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "You Talk to Humans",
                description: "Engineers, not bots. Every ticket. Every time.",
                color: "bg-blue-500"
              },
              {
                icon: Settings,
                title: "We Customize Everything",
                description: "No one-size-fits-all. We tailor setups to your use case.",
                color: "bg-purple-500"
              },
              {
                icon: Zap,
                title: "We Move Fast",
                description: "Environments provisioned in hours, not days.",
                color: "bg-orange-500"
              },
              {
                icon: Shield,
                title: "We Don't Oversell",
                description: "When you pay for performance, you get performance.",
                color: "bg-green-500"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section - REDESIGNED */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Built to Power
              <br />
              <span className="text-purple-600">
                Real Work,
              </span>
              <br />
              Not Just Slide Decks
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Training Programs",
                description: "Instructor-led or self-paced — we spin up stable, consistent lab environments. You send a config. We send you a URL.",
                number: "01",
                color: "bg-blue-500"
              },
              {
                title: "Remote Product Teams", 
                description: "Devs and QA running on underpowered laptops? We fix that. Secure desktops in the cloud, with real horsepower.",
                number: "02",
                color: "bg-purple-500"
              },
              {
                title: "Bootstrapped Startups",
                description: "Deploy backend systems, AI workloads, or POCs — fast and affordable. Get enterprise-grade VPS without paying AWS premiums.",
                number: "03",
                color: "bg-orange-500"
              }
            ].map((useCase, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                  <div className={`absolute top-0 left-0 w-full h-2 ${useCase.color} rounded-t-3xl`}></div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`text-6xl font-bold text-gray-100 opacity-20`}>
                      {useCase.number}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {useCase.description}
                  </p>
                  
                  <div className="mt-8">
                    <div className={`w-12 h-1 ${useCase.color} rounded-full group-hover:w-20 transition-all duration-300`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - REDESIGNED */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              What Our Customers Say
              <br />
              <span className="text-2xl lg:text-3xl font-normal text-gray-600">
                (Before They Tell Their Friends)
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                quote: "It's like magic. I told them what we needed. Next morning, 40 labs were live. No bugs. No BS.",
                author: "Founder, Corporate Training Platform",
                rating: 5,
                highlight: "magic"
              },
              {
                quote: "We switched from AWS Workspaces to CloudAdda. Better speeds. Better support. Better everything.",
                author: "Head of IT, Fintech Startup", 
                rating: 5,
                highlight: "Better everything"
              },
              {
                quote: "Honestly? They saved our training business.",
                author: "CEO, EdTech Company",
                rating: 5,
                highlight: "saved our business"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex text-yellow-400 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative mb-8">
                    <div className="text-6xl text-purple-200 absolute -top-4 -left-2 font-serif">"</div>
                    <p className="text-xl text-gray-700 leading-relaxed relative z-10 italic">
                      {testimonial.quote}
                    </p>
                    <div className="text-6xl text-purple-200 absolute -bottom-8 -right-2 font-serif rotate-180">"</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-1 bg-purple-600 rounded-full mx-auto mb-4"></div>
                    <p className="font-semibold text-gray-900 text-lg">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CloudAdda Section */}
      <section className="py-20 bg-purple-600 text-white">
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

      {/* Pricing Section - REDESIGNED */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-purple-600">
                Transparent Pricing.
              </span>
              <br />
              <span className="text-3xl lg:text-4xl font-normal text-gray-600">
                No Hidden Gotchas. Ever.
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Labs",
                price: "Custom quote based on your spec",
                description: "We'll ask you 3–5 questions, then send a complete lab setup.",
                highlight: "Same-day delivery possible.",
                cta: "Get Custom Quote",
                popular: false,
                color: "bg-blue-500"
              },
              {
                title: "Virtual Desktops", 
                price: "Starting ₹3,299/user/month",
                description: "2vCPU, 4GB RAM, SSD.",
                highlight: "Fully scalable. Just add users.",
                cta: "Launch Desktop",
                popular: true,
                color: "bg-purple-500"
              },
              {
                title: "VPS",
                price: "Starting ₹1,499/month", 
                description: "NVMe. AMD EPYC. Perfect isolation.",
                highlight: "",
                cta: "Get VPS Now",
                popular: false,
                color: "bg-orange-500"
              }
            ].map((plan, index) => (
              <div key={index} className={`group relative ${plan.popular ? 'transform scale-105 lg:scale-110' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`h-2 ${plan.color}`}></div>
                  
                  <div className="p-10">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <p className="text-gray-600">{plan.description}</p>
                      {plan.highlight && (
                        <p className="text-sm text-purple-600 font-semibold">{plan.highlight}</p>
                      )}
                    </div>
                    
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105">
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="text-orange-500 border-2 border-orange-500 hover:bg-orange-50 text-lg px-8 py-4 rounded-2xl">
              View All Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Closer Section - REDESIGNED */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold mb-12 leading-tight">
            You Can't Afford to Waste Time
            <br />
            <span className="text-purple-400">
              on Bad Infra.
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-16 text-xl lg:text-2xl leading-relaxed">
            <p className="text-gray-300">
              Bad infrastructure is invisible... until it costs you customers, kills your momentum, or ruins your launch.
            </p>
            <p className="text-gray-300">
              CloudAdda is for those who can't afford to fail. And those who don't want to build infra teams just to stay online.
            </p>
            <div className="relative">
              <p className="text-3xl lg:text-4xl font-bold text-white bg-purple-900 rounded-2xl p-8 border border-purple-500/30">
                You bring the vision. We bring the horsepower. Let's go.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              Request Demo
            </Button>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              Start Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-2 border-white hover:bg-white hover:text-black font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300">
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
