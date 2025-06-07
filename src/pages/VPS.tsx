import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Cpu, HardDrive, Globe, TrendingUp, Brain, BarChart3, CheckCircle, Zap, Server, Database, Settings, Rocket, Activity, Award, Users, Shield, Clock, DollarSign, Wrench, AlertTriangle, Star, Linkedin, Twitter, Github, Mail, Phone, MapPin, X, ChevronRight, ThumbsUp, Timer, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const VPS = () => {
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
                <Server className="mr-2 h-4 w-4" />
                VPS Hosting That Actually Delivers
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Power Without
                <span className="block text-purple-600">The BS.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                NVMe speed, AMD EPYC cores, and real human support at half the price of AWS. No throttling, no surprises, no regrets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Deploy Your VPS Now
                  <Server className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  View Live Benchmarks
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">99.98%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">&lt; 2hr</div>
                  <div className="text-sm text-gray-600">Support Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Developer working on modern laptop with server connections]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Painful Reality Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Painful Reality of VPS Shopping</h2>
            <p className="text-xl text-gray-600">Every developer's nightmare, solved once and for all</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  pain: "Shared Resources Lie",
                  reality: "Your 'dedicated' 4GB RAM becomes 1GB when the neighbor's Bitcoin miner starts up",
                  icon: AlertTriangle
                },
                {
                  pain: "Support Ticket Hell",
                  reality: "48 hours to get a copy-paste response that doesn't solve your midnight server crash",
                  icon: Clock
                },
                {
                  pain: "Bill Shock Syndrome",
                  reality: "Your $20/month VPS becomes $200 because they count every byte of bandwidth",
                  icon: DollarSign
                },
                {
                  pain: "Performance Roulette",
                  reality: "Some days your API responds in 50ms, other days it's 5 seconds. Nobody knows why.",
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.pain}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.reality}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Frustrated developer pulling hair looking at crashed server dashboard]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Fix Every Single Pain Point</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "True Dedicated Resources",
                subtitle: "Your cores are YOURS",
                description: "When we say 4 vCPUs, you get 4 full AMD EPYC cores. No sharing, no throttling, no lies. We partition hardware at the hypervisor level.",
                icon: Cpu,
                metric: "100% Dedicated",
                proof: "Live resource monitor shows real allocation"
              },
              {
                title: "Human-First Support",
                subtitle: "Engineers, not bots",
                description: "Every ticket goes to a real engineer who's built production systems. No chatbots, no scripts, no 'have you tried turning it off and on again?'",
                icon: Users,
                metric: "< 2hr Response",
                proof: "Average first response: 47 minutes"
              },
              {
                title: "Transparent Pricing",
                subtitle: "No surprise bills",
                description: "Flat monthly rate includes everything. Unlimited bandwidth, free backups, no hidden fees. Your bill will be exactly what we quote.",
                icon: DollarSign,
                metric: "50% Less Cost",
                proof: "vs AWS/Azure/GCP equivalent specs"
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

      {/* Developer Reality Check */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Developer's Daily Reality Check</h2>
            <p className="text-xl text-gray-600">Stop us when this sounds familiar...</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* The Horror Stories */}
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-8 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3" />
                Your Current VPS Nightmare
              </h3>

              <div className="space-y-6">
                {[
                  {
                    scenario: "The 3 AM Production Crash",
                    reality: "Your side project that became your main income source just went down. Support ticket response: 'Have you tried restarting?'",
                    pain: "Your users are tweeting complaints while you panic-Google solutions"
                  },
                  {
                    scenario: "The Mysterious Throttling",
                    reality: "Your API was responding in 200ms yesterday, today it's 3 seconds. Nobody can tell you why. 'Network congestion' they say.",
                    pain: "Your biggest client threatens to leave"
                  },
                  {
                    scenario: "The Bill Shock Monday",
                    reality: "Your $20/month VPS bill is now $180 because you forgot to set up billing alerts and they count every byte.",
                    pain: "There goes your coffee budget for the month"
                  },
                  {
                    scenario: "The Documentation Lie",
                    reality: "The setup guide was written in 2019, half the commands don't work, and the Discord community ghosted you.",
                    pain: "You've spent 6 hours on something that should take 10 minutes"
                  }
                ].map((horror, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-red-200">
                    <h4 className="font-bold text-red-800 mb-2">{horror.scenario}</h4>
                    <p className="text-gray-700 mb-3">{horror.reality}</p>
                    <p className="text-sm text-red-600 italic font-semibold">{horror.pain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The CloudAdda Solution */}
            <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-8 flex items-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                Your CloudAdda Reality
              </h3>

              <div className="space-y-6">
                {[
                  {
                    scenario: "The 3 AM Peace of Mind",
                    reality: "Your app hasn't gone down in 8 months. When you had a question at 2 AM, a real engineer responded in 23 minutes.",
                    joy: "You sleep through the night knowing your infrastructure is bulletproof"
                  },
                  {
                    scenario: "The Consistent Performance",
                    reality: "Your API responds in 180-220ms consistently. Every day. Every month. The performance graphs are boringly stable.",
                    joy: "Your biggest client just signed a 3-year contract"
                  },
                  {
                    scenario: "The Predictable Bill",
                    reality: "Your bill is exactly ₹1,399 every month. No surprises. No hidden fees. No 'network utilization charges' nonsense.",
                    joy: "You can actually budget for your infrastructure"
                  },
                  {
                    scenario: "The Documentation That Works",
                    reality: "Copy-paste the commands from our docs. They work. First try. Every time. Recent screenshots included.",
                    joy: "You deployed your app in 12 minutes and went back to coding"
                  }
                ].map((joy, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-green-200">
                    <h4 className="font-bold text-green-800 mb-2">{joy.scenario}</h4>
                    <p className="text-gray-700 mb-3">{joy.reality}</p>
                    <p className="text-sm text-green-600 italic font-semibold">{joy.joy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 inline-block">
              <div className="text-3xl font-bold text-purple-600 mb-2">Join 10,000+ Happy Developers</div>
              <div className="text-gray-600 mb-4">Who stopped fighting infrastructure and started building</div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                End Your VPS Nightmare Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real vs Marketing Specs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Marketing Specs vs Reality</h2>
            <p className="text-xl text-gray-600">What they promise vs what you actually get</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">What You Get</th>
                  <th className="text-center p-6 bg-purple-50 font-bold text-purple-600">CloudAdda VPS</th>
                  <th className="text-center p-6 font-semibold text-gray-600">AWS t3.medium</th>
                  <th className="text-center p-6 font-semibold text-gray-600">DigitalOcean</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Linode</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    spec: "Advertised RAM",
                    cloudAdda: "4GB (Actually 4GB)",
                    aws: "4GB (2.8GB usable)",
                    do: "4GB (3.2GB usable)",
                    linode: "4GB (3.4GB usable)"
                  },
                  {
                    spec: "CPU Performance (PassMark)",
                    cloudAdda: "AMD EPYC (12,400)",
                    aws: "Intel Xeon (6,200)",
                    do: "Intel Xeon (7,100)",
                    linode: "AMD EPYC (9,800)"
                  },
                  {
                    spec: "Storage IOPS",
                    cloudAdda: "50,000+ (Real NVMe)",
                    aws: "3,000 (EBS gp3)",
                    do: "7,000 (SSD)",
                    linode: "25,000 (NVMe)"
                  },
                  {
                    spec: "Network Speed (Real World)",
                    cloudAdda: "950 Mbps consistent",
                    aws: "450 Mbps (throttled)",
                    do: "600 Mbps (varies)",
                    linode: "700 Mbps (peak)"
                  },
                  {
                    spec: "Monthly Cost (No Hidden Fees)",
                    cloudAdda: "₹1,399 (All included)",
                    aws: "₹2,200+ (After data transfer)",
                    do: "₹1,800+ (After bandwidth)",
                    linode: "₹1,600+ (After backups)"
                  },
                  {
                    spec: "Setup Time",
                    cloudAdda: "60 seconds",
                    aws: "10+ minutes",
                    do: "3-5 minutes",
                    linode: "2-4 minutes"
                  },
                  {
                    spec: "Support Response (Real Human)",
                    cloudAdda: "47 minutes average",
                    aws: "4-24 hours",
                    do: "2-8 hours",
                    linode: "1-4 hours"
                  },
                  {
                    spec: "DDoS Protection",
                    cloudAdda: "Included (No extra cost)",
                    aws: "₹3,000+/month extra",
                    do: "₹1,200+/month extra",
                    linode: "₹800+/month extra"
                  }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-semibold text-gray-900">{row.spec}</td>
                    <td className="p-6 text-center bg-purple-50 font-bold text-purple-600">{row.cloudAdda}</td>
                    <td className="p-6 text-center text-gray-600">{row.aws}</td>
                    <td className="p-6 text-center text-gray-600">{row.do}</td>
                    <td className="p-6 text-center text-gray-600">{row.linode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 inline-block">
              <div className="text-lg font-bold text-purple-800 mb-2">Transparency Promise</div>
              <div className="text-purple-600 mb-4">What we advertise is what you get. No fine print, no gotchas.</div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                See Live Benchmarks
                <Activity className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Superiority Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Built Different From The Ground Up</h2>
              <p className="text-xl text-gray-600">While others cut corners, we invested in the infrastructure you actually need.</p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "NVMe Storage", value: "100%", desc: "Pure NVMe, no hybrid nonsense" },
                  { label: "AMD EPYC", value: "Latest Gen", desc: "64-core server processors" },
                  { label: "DDR4 RAM", value: "ECC", desc: "Error-correcting memory" },
                  { label: "Network", value: "10Gbps", desc: "Backbone connectivity" }
                ].map((spec, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">{spec.value}</div>
                    <div className="font-semibold text-gray-900">{spec.label}</div>
                    <div className="text-sm text-gray-600">{spec.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Live Performance Comparison</h4>
                <div className="space-y-3">
                  {[
                    { provider: "CloudAdda VPS", speed: "1,247 MB/s", bar: 100 },
                    { provider: "AWS t3.medium", speed: "387 MB/s", bar: 31 },
                    { provider: "DigitalOcean", speed: "445 MB/s", bar: 36 },
                    { provider: "Linode", speed: "523 MB/s", bar: 42 }
                  ].map((bench, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className={index === 0 ? "font-bold text-purple-600" : "text-gray-600"}>{bench.provider}</span>
                        <span className={index === 0 ? "font-bold text-purple-600" : "text-gray-600"}>{bench.speed}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${index === 0 ? "bg-purple-500" : "bg-gray-400"}`}
                          style={{ width: `${bench.bar}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Modern server racks with glowing connections and data flow]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Developers Who Switched & Never Looked Back</h2>
            <p className="text-xl text-gray-600">Real stories from real developers building real products</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                developer: "Arjun Patel",
                title: "Full-Stack Developer",
                company: "SaaS Startup Founder",
                project: "Customer analytics platform",
                problem: "Was paying ₹8,000/month on AWS for unpredictable performance",
                solution: "Migrated to CloudAdda Professional plan",
                result: "Cut costs by 75%, doubled performance, deployed 3 new features",
                quote: "My app went from slow and expensive to fast and affordable. I can finally focus on features instead of infrastructure costs.",
                savings: "₹6,600/month saved",
                rating: 5,
                timeOnPlatform: "14 months"
              },
              {
                developer: "Priya Sharma", 
                title: "DevOps Engineer",
                company: "E-commerce Startup",
                project: "Microservices architecture",
                problem: "Managing 12 different VPS instances across 3 providers",
                solution: "Consolidated to CloudAdda with auto-scaling",
                result: "Reduced from 12 instances to 4, eliminated 90% of downtime",
                quote: "CloudAdda's auto-scaling saved my sanity. Black Friday used to be a nightmare, now it's just another day.",
                savings: "₹15,000/month saved",
                rating: 5,
                timeOnPlatform: "8 months"
              },
              {
                developer: "Rahul Kumar",
                title: "AI/ML Engineer", 
                company: "Freelance Consultant",
                project: "Computer vision APIs",
                problem: "GPU instances too expensive, CPU instances too slow",
                solution: "CloudAdda GPU-optimized VPS",
                result: "10x faster training, 60% cost reduction, happy clients",
                quote: "I was spending more on infrastructure than I was making. CloudAdda turned my side project into my main income.",
                savings: "₹12,000/month saved",
                rating: 5,
                timeOnPlatform: "11 months"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">({story.timeOnPlatform})</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{story.developer}</h3>
                  <p className="text-purple-600 font-semibold">{story.title}</p>
                  <p className="text-sm text-gray-600">{story.company}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Project:</h4>
                    <p className="text-sm text-gray-600">{story.project}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-1">Problem:</h4>
                    <p className="text-sm text-gray-600">{story.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-700 mb-1">Result:</h4>
                    <p className="text-sm text-gray-600">{story.result}</p>
                  </div>
                </div>

                <blockquote className="italic text-gray-700 border-l-4 border-purple-300 pl-4 mb-6">
                  "{story.quote}"
                </blockquote>

                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <div className="text-lg font-bold text-green-600">{story.savings}</div>
                  <div className="text-sm text-green-700">Monthly savings achieved</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Share Your Success Story?</h3>
              <p className="text-gray-600 mb-6">We love featuring developers who've transformed their projects with CloudAdda</p>
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-3">
                Submit Your Story
                <ThumbsUp className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect For Every Workload</h2>
            <p className="text-xl text-gray-600">From weekend projects to unicorn startups</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: "Web Applications", 
                icon: Globe, 
                description: "React, Vue, Django, Rails - your framework runs faster here",
                customers: "2,400+ apps hosted"
              },
              { 
                name: "AI/ML Workloads", 
                icon: Brain, 
                description: "GPU instances for training, inference APIs that actually scale",
                customers: "150+ AI startups"
              },
              { 
                name: "Game Servers", 
                icon: Monitor, 
                description: "Sub-20ms latency, DDoS protection, automatic scaling",
                customers: "500+ game servers"
              },
              { 
                name: "Development", 
                icon: Settings, 
                description: "Staging environments that mirror production perfectly",
                customers: "1,200+ dev teams"
              },
              { 
                name: "E-commerce", 
                icon: BarChart3, 
                description: "Black Friday ready, PCI compliant, always-on monitoring",
                customers: "800+ online stores"
              },
              { 
                name: "Databases", 
                icon: Database, 
                description: "PostgreSQL, MongoDB, Redis - optimized storage layers",
                customers: "3,000+ databases"
              },
              { 
                name: "APIs", 
                icon: Server, 
                description: "REST, GraphQL, microservices with auto-scaling",
                customers: "5,000+ APIs"
              },
              { 
                name: "Startups", 
                icon: Rocket, 
                description: "MVP to IPO, we scale with your growth story",
                customers: "400+ funded startups"
              }
            ].map((useCase, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <useCase.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{useCase.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{useCase.description}</p>
                    <div className="text-xs text-purple-600 font-medium">{useCase.customers}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Success Rate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Migration Success That Speaks Volumes</h2>
            <p className="text-xl text-gray-600">The numbers don't lie: everyone who switches, stays</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Migration success visualization with happy developers and upward trending graphs]
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "Migration Success Rate", value: "100%", description: "Not a single failed migration in 3 years" },
                  { metric: "Zero Downtime Migrations", value: "98.7%", description: "Your users won't even notice the switch" },
                  { metric: "Customer Retention", value: "99.1%", description: "Once they switch, they never leave" },
                  { metric: "Performance Improvement", value: "187%", description: "Average speed increase post-migration" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                    <div className="font-semibold text-gray-900 mb-2">{stat.metric}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Migrations Succeed</h3>
                <ul className="space-y-3">
                  {[
                    "Dedicated migration engineer assigned to your project",
                    "Complete infrastructure audit before we start",
                    "Parallel environment setup (old system stays live)",
                    "DNS cutover during lowest traffic hours",
                    "24-hour monitoring post-migration",
                    "Free rollback guarantee if anything goes wrong"
                  ].map((reason, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4">Recent Migration Testimonial</h4>
                <blockquote className="italic text-gray-700 mb-4">
                  "I was terrified of migrating my production API that serves 50,000 requests/day. CloudAdda's team handled everything flawlessly. Zero downtime, 40% performance boost, and my users actually thanked me for the speed improvement."
                </blockquote>
                <div className="text-sm text-gray-600">
                  <strong>Vikash Singh</strong> - Backend Developer, FinTech Startup
                </div>
              </div>

              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 w-full">
                Get Free Migration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing That Makes CFOs Smile</h2>
            <p className="text-xl text-gray-600">No hidden fees. No surprise bills. No BS.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Starter", 
                price: "₹799", 
                period: "/month",
                originalPrice: "₹1,599",
                specs: ["2 vCPU (AMD EPYC)", "4GB ECC RAM", "50GB NVMe SSD", "1TB Transfer", "Full Root Access", "24/7 Human Support"],
                popular: false,
                description: "Perfect for small projects and APIs",
                savings: "50% off vs competition"
              },
              { 
                name: "Professional", 
                price: "₹1,399", 
                period: "/month",
                originalPrice: "₹2,799",
                specs: ["4 vCPU (AMD EPYC)", "8GB ECC RAM", "100GB NVMe SSD", "2TB Transfer", "Free Backups", "Priority Support", "DDoS Protection"],
                popular: true,
                description: "Ideal for production applications",
                savings: "50% off vs AWS equivalent"
              },
              { 
                name: "Performance", 
                price: "₹2,799", 
                period: "/month",
                originalPrice: "₹5,599",
                specs: ["8 vCPU (AMD EPYC)", "16GB ECC RAM", "200GB NVMe SSD", "4TB Transfer", "Load Balancer", "Managed Backups", "White-glove Migration"],
                popular: false,
                description: "For high-traffic, demanding workloads",
                savings: "50% off vs enterprise hosting"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-purple-50 border-2 border-purple-500 shadow-2xl scale-105' 
                    : 'bg-white border-2 border-gray-200 hover:border-purple-300 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-purple-500 text-white rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    </div>
                    <span className="text-gray-600">{plan.period}</span>
                    <div className="text-sm text-green-600 font-medium mt-1">{plan.savings}</div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.specs.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full rounded-full py-3 text-lg font-semibold ${
                      plan.popular 
                        ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Deploy in 60 Seconds
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-600">All plans include instant setup, free migrations, and 30-day money-back guarantee</p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>99.98% SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>60s Deployment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Human Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by 10,000+ Developers</h2>
            <p className="text-xl text-gray-600">From weekend warriors to unicorn CTOs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  quote: "We migrated from AWS and cut our hosting costs by 60%. Same performance, better support, zero downtime migration.",
                  author: "Rajesh Kumar",
                  title: "CTO, TechStartup",
                  company: "Series A Startup",
                  rating: 5
                },
                {
                  quote: "Their support team actually knows what they're talking about. Fixed our Redis clustering issue in 20 minutes.",
                  author: "Sarah Chen",
                  title: "Lead DevOps Engineer",
                  company: "E-commerce Platform",
                  rating: 5
                },
                {
                  quote: "Been running our ML training pipelines here for 8 months. Never had a single outage during our critical batch jobs.",
                  author: "David Rodriguez",
                  title: "ML Engineering Manager",
                  company: "AI Company",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Diverse group of happy developers giving thumbs up]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Assistance Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We'll Move Your Stuff (For Free)</h2>
            <p className="text-xl text-gray-600">Zero-downtime migration from any provider</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Free Migration Assessment",
                description: "Our engineers audit your current setup and plan the perfect migration strategy. No obligation, completely free.",
                icon: Activity
              },
              {
                step: "2", 
                title: "Zero-Downtime Transfer",
                description: "We handle everything - DNS, databases, SSL certs, configurations. Your users won't notice a thing.",
                icon: Wrench
              },
              {
                step: "3",
                title: "30-Day Safety Net",
                description: "Don't like it? We'll migrate you back for free. But in 3 years, nobody has asked for a rollback.",
                icon: Shield
              }
            ].map((step, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-12 py-4 text-lg">
              Get Free Migration Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-gray-600 mt-4">Usually takes 2-4 hours, always free, zero risk</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready for VPS That Actually Works?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Deploy in 60 seconds. Scale in real-time. Support that cares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Deploy Your VPS Now
              <Server className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-16 py-6 text-xl border-gray-300 hover:bg-gray-50">
              Talk to an Engineer
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10,000+</div>
              <div className="text-gray-600">Happy Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">99.98%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">47min</div>
              <div className="text-gray-600">Avg Support Response</div>
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

export default VPS;
