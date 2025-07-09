import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Check, Users, Zap, Shield, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useMetaTags } from "@/utils/metaTags";

const Pricing = () => {
  useMetaTags({
    title: "Training Labs, VDI & VPS Pricing | CloudAdda",
    description: "Explore CloudAdda's pricing for custom training labs, scalable VDI cloud desktops, and high-speed VPS hosting. Predictable, fair pricing — no surprises."
  });

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
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-24">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            <Zap className="w-4 h-4 mr-2" />
            Transparent Pricing, No Surprises
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Simple Pricing for Powerful Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our straightforward pricing plans for training labs, cloud desktops, and VPS hosting.
            We believe in fair, predictable costs to help you scale without surprises.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {/* Training Labs Pricing */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500 text-white flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold">Training Labs</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Custom, scalable training environments for any curriculum.
              </p>
              <div className="text-4xl font-bold text-purple-600 mb-4">
                Contact Us
              </div>
              <Button className="bg-purple-500 hover:bg-purple-600 text-white w-full">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Cloud Desktops Pricing */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold">Cloud Desktops (VDI)</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Secure, high-performance cloud desktops for teams.
              </p>
              <div className="text-4xl font-bold text-orange-600 mb-4">
                Contact Us
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* VPS Hosting Pricing */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl font-bold">VPS Hosting</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                High-speed VPS with NVMe storage and AMD EPYC.
              </p>
              <div className="text-4xl font-bold text-green-600 mb-4">
                ₹699 / month
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                Explore VPS Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fair Pricing Promise */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            <Check className="w-4 h-4 mr-2" />
            Our Fair Pricing Promise
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Predictable, Transparent, and Fair
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in providing clear and honest pricing. No hidden fees, no surprise charges.
            Just straightforward costs that align with your growth.
          </p>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Need Help Choosing a Plan?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our team is here to assist you in finding the perfect solution for your needs.
              Whether you're scaling a training program or deploying cloud desktops, we've got you covered.
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white">
              Contact Support
              <HeadphonesIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/5999a999-9999-9999-9999-999999999999.png"
              alt="Customer Support"
              className="rounded-lg shadow-lg"
            />
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
