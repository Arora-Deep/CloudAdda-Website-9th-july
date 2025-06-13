
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Users, Shield, ArrowRight, Monitor, Code, Server, BookOpen, Settings, Cpu, HardDrive, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
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
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/support" className="text-foreground hover:text-primary transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-foreground">
                ⚡️ Pricing That Makes Even CFOs Smile
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Zero waste. Full performance. Built to scale.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
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

      {/* Training Labs Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">🎓 Training Labs — Custom Infra, Zero Hassle</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle all the infra. You just show up and train.
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-4xl mx-auto">
              Fully managed lab environments tailored to your exact training requirements — spun up quickly, with enterprise-grade reliability and support.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">What's Included</CardTitle>
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
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-card rounded-lg p-6 mb-8 border border-border">
              <p className="text-muted-foreground mb-4">
                <strong>Perfect for:</strong> Corporate L&D, upskilling programs, virtual tech bootcamps, internal IT training, and more.
              </p>
            </div>

            <div className="text-center bg-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">💬 Pricing? Built Around Your Curriculum.</h3>
              <p className="text-muted-foreground mb-6">
                There's no fixed plan — and that's the point. We design the right setup based on your toolchain, user count, access level, and duration.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground">
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Desktops Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">🖥️ Cloud Desktops (DaaS) — Role-Based Plans</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Not every employee needs the same desktop. So why pay like they do?
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              With CloudAdda, you can match compute power to roles — save on costs where you can, and boost performance where you must.
            </p>
          </div>

          {/* Light Users Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">👩‍💼 For Admins, Operations, and Light Users</h3>
            <p className="text-muted-foreground mb-8">Lean, secure, always-on desktops for general office use.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Lite</CardTitle>
                  <CardDescription>2 vCPU • 4GB RAM • 50GB SSD</CardDescription>
                  <div className="text-3xl font-bold text-primary">₹1,499<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Ideal For: Admins, HR, Ops, Finance</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Standard</CardTitle>
                  <CardDescription>4 vCPU • 8GB RAM • 100GB SSD</CardDescription>
                  <div className="text-3xl font-bold text-primary">₹2,599<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Ideal For: CRM, browser-heavy tasks</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Fast login access",
                "Browser + RDP ready",
                "Secure backups included",
                "24/7 support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Power Users Plans */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8">👨‍💻 For Developers, Creators, and Power Users</h3>
            <p className="text-muted-foreground mb-8">Raw power for code, design, and production workloads.</p>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dev Pro</CardTitle>
                  <CardDescription>6 vCPU • 16GB RAM • 200GB NVMe</CardDescription>
                  <div className="text-3xl font-bold text-primary">₹4,399<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Ideal For: Full-stack devs, designers</p>
                </CardContent>
              </Card>

              <Card className="ring-2 ring-primary">
                <CardHeader>
                  <Badge className="w-fit mb-2">Most Popular</Badge>
                  <CardTitle>Team Lead</CardTitle>
                  <CardDescription>8 vCPU • 32GB RAM • 300GB NVMe</CardDescription>
                  <div className="text-3xl font-bold text-primary">₹6,599<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Ideal For: Heavy IDEs, builds, multitasking</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dev Max (GPU)</CardTitle>
                  <CardDescription>+ GPU Access • 8 vCPU • 64GB RAM</CardDescription>
                  <div className="text-3xl font-bold text-primary">On Request</div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Ideal For: ML/AI, video, 3D, render</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                "Comes pre-installed with your stack",
                "Access anywhere — even on weak laptops",
                "High-security, isolated VMs",
                "Optional VPN, SSO, and IAM integration"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center bg-muted/50 rounded-lg p-6">
              <p className="text-muted-foreground mb-4">
                💡 <strong>Mix and match user roles inside your team.</strong><br />
                Give finance a ₹1.5K plan. Give devs ₹6.5K power rigs.
              </p>
              <Button variant="outline" className="mr-4">We'll make it work</Button>
              <Button>Start Free for 7 Days</Button>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">🔧 High-Performance VPS Hosting — Made Simple</h2>
            <p className="text-xl text-muted-foreground">
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
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.specs}</CardDescription>
                  <div className="text-3xl font-bold text-primary">{plan.price}<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              "Full root access",
              "Choice of Linux OS",
              "Static IP, DNS config",
              "Free migration support",
              "Monitoring & reboot tools built in"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Need clustering, HA, or something wild? <Button variant="link" className="p-0 h-auto">Let's talk custom setups.</Button>
            </p>
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">📋 Billing Made Beautiful</h2>
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
                <span className="text-foreground text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center bg-primary rounded-lg p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6">🙌 Need Help Choosing?</h3>
            <p className="text-xl mb-8 opacity-90">
              Not sure what plan is right? Or want help creating a perfect bundle for your team?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Talk to an Expert
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                View Demo
              </Button>
            </div>
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

export default Pricing;
