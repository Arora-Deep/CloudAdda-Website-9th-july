
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, ArrowRight, Star, Clock, GraduationCap, Award, CheckCircle, Download, FileText, Lightbulb, Heart, Calendar } from "lucide-react";
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
        {/* Compact Sidebar */}
        <div className="fixed top-24 left-6 z-40">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 w-48">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Jump to Section</h3>
            <nav className="space-y-1">
              {resourceSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full text-left text-sm text-gray-600 hover:text-orange-600 transition-colors py-2 px-3 rounded-lg hover:bg-orange-50 flex items-center space-x-2"
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-64">
          {/* Hero Section */}
          <section className="py-20 px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-orange-50 text-orange-700 border-orange-200 text-sm font-medium px-4 py-2">
                <GraduationCap className="w-4 h-4 mr-2" />
                Expert Training Resources
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-900">
                CloudAdda Resources Hub
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Everything you need to deliver world-class training experiences. From proven methodologies 
                to ready-made curricula.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Resources
                </Button>
                <Button size="lg" variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  <Download className="w-5 h-5 mr-2" />
                  Download Playbooks
                </Button>
              </div>
            </div>
          </section>

          {/* Trainer Playbook Section */}
          <section id="trainer-playbook" className="px-8 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
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
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-purple-50 text-purple-700 border-purple-200">{playbook.type}</Badge>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {playbook.duration}
                        </div>
                      </div>
                      <CardTitle className="text-lg text-gray-900">{playbook.title}</CardTitle>
                      <CardDescription className="text-gray-600">{playbook.description}</CardDescription>
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
                            <CheckCircle className="w-4 h-4 text-green-500" />
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
          </section>

          {/* Adda Insights Section */}
          <section id="adda-insights" className="px-8 pb-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
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
                  <Card key={index} className={`hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 ${post.featured ? 'ring-2 ring-orange-200' : ''}`}>
                    {post.featured && (
                      <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs border-gray-300">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight text-gray-900">{post.title}</CardTitle>
                      <CardDescription className="text-gray-600">{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          By {post.author} • {post.date}
                        </div>
                        <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
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
          <section id="customer-stories" className="px-8 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
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
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="border-gray-300">{study.category}</Badge>
                        <div className="text-sm font-medium text-green-600">{study.company}</div>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{study.title}</CardTitle>
                      <CardDescription className="text-base text-gray-600">{study.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 rounded-lg p-4 mb-4 border border-green-100">
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
          </section>

          {/* Downloads Section */}
          <section id="downloads" className="px-8 pb-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-indigo-50 text-indigo-700 border-indigo-200">
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
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-indigo-50 text-indigo-700 border-indigo-200">{download.type}</Badge>
                        <div className="text-sm text-gray-500">{download.size}</div>
                      </div>
                      <CardTitle className="text-lg text-gray-900">{download.title}</CardTitle>
                      <CardDescription className="text-gray-600">{download.description}</CardDescription>
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
          </section>

          {/* The Adda Dispatch Section */}
          <section id="adda-dispatch" className="px-8 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  The Adda Dispatch
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Monthly Newsletter</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Monthly product updates, tips, and behind-the-scenes from the CloudAdda team.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <Card className="border border-gray-100 shadow-lg">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-900">Stay Updated</CardTitle>
                    <CardDescription className="text-base text-gray-600">
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
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <Link to="/" className="flex items-center space-x-2">
                    <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                    <span className="font-bold text-xl">CloudAdda</span>
                  </Link>
                  <p className="text-gray-300">
                    Simple. Scalable. Human. Infrastructure that just works.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Solutions</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
                    <li><Link to="/cloud-desktops" className="hover:text-white transition-colors">Cloud Desktops</Link></li>
                    <li><Link to="/vps" className="hover:text-white transition-colors">VPS</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/trainer-adda" className="hover:text-white transition-colors">Trainer Adda</Link></li>
                    <li><Link to="/guides" className="hover:text-white transition-colors">Guides & Docs</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Support</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
