
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { BookOpen, Users, Target, ArrowRight, Star, Clock, GraduationCap, Award, CheckCircle, Download, FileText, Lightbulb, Heart, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
  const [activeSection, setActiveSection] = useState("trainer-playbook");

  const resourceSections = [
    {
      id: "trainer-playbook",
      label: "Trainer Playbook",
      description: "Guides, lab templates, and classroom infra tips for training companies.",
      icon: BookOpen
    },
    {
      id: "adda-insights",
      label: "Adda Insights", 
      description: "Tutorials, comparisons, and technical deep dives on Cloud Desktops & VPS.",
      icon: Lightbulb
    },
    {
      id: "customer-stories",
      label: "Customer Stories",
      description: "Real-world case studies from trainers, dev teams, and infra users.",
      icon: Heart
    },
    {
      id: "downloads",
      label: "Downloads",
      description: "Free PDFs, checklists, lab calculators, and planning tools.",
      icon: Download
    },
    {
      id: "adda-dispatch",
      label: "The Adda Dispatch",
      description: "Monthly product updates, tips, and behind-the-scenes from the CloudAdda team.",
      icon: Calendar
    }
  ];

  const blogPosts = [{
    title: "Building Effective Cloud Training Programs",
    description: "A comprehensive guide to designing and implementing cloud training curricula that drive real results.",
    category: "Training Strategy",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "Priya Sharma",
    featured: true
  }, {
    title: "Remote Lab Management Best Practices",
    description: "Tips and tricks for managing virtual training environments across distributed teams.",
    category: "Technical Guide",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    author: "Rajesh Kumar",
    featured: false
  }, {
    title: "Cost Optimization for Training Infrastructure",
    description: "How to reduce training costs by 40% without compromising on quality or performance.",
    category: "Cost Management",
    readTime: "6 min read",
    date: "Dec 10, 2024",
    author: "Anjali Mehta",
    featured: false
  }];

  const caseStudies = [{
    title: "TechCorp's Digital Transformation Journey",
    description: "How TechCorp trained 500+ developers on cloud technologies in 6 months",
    company: "TechCorp",
    results: "500+ developers trained, 85% certification rate",
    category: "Enterprise Training"
  }, {
    title: "StartupAccelerator's Bootcamp Success",
    description: "Scaling technical education for 50 startups simultaneously",
    company: "StartupAccelerator",
    results: "50 startups, 200+ participants, 95% satisfaction",
    category: "Bootcamp"
  }];

  const playbooks = [{
    title: "AWS Certification Training Playbook",
    description: "Complete curriculum and lab setup for AWS certification preparation",
    type: "Cloud Platform",
    duration: "4 weeks"
  }, {
    title: "DevOps Fundamentals Workshop",
    description: "Hands-on DevOps training with real-world scenarios and tools",
    type: "DevOps",
    duration: "2 weeks"
  }, {
    title: "Kubernetes Mastery Program",
    description: "Advanced Kubernetes training with practical deployment scenarios",
    type: "Container Orchestration",
    duration: "3 weeks"
  }];

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
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">CloudAdda Resources Hub</h2>
              <p className="text-gray-600">Everything you need for training success</p>
            </div>
            
            <nav className="space-y-2">
              {resourceSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 group ${
                      activeSection === section.id
                        ? 'bg-orange-50 border-2 border-orange-200 shadow-sm'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <IconComponent className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        activeSection === section.id ? 'text-orange-600' : 'text-gray-400 group-hover:text-gray-600'
                      }`} />
                      <div>
                        <h3 className={`font-semibold text-sm mb-1 ${
                          activeSection === section.id ? 'text-orange-900' : 'text-gray-900'
                        }`}>
                          {section.label}
                        </h3>
                        <p className={`text-xs leading-relaxed ${
                          activeSection === section.id ? 'text-orange-700' : 'text-gray-600'
                        }`}>
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Section */}
          <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center">
                <div className="inline-block mb-8">
                  <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200 text-sm font-medium px-4 py-2">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Expert Training Resources
                  </Badge>
                </div>
                <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
                  <span className="text-orange-600">CloudAdda</span>
                  <br />
                  <span className="text-gray-900">Resources</span>
                  <br />
                  <span className="text-purple-600">Hub</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                  Everything you need to deliver world-class training experiences. From proven methodologies 
                  to ready-made curricula, we've got your training success covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 group">
                    <BookOpen className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Explore Resources
                  </Button>
                  <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 group">
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download Playbooks
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Content Sections based on active selection */}
          {activeSection === "trainer-playbook" && (
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Trainer Playbooks
                  </Badge>
                  <h2 className="text-4xl font-bold text-foreground mb-6">Training Playbooks</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Complete curricula and lab setups, ready to deploy for your training programs.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {playbooks.map((playbook, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-purple-100 text-purple-800">{playbook.type}</Badge>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
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
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-purple-500" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          Download Playbook
                          <Download className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === "adda-insights" && (
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Adda Insights
                  </Badge>
                  <h2 className="text-4xl font-bold text-foreground mb-6">Technical Insights</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Tutorials, comparisons, and technical deep dives on Cloud Desktops & VPS.
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${post.featured ? 'border-2 border-orange-500 scale-105' : 'shadow-lg'}`}>
                      {post.featured && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                        <CardDescription className="text-base">{post.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-muted-foreground">
                            By {post.author} • {post.date}
                          </div>
                          <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
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
          )}

          {activeSection === "customer-stories" && (
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                    <Heart className="w-4 h-4 mr-2" />
                    Customer Stories
                  </Badge>
                  <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Real-world case studies from trainers, dev teams, and infrastructure users.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {caseStudies.map((study, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-lg">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline">{study.category}</Badge>
                          <div className="text-sm font-medium text-green-600">{study.company}</div>
                        </div>
                        <CardTitle className="text-2xl">{study.title}</CardTitle>
                        <CardDescription className="text-lg">{study.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-green-50 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-green-600" />
                            Key Results:
                          </h4>
                          <p className="text-muted-foreground">{study.results}</p>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Newsletter CTA */}
          <section className="py-20 bg-gradient-to-r from-orange-500 to-purple-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Stay Updated with Latest Resources</h2>
              <p className="text-lg text-white/90 mb-8">
                Get the latest training insights, playbooks, and success stories delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-3 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-white/50" 
                />
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8">
                  Subscribe
                </Button>
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
      </div>
    </div>
  );
};

export default TrainerAdda;
