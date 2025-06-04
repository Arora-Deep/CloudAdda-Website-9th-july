
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Settings, Zap, Lock, GraduationCap, Building2, Users, MessageCircle, Target, Rocket, CheckCircle, AlertTriangle, Quote } from "lucide-react";
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
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 pt-20 pb-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Training Infrastructure That
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Never Lets You Down.</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-12 max-w-5xl mx-auto leading-relaxed">
              Give your learners a seamless, crash-proof experience — every time. You send the requirements. We deliver stable, pre-configured labs in hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Training Labs Fail — And Why Yours Won't</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Before CloudAdda */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-red-600 mb-6 flex items-center justify-center">
                  <AlertTriangle className="mr-3 h-8 w-8" />
                  Before CloudAdda
                </h3>
              </div>
              <div className="space-y-6">
                {[
                  "Manual infra setup every session",
                  "Environments crash mid-training", 
                  "Late starts, annoyed learners",
                  "Trainers firefighting instead of teaching"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-red-50 border border-red-200 rounded-xl opacity-75">
                    <div className="text-red-500 text-2xl">⚠️</div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* With CloudAdda */}
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-green-600 mb-6 flex items-center justify-center">
                  <CheckCircle className="mr-3 h-8 w-8" />
                  With CloudAdda
                </h3>
              </div>
              <div className="space-y-6">
                {[
                  "Labs provisioned in hours",
                  "Stable, pre-configured infra — no crashes",
                  "Zero setup delay, sessions start on time", 
                  "You focus on teaching, we handle the tech"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-green-50 border border-green-200 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                    <div className="text-green-500 text-2xl">✅</div>
                    <p className="text-gray-700 text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Real Training Programs */}
      <section className="py-24 bg-gray-50">
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
                emoji: "🛠",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "Provisioned in Hours, Not Days", 
                description: "You send a config. We handle the rest. Your lab link is ready before your coffee gets cold.",
                emoji: "⚡️",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Lock,
                title: "Enterprise-Grade Reliability & Security",
                description: "Isolated user access, usage tracking, high-availability infrastructure. Your reputation stays protected.",
                emoji: "🔒",
                color: "from-green-500 to-green-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-4xl">{feature.emoji}</span>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Trusted by Those Who Can't Afford Downtime</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Training Companies",
                description: "Run instructor-led or self-paced courses with confidence — even for hundreds of users.",
                emoji: "👩‍🏫",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Building2,
                title: "Corporate L&D Teams",
                description: "Deliver internal IT training at scale — Windows, Linux, DevOps, Cybersecurity and more.",
                emoji: "🏢", 
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "EdTech Platforms",
                description: "Want to offer hands-on labs without building infra from scratch? Use ours.",
                emoji: "🎓",
                color: "from-green-500 to-green-600"
              }
            ].map((profile, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${profile.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{profile.emoji}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">{profile.title}</CardTitle>
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
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">How It Works</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: "1",
                  title: "You Send Us Your Setup Requirements",
                  description: "OS, applications, number of VMs, user limits, custom scripts — whatever you need."
                },
                {
                  step: "2",
                  title: "We Build and Test the Lab", 
                  description: "No bots. Our engineers spin up, configure, and QA every instance."
                },
                {
                  step: "3",
                  title: "You Get a Link to Share with Students",
                  description: "One-click access, no confusing dashboards. Labs are ready and waiting."
                },
                {
                  step: "4",
                  title: "Need Edits? We Move Fast",
                  description: "New batch next week? Change configs? Add storage? Just message us."
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1 lg:max-w-lg">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                      <CardHeader className="pb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
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
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Choose CloudAdda?</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: MessageCircle,
                title: "Talk to Real Engineers",
                description: "No chatbots. No \"support tiers.\" Just smart humans who know infra.",
                emoji: "💬",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Target,
                title: "Built Only for Training Use Cases",
                description: "We're not trying to be AWS. We're here for trainers. That's it.",
                emoji: "🎯",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Rocket,
                title: "Fast Response, Even Faster Delivery",
                description: "Need 100-user labs in 24 hours? We've done it. We'll do it again.",
                emoji: "🚀",
                color: "from-orange-500 to-orange-600"
              }
            ].map((reason, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-24 h-24 bg-gradient-to-br ${reason.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-4xl">{reason.emoji}</span>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-purple-600 transition-colors mb-4">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                quote: "Before CloudAdda, we'd lose 20 minutes per session to setup problems. Now our instructors just click and start.",
                author: "Head of Delivery, TechTrainingCo"
              },
              {
                quote: "We needed 75 labs across 3 geographies in 12 hours. CloudAdda pulled it off like it was nothing.",
                author: "Program Manager, Enterprise Learning Division"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white p-8 rounded-3xl shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <Quote className="w-12 h-12 text-purple-500 mb-6" />
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <p className="text-lg font-semibold text-gray-900">– {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Ready to Deliver Better Labs, Faster?
          </h2>
          <p className="text-2xl text-gray-200 mb-12">
            Talk to us. We'll handle your infra so you can handle your learners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
              <ArrowRight className="mr-3 h-6 w-6" />
              Get a Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 text-xl px-12 py-6 rounded-full backdrop-blur-sm">
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
