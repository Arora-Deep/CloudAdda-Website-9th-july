import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Server, Zap, Shield, Users, CheckCircle, X, Clock, Phone, Mail, Award, TrendingUp, Cpu, HardDrive, Network, DollarSign, AlertTriangle, ThumbsUp, Star, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const VPS = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");

  return (
    <div className="min-h-screen bg-white">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-sm font-medium px-4 py-2">
            <Server className="w-4 h-4 mr-2 inline-block" />
            VPS Hosting
          </Badge>
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            High-Performance VPS with AMD EPYC
          </h1>
          <p className="mt-6 text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Get blazing fast virtual private servers with dedicated resources, enterprise-grade security, and 24/7 support — all at a fraction of the cost.
          </p>
          <div className="mt-12 flex justify-center space-x-6">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-orange-300 text-orange-600 hover:bg-orange-50">
              Learn More
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-orange-600">99.98%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-orange-600">Dedicated</div>
              <div className="text-gray-600">CPU & RAM</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-orange-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Company Logos Marquee */}
      <div className="relative -mt-16 z-10">
        <div className="overflow-hidden bg-transparent">
          <div className="animate-marquee-fast whitespace-nowrap flex items-center py-4">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center space-x-16 mx-8">
                {["TechCorp", "InnovateInc", "GlobalSoft", "FutureTech", "DevStudio", "CloudFirst", "NextGen", "DataFlow"].map((company, index) => (
                  <div key={`${setIndex}-${index}`} className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg border border-gray-100 flex-shrink-0">
                    <span className="text-gray-600 font-semibold text-sm">{company}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Built Different From The Ground Up
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-20">
            Our VPS platform is designed for performance, reliability, and security — with features that matter to developers and businesses alike.
          </p>
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Latest AMD EPYC CPUs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Powered by AMD EPYC processors for unmatched performance and efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <HardDrive className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Blazing Fast NVMe Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ultra-fast NVMe SSDs ensure your data is accessed with minimal latency.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Enterprise-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Multi-layered security protocols to keep your data safe and compliant.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {/* Live Performance Monitoring */}
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Live Performance Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Real-time insights into your server's performance with detailed metrics and alerts.
                </p>
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon!</h3>
                  <p className="text-gray-600">Live performance comparison dashboard in development</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Simple Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <Card
              className={`border-2 ${selectedPlan === "basic" ? "border-orange-500 shadow-lg" : "border-gray-200"}`}
              onClick={() => setSelectedPlan("basic")}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Basic</CardTitle>
                <p className="text-gray-600 mt-2">1 CPU, 2GB RAM, 50GB SSD</p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold text-orange-600 mb-4">$10/mo</div>
                <Button variant={selectedPlan === "basic" ? "default" : "outline"} className="w-full">
                  {selectedPlan === "basic" ? "Selected" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
            <Card
              className={`border-2 ${selectedPlan === "standard" ? "border-orange-500 shadow-lg" : "border-gray-200"}`}
              onClick={() => setSelectedPlan("standard")}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Standard</CardTitle>
                <p className="text-gray-600 mt-2">2 CPU, 4GB RAM, 100GB SSD</p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold text-orange-600 mb-4">$20/mo</div>
                <Button variant={selectedPlan === "standard" ? "default" : "outline"} className="w-full">
                  {selectedPlan === "standard" ? "Selected" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
            <Card
              className={`border-2 ${selectedPlan === "premium" ? "border-orange-500 shadow-lg" : "border-gray-200"}`}
              onClick={() => setSelectedPlan("premium")}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Premium</CardTitle>
                <p className="text-gray-600 mt-2">4 CPU, 8GB RAM, 200GB SSD</p>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-extrabold text-orange-600 mb-4">$40/mo</div>
                <Button variant={selectedPlan === "premium" ? "default" : "outline"} className="w-full">
                  {selectedPlan === "premium" ? "Selected" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What is VPS hosting?</h3>
              <p className="text-gray-600">
                VPS hosting provides you with a virtual private server that offers dedicated resources and full control over your environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How does your pricing work?</h3>
              <p className="text-gray-600">
                Our pricing is simple and transparent with no hidden fees. Choose a plan that fits your needs and scale anytime.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your VPS plan at any time with no downtime.
              </p>
            </div>
          </div>
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
                <li><Link to="/vps" className="hover:text-foreground transition-colors">VPS Hosting</Link></li>
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
