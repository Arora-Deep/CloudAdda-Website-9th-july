import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BookOpen, Users, Target, ArrowRight, Star, Clock, GraduationCap, Award, CheckCircle, Download, FileText, Lightbulb, Heart, Calendar, ChevronRight, Sparkles, TrendingUp, Eye, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
  const [activeSection, setActiveSection] = useState("trainer-playbook");

  const resourceSections = [
    {
      id: "trainer-playbook",
      label: "Trainer Playbook",
      description: "Complete curricula and lab setups",
      icon: BookOpen,
    },
    {
      id: "adda-insights", 
      label: "Adda Insights",
      description: "Technical tutorials and guides",
      icon: Lightbulb,
    },
    {
      id: "customer-stories",
      label: "Success Stories",
      description: "Real-world case studies",
      icon: Heart,
    },
    {
      id: "downloads",
      label: "Downloads",
      description: "Free resources and tools",
      icon: Download,
    },
    {
      id: "adda-dispatch",
      label: "The Adda Dispatch",
      description: "Monthly updates and tips",
      icon: Calendar,
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = resourceSections.map(section => section.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [{
    id: "training-lab-costs",
    title: "Why Your Training Lab Costs Are So High (And How to Cut Them by 70%)",
    description: "Break down the hidden cost traps of traditional virtual lab setups and discover how next-gen platforms help trainers save 60–80% without compromising quality.",
    category: "Cost Management",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "CloudAdda Team",
    featured: true,
  }, {
    id: "call-center-case-study",
    title: "Behind the Screen: How a Call Center Saved ₹20 Lakhs by Moving to Cloud Desktops",
    description: "A mid-sized call center's journey from operational chaos to streamlined efficiency with cloud desktops.",
    category: "Case Study",
    readTime: "6 min read",
    date: "Dec 12, 2024",
    author: "CloudAdda Team",
    featured: false,
  }, {
    id: "daas-shift-2025",
    title: "Why DaaS Is Taking Over: The Shift Away from Laptops in 2025",
    description: "Explore why smart companies are moving away from laptops to Desktop-as-a-Service solutions.",
    category: "Industry Trends",
    readTime: "5 min read",
    date: "Dec 10, 2024",
    author: "CloudAdda Team",
    featured: false,
  }];

  const caseStudies = [{
    id: "call-center-transformation",
    title: "Call Center's ₹20 Lakh Cloud Desktop Transformation",
    description: "How a 200-agent call center eliminated operational chaos and saved ₹20 lakhs annually",
    company: "Mid-sized Call Center",
    results: "₹20L saved annually, 98.7% uptime, 33% productivity boost",
    category: "Cloud Desktops",
  }, {
    id: "laptop-to-daas-migration",
    title: "Enterprise DaaS Migration Success Story",
    description: "Complete transition from traditional laptops to cloud desktops across multiple departments",
    company: "Enterprise Client",
    results: "70% cost reduction, instant setup, enhanced security",
    category: "DaaS Migration",
  }];

  const playbooks = [{
    id: "zero-to-live-lab",
    title: "Zero to Live — How to Deliver a Flawless Virtual Training Lab in 3 Hours",
    description: "The complete blueprint to go from training plan to fully functional, cloud-hosted lab in just 3 hours",
    type: "Lab Setup",
    duration: "3 hours",
  }, {
    id: "scaling-1000-students",
    title: "Scaling to 1,000 Students: Infrastructure Strategies That Don't Break Mid-Session",
    description: "Proven strategies to scale training infrastructure without crashes or failures during high-load sessions",
    type: "Scaling",
    duration: "Enterprise",
  }, {
    id: "virtual-lab-checklist",
    title: "The Ultimate Virtual Lab Checklist: 7 Things Before You Go Live",
    description: "Essential pre-launch checklist to prevent virtual training failures and ensure smooth sessions",
    type: "Quality Assurance",
    duration: "Pre-Launch",
  }];

  const downloads = [{
    title: "Lab Planning Worksheet",
    description: "Complete worksheet for defining lab environments and requirements",
    type: "PDF Template",
    size: "2.1 MB",
    downloads: "3.2k"
  }, {
    title: "Ultimate Lab Setup Checklist",
    description: "15-point readiness checklist with troubleshooting flowchart and command sheets",
    type: "PDF Guide",
    size: "1.8 MB",
    downloads: "4.1k"
  }, {
    title: "Trainer Onboarding Checklist",
    description: "Step-by-step onboarding process for new training environments",
    type: "PDF Checklist",
    size: "950 KB",
    downloads: "2.8k"
  }];

  return (
    <>
      <Helmet>
        <title>Adda Insights – Cloud Infra, virtual Training Labs & VDI Trends | CloudAdda</title>
        <meta name="description" content="Stay ahead with insights on virtual training delivery, DaaS adoption, and cloud infra optimization. Trusted by trainers, IT teams & remote-first businesses." />
      </Helmet>
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

        {/* Small Navigation Bar for Sections - Moved here after hero */}
        <div className="bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto py-4 space-x-6">
              {resourceSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      activeSection === section.id
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:text-orange-500 hover:bg-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-orange-500 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Expert Training Resources
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              CloudAdda Resources Hub
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to deliver world-class training experiences. From proven methodologies 
              to ready-made curricula, we've got your training success covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Resources
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <Download className="w-5 h-5 mr-2" />
                Download Tools
              </Button>
            </div>
          </div>
        </section>

        {/* Trainer Playbook Section */}
        <section id="trainer-playbook" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-500 text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Trainer Playbooks
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Training Playbooks</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed blueprints and methodologies that guarantee training success.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {playbooks.map((playbook, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-500 text-white">{playbook.type}</Badge>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {playbook.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{playbook.title}</CardTitle>
                    <CardDescription>{playbook.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {[
                        "Step-by-step implementation guide",
                        "Real-world tested strategies",
                        "Downloadable resources included",
                        "Expert tips and best practices"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/playbook/${playbook.id}`}>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        View Playbook
                        <Eye className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Adda Insights Section */}
        <section id="adda-insights" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-500 text-white">
                <Lightbulb className="w-4 h-4 mr-2" />
                Adda Insights
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Insights & Analysis</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                In-depth analysis, cost breakdowns, and industry trends to help you make informed decisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow ${post.featured ? 'border-orange-500 border-2' : 'border-gray-200'}`}>
                  {post.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        By {post.author} • {post.date}
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section id="customer-stories" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-500 text-white">
                <Heart className="w-4 h-4 mr-2" />
                Success Stories
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how organizations transform their operations with CloudAdda solutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{study.category}</Badge>
                      <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">{study.company}</div>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription>{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                        Key Results:
                      </h4>
                      <p className="text-gray-700">{study.results}</p>
                    </div>
                    <Link to={`/case-study/${study.id}`}>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-500 text-white">
                <Download className="w-4 h-4 mr-2" />
                Free Downloads
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Resources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional templates, checklists, and worksheets to accelerate your training programs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {downloads.map((download, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{download.title}</CardTitle>
                    <CardDescription>{download.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                      <span>{download.type}</span>
                      <span>{download.size}</span>
                    </div>
                    <div className="mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        {download.downloads} downloads
                      </Badge>
                    </div>
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                      Download Free
                      <Download className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Adda Dispatch Section */}
        <section id="adda-dispatch" className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cyan-500 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                The Adda Dispatch
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Monthly insights, industry best practices, and behind-the-scenes from the CloudAdda team. 
                Get ready for the most comprehensive resource in cloud training.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg border border-cyan-100">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry-Leading Insights</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
                We're crafting something special - a monthly newsletter packed with cutting-edge training methodologies, 
                industry trends, expert interviews, and exclusive insights from top training professionals.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Insights</h4>
                  <p className="text-sm text-gray-600">Best practices from industry leaders</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Market Trends</h4>
                  <p className="text-sm text-gray-600">Latest developments in cloud training</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actionable Tips</h4>
                  <p className="text-sm text-gray-600">Practical strategies you can implement</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Get notified when we launch" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                />
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Notify Me
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">Be the first to know when The Adda Dispatch launches</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-orange-500">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Training?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join thousands of training professionals who trust CloudAdda for their infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                <Users className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                <Calendar className="w-5 h-5 mr-2" />
                Book Demo
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
                  <li><Link to="/training-labs" className="hover:text-white">Training Labs</Link></li>
                  <li><Link to="/cloud-desktops" className="hover:text-white">Cloud Desktops</Link></li>
                  <li><Link to="/vps" className="hover:text-white">VPS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/trainer-adda" className="hover:text-white">Trainer Adda</Link></li>
                  <li><Link to="/guides" className="hover:text-white">Guides & Docs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 CloudAdda. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TrainerAdda;
