import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Users, Target, Heart, Zap, Globe, Clock, Shield, Award, TrendingUp, Building, Lightbulb, Cpu, Star } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/about" className="text-orange-500 font-medium">About Us</Link>
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
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Infrastructure
                <span className="block text-orange-600">That Just Works</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Simple. Scalable. Human. We're building a new kind of cloud company — one that puts people first.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  Meet the Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/4999a959-5e93-45a9-9599-999973a29954.png"
                alt="CloudAdda Team Illustration"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Tell Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Numbers Tell Our Story</h2>
            <p className="text-xl text-gray-600">We're proud of what we've built together</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-700 font-medium">Teams Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">99.98%</div>
              <div className="text-gray-700 font-medium">Uptime Achieved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">From Frustration to Freedom</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                CloudAdda was born from the pain of managing complex infrastructure. We're a team of engineers,
                designers, and problem-solvers who believe that cloud infrastructure should empower, not frustrate.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">We Value Time</h3>
                    <p className="text-gray-600">
                      We believe your time is best spent building, creating, and innovating — not wrestling with servers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">We Value Results</h3>
                    <p className="text-gray-600">
                      We're obsessed with delivering infrastructure that's reliable, scalable, and just works — every single time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">We Value People</h3>
                    <p className="text-gray-600">
                      We're building a company that's human-first — one that values empathy, transparency, and genuine connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/59939995-6669-4999-b999-99999ca99c9b.png"
                alt="Team brainstorming session"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">These principles guide everything we do</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We constantly push the boundaries of what's possible with cloud infrastructure.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Customer-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make starts with how it benefits our customers.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We obsess over performance, reliability, and the details that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Simplified */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built by a Team That Cares</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're engineers, designers, and problem-solvers who believe infrastructure should empower, not frustrate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600">We constantly push the boundaries of what's possible with cloud infrastructure.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customer-Centric</h3>
                    <p className="text-gray-600">Every decision we make starts with how it benefits our customers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Excellence</h3>
                    <p className="text-gray-600">We obsess over performance, reliability, and the details that matter.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/b35e7ed6-37e6-49c5-a22b-f48ae5ca78df.png" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Join Our Mission */}
      <section className="py-24 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-12 opacity-90">
            Whether you're looking to transform your infrastructure or want to be part of our journey, we'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">
                Say Hello
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </Link>
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

export default About;
