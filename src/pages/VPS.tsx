
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  Server, 
  Zap, 
  Shield, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  HardDrive, 
  Wifi, 
  Globe, 
  Monitor,
  Gauge,
  Award,
  Users,
  Target,
  FileText,
  Headphones,
  ChevronDown,
  TrendingUp,
  Code
} from "lucide-react";
import { Link } from "react-router-dom";

const VPS = () => {
  const vpsPlans = [
    {
      name: "Basic VPS",
      cpu: "2 Cores",
      ram: "4 GB",
      storage: "80 GB SSD",
      bandwidth: "5 TB",
      price: "$19.99/month",
      features: ["Full Root Access", "99.9% Uptime Guarantee", "24/7 Support"]
    },
    {
      name: "Standard VPS",
      cpu: "4 Cores",
      ram: "8 GB",
      storage: "160 GB SSD",
      bandwidth: "10 TB",
      price: "$39.99/month",
      features: ["Full Root Access", "99.9% Uptime Guarantee", "24/7 Support", "Weekly Backups"]
    },
    {
      name: "Advanced VPS",
      cpu: "6 Cores",
      ram: "16 GB",
      storage: "320 GB SSD",
      bandwidth: "15 TB",
      price: "$59.99/month",
      features: ["Full Root Access", "99.9% Uptime Guarantee", "24/7 Support", "Daily Backups", "DDoS Protection"]
    },
    {
      name: "Enterprise VPS",
      cpu: "8 Cores",
      ram: "32 GB",
      storage: "640 GB SSD",
      bandwidth: "20 TB",
      price: "$79.99/month",
      features: ["Full Root Access", "99.9% Uptime Guarantee", "24/7 Support", "Daily Backups", "DDoS Protection", "Priority Support"]
    }
  ];

  const keyFeatures = [
    {
      title: "High Performance",
      description: "Powered by the latest AMD EPYC processors and NVMe SSD storage for lightning-fast performance.",
      icon: Zap
    },
    {
      title: "Enhanced Security",
      description: "Robust security measures including DDoS protection, firewalls, and regular security audits.",
      icon: Shield
    },
    {
      title: "Scalability",
      description: "Easily scale your resources up or down as needed with our flexible VPS solutions.",
      icon: TrendingUp
    },
    {
      title: "Global Network",
      description: "Choose from multiple data center locations worldwide for optimal performance and low latency.",
      icon: Globe
    }
  ];

  const useCases = [
    {
      title: "Web Hosting",
      description: "Host your websites and applications with ease on our reliable and high-performance VPS servers.",
      icon: Globe
    },
    {
      title: "Application Hosting",
      description: "Deploy and run your custom applications with full control over your server environment.",
      icon: FileText
    },
    {
      title: "Game Servers",
      description: "Host your favorite multiplayer games with low latency and high bandwidth.",
      icon: Headphones
    },
    {
      title: "Development & Testing",
      description: "Create isolated environments for developing and testing your software projects.",
      icon: Code
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Solutions Inc.",
      quote: "CloudAdda's VPS hosting has been a game-changer for our business. The performance and reliability are unmatched.",
      rating: 5
    },
    {
      name: "Alice Johnson",
      company: "Web Design Studio",
      quote: "We've been using CloudAdda's VPS for our clients' websites, and we couldn't be happier with the speed and support.",
      rating: 5
    },
    {
      name: "Bob Williams",
      company: "Software Development",
      quote: "CloudAdda's VPS has made our development and testing processes much smoother. The scalability is fantastic.",
      rating: 4
    }
  ];

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
          <div className="text-center">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg font-medium px-6 py-3">
              <Server className="w-5 h-5 mr-2" />
              High-Performance VPS Hosting
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-blue-600">Reliable</span>
              <br />
              <span className="text-purple-600">Scalable</span>
              <br />
              <span className="text-orange-600">Affordable</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Experience the power of CloudAdda VPS hosting
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              Get the resources you need to run your websites and applications with lightning-fast performance and unparalleled reliability.
            </p>
            <Link to="/pricing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-4 text-lg">
                View VPS Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Key Features</h2>
            <p className="text-xl text-muted-foreground">Why choose CloudAdda VPS hosting?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VPS Plans Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">VPS Plans</h2>
            <p className="text-xl text-muted-foreground">Choose the perfect VPS plan for your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold mb-4">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm">
                      <Cpu className="w-4 h-4 mr-2 text-gray-400" />
                      {plan.cpu}
                    </li>
                    <li className="flex items-center text-sm">
                      <HardDrive className="w-4 h-4 mr-2 text-gray-400" />
                      {plan.storage}
                    </li>
                    <li className="flex items-center text-sm">
                      <Wifi className="w-4 h-4 mr-2 text-gray-400" />
                      {plan.bandwidth}
                    </li>
                    <li className="flex items-center text-sm">
                      <Gauge className="w-4 h-4 mr-2 text-gray-400" />
                      {plan.ram} RAM
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Use Cases</h2>
            <p className="text-xl text-muted-foreground">How can you use CloudAdda VPS?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <useCase.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <CardTitle className="text-lg font-semibold">{useCase.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{useCase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Testimonials</h2>
            <p className="text-xl text-muted-foreground">What our customers are saying</p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} className="w-5 h-5 text-yellow-500 mr-1" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12">Experience the power and flexibility of CloudAdda VPS hosting today.</p>
          <Link to="/pricing">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4">
              View VPS Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
              <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/trainer-adda" className="hover:text-foreground transition-colors">Trainer Adda</Link></li>
                <li><Link to="/guides" className="hover:text-foreground transition-colors">Guides & Docs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/support" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VPS;
