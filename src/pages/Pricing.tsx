import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, DollarSign, Zap, Users, Target, Globe, Award, Calculator, Sparkles, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/shared/Navigation";

const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Asymmetric Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block mb-8">
                <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200 text-sm font-medium px-4 py-2">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Zero Waste Pricing
                </Badge>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                <span className="text-purple-600">Pricing</span>
                <br />
                <span className="text-gray-900">That Makes</span>
                <br />
                <span className="text-orange-600">CFOs Smile</span>
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-orange-600"></div>
                <div className="text-2xl font-bold text-foreground">Zero waste. Full performance. Built to scale.</div>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                At CloudAdda, we don't just offer pricing — we offer clarity. Whether you're running training labs, 
                deploying virtual desktops, or spinning up servers, every rupee delivers real-world value.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 group">
                  <Calculator className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Calculate Your Savings
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 group">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  See Live Demo
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <img 
                  src="/lovable-uploads/f690fdec-4d37-4062-af23-158e9b86a21e.png" 
                  alt="Person with piggy bank - cost savings" 
                  className="w-80 h-80 object-contain rounded-3xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation with Modern Design */}
      <section className="py-8 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Training Labs", id: "training-labs", icon: Target },
              { label: "Cloud Desktops", id: "cloud-desktops", icon: Zap },
              { label: "VPS Hosting", id: "vps-hosting", icon: Globe },
              { label: "Billing Info", id: "billing", icon: Shield }
            ].map((item, index) => (
              <Button 
                key={index}
                variant="outline" 
                onClick={() => scrollToSection(item.id)}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 group"
              >
                <item.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Training Labs Section with Unique Layout */}
      <section id="training-labs" className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-8 bg-orange-100 text-orange-800 border-orange-200">
                <Target className="w-4 h-4 mr-2" />
                Custom Infrastructure
              </Badge>
              <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">
                Training Labs —
                <br />
                <span className="text-orange-600">Custom Infra, Zero Hassle</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We handle all the infra. You just show up and train.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Fully managed lab environments tailored to your exact training requirements — 
                spun up quickly, with enterprise-grade reliability and support.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "100% infra management & fast provisioning",
                  "India-hosted servers with static IPs",
                  "Full root or restricted-user access",
                  "OS-level customization, VPN access, routing, DNS",
                  "Optional snapshotting, user access controls, monitoring"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Perfect for:</strong> Corporate L&D, upskilling programs, 
                  virtual tech bootcamps, internal IT training, and more.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-orange-500 rounded-3xl p-12 text-white shadow-xl transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-bold mb-6">Pricing? Built Around Your Curriculum.</h3>
                <p className="text-xl mb-8 opacity-90">
                  There's no fixed plan — and that's the point. We design the right setup based on your 
                  toolchain, user count, access level, and duration.
                </p>
                <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold w-full">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Desktops Section with Staggered Cards */}
      <section id="cloud-desktops" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">Cloud Desktops (DaaS)</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
              Not every employee needs the same desktop. So why pay like they do?
            </p>
          </div>

          {/* Light Users Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                For Admins & Light Users
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">Lean, Secure, Always-On</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Admin Lite",
                  specs: "2 vCPU • 4GB RAM • 50GB SSD",
                  price: "₹1,499",
                  description: "Ideal For: Admins, HR, Ops, Finance",
                  color: "purple"
                },
                {
                  name: "Standard",
                  specs: "4 vCPU • 8GB RAM • 100GB SSD",
                  price: "₹2,599",
                  description: "Ideal For: CRM, browser-heavy tasks",
                  color: "orange"
                }
              ].map((plan, index) => (
                <Card key={index} className="shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                      plan.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                    }`}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{plan.specs}</CardDescription>
                    <div className="text-3xl font-bold text-foreground mt-4">{plan.price}<span className="text-lg text-muted-foreground">/month</span></div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Power Users Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
                For Developers & Power Users
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">Raw Power for Code & Creation</h3>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Dev Pro",
                  specs: "6 vCPU • 16GB RAM • 200GB NVMe",
                  price: "₹4,399",
                  description: "Ideal For: Full-stack devs, designers",
                  popular: false
                },
                {
                  name: "Team Lead",
                  specs: "8 vCPU • 32GB RAM • 300GB NVMe",
                  price: "₹6,599",
                  description: "Ideal For: Heavy IDEs, builds, multitasking",
                  popular: true
                },
                {
                  name: "Dev Max (GPU)",
                  specs: "+ GPU Access • 8 vCPU • 64GB RAM",
                  price: "On Request",
                  description: "Ideal For: ML/AI, video, 3D, render",
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                  plan.popular ? 'border-2 border-orange-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                      plan.popular ? 'bg-orange-500' : 'bg-purple-500'
                    }`}>
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{plan.specs}</CardDescription>
                    <div className="text-3xl font-bold text-foreground mt-4">{plan.price}{plan.price !== "On Request" && <span className="text-lg text-muted-foreground">/month</span>}</div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-purple-600 rounded-3xl p-12 text-white shadow-xl max-w-4xl mx-auto">
              <p className="text-2xl mb-8 font-light">
                <strong className="font-bold">Mix and match user roles inside your team.</strong>
                <br />
                Give finance a ₹1.5K plan. Give devs ₹6.5K power rigs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                  We'll Make It Work
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                  Start Free for 7 Days
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Section with Modern Grid */}
      <section id="vps-hosting" className="py-24 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">High-Performance VPS</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-2xl text-muted-foreground font-light">
              Blazing speed. Full control. Built on AMD EPYC + NVMe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {[
              {
                name: "Starter VPS",
                specs: "2 vCPU • 4GB RAM • 50GB NVMe",
                price: "₹999",
                description: "Lightweight apps, testing, devops",
                icon: Target
              },
              {
                name: "Growth VPS",
                specs: "4 vCPU • 8GB RAM • 100GB NVMe",
                price: "₹1,999",
                description: "Production apps, e-commerce, APIs",
                icon: TrendingUp
              },
              {
                name: "Pro VPS",
                specs: "8 vCPU • 16GB RAM • 200GB NVMe",
                price: "₹3,599",
                description: "SaaS apps, databases, backend infra",
                icon: Zap
              },
              {
                name: "Power VPS",
                specs: "12 vCPU • 32GB RAM • 500GB NVMe",
                price: "₹5,999",
                description: "High-load services, private cloud",
                icon: Award
              }
            ].map((plan, index) => (
              <Card key={index} className="shadow-lg border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 ${
                    index % 2 === 0 ? 'bg-purple-500' : 'bg-orange-500'
                  }`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.specs}</CardDescription>
                  <div className="text-3xl font-bold text-foreground mt-4">{plan.price}<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
            {[
              "Full root access",
              "Choice of Linux OS", 
              "Static IP, DNS config",
              "Free migration support",
              "Monitoring & reboot tools built in"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Section with Centered Focus */}
      <section id="billing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:rotate-12 transition-transform duration-500">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-8">Billing Made Beautiful</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
            {[
              "GST invoices for all plans",
              "Pay monthly, quarterly, or yearly",
              "Zero lock-ins — cancel anytime",
              "Scale up or down whenever needed",
              "Dedicated account manager on enterprise plans"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-muted-foreground text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-500 rounded-3xl p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Need Help Choosing?</h3>
            <p className="text-xl mb-8 opacity-90">
              Not sure what plan is right? Or want help creating a perfect bundle for your team?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
                Talk to an Expert
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                View Demo
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

export default Pricing;
