
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  Search, 
  BookOpen, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle, 
  Heart, 
  Headphones,
  MapPin,
  Send,
  Star,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "",
    category: "",
    message: ""
  });
  const { toast } = useToast();

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Ticket Created! 🎉",
      description: "We'll get back to you within 2 hours. Ticket ID: #SUP-2024-001",
    });
    setTicketForm({
      name: "",
      email: "",
      subject: "",
      priority: "",
      category: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8 animate-bounce">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Support That Actually Cares</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-orange-500">Help</span>{" "}
            <span className="text-foreground">When You</span>{" "}
            <span className="text-purple-600">Need It</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Real engineers, lightning-fast responses, and solutions that actually work. 
            Because your success is our mission. 🚀
          </p>
          
          <div className="flex justify-center mb-16">
            <div className="relative max-w-lg w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
              <Input
                placeholder="Search our knowledge base..."
                className="pl-14 py-6 text-lg rounded-2xl border-2 border-primary/20 focus:border-primary shadow-lg"
              />
              <Button className="absolute right-2 top-2 bottom-2 rounded-xl">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, stat: "< 2hrs", label: "Average Response", color: "text-blue-500" },
              { icon: Users, stat: "24/7", label: "Human Engineers", color: "text-green-500" },
              { icon: CheckCircle, stat: "99.9%", label: "Issue Resolution", color: "text-purple-500" }
            ].map((item, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 text-foreground">{item.stat}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Headphones className="w-4 h-4 mr-2" />
              Multiple Ways to Connect
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your <span className="text-primary">Support Channel</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you prefer instant chat, detailed emails, or emergency hotlines - we've got you covered
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Instant help for quick questions",
                availability: "24/7 Available",
                responseTime: "< 5 minutes",
                bestFor: "Quick questions, account issues",
                badge: "Fastest",
                color: "from-blue-500/10 to-blue-600/10",
                iconColor: "text-blue-500"
              },
              {
                icon: Phone,
                title: "Emergency Hotline",
                description: "Critical infrastructure issues",
                availability: "24/7 Emergency",
                responseTime: "Immediate",
                bestFor: "Production outages, critical issues",
                badge: "Critical",
                color: "from-red-500/10 to-red-600/10",
                iconColor: "text-red-500"
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Detailed technical assistance",
                availability: "Business Hours",
                responseTime: "< 2 hours",
                bestFor: "Complex configurations, integrations",
                badge: "Detailed",
                color: "from-green-500/10 to-green-600/10",
                iconColor: "text-green-500"
              },
              {
                icon: MapPin,
                title: "Office Visit",
                description: "In-person consultation",
                availability: "By Appointment",
                responseTime: "Same Day",
                bestFor: "Enterprise setups, training",
                badge: "Premium",
                color: "from-purple-500/10 to-purple-600/10",
                iconColor: "text-purple-500"
              }
            ].map((channel, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <channel.icon className={`w-7 h-7 ${channel.iconColor}`} />
                    </div>
                    <Badge variant="secondary">{channel.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{channel.title}</CardTitle>
                  <CardDescription className="text-base">{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Availability:</span>
                      <span className="text-sm font-semibold">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Response:</span>
                      <span className="text-sm font-semibold">{channel.responseTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Best for:</span>
                      <span className="text-sm font-semibold text-right">{channel.bestFor}</span>
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Contact Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">📍 Our Office</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-2">
                  <p className="font-semibold text-lg">CloudAdda Technologies</p>
                  <p className="text-muted-foreground">
                    123 Tech Boulevard, Suite 456<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <Phone className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 80 1234 5678</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">support@cloudadda.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-purple-500/5">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-4">⏰ Support Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Emergency Support:</span>
                    <span className="text-green-600 font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Live Chat:</span>
                    <span className="text-green-600 font-semibold">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email Support:</span>
                    <span className="text-blue-600 font-semibold">Mon-Fri 9AM-6PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Phone Support:</span>
                    <span className="text-blue-600 font-semibold">Mon-Fri 9AM-6PM IST</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-green-600">All Systems Operational</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ticket Creation Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Send className="w-4 h-4 mr-2" />
              Create Support Ticket
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Need <span className="text-primary">Technical Help?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Create a detailed support ticket and our engineers will get back to you within 2 hours
            </p>
          </div>

          <Card className="p-8 shadow-2xl border-2 border-primary/10">
            <form onSubmit={handleTicketSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Full Name *</label>
                  <Input
                    placeholder="Your full name"
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Subject *</label>
                <Input
                  placeholder="Brief description of your issue"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  required
                  className="h-12"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Priority Level *</label>
                  <Select value={ticketForm.priority} onValueChange={(value) => setTicketForm({...ticketForm, priority: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">🟢 Low - General inquiry</SelectItem>
                      <SelectItem value="medium">🟡 Medium - Important issue</SelectItem>
                      <SelectItem value="high">🟠 High - Urgent problem</SelectItem>
                      <SelectItem value="critical">🔴 Critical - Production down</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Category *</label>
                  <Select value={ticketForm.category} onValueChange={(value) => setTicketForm({...ticketForm, category: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">🔧 Technical Support</SelectItem>
                      <SelectItem value="billing">💳 Billing & Account</SelectItem>
                      <SelectItem value="feature">✨ Feature Request</SelectItem>
                      <SelectItem value="bug">🐛 Bug Report</SelectItem>
                      <SelectItem value="other">📝 Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Detailed Description *</label>
                <Textarea
                  placeholder="Please provide as much detail as possible about your issue. Include steps to reproduce, error messages, screenshots, etc."
                  value={ticketForm.message}
                  onChange={(e) => setTicketForm({...ticketForm, message: e.target.value})}
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p>
                  <strong>Tip:</strong> The more details you provide, the faster we can resolve your issue. 
                  Include error messages, screenshots, and steps to reproduce the problem.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg">
                <Send className="w-5 h-5 mr-2" />
                Create Support Ticket
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quick <span className="text-primary">Answers</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find instant answers to the most common questions
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How quickly do you respond to support tickets?",
                answer: "We respond to all support tickets within 2 hours during business hours (Mon-Fri 9AM-6PM IST). For emergency issues, we have a 24/7 hotline with immediate response. Live chat is available 24/7 with responses typically within 5 minutes."
              },
              {
                question: "What's included in your support coverage?",
                answer: "Our support covers all aspects of our platform including setup assistance, troubleshooting, performance optimization, integration help, and best practices guidance. We also provide proactive monitoring and alerts for your infrastructure."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes! We have a dedicated emergency hotline for critical issues that's available 24/7 at +91 80 1234 5678. For non-emergency technical discussions, we can schedule phone calls during business hours."
              },
              {
                question: "Can you help with custom configurations and integrations?",
                answer: "Absolutely! Our engineering team specializes in custom setups and can help integrate CloudAdda with your existing tools and workflows. We also offer professional services for complex implementations."
              },
              {
                question: "Is there any additional cost for support?",
                answer: "Basic support is included with all our plans at no extra cost. Premium support with dedicated account managers and priority response is available for enterprise customers."
              },
              {
                question: "How can I check the status of my support ticket?",
                answer: "After creating a ticket, you'll receive a unique ticket ID via email. You can use this ID to track your ticket status through our support portal or by replying to the email thread."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border-2 border-border rounded-2xl px-6 data-[state=open]:border-primary/20">
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Self-Help Resources
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Knowledge <span className="text-primary">Base</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive resources and find answers instantly
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Documentation",
                description: "Comprehensive guides and API references",
                items: ["Getting Started Guide", "API Documentation", "Best Practices", "Troubleshooting"],
                color: "from-blue-500/10 to-blue-600/10",
                iconColor: "text-blue-500"
              },
              {
                icon: Users,
                title: "Community Forum",
                description: "Connect with other CloudAdda users",
                items: ["User Discussions", "Feature Requests", "Tips & Tricks", "Success Stories"],
                color: "from-green-500/10 to-green-600/10",
                iconColor: "text-green-500"
              },
              {
                icon: Zap,
                title: "Video Tutorials",
                description: "Step-by-step video guides",
                items: ["Setup Tutorials", "Advanced Features", "Integration Guides", "Webinar Recordings"],
                color: "from-purple-500/10 to-purple-600/10",
                iconColor: "text-purple-500"
              }
            ].map((resource, index) => (
              <Card key={index} className="h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className={`w-8 h-8 ${resource.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore {resource.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Promise */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Our Support Promise</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">What We Guarantee</h3>
              <ul className="space-y-4 text-left">
                {[
                  "Real engineers, not bots",
                  "Less than 2 hour response time SLA",
                  "24/7 emergency support hotline",
                  "Proactive monitoring and alerts",
                  "Dedicated account manager for enterprises"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-foreground flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>
              <p className="text-left text-lg leading-relaxed">
                Your success is our success. We don't just provide infrastructure—we become your trusted partner. 
                Every support interaction is an opportunity to help you achieve your goals faster and more efficiently.
              </p>
              <div className="mt-8 flex items-center justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-current text-yellow-400" />
                ))}
                <span className="ml-4 text-lg font-semibold">4.9/5 Customer Satisfaction</span>
              </div>
            </div>
          </div>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-14 px-8 text-lg">
            <Headphones className="w-6 h-6 mr-2" />
            Experience Our Support
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
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
                <li><Link to="/trainer-adda" className="hover:text-foreground transition-colors">Trainer Adda</Link></li>
                <li><Link to="/guides" className="hover:text-foreground transition-colors">Documentation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Support;
