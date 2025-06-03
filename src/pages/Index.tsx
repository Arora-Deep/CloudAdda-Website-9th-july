import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star, Award, Clock, HeartHandshake, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  const headings = [
    "The Cloud Company That Actually Cares.",
    "Premium Infrastructure. Human Touch.", 
    "Where Performance Meets Compassion.",
    "Your Success Is Our Mission."
  ];

  // New sliding words for the "Cloud Company That Actually Cares" section
  const slidingWords = [
    { text: "A Cloud Company That Actually", highlight: "Cares" },
    { text: "Infrastructure That's", highlight: "Reliable" },
    { text: "Support That's", highlight: "Human" },
    { text: "Solutions That", highlight: "Scale" },
    { text: "Performance That", highlight: "Delivers" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slidingWords.length);
    }, 2500);
    return () => clearInterval(slideInterval);
  }, []);

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
                    Powerful Cloud.
                  </span>
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900 block mb-2">
                    Zero Headaches.
                  </span>
                  <span className="text-purple-600 text-4xl lg:text-5xl font-bold block">
                    Purpose-built infrastructure for Training Labs, Virtual Desktops, and High-Performance VPS. Engineered for speed, simplicity, and real business outcomes.
                  </span>
                </h1>
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

      {/* The Pain Section - Clean Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              You're Not a <span className="text-orange-500">Cloud Company.</span>
              <br />
              <span className="text-2xl lg:text-3xl font-normal text-gray-600 mt-4">
                Why Are You Doing Cloud's Job?
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 mb-6">
                  You're not in business to <span className="text-orange-500 font-bold">manage servers.</span>
                </p>
                <p className="text-xl lg:text-2xl leading-relaxed text-gray-700 mb-6">
                  You're here to <span className="text-purple-600 font-bold">teach.</span> To <span className="text-purple-600 font-bold">launch.</span> To <span className="text-purple-600 font-bold">build.</span>
                </p>
                <p className="text-xl lg:text-2xl leading-relaxed text-gray-700">
                  But you're stuck <span className="text-orange-500 font-bold">provisioning machines, babysitting desktops, firefighting downtime.</span>
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Burning Your Time</h3>
                  <p className="text-gray-600">Hours wasted on setup instead of core business</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <BarChart3 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Killing Your Margins</h3>
                  <p className="text-gray-600">Resources drained on infrastructure instead of growth</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Team Burnout</h3>
                  <p className="text-gray-600">Making your team hate Mondays</p>
                </div>
              </div>
              
              <div className="bg-purple-600 rounded-2xl p-8 text-white">
                <p className="text-2xl lg:text-3xl font-bold text-center leading-tight">
                  There's a <span className="text-orange-400">Better</span> Way.
                </p>
              </div>
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

      {/* The Switch You Didn't Know You Needed Section - REDESIGNED */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              The Switch You Didn't Know
              <br />
              <span className="text-purple-600">
                You Needed.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what life's like on the other side — faster, simpler, happier.
            </p>
          </div>

          {/* Images and Cards Layout */}
          <div className="grid lg:grid-cols-7 gap-8 items-center">
            {/* Left Image - Confused Person */}
            <div className="lg:col-span-2 flex justify-center">
              <img 
                src="/lovable-uploads/9b9e01c2-e3f9-4704-9bc8-59a73b35ce7d.png" 
                alt="Confused person representing before state" 
                className="w-full max-w-lg h-auto object-contain" 
              />
            </div>

            {/* Cards */}
            <div className="lg:col-span-3 space-y-4">
              {/* Card 1: Training Labs */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2">
                  {/* Before */}
                  <div className="bg-gray-100 p-4 relative">
                    <div className="absolute top-3 right-3 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-sm">X</span>
                    </div>
                    <h3 className="text-md font-bold text-gray-900 mb-2">Before CloudAdda</h3>
                    <div className="space-y-1 text-gray-700">
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        Manual infra setup every time
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        Labs crash mid-session
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        Late starts, angry clients
                      </p>
                      <p className="italic text-gray-600 mt-2 text-xs">
                        "We were losing credibility with every batch."
                      </p>
                    </div>
                  </div>
                  
                  {/* Divider Arrow */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-blue-50 p-4 relative">
                    <div className="absolute top-3 right-3 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <h3 className="text-md font-bold text-gray-900 mb-2">After CloudAdda</h3>
                    <div className="space-y-1 text-gray-700">
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        You send a config, we deliver the lab
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        Environments provisioned in hours
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        Rock-solid infra, every time
                      </p>
                      <p className="italic text-gray-600 mt-2 text-xs">
                        "We focus on training. CloudAdda handles the rest."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Cloud Workstations */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2">
                  {/* Before */}
                  <div className="bg-gray-100 p-4 relative">
                    <div className="absolute top-3 right-3 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-sm">X</span>
                    </div>
                    <h3 className="text-md font-bold text-gray-900 mb-2">Before CloudAdda</h3>
                    <div className="space-y-1 text-gray-700">
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        Devs using laptops from 2019
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        Zoom + IDE = system freeze
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        No control over security
                      </p>
                      <p className="italic text-gray-600 mt-2 text-xs">
                        "Work was slow, fragile, and risky."
                      </p>
                    </div>
                  </div>
                  
                  {/* Divider Arrow */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-blue-50 p-4 relative">
                    <div className="absolute top-3 right-3 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <h3 className="text-md font-bold text-gray-900 mb-2">After CloudAdda</h3>
                    <div className="space-y-1 text-gray-700">
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        Scalable cloud desktops with serious power
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        Secure access, zero lag
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        Ideal for remote teams & fast dev cycles
                      </p>
                      <p className="italic text-gray-600 mt-2 text-xs">
                        "We finally work like a real tech team should."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: VPS */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="grid md:grid-cols-2">
                  {/* Before */}
                  <div className="bg-gray-100 p-4 relative">
                    <div className="absolute top-3 right-3 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-500 text-sm">X</span>
                    </div>
                    <h3 className="text-md font-bold text-gray-900 mb-2">Before CloudAdda</h3>
                    <div className="space-y-1 text-gray-700">
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        Paying AWS bills that don't make sense
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        CPUs throttled, support unhelpful
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-red-500 mr-1">X</span>
                        Complex dashboards, hidden limits
                      </p>
                      <p className="italic text-gray-600 mt-2 text-xs">
                        "We paid more and got less."
                      </p>
                    </div>
                  </div>
                  
                  {/* Divider Arrow */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-blue-50 p-4 relative">
                    <div className="absolute top-3 right-3 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-500 text-sm">✓</span>
                    </div>
                    <h3 className="text-md font-bold text-gray-900 mb-2">After CloudAdda</h3>
                    <div className="space-y-1 text-gray-700">
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        NVMe, AMD EPYC servers built for speed
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        Flat pricing. No surprises.
                      </p>
                      <p className="flex items-start text-xs">
                        <span className="text-green-500 mr-1">✓</span>
                        Friendly support, real help
                      </p>
                      <p className="italic text-gray-600 mt-2 text-xs">
                        "It's cloud infra that finally makes sense."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Happy Person */}
            <div className="lg:col-span-2 flex justify-center">
              <img 
                src="/lovable-uploads/8a2d7816-a253-40ef-a846-db190a4798a5.png" 
                alt="Happy person representing after state" 
                className="w-full max-w-lg h-auto object-contain" 
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Tired of the "Before" life? Join the companies that made the switch to smart, scalable cloud.
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Our Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50">
                Talk to a Human
              </Button>
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

      {/* Why Us Section - REDESIGNED WITH CAROUSEL */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Horizontally Sliding Title */}
          <div className="text-center mb-20 relative">
            <div className="h-32 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-6xl mx-auto">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlideIndex * 100}%)`
                  }}
                >
                  {slidingWords.map((slide, index) => (
                    <div 
                      key={index}
                      className="min-w-full flex items-center justify-center px-8"
                    >
                      <h2 className="text-4xl lg:text-6xl font-bold text-center leading-tight whitespace-nowrap">
                        <span className="text-gray-900">{slide.text} </span>
                        <span className="text-purple-600">{slide.highlight}</span>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Progress indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slidingWords.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${
                    index === currentSlideIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "99.9%", label: "Uptime SLA", icon: Shield },
              { number: "24/7", label: "Human Support", icon: Users },
              { number: "< 2hrs", label: "Setup Time", icon: Clock },
              { number: "500+", label: "Happy Clients", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Premium Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "You Talk to Humans",
                description: "Engineers, not bots. Every ticket. Every time. Real people who understand your problems.",
                color: "bg-gradient-to-br from-blue-500 to-blue-600",
                badge: "Human Touch"
              },
              {
                icon: Settings,
                title: "We Customize Everything",
                description: "No one-size-fits-all. We tailor setups to your exact use case and requirements.",
                color: "bg-gradient-to-br from-purple-500 to-purple-600",
                badge: "Bespoke Solutions"
              },
              {
                icon: Zap,
                title: "We Move Fast",
                description: "Environments provisioned in hours, not days. Speed without compromising quality.",
                color: "bg-gradient-to-br from-orange-500 to-orange-600",
                badge: "Lightning Speed"
              },
              {
                icon: Shield,
                title: "We Don't Oversell",
                description: "When you pay for performance, you get performance. Guaranteed resources, always.",
                color: "bg-gradient-to-br from-green-500 to-green-600",
                badge: "Guaranteed Performance"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.badge}
                  </div>
                  
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-6">
                    <div className={`w-12 h-1 bg-gradient-to-r ${item.color.replace('bg-gradient-to-br', '')} rounded-full group-hover:w-20 transition-all duration-300`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center space-x-2 bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <HeartHandshake className="w-4 h-4" />
              <span>Trusted by 500+ Companies Worldwide</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Experience the Difference
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                Talk to Our Team
              </Button>
            </div>
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
