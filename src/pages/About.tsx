import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Users, Target, Heart, Shield, Globe, Zap, Lightbulb, Handshake, Eye, ChevronDown, GraduationCap, Headphones, MonitorPlay } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/virtual-training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Solutions</Link>
              <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" className="text-orange-500 font-medium">About Us</Link>
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
                  The Team Behind Your Training Labs
                </Badge>
              </div>
              <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
                We Make
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                  Training Labs
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Just Work.
                </span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-purple-600"></div>
                <div className="text-2xl font-bold text-foreground">Your Extended IT Arm for Training.</div>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                CloudAdda exists for one reason — so trainers can focus on teaching, not troubleshooting infrastructure. We manage the labs. You deliver the training.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white group">
                    <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Talk to Us
                  </Button>
                </Link>
                <Link to="/virtual-training-labs">
                  <Button size="lg" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative flex justify-center">
                <img src="/lovable-uploads/dc9c54ab-5975-48cf-93e2-b4f1f2327553.png" alt="CloudAdda Team" className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gray-950 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
            We don't do trainings.
            <br />
            <span className="text-orange-400">We support them.</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto font-light text-gray-300">
            We are your extended IT arm — here to help and support your training, not compete with you like other virtual lab providers. From provisioning to post-session cleanup, we handle it all so you never have to worry about labs again.
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <GraduationCap className="w-4 h-4 mr-2" />
              Trusted by Training Teams Everywhere
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">The Numbers Tell Our Story</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "1,000+", label: "Trainers Supported", color: "purple" },
              { icon: MonitorPlay, number: "50,000+", label: "Lab Sessions Delivered", color: "orange" },
              { icon: Zap, number: "99.9%", label: "Uptime Guarantee", color: "purple" },
              { icon: Headphones, number: "24/7", label: "Live Engineer Support", color: "orange" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 ${stat.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'}`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-black mb-2 text-foreground">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-8 bg-orange-100 text-orange-800 border-orange-200">
                <Lightbulb className="w-4 h-4 mr-2" />
                Our Origin Story
              </Badge>
              <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">
                From <span className="text-orange-600">"Why do labs always break?"</span>
                <br />
                to <span className="text-purple-600">"They just work now."</span>
              </h2>
              <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Our founders saw the same problem over and over — trainers wasting hours fighting unstable lab environments, 
                  dealing with slow provisioning, and getting zero support when things went wrong mid-session.
                </p>
                <div className="bg-white p-8 rounded-2xl border-l-4 border-purple-500 shadow-sm">
                  <p className="text-foreground font-bold text-2xl mb-4">
                    "What if trainers never had to think about infrastructure again?"
                  </p>
                  <p className="text-muted-foreground italic">That question became CloudAdda.</p>
                </div>
                <p>
                  Today, we power managed virtual training labs for IT trainers and corporate training teams 
                  across India and beyond — handling everything from provisioning to post-session cleanup.
                </p>
                <p className="font-bold text-foreground text-xl">We don't just provide labs. We run them for you.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-12 shadow-lg border border-orange-100">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-6xl font-black text-purple-600 mb-2">2019</div>
                    <div className="text-xl font-semibold text-foreground">CloudAdda Founded</div>
                    <div className="w-full h-2 bg-purple-500 rounded-full mt-4"></div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-6xl font-black text-orange-600 mb-2">2025</div>
                    <div className="text-xl font-semibold text-foreground">India's Managed Training Lab Platform</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">What Drives Us</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These values shape how we build, support, and partner with every training team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Partnership, Not Just a Platform",
                description: "We don't hand you a portal and say 'good luck.' We work alongside your team as your extended IT arm.",
                color: "purple",
              },
              {
                icon: Heart,
                title: "Obsessed with Trainer Success",
                description: "Every feature we build, every process we design, is to make trainers' lives easier. Your session success is our metric.",
                color: "orange",
              },
              {
                icon: Shield,
                title: "Reliability You Can Count On",
                description: "99.9% uptime isn't a marketing number — it's a promise. Labs that crash mid-session are unacceptable to us.",
                color: "purple",
              },
              {
                icon: Zap,
                title: "Speed Without Compromise",
                description: "Labs provisioned in minutes, not hours. Support that responds instantly, not after a ticket queue.",
                color: "orange",
              },
              {
                icon: Globe,
                title: "Built in India, Trusted Everywhere",
                description: "Proudly Indian, serving training teams globally. Local understanding with world-class infrastructure.",
                color: "purple",
              },
              {
                icon: Users,
                title: "Real Engineers, Real Support",
                description: "No ticket ping-pong. Our engineers understand training workflows and jump in when things need fixing — even mid-class.",
                color: "orange",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 ${value.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'}`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-purple-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -translate-y-32 translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 rounded-full translate-y-24 -translate-x-24 opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-white/20 text-white border-white/30">
            <Handshake className="w-4 h-4 mr-2" />
            Let's Work Together
          </Badge>
          <h2 className="text-5xl font-bold mb-8">Ready to Stop Fighting Lab Infrastructure?</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            Whether you're a solo trainer running weekend batches or an enterprise team delivering 50+ sessions a month — we'll make your labs run flawlessly.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white group">
                <Heart className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform" />
                Get Started
              </Button>
            </Link>
            <Link to="/virtual-training-labs">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Explore the Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:rotate-12 transition-transform duration-500">
            <Eye className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-8">Our Vision</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-2xl text-muted-foreground leading-relaxed font-light">
            To become the most trusted managed training lab platform — where every trainer, everywhere, can deliver flawless hands-on sessions without ever worrying about infrastructure.
          </p>
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
                Managed Virtual Training Labs. We handle the infrastructure, you deliver the training.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/virtual-training-labs" className="hover:text-foreground transition-colors">Virtual Training Labs</Link></li>
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
                <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
