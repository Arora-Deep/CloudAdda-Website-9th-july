import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Clock, 
  User, 
  ArrowRight, 
  Star, 
  Download,
  Play,
  FileText,
  Video,
  Code,
  Terminal,
  Settings,
  Zap,
  Shield,
  Users,
  Target,
  Globe,
  Award,
  CheckCircle,
  Lightbulb,
  Heart,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

const Guides = () => {
  const guides = [
    {
      title: "Getting Started with CloudAdda",
      description: "Complete beginner's guide to setting up your first cloud environment",
      type: "Documentation",
      category: "Getting Started",
      readTime: "15 min",
      difficulty: "Beginner",
      downloads: "2.5K"
    },
    {
      title: "Lab Environment Best Practices",
      description: "Deep dive into training lab optimization and configuration",
      type: "Technical Guide",
      category: "Virtual Training Labs",
      readTime: "30 min",
      difficulty: "Advanced",
      downloads: "1.8K"
    },
    {
      title: "Training Lab Architecture",
      description: "How to design and implement effective training environments",
      type: "Architecture Guide",
      category: "Virtual Training Labs",
      readTime: "45 min",
      difficulty: "Advanced",
      downloads: "1.2K"
    },
    {
      title: "API Integration Manual",
      description: "Complete reference for integrating with CloudAdda APIs",
      type: "API Documentation",
      category: "Development",
      readTime: "60 min",
      difficulty: "Advanced",
      downloads: "950"
    },
    {
      title: "Security Best Practices",
      description: "Essential security configurations and monitoring setups",
      type: "Security Guide",
      category: "Security",
      readTime: "35 min",
      difficulty: "Intermediate",
      downloads: "2.8K"
    }
  ];

  const categories = [
    { name: "Getting Started", count: 12, color: "bg-green-100 text-green-600" },
    { name: "Virtual Training Labs", count: 18, color: "bg-orange-100 text-orange-600" },
    { name: "Security", count: 8, color: "bg-red-100 text-red-600" },
    { name: "Development", count: 6, color: "bg-yellow-100 text-yellow-600" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Tutorial': return Video;
      case 'API Documentation': return FileText;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/virtual-training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Solutions</Link>
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
                      href="https://trainer-v2.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Trainer Log In
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainee-v2.cloudadda.com/login" 
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg font-medium px-6 py-3">
              <BookOpen className="w-5 h-5 mr-2" />
              Comprehensive Documentation
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="text-blue-600">Guides</span>
              <br />
              <span className="text-purple-600">& Docs</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Everything you need to succeed with CloudAdda
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              From quick start guides to advanced configurations, our comprehensive documentation 
              helps you get the most out of your cloud infrastructure. Find step-by-step tutorials, 
              best practices, and technical references all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search guides and documentation..." 
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-4 text-lg">
                <Filter className="w-5 h-5 mr-2" />
                Filter by Category
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">75+</div>
                <div className="text-muted-foreground">Guides & Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-muted-foreground">Video Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-muted-foreground">User Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Browse by Category</h2>
            <p className="text-xl text-muted-foreground">Find the documentation you need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category.color} mb-2`}>
                    {category.name}
                  </div>
                  <CardDescription>{category.count} guides available</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Popular Guides</h2>
            <p className="text-xl text-muted-foreground">Most accessed documentation and tutorials</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(getTypeIcon(guide.type), { className: "w-5 h-5 text-blue-600" })}
                      <Badge variant="outline" className="text-xs">
                        {guide.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{guide.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight mb-2">{guide.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{guide.description}</CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge className={getDifficultyColor(guide.difficulty)}>
                        {guide.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {guide.downloads} downloads
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Read Guide
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Quick Access</h2>
            <p className="text-xl text-muted-foreground">Jump to the most commonly needed resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "API Reference",
                description: "Complete API documentation",
                icon: FileText,
                color: "bg-green-500"
              },
              {
                title: "Video Tutorials",
                description: "Step-by-step video guides",
                icon: Video,
                color: "bg-blue-500"
              },
              {
                title: "Best Practices",
                description: "Proven strategies and tips",
                icon: Star,
                color: "bg-purple-500"
              },
              {
                title: "Community Forum",
                description: "Get help from the community",
                icon: Users,
                color: "bg-orange-500"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need More Help?</h2>
          <p className="text-xl text-white/90 mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/support">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4">
                Contact Support
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-4">
                Request a Demo
              </Button>
            </Link>
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
                <li><Link to="/virtual-training-labs" className="hover:text-foreground transition-colors">Virtual Training Labs</Link></li>
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

export default Guides;
