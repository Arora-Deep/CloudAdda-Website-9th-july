import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Search, BookOpen, Users, Target, Calendar, ArrowRight, Filter, Star, Clock, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const blogPosts = [
    {
      title: "Building Effective Cloud Training Programs",
      description: "A comprehensive guide to designing and implementing cloud training curricula that drive real results.",
      category: "Training Strategy",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Priya Sharma",
      featured: true
    },
    {
      title: "Remote Lab Management Best Practices",
      description: "Tips and tricks for managing virtual training environments across distributed teams.",
      category: "Technical Guide",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      author: "Rajesh Kumar",
      featured: false
    },
    {
      title: "Cost Optimization for Training Infrastructure",
      description: "How to reduce training costs by 40% without compromising on quality or performance.",
      category: "Cost Management",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      author: "Anjali Mehta",
      featured: false
    }
  ];

  const caseStudies = [
    {
      title: "TechCorp's Digital Transformation Journey",
      description: "How TechCorp trained 500+ developers on cloud technologies in 6 months",
      company: "TechCorp",
      results: "500+ developers trained, 85% certification rate",
      category: "Enterprise Training"
    },
    {
      title: "StartupAccelerator's Bootcamp Success",
      description: "Scaling technical education for 50 startups simultaneously",
      company: "StartupAccelerator",
      results: "50 startups, 200+ participants, 95% satisfaction",
      category: "Bootcamp"
    }
  ];

  const playbooks = [
    {
      title: "AWS Certification Training Playbook",
      description: "Complete curriculum and lab setup for AWS certification preparation",
      type: "Cloud Platform",
      duration: "4 weeks"
    },
    {
      title: "DevOps Fundamentals Workshop",
      description: "Hands-on DevOps training with real-world scenarios and tools",
      type: "DevOps",
      duration: "2 weeks"
    },
    {
      title: "Kubernetes Mastery Program",
      description: "Advanced Kubernetes training with practical deployment scenarios",
      type: "Container Orchestration",
      duration: "3 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-gray-900">CloudAdda</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600 font-medium">
                        Solutions
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/20 to-orange-600/20 p-6 no-underline outline-none focus:shadow-md"
                                href="/training-labs"
                              >
                                <div className="mb-2 mt-4 text-lg font-medium text-gray-900">
                                  Training Labs
                                </div>
                                <p className="text-sm leading-tight text-gray-600">
                                  Spin up isolated environments for hands-on learning
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/cloud-desktops"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none text-gray-900">Virtual Desktops</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                  Full desktop experience in the cloud
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link
                                to="/vps"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none text-gray-900">VPS</div>
                                <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                  Scalable virtual private servers
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-600 font-medium">Resources</Link>
                <Link to="/pricing" className="text-gray-700 hover:text-orange-600 font-medium">Pricing</Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium">Contact</Link>
                <Link to="/support" className="text-gray-700 hover:text-orange-600 font-medium">Support</Link>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Log In
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Start Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/training-labs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">Training Labs</Link>
              <Link to="/cloud-desktops" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">Virtual Desktops</Link>
              <Link to="/vps" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">VPS</Link>
              <Link to="/trainer-adda" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">Resources</Link>
              <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">Pricing</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">About</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">Contact</Link>
              <Link to="/support" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50">Support</Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                  Log In
                </Button>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-orange-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-8 bg-orange-100 text-orange-800 border-orange-200 text-lg font-medium px-6 py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              Knowledge Hub for Training Excellence
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="text-orange-600">Trainer</span>
              <br />
              <span className="text-purple-600">Adda</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Your go-to resource for training insights, best practices, and proven strategies
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              Discover expert guides, real-world case studies, and ready-to-use playbooks that help you 
              deliver exceptional training experiences. From infrastructure setup to curriculum design, 
              we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search articles, guides, case studies..." 
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 rounded-full px-8 py-4 text-lg">
                <Filter className="w-5 h-5 mr-2" />
                Browse Categories
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">150+</div>
                <div className="text-muted-foreground">Articles & Guides</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-muted-foreground">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-muted-foreground">Training Playbooks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-muted-foreground">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Featured This Week</h2>
            <p className="text-xl text-muted-foreground">Hand-picked content from our training experts</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                post.featured ? 'border-2 border-orange-500 lg:scale-105' : ''
              }`}>
                {post.featured && (
                  <Badge className="absolute -top-3 left-4 bg-orange-500 text-white">
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

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Explore by Category</h2>
            <p className="text-xl text-muted-foreground">Find exactly what you're looking for</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "Training Guides", 
                count: "45 articles",
                description: "Comprehensive guides for effective training delivery",
                color: "bg-blue-100 text-blue-600"
              },
              { 
                icon: Users, 
                title: "Case Studies", 
                count: "32 stories",
                description: "Real success stories from our training partners",
                color: "bg-green-100 text-green-600"
              },
              { 
                icon: Target, 
                title: "Best Practices", 
                count: "28 insights",
                description: "Proven strategies and methodologies",
                color: "bg-purple-100 text-purple-600"
              },
              { 
                icon: Calendar, 
                title: "Playbooks", 
                count: "25 resources",
                description: "Ready-to-use training curricula and setups",
                color: "bg-orange-100 text-orange-600"
              }
            ].map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-2">{category.count}</CardDescription>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Learn from real-world training implementations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{study.category}</Badge>
                    <div className="text-sm font-medium text-orange-600">{study.company}</div>
                  </div>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                  <CardDescription className="text-lg">{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Key Results:</h4>
                    <p className="text-muted-foreground">{study.results}</p>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Playbooks Section */}
      <section className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Training Playbooks</h2>
            <p className="text-xl text-muted-foreground">Ready-to-use curricula and lab setups</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {playbooks.map((playbook, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-purple-100 text-purple-800">{playbook.type}</Badge>
                    <div className="text-sm text-muted-foreground">{playbook.duration}</div>
                  </div>
                  <CardTitle className="text-xl">{playbook.title}</CardTitle>
                  <CardDescription>{playbook.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Download Playbook
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest training insights, case studies, and playbooks delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-4">
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
  );
};

export default TrainerAdda;
