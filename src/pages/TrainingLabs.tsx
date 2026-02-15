import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Clock, AlertTriangle, MessageCircle, DollarSign, CheckCircle, Users, Gauge, UserCheck, Rocket, Code, Shield, Brain, Star, FileCheck, Play, ChevronDown, Target, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const TrainingLabs = () => {
  useEffect(() => {
    document.title = "Virtual Training Labs for IT, AI, Networking & More | CloudAdda";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Deliver hands-on, scalable training labs for any curriculum — Linux, AI/ML, Networking & more. No control panels. Just ready-to-use lab environments, built for trainers.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Deliver hands-on, scalable training labs for any curriculum — Linux, AI/ML, Networking & more. No control panels. Just ready-to-use lab environments, built for trainers.';
      document.head.appendChild(meta);
    }
  }, []);
  return <div className="min-h-screen bg-white">
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
                          <Link to="/training-labs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 flex items-center gap-1">
                    Log In
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                  <DropdownMenuItem asChild>
                    <a href="https://trainer-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                      Trainer Log In
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="https://trainee-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                      Trainee Log In
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-20 pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4 leading-[1.1]">
            <span className="bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">Managed</span> Virtual Training Labs.
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Built for Real Training.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-700 font-medium max-w-2xl mx-auto mt-6 mb-3">
            You focus on delivering exceptional training.
          </p>
          <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10">
            We deliver fully managed, ready-to-run lab environments — provisioned in minutes, auto-scaled on demand, and engineered for uninterrupted live sessions.
          </p>

          {/* SLA Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { value: "99.9%", label: "Uptime Guaranteed" },
              { value: "24/7", label: "Instant Support" },
              { value: "<5 min", label: "Lab Setup Time" },
            ].map((sla) => (
              <div key={sla.label} className="flex flex-col items-center bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl px-8 py-5 shadow-sm">
                <span className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">{sla.value}</span>
                <span className="text-sm text-gray-600 font-medium mt-1">{sla.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* The Pain Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-r from-[hsl(270,45%,18%)] via-[hsl(265,50%,38%)] to-[hsl(270,45%,18%)] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
                The Problem Training<br />Teams Face
              </h2>
              
              <p className="text-lg text-purple-200 leading-relaxed text-center lg:text-left">
                Every growing training company eventually hits the same wall:
              </p>
              
              <ul className="space-y-5 text-left">
                {["Cloud bills that spike unpredictably", "Labs breaking mid-session", "Trainers forced to troubleshoot instead of teach", "Inconsistent environments across learners", "Scaling batches becoming risky and stressful"].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4 text-lg text-white/90">
                    <span className="text-orange-400 text-xl mt-0.5 flex-shrink-0">✗</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-white/10 space-y-3">
                <p className="text-lg text-purple-200 leading-relaxed">
                  Infrastructure becomes the bottleneck.
                </p>
                <p className="text-3xl lg:text-4xl font-bold text-orange-400">
                  CloudAdda removes it.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img src="/lovable-uploads/69230053-96f2-4f6a-ad77-9419979d6f8e.png" alt="Frustrated person at desk with laptop" className="w-full max-w-lg h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Built For Trainers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Infrastructure Built For Trainers</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[{
              title: "Setup in Minutes",
              description: "Share your curriculum → We configure everything. Pre-installed tools, auto-scaling, and ready-to-teach labs. Deploy to 10 or 10,000 with zero effort.",
              icon: Clock,
              features: ["Pre-installed tools", "Auto-scaling", "Zero effort deployment", "Custom configurations"]
            }, {
              title: "Engineered for Session Reliability",
              description: "Handles peak student activity without crashing. Real-time monitoring + auto-failover. 99.9% uptime across 5,000+ sessions.",
              icon: Shield,
              features: ["Peak activity handling", "Real-time monitoring", "Auto-failover", "99.9% uptime"]
            }, {
              title: "Support That Actually Helps",
              description: "Instant support with training infra experience. Emergency hotline. No bots — ever.",
              icon: Users,
              features: ["Instant support", "Emergency hotline", "Training experts", "No bots ever"]
            }].map((solution, index) => <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                      <solution.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                      
                      <ul className="space-y-2">
                        {solution.features.map((feature, fIndex) => <li key={fIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Built for Trainers. Loved by Students. */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-sm font-semibold tracking-widest text-purple-600 uppercase mb-4">Built for Trainers. Loved by Students.</p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">How Trainers Benefit</h3>
              
              <div className="space-y-8">
                {[
                  { num: "01", title: "Snapshot & Restore in Seconds", description: "Instantly revert lab environments to a clean state. No manual rebuilds. No wasted time." },
                  { num: "02", title: "Batch-Based Control", description: "Deploy environments per batch. Manage access windows. Scale based on class size." },
                  { num: "03", title: "Real-Time Oversight", description: "Monitor active labs during live sessions and intervene instantly if needed." },
                  { num: "04", title: "Standardized Lab Templates", description: "Version-controlled environments aligned to your curriculum for consistent delivery across cohorts." }
                ].map((item, index) => (
                  <div key={index} className="group flex gap-5">
                    <div className="flex-shrink-0">
                      <span className="text-3xl font-black bg-gradient-to-br from-purple-500 to-purple-700 bg-clip-text text-transparent">{item.num}</span>
                    </div>
                    <div className="border-l-2 border-gray-200 group-hover:border-purple-400 transition-colors pl-5">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-950 rounded-2xl p-6">
                <p className="text-white font-semibold text-lg">
                  Your trainers teach.<br />
                  <span className="text-purple-400">They don't troubleshoot infrastructure.</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">How Students Benefit</h3>
              
              <div className="space-y-6">
                {[
                  { title: "Browser-Based Access", description: "No installations. No configuration issues. Labs launch directly from a browser." },
                  { title: "Isolated Personal Environments", description: "Every learner gets their own dedicated lab instance." },
                  { title: "Consistent Performance", description: "Stable compute allocation prevents slowdowns during high concurrency." },
                  { title: "Freedom to Experiment", description: "Break it. Rebuild it. Restore it. Learn by doing." }
                ].map((item, index) => (
                  <div key={index} className="group bg-gray-50 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 rounded-2xl p-6 transition-all duration-300">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-950 rounded-2xl p-6">
                <p className="text-white font-semibold text-lg">
                  Students focus on learning —<br />
                  <span className="text-orange-400">not fighting setup errors.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed From Start to Finish */}
      <section className="py-28 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Managed From Start to Finish
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-2">
              A Fully Managed Virtual <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-semibold">Training Lab Lifecycle</span>
            </p>
            <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
              CloudAdda handles your training infrastructure before, during, and after sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {[
              { num: "01", title: "Pre-batch Provisioning", desc: "Environments are spun up and validated before your training batch begins." },
              { num: "02", title: "Access Configuration", desc: "Student credentials, access windows, and permissions — set once, applied everywhere." },
              { num: "03", title: "Live-session Monitoring", desc: "Real-time visibility into every active lab during live training delivery." },
              { num: "04", title: "Environment Resets", desc: "One-click restore to clean state between sessions or student attempts." },
              { num: "05", title: "Post-session Management", desc: "Automated teardown, usage reports, and resource reclamation after training ends." }
            ].map((step, index) => (
              <div key={index} className={`group bg-white border border-gray-200 rounded-3xl p-7 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 ${index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                <span className="text-3xl font-black bg-gradient-to-br from-purple-500 to-purple-700 bg-clip-text text-transparent">{step.num}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2 group-hover:text-purple-700 transition-colors">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed text-lg">
            Whether you run one batch or twenty in parallel, your lab infrastructure remains <span className="text-gray-900 font-semibold">structured and predictable</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            {[
              "No last-minute scrambling.",
              "No resource surprises.",
              "No downtime panic."
            ].map((line, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-900 rounded-full px-6 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <p className="text-white text-sm font-medium">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose-Built for Every Kind of Training - Dual Marquee */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Purpose-Built for Every Kind of Training</h2>
          </div>
        </div>

        <div className="space-y-6">
          {/* Row 1 - Left to Right */}
          <div className="flex animate-marquee">
            {[
              { title: "Coding Bootcamps", description: "Full-stack setups: Node.js, React, MongoDB, Docker. Real-world CI/CD flows, browser-based IDEs.", icon: Code },
              { title: "Cybersecurity Ranges", description: "Isolated labs with vulnerable VMs, network sniffers, incident response simulators.", icon: Shield },
              { title: "AI/ML & Data Science", description: "GPU-ready labs with Jupyter, TensorFlow, PyTorch, huge datasets.", icon: Brain },
              { title: "Corporate Upskilling", description: "Compliance-ready labs, scalable to 10,000+ users.", icon: Users },
              { title: "Coding Bootcamps", description: "Full-stack setups: Node.js, React, MongoDB, Docker. Real-world CI/CD flows, browser-based IDEs.", icon: Code },
              { title: "Cybersecurity Ranges", description: "Isolated labs with vulnerable VMs, network sniffers, incident response simulators.", icon: Shield },
              { title: "AI/ML & Data Science", description: "GPU-ready labs with Jupyter, TensorFlow, PyTorch, huge datasets.", icon: Brain },
              { title: "Corporate Upskilling", description: "Compliance-ready labs, scalable to 10,000+ users.", icon: Users },
            ].map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 min-w-[300px] flex-shrink-0 mx-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex animate-marquee-reverse">
            {[
              { title: "Networking & Systems", description: "Layer 2/3 labs, routers, firewalls, VLANs, Linux OS internals — all isolated per student.", icon: Users },
              { title: "Hackathons & Workshops", description: "On-demand environments for 100s of participants. Instant provisioning, no local setup.", icon: Rocket },
              { title: "Networking Labs", description: "Simulated enterprise network environments for routing, switching, and troubleshooting at scale.", icon: Users },
              { title: "DevOps & Cloud", description: "Kubernetes, Terraform, CI/CD pipelines — production-like environments for hands-on practice.", icon: Code },
              { title: "Networking & Systems", description: "Layer 2/3 labs, routers, firewalls, VLANs, Linux OS internals — all isolated per student.", icon: Users },
              { title: "Hackathons & Workshops", description: "On-demand environments for 100s of participants. Instant provisioning, no local setup.", icon: Rocket },
              { title: "Networking Labs", description: "Simulated enterprise network environments for routing, switching, and troubleshooting at scale.", icon: Users },
              { title: "DevOps & Cloud", description: "Kubernetes, Terraform, CI/CD pipelines — production-like environments for hands-on practice.", icon: Code },
            ].map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 min-w-[300px] flex-shrink-0 mx-3">
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

      {/* Every Trainer's Worst Nightmare */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Every Trainer's Worst Nightmare</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/lovable-uploads/90db8078-ac2f-4f7a-915e-72846bad7fdf.png" alt="Frustrated trainer with technical problems" className="w-full h-auto rounded-3xl" />
            </div>

            <div className="space-y-8">
              {[{
                title: "Weekend Lab Config Hell",
                description: "You spend your Friday nights setting up 50 labs for Monday. Your family wonders if you hate them.",
                icon: Clock
              }, {
                title: "Mid-Session Meltdown",
                description: "15 minutes into a bootcamp, labs crash. Participants stare. You sweat.",
                icon: AlertTriangle
              }, {
                title: "Support Black Hole",
                description: "2 AM panic. An agent replies: \"Try restarting.\" Your session's in 5 hours.",
                icon: MessageCircle
              }, {
                title: "Cost Bomb",
                description: "You forget to turn off instances. $50 becomes $500. Again.",
                icon: DollarSign
              }].map((pain, index) => <div key={index} className="group hover:scale-105 transition-all duration-300">
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
                  </div>)}
            </div>
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
                  {["Real-time resource monitoring", "Instant lab status updates", "Performance analytics", "One-click environment controls"].map((feature, index) => <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>)}
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <video className="w-full h-auto" controls muted autoPlay loop>
                    <source src="https://media.cloudadda.com/file/clouaddda-training-page-vid-1-view-all-labs.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <video className="w-full h-auto" controls muted autoPlay loop>
                    <source src="https://media.cloudadda.com/file/CA-Training-page-vid-2-without-leaving-youre-seat.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-semibold">Remote Access</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900">Help participants Without Leaving Your Seat</h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">View participant screens, take control when needed, and provide instant help. No more walking around the classroom or dealing with "it's not working" complaints.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["Remote screen viewing", "Take control assistance"].map((feature, index) => <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>)}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">Custom Configuration</span>
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900">We Build Your Perfect Lab Environment</h3>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  While we have pre-configured templates for common training scenarios, we custom-build and configure 
                  each lab environment to match your specific curriculum requirements and training needs. You focus on teaching — we handle the infrastructure.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  {["Custom-built for your curriculum", "Pre-configured training templates", "Tailored to your specific needs", "Ready-to-use lab access provided"].map((feature, index) => <div key={index} className="flex flex-col items-center space-y-2 text-center">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>)}
                </div>
              </div>
            </div>
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

              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg">
                  Experience Effortless Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img src="/lovable-uploads/002bd955-500b-4161-945a-cdd484ff0c25.png" alt="Zen-like trainer in peaceful state" className="w-full h-auto rounded-3xl" />
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
            {[{
            question: "What if this won't match our unique training format?",
            answer: "We custom-build labs to your exact curriculum. You get a say in every detail."
          }, {
            question: "What if we need changes mid-course?",
            answer: "No problem — instant tweaks, mid-session scaling, and live config support."
          }, {
            question: "What if things break during class?",
            answer: "Real engineers. Instant support. No bots. No \"please wait.\""
          }, {
            question: "What if we're not technical enough to explain what we need?",
            answer: "Just tell us what you teach — we handle the rest."
          }, {
            question: "What if this is too good to be true?",
            answer: "Ask our customers. Or better — try it and see for yourself."
          }].map((item, index) => <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>)}
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
            {[{
            name: "Priya Sharma",
            role: "Technical Training Director",
            quote: "From 6-hour Friday setups to 15-minute deploys. Students happier. Trainers free.",
            stats: "2,000+ students/month, 95% time savings"
          }, {
            name: "Marcus Johnson",
            role: "Cybersecurity Instructor",
            quote: "Zero crashes in 8 months. Feels like a real corporate red team lab.",
            stats: "100% uptime, 500+ certified hackers"
          }, {
            name: "Sarah Kim",
            role: "DevOps Training Manager",
            quote: "11 PM issue fixed by a real engineer. I cried.",
            stats: "24/7 support, 15 time zones supported"
          }].map((story, index) => <div key={index} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{story.quote}"</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{story.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{story.role}</div>
                  <div className="text-xs text-purple-600 font-medium">{story.stats}</div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              From Unstable Labs to{' '}
              <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 bg-clip-text text-transparent">
                Predictable Training Delivery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how training teams operate before and after moving to managed virtual labs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Without Managed Labs</h3>
              <ul className="space-y-4">
                {[
                  "Manual environment setup before every batch",
                  "Cloud credits running out mid-session",
                  "Trainers troubleshooting instead of teaching",
                  "Billing unpredictability",
                  "Learners facing lag and crashes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-lg">
                    <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-green-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                With <span className="text-green-600">CloudAdda</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "Pre-configured labs provisioned per learner",
                  "Stable, isolated environments",
                  "Full batch lifecycle management",
                  "Predictable pricing per batch",
                  "Smooth, lag-free training sessions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Support That Actually Shows Up</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Training doesn't pause when infrastructure breaks — neither do we.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {[
                "Dedicated support during sessions",
                "Fast issue resolution",
                "Proactive monitoring",
                "Engineers who understand training workflows"
              ].map((item, index) => <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-lg text-gray-800 font-medium">{item}</span>
                  </div>)}
              
              <p className="text-lg text-gray-600 italic pt-4 border-t border-gray-200 mt-6">
                This is managed service, not ticket ping-pong.
              </p>
            </div>

            <div className="relative">
              <img src="/lovable-uploads/da1c17cc-16bf-47be-834a-68e473782db8.png" alt="Support representative helping with setup" className="w-full h-auto rounded-3xl" />
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
          <p className="text-xl text-gray-600 mb-12">Skip the stress. Delight your participants. Reclaim your weekends.</p>
          
          <Link to="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Get Your Custom Lab Setup
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1,500+</div>
              <div className="text-gray-600">Students Trained Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <div className="text-gray-600">Training Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Session Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Fighting Infrastructure Section */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                Stop Fighting Infrastructure.
                <span className="block text-purple-600">Start Teaching.</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                You bring the training content. We deliver ready-to-run lab environments that launch in minutes, scale effortlessly, and never crash mid-session.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                    Request Your Custom Lab
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center items-center h-full min-h-[500px]">
              <img src="/lovable-uploads/20d7ef7d-10ca-4015-9a31-37c2ec2b2b0b.png" alt="Training session illustration with instructor and student" className="w-full max-w-none h-auto object-contain scale-125 transform" />
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
                
              </div>
              <p className="text-gray-400">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
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
    </div>;
};
export default TrainingLabs;