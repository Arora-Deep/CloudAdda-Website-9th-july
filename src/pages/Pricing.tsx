
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Pricing That Makes Even CFOs Smile
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Zero waste. Full performance. Built to scale.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At CloudAdda, we don't just offer pricing — we offer clarity. Whether you're running training labs, deploying virtual desktops, or spinning up servers, every rupee delivers real-world value. No waste. No surprises. Just beautifully efficient cloud infrastructure that works.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/9e31bb09-d2d6-473d-bc00-74afc2886708.png" 
                alt="CFO Pricing Illustration" 
                className="w-full h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mini Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('training-labs')}
              className="bg-white hover:bg-orange-50 hover:border-orange-300 text-gray-700"
            >
              Training Labs
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('cloud-desktops')}
              className="bg-white hover:bg-orange-50 hover:border-orange-300 text-gray-700"
            >
              Cloud Desktops
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('vps-hosting')}
              className="bg-white hover:bg-orange-50 hover:border-orange-300 text-gray-700"
            >
              VPS Hosting
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('billing')}
              className="bg-white hover:bg-orange-50 hover:border-orange-300 text-gray-700"
            >
              Billing Info
            </Button>
          </div>
        </div>
      </section>

      {/* Training Labs Section */}
      <section id="training-labs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Labs — Custom Infra, Zero Hassle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We handle all the infra. You just show up and train.
            </p>
            <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
              Fully managed lab environments tailored to your exact training requirements — spun up quickly, with enterprise-grade reliability and support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "100% infra management & fast provisioning",
                    "India-hosted servers with static IPs",
                    "Full root or restricted-user access",
                    "OS-level customization, VPN access, routing, DNS, etc.",
                    "Optional snapshotting, user access controls, monitoring tools"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-white rounded-xl p-6 mb-8 shadow-lg border-0">
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-900">Perfect for:</strong> Corporate L&D, upskilling programs, virtual tech bootcamps, internal IT training, and more.
              </p>
            </div>

            <div className="text-center bg-orange-500 rounded-xl p-12 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Pricing? Built Around Your Curriculum.</h3>
              <p className="text-xl mb-8 opacity-90">
                There's no fixed plan — and that's the point. We design the right setup based on your toolchain, user count, access level, and duration.
              </p>
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Desktops Section */}
      <section id="cloud-desktops" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Desktops (DaaS) — Role-Based Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not every employee needs the same desktop. So why pay like they do?
            </p>
            <p className="text-lg text-gray-600 mt-4">
              With CloudAdda, you can match compute power to roles — save on costs where you can, and boost performance where you must.
            </p>
          </div>

          {/* Light Users Plans */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Admins, Operations, and Light Users</h3>
              <p className="text-gray-600">Lean, secure, always-on desktops for general office use.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-gray-900">Admin Lite</CardTitle>
                  <CardDescription className="text-gray-600">2 vCPU • 4GB RAM • 50GB SSD</CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">₹1,499<span className="text-lg text-gray-600">/month</span></div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Ideal For: Admins, HR, Ops, Finance</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-gray-900">Standard</CardTitle>
                  <CardDescription className="text-gray-600">4 vCPU • 8GB RAM • 100GB SSD</CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">₹2,599<span className="text-lg text-gray-600">/month</span></div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Ideal For: CRM, browser-heavy tasks</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Fast login access",
                "Browser + RDP ready",
                "Secure backups included",
                "24/7 support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Power Users Plans */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Developers, Creators, and Power Users</h3>
              <p className="text-gray-600">Raw power for code, design, and production workloads.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-gray-900">Dev Pro</CardTitle>
                  <CardDescription className="text-gray-600">6 vCPU • 16GB RAM • 200GB NVMe</CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">₹4,399<span className="text-lg text-gray-600">/month</span></div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Ideal For: Full-stack devs, designers</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-2 border-orange-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">Most Popular</Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-gray-900">Team Lead</CardTitle>
                  <CardDescription className="text-gray-600">8 vCPU • 32GB RAM • 300GB NVMe</CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">₹6,599<span className="text-lg text-gray-600">/month</span></div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Ideal For: Heavy IDEs, builds, multitasking</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-gray-900">Dev Max (GPU)</CardTitle>
                  <CardDescription className="text-gray-600">+ GPU Access • 8 vCPU • 64GB RAM</CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">On Request</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">Ideal For: ML/AI, video, 3D, render</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              {[
                "Comes pre-installed with your stack",
                "Access anywhere — even on weak laptops",
                "High-security, isolated VMs",
                "Optional VPN, SSO, and IAM integration"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center bg-purple-600 rounded-xl p-8 text-white shadow-xl max-w-4xl mx-auto">
              <p className="text-lg mb-6 opacity-90">
                <strong>Mix and match user roles inside your team.</strong><br />
                Give finance a ₹1.5K plan. Give devs ₹6.5K power rigs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">We'll make it work</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">Start Free for 7 Days</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Section */}
      <section id="vps-hosting" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">High-Performance VPS Hosting — Made Simple</h2>
            <p className="text-xl text-gray-600">
              Blazing speed. Full control. Built on AMD EPYC + NVMe.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {[
              {
                name: "Starter VPS",
                specs: "2 vCPU • 4GB RAM • 50GB NVMe",
                price: "₹999",
                description: "Lightweight apps, testing, devops"
              },
              {
                name: "Growth VPS",
                specs: "4 vCPU • 8GB RAM • 100GB NVMe",
                price: "₹1,999",
                description: "Production apps, e-commerce, APIs"
              },
              {
                name: "Pro VPS",
                specs: "8 vCPU • 16GB RAM • 200GB NVMe",
                price: "₹3,599",
                description: "SaaS apps, databases, backend infra"
              },
              {
                name: "Power VPS",
                specs: "12 vCPU • 32GB RAM • 500GB NVMe",
                price: "₹5,999",
                description: "High-load services, private cloud"
              }
            ].map((plan, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.specs}</CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">{plan.price}<span className="text-lg text-gray-600">/month</span></div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">{plan.description}</p>
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
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Need clustering, HA, or something wild? <Button variant="link" className="p-0 h-auto text-orange-500 font-semibold">Let's talk custom setups.</Button>
            </p>
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section id="billing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Billing Made Beautiful</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              "GST invoices for all plans",
              "Pay monthly, quarterly, or yearly",
              "Zero lock-ins — cancel anytime",
              "Scale up or down whenever needed",
              "Dedicated account manager on enterprise plans"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center bg-orange-500 rounded-xl p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Need Help Choosing?</h3>
            <p className="text-xl mb-8 opacity-90">
              Not sure what plan is right? Or want help creating a perfect bundle for your team?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default Pricing;
