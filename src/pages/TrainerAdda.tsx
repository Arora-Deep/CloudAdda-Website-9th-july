import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Users, Target, Heart, Shield, Globe, Zap, Lightbulb, Handshake, Building, Eye, ChevronDown, CheckCircle, Star, TrendingUp, Award, Clock, DollarSign, Server, Monitor, GraduationCap, Headphones, Code, FileText, BookOpen, Video, Play, Calendar, Download } from "lucide-react";
import { Link } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";

const TrainerAdda = () => {
  useEffect(() => {
    document.title = "Adda Insights – Cloud Infra, Training Labs & VDI Trends | CloudAdda";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Stay ahead with insights on virtual training delivery, DaaS adoption, and cloud infra optimization. Trusted by trainers, IT teams & remote-first businesses.');
  }, []);

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
              <Link to="/trainer-adda" className="text-orange-500 font-medium">Resources</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
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
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mx-auto max-w-md lg:mx-0">
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                <Headphones className="w-4 h-4 mr-2" />
                Insights for Training Pros
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                Level Up Your Training Game
              </h2>
              <p className="mt-4 text-gray-600">
                Stay ahead with the latest trends, tips, and best practices for delivering
                exceptional virtual training experiences.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link to="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="rounded-full px-6">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="/lovable-uploads/59f70113-5a04-497f-a7ef-1275a952ca1c.png"
                alt="Virtual Training Insights"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Article Card */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>The Future of Virtual Training</CardTitle>
                <CardDescription>Trends and predictions for 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explore the key trends shaping the future of virtual training, from AI-powered
                  learning to immersive experiences.
                </p>
                <Button variant="link" className="mt-4">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Example Article Card */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Best Practices for Engaging Remote Learners</CardTitle>
                <CardDescription>Tips for keeping your audience hooked</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover proven strategies for engaging remote learners, including interactive
                  activities, gamification, and personalized feedback.
                </p>
                <Button variant="link" className="mt-4">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Example Article Card */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Building a Scalable Training Infrastructure</CardTitle>
                <CardDescription>How to handle growing demand</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn how to build a scalable training infrastructure that can handle growing
                  demand, from cloud-based labs to automated provisioning.
                </p>
                <Button variant="link" className="mt-4">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Training Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Resource Card */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>E-Book: The Ultimate Guide to Virtual Training</CardTitle>
                <CardDescription>Everything you need to know to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Download our comprehensive e-book and learn how to create and deliver
                  engaging virtual training programs.
                </p>
                <Button variant="link" className="mt-4">
                  Download <Download className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Example Resource Card */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Webinar: Engaging Remote Learners</CardTitle>
                <CardDescription>Watch our expert-led webinar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Watch our expert-led webinar and learn how to engage remote learners with
                  interactive activities and personalized feedback.
                </p>
                <Button variant="link" className="mt-4">
                  Watch Now <Play className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            {/* Example Resource Card */}
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Template: Training Plan</CardTitle>
                <CardDescription>Download our free training plan template</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Download our free training plan template and start planning your next
                  virtual training program.
                </p>
                <Button variant="link" className="mt-4">
                  Download <Download className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest insights, tips, and resources delivered straight to your inbox.
          </p>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="flex rounded-full shadow-sm">
                <input
                  type="email"
                  className="flex-1 block w-full rounded-l-full border-gray-300 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Enter your email address"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-r-full px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-gray-900">CloudAdda</span>
              </Link>
              <p className="text-gray-600">
                Simple. Scalable. Human. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/training-labs" className="hover:text-purple-600 transition-colors">
                    Training Labs
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-desktops" className="hover:text-purple-600 transition-colors">
                    Cloud Desktops
                  </Link>
                </li>
                <li>
                  <Link to="/vps" className="hover:text-purple-600 transition-colors">
                    VPS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/about" className="hover:text-purple-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-purple-600 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/support" className="hover:text-purple-600 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600 transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainerAdda;
