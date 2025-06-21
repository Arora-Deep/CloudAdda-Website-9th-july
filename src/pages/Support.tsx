import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Phone, Mail, Clock, CheckCircle, Shield, Zap, Users, Headphones, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
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
                          <Link to="/cloud-desktops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
              <Link to="/support" className="text-orange-500 font-medium">Support</Link>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-sm font-medium px-4 py-2">
            <Headphones className="w-4 h-4 mr-2" />
            24/7 Support Ready
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-gray-900">
            Need Help?
            <br />
            <span className="text-blue-600">We've Got You.</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-blue-600"></div>
            <Shield className="w-6 h-6 text-orange-500" />
            <div className="w-12 h-px bg-orange-600"></div>
          </div>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Our support team is made of real engineers, not bots.
            <br />
            Whether it's a lab glitch, a desktop issue, or a billing question — we're here for you 24/7.
          </p>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
              <CardTitle className="text-3xl font-bold text-white">Submit a Support Request</CardTitle>
              <p className="text-blue-100 mt-2">We're here to help you succeed</p>
            </div>
            <CardContent className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name *</label>
                  <Input placeholder="Your full name" className="border-gray-200 focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Work Email *</label>
                  <Input type="email" placeholder="you@company.com" className="border-gray-200 focus:border-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number</label>
                  <Input placeholder="+91-XXXXX-XXXXX" className="border-gray-200 focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Company Name / Org Name</label>
                  <Input placeholder="Your organization" className="border-gray-200 focus:border-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">What can we help you with?</label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lab-issue">Issue with Lab Environment</SelectItem>
                      <SelectItem value="desktop-problem">Cloud Desktop Problem</SelectItem>
                      <SelectItem value="vps-performance">VPS Performance/Access</SelectItem>
                      <SelectItem value="billing">Billing/Invoice Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">Priority Level</label>
                  <Select>
                    <SelectTrigger className="border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low (Not urgent)</SelectItem>
                      <SelectItem value="medium">Medium (Needs resolution soon)</SelectItem>
                      <SelectItem value="high">High (Training/live session impacted)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Description *</label>
                <Textarea 
                  rows={6} 
                  placeholder="Please describe the issue in as much detail as possible. Screenshots or error messages help a lot." 
                  className="border-gray-200 focus:border-blue-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full py-4 text-lg font-semibold">
                Create Support Ticket
              </Button>
              <p className="text-center text-sm text-gray-500 italic">
                "Tried turning it off and on? Good. Now tell us what's really going on."
              </p>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-center text-blue-800 text-lg">
                  💬 We usually respond within 2 hours. For critical issues during a live session, call us directly at <strong>+91-98765-43210</strong>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Commitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What You Can Expect</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-white shadow-lg border-0 text-center rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl text-gray-900">Fast Human Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  You'll never deal with a chatbot. All tickets go directly to our infrastructure support engineers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 text-center rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl text-gray-900">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  You'll get clear updates, not vague excuses. If something's wrong, we'll tell you — and fix it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 text-center rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl text-gray-900">Reliability First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our team monitors issues proactively. Many times, we're already fixing things before you even ask.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Existing Tickets */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Need to Check Existing Tickets?</h2>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-10 border border-gray-200">
            <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              You can check your ticket status or reply to an existing ticket via the email thread we sent after submission.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Still stuck? Email us directly at <strong>support@cloudadda.com</strong> or call <strong>+91-98765-43210</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </Button>
              <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 rounded-full px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </Button>
            </div>
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

export default Support;
