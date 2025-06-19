
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, ArrowRight, Star, Clock, GraduationCap, Award, CheckCircle, Download, FileText, Lightbulb, Heart, Calendar, Eye, ChevronRight } from "lucide-react";
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
    difficulty: "Intermediate"
  }, {
    title: "DevOps Fundamentals Workshop", 
    description: "Hands-on DevOps training with real-world scenarios, CI/CD pipelines, and infrastructure automation.",
    type: "DevOps",
    duration: "2 weeks",
    modules: 8,
    difficulty: "Beginner"
  }, {
    title: "Kubernetes Mastery Program",
    description: "Advanced Kubernetes training with practical deployment scenarios, troubleshooting, and best practices.",
    type: "Container Orchestration",
    duration: "3 weeks", 
    modules: 15,
    difficulty: "Advanced"
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
        {/* Compact Floating Sidebar */}
        <div className="fixed top-32 left-6 z-40">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-3 w-44">
            <nav className="space-y-1">
              {resourceSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left text-sm text-gray-600 hover:text-orange-600 transition-colors py-2 px-2 rounded-lg hover:bg-orange-50 font-medium"
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-56">
          {/* Hero Section */}
          <section className="py-16 px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <GraduationCap className="w-4 h-4 mr-2" />
                Training Excellence Hub
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">
                CloudAdda Resources
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Everything you need to deliver world-class training experiences. From proven methodologies to comprehensive curricula.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Explore Resources
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </section>

          {/* Trainer Playbook Section */}
          <section id="trainer-playbook" className="px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Playbooks</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive training curricula with step-by-step guidance, practical exercises, and expert insights.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {playbooks.map((playbook, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <Badge className="bg-blue-50 text-blue-700 border-blue-200">{playbook.type}</Badge>
                        <Badge variant="outline" className="text-xs">{playbook.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-xl text-gray-900 leading-tight">{playbook.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">{playbook.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration:</span>
                          <span className="font-medium">{playbook.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Modules:</span>
                          <span className="font-medium">{playbook.modules}</span>
                        </div>
                      </div>
                      <Link to={`/playbook/${index + 1}`}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
          <section id="adda-insights" className="px-8 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Insights</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  In-depth tutorials, best practices, and technical guides for cloud infrastructure and training delivery.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 relative">
                    {post.featured && (
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-center mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-lg text-gray-900 leading-tight">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          By {post.author}
                        </div>
                        <Link to={`/insights/${index + 1}`}>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/insights">
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    View All Insights
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Customer Stories Section */}
          <section id="customer-stories" className="px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Real-world case studies showcasing transformative training outcomes and measurable results.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="border-green-200 text-green-700">{study.category}</Badge>
                        <span className="text-sm font-medium text-gray-600">{study.company}</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{study.title}</CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-100">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 mr-2 text-green-600" />
                          <span className="font-semibold text-gray-900">Results:</span>
                        </div>
                        <p className="text-gray-700 text-sm">{study.results}</p>
                      </div>
                      <Link to={`/success-stories/${index + 1}`}>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/success-stories">
                  <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                    View All Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Downloads Section */}
          <section id="downloads" className="px-8 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Resources</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Essential tools, templates, and guides to streamline your training operations.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {downloads.map((download, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-200">
                    <CardHeader>
                      <div className="flex justify-between items-center mb-3">
                        <Badge className="bg-purple-50 text-purple-700 border-purple-200">{download.type}</Badge>
                        <span className="text-sm text-gray-500">{download.size}</span>
                      </div>
                      <CardTitle className="text-lg text-gray-900">{download.title}</CardTitle>
                      <CardDescription className="text-gray-600">{download.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/downloads">
                  <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                    View All Downloads
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* The Adda Dispatch Section */}
          <section id="adda-dispatch" className="px-8 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Adda Dispatch</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Monthly insights, product updates, and expert tips delivered directly to your inbox.
                </p>
              </div>
              <Card className="border border-gray-200 shadow-sm">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-gray-900">Stay Updated</CardTitle>
                  <CardDescription className="text-gray-600">
                    Join our community of training professionals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mb-6">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" 
                    />
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
                      Subscribe
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div>
                      <div className="font-semibold text-lg text-orange-600">500+</div>
                      <div className="text-gray-600">Subscribers</div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-orange-600">Monthly</div>
                      <div className="text-gray-600">Updates</div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg text-orange-600">0</div>
                      <div className="text-gray-600">Spam</div>
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
