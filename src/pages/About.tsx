
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Globe, Award, Heart, Zap, ArrowRight, Star, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Born in India 🇮🇳 Built for the World 🌍
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                We're Revolutionizing
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Cloud Infrastructure
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                CloudAdda started with a simple belief: infrastructure shouldn't be complicated. 
                We're on a mission to make powerful cloud solutions accessible to everyone, everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Heart className="w-5 h-5 mr-2" />
                  Join Our Mission
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Users className="w-5 h-5 mr-2" />
                  Meet the Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, number: "10K+", label: "Happy Users" },
                    { icon: Globe, number: "25+", label: "Countries" },
                    { icon: Zap, number: "99.9%", label: "Uptime" },
                    { icon: Award, number: "50+", label: "Awards" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold mb-1">{stat.number}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-medium">Our Story</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Frustration to Innovation
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
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
              <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2019</h3>
                  <p className="text-gray-600">CloudAdda was founded with a vision to simplify cloud infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture we're building
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "We constantly push boundaries to create solutions that don't just work—they delight.",
                color: "from-yellow-400 to-orange-500"
              },
              {
                icon: Heart,
                title: "Customer Obsession",
                description: "Every decision we make starts with one question: How does this help our customers succeed?",
                color: "from-pink-400 to-red-500"
              },
              {
                icon: Shield,
                title: "Trust & Transparency",
                description: "We build relationships on honesty, reliability, and clear communication. No hidden agendas.",
                color: "from-blue-400 to-purple-500"
              },
              {
                icon: Zap,
                title: "Speed & Simplicity",
                description: "Complex problems deserve simple solutions. We make powerful technology effortlessly easy.",
                color: "from-green-400 to-blue-500"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Born in India, built for the world. We create solutions that transcend borders and cultures.",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: Users,
                title: "Team Excellence",
                description: "We hire the best, trust them completely, and create an environment where they can do their life's best work.",
                color: "from-orange-400 to-red-500"
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Incredible Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.image}
                  </div>
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:opacity-90">
              <Users className="w-5 h-5 mr-2" />
              Join Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to Be Part of Our Story?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of companies already using CloudAdda to power their future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </Link>
              <p className="text-gray-400">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-white transition-colors">Virtual Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-white transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
