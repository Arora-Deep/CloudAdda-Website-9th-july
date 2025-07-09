import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Users, BookOpen, Shield, Clock, Zap, Laptop, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useMetaTags } from "@/utils/metaTags";

const TrainingLabs = () => {
  useMetaTags({
    title: "Virtual Training Labs for IT, AI, Networking & More | CloudAdda",
    description: "Deliver hands-on, scalable training labs for any curriculum — Linux, AI/ML, Networking & more. No control panels. Just ready-to-use lab environments, built for trainers."
  });

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" onClick={() => handleNavigation('/')} className="flex items-center space-x-2">
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
                            onClick={() => handleNavigation('/training-labs')}
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
                            onClick={() => handleNavigation('/cloud-desktops')}
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
                            onClick={() => handleNavigation('/vps')}
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
              <Link to="/trainer-adda" onClick={() => handleNavigation('/trainer-adda')} className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" onClick={() => handleNavigation('/pricing')} className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" onClick={() => handleNavigation('/support')} className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
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
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
                  For Training Companies
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Virtual Training Labs
                <br />
                <span className="text-purple-600">Without the Chaos</span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-purple-600"></div>
                <div className="text-2xl font-bold text-foreground">Simple. Scalable. Ready-to-use.</div>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                CloudAdda delivers fully provisioned virtual training environments for any curriculum.
                Spin up 10 or 1000 labs in minutes — without the headaches of traditional infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Explore Labs
                </Button>
                <Button variant="outline" size="lg" className="text-purple-600 hover:bg-purple-50">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative flex justify-center">
                <img
                  src="/lovable-uploads/59990197-57ff-4009-985f-9a95959ca654.png"
                  alt="CloudAdda Hero - VR Tech Innovation"
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <BookOpen className="w-4 h-4 mr-2" />
              The Challenges of Traditional Training Labs
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              Ditch the Complexity, Embrace the Cloud
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Setting up and managing training labs can be a nightmare.
              CloudAdda solves the common pain points that trainers and IT teams face.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security Risks",
                description: "On-premise labs are vulnerable to malware and unauthorized access. CloudAdda provides secure, isolated environments.",
              },
              {
                icon: Clock,
                title: "Time-Consuming Setup",
                description: "Setting up labs manually takes hours or days. CloudAdda lets you provision labs in minutes.",
              },
              {
                icon: Zap,
                title: "Scalability Issues",
                description: "Scaling on-premise labs is expensive and slow. CloudAdda offers instant scalability on demand.",
              },
              {
                icon: Laptop,
                title: "Hardware Costs",
                description: "Maintaining physical hardware is costly and requires constant upgrades. CloudAdda eliminates hardware expenses.",
              },
              {
                icon: Settings,
                title: "Configuration Errors",
                description: "Manual configuration is prone to errors and inconsistencies. CloudAdda provides pre-configured, standardized environments.",
              },
              {
                icon: Users,
                title: "Limited Accessibility",
                description: "On-premise labs are only accessible on-site. CloudAdda enables access from anywhere, anytime.",
              },
            ].map((painPoint, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <painPoint.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{painPoint.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {painPoint.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
              <Zap className="w-4 h-4 mr-2" />
              CloudAdda's Solution
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">
              The Future of Training Labs is Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CloudAdda provides a comprehensive solution for virtual training labs,
              addressing the challenges of traditional setups with ease and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Environments",
                description: "Isolated environments protect against malware and unauthorized access, ensuring data integrity.",
              },
              {
                icon: Clock,
                title: "Rapid Provisioning",
                description: "Spin up labs in minutes with pre-configured templates, saving valuable time and resources.",
              },
              {
                icon: Zap,
                title: "On-Demand Scalability",
                description: "Scale labs instantly to accommodate any number of participants, without the need for additional hardware.",
              },
              {
                icon: Laptop,
                title: "Cost-Effective",
                description: "Eliminate hardware costs and reduce IT overhead with our cloud-based solution.",
              },
              {
                icon: Settings,
                title: "Customizable Templates",
                description: "Tailor lab environments to your specific training needs with customizable templates and configurations.",
              },
              {
                icon: Users,
                title: "Global Accessibility",
                description: "Access labs from anywhere in the world, enabling remote training and collaboration.",
              },
            ].map((solution, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-purple-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24 opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-white/20 text-white border-white/30">
            <BookOpen className="w-4 h-4 mr-2" />
            Ready to Transform Your Training?
          </Badge>
          <h2 className="text-5xl font-bold mb-8">
            Get Started with CloudAdda Today
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            Experience the simplicity and scalability of CloudAdda's virtual training labs.
            Request a demo or start your free trial now.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 group">
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" onClick={() => handleNavigation('/')} className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-foreground">CloudAdda</span>
              </Link>
              <p className="text-muted-foreground">
                Simple. Scalable. Ready-to-use. Virtual training labs that just work.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/training-labs" onClick={() => handleNavigation('/training-labs')} className="hover:text-foreground transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" onClick={() => handleNavigation('/cloud-desktops')} className="hover:text-foreground transition-colors">Cloud Desktops</Link></li>
                <li><Link to="/vps" onClick={() => handleNavigation('/vps')} className="hover:text-foreground transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" onClick={() => handleNavigation('/about')} className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/pricing" onClick={() => handleNavigation('/pricing')} className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/support" onClick={() => handleNavigation('/support')} className="hover:text-foreground transition-colors">Help Center</Link></li>
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

export default TrainingLabs;
