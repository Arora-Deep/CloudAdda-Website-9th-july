import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Shield, Users, Globe, DollarSign, GraduationCap, Check, Building, Target, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const Pricing = () => {

  return <>
      <Helmet>
        <title>Training Labs, VDI & VPS Pricing | CloudAdda</title>
        <meta name="description" content="Explore CloudAdda's pricing for custom training labs, scalable VDI cloud desktops, and high-speed VPS hosting. Predictable, fair pricing — no surprises." />
      </Helmet>
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
                <Link to="/training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Solutions</Link>
                <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
                <Link to="/pricing" className="text-orange-500 font-medium">Pricing</Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
                <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                      Log In
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <a href="https://trainer-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                        Trainer Login
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="https://trainee-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full">
                        Trainee Login
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/contact" onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })}>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
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
                  <div className="text-2xl font-bold text-foreground">Zero waste. Full performance. Built to scale.</div>
                </div>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                  Every training is different — your pricing should be too. We don't believe in one-size-fits-all plans. Your quote is built around your exact lab specs, batch size, duration, and support needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/contact" onClick={() => window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })}>
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 group">
                      <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Talk to Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative">
                  <img src="/lovable-uploads/c219099e-0e5b-49c8-83b1-e799238baebd.png" alt="Business person with tablet sitting on piggy bank - cost savings" className="w-full h-auto max-w-lg object-contain rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24 pb-16 lg:pb-24">
            {/* Training Labs Section - Enhanced */}
            <section id="training-labs" className="py-12">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Virtual Training Labs
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Every Training Is Different.
                  <br />
                  <span className="text-orange-600">Your Pricing Should Be Too.</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We don't believe in one-size-fits-all plans. Your quote is built around your exact lab specs, batch size, duration, and support needs.
                </p>
              </div>

              {/* How Pricing Works */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center">How We Price Your Labs</h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { step: "01", title: "Lab Specs", desc: "CPU, RAM, storage, OS, and software stack per student machine", color: "from-purple-500 to-purple-600" },
                    { step: "02", title: "Batch Size", desc: "Number of concurrent students per session — scale from 10 to 500+", color: "from-orange-500 to-orange-600" },
                    { step: "03", title: "Duration", desc: "Single-day workshops, multi-week courses, or always-on environments", color: "from-purple-500 to-purple-600" },
                  ].map((item, index) => (
                    <div key={index} className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} text-white text-sm font-bold mb-4`}>
                        {item.step}
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Included Banner */}
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-200 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center gap-6">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">24/7 Support with a Dedicated Engineer — Included in Every Training</h4>
                  <p className="text-muted-foreground leading-relaxed">We believe in delivering the absolute best experience to our customers. That's why full 24/7 support with a dedicated engineer isn't an add-on — it's standard with every training we support.</p>
                </div>
              </div>

              {/* What's Included */}
              <div className="grid lg:grid-cols-2 gap-10 mb-16">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Check className="w-5 h-5 text-purple-600" />
                    </div>
                    Included in Every Quote
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Full infrastructure provisioning & teardown",
                      "Pre-configured lab environments with your software stack",
                      "Trainer & trainee dashboard access",
                      "Batch isolation — zero cross-contamination",
                      "Real-time monitoring & auto-recovery",
                      "Dedicated account manager",
                      "Post-session usage reports",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-orange-600" />
                    </div>
                    Built For
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Building, title: "Corporate L&D Teams", desc: "Upskilling programs at scale" },
                      { icon: Users, title: "Training Companies", desc: "Multi-batch, multi-client delivery" },
                      { icon: GraduationCap, title: "Certification Providers", desc: "Hands-on exam-prep environments" },
                      { icon: Globe, title: "Remote & Hybrid Workshops", desc: "Global access, local performance" },
                    ].map((use, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                        <div className="w-10 h-10 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <use.icon className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{use.title}</h4>
                          <p className="text-sm text-muted-foreground">{use.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-3xl p-10 lg:p-14 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    Tell Us What You're Training.{" "}
                    <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">We'll Handle the Rest.</span>
                  </h3>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Share your curriculum, batch size, and timeline — we'll come back with a fully scoped infrastructure plan and a transparent quote within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                        Get a Custom Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-400 mt-6">Free consultation · No commitments · Response within 24 hours</p>
                </div>
              </div>
            </section>


          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link to="/" className="flex items-center space-x-2">
                  <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                  
                </Link>
                <p className="text-muted-foreground">
                  Simple. Scalable. Human. Infrastructure that just works.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/training-labs" className="hover:text-foreground transition-colors">Training Labs</Link></li>
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
    </>;
};
export default Pricing;