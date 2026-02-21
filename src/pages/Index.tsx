import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star, Award, Clock, HeartHandshake, Rocket, Monitor, Server, Database, Activity, Cpu, HardDrive, Target, TrendingUp, Lightbulb, Sparkles, ChevronDown, DollarSign, Building, RotateCcw, X, Gauge, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResponsiveNavigation from "@/components/ResponsiveNavigation";
const Index = () => {
  const [currentHeading, setCurrentHeading] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const headings = ["The Cloud Company That Actually Cares.", "Premium Infrastructure. Human Touch.", "Where Performance Meets Compassion.", "Your Success Is Our Mission."];

  // New sliding words for the "Cloud Company That Actually Cares" section
  const slidingWords = [{
    text: "A Cloud Company That Actually",
    highlight: "Cares"
  }, {
    text: "Infrastructure That's",
    highlight: "Reliable"
  }, {
    text: "Support That's",
    highlight: "Human"
  }, {
    text: "Solutions That",
    highlight: "Scale"
  }, {
    text: "Performance That",
    highlight: "Delivers"
  }];

  // Updated customer logos with new images
  const customerLogos = [{
    name: "NIIT",
    logo: "/lovable-uploads/15f02da9-f936-4b39-a769-8baf4f7c05ff.png"
  }, {
    name: "Bennett & Coleman - The Times of India",
    logo: "/lovable-uploads/b8a0bbbe-66be-4c64-826a-4bba7e8c5684.png"
  }, {
    name: "Royal Arabian Destination Management",
    logo: "/lovable-uploads/cc781258-e902-4178-8607-3c48b3ae0f4a.png"
  }, {
    name: "Indian Institute of Science",
    logo: "/lovable-uploads/8d8ce7c4-1e77-4147-a1ae-2452ae2cf683.png"
  }, {
    name: "Red Hat",
    logo: "/lovable-uploads/b35e7ed6-37e6-49c5-a22b-f48ae5ca78df.png"
  }, {
    name: "Molecular Filtration Group",
    logo: "/lovable-uploads/ef895104-df65-4cbf-86e7-26f55337c5fa.png"
  }, {
    name: "Focus Group",
    logo: "/lovable-uploads/41eb1686-5580-434b-947a-5e21f578c058.png"
  }, {
    name: "NUAGE",
    logo: "/lovable-uploads/4f827c05-6a04-4635-b840-f9bc202e40ca.png"
  }, {
    name: "Stride Data",
    logo: "/lovable-uploads/8a964dfa-c86e-485d-8c6e-f934d08e9d39.png"
  }, {
    name: "EdForce",
    logo: "/lovable-uploads/db3358c1-b1a9-4070-a4a3-87901202446e.png"
  }, {
    name: "Xebia",
    logo: "/lovable-uploads/168f3b7e-5abe-4850-bdac-add53e21fcb4.png"
  }, {
    name: "Mazenet",
    logo: "/lovable-uploads/78472758-6da6-4403-9e80-a1e2d61a0893.png"
  }, {
    name: "Unext",
    logo: "/lovable-uploads/b30cdbbc-43d3-4690-bc58-4817dcedd4d6.png"
  }, {
    name: "SpringPeople",
    logo: "/lovable-uploads/df4fd201-2c8e-4ad6-b65a-1f0d13add86d.png"
  }, {
    name: "Novel Vista",
    logo: "/lovable-uploads/21459b8a-fdf1-42f6-8503-d17013aede66.png"
  }, {
    name: "Overture Research",
    logo: "/lovable-uploads/c65616c4-1ed8-4c76-8cd6-93f0ddd9a95a.png"
  }, {
    name: "Learnlytica",
    logo: "/lovable-uploads/eb28034e-23b0-4ede-a4d8-635ce65d965e.png"
  }, {
    name: "LeelaJay",
    logo: "/lovable-uploads/4e4d4486-2767-498c-816b-a1beee44cbf9.png"
  }, {
    name: "Alchemy",
    logo: "/lovable-uploads/02252fc8-4957-494c-82db-1f7917b81b8b.png"
  }];

  // Testimonials data
  const testimonials = [{
    quote: "CloudAdda's support team provides immediate solutions, helping with difficult labs others can't complete. The platform has streamlined our workflow, enhancing productivity with seamless cloud collaboration. Its virtual training labs offer an intuitive interface, clear instructions, and a well-organized layout, making the learning process effective. I wholeheartedly recommend CloudAdda for its user-friendly interface, comprehensive content, and hands-on exercises.",
    author: "Vigneshwaran",
    position: "IT Infrastructure Manager, Mazenet Solution Pvt Ltd"
  }, {
    quote: "CloudAdda's labs, used by my team of 100 trainees for IT Infra training, were supported by an efficient team that quickly resolved minor issues professionally. The seamless, interruption-free experience ensured high-quality learning. The user-friendly interface and comprehensive batch management were extremely useful. I strongly recommend CloudAdda for its effective virtual labs and excellent support team.",
    author: "Abdul Raouf",
    position: "IT Trainer & Consultant"
  }, {
    quote: "CloudAdda's exceptional Virtual Lab support, with prompt and effective assistance, ensures smooth operation and success. Its unmatched customer support and advanced features enhance the learning experience, setting it apart. The platform's reliability, accessibility, and seamless integration streamline processes, fostering efficiency. With an intuitive interface and excellent support, CloudAdda is ideal for effective training. Highly recommended for its robust features and user-friendly design.",
    author: "Gunjan Arora",
    position: "DELIVERY MANAGER- LEARNING SERVICES, NIIT - StackRoute"
  }];
  const handleNavigation = (path: string) => {
    window.location.href = path;
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading(prev => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % slidingWords.length);
    }, 2500);
    return () => clearInterval(slideInterval);
  }, []);
  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogoIndex(prev => (prev + 1) % customerLogos.length);
    }, 2000);
    return () => clearInterval(logoInterval);
  }, []);
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <ResponsiveNavigation />

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-8" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 bg-clip-text text-transparent">Fully Managed</span>
                  <br />
                  <span className="text-gray-900 whitespace-nowrap">Virtual Training Labs</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">for Live IT Training</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">CloudAdda helps training companies deliver reliable, hands-on cloud labs at scale — without worrying about infrastructure, unpredictable cloud bills, or lab failures during live sessions.</p>
                 <p className="text-lg text-gray-800 font-semibold">
                   Built specifically for live & corporate training. No chaos. No cloud headaches.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" onClick={() => handleNavigation('/contact')}>
                  <Button size="lg" variant="orange" className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Talk to a Training Labs Expert
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/lovable-uploads/6df3b19a-2c57-45c8-89b1-a0f0e58db9ab.png" alt="3D illustration of a person with laptop and lightbulb idea" className="w-full max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logo Marquee - Updated with dual direction */}
      <section className="py-8 bg-white" aria-label="Trusted by leading companies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden space-y-4">
            {/* First row - left to right */}
            <div className="flex animate-marquee">
              {customerLogos.slice(0, Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img src={logo.logo} alt={`${logo.name} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {customerLogos.slice(0, Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img src={logo.logo} alt={`${logo.name} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row - right to left */}
            <div className="flex animate-marquee-reverse">
              {customerLogos.slice(Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img src={logo.logo} alt={`${logo.name} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {customerLogos.slice(Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img src={logo.logo} alt={`${logo.name} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Most Clouds Are Built for Developers */}
      <section className="min-h-screen flex items-center bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Most Clouds Are Built for Developers.<br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Ours Is Built for Trainers.</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Public cloud platforms are optimized for software teams.
              CloudAdda is engineered specifically for live instructor-led training, corporate upskilling programs, and multi-batch course delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto auto-rows-[200px]">
            {[
              {
                icon: Gauge,
                title: "Stable Performance",
                desc: "Live lab environments that stay responsive under peak student load.",
                hoverStat: "99.9%",
                hoverLabel: "Session Uptime SLA",
                hoverDetail: "Engineered for zero lag — even with 500+ concurrent users.",
                rowSpan: false,
              },
              {
                icon: Shield,
                title: "Zero Session Crashes",
                desc: "Auto-failover and real-time monitoring ensure uninterrupted training sessions every time.",
                hoverStat: "0",
                hoverLabel: "Mid-Session Failures",
                hoverDetail: "Real-time health checks, instant failover, and automatic session recovery — so no student ever loses progress.",
                rowSpan: true,
              },
              {
                icon: Users,
                title: "Batch Isolation",
                desc: "Every batch runs in its own isolated environment with zero cross-contamination.",
                hoverStat: "100%",
                hoverLabel: "Environment Isolation",
                hoverDetail: "Dedicated compute, storage, and networking per batch — no noisy neighbors, ever.",
                rowSpan: false,
              },
              {
                icon: Rocket,
                title: "Instant Provisioning",
                desc: "Spin up labs for your entire class in minutes, not hours.",
                hoverStat: "500+",
                hoverLabel: "Labs Deployed at Once",
                hoverDetail: "Massive parallel provisioning — spin up hundreds of lab environments simultaneously for even the largest training batches.",
                rowSpan: false,
              },
              {
                icon: UserCheck,
                title: "Instructor-Level Control",
                desc: "Full visibility and control over every student's lab from a single dashboard.",
                hoverStat: "1",
                hoverLabel: "Dashboard for Everything",
                hoverDetail: "Monitor progress, reset environments, extend sessions, and manage access — all from one place.",
                rowSpan: false,
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 ${card.rowSpan ? 'row-span-2' : ''}`}
              >
                {/* Default face */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transition-opacity duration-500 group-hover:opacity-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 mb-4">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                </div>

                {/* Hover face */}
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-600/20 to-purple-900/30 backdrop-blur-sm">
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-purple-300 to-orange-400 bg-clip-text text-transparent mb-2">{card.hoverStat}</span>
                  <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3">{card.hoverLabel}</span>
                  <p className="text-xs text-gray-300 leading-relaxed max-w-[220px]">{card.hoverDetail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — Virtual Training Labs */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-50 via-purple-50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-700">Our Core Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              <span className="text-gray-900">Virtual Training Labs.</span><br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Managed End-to-End.</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-6">
              We give training companies a fully managed lab infrastructure — so trainers can focus on teaching, not troubleshooting cloud environments.
            </p>
            <Link to="/training-labs">
              <Button variant="orange" size="lg" className="rounded-full">
                Explore Virtual Training Labs <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Main Value Prop Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Left: Big Statement Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-500 rounded-3xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl p-10 lg:p-12 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug">
                    Structured Lab Infrastructure — Engineered for Live Training
                  </h3>
                  <p className="text-orange-400/90 text-base font-semibold mb-4">
                    Every batch. Every learner. Every session.
                  </p>
                  <p className="text-gray-400 text-base leading-relaxed mb-5">
                    CloudAdda provisions isolated, high-performance lab environments built specifically for hands-on IT training delivery — not general-purpose hosting.
                  </p>
                  <p className="text-gray-300 text-sm font-semibold mb-3">Each learner receives:</p>
                  <ul className="space-y-2">
                    {[
                      "A dedicated, sandboxed environment",
                      "Pre-configured tools aligned to your curriculum",
                      "Controlled access & resource limits",
                      "Session-level snapshot & restore",
                      "Stable performance under peak concurrency"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  {["Linux Labs", "Windows Labs", "Multi-VM Topologies", "GPU Workloads", "Custom Environments"].map((tag) => (
                    <span key={tag} className="bg-white/10 text-white/80 text-sm px-3 py-1.5 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: Rocket,
                  title: "Provision Entire Batches Instantly",
                  desc: "Deploy 50–500 isolated lab environments in minutes — with identical configurations and zero manual setup.",
                  footer: "No scripts. No CLI work. No environment drift.",
                  gradient: "from-purple-500 to-purple-600"
                },
                {
                  icon: RotateCcw,
                  title: "Controlled Snapshot & Recovery",
                  desc: "One-click snapshot allows instant rollback to a clean state — per student, per batch, without affecting others.",
                  footer: "Zero disruption.",
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: Shield,
                  title: "True Batch Isolation",
                  desc: "Every learner operates in a secure, sandboxed environment. No cross-session contamination. No shared credentials.",
                  footer: "No data bleed between cohorts.",
                  gradient: "from-teal-500 to-teal-600"
                },
                {
                  icon: BarChart3,
                  title: "Operational Visibility for Trainers",
                  desc: "Monitor resource usage, lab status, and learner activity in real-time — from one structured control interface.",
                  footer: "Intervene when required. Scale when needed. Reset instantly.",
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((feature) => (
                <div key={feature.title} className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{feature.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{feature.desc}</p>
                  <p className="text-xs text-gray-400 font-medium mt-auto">{feature.footer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "50,000+", label: "Labs Deployed" },
                { value: "200+", label: "Training Partners" },
                { value: "99.9%", label: "Session Uptime" },
                { value: "<5 min", label: "Avg. Setup Time" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Dashboard. Powerful Control. */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">Simple Dashboard. Powerful Control.</h2>
            <p className="text-xl text-muted-foreground">Manage hundreds of students and labs from one intuitive interface</p>
          </div>

          <div className="space-y-24">
            {/* Feature 1: Easy Management */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-2">
                  <Activity className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700 font-semibold">Easy Management</span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">Monitor All Labs at a Glance</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  See real-time status of every student's environment. CPU usage, memory consumption, 
                  network activity — all in one clean dashboard. No more guessing if labs are working.
                </p>
                
                <ul className="space-y-4">
                  {["Real-time resource monitoring", "Instant lab status updates", "Performance analytics", "One-click environment controls"].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                  <video className="w-full h-auto" controls muted autoPlay loop>
                    <source src="https://media.cloudadda.com/file/clouaddda-training-page-vid-1-view-all-labs.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Feature 2: Student Access Control */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                  <video className="w-full h-auto" controls muted autoPlay loop>
                    <source src="https://media.cloudadda.com/file/CA-Training-page-vid-2-without-leaving-youre-seat.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-semibold">Remote Access</span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">Help Participants Without Leaving Your Seat</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">View participant screens, take control when needed, and provide instant help. No more walking around the classroom or dealing with "it's not working" complaints.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["Remote screen viewing", "Take control assistance"].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3: Snapshot & Revert */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-4 py-2">
                  <RotateCcw className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-700 font-semibold">Snapshot & Revert</span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">Something Broke? Just Revert.</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If a student misconfigures something or breaks their environment, they can instantly revert back to a pre-saved snapshot. No downtime, no waiting for support — just one click to get back on track.
                </p>
                
                <ul className="space-y-4">
                  {["One-click snapshot before risky changes", "Instant rollback to last working state", "Students stay unblocked and keep learning", "No trainer intervention needed"].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 space-y-6">
                    <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-border">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="font-medium text-foreground text-sm">Lab Environment — Running</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Snapshot saved 2 min ago</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex flex-col items-center space-y-2 bg-white rounded-xl p-5 shadow-sm border border-border flex-1">
                        <HardDrive className="w-8 h-8 text-orange-500" />
                        <span className="text-sm font-semibold text-foreground">Take Snapshot</span>
                        <span className="text-xs text-muted-foreground text-center">Save current state</span>
                      </div>
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                      <div className="flex flex-col items-center space-y-2 bg-white rounded-xl p-5 shadow-sm border border-border flex-1">
                        <RotateCcw className="w-8 h-8 text-orange-500" />
                        <span className="text-sm font-semibold text-foreground">Revert</span>
                        <span className="text-xs text-muted-foreground text-center">Restore in one click</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-border">
                      <p className="text-xs font-semibold text-foreground mb-2">Saved Snapshots</p>
                      <div className="space-y-2">
                        {["Before Docker config change", "Clean install baseline"].map((name, i) => (
                          <div key={i} className="flex items-center justify-between text-xs bg-orange-50 rounded-lg px-3 py-2">
                            <span className="text-foreground">{name}</span>
                            <span className="text-orange-600 font-medium cursor-pointer">Restore</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Custom Lab Configuration */}
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2">
                  <Rocket className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">Custom Configuration</span>
                </div>
                
                <h3 className="text-4xl font-bold text-foreground">We Build Your Perfect Lab Environment</h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  While we have pre-configured templates for common training scenarios, we custom-build and configure 
                  each lab environment to match your specific curriculum requirements and training needs. You focus on teaching — we handle the infrastructure.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  {["Custom-built for your curriculum", "Pre-configured training templates", "Tailored to your specific needs", "Ready-to-use lab access provided"].map((feature, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2 text-center">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training Companies Choose CloudAdda */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Why Training Companies
              <br />
              <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 bg-clip-text text-transparent">
                Choose CloudAdda
              </span>
            </h2>
            <div className="relative max-w-4xl mx-auto mt-12 mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-orange-500/10 to-purple-600/10 rounded-3xl blur-2xl" />
              <div className="relative border border-purple-200/60 rounded-3xl px-10 py-10 bg-white/80 backdrop-blur-sm">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-6">
                  We are your <span className="font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">extended IT arm</span> — here to help and support your training, not compete with you like other virtual lab providers.
                </p>
                <p className="text-2xl md:text-3xl font-black text-center tracking-tight">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">We don't do trainings.</span>{" "}
                  <span className="text-gray-900">We support them.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { number: 1, title: "Designed for Training, Not Generic Cloud Use", description: "Built from the ground up for live training workflows." },
                { number: 2, title: "Predictable, Batch-Based Pricing", description: "No surprise cloud bills. Pricing per learner, per batch." },
                { number: 3, title: "Zero Operational Overhead", description: "No infra setup. No monitoring. No firefighting." },
                { number: 4, title: "Proven at Enterprise Scale", description: "Used by large training providers delivering high-volume programs." },
              ].map((item) => (
                <div key={item.number} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {item.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <img src="/lovable-uploads/f690fdec-4d37-4062-af23-158e9b86a21e.png" alt="Professional man in business suit with welcoming gesture" className="w-full max-w-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Horizontally Sliding Title */}
          <div className="text-center mb-20 relative">
            <div className="h-32 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-6xl mx-auto">
                <div className="flex transition-transform duration-700 ease-in-out" style={{
                  transform: `translateX(-${currentSlideIndex * 100}%)`
                }}>
                  {slidingWords.map((slide, index) => (
                    <div key={index} className="min-w-full flex items-center justify-center px-8">
                      <h2 className="text-4xl lg:text-6xl font-bold text-center leading-tight whitespace-nowrap">
                        <span className="text-gray-900">{slide.text} </span>
                        <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 bg-clip-text text-transparent">{slide.highlight}</span>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Progress indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {slidingWords.map((_, index) => (
                <div key={index} className={`h-2 w-8 rounded-full transition-all duration-300 ${index === currentSlideIndex ? 'bg-purple-600' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[{
              number: "99.9%",
              label: "Uptime SLA",
              icon: Shield
            }, {
              number: "24/7",
              label: "Human Support",
              icon: Users
            }, {
              number: "< 2hrs",
              label: "Setup Time",
              icon: Clock
            }, {
              number: "500+",
              label: "Happy Clients",
              icon: Award
            }].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Premium Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: Users,
              title: "You Talk to Humans",
              description: "Engineers, not bots. Every ticket. Every time. Real people who understand your problems.",
              color: "bg-gradient-to-br from-blue-500 to-blue-600",
              badge: "Human Touch"
            }, {
              icon: Settings,
              title: "We Customize Everything",
              description: "No one-size-fits-all. We tailor setups to your exact use case and requirements.",
              color: "bg-gradient-to-br from-purple-500 to-purple-600",
              badge: "Bespoke Solutions"
            }, {
              icon: Zap,
              title: "We Move Fast",
              description: "Environments provisioned in hours, not days. Speed without compromising quality.",
              color: "bg-gradient-to-br from-orange-500 to-orange-600",
              badge: "Lightning Speed"
            }, {
              icon: Shield,
              title: "We Don't Oversell",
              description: "When you pay for performance, you get performance. Guaranteed resources, always.",
              color: "bg-gradient-to-br from-green-500 to-green-600",
              badge: "Guaranteed Performance"
            }].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.badge}
                  </div>
                  
                  {/* Gradient Background Effect */}
                  <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-6">
                    <div className={`w-12 h-1 bg-gradient-to-r ${item.color.replace('bg-gradient-to-br', '')} rounded-full group-hover:w-20 transition-all duration-300`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium CTA - SINGLE CTA */}
          <div className="text-center mt-16">
            <Link to="/contact" onClick={() => handleNavigation('/contact')}>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Experience the Difference
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <div className="mt-12">
              <div className="inline-flex items-center justify-center space-x-2 bg-purple-100 text-purple-600 px-6 py-3 rounded-full text-sm font-semibold">
                <HeartHandshake className="w-4 h-4" />
                <span>Trusted by 500+ Companies Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-purple-300 bg-clip-text text-transparent">What Our Customers Say</span>
              <br />
              <span className="text-2xl lg:text-3xl font-normal text-gray-600">
                (Before They Tell Their Friends)
              </span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl p-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex text-yellow-400 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-8">
                <div className="text-6xl text-purple-200 absolute -top-4 -left-2 font-serif">"</div>
                <blockquote className="text-xl text-gray-700 leading-relaxed relative z-10 italic text-center min-h-[120px] flex items-center justify-center">
                  {testimonials[currentTestimonialIndex].quote}
                </blockquote>
                <div className="text-6xl text-purple-200 absolute -bottom-8 -right-2 font-serif rotate-180">"</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-1 bg-purple-600 rounded-full mx-auto mb-4"></div>
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonialIndex].author}
                </p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonialIndex].position}
                </p>
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentTestimonialIndex(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentTestimonialIndex ? 'bg-purple-600' : 'bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support That Actually Shows Up */}
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
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-xl text-gray-800 font-medium">{item}</span>
                </div>
              ))}
              
              <p className="text-xl text-gray-600 italic pt-6 border-t border-gray-200 mt-8">
                This is managed service, not ticket ping-pong.
              </p>
            </div>

            <div className="relative">
              <img src="/lovable-uploads/da1c17cc-16bf-47be-834a-68e473782db8.png" alt="Support representative helping with setup" className="w-full h-auto rounded-3xl" />
            </div>
          </div>
        </div>
      </section>


      {/* The Closer Section */}
      <section className="py-32 bg-white text-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-orange-600 font-semibold">The Moment of Truth</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Your Competition
              </span>
              <br />
              <span className="text-gray-900">
                Is Already Moving.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">While You're Managing Servers...</h3>
                    <p className="text-gray-600">They're training more customers, launching faster, and scaling without the headaches.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">While You're Fighting Downtime...</h3>
                    <p className="text-gray-600">They're building reputation, winning clients, and growing revenue.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-50 border border-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">While You're Troubleshooting...</h3>
                    <p className="text-gray-600">They're innovating, creating, and leaving you behind.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Cost of Waiting</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-500 mb-1">$10K+</div>
                      <p className="text-gray-600">Lost revenue per month from infrastructure issues</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange-500 mb-1">40hrs</div>
                      <p className="text-gray-600">Wasted weekly on server management</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-500 mb-1">60%</div>
                      <p className="text-gray-600">Of teams switch within 6 months anyway</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-gray-100 space-y-4">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join 500+ companies who stopped fighting infrastructure and started winning customers.
            </p>
            
            <Link to="/contact" onClick={() => handleNavigation('/contact')}>
              <Button size="lg" variant="orange" className="rounded-full px-10 py-5 text-lg mt-2">
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400 pt-2">
              <span>Setup in hours</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>Predictable pricing</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>Enterprise security</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/ab89b288-4111-435f-8c60-3551cd55182c.png" alt="CloudAdda Logo" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <nav>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/training-labs" onClick={() => handleNavigation('/training-labs')} className="hover:text-white transition-colors">Training Labs</Link></li>
                </ul>
              </nav>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <nav>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Press</Link></li>
                  <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </nav>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <nav>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/support" onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link to="/support" onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link to="/trainer-adda" onClick={() => handleNavigation('/trainer-adda')} className="hover:text-white transition-colors">Community</Link></li>
                  <li><Link to="/support" onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors">Status</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" onClick={() => handleNavigation('/privacy-policy')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" onClick={() => handleNavigation('/terms-of-service')} className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
