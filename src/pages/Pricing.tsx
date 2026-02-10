import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Shield, Users, Globe, DollarSign, GraduationCap, Check, Building, Target, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const Pricing = () => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <>
      <Helmet>
        <title>Training Labs, VDI & VPS Pricing | CloudAdda</title>
        <meta name="description" content="Explore CloudAdda's pricing for custom training labs, scalable VDI cloud desktops, and high-speed VPS hosting. Predictable, fair pricing — no surprises." />
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
                            <Link to="/training-labs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">Training Labs</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Provisioned lab environments for training companies
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
                <Link to="/pricing" className="text-orange-500 font-medium">Pricing</Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
                <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                      Log In
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <a href="https://trainer-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                        Trainer Login
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="https://trainee-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                        Trainee Login
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/contact" onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-block mb-8">
                  <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200 text-sm font-medium px-4 py-2">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Zero Waste Pricing
                  </Badge>
                </div>
                <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                  <span className="text-purple-600">Pricing</span>
                  <br />
                  <span className="text-gray-900">That Makes</span>
                  <br />
                  <span className="text-orange-600">CFOs Smile</span>
                </h1>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-2xl font-bold text-foreground">Zero waste. Full performance. Built to scale.</div>
                </div>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                  At CloudAdda, we don't just offer pricing — we offer clarity. Whether you're running training labs, 
                  deploying virtual desktops, or spinning up servers, every rupee delivers real-world value.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/contact" onClick={() => window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })}>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 group">
                      <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Talk to Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative">
                  <img src="/lovable-uploads/c219099e-0e5b-49c8-83b1-e799238baebd.png" alt="Business person with tablet sitting on piggy bank - cost savings" className="w-full h-auto max-w-lg object-contain rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Sticky Sidebar Navigation - Mobile optimized */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-4 lg:p-6 shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-4">Quick Navigation</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {[{
                label: "Training Labs",
                id: "training-labs",
                icon: GraduationCap
              }, {
                label: "Billing Info",
                id: "billing",
                icon: Shield
              }].map((item, index) => <Button key={index} variant="ghost" onClick={() => scrollToSection(item.id)} className="w-full justify-start text-left group hover:bg-purple-50 hover:text-purple-600 text-sm lg:text-base">
                    <item.icon className="w-4 h-4 mr-2 lg:mr-3 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Button>)}
              </div>
              
              {/* Currency Toggle */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-sm text-gray-700 mb-3">Currency</h4>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm ${currency === 'INR' ? 'font-semibold text-orange-600' : 'text-gray-500'}`}>INR</span>
                  <Switch checked={currency === 'USD'} onCheckedChange={checked => setCurrency(checked ? 'USD' : 'INR')} className="data-[state=checked]:bg-orange-500" />
                  <span className={`text-sm ${currency === 'USD' ? 'font-semibold text-orange-600' : 'text-gray-500'}`}>USD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 space-y-16 lg:space-y-24 pb-16 lg:pb-24">
            {/* Training Labs Section - Enhanced */}
            <section id="training-labs" className="py-12">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Enterprise Training Solutions
                </Badge>
                <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">
                  Training Labs —
                  <br />
                  <span className="text-orange-600">Custom Infrastructure, Zero Hassle</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                  We handle 100% of the infrastructure. You focus on what matters — delivering world-class training experiences.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">What We Provide</h3>
                    <div className="space-y-4">
                      {[{
                      title: "Complete Infrastructure Management",
                      desc: "From server provisioning to network configuration, we handle it all"
                    }, {
                      title: "Custom Environment Setup",
                      desc: "Pre-configured labs with your exact toolchain and software requirements"
                    }, {
                      title: "Multi-User Access Control",
                      desc: "Role-based permissions, user management, and secure isolated environments"
                    }, {
                      title: "Real-time Monitoring",
                      desc: "24/7 system monitoring with automatic scaling and performance optimization"
                    }].map((feature, index) => <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{feature.title}</h4>
                            <p className="text-muted-foreground text-sm">{feature.desc}</p>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Perfect For</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[{
                      icon: Building,
                      title: "Corporate L&D"
                    }, {
                      icon: Users,
                      title: "Tech Bootcamps"
                    }, {
                      icon: Target,
                      title: "Certification Training"
                    }, {
                      icon: Globe,
                      title: "Remote Workshops"
                    }].map((use, index) => <div key={index} className="text-center p-4 border border-orange-200 rounded-xl hover:bg-orange-50 transition-colors">
                          <use.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                          <p className="font-medium text-foreground">{use.title}</p>
                        </div>)}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Custom Pricing</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Every training program is unique. We design the perfect infrastructure based on your curriculum, user count, and duration.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2">
                        <Check className="w-5 h-5" />
                        <span>No fixed plans - completely customized</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-5 h-5" />
                        <span>Transparent pricing with detailed breakdown</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Check className="w-5 h-5" />
                        <span>Free consultation and infrastructure planning</span>
                      </div>
                    </div>
                    <Link to="/contact" onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })}>
                      <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold w-full">
                        Get Custom Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>


            {/* Billing Section */}
            <section id="billing" className="py-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-foreground mb-8">Billing Made Beautiful</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-16 text-left max-w-4xl mx-auto">
                  {["GST invoices for all plans", "Pay monthly, quarterly, or yearly", "Zero lock-ins — cancel anytime", "Scale up or down whenever needed", "Dedicated account manager on enterprise plans"].map((feature, index) => <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground text-lg">{feature}</span>
                    </div>)}
                </div>

                <div className="bg-orange-500 rounded-3xl p-12 text-white shadow-xl max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold mb-6">Need Help Choosing?</h3>
                  <p className="text-xl mb-8 opacity-90">
                    Not sure what plan is right? Or want help creating a perfect bundle for your team?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/contact" onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })}>
                      <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
                        Talk to an Expert
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                      View Demo
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link to="/" className="flex items-center space-x-2">
                  <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                  
                </Link>
                <p className="text-muted-foreground">
                  Simple. Scalable. Human. Infrastructure that just works.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/training-labs" className="hover:text-foreground transition-colors">Training Labs</Link></li>
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
    </>;
};
export default Pricing;