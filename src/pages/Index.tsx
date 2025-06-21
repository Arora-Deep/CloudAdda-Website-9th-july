
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star, Award, Clock, HeartHandshake, Rocket, Monitor, Server, Database, Activity, Cpu, HardDrive, Target, TrendingUp, Lightbulb, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  
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

  // Customer logos for carousel
  const customerLogos = [
    { name: "Company 1", logo: "/placeholder.svg" },
    { name: "Company 2", logo: "/placeholder.svg" },
    { name: "Company 3", logo: "/placeholder.svg" },
    { name: "Company 4", logo: "/placeholder.svg" },
    { name: "Company 5", logo: "/placeholder.svg" },
    { name: "Company 6", logo: "/placeholder.svg" },
    { name: "Company 7", logo: "/placeholder.svg" },
    { name: "Company 8", logo: "/placeholder.svg" }
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

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex((prev) => (prev + 1) % customerLogos.length);
    }, 2000);
    return () => clearInterval(logoInterval);
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
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-orange-500 transition-colors bg-transparent">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/training-labs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/cloud-desktops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/vps"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">VPS Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              High-performance VPS with AMD EPYC processors
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
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

      {/* Hero Section - SIMPLIFIED AND BRIEF */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Stop Fighting the Infra.<br />
                  <span className="text-purple-600">Start Shipping Work.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  CloudAdda runs your Labs, Desktops & VPS — so your team doesn't have to.
                </p>
                <p className="text-lg text-gray-800 font-semibold">
                  No chaos. No cloud headaches. Just clean infra that does its damn job.
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

      {/* The Pain Section - UPDATED */}
      <section className="py-20 bg-purple-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight text-center lg:text-left">
                You're Not a Cloud Company.<br />
                So Why Are You Doing Cloud's Job?
              </h2>
              
              <div className="space-y-6 text-center lg:text-left">
                <p className="text-xl text-white leading-relaxed">
                  You're not here to manage servers.
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                  You're here to teach. Build. Scale. Win.
                </p>
                <p className="text-xl text-white leading-relaxed">
                  But you're stuck in cloud chaos — provisioning environments, babysitting infra, solving support tickets.
                </p>
                
                <div className="mt-12 space-y-4">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-400">
                    That's our job.
                  </div>
                  <p className="text-xl text-white leading-relaxed">
                    We run your labs, your virtual desktops, your cloud infra.<br />
                    You run your business. Simple.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/69230053-96f2-4f6a-ad77-9419979d6f8e.png" 
                alt="Frustrated person at desk with laptop" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section - MOVED UP */}
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

          <div className="space-y-24">
            {/* Training Labs */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Training Labs</h3>
                  <p className="text-sm text-purple-600 font-semibold">For Training Firms & Enterprises</p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We don't give you a console. We give you results. Send us your exact training requirements — Windows, Linux, custom stacks, networking labs — and we deliver the whole lab, fully configured, at scale. Faster than your internal team. More reliable than ad-hoc clouds.
                  </p>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                  Schedule a Lab Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Training Lab Dashboard</h4>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-900">Windows Lab Environment</span>
                      </div>
                      <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <Server className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-gray-900">Linux Server Stack</span>
                      </div>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Running</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium text-gray-900">Network Lab Setup</span>
                      </div>
                      <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Ready</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">40 instances</span> • <span className="font-semibold">99.9% uptime</span> • <span className="font-semibold">2hr setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Virtual Desktops */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Virtual Desktops</h3>
                  <p className="text-sm text-purple-600 font-semibold">DaaS for Modern Teams</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    High-performance, secure desktops — Windows, Linux, or macOS — ready to power remote teams, call centers, dev shops, and full-scale organizations. Blazing fast, customizable, and easier than hiring IT admins.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Starts at ₹3,299/user/month</span></p>
                    <p><span className="font-semibold">2vCPU, 4GB RAM, SSD/NVMe, 100% SLA</span></p>
                    <p><span className="font-semibold">Built-in snapshots, security policies, and remote access</span></p>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                  Launch a Desktop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="lg:order-1 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Desktop Management</h4>
                    <Activity className="w-5 h-5 text-purple-600" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                        <div className="flex items-center justify-between">
                          <Monitor className="w-6 h-6" />
                          <span className="text-2xl font-bold">24</span>
                        </div>
                        <p className="text-sm opacity-90 mt-2">Active Desktops</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                        <div className="flex items-center justify-between">
                          <Cpu className="w-6 h-6" />
                          <span className="text-2xl font-bold">89%</span>
                        </div>
                        <p className="text-sm opacity-90 mt-2">Performance</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Resource Usage</span>
                        <span className="text-xs text-gray-500">Real-time</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">CPU</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">RAM</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VPS */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Virtual Private Servers</h3>
                  <p className="text-sm text-purple-600 font-semibold">For Developers & Startups</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Don't waste time on cheap, oversold VPS providers. CloudAdda gives you fast, isolated, NVMe-powered instances with real support and predictable performance.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Starts at ₹699/month</span></p>
                    <p><span className="font-semibold">1vCPU, 2GB RAM, full root access</span></p>
                    <p><span className="font-semibold">Indian & global locations. Backups included.</span></p>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                  Get a VPS Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Server Overview</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Online</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Server className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">8</div>
                        <div className="text-xs text-gray-600">vCPU</div>
                      </div>
                      
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Database className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">16GB</div>
                        <div className="text-xs text-gray-600">RAM</div>
                      </div>
                      
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <HardDrive className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">500GB</div>
                        <div className="text-xs text-gray-600">NVMe</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Server Locations</span>
                        <Globe className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Mumbai, India</span>
                          <span className="text-green-600 font-medium">12ms</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Singapore</span>
                          <span className="text-green-600 font-medium">45ms</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Frankfurt</span>
                          <span className="text-green-600 font-medium">120ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Switch You Didn't Know You Needed Section - CLEANER TABLE WITH BIGGER IMAGES */}
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

          <div className="grid lg:grid-cols-7 gap-8 items-center">
            {/* Left Image - Confused Person - MUCH BIGGER */}
            <div className="lg:col-span-2 flex justify-center">
              <img 
                src="/lovable-uploads/9b9e01c2-e3f9-4704-9bc8-59a73b35ce7d.png" 
                alt="Confused person representing before state" 
                className="w-full max-w-lg h-auto object-contain transform scale-[2.5]" 
              />
            </div>

            {/* Center Table - MUCH CLEANER DESIGN */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-red-50 to-green-50">
                        <th className="text-left p-8 text-xl font-bold text-red-600 border-r border-gray-200">
                          ❌ Before CloudAdda
                        </th>
                        <th className="text-left p-8 text-xl font-bold text-green-600">
                          ✅ After CloudAdda
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          before: "Manual infra setup. Every time.",
                          after: "Labs provisioned in hours — just send a config."
                        },
                        {
                          before: "Labs crash mid-session. Chaos.",
                          after: "Rock-solid infra, every session."
                        },
                        {
                          before: "Devs on slow laptops. Lag everywhere.",
                          after: "Fast cloud desktops built to scale."
                        },
                        {
                          before: "Zoom + IDE = system freeze.",
                          after: "Secure, lag-free access — even for remote teams."
                        },
                        {
                          before: "AWS bills with no logic.",
                          after: "Flat pricing. No surprises."
                        },
                        {
                          before: "Confusing dashboards. No support.",
                          after: "Friendly support that actually helps."
                        }
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-25 transition-all duration-200">
                          <td className="p-6 text-base text-gray-700 border-r border-gray-100 bg-red-25 leading-relaxed">
                            {row.before}
                          </td>
                          <td className="p-6 text-base text-gray-700 bg-green-25 leading-relaxed">
                            {row.after}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Image - Happy Person - MUCH BIGGER */}
            <div className="lg:col-span-2 flex justify-center">
              <img 
                src="/lovable-uploads/8a2d7816-a253-40ef-a846-db190a4798a5.png" 
                alt="Happy person representing after state" 
                className="w-full max-w-lg h-auto object-contain transform scale-[2.5]" 
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

      {/* Customer Logo Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by 500+ Companies Worldwide</h3>
            <p className="text-gray-600">Join industry leaders who've made the smart switch</p>
          </div>
          
          <div className="relative">
            <div className="flex justify-center items-center overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentLogoIndex * (100 / 4)}%)`
                }}
              >
                {customerLogos.concat(customerLogos).map((logo, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-1/4 px-8 flex items-center justify-center"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[200px] h-20 flex items-center justify-center">
                      <img 
                        src={logo.logo} 
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

      {/* Pricing Section - CLEANER DESIGN WITH HIGHLIGHTED "NO HIDDEN GOTCHAS" */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-purple-600">
                Transparent Pricing.
              </span>
              <br />
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-100 to-red-100 border-4 border-orange-400 rounded-3xl px-12 py-6 mt-8 shadow-lg">
                <span className="text-4xl lg:text-5xl font-bold text-orange-600">
                  No Hidden Gotchas. Ever.
                </span>
              </div>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Training Labs",
                price: "Custom Quote",
                subtitle: "Based on your exact requirements",
                description: "We ask 3-5 questions about your training needs, then deliver a complete lab environment.",
                features: [
                  "Same-day delivery possible",
                  "Fully customized environments",
                  "Windows, Linux, or mixed stacks",
                  "Scalable to any number of users"
                ],
                cta: "Get Custom Quote",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Virtual Desktops",
                price: "₹3,299",
                subtitle: "per user/month",
                description: "High-performance cloud desktops with 2vCPU, 4GB RAM, and enterprise-grade security.",
                features: [
                  "2vCPU, 4GB RAM, SSD storage",
                  "99.9% uptime guarantee",
                  "Built-in security & compliance",
                  "Instant scaling"
                ],
                cta: "Launch Desktop",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "VPS Hosting",
                price: "₹1,499",
                subtitle: "per month",
                description: "NVMe-powered virtual servers with AMD EPYC processors and dedicated resources.",
                features: [
                  "NVMe SSD storage",
                  "AMD EPYC processors",
                  "Full root access",
                  "Multiple data center locations"
                ],
                cta: "Get VPS Now",
                gradient: "from-orange-500 to-orange-600"
              }
            ].map((plan, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-purple-200">
                  {/* Gradient top bar */}
                  <div className={`h-3 bg-gradient-to-r ${plan.gradient}`}></div>
                  
                  <div className="p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                        <div className="text-gray-600 text-lg">{plan.subtitle}</div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">{plan.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-6 h-6 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg`}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">Need something custom? We've got you covered.</p>
            <Button size="lg" variant="outline" className="text-orange-500 border-2 border-orange-500 hover:bg-orange-50 text-lg px-8 py-4 rounded-2xl">
              Talk to Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Closer Section - SIMPLIFIED WITHOUT "DON'T LET THEM WIN" */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">The Moment of Truth</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent">
                Your Competition
              </span>
              <br />
              <span className="text-white">
                Is Already Moving.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">While You're Managing Servers...</h3>
                    <p className="text-gray-300">They're training more customers, launching faster, and scaling without the headaches.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">While You're Fighting Downtime...</h3>
                    <p className="text-gray-300">They're building reputation, winning clients, and growing revenue.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">While You're Troubleshooting...</h3>
                    <p className="text-gray-300">They're innovating, creating, and leaving you behind.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-orange-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6">
                    <p className="text-lg text-white font-semibold">
                      "We switched to CloudAdda and grew 300% in 6 months. Best decision ever."
                    </p>
                    <p className="text-sm text-gray-400 mt-2">- CEO, Leading Training Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="text-center space-y-8 mb-16">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">The Cost of Waiting</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">$10K+</div>
                  <p className="text-gray-300">Lost revenue per month from infrastructure issues</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">40hrs</div>
                  <p className="text-gray-300">Wasted weekly on server management</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <p className="text-gray-300">Of teams switch within 6 months anyway</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">Make The Switch. Today.</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join 500+ companies who stopped fighting infrastructure and started winning customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Your Transformation
                  <Rocket className="ml-3 h-6 w-6" />
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                  Talk to Our Team
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                ⚡ Setup in hours, not weeks • 💰 Pay for what you use • 🔒 Enterprise security included
              </p>
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
