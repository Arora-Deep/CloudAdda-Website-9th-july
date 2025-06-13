
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, Send, Users, Heart, ArrowRight, Play, CreditCard, MessageCircle, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
                Start the Conversation. <br />
                <span className="text-orange-500">We're All Ears.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're not some faceless SaaS company. We're people — friendly, fast, and ready to help you unlock the power of the cloud.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a startup exploring your first remote setup, an enterprise planning a migration, or just curious how it all works — we'd love to talk. No pressure. No sales fluff. Just straight answers and helpful guidance.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-100 to-purple-100 rounded-3xl flex items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <MessageCircle className="w-24 h-24 mx-auto mb-4 text-orange-500" />
                  <p className="text-sm">3D Illustration Space</p>
                  <p className="text-xs">Support team helping customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Let's Get You to the Right Team</h2>
            <p className="text-xl text-muted-foreground">We reply in under 24 hours — usually much faster.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Contact Form</h3>
                <p className="text-muted-foreground">Drop us a message and we'll get back to you quickly</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-foreground font-medium">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    className="mt-2 border-2 focus:border-orange-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">Work Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="mt-2 border-2 focus:border-orange-500 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2 border-2 focus:border-orange-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiryType" className="text-foreground font-medium">What can we help you with?</Label>
                  <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger className="mt-2 border-2 focus:border-orange-500 transition-colors">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="training-labs">I want to explore Training Labs</SelectItem>
                      <SelectItem value="cloud-desktops">I'm interested in Cloud Desktops (DaaS)</SelectItem>
                      <SelectItem value="vps">I'm looking for high-performance VPS</SelectItem>
                      <SelectItem value="custom-pricing">I need custom pricing for a project</SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="mt-2 border-2 focus:border-orange-500 transition-colors"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Or Just Reach Out Directly</h3>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Sales & General Inquiries</h4>
                </div>
                <div className="space-y-4 ml-16">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span className="text-foreground">hello@cloudadda.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="text-foreground">+91-XXXXXXXXXX (Call or WhatsApp)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-foreground">Mon–Sat, 10 AM to 7 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Support</h4>
                </div>
                <div className="space-y-4 ml-16">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-foreground">support@cloudadda.in</span>
                  </div>
                  <p className="text-muted-foreground">Fast, human help — no ticket black hole.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human Support Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Human. Helpful. Here for You.</h2>
              <p className="text-xl text-muted-foreground mb-6">
                We believe support should feel like a team extension — not a hassle.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                So go ahead, ask us the big stuff or the small stuff.
              </p>
              <p className="text-lg text-foreground font-semibold">
                There's no such thing as a stupid question. Only slow support. And we don't do slow.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-100 to-orange-100 rounded-3xl flex items-center justify-center">
                <div className="text-muted-foreground text-center">
                  <Users className="w-24 h-24 mx-auto mb-4 text-purple-600" />
                  <p className="text-sm">3D Illustration Space</p>
                  <p className="text-xs">Diverse team helping customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Not Ready Yet?</h2>
            <p className="text-xl text-muted-foreground">No worries. You can:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Schedule a Demo Call</h3>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Watch the Product in Action</h3>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
                View Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-border/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Explore Our Pricing</h3>
              <Link to="/pricing">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
                  View Pricing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Proudly Built in India. Trusted Everywhere.</h3>
          <p className="text-lg text-muted-foreground">
            From Bangalore to Dubai, from solo devs to 500-seat enterprises — CloudAdda powers teams across Asia, the Middle East, and beyond.
          </p>
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
