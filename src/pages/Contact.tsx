import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Mail, Phone, Clock, Send, MessageCircle, CheckCircle, Heart, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    offering: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xnnvyyek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          offering: '',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
    setIsSubmitting(false);
  };
  return <div className="min-h-screen bg-white">
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
              <Link to="/virtual-training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Solutions</Link>
              <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-orange-500 font-medium">Contact</Link>
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
                    <a href="https://trainer-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                      Trainer Log In
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://trainee-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
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

      {/* Hero + Form Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Form */}
            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden h-fit order-2 lg:order-1">
              <div className="bg-gradient-to-r from-purple-600 to-orange-600 p-8">
                <CardTitle className="text-3xl font-bold text-white text-center">Talk to Us</CardTitle>
              </div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input id="name" type="text" required value={formData.name} onChange={e => handleInputChange('name', e.target.value)} className="w-full" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" required value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className="w-full" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} className="w-full" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input id="company" type="text" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} className="w-full" placeholder="Your company" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="offering" className="block text-sm font-medium text-gray-700 mb-2">
                      What do you need help with? *
                    </label>
                    <Select onValueChange={value => handleInputChange('offering', value)} required>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an offering" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="training-labs">Virtual Training Labs</SelectItem>
                        <SelectItem value="custom-solution">Custom Solution</SelectItem>
                        <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea id="message" required value={formData.message} onChange={e => handleInputChange('message', e.target.value)} className="w-full min-h-[120px]" placeholder="Tell us about your project or requirements..." />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
                
                <p className="text-center text-sm text-gray-500 italic mt-6">
                  🧃 No spam. No cold calls. Just genuinely helpful humans.
                </p>
              </CardContent>
            </Card>

            {/* Right Side - Hero Content */}
            <div className="space-y-8 order-1 lg:order-2 lg:sticky lg:top-28">
              <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Let's Connect
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-gray-900">
                Ready to Transform
                <br />
                <span className="text-orange-600">Your Training?</span>
              </h1>
              <p className="text-xl text-gray-600 font-light">
                We're real humans. We love what we do. We reply fast.
              </p>
              <p className="text-lg text-gray-500">
                Questions, quotes, confusion — throw it all at us.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Here's What Happens Next:</h3>
                <div className="flex items-start space-x-3 p-3 bg-white/80 rounded-xl border border-purple-100">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">We'll understand what you're trying to achieve — no jargon needed.</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/80 rounded-xl border border-orange-100">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">You'll get actionable advice, not a sales pitch.</p>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/80 rounded-xl border border-purple-100">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">If needed, we'll set up a quick call or demo.</p>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-purple-600 to-orange-600 rounded-2xl text-white">
                <p className="text-base font-medium leading-relaxed">
                  Whether it's a training lab for 300 students or a custom solution for your team — we've got you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Info and Bonus Section - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-50 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-purple-600" />
                  Prefer Email or Phone?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Email</div>
                    <div className="text-gray-600 text-sm">support@cloudadda.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Phone</div>
                    <div className="text-gray-600 text-sm">+91 080-69459494</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Availability</div>
                    <div className="text-gray-600 text-sm">9 AM – 9 PM IST</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-3 text-xl">Bonus:</h3>
              <p className="text-blue-800 text-lg">We've been known to solve queries embarrassingly fast. Try us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement Banner */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Not Sure What to Say?</h2>
          <p className="text-xl text-gray-300 mb-12">Just tell us what you're trying to do —</p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white text-lg italic">"Run a hackathon for 500 people."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white text-lg italic">"Give my team better desktops."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white text-lg italic">"Move away from a broken cloud setup."</p>
            </div>
          </div>
          <p className="text-lg text-gray-300">We'll take it from there.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                
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
    </div>;
};
export default Contact;