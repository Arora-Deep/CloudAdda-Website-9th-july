
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Zap, MessageCircle, Target, CheckCircle, Clock, Shield, Wrench, Users, BookOpen, Code, Monitor } from "lucide-react";
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

      {/* Hero Section - Matching Homepage Style */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200">
                <Zap className="mr-2 h-4 w-4" />
                Training Infrastructure That Actually Works
              </div>
              
              <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                Stop Fighting Infrastructure.
                <span className="block text-purple-600">Start Teaching.</span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600 leading-relaxed">
                You bring the training content. We deliver rock-solid lab environments that scale instantly, never crash mid-session, and let your students focus on learning.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Request Your Custom Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flowing Timeline - The Problem Journey */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Journey Every Trainer Knows Too Well</h2>
            <p className="text-xl text-gray-600">Sound familiar?</p>
          </div>
          
          <div className="relative">
            {/* Flowing Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
              <path
                d="M 100 200 Q 300 100 500 200 T 900 200 Q 1000 150 1100 200"
                stroke="#e5e7eb"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                className="animate-pulse"
              />
            </svg>
            
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {[
                { 
                  step: "1", 
                  title: "Setup Hell", 
                  desc: "Hours wasted configuring VMs that should take minutes",
                  icon: Clock,
                  position: "top"
                },
                { 
                  step: "2", 
                  title: "Mid-Session Crashes", 
                  desc: "Labs fail when you need them most, in front of paying students",
                  icon: Shield,
                  position: "bottom"
                },
                { 
                  step: "3", 
                  title: "Support Nightmare", 
                  desc: "Ticket systems, bots, and endless waiting for real help",
                  icon: MessageCircle,
                  position: "top"
                },
                { 
                  step: "4", 
                  title: "Reputation Damage", 
                  desc: "Students lose confidence, reviews suffer, business hurts",
                  icon: Target,
                  position: "bottom"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative ${item.position === 'bottom' ? 'mt-20' : ''} group hover:scale-105 transition-all duration-500`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors">
                        <item.icon className="w-8 h-8 text-red-500" />
                      </div>
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Reveal */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Then CloudAdda Changes Everything</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
              {[
                {
                  title: "Hours → Minutes",
                  subtitle: "Lab Provisioning",
                  description: "Share your specs today. Training-ready environments tomorrow. No more weekend setup marathons.",
                  icon: Clock,
                  metric: "60x faster"
                },
                {
                  title: "Crashes → Rock Solid",
                  subtitle: "Reliability",
                  description: "Purpose-built for training loads. Your labs stay up when it matters most.",
                  icon: Shield,
                  metric: "99.9% uptime"
                },
                {
                  title: "Bots → Real Engineers",
                  subtitle: "Support",
                  description: "Every ticket gets an actual human who understands infrastructure. No templates, no delays.",
                  icon: MessageCircle,
                  metric: "< 2hr response"
                }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="h-full bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-500 hover:shadow-2xl">
                    <div className="flex flex-col h-full">
                      <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                        <item.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-purple-600 font-semibold mb-4">{item.subtitle}</p>
                        <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                      </div>
                      
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">{item.metric}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Feature Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for Every Type of Training</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Code,
                  title: "Developer Bootcamps",
                  description: "Full-stack environments with pre-configured toolchains, databases, and deployment pipelines."
                },
                {
                  icon: Shield,
                  title: "Cybersecurity Training",
                  description: "Isolated attack/defense scenarios with realistic network topologies and vulnerable systems."
                },
                {
                  icon: Users,
                  title: "Corporate L&D",
                  description: "Scalable environments for enterprise upskilling programs with SSO integration."
                },
                {
                  icon: BookOpen,
                  title: "Technical Certification",
                  description: "Exam-ready labs that mirror real certification testing environments."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                    <item.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold text-gray-900">Lab Environment Status</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-600">All Systems Operational</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Active Labs", value: "847", change: "+12%" },
                      { label: "Students Online", value: "2,341", change: "+8%" },
                      { label: "Avg Response Time", value: "23ms", change: "-5%" },
                      { label: "Uptime", value: "99.98%", change: "+0.02%" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                        <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials - Floating Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trainers Who Made the Switch</h2>
            <p className="text-xl text-gray-600">Real stories from real training companies</p>
          </div>
          
          <div className="relative min-h-96">
            {[
              {
                quote: "We went from 6-hour setup marathons to 15-minute lab deployments. Our trainers actually get to train now.",
                author: "Tech Bootcamp Director",
                company: "Major Training Company",
                position: "left",
                delay: "0s"
              },
              {
                quote: "No more mid-session crashes. Our student satisfaction scores jumped 40% in the first month.",
                author: "Lead Instructor",
                company: "Cybersecurity Academy",
                position: "right",
                delay: "0.5s"
              },
              {
                quote: "CloudAdda's support team actually knows what they're talking about. It's refreshing.",
                author: "Training Operations Manager",
                company: "Enterprise L&D Team",
                position: "center",
                delay: "1s"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-80 animate-fade-in opacity-0 hover:scale-105 transition-all duration-500 ${
                  testimonial.position === 'left' ? 'left-0 top-0' :
                  testimonial.position === 'right' ? 'right-0 top-20' :
                  'left-1/2 bottom-0 transform -translate-x-1/2'
                }`}
                style={{ animationDelay: testimonial.delay, animationFillMode: 'forwards' }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                  <div className="mb-6">
                    <div className="text-4xl text-purple-500 mb-4">"</div>
                    <p className="text-gray-700 leading-relaxed italic">{testimonial.quote}</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Focus on What You Do Best?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Stop wrestling with infrastructure. Start delivering exceptional training experiences.
          </p>
          
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Your Custom Lab Quote
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

export default TrainingLabs;
