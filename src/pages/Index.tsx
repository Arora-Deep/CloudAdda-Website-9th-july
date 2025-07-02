import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Play, Users, Zap, Shield, Server, Monitor, Cloud, CheckCircle, Star, Clock, Award, TrendingUp, Target, Lightbulb, BookOpen, Heart, Calendar, Download, ChevronRight, Sparkles, Quote, PlusCircle, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "How quickly can I get started?",
      answer: "Most training labs are ready within 3 hours. Cloud desktops can be provisioned in under 15 minutes. VPS instances are typically available within 30 minutes of your request."
    },
    {
      question: "What makes CloudAdda different from AWS or Azure?",
      answer: "Unlike generic cloud platforms, CloudAdda is purpose-built for training and development environments. We provide human support, not just documentation. Our infrastructure is optimized for concurrent user loads typical in training scenarios."
    },
    {
      question: "Do you offer technical support?",
      answer: "Yes! Every CloudAdda customer gets access to real engineers (not chatbots). Our average response time is under 47 minutes, and we provide 24/7 monitoring for critical environments."
    },
    {
      question: "Can I customize the lab environments?",
      answer: "Absolutely. We work with you to pre-configure environments with the exact tools, software, and configurations your curriculum requires. From VS Code to Docker to specialized industry tools."
    },
    {
      question: "What's your uptime guarantee?",
      answer: "We maintain a 99.98% uptime SLA across all our services. Our infrastructure is built on enterprise-grade hardware with automatic failover and redundancy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-8 bg-orange-500 text-white border-orange-500 text-lg font-medium px-6 py-3">
              <Sparkles className="w-5 h-5 mr-2" />
              Simple. Scalable. Human.
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="text-orange-500">Infrastructure</span>
              <br />
              <span className="text-blue-600">That Just</span>
              <br />
              <span className="text-gray-900">Works</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
              No more wrestling with cloud platforms, hunting for support, or drowning in complexity.
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
              CloudAdda gives you training labs, cloud desktops, and VPS that actually work — 
              backed by real engineers who understand your business, not just your billing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-orange-300 text-orange-600 hover:bg-orange-50">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.98%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">47min</div>
                <div className="text-gray-600">Avg Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Company Logos Marquee */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200/50 py-6 overflow-hidden">
          <div className="flex animate-marquee-fast">
            <div className="flex items-center space-x-12 mr-12">
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Microsoft</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Amazon</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Google</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">IBM</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Oracle</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Salesforce</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Adobe</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Intel</span>
              </div>
            </div>
            <div className="flex items-center space-x-12 mr-12">
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Microsoft</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Amazon</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Google</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">IBM</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Oracle</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Salesforce</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Adobe</span>
              </div>
              <div className="flex items-center justify-center w-32 h-16 bg-gray-100 rounded-lg">
                <span className="text-gray-500 font-semibold">Intel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Infrastructure that scales with your ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Labs Card */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Training Labs</CardTitle>
                <CardDescription className="text-gray-600">
                  Hands-on training environments for any tech stack
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    Instant provisioning
                  </li>
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    Custom configurations
                  </li>
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    Real-time monitoring
                  </li>
                </ul>
                <Link to="/training-labs">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    Explore Labs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Cloud Desktops Card */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-10 h-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Cloud Desktops</CardTitle>
                <CardDescription className="text-gray-600">
                  Secure, high-performance desktops in the cloud
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    Access from anywhere
                  </li>
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    Centralized management
                  </li>
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    Enhanced security
                  </li>
                </ul>
                <Link to="/cloud-desktops">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                    Launch Desktop
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* VPS Hosting Card */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="w-10 h-10 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">VPS Hosting</CardTitle>
                <CardDescription className="text-gray-600">
                  Powerful virtual servers with full root access
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    AMD EPYC processors
                  </li>
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    NVMe storage
                  </li>
                  <li>
                    <CheckCircle className="inline-block w-4 h-4 mr-2 text-green-500 align-middle" />
                    Global locations
                  </li>
                </ul>
                <Link to="/vps">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">
              Why customers choose CloudAdda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Instant Deployment</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Get your infrastructure up and running in minutes, not hours.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Enterprise Security</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Protect your data with advanced security features and compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Dedicated Support</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Get help from real engineers, not just documentation.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 4 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Scalable Resources</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Easily scale your infrastructure to meet growing demands.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 5 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl">Custom Solutions</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Tailor your infrastructure to your exact specifications.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 6 */}
            <Card className="hover:shadow-lg transition-shadow border border-gray-200">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">Cost-Effective</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Reduce your infrastructure costs without sacrificing performance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real users
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <Quote className="text-gray-400 mb-4 w-6 h-6" />
                <CardDescription className="text-gray-700 mb-4 italic">
                  "CloudAdda has transformed our training programs. The ease of
                  deployment and dedicated support are unmatched."
                </CardDescription>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                    AS
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Alice Smith
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Training Director, Tech Solutions Inc.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <Quote className="text-gray-400 mb-4 w-6 h-6" />
                <CardDescription className="text-gray-700 mb-4 italic">
                  "The cloud desktops are incredibly fast and secure. Our team
                  can work from anywhere without any performance issues."
                </CardDescription>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-semibold">
                    BJ
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      Bob Johnson
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      CTO, Global Innovations Ltd.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about CloudAdda
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="border border-gray-200 rounded-lg">
                <CardHeader className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">
                    {item.question}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFaq(index)}
                  >
                    {openFaq === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </Button>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="text-gray-700">
                    {item.answer}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of training companies and tech teams who trust
            CloudAdda for their infrastructure needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Book a Demo
              <Calendar className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png"
                  alt="CloudAdda Logo"
                  className="h-8 w-auto"
                />
                <span className="font-bold text-xl">CloudAdda</span>
              </Link>
              <p className="text-gray-400">
                Simple. Scalable. Human. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/training-labs" className="hover:text-white">
                    Training Labs
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-desktops" className="hover:text-white">
                    Cloud Desktops
                  </Link>
                </li>
                <li>
                  <Link to="/vps" className="hover:text-white">
                    VPS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/trainer-adda" className="hover:text-white">
                    Trainer Adda
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="hover:text-white">
                    Guides & Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/support" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            &copy; 2024 CloudAdda. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
