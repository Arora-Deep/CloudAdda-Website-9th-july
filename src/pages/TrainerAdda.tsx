
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, ArrowRight, Star, Clock, GraduationCap, Award, CheckCircle, Download, FileText, Lightbulb, Heart, Calendar, ChevronDown } from "lucide-react";
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

  const downloads = [{
    title: "Training Lab Setup Checklist",
    description: "Complete checklist for setting up cloud training environments",
    type: "PDF Guide",
    size: "2.3 MB"
  }, {
    title: "ROI Calculator for Training Programs",
    description: "Calculate the return on investment for your training initiatives",
    type: "Excel Tool",
    size: "1.1 MB"
  }, {
    title: "Student Assessment Templates",
    description: "Ready-to-use templates for evaluating student progress",
    type: "Word Templates",
    size: "850 KB"
  }];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-12 w-auto object-contain" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-500 transition-colors py-2 flex items-center">
                  Solutions
                </button>
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-6">
                    <div className="space-y-4">
                      <Link to="/training-labs" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover/item:text-orange-600">Training Labs</div>
                            <p className="text-sm text-gray-600">Provisioned lab environments for training companies</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/cloud-desktops" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover/item:text-purple-600">Cloud Desktops</div>
                            <p className="text-sm text-gray-600">Fast, secure desktops accessible from anywhere</p>
                          </div>
                        </div>
                      </Link>
                      <Link to="/vps" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group/item">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Target className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover/item:text-blue-600">VPS Hosting</div>
                            <p className="text-sm text-gray-600">High-performance VPS with AMD EPYC processors</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-500 transition-colors py-2 flex items-center">
                  Resources
                </button>
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="p-6">
                    <div className="space-y-3">
                      {resourceSections.map((section) => {
                        const IconComponent = section.icon;
                        return (
                          <Link key={section.id} to="/trainer-adda" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group/item">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-orange-600" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-sm group-hover/item:text-orange-600">{section.label}</div>
                                <p className="text-xs text-gray-600 leading-tight">{section.description}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About</Link>
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
        {/* Sleeker Left Sidebar */}
        <div className="w-72 bg-white/80 backdrop-blur-sm border-r border-gray-100 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">CloudAdda Resources Hub</h2>
              <p className="text-sm text-gray-600">Everything you need for training success</p>
            </div>
            
            <nav className="space-y-1">
              {resourceSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 group ${
                      activeSection === section.id
                        ? 'bg-orange-50 border border-orange-200 shadow-sm'
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activeSection === section.id ? 'bg-orange-100' : 'bg-gray-100 group-hover:bg-orange-100'
                      }`}>
                        <IconComponent className={`w-4 h-4 ${
                          activeSection === section.id ? 'text-orange-600' : 'text-gray-500 group-hover:text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
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
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-white">
          {/* Hero Section */}
          <section className="py-24 px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200 text-sm font-medium px-4 py-2">
                <GraduationCap className="w-4 h-4 mr-2" />
                Expert Training Resources
              </Badge>
              <h1 className="text-5xl font-black mb-6 leading-tight tracking-tight">
                <span className="text-orange-600">CloudAdda</span>
                <br />
                <span className="text-gray-900">Resources Hub</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Everything you need to deliver world-class training experiences. From proven methodologies 
                to ready-made curricula.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </section>

          {/* Dynamic Content Sections */}
          <section className="px-8 pb-16">
            <div className="max-w-6xl mx-auto">
              {activeSection === "trainer-playbook" && (
                <div>
                  <div className="text-center mb-12">
                    <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Trainer Playbooks
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Playbooks</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Complete curricula and lab setups, ready to deploy for your training programs.
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {playbooks.map((playbook, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-purple-100 text-purple-800">{playbook.type}</Badge>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {playbook.duration}
                            </div>
                          </div>
                          <CardTitle className="text-lg">{playbook.title}</CardTitle>
                          <CardDescription>{playbook.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            {[
                              "Complete curriculum guide",
                              "Lab setup instructions",
                              "Assessment materials",
                              "Instructor resources"
                            ].map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-purple-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
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
              )}

              {activeSection === "adda-insights" && (
                <div>
                  <div className="text-center mb-12">
                    <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Adda Insights
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Insights</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Tutorials, comparisons, and technical deep dives on Cloud Desktops & VPS.
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                      <Card key={index} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md ${post.featured ? 'ring-2 ring-orange-200' : ''}`}>
                        {post.featured && (
                          <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                          <CardDescription>{post.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
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
              )}

              {activeSection === "customer-stories" && (
                <div>
                  <div className="text-center mb-12">
                    <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                      <Heart className="w-4 h-4 mr-2" />
                      Customer Stories
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Real-world case studies from trainers, dev teams, and infrastructure users.
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline">{study.category}</Badge>
                            <div className="text-sm font-medium text-green-600">{study.company}</div>
                          </div>
                          <CardTitle className="text-xl">{study.title}</CardTitle>
                          <CardDescription className="text-base">{study.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-green-50 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-green-600" />
                              Key Results:
                            </h4>
                            <p className="text-gray-700">{study.results}</p>
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
              )}

              {activeSection === "downloads" && (
                <div>
                  <div className="text-center mb-12">
                    <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
                      <Download className="w-4 h-4 mr-2" />
                      Downloads
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Resources</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Free PDFs, checklists, lab calculators, and planning tools.
                    </p>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-6">
                    {downloads.map((download, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-indigo-100 text-indigo-800">{download.type}</Badge>
                            <div className="text-sm text-gray-500">{download.size}</div>
                          </div>
                          <CardTitle className="text-lg">{download.title}</CardTitle>
                          <CardDescription>{download.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                            <Download className="w-4 h-4 mr-2" />
                            Download Free
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === "adda-dispatch" && (
                <div>
                  <div className="text-center mb-12">
                    <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                      <Calendar className="w-4 h-4 mr-2" />
                      The Adda Dispatch
                    </Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Monthly Newsletter</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Monthly product updates, tips, and behind-the-scenes from the CloudAdda team.
                    </p>
                  </div>
                  <div className="max-w-2xl mx-auto">
                    <Card className="border-0 shadow-lg">
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Stay Updated</CardTitle>
                        <CardDescription className="text-base">
                          Get the latest insights, product updates, and exclusive content delivered to your inbox
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                          />
                          <Button className="bg-purple-600 hover:bg-purple-700 px-8">
                            Subscribe
                          </Button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="font-semibold text-2xl text-purple-600">500+</div>
                            <div className="text-sm text-gray-600">Subscribers</div>
                          </div>
                          <div>
                            <div className="font-semibold text-2xl text-purple-600">Monthly</div>
                            <div className="text-sm text-gray-600">Updates</div>
                          </div>
                          <div>
                            <div className="font-semibold text-2xl text-purple-600">0</div>
                            <div className="text-sm text-gray-600">Spam</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-8">
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
                    <li><Link to="/training-labs" className="hover:text-gray-900 transition-colors">Training Labs</Link></li>
                    <li><Link to="/cloud-desktops" className="hover:text-gray-900 transition-colors">Cloud Desktops</Link></li>
                    <li><Link to="/vps" className="hover:text-gray-900 transition-colors">VPS</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link to="/trainer-adda" className="hover:text-gray-900 transition-colors">Trainer Adda</Link></li>
                    <li><Link to="/guides" className="hover:text-gray-900 transition-colors">Guides & Docs</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><Link to="/support" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
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
