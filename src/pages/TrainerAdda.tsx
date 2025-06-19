
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, ArrowRight, Star, Clock, GraduationCap, Award, CheckCircle, Download, FileText, Lightbulb, Heart, Calendar, Eye, ChevronRight, Sparkles, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const TrainerAdda = () => {
  const resourceSections = [
    {
      id: "trainer-playbook",
      label: "Trainer Playbook",
      icon: BookOpen
    },
    {
      id: "adda-insights", 
      label: "Adda Insights",
      icon: Lightbulb
    },
    {
      id: "customer-stories",
      label: "Customer Stories", 
      icon: Heart
    },
    {
      id: "downloads",
      label: "Downloads",
      icon: Download
    },
    {
      id: "adda-dispatch",
      label: "The Adda Dispatch",
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
    description: "Complete curriculum and lab setup for AWS certification preparation with hands-on exercises and real-world scenarios.",
    type: "Cloud Platform",
    duration: "4 weeks",
    modules: 12,
    difficulty: "Intermediate",
    color: "orange"
  }, {
    title: "DevOps Fundamentals Workshop", 
    description: "Hands-on DevOps training with real-world scenarios, CI/CD pipelines, and infrastructure automation.",
    type: "DevOps",
    duration: "2 weeks",
    modules: 8,
    difficulty: "Beginner",
    color: "blue"
  }, {
    title: "Kubernetes Mastery Program",
    description: "Advanced Kubernetes training with practical deployment scenarios, troubleshooting, and best practices.",
    type: "Container Orchestration",
    duration: "3 weeks", 
    modules: 15,
    difficulty: "Advanced",
    color: "purple"
  }];

  const downloads = [{
    title: "Training Lab Setup Checklist",
    description: "Complete checklist for setting up cloud training environments",
    type: "PDF Guide",
    size: "2.3 MB",
    icon: CheckCircle
  }, {
    title: "ROI Calculator for Training Programs",
    description: "Calculate the return on investment for your training initiatives",
    type: "Excel Tool",
    size: "1.1 MB",
    icon: TrendingUp
  }, {
    title: "Student Assessment Templates",
    description: "Ready-to-use templates for evaluating student progress",
    type: "Word Templates", 
    size: "850 KB",
    icon: Shield
  }];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="flex min-h-screen relative">
        {/* Elegant Floating Sidebar */}
        <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-40">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/60 p-4 w-48">
            <div className="text-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">Quick Jump</h3>
            </div>
            <nav className="space-y-2">
              {resourceSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left text-sm text-gray-600 hover:text-orange-600 transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-orange-50 font-medium border border-transparent hover:border-orange-200"
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-72">
          {/* Hero Section with Visual Elements */}
          <section className="py-20 px-8 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="max-w-5xl mx-auto text-center relative">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-orange-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-orange-200/50">
                <GraduationCap className="w-5 h-5 mr-2" />
                Training Excellence Hub
              </div>
              <h1 className="text-5xl font-bold mb-8 text-gray-900 leading-tight">
                CloudAdda <span className="text-orange-500">Resources</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Everything you need to deliver world-class training experiences. From proven methodologies to comprehensive curricula and real-world success stories.
              </p>
              <div className="flex gap-6 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Resources
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-orange-300 px-8 py-4 rounded-xl hover:bg-orange-50 transition-all duration-300">
                  Watch Demo
                </Button>
              </div>
            </div>
          </section>

          {/* Trainer Playbook Section */}
          <section id="trainer-playbook" className="px-8 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Comprehensive Curricula
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Training Playbooks</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Step-by-step training curricula designed by industry experts. Each playbook includes detailed lesson plans, hands-on exercises, and assessment frameworks.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {playbooks.map((playbook, index) => (
                  <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${playbook.color}-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <Badge className={`bg-${playbook.color}-100 text-${playbook.color}-700 border-${playbook.color}-200 font-medium`}>
                          {playbook.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-medium border-gray-300">
                          {playbook.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900 leading-tight mb-3">
                        {playbook.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {playbook.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            Duration
                          </div>
                          <span className="font-semibold text-gray-900">{playbook.duration}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center text-sm text-gray-600">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Modules
                          </div>
                          <span className="font-semibold text-gray-900">{playbook.modules}</span>
                        </div>
                      </div>
                      <Link to={`/playbook/${index + 1}`}>
                        <Button className={`w-full bg-${playbook.color}-600 hover:bg-${playbook.color}-700 text-white rounded-lg py-3 shadow-md hover:shadow-lg transition-all duration-300`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Playbook
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Adda Insights Section */}
          <section id="adda-insights" className="px-8 py-20 bg-gray-50 relative">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%)]"></div>
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Expert Knowledge
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Insights</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Deep-dive tutorials, industry best practices, and technical guides crafted by seasoned professionals in cloud infrastructure and training delivery.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden group bg-white">
                    {post.featured && (
                      <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10 transform rotate-12">
                        ⭐ Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="secondary" className="text-xs font-medium bg-blue-100 text-blue-700">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg text-gray-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">
                          By <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="text-sm text-gray-400">{post.date}</div>
                      </div>
                      <Link to={`/insights/${index + 1}`}>
                        <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-blue-200 hover:border-blue-300 rounded-lg py-3 transition-all duration-300">
                          Read Full Article
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link to="/insights">
                  <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                    View All Insights
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Customer Stories Section */}
          <section id="customer-stories" className="px-8 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Real Impact
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Discover how organizations worldwide have transformed their training programs and achieved remarkable results with CloudAdda's solutions.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden group bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <Badge variant="outline" className="border-green-200 text-green-700 font-medium bg-green-50">
                          {study.category}
                        </Badge>
                        <div className="text-right">
                          <div className="font-bold text-lg text-gray-900">{study.company}</div>
                          <div className="text-sm text-gray-500">Case Study</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-gray-900 mb-4 leading-tight">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed text-base">
                        {study.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="bg-green-50 rounded-xl p-6 mb-6 border-l-4 border-green-400">
                        <div className="flex items-start mb-3">
                          <Award className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-gray-900 mb-2">Key Results:</div>
                            <p className="text-gray-700">{study.results}</p>
                          </div>
                        </div>
                      </div>
                      <Link to={`/success-stories/${index + 1}`}>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 shadow-md hover:shadow-lg transition-all duration-300">
                          Read Complete Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link to="/success-stories">
                  <Button size="lg" variant="outline" className="border-2 border-green-200 text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                    View All Success Stories
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Downloads Section */}
          <section id="downloads" className="px-8 py-20 bg-gray-50 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05),transparent_70%)]"></div>
            <div className="max-w-7xl mx-auto relative">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Download className="w-4 h-4 mr-2" />
                  Free Resources
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Essential Downloads</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Practical tools, comprehensive templates, and strategic guides to streamline your training operations and maximize effectiveness.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {downloads.map((download, index) => {
                  const IconComponent = download.icon;
                  return (
                    <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg relative overflow-hidden group bg-white">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="relative z-10">
                        <div className="flex justify-between items-center mb-4">
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200 font-medium">
                            {download.type}
                          </Badge>
                          <span className="text-sm text-gray-500 font-medium">{download.size}</span>
                        </div>
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-purple-600" />
                        </div>
                        <CardTitle className="text-lg text-gray-900 mb-3 leading-tight">
                          {download.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {download.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-3 shadow-md hover:shadow-lg transition-all duration-300">
                          <Download className="w-4 h-4 mr-2" />
                          Download Free
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-12">
                <Link to="/downloads">
                  <Button size="lg" variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                    Browse All Downloads
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* The Adda Dispatch Section */}
          <section id="adda-dispatch" className="px-8 py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  Stay Connected
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">The Adda Dispatch</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Monthly insights, product updates, industry trends, and expert tips delivered directly to your inbox. Join our community of training professionals.
                </p>
              </div>
              <Card className="border-0 shadow-2xl relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-white to-blue-50"></div>
                <CardHeader className="text-center pb-6 relative z-10">
                  <CardTitle className="text-2xl text-gray-900 mb-2">Join Our Community</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Get exclusive access to training insights and industry updates
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex gap-4 mb-8 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-1 px-4 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300" 
                    />
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Subscribe
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="font-bold text-2xl text-orange-600 mb-1">1,200+</div>
                      <div className="text-gray-600 text-sm">Active Subscribers</div>
                    </div>
                    <div className="p-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="font-bold text-2xl text-blue-600 mb-1">Monthly</div>
                      <div className="text-gray-600 text-sm">Expert Updates</div>
                    </div>
                    <div className="p-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="font-bold text-2xl text-green-600 mb-1">100%</div>
                      <div className="text-gray-600 text-sm">Spam-Free</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrainerAdda;
