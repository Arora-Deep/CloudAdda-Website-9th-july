
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Code, Server, Database, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "CloudAdda's support team provides immediate solutions, helping with difficult labs others can't complete. The platform has streamlined our workflow, enhancing productivity with seamless cloud collaboration. Its virtual training labs offer an intuitive interface, clear instructions, and a well-organized layout, making the learning process effective. I wholeheartedly recommend CloudAdda for its user-friendly interface, comprehensive content, and hands-on exercises.",
      author: "Vigneshwaran",
      title: "IT Infrastructure Manager, Mazenet Solution Pvt Ltd"
    },
    {
      text: "CloudAdda's labs, used by my team of 100 trainees for IT Infra training, were supported by an efficient team that quickly resolved minor issues professionally. The seamless, interruption-free experience ensured high-quality learning. The user-friendly interface and comprehensive batch management were extremely useful. I strongly recommend CloudAdda for its effective virtual labs and excellent support team.",
      author: "Abdul Raouf",
      title: "IT Trainer & Consultant"
    },
    {
      text: "CloudAdda's exceptional Virtual Lab support, with prompt and effective assistance, ensures smooth operation and success. Its unmatched customer support and advanced features enhance the learning experience, setting it apart. The platform's reliability, accessibility, and seamless integration streamline processes, fostering efficiency. With an intuitive interface and excellent support, CloudAdda is ideal for effective training. Highly recommended for its robust features and user-friendly design.",
      author: "Gunjan Arora",
      title: "DELIVERY MANAGER- LEARNING SERVICES, NIIT - StackRoute"
    }
  ];

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CA</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CloudAdda</span>
              </Link>
            </div>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/cloud-desktops"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Cloud Desktops
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Virtual desktops that feel local
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <NavigationMenuLink asChild>
                        <Link to="/training-labs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Training Labs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Hands-on cloud training environments
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/vps" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">VPS</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Scalable virtual private servers
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/pricing" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Pricing
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent">
                      Log In
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-2 p-2 w-48">
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Trainer Login</div>
                          </a>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <a
                            href="#"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Trainee Login</div>
                          </a>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link to="/contact">
                <Button className="rounded-full">Start Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  🚀 Trusted by 10,000+ developers worldwide
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Your <span className="text-orange-500">Cloud Infrastructure</span> Simplified
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  From virtual desktops to training labs - we handle the complexity so you can focus on what matters most.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  View Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No setup required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  24/7 support
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Cloud Desktop</h3>
                    <Badge className="bg-green-100 text-green-700">Online</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Development Environment</p>
                        <p className="text-sm text-gray-500">VS Code, Docker, Git</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Server className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Training Lab</p>
                        <p className="text-sm text-gray-500">Kubernetes, AWS, Azure</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">Database Server</p>
                        <p className="text-sm text-gray-500">PostgreSQL, MongoDB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CloudAdda Handles Your Infra Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">CloudAdda Handles Your Infra</h2>
            <p className="text-xl text-gray-600">Choose the solution that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cloud Desktops</h3>
                <p className="text-gray-600 mb-6">
                  Get a fully configured virtual desktop in the cloud. Access your development environment from anywhere.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pre-installed development tools
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    High-performance computing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 availability
                  </li>
                </ul>
                <Link to="/cloud-desktops">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Training Labs</h3>
                <p className="text-gray-600 mb-6">
                  Hands-on cloud training environments for teams. Perfect for learning AWS, Azure, Kubernetes, and more.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Pre-configured scenarios
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Multi-user support
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Progress tracking
                  </li>
                </ul>
                <Link to="/training-labs">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">VPS Hosting</h3>
                <p className="text-gray-600 mb-6">
                  Reliable virtual private servers with full root access. Scale your applications with confidence.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Full root access
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    SSD storage
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    99.9% uptime
                  </li>
                </ul>
                <Link to="/vps">
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Teams Choose CloudAdda */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Teams Choose CloudAdda</h2>
            <p className="text-xl text-gray-600">Built for developers, loved by teams</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Deploy in Minutes</h3>
              <p className="text-gray-600">Get your infrastructure up and running in minutes, not hours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security with SOC 2 compliance and data encryption.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">High-performance infrastructure that scales with your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of developers and teams worldwide</p>
          </div>
          
          <div className="relative">
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-12">
                <div className="flex items-center space-x-1 mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 text-center italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600 mt-1">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Competition is Already Moving */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Your Competition is Already Moving</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't get left behind. Join thousands of teams already using CloudAdda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Your Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-blue-600">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CA</span>
                </div>
                <span className="text-xl font-bold">CloudAdda</span>
              </div>
              <p className="text-gray-400">
                Simplifying cloud infrastructure for developers and teams worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/cloud-desktops" className="hover:text-white">Cloud Desktops</Link></li>
                <li><Link to="/training-labs" className="hover:text-white">Training Labs</Link></li>
                <li><Link to="/vps" className="hover:text-white">VPS Hosting</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CloudAdda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
