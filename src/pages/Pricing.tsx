
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MessageSquare, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const cloudDesktopPlans = [
    {
      name: "Starter",
      price: "₹2,599",
      specs: "4 vCPU • 8GB RAM • 100GB NVMe",
      bestFor: "Individuals, remote staff, light use"
    },
    {
      name: "Professional", 
      price: "₹4,399",
      specs: "6 vCPU • 16GB RAM • 200GB NVMe",
      bestFor: "Designers, devs, multi-app workflows"
    },
    {
      name: "Enterprise",
      price: "₹6,599", 
      specs: "8 vCPU • 32GB RAM • 500GB NVMe",
      bestFor: "Teams, high-security use, heavier apps"
    }
  ];

  const vpsPlans = [
    {
      name: "Dev VPS",
      price: "₹999",
      specs: "2 vCPU • 4GB RAM • 50GB NVMe",
      features: "Full root, choice of OS, free backups"
    },
    {
      name: "Growth VPS",
      price: "₹1,999", 
      specs: "4 vCPU • 8GB RAM • 100GB NVMe",
      features: "Ideal for mid-size workloads or apps"
    },
    {
      name: "Scale VPS",
      price: "₹3,599",
      specs: "8 vCPU • 16GB RAM • 200GB NVMe", 
      features: "Great for production & high I/O usage"
    },
    {
      name: "Power VPS",
      price: "₹5,999",
      specs: "12 vCPU • 32GB RAM • 500GB NVMe",
      features: "Heavy-duty compute or self-hosted infra"
    }
  ];

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
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Pricing That Makes Even
            <span className="block text-orange-500">CFOs Smile</span>
          </h1>
          <p className="text-2xl text-purple-600 font-semibold mb-6">
            Predictable. Scalable. Worth Every Rupee.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            No surprise bills. No usage traps. Just honest, powerful infrastructure that does exactly what it says — and then some.
            Whether you need blazing-fast VPS, secure cloud desktops, or customized training labs — we've got a plan (or a person) for that.
          </p>
        </div>
      </section>

      {/* Training Labs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🎓 Training Labs <span className="text-purple-600">(Fully Managed)</span>
            </h2>
            <p className="text-2xl text-orange-600 font-semibold mb-6">
              You Train. We Handle the Infra.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We build, configure, and maintain 100% of your lab environments — so your trainers can focus on delivery, not deployment.
              No complex dashboards. No infrastructure learning curve. Just tell us what you need — and it's done.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-4">
                {[
                  "Pre-configured lab environments",
                  "Fast provisioning on demand", 
                  "Full root or limited-user access",
                  "Static IPs, DNS routing, VPN if needed",
                  "India-hosted. 99.9% uptime SLA",
                  "Used by training companies, corporates, L&D teams"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Pricing. Built Around You.</h3>
              <p className="text-gray-600 mb-8">
                Every training requirement is different — and so is the infrastructure behind it.
                We don't do one-size-fits-all. We build labs that match your exact curriculum and deliver flawless performance.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Let's Talk About Your Labs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Desktops Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🚀 Cloud Desktops <span className="text-purple-600">(DaaS)</span>
            </h2>
            <p className="text-2xl text-orange-600 font-semibold mb-6">
              Your Work Desktop. Reinvented. In the Cloud.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Simple, flat pricing with everything included — no extra charges for setup, storage, or support.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Plan Name</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Price (₹/month)</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Specs</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {cloudDesktopPlans.map((plan, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-900">{plan.name}</td>
                      <td className="py-4 px-6 text-purple-600 font-bold text-lg">{plan.price}</td>
                      <td className="py-4 px-6 text-gray-700">{plan.specs}</td>
                      <td className="py-4 px-6 text-gray-600">{plan.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {[
                "Pre-installed software as per your use case",
                "Browser-based access (or RDP)",
                "Full admin control (on team plans)",
                "24/7 human support",
                "Optional GPU access (on request)"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                Start Free for 7 Days
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 w-full">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VPS Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💻 High-Performance <span className="text-purple-600">VPS Hosting</span>
            </h2>
            <p className="text-2xl text-orange-600 font-semibold mb-6">
              Raw Performance. Real Control. No Bloat.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Run apps, host sites, deploy databases, or power anything — on India-hosted AMD EPYC servers with NVMe storage and full root access.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Plan Name</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Price (₹/month)</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Specs</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900">Included Features</th>
                  </tr>
                </thead>
                <tbody>
                  {vpsPlans.map((plan, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-900">{plan.name}</td>
                      <td className="py-4 px-6 text-purple-600 font-bold text-lg">{plan.price}</td>
                      <td className="py-4 px-6 text-gray-700">{plan.specs}</td>
                      <td className="py-4 px-6 text-gray-600">{plan.features}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {[
                "Free OS installs (Ubuntu, Debian, CentOS, Rocky)",
                "Static IPv4 included",
                "Optional cPanel, DirectAdmin",
                "NVMe-only storage for peak performance",
                "Expert support, always included"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Get Started Instantly
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                Let's talk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Invoice Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🧾 Need an Invoice? GST?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're based in India and 100% tax-compliant.
            All plans come with GST invoices, business-friendly terms, and billing flexibility (monthly, quarterly, or yearly).
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">🙋 Still Deciding?</h2>
          <p className="text-xl mb-8 opacity-90">
            Talk to a real human who understands infra, costs, and constraints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Book a 15-min consult
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              See a Live Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Start Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-gray-900">CloudAdda</span>
              </Link>
              <p className="text-gray-600">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/training-labs" className="hover:text-gray-900 transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-gray-900 transition-colors">Virtual Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-gray-900 transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/support" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
