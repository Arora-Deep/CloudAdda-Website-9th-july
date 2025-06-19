
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { BookOpen, Users, Target, ArrowRight, Star, Clock, GraduationCap, Award, CheckCircle, Download, FileText, Lightbulb, Heart, Calendar, ChevronRight, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
  const [activeSection, setActiveSection] = useState("trainer-playbook");

  const resourceSections = [
    {
      id: "trainer-playbook",
      label: "Trainer Playbook",
      description: "Complete curricula and lab setups",
      icon: BookOpen,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "adda-insights",
      label: "Adda Insights", 
      description: "Technical tutorials and guides",
      icon: Lightbulb,
      color: "from-orange-500 to-red-500"
    },
    {
      id: "customer-stories",
      label: "Success Stories",
      description: "Real-world case studies",
      icon: Heart,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "downloads",
      label: "Downloads",
      description: "Free resources and tools",
      icon: Download,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "adda-dispatch",
      label: "The Dispatch",
      description: "Monthly updates and tips",
      icon: Calendar,
      color: "from-cyan-500 to-blue-600"
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
    title: "Building Effective Cloud Training Programs",
    description: "A comprehensive guide to designing and implementing cloud training curricula that drive real results.",
    category: "Training Strategy",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "Priya Sharma",
    featured: true,
    gradient: "from-blue-600 to-purple-600"
  }, {
    title: "Remote Lab Management Best Practices",
    description: "Tips and tricks for managing virtual training environments across distributed teams.",
    category: "Technical Guide",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    author: "Rajesh Kumar",
    featured: false,
    gradient: "from-orange-500 to-red-500"
  }, {
    title: "Cost Optimization for Training Infrastructure",
    description: "How to reduce training costs by 40% without compromising on quality or performance.",
    category: "Cost Management",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    author: "Anjali Mehta",
    featured: false,
    gradient: "from-green-500 to-emerald-600"
  }];

  const caseStudies = [{
    title: "TechCorp's Digital Transformation Journey",
    description: "How TechCorp trained 500+ developers on cloud technologies in 6 months",
    company: "TechCorp",
    results: "500+ developers trained, 85% certification rate",
    category: "Enterprise Training",
    gradient: "from-purple-600 to-pink-600"
  }, {
    title: "StartupAccelerator's Bootcamp Success",
    description: "Scaling technical education for 50 startups simultaneously",
    company: "StartupAccelerator",
    results: "50 startups, 200+ participants, 95% satisfaction",
    category: "Bootcamp",
    gradient: "from-cyan-500 to-blue-600"
  }];

  const playbooks = [{
    title: "AWS Certification Training Playbook",
    description: "Complete curriculum and lab setup for AWS certification preparation",
    type: "Cloud Platform",
    duration: "4 weeks",
    gradient: "from-orange-500 to-red-500"
  }, {
    title: "DevOps Fundamentals Workshop",
    description: "Hands-on DevOps training with real-world scenarios and tools",
    type: "DevOps",
    duration: "2 weeks",
    gradient: "from-blue-500 to-purple-600"
  }, {
    title: "Kubernetes Mastery Program",
    description: "Advanced Kubernetes training with practical deployment scenarios",
    type: "Container Orchestration",
    duration: "3 weeks",
    gradient: "from-green-500 to-emerald-600"
  }];

  const downloads = [{
    title: "Training ROI Calculator",
    description: "Calculate the return on investment for your training programs",
    type: "Excel Template",
    size: "2.5 MB",
    downloads: "1.2k"
  }, {
    title: "Lab Setup Checklist",
    description: "Complete checklist for setting up virtual training environments",
    type: "PDF Guide",
    size: "850 KB",
    downloads: "3.4k"
  }, {
    title: "Curriculum Planning Template",
    description: "Professional template for designing training curricula",
    type: "PowerPoint",
    size: "1.8 MB",
    downloads: "2.1k"
  }];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
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
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-6 shadow-lg">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-2 max-w-xs">
          <div className="space-y-1">
            {resourceSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r ' + section.color + ' text-white shadow-lg scale-105'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3 relative z-10">
                    <IconComponent className={`w-5 h-5 flex-shrink-0 ${
                      activeSection === section.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                    }`} />
                    <div className="min-w-0">
                      <h3 className={`font-semibold text-sm mb-1 truncate ${
                        activeSection === section.id ? 'text-white' : 'text-gray-900'
                      }`}>
                        {section.label}
                      </h3>
                      <p className={`text-xs truncate ${
                        activeSection === section.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {section.description}
                      </p>
                    </div>
                  </div>
                  {activeSection === section.id && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:ml-80">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-purple-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-orange-600/5"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-block mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-sm font-medium px-6 py-3 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Expert Training Resources
                </Badge>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.85] tracking-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">CloudAdda</span>
                <br />
                <span className="text-gray-900">Resources</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hub</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                Everything you need to deliver world-class training experiences. From proven methodologies 
                to ready-made curricula, we've got your training success covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-xl group transform hover:scale-105 transition-all duration-300">
                  <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Explore Resources
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 group shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Download Playbooks
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trainer Playbook Section */}
        <section id="trainer-playbook" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                <BookOpen className="w-4 h-4 mr-2" />
                Trainer Playbooks
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Complete Training Playbooks</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ready-to-deploy curricula and lab setups that guarantee training success.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {playbooks.map((playbook, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${playbook.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${playbook.gradient} text-white border-0`}>{playbook.type}</Badge>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {playbook.duration}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-gray-900 transition-colors">{playbook.title}</CardTitle>
                    <CardDescription className="text-base">{playbook.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {[
                        "Complete curriculum guide",
                        "Lab setup instructions",
                        "Assessment materials",
                        "Instructor resources"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${playbook.gradient} hover:opacity-90 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      Download Playbook
                      <Download className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Adda Insights Section */}
        <section id="adda-insights" className="py-24 bg-gradient-to-br from-orange-50 to-red-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                <Lightbulb className="w-4 h-4 mr-2" />
                Adda Insights
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Technical Insights & Tutorials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Deep dives, comparisons, and practical guides to master cloud infrastructure.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden ${post.featured ? 'scale-105 ring-2 ring-orange-500/20' : ''}`}>
                  {post.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs border-gray-300">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight group-hover:text-gray-900 transition-colors">{post.title}</CardTitle>
                    <CardDescription className="text-base">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        By {post.author} • {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 group-hover:scale-105 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section id="customer-stories" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 shadow-lg">
                <Heart className="w-4 h-4 mr-2" />
                Success Stories
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Real Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how organizations transform their training with CloudAdda.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {caseStudies.map((study, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${study.gradient}`}></div>
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="outline" className="border-gray-300">{study.category}</Badge>
                      <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">{study.company}</div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-gray-900 transition-colors">{study.title}</CardTitle>
                    <CardDescription className="text-lg">{study.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className={`bg-gradient-to-r ${study.gradient} bg-opacity-10 rounded-xl p-6 mb-6`}>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                        Key Results:
                      </h4>
                      <p className="text-gray-700 font-medium">{study.results}</p>
                    </div>
                    <Button className={`w-full bg-gradient-to-r ${study.gradient} hover:opacity-90 text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section id="downloads" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-lg">
                <Download className="w-4 h-4 mr-2" />
                Free Downloads
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Essential Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Professional templates, calculators, and guides to accelerate your training programs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {downloads.map((download, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-gray-900 transition-colors">{download.title}</CardTitle>
                    <CardDescription className="text-base">{download.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                      <span>{download.type}</span>
                      <span>{download.size}</span>
                    </div>
                    <div className="mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                        {download.downloads} downloads
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
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
        <section id="adda-dispatch" className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 shadow-lg">
                <Calendar className="w-4 h-4 mr-2" />
                The Adda Dispatch
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Stay in the Loop</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Monthly insights, product updates, and behind-the-scenes from the CloudAdda team.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Never Miss an Update</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Get the latest training insights, product updates, and exclusive tips delivered directly to your inbox every month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 rounded-full text-base border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" 
                />
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full px-8 shadow-lg">
                  Subscribe Free
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe anytime</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your Training?</h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join thousands of training professionals who trust CloudAdda for their infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 shadow-xl transform hover:scale-105 transition-all duration-300">
                <Users className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-xl transform hover:scale-105 transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Book Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <Link to="/" className="flex items-center space-x-2">
                  <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                  <span className="font-bold text-xl">CloudAdda</span>
                </Link>
                <p className="text-gray-400 leading-relaxed">
                  Simple. Scalable. Human. Infrastructure that just works.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-6">Solutions</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
                  <li><Link to="/cloud-desktops" className="hover:text-white transition-colors">Cloud Desktops</Link></li>
                  <li><Link to="/vps" className="hover:text-white transition-colors">VPS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-6">Resources</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/trainer-adda" className="hover:text-white transition-colors">Trainer Adda</Link></li>
                  <li><Link to="/guides" className="hover:text-white transition-colors">Guides & Docs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-6">Support</h3>
                <ul className="space-y-3 text-gray-400">
                  <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 CloudAdda. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TrainerAdda;
