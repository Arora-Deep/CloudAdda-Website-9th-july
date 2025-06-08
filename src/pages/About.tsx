
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Award, Heart, Zap, ArrowRight, Star, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6">
                Born in India 🇮🇳 Built for the World 🌍
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
                We're Revolutionizing
                <br />
                Cloud Infrastructure
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                CloudAdda started with a simple belief: infrastructure shouldn't be complicated. 
                We're on a mission to make powerful cloud solutions accessible to everyone, everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Join Our Mission
                </Button>
                <Button size="lg" variant="outline">
                  <Users className="w-5 h-5 mr-2" />
                  Meet the Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-lg p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, number: "10K+", label: "Happy Users" },
                    { icon: Globe, number: "25+", label: "Countries" },
                    { icon: Zap, number: "99.9%", label: "Uptime" },
                    { icon: Award, number: "50+", label: "Awards" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold mb-1 text-foreground">{stat.number}</div>
                      <div className="text-muted-foreground text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                From Frustration to Innovation
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  CloudAdda was born out of frustration. Our founders, experienced engineers from top tech companies, 
                  were tired of dealing with complex, overpriced cloud solutions that took weeks to set up.
                </p>
                <p>
                  "Why does infrastructure have to be so complicated?" This simple question sparked the creation of CloudAdda. 
                  We envisioned a world where spinning up training labs, virtual desktops, and VPS instances was as easy as 
                  ordering your favorite coffee.
                </p>
                <p>
                  Today, CloudAdda powers thousands of businesses across the globe, from startups in Bangalore to 
                  enterprises in Silicon Valley. We've made infrastructure simple, accessible, and affordable for everyone.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-lg p-8 h-96 flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">2019</h3>
                  <p className="text-muted-foreground">CloudAdda was founded with a vision to simplify cloud infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture we're building
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "We constantly push boundaries to create solutions that don't just work—they delight."
              },
              {
                icon: Heart,
                title: "Customer Obsession",
                description: "Every decision we make starts with one question: How does this help our customers succeed?"
              },
              {
                icon: Shield,
                title: "Trust & Transparency",
                description: "We build relationships on honesty, reliability, and clear communication. No hidden agendas."
              },
              {
                icon: Zap,
                title: "Speed & Simplicity",
                description: "Complex problems deserve simple solutions. We make powerful technology effortlessly easy."
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Born in India, built for the world. We create solutions that transcend borders and cultures."
              },
              {
                icon: Users,
                title: "Team Excellence",
                description: "We hire the best, trust them completely, and create an environment where they can do their life's best work."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Incredible Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate minds behind CloudAdda's success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO & Co-Founder",
                bio: "Former AWS Principal Engineer with 15+ years building scalable infrastructure",
                image: "👨‍💼"
              },
              {
                name: "Priya Sharma",
                role: "CTO & Co-Founder",
                bio: "Ex-Google Cloud architect passionate about making complex tech simple",
                image: "👩‍💻"
              },
              {
                name: "Amit Patel",
                role: "Head of Product",
                bio: "Design thinking expert focused on creating delightful user experiences",
                image: "👨‍🎨"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.image}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">
              <Users className="w-5 h-5 mr-2" />
              Join Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary-foreground/10 rounded-lg flex items-center justify-center mx-auto mb-8">
            <Star className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join thousands of companies already using CloudAdda to power their future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Get in Touch
            </Button>
          </div>
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

export default About;
