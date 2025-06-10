
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Cpu, HardDrive, Globe, TrendingUp, Brain, BarChart3, CheckCircle, Zap, Server, Database, Settings, Rocket, Activity, Award, Users, Shield, Clock, DollarSign, Wrench, AlertTriangle, Star, ThumbsUp, Timer, TrendingDown, Cloud, Lock, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktops = () => {
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
              <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                <Monitor className="mr-2 h-4 w-4" />
                High-Performance Cloud Desktops
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                The End of
                <span className="block text-blue-600">"It's Not Working"</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Laggy laptops. Fragile setups. Security nightmares. Your team deserves better — high-performance cloud desktops that just work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Launch Your Desktop
                  <Monitor className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  View Live Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">99.98%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">&lt; 2min</div>
                  <div className="text-sm text-gray-600">Desktop Ready</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">73%</div>
                  <div className="text-sm text-gray-600">Productivity Boost</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Developer working on cloud desktop with multiple screens and seamless connectivity]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Painful Reality Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Painful Reality of Remote Work</h2>
            <p className="text-xl text-gray-600">Every developer's nightmare, solved once and for all</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  pain: "Laptop Performance Hell",
                  reality: "Your local machine crawls with Docker, VS Code, and Chrome open. Compilation takes forever while your laptop sounds like a jet engine.",
                  icon: AlertTriangle
                },
                {
                  pain: "Environment Setup Nightmare",
                  reality: "New developer onboarding takes 3 days of 'it works on my machine' debugging and environment configuration.",
                  icon: Clock
                },
                {
                  pain: "Security Compliance Chaos",
                  reality: "Sensitive code on personal laptops, VPN hassles, and IT teams panicking about data scattered across devices.",
                  icon: Shield
                },
                {
                  pain: "Hardware Dependency Prison",
                  reality: "Team productivity dies when laptops break, get stolen, or just can't handle the workload anymore.",
                  icon: TrendingDown
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
                [3D Illustration: Frustrated developer with crashed laptop, broken setup, security alerts popping up]
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
            <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Enterprise-Grade Performance",
                subtitle: "Power that never lags",
                description: "High-throughput servers with NVMe storage and EPYC CPUs deliver zero-lag performance, even on poor networks. Your desktop feels native.",
                icon: Zap,
                metric: "10x Faster",
                proof: "Than average local development setups"
              },
              {
                title: "Instant Environment Setup",
                subtitle: "From zero to coding in minutes",
                description: "Pre-configured environments with IDEs, Docker, VS Code, and custom stacks. New team members productive on day one.",
                icon: Rocket,
                metric: "< 2min Setup",
                proof: "Average environment deployment time"
              },
              {
                title: "Security & Compliance Built-in",
                subtitle: "Enterprise security by default",
                description: "Encrypted, isolated environments with role-based access control. Your code never leaves our secure infrastructure.",
                icon: Lock,
                metric: "SOC 2 Compliant",
                proof: "Enterprise-grade security standards"
              }
            ].map((solution, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                      <solution.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{solution.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600">{solution.metric}</div>
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
                Your Current Remote Work Nightmare
              </h3>

              <div className="space-y-6">
                {[
                  {
                    scenario: "The Monday Morning Laptop Crash",
                    reality: "Your laptop died over the weekend. You're debugging hardware instead of writing code. The client demo is in 2 hours.",
                    pain: "Your entire development environment is trapped on a broken machine"
                  },
                  {
                    scenario: "The 'Works on My Machine' Debug",
                    reality: "Your code works perfectly locally but breaks in production. 6 hours later, you discover it's a version mismatch.",
                    pain: "Different environments mean endless compatibility issues"
                  },
                  {
                    scenario: "The New Developer Onboarding Week",
                    reality: "New hire spends 3 days setting up local environment. Half the team helps troubleshoot weird installation errors.",
                    pain: "Productivity lost while fighting with environment setup"
                  },
                  {
                    scenario: "The Security Audit Panic",
                    reality: "IT discovers sensitive code on personal laptops. Emergency security review shuts down development for days.",
                    pain: "Compliance nightmares and productivity grinding to a halt"
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
                    scenario: "The Monday Morning Peace of Mind",
                    reality: "Your laptop died? No problem. Log in from any device and your entire development environment is exactly as you left it.",
                    joy: "Hardware failures become minor inconveniences instead of disasters"
                  },
                  {
                    scenario: "The Consistent Environment Victory",
                    reality: "Dev, staging, and production run identical environments. If it works in dev, it works everywhere. Every time.",
                    joy: "No more 'works on my machine' mysteries"
                  },
                  {
                    scenario: "The 10-Minute Onboarding Miracle",
                    reality: "New hire gets full access to configured environment in minutes. They're committing code the same day.",
                    joy: "New team members productive from day one"
                  },
                  {
                    scenario: "The Security Compliance Win",
                    reality: "All code stays in secure cloud infrastructure. Zero data on personal devices. IT teams sleep peacefully.",
                    joy: "Security compliance becomes automatic, not painful"
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
              <div className="text-3xl font-bold text-blue-600 mb-2">Join 5,000+ Happy Development Teams</div>
              <div className="text-gray-600 mb-4">Who stopped fighting infrastructure and started building</div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                End Your Desktop Nightmare Today
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
                  <th className="text-center p-6 bg-blue-50 font-bold text-blue-600">CloudAdda Desktop</th>
                  <th className="text-center p-6 font-semibold text-gray-600">AWS WorkSpaces</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Azure Virtual Desktop</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Citrix Cloud</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    spec: "Setup Time",
                    cloudAdda: "90 seconds (Actually)",
                    aws: "15+ minutes",
                    azure: "20+ minutes",
                    citrix: "30+ minutes"
                  },
                  {
                    spec: "Performance (Real World)",
                    cloudAdda: "Native-like (10ms latency)",
                    aws: "Laggy (50ms+ latency)",
                    azure: "Variable (20-80ms)",
                    citrix: "Sluggish (40ms+ latency)"
                  },
                  {
                    spec: "Storage Speed",
                    cloudAdda: "NVMe (50,000+ IOPS)",
                    aws: "EBS (3,000 IOPS)",
                    azure: "Premium SSD (5,000 IOPS)",
                    citrix: "Standard SSD (2,000 IOPS)"
                  },
                  {
                    spec: "Network Performance",
                    cloudAdda: "10Gbps consistent",
                    aws: "Variable throttling",
                    azure: "Bandwidth limits",
                    citrix: "Shared bandwidth"
                  },
                  {
                    spec: "Monthly Cost (4vCPU, 8GB)",
                    cloudAdda: "₹2,799 (All included)",
                    aws: "₹4,500+ (After data transfer)",
                    azure: "₹3,800+ (After compute hours)",
                    citrix: "₹5,200+ (After licenses)"
                  },
                  {
                    spec: "Pre-installed Software",
                    cloudAdda: "VS Code, Docker, Git, Node.js",
                    aws: "Basic Windows only",
                    azure: "Basic Windows only",
                    citrix: "Depends on license"
                  },
                  {
                    spec: "Support Response (Human)",
                    cloudAdda: "< 2 hours (Real engineers)",
                    aws: "4-24 hours (Tier 1)",
                    azure: "2-12 hours (Tier 1)",
                    citrix: "Business hours only"
                  },
                  {
                    spec: "Custom Environment Setup",
                    cloudAdda: "Free (Template creation)",
                    aws: "Manual configuration",
                    azure: "PowerShell scripting",
                    citrix: "Complex policies"
                  }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-semibold text-gray-900">{row.spec}</td>
                    <td className="p-6 text-center bg-blue-50 font-bold text-blue-600">{row.cloudAdda}</td>
                    <td className="p-6 text-center text-gray-600">{row.aws}</td>
                    <td className="p-6 text-center text-gray-600">{row.azure}</td>
                    <td className="p-6 text-center text-gray-600">{row.citrix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 inline-block">
              <div className="text-lg font-bold text-blue-800 mb-2">Transparency Promise</div>
              <div className="text-blue-600 mb-4">What we advertise is what you get. No fine print, no gotchas.</div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                See Live Performance Demo
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
              <h2 className="text-4xl font-bold text-gray-900">Built for Developers, By Developers</h2>
              <p className="text-xl text-gray-600">While others build generic virtual machines, we optimized every layer for development workflows.</p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "CPU Performance", value: "EPYC 64-core", desc: "Latest AMD server processors" },
                  { label: "Storage", value: "Pure NVMe", desc: "No hybrid, no compromise" },
                  { label: "RAM", value: "DDR4 ECC", desc: "Error-correcting memory" },
                  { label: "Network", value: "10Gbps", desc: "Dedicated bandwidth" }
                ].map((spec, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-blue-600">{spec.value}</div>
                    <div className="font-semibold text-gray-900">{spec.label}</div>
                    <div className="text-sm text-gray-600">{spec.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Live Performance Comparison</h4>
                <div className="space-y-3">
                  {[
                    { provider: "CloudAdda Desktop", speed: "Docker build: 45s", bar: 100 },
                    { provider: "AWS WorkSpaces", speed: "Docker build: 3m 20s", bar: 22 },
                    { provider: "Local MacBook Pro", speed: "Docker build: 2m 15s", bar: 33 },
                    { provider: "Azure Virtual Desktop", speed: "Docker build: 2m 45s", bar: 27 }
                  ].map((bench, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className={index === 0 ? "font-bold text-blue-600" : "text-gray-600"}>{bench.provider}</span>
                        <span className={index === 0 ? "font-bold text-blue-600" : "text-gray-600"}>{bench.speed}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-400"}`}
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
                [3D Illustration: High-performance server infrastructure with development tools flowing seamlessly]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Development Teams Who Made the Switch</h2>
            <p className="text-xl text-gray-600">Real stories from real teams building real products</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                developer: "Ankit Sharma",
                title: "Engineering Lead",
                company: "FinTech Startup",
                project: "Mobile banking platform",
                problem: "Team of 8 developers struggling with inconsistent local environments",
                solution: "Migrated entire team to CloudAdda desktops",
                result: "Zero environment issues, 40% faster builds, instant new developer onboarding",
                quote: "We went from spending 30% of our time on environment issues to zero. Our velocity doubled overnight.",
                savings: "₹25,000/month saved",
                rating: 5,
                timeOnPlatform: "18 months"
              },
              {
                developer: "Megha Patel", 
                title: "Senior Developer",
                company: "E-commerce Platform",
                project: "Microservices architecture",
                problem: "MacBook Pro couldn't handle Docker containers efficiently",
                solution: "Switched to CloudAdda high-performance desktop",
                result: "10x faster Docker builds, consistent performance, better battery life",
                quote: "My laptop used to sound like a jet engine. Now it's silent while I get twice the performance in the cloud.",
                savings: "₹8,000/month saved",
                rating: 5,
                timeOnPlatform: "12 months"
              },
              {
                developer: "Rohit Kumar",
                title: "DevOps Engineer", 
                company: "SaaS Startup",
                project: "CI/CD pipeline optimization",
                problem: "Complex local setup for testing infrastructure changes",
                solution: "CloudAdda desktops with pre-configured DevOps tools",
                result: "Instant environment cloning, parallel testing, zero setup time",
                quote: "I can spin up 5 different environments in parallel to test infrastructure changes. Game changer.",
                savings: "₹15,000/month saved",
                rating: 5,
                timeOnPlatform: "9 months"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">({story.timeOnPlatform})</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{story.developer}</h3>
                  <p className="text-blue-600 font-semibold">{story.title}</p>
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

                <blockquote className="italic text-gray-700 border-l-4 border-blue-300 pl-4 mb-6">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Success Story</h3>
              <p className="text-gray-600 mb-6">We love featuring development teams who've transformed their workflow with CloudAdda</p>
              <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect For Every Development Team</h2>
            <p className="text-xl text-gray-600">From startups to enterprises</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: "Full-Stack Development", 
                icon: Globe, 
                description: "React, Vue, Node.js, Python - your full stack runs faster in the cloud",
                customers: "1,200+ development teams"
              },
              { 
                name: "DevOps & Infrastructure", 
                icon: Settings, 
                description: "Kubernetes, Docker, Terraform - infrastructure-as-code workflows",
                customers: "400+ DevOps teams"
              },
              { 
                name: "Data Science & ML", 
                icon: Brain, 
                description: "Jupyter, TensorFlow, PyTorch - GPU-accelerated data workflows",
                customers: "300+ data teams"
              },
              { 
                name: "Mobile Development", 
                icon: Monitor, 
                description: "React Native, Flutter, native iOS/Android with simulators",
                customers: "200+ mobile teams"
              },
              { 
                name: "QA & Testing", 
                icon: CheckCircle, 
                description: "Automated testing, cross-browser testing, load testing suites",
                customers: "500+ QA teams"
              },
              { 
                name: "Design & Prototyping", 
                icon: Database, 
                description: "Figma, Sketch, Adobe Creative Suite - design workflows in the cloud",
                customers: "150+ design teams"
              },
              { 
                name: "Blockchain Development", 
                icon: Server, 
                description: "Solidity, Web3, DeFi - blockchain development environments",
                customers: "100+ blockchain teams"
              },
              { 
                name: "Enterprise Development", 
                icon: Shield, 
                description: "Large-scale enterprise applications with compliance requirements",
                customers: "80+ enterprise teams"
              }
            ].map((useCase, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <useCase.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{useCase.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{useCase.description}</p>
                    <div className="text-xs text-blue-600 font-medium">{useCase.customers}</div>
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
            <p className="text-xl text-gray-600">Teams migrate in minutes, not days</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Seamless migration flow with happy development teams transitioning to cloud desktops]
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "Migration Success Rate", value: "100%", description: "Every team successfully migrated in 3 years" },
                  { metric: "Average Migration Time", value: "90min", description: "From planning to productive development" },
                  { metric: "Developer Satisfaction", value: "98.5%", description: "Post-migration happiness score" },
                  { metric: "Performance Improvement", value: "240%", description: "Average development speed increase" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="font-semibold text-gray-900 mb-2">{stat.metric}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Migrations Succeed</h3>
                <ul className="space-y-3">
                  {[
                    "Dedicated migration specialist for your team",
                    "Pre-migration environment audit and optimization",
                    "Parallel setup (your current workflow stays active)",
                    "Gradual team onboarding with training sessions",
                    "30-day support period with priority assistance",
                    "Complete satisfaction guarantee with easy rollback"
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
                  "We migrated our entire 12-person development team in one afternoon. Zero downtime, zero frustration. Our builds are now 3x faster and everyone loves the consistency."
                </blockquote>
                <div className="text-sm text-gray-600">
                  <strong>Kavya Reddy</strong> - VP Engineering, SaaS Platform
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
            <p className="text-xl text-gray-600">Enterprise performance at startup prices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Developer", 
                price: "₹1,299", 
                period: "/user/month",
                originalPrice: "₹2,599",
                specs: ["4 vCPU (AMD EPYC)", "8GB ECC RAM", "100GB NVMe SSD", "Pre-installed Dev Tools", "VS Code, Docker, Git", "24/7 Human Support"],
                popular: false,
                description: "Perfect for individual developers",
                savings: "50% off vs AWS WorkSpaces"
              },
              { 
                name: "Team", 
                price: "₹2,199", 
                period: "/user/month",
                originalPrice: "₹4,399",
                specs: ["6 vCPU (AMD EPYC)", "16GB ECC RAM", "200GB NVMe SSD", "Custom Environment Templates", "Team Collaboration Tools", "Priority Support", "Admin Dashboard"],
                popular: true,
                description: "Ideal for development teams",
                savings: "50% off vs enterprise VDI"
              },
              { 
                name: "Enterprise", 
                price: "₹3,299", 
                period: "/user/month",
                originalPrice: "₹6,599",
                specs: ["8 vCPU (AMD EPYC)", "32GB ECC RAM", "500GB NVMe SSD", "GPU Access Available", "SSO Integration", "Advanced Security", "Dedicated Support Manager"],
                popular: false,
                description: "For large organizations and complex workloads",
                savings: "50% off vs traditional VDI"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-blue-50 border-2 border-blue-500 shadow-2xl scale-105' 
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
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
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Launch Desktop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-600">All plans include instant setup, free migrations, and 7-day free trial</p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>99.98% SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>90s Setup</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by 5,000+ Development Teams</h2>
            <p className="text-xl text-gray-600">From solo developers to enterprise teams</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  quote: "We reduced our development environment costs by 60% while doubling performance. Our team is more productive than ever.",
                  author: "Prateek Singh",
                  title: "CTO, FinTech Startup",
                  company: "Series B Company",
                  rating: 5
                },
                {
                  quote: "New developers are productive on day one. No more week-long environment setup. It's like magic.",
                  author: "Divya Agarwal",
                  title: "Engineering Manager",
                  company: "E-commerce Platform",
                  rating: 5
                },
                {
                  quote: "CloudAdda desktops feel faster than our local machines. The consistency across our team is incredible.",
                  author: "Karthik Nair",
                  title: "Senior Developer",
                  company: "SaaS Company",
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
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{testimonial.author.charAt(0)}</span>
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
                [3D Illustration: Happy diverse development team celebrating with laptops showing cloud desktops]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Assistance Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We'll Handle Your Migration (For Free)</h2>
            <p className="text-xl text-gray-600">Zero-downtime transition from any setup</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Environment Assessment",
                description: "Our engineers analyze your current development setup and create a customized migration plan. Completely free, no strings attached.",
                icon: Activity
              },
              {
                step: "2", 
                title: "Seamless Migration",
                description: "We replicate your exact environment in the cloud. Your team keeps working while we handle the technical heavy lifting.",
                icon: Wrench
              },
              {
                step: "3",
                title: "Team Training & Support",
                description: "Personalized onboarding for your team. If anyone's not happy, we'll migrate you back for free within 30 days.",
                icon: Users
              }
            ].map((step, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
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
              Start Free Migration Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-gray-600 mt-4">Usually completed in 1-2 hours, always free, zero commitment</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Development Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Launch in 90 seconds. Scale instantly. Support that cares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Launch Your Desktop Now
              <Monitor className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-16 py-6 text-xl border-gray-300 hover:bg-gray-50">
              Schedule a Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Happy Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.98%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">90sec</div>
              <div className="text-gray-600">Setup Time</div>
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

export default CloudDesktops;
