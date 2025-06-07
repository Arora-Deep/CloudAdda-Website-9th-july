import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Zap, MessageCircle, Target, CheckCircle, Clock, Shield, Wrench, Users, BookOpen, Code, Monitor, Star, Award, TrendingUp, AlertTriangle, DollarSign, Activity, Rocket, Globe, Server, Database, Brain, BarChart3, Building, Lightbulb, FileCheck, Headphones, Gauge, Laptop, Timer, TrendingDown, X, ChevronRight, ThumbsUp } from "lucide-react";
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

      {/* Before vs After Comparison */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Dramatic Before & After</h2>
            <p className="text-xl text-gray-600">See what changes when you stop fighting infrastructure</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Before CloudAdda */}
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">Before CloudAdda</h3>
              </div>

              <div className="space-y-6">
                {[
                  { metric: "Lab Setup Time", value: "8-12 hours", impact: "Every weekend gone" },
                  { metric: "Session Failures", value: "15-30%", impact: "Student complaints daily" },
                  { metric: "Support Response", value: "2-5 days", impact: "Critical issues unresolved" },
                  { metric: "Infrastructure Costs", value: "₹2,50,000/month", impact: "Budget constantly overrun" },
                  { metric: "Trainer Stress Level", value: "Through the roof", impact: "Burnout inevitable" },
                  { metric: "Student Satisfaction", value: "2.8/5", impact: "Poor reviews, low retention" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl border border-red-200">
                    <div>
                      <div className="font-semibold text-gray-900">{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.impact}</div>
                    </div>
                    <div className="text-lg font-bold text-red-600">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* After CloudAdda */}
            <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">After CloudAdda</h3>
              </div>

              <div className="space-y-6">
                {[
                  { metric: "Lab Setup Time", value: "8 minutes", impact: "Weekends back to family" },
                  { metric: "Session Failures", value: "< 0.1%", impact: "Students love reliability" },
                  { metric: "Support Response", value: "< 47 minutes", impact: "Issues solved instantly" },
                  { metric: "Infrastructure Costs", value: "₹45,000/month", impact: "80% cost reduction" },
                  { metric: "Trainer Stress Level", value: "Completely relaxed", impact: "Focus on teaching" },
                  { metric: "Student Satisfaction", value: "4.8/5", impact: "Glowing reviews, high retention" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl border border-green-200">
                    <div>
                      <div className="font-semibold text-gray-900">{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.impact}</div>
                    </div>
                    <div className="text-lg font-bold text-green-600">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 inline-block">
              <div className="text-3xl font-bold text-purple-600 mb-2">82% Cost Reduction</div>
              <div className="text-gray-600 mb-4">Average savings reported by our training partners</div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                Calculate Your Savings
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Everyone's Switching to CloudAdda</h2>
            <p className="text-xl text-gray-600">The honest comparison table your IT budget wishes you'd seen sooner</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-6 bg-purple-50 font-bold text-purple-600 rounded-tl-3xl">CloudAdda</th>
                  <th className="text-center p-6 font-semibold text-gray-600">AWS/Azure</th>
                  <th className="text-center p-6 font-semibold text-gray-600">DigitalOcean</th>
                  <th className="text-center p-6 font-semibold text-gray-600">DIY Solution</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Setup Time (100 students)",
                    cloudAdda: "8 minutes",
                    aws: "6-8 hours",
                    do: "4-6 hours", 
                    diy: "8-12 hours"
                  },
                  {
                    feature: "Training-Specific Infrastructure",
                    cloudAdda: "✓ Purpose-built",
                    aws: "✗ Generic VMs",
                    do: "✗ Basic droplets",
                    diy: "✗ Manual config"
                  },
                  {
                    feature: "Human Support Response",
                    cloudAdda: "< 47 minutes",
                    aws: "4-24 hours",
                    do: "2-8 hours",
                    diy: "You're on your own"
                  },
                  {
                    feature: "Training Session Uptime",
                    cloudAdda: "99.9%",
                    aws: "99.5%",
                    do: "99.0%",
                    diy: "85-95%"
                  },
                  {
                    feature: "Cost (100 students/month)",
                    cloudAdda: "₹15,000",
                    aws: "₹35,000+",
                    do: "₹28,000+",
                    diy: "₹45,000+"
                  },
                  {
                    feature: "Auto-scaling",
                    cloudAdda: "✓ Instant",
                    aws: "✗ Manual",
                    do: "✗ Manual",
                    diy: "✗ Not available"
                  },
                  {
                    feature: "Student Progress Tracking",
                    cloudAdda: "✓ Built-in",
                    aws: "✗ Not included",
                    do: "✗ Not included",
                    diy: "✗ Build yourself"
                  },
                  {
                    feature: "Free Migration",
                    cloudAdda: "✓ White-glove",
                    aws: "✗ Pay extra",
                    do: "✗ DIY only",
                    diy: "✗ N/A"
                  }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center bg-purple-50 font-bold text-purple-600">{row.cloudAdda}</td>
                    <td className="p-6 text-center text-gray-600">{row.aws}</td>
                    <td className="p-6 text-center text-gray-600">{row.do}</td>
                    <td className="p-6 text-center text-gray-600">{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 inline-block">
              <div className="text-lg font-bold text-purple-800 mb-2">Ready to make the switch?</div>
              <div className="text-purple-600 mb-4">Join 500+ training companies who've already migrated</div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                Get Migration Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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

      {/* ROI Calculator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your ROI Will Shock You</h2>
            <p className="text-xl text-gray-600">Real numbers from real training companies</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: CFO looking shocked at positive ROI numbers on a large calculator]
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900">The CloudAdda ROI Formula</h3>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Monthly Cost Breakdown</h4>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-sm text-gray-600">Before CloudAdda</div>
                    <div className="text-2xl font-bold text-red-600">₹2,50,000</div>
                    <div className="text-xs text-gray-500">All hidden costs included</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="text-sm text-gray-600">With CloudAdda</div>
                    <div className="text-2xl font-bold text-green-600">₹45,000</div>
                    <div className="text-xs text-gray-500">All-inclusive flat rate</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">₹2,05,000 Saved/Month</div>
                    <div className="text-green-700 font-semibold">₹24,60,000 Annual Savings</div>
                    <div className="text-sm text-gray-600 mt-2">ROI Payback Period: 12 days</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900">What Our Customers Do With The Savings:</h4>
                {[
                  "Hire 3 additional senior trainers",
                  "Expand to 2 new training locations", 
                  "Invest in advanced curriculum development",
                  "Offer more competitive pricing to students"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4">
                Calculate My Exact Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Zero Risk, Maximum Reward</h2>
            <p className="text-xl text-gray-600">We've eliminated every possible reason to say no</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                risk: "What if it doesn't work for our specific training?",
                mitigation: "30-Day Money-Back Guarantee",
                description: "Try it risk-free for a full month. If you're not completely satisfied, we'll refund every penny and migrate you back for free.",
                icon: Shield,
                proof: "Zero refund requests in 24 months"
              },
              {
                risk: "What if we lose our existing setup during migration?",
                mitigation: "White-Glove Migration Service",
                description: "Our engineers handle everything. We keep your old system running until the new one is perfect. Zero downtime guaranteed.",
                icon: Wrench,
                proof: "300+ successful migrations, 0 data loss"
              },
              {
                risk: "What if your support isn't as good as promised?",
                mitigation: "SLA-Backed Support Guarantee",
                description: "If we don't respond within 2 hours, your next month is free. If we can't solve your issue in 24 hours, we'll find someone who can.",
                icon: Timer,
                proof: "99.7% SLA achievement rate"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.risk}</h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-4">{item.mitigation}</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                <div className="bg-purple-50 rounded-xl p-3 text-center">
                  <div className="text-sm font-medium text-purple-700">{item.proof}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Not Convinced?</h3>
              <p className="text-gray-600 mb-6">Talk to our current customers directly</p>
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-3">
                Get Customer References
                <Users className="ml-2 h-4 w-4" />
              </Button>
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

      {/* Implementation Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">From Signup to Success in 48 Hours</h2>
            <p className="text-xl text-gray-600">The fastest training infrastructure deployment you've ever seen</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    day: "Day 1",
                    time: "Hour 1-2",
                    task: "Initial Consultation & Requirements Gathering",
                    description: "Our training infrastructure specialists understand your exact needs, student count, and technical requirements.",
                    status: "complete"
                  },
                  {
                    day: "Day 1", 
                    time: "Hour 3-8",
                    task: "Environment Design & Configuration",
                    description: "We design your custom training environment with all tools, languages, and integrations you need.",
                    status: "complete"
                  },
                  {
                    day: "Day 1",
                    time: "Hour 9-24",
                    task: "Infrastructure Provisioning & Testing",
                    description: "Your training labs are built, tested, and optimized for your specific curriculum and load patterns.",
                    status: "complete"
                  },
                  {
                    day: "Day 2",
                    time: "Hour 25-36",
                    task: "Data Migration & Integration Setup",
                    description: "We migrate your existing training materials and integrate with your LMS, SSO, and monitoring tools.",
                    status: "complete"
                  },
                  {
                    day: "Day 2",
                    time: "Hour 37-42",
                    task: "Team Training & Knowledge Transfer",
                    description: "Your team learns the platform, gets admin access, and receives documentation for ongoing management.",
                    status: "complete"
                  },
                  {
                    day: "Day 2",
                    time: "Hour 43-48",
                    task: "Go-Live & Success Validation",
                    description: "First live training session runs successfully with full monitoring and our team standing by.",
                    status: "complete"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{step.day}</span>
                        <span className="text-sm text-gray-500">{step.time}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.task}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Timeline visualization with checkmarks and happy team celebrating successful deployment]
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8 inline-block">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Average Implementation Time: 28 Hours</h3>
              <p className="text-green-700 mb-6">vs 2-3 months with traditional solutions</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                Start Your 48-Hour Journey
                <Rocket className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-white">
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
