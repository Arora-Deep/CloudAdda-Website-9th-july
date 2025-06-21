
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Users, Zap, Shield, CheckCircle, Star, Clock, Award, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
              <Link to="/training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Training Labs</Link>
              <Link to="/cloud-desktops" className="text-gray-700 hover:text-orange-500 transition-colors">Cloud Desktops</Link>
              <Link to="/vps" className="text-gray-700 hover:text-orange-500 transition-colors">VPS</Link>
              <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Log In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Stop Fighting the Infra.
                <span className="block text-orange-500">Start Shipping Work.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                CloudAdda runs your Virtual Training Labs, Cloud Desktops (DaaS), and High-Performance VPS — so your team doesn't have to.
              </p>

              <p className="text-lg font-medium text-blue-600">
                No chaos. No cloud headaches. Just reliable, scalable infrastructure with lightning-fast setup and unbeatable support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Let's Fix Your Infra
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-orange-300 text-orange-600 hover:bg-orange-50">
                  See Pricing
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">&lt; 2hrs</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Real Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                alt="3D illustration of a person with laptop and lightbulb idea" 
                className="w-full h-auto object-contain" 
                src="/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">
            You're Not a Cloud Company. So Why Are You Doing Cloud's Job?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed">
                You're not here to manage servers.<br />
                You're here to teach, build, scale, grow.
              </p>
              
              <div className="space-y-4">
                <p className="text-lg font-semibold text-orange-300">But you're stuck in cloud chaos:</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Provisioning dev environments</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Configuring remote desktops</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Chasing support tickets</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <p className="text-2xl font-bold text-orange-300 mb-4">That's our job.</p>
                <p className="text-lg">We run your training labs, your DaaS, your VPS.</p>
                <p className="text-xl font-semibold mt-4">You run your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Fit Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            It's Not for Everyone. Just the Smart Ones.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-lg text-gray-700">You're tired of wasting hours configuring training labs.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-lg text-gray-700">You want your team to work — not wait for IT.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-lg text-gray-700">You care about performance, but reliability matters more.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <p className="text-lg text-gray-700">You want to scale without managing a data center.</p>
            </div>
          </div>
          
          <p className="text-xl font-semibold text-orange-600 mt-12">
            If that's you — you're our people.
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What CloudAdda Offers</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Training Labs */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Training Labs</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">For Training Firms & Enterprises</p>
              <p className="text-gray-700 mb-6">
                We don't hand you a control panel. We deliver results. Send us your exact curriculum — Windows, Linux, AI/ML stacks, networking labs — and we provision a fully customized, ready-to-teach lab.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Same-day delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">99.9% uptime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Fully scalable</span>
                </div>
              </div>
              <Link to="/training-labs">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Schedule a Lab Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Virtual Desktops */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Monitor className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Virtual Desktops (DaaS)</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Secure Cloud Desktops for Any Team</p>
              <p className="text-gray-700 mb-6">
                Run high-performance Windows, Linux, or macOS desktops in the cloud. Designed for remote teams, call centers, healthcare, and more. Secure, fast, and customizable.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Starts at ₹3,299/user/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Role-based desktop plans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Pre-installed tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Built-in snapshots & access policies</span>
                </div>
              </div>
              <Link to="/cloud-desktops">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Launch a Desktop
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* VPS Hosting */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">VPS Hosting</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">For Developers & Startups Who Need Speed</p>
              <p className="text-gray-700 mb-6">
                Forget cheap, laggy VPS. CloudAdda offers pure NVMe storage, AMD EPYC processors, and dedicated support.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Starts at ₹699/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Full root access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Indian & global locations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">SSD/NVMe speed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">Backups included</span>
                </div>
              </div>
              <Link to="/vps">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get a VPS Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After Switch */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Switch You Didn't Know You Needed
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                Before CloudAdda
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Manual infra setup</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Crashing labs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Slow laptops</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">System freeze during meetings</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Confusing cloud bills</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">No support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center">
                <span className="text-3xl mr-3">✅</span>
                After CloudAdda
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Labs provisioned in hours</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Rock-solid reliability</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">High-speed cloud desktops</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure, smooth remote access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flat, predictable pricing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 human engineers</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-12 py-4 text-lg">
              Explore Our Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why CloudAdda Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We're the Cloud Company That Actually Cares
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">99.9% uptime guarantee across all services.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">24/7 access to engineers, not bots.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customization</h3>
              <p className="text-gray-600">We tailor infra to your exact use case.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">Guaranteed resources. Zero overselling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "It's like magic. I told them what we needed. Next morning, 40 labs were live. No bugs. No BS."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                — Founder, Corporate Training Platform
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We switched from AWS Workspaces to CloudAdda. Better speeds. Better support. Better everything."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                — Head of IT, Fintech Startup
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Honestly? They saved our training business."
              </p>
              <p className="text-sm text-gray-600 font-semibold">
                — CEO, EdTech Company
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing. No Hidden Gotchas. Ever.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Labs</h3>
              <p className="text-gray-600 mb-6">Based on your curriculum<br />Fully customized, scalable labs</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center border-2 border-orange-200">
              <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Desktops (DaaS)</h3>
              <p className="text-3xl font-bold text-orange-600 mb-2">₹3,299<span className="text-lg font-normal text-gray-600">/user/month</span></p>
              <p className="text-gray-600 mb-6">Tiered by user role: Admins, Devs, Designers, etc.<br />Mix-and-match for teams</p>
              <Link to="/cloud-desktops">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">VPS Hosting</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">₹699<span className="text-lg font-normal text-gray-600">/month</span></p>
              <p className="text-gray-600 mb-6">NVMe, AMD EPYC, dedicated resources</p>
              <Link to="/vps">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="rounded-full px-12 py-4 text-lg border-orange-300 text-orange-600 hover:bg-orange-50">
                See Full Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Your Competition Isn't Waiting. Why Are You?
          </h2>
          <p className="text-xl mb-12">
            While you troubleshoot infra, others are shipping faster, scaling smarter, and saving more.<br />
            Make the switch to CloudAdda — the only cloud built around your needs.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-6 h-6" />
              <span className="font-semibold">Setup in hours — not weeks</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">💰</div>
              <span className="font-semibold">Predictable pricing, no surprises</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Enterprise-grade security</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Transformation
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
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
                <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
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

export default Index;
