import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Mail, Phone, Clock, Send, MessageCircle, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
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
              <Link to="/contact" className="text-orange-500 font-medium">Contact</Link>
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
      <section className="py-20 bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's Connect
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-gray-900">
            Let's Talk Cloud.
            <br />
            <span className="text-orange-600">Or Just Say Hi.</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-purple-600"></div>
            <Heart className="w-6 h-6 text-orange-500" />
            <div className="w-12 h-px bg-orange-600"></div>
          </div>
          <p className="text-2xl text-gray-600 mb-4 max-w-2xl mx-auto font-light">
            We're real humans. We love infrastructure. We reply fast.
          </p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Questions, quotes, confusion — throw it all at us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Side - Message & Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  Here's What Happens When You Reach Out:
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-medium">We'll understand what you're trying to achieve — no jargon needed.</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <CheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-medium">You'll get actionable advice, not a sales pitch.</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-medium">If needed, we'll set up a quick call or demo.</p>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <CheckCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700 font-medium">You'll walk away knowing exactly what your next step is.</p>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600 to-orange-600 rounded-2xl text-white">
                  <p className="text-lg font-medium leading-relaxed">
                    Whether it's a training lab for 300 students, virtual desktops for your remote team, or blazing-fast VPS — we've got you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="bg-white shadow-2xl border-0 rounded-3xl overflow-hidden h-fit">
              <div className="bg-gradient-to-r from-purple-600 to-orange-600 p-8">
                <CardTitle className="text-3xl font-bold text-white text-center">Talk to Us</CardTitle>
              </div>
              <CardContent className="p-8">
                {/* Formaloo Form Embed */}
                <div className="w-full">
                  <iframe
                    src="https://formaloo.net/contact-form"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    className="rounded-lg"
                    title="Contact Form"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 italic mt-4">
                  🧃 No spam. No cold calls. Just genuinely helpful humans.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info and Bonus Section - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
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
                    <div className="text-gray-600 text-sm">hello@cloudadda.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Phone</div>
                    <div className="text-gray-600 text-sm">+91-98765-43210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Availability</div>
                    <div className="text-gray-600 text-sm">Mon–Sat, 10 AM – 7 PM IST</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-3 text-xl">Bonus:</h3>
              <p className="text-blue-800 text-lg">We've been known to answer emails embarrassingly fast. Try us.</p>
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

export default Contact;
