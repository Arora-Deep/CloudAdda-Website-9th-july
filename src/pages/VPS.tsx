import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, DollarSign, Zap, Users, Target, Globe, Award, Calculator, Sparkles, TrendingUp, Shield, Server, Monitor, GraduationCap, Building, Cpu, HardDrive, Network, Clock, Eye, UserCheck, Play, Calendar, BookOpen, MessageCircle, AlertTriangle, Timer, ThumbsUp, Gauge, Laptop, Activity, Rocket, Brain, BarChart3, Lightbulb, FileCheck, Headphones, Code, Settings, Database } from "lucide-react";
import { Link } from "react-router-dom";

const VPS = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg font-medium px-6 py-3">
              <Server className="w-5 h-5 mr-2" />
              High-Performance VPS Solutions
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="text-blue-600">Virtual Private Servers</span>
              <br />
              for Every Need
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Experience the power and flexibility of our VPS hosting. Whether you're a developer, a business, or an individual, we have the perfect VPS solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-3 border-gray-300 hover:bg-gray-50">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tired of Shared Hosting Limitations?
            </h2>
            <p className="text-xl text-gray-600">
              Break free from the constraints of shared hosting and experience the freedom of a VPS.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Limited Resources",
                description: "Shared hosting often comes with limited CPU, RAM, and storage, impacting your website's performance.",
                icon: Cpu,
              },
              {
                title: "Security Risks",
                description: "With shared hosting, you're vulnerable to security breaches affecting other users on the same server.",
                icon: Shield,
              },
              {
                title: "Lack of Control",
                description: "Shared hosting provides limited control over server configurations and software installations.",
                icon: Settings,
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-4">
                    {React.createElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our VPS Solutions Offer
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of dedicated resources, enhanced security, and full control with our VPS hosting.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dedicated Resources",
                description: "Get guaranteed CPU, RAM, and storage resources for optimal performance.",
                icon: HardDrive,
              },
              {
                title: "Enhanced Security",
                description: "Isolate your environment from other users and protect your data with advanced security features.",
                icon: Shield,
              },
              {
                title: "Full Control",
                description: "Customize your server environment with root access and install any software you need.",
                icon: Settings,
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                    {React.createElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect VPS plan that fits your budget and requirements.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Basic VPS",
                price: "$19.99/month",
                features: ["1 vCPU", "2GB RAM", "50GB SSD Storage", "1TB Bandwidth"],
              },
              {
                title: "Standard VPS",
                price: "$39.99/month",
                features: ["2 vCPU", "4GB RAM", "100GB SSD Storage", "2TB Bandwidth"],
              },
              {
                title: "Premium VPS",
                price: "$59.99/month",
                features: ["4 vCPU", "8GB RAM", "200GB SSD Storage", "4TB Bandwidth"],
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4">
                    {item.features.map((feature, i) => (
                      <li key={i} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Read what our satisfied customers have to say about our VPS hosting services.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                name: "John Doe",
                testimonial: "CloudAdda's VPS hosting has been a game-changer for my business. The performance is excellent, and the support team is always there to help.",
              },
              {
                name: "Jane Smith",
                testimonial: "I've tried several VPS providers, but CloudAdda stands out with its reliable servers and affordable pricing. Highly recommended!",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent>
                  <p className="text-gray-600 italic mb-4">"{item.testimonial}"</p>
                  <div className="text-gray-900 font-semibold">- {item.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Experience the Power of VPS Hosting?
          </h2>
          <p className="text-xl mb-12">
            Get started with CloudAdda's VPS hosting today and take your website to the next level.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-3">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </div>
              <p className="text-gray-400">
                Simple. Scalable. Human. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-white transition-colors">Cloud Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-white transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/trainer-adda" className="hover:text-white transition-colors">Trainer Adda</Link></li>
                <li><Link to="/guides" className="hover:text-white transition-colors">Guides & Docs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VPS;
