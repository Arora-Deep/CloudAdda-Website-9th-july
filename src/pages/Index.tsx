import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Users, Code, Brain, FileCode, Network, Cloud, LayoutDashboard, MessageSquare, Settings, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CustomerLogosShowcase from "@/components/CustomerLogosShowcase";

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
              <Link to="/training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Solutions</Link>
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
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Infrastructure That Gets Out of Your Way.
                <span className="block text-purple-600">So You Can Focus on What Matters.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                CloudAdda delivers reliable, high-performance cloud solutions that empower businesses to innovate and scale without the complexity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  Explore Solutions
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/f5c75514-989d-4851-891a-58f483299599.png" 
                alt="CloudAdda platform interface"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Showcase - New Section */}
      <CustomerLogosShowcase />

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powering Innovation with Reliable Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              Explore the features that make CloudAdda the preferred choice for businesses of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "High-Performance Computing",
                description: "Unleash the power of AMD EPYC processors for demanding workloads.",
                icon: Rocket
              },
              {
                title: "Robust Security",
                description: "Protect your data with advanced security features and compliance certifications.",
                icon: Shield
              },
              {
                title: "Scalable Solutions",
                description: "Easily scale your resources to meet growing business demands.",
                icon: Users
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Solutions Tailored to Your Needs
            </h2>
            <p className="text-xl text-gray-600">
              Discover our range of cloud solutions designed to address your specific business challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Training Labs",
                description: "Provisioned lab environments for training companies.",
                icon: Code,
                link: "/training-labs"
              },
              {
                title: "Cloud Desktops",
                description: "Fast, secure desktops accessible from anywhere.",
                icon: Brain,
                link: "/cloud-desktops"
              },
              {
                title: "VPS Hosting",
                description: "High-performance VPS with AMD EPYC processors.",
                icon: FileCode,
                link: "/vps"
              },
              {
                title: "Networking Solutions",
                description: "Secure and scalable networking infrastructure.",
                icon: Network,
                link: "/networking"
              },
              {
                title: "Cloud Storage",
                description: "Reliable and cost-effective cloud storage solutions.",
                icon: Cloud,
                link: "/storage"
              },
              {
                title: "Managed Services",
                description: "Expert management and support for your cloud infrastructure.",
                icon: LayoutDashboard,
                link: "/managed-services"
              }
            ].map((solution, index) => (
              <Link to={solution.link} key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                    <solution.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{solution.description}</p>
                  <Button variant="link" className="mt-4 self-start">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See the impact CloudAdda is making for businesses across the globe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600">99.99%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Global Data Centers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Experience the power of CloudAdda and unlock new possibilities for your business.
          </p>
          
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started Today
            <ArrowRight className="ml-3 h-6 w-6" />
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
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
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
