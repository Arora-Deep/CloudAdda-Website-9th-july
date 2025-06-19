import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { 
  Check, 
  X, 
  Star, 
  ArrowRight, 
  Users, 
  Zap, 
  Shield, 
  Heart,
  Building,
  Rocket,
  Crown,
  Target,
  Globe,
  Award,
  CheckCircle,
  Clock,
  Coffee,
  Headphones,
  Code
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 group">
                  <Calculator className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Calculate Your Savings
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 group">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  See Live Demo
                </Button>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        {/* Sticky Sidebar Navigation */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg text-foreground mb-4">Quick Navigation</h3>
            <div className="space-y-2">
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
                  className="w-full justify-start text-left group hover:bg-purple-50 hover:text-purple-600"
                >
                  <item.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 space-y-24 pb-24">
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
                  <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold w-full">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Cloud Desktops Section - Enhanced */}
          <section id="cloud-desktops" className="py-12">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
                <Monitor className="w-4 h-4 mr-2" />
                Virtual Desktop Infrastructure
              </Badge>
              <h2 className="text-5xl font-bold text-foreground mb-6">Cloud Desktops (DaaS)</h2>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light mb-8">
                Access your work environment from anywhere. Secure, scalable, and always up-to-date.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                No more "it works on my machine" — everyone gets the same powerful, consistent desktop experience 
                whether they're working from home, office, or anywhere in between.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Your data never leaves our secure data centers. End-to-end encryption and compliance-ready infrastructure."
                },
                {
                  icon: Zap,
                  title: "Instant Scaling",
                  description: "Need more power for a project? Upgrade instantly. Project done? Scale back down. Pay only for what you use."
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Shared environments, real-time collaboration, and centralized software management for your entire team."
                }
              ].map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pricing Plans */}
            <div className="space-y-12">
              {/* Light Users */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">For Everyday Work</h3>
                  <p className="text-lg text-muted-foreground">Perfect for administrative tasks, document work, and light applications</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {[
                    {
                      name: "Essential",
                      specs: "2 vCPU • 4GB RAM • 50GB SSD",
                      price: "₹1,499",
                      description: "Email, web browsing, office documents",
                      features: ["Pre-installed Office Suite", "Web browsers & basic tools", "24/7 support", "Daily backups"]
                    },
                    {
                      name: "Professional",
                      specs: "4 vCPU • 8GB RAM • 100GB SSD",
                      price: "₹2,599",
                      description: "CRM, advanced office work, light multitasking",
                      features: ["Everything in Essential", "Advanced productivity tools", "Multiple monitor support", "Priority support"]
                    }
                  ].map((plan, index) => (
                    <Card key={index} className="shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{plan.specs}</CardDescription>
                        <div className="text-3xl font-bold text-foreground mt-4">{plan.price}<span className="text-lg text-muted-foreground">/month</span></div>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Get Started</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Power Users */}
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">For Developers & Creators</h3>
                  <p className="text-lg text-muted-foreground">High-performance environments for development, design, and intensive work</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {[
                    {
                      name: "Developer",
                      specs: "6 vCPU • 16GB RAM • 200GB NVMe",
                      price: "₹4,399",
                      description: "Full-stack development, IDEs, testing environments",
                      popular: false
                    },
                    {
                      name: "Team Lead",
                      specs: "8 vCPU • 32GB RAM • 300GB NVMe",
                      price: "₹6,599",
                      description: "Heavy multitasking, large builds, team management tools",
                      popular: true
                    },
                    {
                      name: "Workstation",
                      specs: "12 vCPU • 64GB RAM • 500GB NVMe + GPU",
                      price: "From ₹9,999",
                      description: "ML/AI development, 3D rendering, video editing",
                      popular: false
                    }
                  ].map((plan, index) => (
                    <Card key={index} className={`shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      plan.popular ? 'border-2 border-orange-500 scale-105' : ''
                    }`}>
                      {plan.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                          Most Popular
                        </Badge>
                      )}
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                        <CardDescription className="text-muted-foreground">{plan.specs}</CardDescription>
                        <div className="text-3xl font-bold text-foreground mt-4">{plan.price}<span className="text-lg text-muted-foreground">/month</span></div>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </CardHeader>
                      <CardContent>
                        <Button className={`w-full ${plan.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-purple-600 hover:bg-purple-700'}`}>
                          {plan.name === "Workstation" ? "Contact Sales" : "Start Free Trial"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* VPS Section with Table */}
          <section id="vps-hosting" className="py-12">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                <Server className="w-4 h-4 mr-2" />
                High-Performance Virtual Servers
              </Badge>
              <h2 className="text-5xl font-bold text-foreground mb-6">VPS Hosting</h2>
              <p className="text-2xl text-muted-foreground font-light mb-8">
                Raw power. Full control. Built on AMD EPYC + NVMe.
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                From lightweight applications to enterprise workloads, our VPS solutions deliver 
                consistent performance with 99.9% uptime guarantee.
              </p>
            </div>

            {/* VPS Pricing Table */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden mb-12">
              <div className="p-8 bg-gradient-to-r from-green-500 to-blue-600 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">VPS Plans Comparison</h3>
                <p className="opacity-90">Choose the perfect configuration for your needs</p>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-bold text-foreground">Plan</TableHead>
                      <TableHead className="font-bold text-foreground">vCPU</TableHead>
                      <TableHead className="font-bold text-foreground">RAM</TableHead>
                      <TableHead className="font-bold text-foreground">Storage</TableHead>
                      <TableHead className="font-bold text-foreground">Bandwidth</TableHead>
                      <TableHead className="font-bold text-foreground">Price/Month</TableHead>
                      <TableHead className="font-bold text-foreground">Best For</TableHead>
                      <TableHead className="font-bold text-foreground">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        name: "Starter VPS",
                        vcpu: "2",
                        ram: "4GB",
                        storage: "50GB NVMe",
                        bandwidth: "2TB",
                        price: "₹999",
                        bestFor: "Small websites, testing",
                        popular: false
                      },
                      {
                        name: "Growth VPS",
                        vcpu: "4",
                        ram: "8GB",
                        storage: "100GB NVMe",
                        bandwidth: "4TB",
                        price: "₹1,999",
                        bestFor: "Business websites, APIs",
                        popular: true
                      },
                      {
                        name: "Pro VPS",
                        vcpu: "8",
                        ram: "16GB",
                        storage: "200GB NVMe",
                        bandwidth: "6TB",
                        price: "₹3,599",
                        bestFor: "SaaS apps, databases",
                        popular: false
                      },
                      {
                        name: "Power VPS",
                        vcpu: "12",
                        ram: "32GB",
                        storage: "500GB NVMe",
                        bandwidth: "10TB",
                        price: "₹5,999",
                        bestFor: "Enterprise applications",
                        popular: false
                      },
                      {
                        name: "Enterprise VPS",
                        vcpu: "16",
                        ram: "64GB",
                        storage: "1TB NVMe",
                        bandwidth: "15TB",
                        price: "₹9,999",
                        bestFor: "High-traffic platforms",
                        popular: false
                      },
                      {
                        name: "Max VPS",
                        vcpu: "24",
                        ram: "128GB",
                        storage: "2TB NVMe",
                        bandwidth: "20TB",
                        price: "₹15,999",
                        bestFor: "Heavy computational work",
                        popular: false
                      }
                    ].map((plan, index) => (
                      <TableRow key={index} className={plan.popular ? "bg-green-50 border-l-4 border-l-green-500" : ""}>
                        <TableCell className="font-semibold">
                          <div className="flex items-center space-x-2">
                            <span>{plan.name}</span>
                            {plan.popular && <Badge className="bg-green-500 text-white text-xs">Popular</Badge>}
                          </div>
                        </TableCell>
                        <TableCell>{plan.vcpu}</TableCell>
                        <TableCell>{plan.ram}</TableCell>
                        <TableCell>{plan.storage}</TableCell>
                        <TableCell>{plan.bandwidth}</TableCell>
                        <TableCell className="font-bold text-green-600">{plan.price}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{plan.bestFor}</TableCell>
                        <TableCell>
                          <Button size="sm" className={plan.popular ? "bg-green-500 hover:bg-green-600" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}>
                            Deploy Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* VPS Features */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Full Root Access", desc: "Complete control over your server environment" },
                { icon: Cpu, title: "AMD EPYC Processors", desc: "Latest generation high-performance CPUs" },
                { icon: HardDrive, title: "NVMe SSD Storage", desc: "Ultra-fast storage for superior performance" },
                { icon: Network, title: "High-Speed Network", desc: "Premium bandwidth with low latency" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <feature.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
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
                  <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
                    Talk to an Expert
                  </Button>
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
