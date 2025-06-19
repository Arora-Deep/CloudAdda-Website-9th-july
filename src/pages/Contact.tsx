import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Users, 
  Target,
  Building,
  Briefcase,
  GraduationCap,
  Server,
  CheckCircle,
  Heart,
  Globe,
  ArrowRight,
  Calendar,
  Coffee,
  Headphones,
  BookOpen,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 2 hours.",
    });
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
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Always Here for You
                </Badge>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                <span className="text-purple-600">Let's</span>
                <br />
                <span className="text-gray-900">Build</span>
                <br />
                <span className="text-orange-600">Together</span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-purple-600"></div>
                <div className="text-2xl font-bold text-foreground">Real humans. Real solutions. Real fast.</div>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Got questions? Need a custom solution? Or just want to say hello? 
                We're real humans who love talking about cloud infrastructure and helping you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                  <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start a Conversation
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 group">
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Schedule a Call
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="w-80 h-80 bg-purple-50 rounded-3xl border border-purple-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-8 right-8 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                      <MessageSquare className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">3D Illustration Space</div>
                    <div className="text-xs text-muted-foreground/60">Customer Support Visual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Promise Section */}
      <section className="py-20 bg-orange-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-8">Our Promise to You</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Clock,
                title: "2 Hour Response",
                description: "We don't do 'we'll get back to you.' We actually get back to you. Within 2 hours.",
                color: "purple",
                delay: "0ms"
              },
              {
                icon: Users,
                title: "Real Engineers",
                description: "Talk directly to the people who build our platform. No scripts, no confusion.",
                color: "orange", 
                delay: "100ms"
              },
              {
                icon: Heart,
                title: "We Actually Care",
                description: "Your success is our success. We're invested in making your cloud journey smooth.",
                color: "purple",
                delay: "200ms"
              }
            ].map((promise, index) => (
              <div 
                key={index} 
                className="transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: promise.delay }}
              >
                <Card className="text-center border-none shadow-lg hover:shadow-xl h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 ${
                      promise.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                    }`}>
                      <promise.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{promise.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed text-base">
                      {promise.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods with Staggered Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-8">Multiple Ways to Reach Us</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Choose whatever works best for you. We're available through all these channels.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    subtitle: "hello@cloudadda.com",
                    description: "We typically respond within 2 hours",
                    color: "purple"
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    subtitle: "+1 (555) 123-4567",
                    description: "Monday to Friday, 9 AM - 6 PM EST",
                    color: "orange"
                  },
                  {
                    icon: Headphones,
                    title: "Live Support",
                    subtitle: "24/7 chat support",
                    description: "Available in your dashboard",
                    color: "purple"
                  }
                ].map((method, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      method.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                    }`}>
                      <method.icon className={`w-6 h-6 ${
                        method.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                      <p className="text-muted-foreground font-medium">{method.subtitle}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="w-full h-96 bg-orange-50 rounded-3xl border border-orange-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-8 right-8 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center transform hover:rotate-6 transition-transform duration-300">
                      <Coffee className="w-12 h-12 text-white" />
                    </div>
                    <div className="text-sm text-muted-foreground">3D Illustration Space</div>
                    <div className="text-xs text-muted-foreground/60">Communication Methods Visual</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with Modern Design */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 2 hours. Promise.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto shadow-xl border-none">
            <CardContent className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-2" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Work Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="subject">How can we help?</Label>
                <select className="w-full p-3 border border-input rounded-md bg-background mt-2">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Enterprise Sales</option>
                  <option>Partnership</option>
                  <option>Migration Assistance</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  rows={5}
                  className="mt-2"
                />
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                Send Message
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Alternative Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Other Ways to Get Help</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Sometimes you just need to figure things out yourself. We get it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Documentation",
                description: "Comprehensive guides and API documentation to get you started quickly.",
                color: "purple",
                cta: "Browse Docs"
              },
              {
                icon: Users,
                title: "Community",
                description: "Join our Discord community and connect with other CloudAdda users.",
                color: "orange",
                cta: "Join Community"
              },
              {
                icon: Zap,
                title: "Status Page",
                description: "Real-time status updates and incident reports for all our services.",
                color: "purple",
                cta: "Check Status"
              }
            ].map((resource, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 ${
                    resource.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-base leading-relaxed">
                    {resource.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full group">
                    {resource.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/training-labs" className="hover:text-foreground transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-foreground transition-colors">Virtual Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-foreground transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/support" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
