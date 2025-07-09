import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Lightbulb, 
  ArrowRight, 
  Play, 
  Download, 
  Share2, 
  Clock, 
  User, 
  FileText, 
  Video, 
  Mic, 
  Heart,
  Target,
  Zap,
  Globe,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  MessageCircle,
  Calendar,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
  const articles = [
    {
      title: "Maximizing Engagement in Virtual Training Sessions",
      description: "Strategies to keep your online audience captivated and participating actively.",
      author: "Priya Sharma",
      date: "2024-03-15",
      readTime: "12 min",
      likes: 150,
      shares: 45,
      type: "Article"
    },
    {
      title: "The Art of Constructive Feedback",
      description: "Techniques for delivering feedback that inspires growth and avoids discouragement.",
      author: "Marcus Johnson",
      date: "2024-03-10",
      readTime: "10 min",
      likes: 120,
      shares: 30,
      type: "Article"
    },
    {
      title: "Building a Thriving Learning Community",
      description: "How to foster a supportive and collaborative environment among your trainees.",
      author: "Sarah Kim",
      date: "2024-03-05",
      readTime: "15 min",
      likes: 180,
      shares: 60,
      type: "Article"
    },
    {
      title: "Effective Time Management for Trainers",
      description: "Tips and tools to optimize your schedule and reduce burnout.",
      author: "David Lee",
      date: "2024-02-28",
      readTime: "8 min",
      likes: 90,
      shares: 25,
      type: "Article"
    },
    {
      title: "Leveraging Technology in Training",
      description: "Exploring the latest tech tools that can enhance your training programs.",
      author: "Emily Chen",
      date: "2024-02-22",
      readTime: "14 min",
      likes: 160,
      shares: 50,
      type: "Article"
    },
    {
      title: "Creating Inclusive Training Environments",
      description: "Strategies for ensuring all trainees feel valued and respected.",
      author: "Kevin Brown",
      date: "2024-02-15",
      readTime: "11 min",
      likes: 130,
      shares: 35,
      type: "Article"
    }
  ];

  const videos = [
    {
      title: "Interactive Training Techniques",
      description: "Learn how to make your training sessions more engaging with interactive elements.",
      author: "Laura Wilson",
      duration: "22 min",
      uploadDate: "2024-03-18",
      views: 2500,
      likes: 210,
      type: "Video"
    },
    {
      title: "Designing Effective Training Modules",
      description: "A step-by-step guide to creating training modules that deliver results.",
      author: "Chris Adams",
      duration: "18 min",
      uploadDate: "2024-03-12",
      views: 1800,
      likes: 160,
      type: "Video"
    },
    {
      title: "Overcoming Challenges in Remote Training",
      description: "Practical solutions to common issues faced in remote training environments.",
      author: "Megan Davis",
      duration: "25 min",
      uploadDate: "2024-03-07",
      views: 2200,
      likes: 190,
      type: "Video"
    }
  ];

  const podcasts = [
    {
      title: "The Future of Corporate Training",
      description: "Experts discuss the trends shaping the future of training and development.",
      host: "John Miller",
      duration: "35 min",
      uploadDate: "2024-03-20",
      downloads: 1200,
      likes: 100,
      type: "Podcast"
    },
    {
      title: "Building a Personal Brand as a Trainer",
      description: "Tips for trainers looking to establish themselves as thought leaders.",
      host: "Karen White",
      duration: "28 min",
      uploadDate: "2024-03-14",
      downloads: 950,
      likes: 80,
      type: "Podcast"
    },
    {
      title: "The Psychology of Learning",
      description: "Understanding how people learn can help you design more effective training programs.",
      host: "Robert Green",
      duration: "31 min",
      uploadDate: "2024-03-08",
      downloads: 1100,
      likes: 95,
      type: "Podcast"
    }
  ];

  const events = [
    {
      title: "Global Training Conference 2024",
      description: "Join us for the premier training event of the year!",
      location: "New York, NY",
      date: "2024-05-15",
      attendees: 500,
      type: "Event"
    },
    {
      title: "Online Training Summit",
      description: "Learn from the best in the industry without leaving your home.",
      location: "Online",
      date: "2024-04-22",
      attendees: 300,
      type: "Event"
    },
    {
      title: "Training Tech Expo",
      description: "Discover the latest technologies transforming the training landscape.",
      location: "San Francisco, CA",
      date: "2024-06-10",
      attendees: 400,
      type: "Event"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video': return Video;
      case 'Podcast': return Mic;
      case 'Event': return Calendar;
      default: return FileText;
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
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-orange-500 transition-colors bg-transparent">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/training-labs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/cloud-desktops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/vps"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
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
                      href="https://trainer.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Trainer Log In
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainee.cloudadda.com/login" 
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
              <Users className="w-5 h-5 mr-2" />
              Empowering Trainers
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-blue-600">Trainer</span>
              <br />
              <span className="text-purple-600">Adda</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Your go-to resource hub for training success
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              Access exclusive articles, videos, podcasts, and events designed to elevate your training skills and knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">Stay updated with the latest insights and strategies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <Badge variant="outline" className="text-xs">
                        {article.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">{article.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{article.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-muted-foreground">{article.likes}</span>
                      <Share2 className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-muted-foreground">{article.shares}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Featured Videos</h2>
            <p className="text-xl text-muted-foreground">Enhance your skills with our video tutorials</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(getTypeIcon(video.type), { className: "w-5 h-5 text-blue-600" })}
                      <Badge variant="outline" className="text-xs">
                        {video.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{video.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">{video.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{video.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{video.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Play className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">{video.views} views</span>
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-muted-foreground">{video.likes}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Top Podcasts</h2>
            <p className="text-xl text-muted-foreground">Listen to expert insights on the go</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(getTypeIcon(podcast.type), { className: "w-5 h-5 text-blue-600" })}
                      <Badge variant="outline" className="text-xs">
                        {podcast.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{podcast.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">{podcast.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{podcast.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{podcast.host}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-muted-foreground">{podcast.downloads} downloads</span>
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-muted-foreground">{podcast.likes}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">Connect with fellow trainers and industry experts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {React.createElement(getTypeIcon(event.type), { className: "w-5 h-5 text-blue-600" })}
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{event.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">{event.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{event.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-muted-foreground">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-muted-foreground">{event.attendees} attendees</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Elevate Your Training Career Today
          </h2>
          <p className="text-xl mb-12">
            Join our community of passionate trainers and access the resources you need to succeed.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
