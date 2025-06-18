import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Users, Zap, Shield, Target, Globe, Award, TrendingUp, Clock, Server, Monitor, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-orange-50 to-purple-50 relative overflow-hidden">
        {/* ... keep existing code (hero section content) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-block mb-8">
                <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200 text-sm font-medium px-4 py-2 animate-pulse">
                  <Zap className="w-4 h-4 mr-2" />
                  Born in India, Built for the World
                </Badge>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                <span className="text-orange-600">Simple.</span>
                <br />
                <span className="text-purple-600">Scalable.</span>
                <br />
                <span className="text-gray-900">Human.</span>
              </h1>
              <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                <div className="text-2xl font-bold text-foreground">Infrastructure that just works.</div>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                CloudAdda delivers lightning-fast cloud infrastructure that scales with your ambitions. 
                From training labs to virtual desktops to enterprise servers—we handle the complexity 
                so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 group">
                  <Zap className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 group">
                  <Users className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <img 
                  src="/lovable-uploads/69230053-96f2-4f6a-ad77-9419979d6f8e.png" 
                  alt="Cloud infrastructure visualization" 
                  className="w-full h-auto max-w-lg object-contain mx-auto rounded-3xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... keep existing code (rest of the page content) */}
      {/* Three Pillars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why CloudAdda?</h2>
            <p className="text-xl text-muted-foreground">Three core principles that set us apart</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Shield,
                title: "Simple",
                description: "No PhD required. Our intuitive platform lets you deploy enterprise-grade infrastructure in minutes, not months.",
                features: ["One-click deployments", "Intuitive dashboard", "Zero configuration needed", "Smart defaults that just work"]
              },
              {
                icon: TrendingUp,
                title: "Scalable",
                description: "From startup MVP to enterprise beast. Scale seamlessly without breaking a sweat (or your budget).",
                features: ["Auto-scaling infrastructure", "Pay-as-you-grow pricing", "Global data centers", "Enterprise-grade reliability"]
              },
              {
                icon: Users,
                title: "Human",
                description: "Real engineers, real support, real solutions. Because sometimes you need to talk to a human who actually gets it.",
                features: ["24/7 human support", "Expert consultations", "Dedicated success managers", "Community-driven development"]
              }
            ].map((pillar, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange-200">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-6 transition-transform duration-300">
                    <pillar.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold mb-4">{pillar.title}</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Built for Every Use Case</h2>
            <p className="text-xl text-muted-foreground">From training labs to enterprise workloads—we've got you covered</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Training Labs",
                description: "Custom environments for educational institutions and corporate training programs",
                features: ["Multi-user access", "Pre-configured environments", "Usage analytics", "24/7 support"],
                color: "from-blue-500 to-blue-600",
                link: "/training-labs"
              },
              {
                icon: Monitor,
                title: "Cloud Desktops",
                description: "Virtual desktop infrastructure that works from anywhere, anytime",
                features: ["Windows & Linux", "High performance", "Secure access", "Team collaboration"],
                color: "from-purple-500 to-purple-600",
                link: "/cloud-desktops"
              },
              {
                icon: Server,
                title: "VPS Hosting",
                description: "High-performance virtual private servers for your applications",
                features: ["SSD storage", "Full root access", "Scalable resources", "99.9% uptime"],
                color: "from-green-500 to-green-600",
                link: "/vps"
              }
            ].map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{solution.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={solution.link}>
                    <Button className="w-full group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "< 60s", label: "Average Deploy Time" },
              { value: "24/7", label: "Human Support" },
              { value: "10+", label: "Global Data Centers" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold mb-4">{stat.value}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-foreground mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands of developers and companies who trust CloudAdda for their infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Clock className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-border py-16">
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
                <li><Link to="/cloud-desktops" className="hover:text-foreground transition-colors">Cloud Desktops</Link></li>
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

export default Index;
