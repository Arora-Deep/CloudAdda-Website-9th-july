import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Server, Shield, Zap, Users, Target, Star, Clock, CheckCircle, BookOpen, Award, GraduationCap, Heart, TrendingUp, Sparkles, Globe, Building, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isTrainerAddaModalOpen, setIsTrainerAddaModalOpen] = useState(false);
  const [isGuidesModalOpen, setIsGuidesModalOpen] = useState(false);
  const [isPlaybookViewModalOpen, setIsPlaybookViewModalOpen] = useState(false);
  const [isBlogViewModalOpen, setIsBlogViewModalOpen] = useState(false);
  const [isCaseStudyViewModalOpen, setIsCaseStudyViewModalOpen] = useState(false);
  const [isNotFoundModalOpen, setIsNotFoundModalOpen] = useState(false);

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsMarqueePaused(false);
          } else {
            setIsMarqueePaused(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
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
                        <NavigationMenuLink asChild>
                          <Link to="/cloud-desktops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/vps" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-orange-500 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            The Infrastructure You Deserve
          </Badge>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Simple. Scalable. Human.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Launch ready-made training labs, cloud desktops, and VPS servers in
            seconds. Focus on your work, not your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div ref={marqueeRef} className="relative overflow-hidden bg-gray-100 py-2">
        <div className={`whitespace-nowrap animate-marquee ${isMarqueePaused ? 'paused' : ''}`}>
          <span className="mx-4 text-gray-600">
            <Zap className="inline-block w-4 h-4 mr-1" /> Instant Deployment
          </span>
          <span className="mx-4 text-gray-600">
            <Shield className="inline-block w-4 h-4 mr-1" /> Secure & Compliant
          </span>
          <span className="mx-4 text-gray-600">
            <Server className="inline-block w-4 h-4 mr-1" /> Global Infrastructure
          </span>
          <span className="mx-4 text-gray-600">
            <Users className="inline-block w-4 h-4 mr-1" /> Scale to Thousands
          </span>
          <span className="mx-4 text-gray-600">
            <Target className="inline-block w-4 h-4 mr-1" /> Purpose-Built
          </span>
          <span className="mx-4 text-gray-600">
            <Star className="inline-block w-4 h-4 mr-1" /> 99.99% Uptime
          </span>
          <span className="mx-4 text-gray-600">
            <Clock className="inline-block w-4 h-4 mr-1" /> 24/7 Support
          </span>
          <span className="mx-4 text-gray-600">
            <Zap className="inline-block w-4 h-4 mr-1" /> Instant Deployment
          </span>
          <span className="mx-4 text-gray-600">
            <Shield className="inline-block w-4 h-4 mr-1" /> Secure & Compliant
          </span>
          <span className="mx-4 text-gray-600">
            <Server className="inline-block w-4 h-4 mr-1" /> Global Infrastructure
          </span>
          <span className="mx-4 text-gray-600">
            <Users className="inline-block w-4 h-4 mr-1" /> Scale to Thousands
          </span>
          <span className="mx-4 text-gray-600">
            <Target className="inline-block w-4 h-4 mr-1" /> Purpose-Built
          </span>
          <span className="mx-4 text-gray-600">
            <Star className="inline-block w-4 h-4 mr-1" /> 99.99% Uptime
          </span>
          <span className="mx-4 text-gray-600">
            <Clock className="inline-block w-4 h-4 mr-1" /> 24/7 Support
          </span>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-500 text-white">
              <Server className="w-4 h-4 mr-2" />
              Our Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Infrastructure That Just Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle the complexity of infrastructure so you can focus on
              your core business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Training Labs Card */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-center">
                  Training Labs
                </CardTitle>
                <CardDescription className="text-center">
                  Ready-made virtual training environments for any curriculum.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {[
                    "Instant deployment",
                    "Custom configurations",
                    "Scalable infrastructure",
                    "24/7 support",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/training-labs">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Explore Labs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cloud Desktops Card */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-center">
                  Cloud Desktops
                </CardTitle>
                <CardDescription className="text-center">
                  Secure, high-performance desktops accessible from anywhere.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {[
                    "Access from any device",
                    "Centralized management",
                    "Enhanced security",
                    "Cost-effective",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/cloud-desktops">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Explore Desktops
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* VPS Hosting Card */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-center">VPS Hosting</CardTitle>
                <CardDescription className="text-center">
                  High-performance virtual servers with full root access.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {[
                    "AMD EPYC processors",
                    "NVMe storage",
                    "Full root access",
                    "99.99% uptime",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/vps">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Explore VPS
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trainer Adda Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-purple-500 text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Resources for Trainers
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Ultimate Training Resource Hub
              </h2>
              <p className="text-xl text-gray-600">
                Access proven methodologies, ready-made curricula, and expert
                insights to elevate your training programs.
              </p>
              <Link to="/trainer-adda">
                <Button className="mt-6 bg-purple-500 hover:bg-purple-600 text-white">
                  Explore Resources
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <img
              src="/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png"
              alt="Trainer Resources"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500 text-white">
              <Heart className="w-4 h-4 mr-2" />
              Real Success Stories
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Transforming Training, Delivering Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how organizations are leveraging CloudAdda to achieve
              unprecedented training outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Cloud Desktops</Badge>
                  <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    Call Center Case Study
                  </div>
                </div>
                <CardTitle className="text-xl">
                  How a Call Center Saved ₹20 Lakhs by Moving to Cloud Desktops
                </CardTitle>
                <CardDescription>
                  A mid-sized call center with 200 agents transformed their
                  operations and cut costs dramatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                    Key Results:
                  </h4>
                  <p className="text-gray-700">
                    ₹20L annual savings, 98.7% uptime, 33% productivity boost
                  </p>
                </div>
                <Link to="/case-study/call-center-cloud-desktops">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Training Labs</Badge>
                  <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    Tech Bootcamp
                  </div>
                </div>
                <CardTitle className="text-xl">
                  Scaling a Tech Bootcamp to 1,000+ Students with Zero Downtime
                </CardTitle>
                <CardDescription>
                  A leading tech bootcamp provider scaled their virtual training
                  program to thousands of students without a single crash.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Key Results:
                  </h4>
                  <p className="text-gray-700">
                    1,000+ concurrent users, 99.99% uptime, 40% cost savings
                  </p>
                </div>
                <Link to="/case-study/tech-bootcamp-scaling">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Infrastructure?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join thousands of businesses and training providers who trust
            CloudAdda for their infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </Link>
              <p className="text-gray-400">
                Simple. Scalable. Human. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/training-labs" className="hover:text-white">
                    Training Labs
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-desktops" className="hover:text-white">
                    Cloud Desktops
                  </Link>
                </li>
                <li>
                  <Link to="/vps" className="hover:text-white">
                    VPS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/trainer-adda" className="hover:text-white">
                    Trainer Adda
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="hover:text-white">
                    Guides & Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/support" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CloudAdda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
