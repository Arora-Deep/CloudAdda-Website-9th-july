
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Zap, Puzzle, MessageCircle, Play, Monitor, Server, Database, Users, Building2, GraduationCap, Award } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingLabs = () => {
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
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
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
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Bring Your Own Training.<br />
              <span className="text-purple-600">We'll Handle the Infrastructure.</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Provisioned-for-you lab environments — consistent, crash-proof, and always on time.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Play className="mr-3 h-6 w-6" />
              Request Your Lab Setup
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What You Get</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">Zero Setup Delay</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We provision fully configured environments based on your spec — within hours.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">Bulletproof Reliability</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Labs don't crash midway. Period. We design for uptime.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
              <CardHeader className="text-center pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">Instructor-Ready URLs</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  No portals. No confusion. We give you clean, simple URLs to drop into your LMS or session.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Uses This Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Who Uses This?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Training Companies",
                subtitle: "(live & recorded courses)",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Building2,
                title: "Corporate L&D Teams",
                subtitle: "",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Users,
                title: "Internal Tech Bootcamps",
                subtitle: "",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Award,
                title: "Certification Partners",
                subtitle: "",
                color: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                {item.subtitle && <p className="text-gray-600">{item.subtitle}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CloudAdda Labs Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why CloudAdda Labs?</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">⚡ Speed</h3>
              <p className="text-xl text-white/90 leading-relaxed">
                Environments live in hours, not days.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Puzzle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">🧩 Flexibility</h3>
              <p className="text-xl text-white/90 leading-relaxed">
                Windows, Linux, networking setups, clustering — all supported.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">💬 Human Support</h3>
              <p className="text-xl text-white/90 leading-relaxed">
                We talk to you. Understand your flow. Then deliver the infra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Spin Up Stable Labs Without
            <br />
            <span className="text-purple-600">Spinning Your Wheels.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              🛠 Request Infrastructure
            </Button>
          </div>
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

export default TrainingLabs;
