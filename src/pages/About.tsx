
import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Users, Target, Heart, Shield, Globe, Zap, Lightbulb, Handshake, Building, Eye, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About CloudAdda – Simplifying Training Labs, VDI & Cloud Hosting</title>
        <meta name="description" content="CloudAdda was built to make training labs and remote infrastructure painless. Learn how we support 1K+ users across multiple countries with simple, scalable cloud." />
      </Helmet>
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-orange-500 hover:text-orange-600 flex items-center gap-1">
                      Log In
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                    <DropdownMenuItem asChild>
                      <a 
                        href="https://trainer.cloudadda.com/login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        Trainer Log In
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a 
                        href="https://trainee.cloudadda.com/login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        Trainee Log In
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6">
                    Start Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-block mb-8">
                  <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
                    Revolutionizing Infrastructure
                  </Badge>
                </div>
                <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                  We're
                  <br />
                  <span className="text-purple-600 relative">
                    Revolutionizing
                    <div className="absolute -bottom-4 left-0 w-full h-1 bg-orange-500 transform -rotate-1"></div>
                  </span>
                  <br />
                  Cloud Infrastructure
                </h1>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-px bg-purple-600"></div>
                  <div className="text-2xl font-bold text-foreground">Simple. Scalable. Human.</div>
                </div>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                  CloudAdda was born from a simple idea: cloud infrastructure should be fast, flexible, 
                  and refreshingly easy to use — for everyone, everywhere.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                    <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Join the Mission
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative flex justify-center">
                  <img 
                    src="/lovable-uploads/dc9c54ab-5975-48cf-93e2-b4f1f2327553.png" 
                    alt="CloudAdda Hero - VR Tech Innovation" 
                    className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement with Unique Typography */}
        <section className="py-24 bg-purple-600 text-white relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
              We're not just building
              <br />
              <span className="text-orange-400">cloud products.</span>
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-8"></div>
            <p className="text-2xl leading-relaxed max-w-4xl mx-auto font-light">
              We're building a world where anyone — from a solo creator to a 500-seat enterprise — 
              can launch powerful infrastructure without the headaches.
            </p>
          </div>
        </section>

        {/* Trust Stats with Unique Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
                <Globe className="w-4 h-4 mr-2" />
                Trusted by Thousands, Loved Across the Globe
              </Badge>
              <h2 className="text-4xl font-bold text-foreground">The Numbers Tell Our Story</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { icon: Users, number: "1,000+", label: "Teams Empowered", color: "purple", delay: "0ms" },
                { icon: Globe, number: "15+", label: "Cities Served", color: "orange", delay: "200ms" },
                { icon: Zap, number: "99.98%", label: "Uptime Guarantee", color: "purple", delay: "400ms" }
              ].map((stat, index) => (
                <div key={index} className="text-center group" style={{ animationDelay: stat.delay }}>
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 ${
                    stat.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black mb-2 text-foreground">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Origin Story with Split Layout */}
        <section className="py-24 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-8 bg-orange-100 text-orange-800 border-orange-200">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Our Origin Story
                </Badge>
                <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">
                  From <span className="text-orange-600">"Why is this so hard?"</span>
                  <br />
                  to <span className="text-purple-600">"This just works."</span>
                </h2>
                <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Our founders — engineers from some of the world's top tech companies — were tired. 
                    Tired of spending weeks setting up dev environments. Tired of costly cloud platforms 
                    wrapped in complexity.
                  </p>
                  <div className="bg-white p-8 rounded-2xl border-l-4 border-purple-500 shadow-sm">
                    <p className="text-foreground font-bold text-2xl mb-4">
                      "What if spinning up cloud infrastructure was as easy as ordering a coffee?"
                    </p>
                    <p className="text-muted-foreground italic">And CloudAdda was born.</p>
                  </div>
                  <p>
                    Today, we power cloud desktops, VPS hosting, and custom training labs for companies 
                    across the world — from nimble startups in Bangalore to enterprise teams in Silicon Valley.
                  </p>
                  <p className="font-bold text-foreground text-xl">And we're just getting started.</p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-12 shadow-lg border border-orange-100">
                  <div className="text-center space-y-8">
                    <div>
                      <div className="text-6xl font-black text-purple-600 mb-2">2019</div>
                      <div className="text-xl font-semibold text-foreground">CloudAdda Founded</div>
                      <div className="w-full h-2 bg-purple-500 rounded-full mt-4"></div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-6xl font-black text-orange-600 mb-2">2025</div>
                      <div className="text-xl font-semibold text-foreground">Revolutionizing Infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section with Staggered Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-foreground mb-6">What Drives Us</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These values shape every decision, every product, and every customer conversation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Innovation That Matters",
                  description: "We don't build features. We build breakthroughs. We chase the ideas that move the industry forward.",
                  color: "purple"
                },
                {
                  icon: Heart,
                  title: "Obsession with Customer Success",
                  description: "From onboarding to support — we're in your corner. We don't sleep until your cloud setup works like magic.",
                  color: "orange"
                },
                {
                  icon: Shield,
                  title: "Built on Trust",
                  description: "No fine print. No lock-ins. No shady upsells. Just transparency, reliability, and integrity at every step.",
                  color: "purple"
                },
                {
                  icon: Target,
                  title: "Speed with Simplicity",
                  description: "Complex infrastructure, made beautifully simple. The way cloud was always meant to be.",
                  color: "orange"
                },
                {
                  icon: Globe,
                  title: "Global, But Personal",
                  description: "We're proudly built in India, trusted everywhere. Wherever you are, CloudAdda feels close.",
                  color: "purple"
                },
                {
                  icon: Users,
                  title: "Great People. Greater Work.",
                  description: "We hire smart, trust deeply, and empower people to do their best work ever. The result? A team that loves what they build — and it shows.",
                  color: "orange"
                }
              ].map((value, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                    value.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Diagonal Layout */}
      <section className="py-24 bg-purple-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -translate-y-32 translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 rounded-full translate-y-24 -translate-x-24 opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-white/20 text-white border-white/30">
            <Handshake className="w-4 h-4 mr-2" />
            Want to Work With Us?
          </Badge>
          <h2 className="text-5xl font-bold mb-8">Ready to Join Our Mission?</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            Whether you're a company ready to migrate, a partner looking to collaborate, 
            or someone who wants to join the CloudAdda journey — let's talk.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 group">
              <Heart className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform" />
              Say Hello
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section with Centered Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:rotate-12 transition-transform duration-500">
            <Eye className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-8">Our Vision</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-2xl text-muted-foreground leading-relaxed font-light">
            To become the simplest, most loved cloud platform in the world — one that powers 
            everything from dev environments to entire digital businesses.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-foreground">CloudAdda</span>
              </Link>
              <p className="text-muted-foreground">
                Simple. Scalable. Human. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/training-labs" className="hover:text-foreground transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-foreground transition-colors">Cloud Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-foreground transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/support" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default About;
