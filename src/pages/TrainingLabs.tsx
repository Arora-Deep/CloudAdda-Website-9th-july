
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Zap, Puzzle, MessageCircle, Play, Monitor, Server, Database, Users, Building2, GraduationCap, Award, Settings, CheckCircle, AlertTriangle, Target, Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingLabs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
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
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Support</a>
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
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Training Infrastructure That 
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"> Never Lets You Down</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
              Give your learners a seamless, crash-proof experience — every time. You send the requirements. We deliver stable, pre-configured labs in hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                <ArrowRight className="mr-3 h-6 w-6" />
                Get a Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-xl px-12 py-6 rounded-full backdrop-blur-sm">
                <Play className="mr-3 h-6 w-6" />
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training Labs Fail Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Training Labs Fail — And Why Yours Won't</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Before CloudAdda */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl transform rotate-1"></div>
              <Card className="relative bg-white border-2 border-red-200 rounded-3xl p-8 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-60">
                    <AlertTriangle className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-red-700 font-bold">Before CloudAdda</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    "Manual infra setup every session",
                    "Environments crash mid-training", 
                    "Late starts, annoyed learners",
                    "Trainers firefighting instead of teaching"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl">
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* With CloudAdda */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl transform -rotate-1"></div>
              <Card className="relative bg-white border-2 border-green-200 rounded-3xl p-8 shadow-xl">
                <CardHeader className="text-center pb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-green-700 font-bold">With CloudAdda</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    "Labs provisioned in hours",
                    "Stable, pre-configured infra — no crashes",
                    "Zero setup delay, sessions start on time", 
                    "You focus on teaching, we handle the tech"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Real Training Programs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Built for People Who Run Real Training Programs</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Settings,
                title: "Fully Customized Environments",
                description: "Every setup tailored to your course content — OS, apps, network configs, firewall rules. We don't do \"templates.\"",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "Provisioned in Hours, Not Days",
                description: "You send a config. We handle the rest. Your lab link is ready before your coffee gets cold.",
                gradient: "from-orange-500 to-orange-600"
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Reliability & Security",
                description: "Isolated user access, usage tracking, high-availability infrastructure. Your reputation stays protected.",
                gradient: "from-purple-500 to-purple-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Trusted by Those Who Can't Afford Downtime</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Training Companies",
                description: "Run instructor-led or self-paced courses with confidence — even for hundreds of users.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Building2,
                title: "Corporate L&D Teams",
                description: "Deliver internal IT training at scale — Windows, Linux, DevOps, Cybersecurity and more.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Monitor,
                title: "EdTech Platforms",
                description: "Want to offer hands-on labs without building infra from scratch? Use ours.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((profile, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${profile.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <profile.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors">{profile.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{profile.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">How It Works</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-orange-400 rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "1",
                  title: "You Send Us Your Setup Requirements",
                  description: "OS, applications, number of VMs, user limits, custom scripts — whatever you need.",
                  side: "left"
                },
                {
                  step: "2", 
                  title: "We Build and Test the Lab",
                  description: "No bots. Our engineers spin up, configure, and QA every instance.",
                  side: "right"
                },
                {
                  step: "3",
                  title: "You Get a Link to Share with Students", 
                  description: "One-click access, no confusing dashboards. Labs are ready and waiting.",
                  side: "left"
                },
                {
                  step: "4",
                  title: "Need Edits? We Move Fast",
                  description: "New batch next week? Change configs? Add storage? Just message us.",
                  side: "right"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 lg:max-w-lg">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                      <CardHeader className="pb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                            {item.step}
                          </div>
                          <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex w-24 justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  
                  <div className="flex-1 lg:max-w-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CloudAdda */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Why Choose CloudAdda?</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: MessageCircle,
                title: "Talk to Real Engineers",
                description: "No chatbots. No \"support tiers.\" Just smart humans who know infra."
              },
              {
                icon: Target,
                title: "Built Only for Training Use Cases", 
                description: "We're not trying to be AWS. We're here for trainers. That's it."
              },
              {
                icon: Rocket,
                title: "Fast Response, Even Faster Delivery",
                description: "Need 100-user labs in 24 hours? We've done it. We'll do it again."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-xl text-white/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white rounded-3xl shadow-xl border-0 p-8">
              <CardContent className="pt-0">
                <div className="text-4xl text-purple-500 mb-6">"</div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Before CloudAdda, we'd lose 20 minutes per session to setup problems. Now our instructors just click and start.
                </p>
                <div className="text-lg font-semibold text-gray-900">Head of Delivery, TechTrainingCo</div>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-3xl shadow-xl border-0 p-8">
              <CardContent className="pt-0">
                <div className="text-4xl text-purple-500 mb-6">"</div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  We needed 75 labs across 3 geographies in 12 hours. CloudAdda pulled it off like it was nothing.
                </p>
                <div className="text-lg font-semibold text-gray-900">Program Manager, Enterprise Learning Division</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Deliver Better Labs, Faster?
          </h2>
          <p className="text-2xl text-white/90 mb-12 leading-relaxed">
            Talk to us. We'll handle your infra so you can handle your learners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-50 text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
              <ArrowRight className="mr-3 h-6 w-6" />
              Get a Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500 text-xl px-12 py-6 rounded-full backdrop-blur-sm">
              <Play className="mr-3 h-6 w-6" />
              Schedule a Demo
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
