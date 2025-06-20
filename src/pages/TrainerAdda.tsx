
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
      label: "The Dispatch",
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
    title: "Building Effective Cloud Training Programs",
    description: "A comprehensive guide to designing and implementing cloud training curricula that drive real results.",
    category: "Training Strategy",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "Priya Sharma",
    featured: true,
  }, {
    title: "Remote Lab Management Best Practices",
    description: "Tips and tricks for managing virtual training environments across distributed teams.",
    category: "Technical Guide",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    author: "Rajesh Kumar",
    featured: false,
  }, {
    title: "Cost Optimization for Training Infrastructure",
    description: "How to reduce training costs by 40% without compromising on quality or performance.",
    category: "Cost Management",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    author: "Anjali Mehta",
    featured: false,
  }];

  const caseStudies = [{
    title: "TechCorp's Digital Transformation Journey",
    description: "How TechCorp trained 500+ developers on cloud technologies in 6 months",
    company: "TechCorp",
    results: "500+ developers trained, 85% certification rate",
    category: "Enterprise Training",
  }, {
    title: "StartupAccelerator's Bootcamp Success",
    description: "Scaling technical education for 50 startups simultaneously",
    company: "StartupAccelerator",
    results: "50 startups, 200+ participants, 95% satisfaction",
    category: "Bootcamp",
  }];

  const playbooks = [{
    title: "AWS Certification Training Playbook",
    description: "Complete curriculum and lab setup for AWS certification preparation",
    type: "Cloud Platform",
    duration: "4 weeks",
  }, {
    title: "DevOps Fundamentals Workshop",
    description: "Hands-on DevOps training with real-world scenarios and tools",
    type: "DevOps",
    duration: "2 weeks",
  }, {
    title: "Kubernetes Mastery Program",
    description: "Advanced Kubernetes training with practical deployment scenarios",
    type: "Container Orchestration",
    duration: "3 weeks",
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

      {/* Fixed Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3 w-48">
          <div className="space-y-2">
            {resourceSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left p-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? 'bg-orange-500 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-sm">{section.label}</h3>
                      <p className="text-xs opacity-70">{section.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:ml-64">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
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
                Download Playbooks
              </Button>
            </div>
          </div>
        </section>

        {/* Trainer Playbook Section */}
        <section id="trainer-playbook" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-500 text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                Trainer Playbooks
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Training Playbooks</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready-to-deploy curricula and lab setups that guarantee training success.
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
                        "Complete curriculum guide",
                        "Lab setup instructions",
                        "Assessment materials",
                        "Instructor resources"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
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
        <section id="adda-insights" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-500 text-white">
                <Lightbulb className="w-4 h-4 mr-2" />
                Adda Insights
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Insights & Tutorials</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deep dives, comparisons, and practical guides to master cloud infrastructure.
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
                      <Button variant="ghost" size="sm" className="text-orange-500 hover:text-orange-600">
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
        <section id="customer-stories" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-500 text-white">
                <Heart className="w-4 h-4 mr-2" />
                Success Stories
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how organizations transform their training with CloudAdda.
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
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
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
        <section id="downloads" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-500 text-white">
                <Download className="w-4 h-4 mr-2" />
                Free Downloads
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Resources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional templates, calculators, and guides to accelerate your training programs.
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
        <section id="adda-dispatch" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cyan-500 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                The Adda Dispatch
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay in the Loop</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Monthly insights, product updates, and behind-the-scenes from the CloudAdda team.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss an Update</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
                Get the latest training insights, product updates, and exclusive tips delivered directly to your inbox every month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                />
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  Subscribe Free
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe anytime</p>
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
        </div>
      </div>
    </div>
  );
};

export default TrainerAdda;
