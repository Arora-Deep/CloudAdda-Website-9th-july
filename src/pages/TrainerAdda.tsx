import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, FileText, Video, Users, Calendar, Clock, ArrowRight, Download, Eye, Heart, Play, Lightbulb, Target, Award, Star, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CustomerLogosShowcase from "@/components/CustomerLogosShowcase";
import AddaDispatchSection from "@/components/AddaDispatchSection";

const TrainerAdda = () => {
  const blogPosts = [
    {
      id: "building-effective-cloud-training",
      title: "Building Effective Cloud Training Programs",
      excerpt: "A comprehensive guide to designing and implementing cloud training curricula that drive real results.",
      category: "Training Strategy",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Priya Sharma",
      views: "2.4k",
      likes: "156",
      thumbnail: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png"
    }
  ];

  const playbooks = [
    {
      id: "effective-lab-management",
      title: "Effective Lab Management Playbook",
      description: "Best practices for managing cloud training labs at scale",
      category: "Training Operations",
      readTime: "12 min read",
      downloads: "1.2k",
      thumbnail: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      featured: true
    }
  ];

  const caseStudies = [
    {
      id: "techcorp-transformation",
      company: "TechCorp Solutions",
      title: "500+ Developers Trained in 6 Months",
      excerpt: "How TechCorp transformed their entire development team with CloudAdda's training infrastructure.",
      industry: "Technology & Software",
      results: "85% certification rate, $2.3M cost savings",
      thumbnail: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      featured: true
    }
  ];

  const webinars = [
    {
      id: "scaling-training-infrastructure",
      title: "Scaling Training Infrastructure for Enterprise Teams",
      description: "Learn how to build training programs that scale with your organization's growth.",
      date: "Jan 30, 2025",
      time: "2:00 PM EST",
      duration: "45 min",
      speaker: "Rahul Mehta, Cloud Architect",
      registrations: "240+",
      thumbnail: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      isUpcoming: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Log In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Trainer <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Adda</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Your one-stop resource hub for cloud training excellence. Get expert insights, practical guides, 
              and proven strategies to elevate your training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg">
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full text-lg">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-orange-700">Blog Posts</CardTitle>
                <CardDescription>Expert insights and best practices</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-sm text-orange-600">Articles Published</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-purple-700">Playbooks</CardTitle>
                <CardDescription>Step-by-step implementation guides</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">12</div>
                <div className="text-sm text-purple-600">Downloadable Guides</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-700">Case Studies</CardTitle>
                <CardDescription>Real success stories and results</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">8</div>
                <div className="text-sm text-blue-600">Success Stories</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-green-700">Webinars</CardTitle>
                <CardDescription>Live sessions with experts</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">15</div>
                <div className="text-sm text-green-600">Sessions Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
              <p className="text-gray-600">Expert insights and practical advice for training professionals</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center text-orange-500 border-orange-500 hover:bg-orange-50">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-orange-100 text-orange-700 px-3 py-1">
                        <Lightbulb className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {post.likes}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Playbooks Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Playbooks</h2>
              <p className="text-gray-600">Downloadable guides with actionable strategies</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center text-purple-500 border-purple-500 hover:bg-purple-50">
              Browse All Playbooks
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {playbooks.map((playbook) => (
              <Link key={playbook.id} to={`/playbook/${playbook.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-indigo-50">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {playbook.title}
                          </h3>
                          <Badge className="bg-purple-100 text-purple-700 text-xs px-2 py-1 mt-1">
                            {playbook.category}
                          </Badge>
                        </div>
                      </div>
                      {playbook.featured && (
                        <Badge className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{playbook.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-purple-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {playbook.readTime}
                        </div>
                        <div className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {playbook.downloads}
                        </div>
                      </div>
                      <Button size="sm" className="bg-purple-500 hover:bg-purple-600 text-white">
                        Get Playbook
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
              <p className="text-gray-600">Real results from training organizations like yours</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center text-blue-500 border-blue-500 hover:bg-blue-50">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.id} to={`/case-study/${study.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {study.company}
                        </h3>
                        <Badge className="bg-blue-100 text-blue-700 text-xs px-2 py-1 mb-3">
                          {study.industry}
                        </Badge>
                        <h4 className="text-lg font-semibold text-gray-800">{study.title}</h4>
                      </div>
                      {study.featured && (
                        <Badge className="bg-green-100 text-green-700 text-xs px-2 py-1">
                          <Award className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{study.excerpt}</p>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <div className="font-semibold text-green-800 text-sm mb-1">Key Results:</div>
                      <div className="text-green-700">{study.results}</div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm font-medium text-blue-600">Read Success Story</span>
                      <ChevronRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Webinars</h2>
              <p className="text-gray-600">Live sessions with cloud training experts</p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center text-green-500 border-green-500 hover:bg-green-50">
              View All Webinars
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        {webinar.isUpcoming && (
                          <Badge className="bg-red-100 text-red-700 text-xs px-2 py-1 mb-2">
                            Live Soon
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{webinar.date}</div>
                      <div>{webinar.time}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{webinar.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-green-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {webinar.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {webinar.registrations} registered
                      </div>
                    </div>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                      <Play className="w-4 h-4 mr-2" />
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <CustomerLogosShowcase />

      {/* Newsletter Section */}
      <AddaDispatchSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Training?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of training professionals who rely on CloudAdda's resources and infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainerAdda;
