import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Clock, AlertTriangle, MessageCircle, DollarSign, CheckCircle, Users, Gauge, UserCheck, Rocket, Code, Shield, Brain, Star, FileCheck, Play } from "lucide-react";
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
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-orange-500 transition-colors bg-transparent">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/training-labs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/cloud-desktops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/vps"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">VPS Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              High-performance VPS with AMD EPYC processors
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
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
                Stop Fighting Infrastructure.
                <span className="block text-purple-600">Start Teaching.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                You bring the training content. We deliver ready-to-run lab environments that launch in minutes, scale effortlessly, and never crash mid-session.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Request Your Custom Lab
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  <Play className="mr-2 h-5 w-5" />
                  Watch a Live Demo
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
                  <div className="text-3xl font-bold text-purple-600">&lt;2hr</div>
                  <div className="text-sm text-gray-600">Avg. Support Response</div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center items-center h-full min-h-[700px]">
              <img 
                src="/lovable-uploads/20d7ef7d-10ca-4015-9a31-37c2ec2b2b0b.png" 
                alt="Training session illustration with instructor and student"
                className="w-full max-w-none h-auto object-contain scale-150 transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Every Trainer's Worst Nightmare</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/90db8078-ac2f-4f7a-915e-72846bad7fdf.png" 
                alt="Frustrated trainer with technical problems"
                className="w-full h-auto rounded-3xl"
              />
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Weekend VM Config Hell",
                  description: "You spend your Friday nights setting up 50 VMs for Monday. Your family wonders if you hate them.",
                  icon: Clock
                },
                {
                  title: "Mid-Session Meltdown",
                  description: "15 minutes into a bootcamp, labs crash. Students stare. You sweat.",
                  icon: AlertTriangle
                },
                {
                  title: "Support Black Hole",
                  description: "2 AM panic. A bot replies: \"Try restarting.\" Your session's in 5 hours.",
                  icon: MessageCircle
                },
                {
                  title: "Cost Bomb",
                  description: "You forget to turn off instances. ₹500 becomes ₹5,000. Again.",
                  icon: DollarSign
                }
              ].map((pain, index) => (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <pain.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{pain.title}</h3>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{pain.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Infrastructure Built Only For Trainers</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                title: "Setup in Minutes",
                description: "Share your curriculum → We configure everything. Pre-installed tools, auto-scaling, and ready-to-teach labs. Deploy to 10 or 10,000 with zero effort.",
                icon: Clock,
                features: ["Pre-installed tools", "Auto-scaling", "Zero effort deployment", "Custom configurations"]
              },
              {
                title: "Engineered for Session Reliability", 
                description: "Handles peak student activity without crashing. Real-time monitoring + auto-failover. 99.9% uptime across 5,000+ sessions.",
                icon: Shield,
                features: ["Peak activity handling", "Real-time monitoring", "Auto-failover", "99.9% uptime"]
              },
              {
                title: "Support That Actually Helps",
                description: "24/7 engineers with training infra experience. Emergency hotline. <2 hour SLA. No bots — ever.",
                icon: Users,
                features: ["24/7 engineers", "Emergency hotline", "<2 hour SLA", "No bots ever"]
              }
            ].map((solution, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                      <solution.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                      
                      <ul className="space-y-2">
                        {solution.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple Dashboard. Powerful Control.</h2>
            <p className="text-xl text-gray-600">Manage hundreds of students and labs from one intuitive interface</p>
          </div>

          <div className="space-y-24">
            {/* Feature 1: Easy Management */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
                  <Gauge className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700 font-semibold">Easy Management</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">Monitor All Labs at a Glance</h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  See real-time status of every student's environment. CPU usage, memory consumption, 
                  network activity — all in one clean dashboard. No more guessing if labs are working.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Real-time resource monitoring",
                    "Instant lab status updates", 
                    "Performance analytics",
                    "One-click environment controls"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-96 flex items-center justify-center text-gray-400">
                  [Dashboard Screenshot: Overview screen showing multiple lab environments with status indicators, resource usage charts, and student activity]
                </div>
              </div>
            </div>

            {/* Feature 2: Student Access Control */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-96 flex items-center justify-center text-gray-400">
                  [Dashboard Screenshot: Student management interface showing remote access controls, screen sharing, and assistance tools]
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-semibold">Remote Access</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">Help Students Without Leaving Your Seat</h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  View student screens, take control when needed, and provide instant help. 
                  No more walking around the classroom or dealing with "it's not working" complaints.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Remote screen viewing",
                    "Take control assistance",
                    "File sharing & transfers",
                    "Real-time chat support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Lab Deployment */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">Instant Deployment</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">Deploy Labs in Seconds, Not Hours</h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Pre-configured templates for every training scenario. Just select your curriculum type, 
                  set the number of students, and click deploy. Your entire class is ready in minutes.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Pre-built curriculum templates",
                    "Auto-scaling based on enrollment",
                    "Custom environment configuration",
                    "Bulk student onboarding"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-96 flex items-center justify-center text-gray-400">
                  [Dashboard Screenshot: Lab deployment interface with template selection, scaling options, and deployment progress]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer-Specific Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Purpose-Built for Every Kind of Training</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [Split-screen showing 6 types of training environments]
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Coding Bootcamps",
                  description: "Full-stack setups: Node.js, React, MongoDB, Docker. Real-world CI/CD flows, browser-based IDEs, version control.",
                  icon: Code
                },
                {
                  title: "Cybersecurity Ranges",
                  description: "Isolated labs with vulnerable VMs, network sniffers, incident response simulators.",
                  icon: Shield
                },
                {
                  title: "AI/ML & Data Science",
                  description: "GPU-ready labs with Jupyter, TensorFlow, PyTorch, huge datasets.",
                  icon: Brain
                },
                {
                  title: "Corporate Upskilling",
                  description: "Compliance-ready labs, scalable to 10,000+ users.",
                  icon: Users
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <useCase.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-sm text-gray-600">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Networking & Systems Training",
                description: "Layer 2/3 labs, routers, firewalls, VLANs, Linux OS internals — all isolated per student.",
                icon: Users
              },
              {
                title: "Hackathons & Workshops",
                description: "On-demand environments for 100s of participants. Instant provisioning, no local setup, perfect for time-boxed events.",
                icon: Rocket
              },
              {
                title: "Networking Labs",
                description: "Simulated enterprise network environments for training on routing, switching, and troubleshooting at scale.",
                icon: Users
              },
              {
                title: "Capture the Flag (CTF) Competitions",
                description: "Realistic attack-defense setups for cybersecurity contests, team-based or individual.",
                icon: Shield
              },
              {
                title: "Certification Prep Labs",
                description: "Practice environments preloaded with the exact tools and configs needed for cert exams (e.g., RHCE, OSCP, CEH).",
                icon: Star
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Real Win Section */}
      <section className="py-24 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Your Focus Belongs on Teaching. We Handle the Chaos.</h2>
              
              <div className="space-y-6 text-lg">
                <p>You didn't become a trainer to debug VMs, babysit uptime, or fight network configs.</p>
                <p>Your magic is in the teaching — helping people grow, switch careers, get certified, master hard things.</p>
                <p>That's where your time should go. That's what we protect.</p>
                <p>With CloudAdda, infrastructure fades into the background. You get total peace of mind, super-fast setup, and labs that just work — every single time.</p>
              </div>

              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg">
                Experience Effortless Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/002bd955-500b-4161-945a-cdd484ff0c25.png" 
                alt="Zen-like trainer in peaceful state"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objection Busters */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What If You're Still Not Sure?</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What if this won't match our unique training format?",
                answer: "We custom-build labs to your exact curriculum. You get a say in every detail."
              },
              {
                question: "What if we need changes mid-course?",
                answer: "No problem — instant tweaks, mid-session scaling, and live config support."
              },
              {
                question: "What if things break during class?",
                answer: "Real engineers. 24/7. <2 hour SLA. No bots. No \"please wait.\""
              },
              {
                question: "What if we're not technical enough to explain what we need?",
                answer: "Our onboarding team speaks fluent training. Just tell us what you teach — we handle the rest."
              },
              {
                question: "What if it's too complicated to manage?",
                answer: "You get a simple dashboard. We manage everything else."
              },
              {
                question: "What if this is too good to be true?",
                answer: "Ask our customers. Or better — try it and see for yourself."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trainers Who Escaped Infrastructure Hell</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Technical Training Director",
                quote: "From 6-hour Friday setups to 15-minute deploys. Students happier. Trainers free.",
                stats: "2,000+ students/month, 95% time savings"
              },
              {
                name: "Marcus Johnson",
                role: "Cybersecurity Instructor", 
                quote: "Zero crashes in 8 months. Feels like a real corporate red team lab.",
                stats: "100% uptime, 500+ certified hackers"
              },
              {
                name: "Sarah Kim",
                role: "DevOps Training Manager",
                quote: "11 PM issue fixed by a real engineer. I cried.",
                stats: "24/7 support, 15 time zones supported"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{story.quote}"</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{story.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{story.role}</div>
                  <div className="text-xs text-purple-600 font-medium">{story.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">From Signup to Live Training in 3 Hours</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  hour: "Hour 1",
                  task: "Requirements call & infra design",
                  description: "We understand your curriculum and design the perfect lab environment."
                },
                {
                  hour: "Hour 2", 
                  task: "Provisioning, config, and performance check",
                  description: "Your labs are built, tested, and optimized for your specific needs."
                },
                {
                  hour: "Hour 3",
                  task: "Team onboarding & lab access",
                  description: "Your team gets trained and receives access to the management dashboard."
                },
                {
                  hour: "Go Time",
                  task: "Labs go live. Monitored. Ready to teach",
                  description: "Everything is live, monitored, and ready for your first training session."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">{step.hour}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.task}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/da1c17cc-16bf-47be-834a-68e473782db8.png" 
                alt="Support representative helping with setup"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Train Without Limits?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Skip the stress. Delight your students. Reclaim your weekends.
          </p>
          
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Your Custom Lab Setup
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>

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
