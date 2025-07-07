import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, CheckCircle, Zap, Shield, Users, Heart, Star, Globe, GraduationCap, Monitor, Server, Building, Clock, TrendingUp, Award, Target, Sparkles, Code, Brain, Cpu, HardDrive, Gauge, Network, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
                  <Zap className="w-4 h-4 mr-2" />
                  Born in India, Built for the World
                </Badge>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Cloud Infrastructure
                <span className="block text-orange-600">That Actually Works</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                No more weekend server configs. No more mid-training crashes. No more support black holes. 
                Just reliable, scalable infrastructure that lets you focus on what matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link to="/contact">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50"
                >
                  Watch in Action
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">99.98%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">&lt;2min</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Human Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/4f827c05-6a04-4635-b840-f9bc202e40ca.png" 
                alt="Cloud infrastructure visualization" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CloudAdda Handles Your Infrastructure Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">CloudAdda Handles Your Infrastructure</h2>
            <p className="text-xl text-gray-600">From training labs to enterprise desktops — we've got you covered</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Training Labs */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Labs</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Custom lab environments that launch in minutes, scale effortlessly, and never crash mid-session. 
                Perfect for bootcamps, corporate training, and certification programs.
              </p>
              
              <div className="space-y-3 mb-8">
                {["Instant lab provisioning", "Real-time monitoring", "Multi-user management", "99.9% session uptime"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full group-hover:bg-orange-50 group-hover:border-orange-200" asChild>
                <Link to="/training-labs">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Cloud Desktops */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Monitor className="w-8 h-8 text-purple-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Desktops</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Role-based virtual desktops that give your team the exact performance they need. 
                From lightweight admin tasks to GPU-accelerated design work.
              </p>
              
              <div className="space-y-3 mb-8">
                {["Role-based configurations", "Instant access anywhere", "Enterprise security", "Automatic scaling"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200" asChild>
                <Link to="/cloud-desktops">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* VPS Hosting */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">VPS Hosting</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                High-performance virtual servers powered by AMD EPYC processors and NVMe storage. 
                Perfect for applications, websites, and development environments.
              </p>
              
              <div className="space-y-3 mb-8">
                {["AMD EPYC performance", "NVMe SSD storage", "Full root access", "99.9% uptime guarantee"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200" asChild>
                <Link to="/vps">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* A Cloud Company That Actually Cares */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">A Cloud Company That Actually Cares</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Real Humans, Real Support</h3>
                    <p className="text-gray-600">No bots. No scripted responses. Just engineers who understand your problems and actually fix them.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Performance</h3>
                    <p className="text-gray-600">Enterprise-grade AMD EPYC processors, pure NVMe storage, and infrastructure that scales with your needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Security You Can Trust</h3>
                    <p className="text-gray-600">Built-in snapshots, access controls, and enterprise security features that protect your data and users.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience the Difference</h3>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">Trusted by 500+ companies worldwide</p>
                </div>
                
                <div className="flex items-center space-x-8">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                  ))}
                  <span className="text-gray-600 font-medium">4.9/5 average rating</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/8a2d7816-a253-40ef-a846-db190a4798a5.png" 
                alt="Customer support team helping clients" 
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">No hidden fees. No surprise bills. Just honest pricing that scales with you.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Training Labs Pricing */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <GraduationCap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Training Labs</h3>
                <p className="text-gray-600 mt-2">Custom infrastructure for training</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom Quote</div>
                <div className="text-gray-600">Based on your needs</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {["Fully managed setup", "Instant provisioning", "24/7 monitoring", "Custom configurations"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                <Link to="/pricing#training-labs">
                  View Pricing
                </Link>
              </Button>
            </div>

            {/* Cloud Desktops Pricing */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-purple-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">Most Popular</Badge>
              </div>
              
              <div className="text-center mb-6">
                <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Cloud Desktops</h3>
                <p className="text-gray-600 mt-2">Role-based virtual desktops</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">₹1,499+</div>
                <div className="text-gray-600">Per user/month</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {["Role-based plans", "Enterprise performance", "24/7 support", "Multi-OS support"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-purple-500 hover:bg-purple-600" asChild>
                <Link to="/pricing#cloud-desktops">
                  View Pricing
                </Link>
              </Button>
            </div>

            {/* VPS Pricing */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">VPS Hosting</h3>
                <p className="text-gray-600 mt-2">High-performance servers</p>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-900 mb-2">₹200+</div>
                <div className="text-gray-600">Per month</div>
              </div>
              
              <div className="space-y-3 mb-8">
                {["AMD EPYC processors", "NVMe SSD storage", "Full root access", "99.9% uptime"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-blue-500 hover:bg-blue-600" asChild>
                <Link to="/pricing#vps-hosting">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started */}
      <section className="py-24 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl mb-12 opacity-90">
            From training labs to enterprise desktops, we've got the solutions you need to scale, secure, and simplify your cloud infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Talk to an Expert
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              View Demo
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

export default Index;
