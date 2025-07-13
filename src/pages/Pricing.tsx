import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, CheckCircle, Zap, Shield, Users, Heart, Star, Globe, DollarSign, Calculator, Sparkles, GraduationCap, Monitor, Server, Check, Building, Target, Cpu, HardDrive, Network, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import CloudDesktopsPricing from "@/components/CloudDesktopsPricing";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [vpsBilling, setVpsBilling] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  useEffect(() => {
    document.title = "Training Labs, VDI & VPS Pricing | CloudAdda";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore CloudAdda\'s pricing for custom training labs, scalable VDI cloud desktops, and high-speed VPS hosting. Predictable, fair pricing — no surprises.');
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getVpsPrice = (basePrice: number) => {
    const multipliers = {
      monthly: 1,
      quarterly: 0.9, // 10% discount
      yearly: 0.8, // 20% discount
    };
    return Math.round(basePrice * multipliers[vpsBilling]);
  };

  // Updated VPS plans based on the uploaded pricing image
  const vpsPlans = [
    { name: "VPS-1", vcpu: "1", ram: "0.5GB", storage: "20GB", priceINR: 200, priceUSD: 2 },
    { name: "VPS-2", vcpu: "1", ram: "1GB", storage: "25GB", priceINR: 350, priceUSD: 4 },
    { name: "VPS-3", vcpu: "1", ram: "2GB", storage: "30GB", priceINR: 550, priceUSD: 6 },
    { name: "VPS-4", vcpu: "2", ram: "4GB", storage: "50GB", priceINR: 1000, priceUSD: 12 },
    { name: "VPS-5", vcpu: "2", ram: "8GB", storage: "50GB", priceINR: 1400, priceUSD: 17 },
    { name: "VPS-6", vcpu: "2", ram: "16GB", storage: "75GB", priceINR: 2350, priceUSD: 28 },
    { name: "VPS-7", vcpu: "4", ram: "8GB", storage: "75GB", priceINR: 1850, priceUSD: 22 },
    { name: "VPS-8", vcpu: "4", ram: "16GB", storage: "100GB", priceINR: 2800, priceUSD: 33 },
    { name: "VPS-9", vcpu: "4", ram: "32GB", storage: "150GB", priceINR: 4700, priceUSD: 56 },
    { name: "VPS-10", vcpu: "6", ram: "12GB", storage: "100GB", priceINR: 2700, priceUSD: 32 },
    { name: "VPS-11", vcpu: "6", ram: "24GB", storage: "125GB", priceINR: 4050, priceUSD: 48 },
    { name: "VPS-12", vcpu: "6", ram: "48GB", storage: "160GB", priceINR: 6600, priceUSD: 79 },
    { name: "VPS-13", vcpu: "8", ram: "16GB", storage: "100GB", priceINR: 3400, priceUSD: 40 },
    { name: "VPS-14", vcpu: "8", ram: "32GB", storage: "150GB", priceINR: 5300, priceUSD: 63 },
    { name: "VPS-15", vcpu: "8", ram: "64GB", storage: "180GB", priceINR: 8680, priceUSD: 103 },
    { name: "VPS-16", vcpu: "12", ram: "24GB", storage: "160GB", priceINR: 5160, priceUSD: 61 },
    { name: "VPS-17", vcpu: "12", ram: "48GB", storage: "180GB", priceINR: 7680, priceUSD: 91 },
    { name: "VPS-18", vcpu: "16", ram: "32GB", storage: "200GB", priceINR: 6800, priceUSD: 81 },
    { name: "VPS-19", vcpu: "16", ram: "64GB", storage: "250GB", priceINR: 10340, priceUSD: 123 },
    { name: "VPS-20", vcpu: "16", ram: "128GB", storage: "300GB", priceINR: 17000, priceUSD: 199 },
    { name: "VPS-21", vcpu: "24", ram: "48GB", storage: "250GB", priceINR: 9900, priceUSD: 118 },
    { name: "VPS-22", vcpu: "24", ram: "96GB", storage: "350GB", priceINR: 15300, priceUSD: 182 },
    { name: "VPS-23", vcpu: "24", ram: "192GB", storage: "450GB", priceINR: 25500, priceUSD: 304 },
    { name: "VPS-24", vcpu: "32", ram: "64GB", storage: "350GB", priceINR: 13300, priceUSD: 158 },
    { name: "VPS-25", vcpu: "32", ram: "128GB", storage: "450GB", priceINR: 20300, priceUSD: 242 },
    { name: "VPS-26", vcpu: "32", ram: "192GB", storage: "500GB", priceINR: 27000, priceUSD: 321 },
    { name: "VPS-27", vcpu: "32", ram: "256GB", storage: "650GB", priceINR: 34300, priceUSD: 408 },
    { name: "VPS-28", vcpu: "48", ram: "96GB", storage: "600GB", priceINR: 20400, priceUSD: 243 },
    { name: "VPS-29", vcpu: "48", ram: "192GB", storage: "700GB", priceINR: 30600, priceUSD: 364 },
    { name: "VPS-30", vcpu: "64", ram: "128GB", storage: "650GB", priceINR: 26300, priceUSD: 313 },
    { name: "VPS-31", vcpu: "64", ram: "256GB", storage: "800GB", priceINR: 40000, priceUSD: 476 },
    { name: "VPS-32", vcpu: "64", ram: "512GB", storage: "1000GB", priceINR: 66800, priceUSD: 795 },
    { name: "VPS-33", vcpu: "96", ram: "192GB", storage: "1200GB", priceINR: 40800, priceUSD: 486 },
    { name: "VPS-34", vcpu: "96", ram: "384GB", storage: "1500GB", priceINR: 61800, priceUSD: 736 },
    { name: "VPS-35", vcpu: "96", ram: "768GB", storage: "3000GB", priceINR: 109200, priceUSD: 1300 }
  ];

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
                    <a href="https://trainer.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                      Trainer Login
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="https://trainee.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                      Trainee Login
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 group">
                    <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <img 
                  src="/lovable-uploads/c219099e-0e5b-49c8-83b1-e799238baebd.png" 
                  alt="Business person with tablet sitting on piggy bank - cost savings" 
                  className="w-full h-auto max-w-lg object-contain rounded-3xl transform hover:scale-105 transition-transform duration-300"
                />
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
              {[
                { label: "Training Labs", id: "training-labs", icon: GraduationCap },
                { label: "Cloud Desktops", id: "cloud-desktops", icon: Monitor },
                { label: "VPS Hosting", id: "vps-hosting", icon: Server },
                { label: "Billing Info", id: "billing", icon: Shield }
              ].map((item, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start text-left group hover:bg-purple-50 hover:text-purple-600 text-sm lg:text-base"
                >
                  <item.icon className="w-4 h-4 mr-2 lg:mr-3 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </div>
            
            {/* Currency Toggle */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-sm text-gray-700 mb-3">Currency</h4>
              <div className="flex items-center space-x-3">
                <span className={`text-sm ${currency === 'INR' ? 'font-semibold text-orange-600' : 'text-gray-500'}`}>INR</span>
                <Switch
                  checked={currency === 'USD'}
                  onCheckedChange={(checked) => setCurrency(checked ? 'USD' : 'INR')}
                  className="data-[state=checked]:bg-orange-500"
                />
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
                    {[
                      { title: "Complete Infrastructure Management", desc: "From server provisioning to network configuration, we handle it all" },
                      { title: "Custom Environment Setup", desc: "Pre-configured labs with your exact toolchain and software requirements" },
                      { title: "Multi-User Access Control", desc: "Role-based permissions, user management, and secure isolated environments" },
                      { title: "Real-time Monitoring", desc: "24/7 system monitoring with automatic scaling and performance optimization" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-xl">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-muted-foreground text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Perfect For</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building, title: "Corporate L&D" },
                      { icon: Users, title: "Tech Bootcamps" },
                      { icon: Target, title: "Certification Training" },
                      { icon: Globe, title: "Remote Workshops" }
                    ].map((use, index) => (
                      <div key={index} className="text-center p-4 border border-orange-200 rounded-xl hover:bg-orange-50 transition-colors">
                        <use.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <p className="font-medium text-foreground">{use.title}</p>
                      </div>
                    ))}
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
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold w-full">
                      Get Custom Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Cloud Desktops Section - Replace with new component */}
          <section id="cloud-desktops" className="py-12">
            <CloudDesktopsPricing currency={currency} />
          </section>

          {/* VPS Section with Updated Table */}
          <section id="vps-hosting" className="py-12">
            <div className="text-center mb-12 lg:mb-16">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                <Server className="w-4 h-4 mr-2" />
                High-Performance Virtual Servers
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">VPS Hosting</h2>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light mb-8">
                Raw power. Full control. Built on AMD EPYC + NVMe.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto">
                From lightweight applications to enterprise workloads, our VPS solutions deliver 
                consistent performance with 99.9% uptime guarantee.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-200">
                <div className="flex space-x-1 lg:space-x-2">
                  {[
                    { key: 'monthly', label: 'Monthly' },
                    { key: 'quarterly', label: 'Quarterly' },
                    { key: 'yearly', label: 'Yearly' }
                  ].map((option) => (
                    <button
                      key={option.key}
                      onClick={() => setVpsBilling(option.key as typeof vpsBilling)}
                      className={`px-3 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all text-sm lg:text-base ${
                        vpsBilling === option.key
                          ? 'bg-orange-500 text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                      {option.key === 'quarterly' && <span className="ml-1 text-xs">(10% off)</span>}
                      {option.key === 'yearly' && <span className="ml-1 text-xs">(20% off)</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* VPS Pricing Table - Mobile Optimized */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-12">
              <div className="p-6 lg:p-8 bg-orange-500 text-white text-center">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">VPS Plans Comparison</h3>
                <p className="opacity-90 text-sm lg:text-base">Choose the perfect configuration for your needs</p>
              </div>
              
              {/* Mobile: Card Layout */}
              <div className="block lg:hidden p-4 space-y-4 max-h-96 overflow-y-auto">
                {vpsPlans.map((plan, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-3">
                      <div className="grid grid-cols-3 gap-2 text-sm flex-1">
                        <div>
                          <span className="font-medium">CPU:</span> {plan.vcpu}
                        </div>
                        <div>
                          <span className="font-medium">RAM:</span> {plan.ram}
                        </div>
                        <div>
                          <span className="font-medium">Storage:</span> {plan.storage}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-lg font-bold text-orange-600">
                          {currency === 'INR' ? '₹' : '$'}{getVpsPrice(currency === 'INR' ? plan.priceINR : plan.priceUSD).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Table Layout */}
              <div className="hidden lg:block overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold text-foreground w-1/4">vCPU</TableHead>
                      <TableHead className="font-bold text-foreground w-1/4">RAM</TableHead>
                      <TableHead className="font-bold text-foreground w-1/4">Storage</TableHead>
                      <TableHead className="font-bold text-foreground w-1/4 text-center">Price {currency}/Month</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vpsPlans.map((plan, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="text-center">{plan.vcpu}</TableCell>
                        <TableCell className="text-center">{plan.ram}</TableCell>
                        <TableCell className="text-center">{plan.storage}</TableCell>
                        <TableCell className="font-bold text-orange-600 text-center">
                          {currency === 'INR' ? '₹' : '$'}{getVpsPrice(currency === 'INR' ? plan.priceINR : plan.priceUSD).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Talk to Sales Button */}
            <div className="text-center mb-8">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Talk to Sales
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* VPS Features - Mobile Optimized */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { icon: Shield, title: "Full Root Access", desc: "Complete control over your server environment" },
                { icon: Cpu, title: "AMD EPYC Processors", desc: "Latest generation high-performance CPUs" },
                { icon: HardDrive, title: "NVMe SSD Storage", desc: "Ultra-fast storage for superior performance" },
                { icon: Network, title: "High-Speed Network", desc: "Premium bandwidth with low latency" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 lg:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <feature.icon className="w-8 lg:w-12 h-8 lg:h-12 text-green-500 mx-auto mb-3 lg:mb-4" />
                  <h4 className="font-semibold text-foreground mb-2 text-sm lg:text-base">{feature.title}</h4>
                  <p className="text-xs lg:text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
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
                {[
                  "GST invoices for all plans",
                  "Pay monthly, quarterly, or yearly",
                  "Zero lock-ins — cancel anytime",
                  "Scale up or down whenever needed",
                  "Dedicated account manager on enterprise plans"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-orange-500 rounded-3xl p-12 text-white shadow-xl max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6">Need Help Choosing?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Not sure what plan is right? Or want help creating a perfect bundle for your team?
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
  );
};

export default Pricing;
