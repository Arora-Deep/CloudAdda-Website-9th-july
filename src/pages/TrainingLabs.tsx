import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Zap, MessageCircle, Target, CheckCircle, Clock, Shield, Wrench, Users, BookOpen, Code, Monitor, Star, Award, TrendingUp, AlertTriangle, DollarSign, Activity, Rocket, Globe, Server, Database, Brain, BarChart3, Building, Lightbulb, FileCheck, Headphones, Gauge, Laptop } from "lucide-react";
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
      <section className="relative overflow-hidden bg-white pt-16 pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200">
                <Zap className="mr-2 h-4 w-4" />
                Training Infrastructure That Actually Works
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Stop Fighting Infrastructure.
                <span className="block text-purple-600">Start Teaching.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                You bring the training content. We deliver rock-solid lab environments that scale instantly, never crash mid-session, and let your students focus on learning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Request Your Custom Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  See How It Works
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">60x</div>
                  <div className="text-sm text-gray-600">Faster Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-600">Session Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">&lt; 2hr</div>
                  <div className="text-sm text-gray-600">Support Response</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Professional trainer presenting to engaged students with laptops]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Trainer's Nightmare Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Every Trainer's Worst Nightmare</h2>
            <p className="text-xl text-gray-600">We've been there. The pain is real.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Stressed trainer looking at crashed computers with confused students]
              </div>
            </div>

            <div className="space-y-8">
              {[
                {
                  disaster: "The Friday Night Setup Marathon",
                  reality: "You spend your entire weekend configuring 50 VMs that should have taken 30 minutes to deploy.",
                  impact: "Your family asks why you hate them.",
                  icon: Clock
                },
                {
                  disaster: "The Mid-Session Crash Apocalypse",
                  reality: "20 minutes into your $2,000/student bootcamp, half the labs crash. Students stare at you. Silence.",
                  impact: "Your reputation dies in real-time.",
                  icon: AlertTriangle
                },
                {
                  disaster: "The Support Ticket Black Hole",
                  reality: "Critical issue at 2 AM. You get a bot response asking if you've tried restarting. Your session is in 6 hours.",
                  impact: "You contemplate career changes.",
                  icon: MessageCircle
                },
                {
                  disaster: "The Bill Shock Surprise",
                  reality: "Your $500 cloud bill becomes $2,800 because students left instances running during a break.",
                  impact: "Your CFO questions your sanity.",
                  icon: DollarSign
                }
              ].map((nightmare, index) => (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <nightmare.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{nightmare.disaster}</h3>
                        <p className="text-gray-600 mb-2 leading-relaxed">{nightmare.reality}</p>
                        <p className="text-sm text-red-600 font-semibold italic">{nightmare.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Fix Everything Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We End Your Infrastructure Nightmare</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Minutes, Not Marathons",
                subtitle: "Lab Environment Creation",
                description: "Share your requirements today. Get production-ready training labs tomorrow. Pre-configured, tested, and ready for 1000+ concurrent students.",
                icon: Clock,
                metric: "60x Faster",
                proof: "From 8 hours to 8 minutes",
                features: ["One-click deployment", "Auto-scaling", "Pre-installed toolchains", "Custom configurations"]
              },
              {
                title: "Rock-Solid Reliability",
                subtitle: "Built for Training Loads",
                description: "Purpose-built infrastructure that handles the chaos of 100 students clicking 'run' simultaneously. No more mid-session crashes.",
                icon: Shield,
                metric: "99.9% Uptime",
                proof: "During training sessions",
                features: ["Dedicated resources", "Load balancing", "Auto-failover", "Real-time monitoring"]
              },
              {
                title: "Engineers, Not Bots",
                subtitle: "Support That Actually Helps",
                description: "Every ticket goes to an engineer who's managed training infrastructure. They understand your pain and fix problems, not create tickets.",
                icon: Users,
                metric: "< 2hr Response",
                proof: "Even at 2 AM on weekends",
                features: ["24/7 human support", "Training specialists", "Emergency hotline", "Proactive monitoring"]
              }
            ].map((solution, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                      <solution.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-purple-600 font-semibold mb-4">{solution.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                      
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">{solution.metric}</div>
                      </div>
                      <div className="text-xs text-gray-500 text-center">{solution.proof}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Types We Master Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Every Type of Training, Perfected</h2>
            <p className="text-xl text-gray-600">From code bootcamps to cybersecurity war games</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  type: "Developer Bootcamps",
                  description: "Full-stack environments with Docker, Kubernetes, CI/CD pipelines, and cloud integrations. Students get production-like setups from day one.",
                  icon: Code,
                  students: "5,000+ trained",
                  specialties: ["React/Vue/Angular", "Node.js/Python/Java", "Docker & K8s", "AWS/Azure/GCP"]
                },
                {
                  type: "Cybersecurity Training",
                  description: "Isolated attack/defense scenarios with vulnerable systems, network monitoring, and forensics tools. Real hacking, safe environment.",
                  icon: Shield,
                  students: "2,000+ certified",
                  specialties: ["Penetration testing", "Network security", "Digital forensics", "Incident response"]
                },
                {
                  type: "Data Science & AI",
                  description: "GPU-accelerated environments with Jupyter, TensorFlow, PyTorch, and massive datasets. Train ML models without laptop melting.",
                  icon: Brain,
                  students: "1,500+ graduates",
                  specialties: ["Machine learning", "Deep learning", "Big data", "MLOps pipelines"]
                },
                {
                  type: "Corporate Upskilling",
                  description: "Enterprise-grade labs with SSO integration, compliance controls, and progress tracking. Scale from 10 to 10,000 employees.",
                  icon: Users,
                  students: "50,000+ employees",
                  specialties: ["Cloud migration", "DevOps practices", "Security awareness", "Digital transformation"]
                }
              ].map((training, index) => (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <training.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{training.type}</h3>
                          <span className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">{training.students}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">{training.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {training.specialties.map((specialty, sIndex) => (
                            <span key={sIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Split-screen showing coding bootcamp, cybersecurity lab, AI training, and corporate classroom]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Success Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trainers Who Escaped Infrastructure Hell</h2>
            <p className="text-xl text-gray-600">Real stories. Real pain relief. Real results.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                story: "From 6-hour setup marathons to 15-minute deployments. Our weekend lives are back.",
                trainer: "Priya Sharma",
                role: "Technical Training Director",
                company: "Major Indian IT Training Company",
                students: "2,000+ students/month",
                improvement: "95% time savings on setup",
                rating: 5,
                details: "We run React, Node.js, and AWS certification programs. Before CloudAdda, I spent every Friday night setting up environments. Now? Click deploy, go home, enjoy family dinner."
              },
              {
                story: "Zero crashes in 8 months. Our student satisfaction scores jumped from 3.2 to 4.8.",
                trainer: "Marcus Johnson",
                role: "Lead Cybersecurity Instructor",
                company: "Cybersecurity Academy",
                students: "500+ ethical hackers trained",
                improvement: "100% session reliability",
                rating: 5,
                details: "Penetration testing labs need isolated networks and vulnerable systems. CloudAdda's cyber ranges are the real deal - students feel like they're in a real corporate environment."
              },
              {
                story: "Their support team fixed our Docker orchestration issue at 11 PM on Sunday. I almost cried.",
                trainer: "Sarah Kim",
                role: "DevOps Training Manager",
                company: "Enterprise L&D Team",
                students: "10,000+ employees upskilled",
                improvement: "24/7 real human support",
                rating: 5,
                details: "We're training developers across 15 time zones. When something breaks at midnight in Mumbai, CloudAdda engineers are online and fixing it. Not bots, real people who know infrastructure."
              }
            ].map((success, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(success.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 italic">"{success.story}"</p>
                    
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{success.details}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-purple-50 rounded-xl p-3">
                          <div className="text-sm font-semibold text-purple-600">{success.students}</div>
                        </div>
                        <div className="bg-green-50 rounded-xl p-3">
                          <div className="text-sm font-semibold text-green-600">{success.improvement}</div>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <div className="font-semibold text-gray-900">{success.trainer}</div>
                        <div className="text-sm text-gray-600">{success.role}</div>
                        <div className="text-xs text-gray-500">{success.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See It In Action</h2>
            <p className="text-xl text-gray-600">Watch a real lab environment deploy in real-time</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Animated deployment sequence with progress bars and success checkmarks]
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">Full-Stack JavaScript Bootcamp Lab</h3>
              <p className="text-lg text-gray-600">300 students, React + Node.js + PostgreSQL + Docker</p>

              <div className="space-y-4">
                {[
                  { task: "Provisioning 300 Ubuntu instances", time: "00:45", status: "complete" },
                  { task: "Installing Node.js, npm, and dependencies", time: "01:30", status: "complete" },
                  { task: "Setting up PostgreSQL databases", time: "00:30", status: "complete" },
                  { task: "Configuring Docker environments", time: "01:15", status: "complete" },
                  { task: "Deploying VS Code Server instances", time: "02:00", status: "complete" },
                  { task: "Running connectivity tests", time: "00:30", status: "complete" },
                  { task: "Sending access credentials", time: "00:15", status: "complete" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{step.task}</span>
                    </div>
                    <span className="text-sm text-gray-500">{step.time}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-lg font-semibold text-green-800">Lab Environment Ready!</span>
                </div>
                <p className="text-green-700">Total deployment time: 6 minutes 45 seconds</p>
                <p className="text-sm text-green-600 mt-1">300 students can now access their personalized coding environments</p>
              </div>

              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                Request Live Demo
                <Activity className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Training Infrastructure That Pays for Itself</h2>
            <p className="text-xl text-gray-600">Stop bleeding money on broken infrastructure</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">The Hidden Costs of DIY Training Infrastructure</h3>
              
              <div className="space-y-6">
                {[
                  { cost: "Weekend Setup Time", amount: "₹50,000/month", description: "Your time @ ₹2,000/hour × 25 hours/month" },
                  { cost: "Failed Session Recovery", amount: "₹1,00,000/incident", description: "Refunds + reputation damage + re-training costs" },
                  { cost: "Over-provisioned Resources", amount: "₹30,000/month", description: "Always buying 3x capacity 'just in case'" },
                  { cost: "Support Ticket Delays", amount: "₹25,000/month", description: "Lost productivity waiting for vendor support" }
                ].map((cost, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-red-50 rounded-xl border border-red-200">
                    <div>
                      <div className="font-semibold text-red-800">{cost.cost}</div>
                      <div className="text-sm text-red-600">{cost.description}</div>
                    </div>
                    <div className="text-lg font-bold text-red-700">{cost.amount}</div>
                  </div>
                ))}
              </div>

              <div className="bg-red-100 border border-red-300 rounded-xl p-6">
                <div className="text-2xl font-bold text-red-800 mb-2">Total Hidden Costs: ₹2,05,000/month</div>
                <div className="text-red-700">And that's just for a small training company!</div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">CloudAdda Training Labs</h3>
              
              <div className="bg-white border-2 border-purple-200 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-purple-600 mb-2">₹15,000</div>
                  <div className="text-gray-600">per 100 students/month</div>
                  <div className="text-sm text-green-600 font-medium">Flat rate, all-inclusive</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited lab deployments",
                    "Auto-scaling infrastructure", 
                    "24/7 human support",
                    "Custom environment setup",
                    "Student progress tracking",
                    "SSO integration",
                    "Free migrations",
                    "99.9% uptime SLA"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-4 text-lg font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-green-800 mb-2">You Save: ₹1,90,000/month</div>
                <div className="text-green-700">ROI payback in less than 2 weeks</div>
              </div>
            </div>
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Your Custom Lab Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-16 py-6 text-xl border-gray-300 hover:bg-gray-50">
              Watch Live Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15,000+</div>
              <div className="text-gray-600">Students Trained Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Training Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Session Success Rate</div>
            </div>
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
