import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, BookOpen, Users, Award, TrendingUp, Target, Download, Play, FileText, Lightbulb, Star, Globe, Heart, Shield, CheckCircle, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              <Link to="/trainer-adda" className="text-orange-500 font-medium">Resources</Link>
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

      {/* Section Navigation Bar */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto">
            <button
              onClick={() => scrollToSection('overview')}
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              Training Resources
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection('success-stories')}
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              Tools & Templates
            </button>
            <button
              onClick={() => scrollToSection('get-started')}
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-8 bg-purple-100 text-purple-800 border-purple-200 text-lg font-medium px-6 py-3">
              <Users className="w-5 h-5 mr-2" />
              Trainer Community Hub
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="text-purple-600">Trainer</span>
              <br />
              <span className="text-orange-600">Adda</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
              Empowering trainers and educators with world-class cloud infrastructure
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              Join thousands of trainers who trust CloudAdda to deliver exceptional learning experiences. 
              Access resources, connect with peers, and transform your training programs with our comprehensive platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 rounded-full px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Start Training Today
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full px-8 py-4 text-lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Browse Resources
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">5,000+</div>
                <div className="text-muted-foreground">Active Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">50,000+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-muted-foreground">Course Templates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">99.8%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Resources Section */}
      <section id="resources" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Explore Training Resources</h2>
            <p className="text-xl text-muted-foreground">
              Enhance your training programs with our curated resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-blue-500" />
                  <CardTitle className="text-xl">Cloud Training Guides</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Step-by-step guides for effective cloud training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Download Guides
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Resource Card 2 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Play className="w-6 h-6 text-purple-500" />
                  <CardTitle className="text-xl">Video Tutorials</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Engaging video tutorials for cloud concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Watch Tutorials
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Resource Card 3 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <CardTitle className="text-xl">Best Practices</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Proven strategies for successful cloud training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Explore Best Practices
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Connect with the Community</h2>
            <p className="text-xl text-muted-foreground">
              Share insights, ask questions, and collaborate with fellow trainers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Community Card 1 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-green-500" />
                  <CardTitle className="text-xl">Discussion Forums</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Engage in discussions and share your expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Join the Forums
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Community Card 2 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-blue-500" />
                  <CardTitle className="text-xl">Expert Webinars</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Learn from industry experts in live webinars
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Attend Webinars
                  <Clock className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Community Card 3 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-purple-500" />
                  <CardTitle className="text-xl">Community Challenges</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Participate in challenges and showcase your skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Explore Challenges
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Read Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Discover how trainers are transforming education with CloudAdda
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Success Story Card 1 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Empowering Students with Virtual Labs
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  How a trainer increased student engagement by 40%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  "CloudAdda's virtual labs have revolutionized my training sessions. Students are more engaged, and their understanding has significantly improved."
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-orange-500" />
                </div>
              </CardContent>
            </Card>

            {/* Success Story Card 2 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  Scaling Training Programs Globally
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  A trainer's journey to reach students worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  "With CloudAdda, I've been able to scale my training programs globally. The platform is reliable, and the support is exceptional."
                </p>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-orange-500" />
                  <Star className="w-5 h-5 text-gray-300" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Templates Section */}
      <section id="tools" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Access Tools & Templates</h2>
            <p className="text-xl text-muted-foreground">
              Streamline your training process with our ready-made resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tool Card 1 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-green-500" />
                  <CardTitle className="text-xl">Course Outlines</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Downloadable course outlines for various cloud topics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Download Outlines
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Tool Card 2 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-500" />
                  <CardTitle className="text-xl">Assessment Templates</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Ready-to-use assessment templates for evaluating student progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Download Templates
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Tool Card 3 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="w-6 h-6 text-purple-500" />
                  <CardTitle className="text-xl">Training Manuals</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Comprehensive training manuals for in-depth learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Download Manuals
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Tool Card 4 */}
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-orange-500" />
                  <CardTitle className="text-xl">Virtual Lab Setups</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  Pre-configured virtual lab setups for hands-on training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Explore Lab Setups
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-24 bg-gradient-to-r from-purple-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get Started with CloudAdda</h2>
          <p className="text-xl text-white/90 mb-8">
            Transform your training programs with our world-class cloud infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-4">
              Contact Our Team
              <Users className="w-4 h-4 ml-2" />
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
