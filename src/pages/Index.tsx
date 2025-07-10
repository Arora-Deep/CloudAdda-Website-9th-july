import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star, Award, Clock, HeartHandshake, Rocket, Monitor, Server, Database, Activity, Cpu, HardDrive, Target, TrendingUp, Lightbulb, Sparkles, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "CloudAdda – Virtual Training Labs, Cloud Desktops (VDI) & VPS Hosting",
    description: "Run powerful virtual training labs, high-performance VDI desktops, and NVMe VPS servers with CloudAdda. Same-day setup, 99.9% uptime, and real human support."
  });

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
  const customerLogos = [
    {
      name: "NIIT",
      logo: "/lovable-uploads/15f02da9-f936-4b39-a769-8baf4f7c05ff.png"
    },
    {
      name: "Bennett & Coleman - The Times of India",
      logo: "/lovable-uploads/b8a0bbbe-66be-4c64-826a-4bba7e8c5684.png"
    },
    {
      name: "Royal Arabian Destination Management",
      logo: "/lovable-uploads/cc781258-e902-4178-8607-3c48b3ae0f4a.png"
    },
    {
      name: "Indian Institute of Science",
      logo: "/lovable-uploads/8d8ce7c4-1e77-4147-a1ae-2452ae2cf683.png"
    },
    {
      name: "Red Hat",
      logo: "/lovable-uploads/b35e7ed6-37e6-49c5-a22b-f48ae5ca78df.png"
    },
    {
      name: "Molecular Filtration Group",
      logo: "/lovable-uploads/ef895104-df65-4cbf-86e7-26f55337c5fa.png"
    },
    {
      name: "Focus Group",
      logo: "/lovable-uploads/41eb1686-5580-434b-947a-5e21f578c058.png"
    },
    {
      name: "NUAGE",
      logo: "/lovable-uploads/4f827c05-6a04-4635-b840-f9bc202e40ca.png"
    },
    {
      name: "Stride Data",
      logo: "/lovable-uploads/8a964dfa-c86e-485d-8c6e-f934d08e9d39.png"
    },
    {
      name: "EdForce",
      logo: "/lovable-uploads/db3358c1-b1a9-4070-a4a3-87901202446e.png"
    },
    {
      name: "Xebia",
      logo: "/lovable-uploads/168f3b7e-5abe-4850-bdac-add53e21fcb4.png"
    },
    {
      name: "Mazenet",
      logo: "/lovable-uploads/78472758-6da6-4403-9e80-a1e2d61a0893.png"
    },
    {
      name: "Unext",
      logo: "/lovable-uploads/b30cdbbc-43d3-4690-bc58-4817dcedd4d6.png"
    },
    {
      name: "SpringPeople",
      logo: "/lovable-uploads/df4fd201-2c8e-4ad6-b65a-1f0d13add86d.png"
    },
    {
      name: "Novel Vista",
      logo: "/lovable-uploads/21459b8a-fdf1-42f6-8503-d17013aede66.png"
    },
    {
      name: "Overture Research",
      logo: "/lovable-uploads/c65616c4-1ed8-4c76-8cd6-93f0ddd9a95a.png"
    },
    {
      name: "Learnlytica",
      logo: "/lovable-uploads/eb28034e-23b0-4ede-a4d8-635ce65d965e.png"
    },
    {
      name: "LeelaJay",
      logo: "/lovable-uploads/4e4d4486-2767-498c-816b-a1beee44cbf9.png"
    },
    {
      name: "Alchemy",
      logo: "/lovable-uploads/02252fc8-4957-494c-82db-1f7917b81b8b.png"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "CloudAdda's support team provides immediate solutions, helping with difficult labs others can't complete. The platform has streamlined our workflow, enhancing productivity with seamless cloud collaboration. Its virtual training labs offer an intuitive interface, clear instructions, and a well-organized layout, making the learning process effective. I wholeheartedly recommend CloudAdda for its user-friendly interface, comprehensive content, and hands-on exercises.",
      author: "Vigneshwaran",
      position: "IT Infrastructure Manager, Mazenet Solution Pvt Ltd"
    },
    {
      quote: "CloudAdda's labs, used by my team of 100 trainees for IT Infra training, were supported by an efficient team that quickly resolved minor issues professionally. The seamless, interruption-free experience ensured high-quality learning. The user-friendly interface and comprehensive batch management were extremely useful. I strongly recommend CloudAdda for its effective virtual labs and excellent support team.",
      author: "Abdul Raouf",
      position: "IT Trainer & Consultant"
    },
    {
      quote: "CloudAdda's exceptional Virtual Lab support, with prompt and effective assistance, ensures smooth operation and success. Its unmatched customer support and advanced features enhance the learning experience, setting it apart. The platform's reliability, accessibility, and seamless integration streamline processes, fostering efficiency. With an intuitive interface and excellent support, CloudAdda is ideal for effective training. Highly recommended for its robust features and user-friendly design.",
      author: "Gunjan Arora",
      position: "DELIVERY MANAGER- LEARNING SERVICES, NIIT - StackRoute"
    }
  ];

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/ab89b288-4111-435f-8c60-3551cd55182c.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
              </div>
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
                          <Link to="/training-labs" onClick={() => handleNavigation('/training-labs')} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/cloud-desktops" onClick={() => handleNavigation('/cloud-desktops')} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/vps" onClick={() => handleNavigation('/vps')} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
              <Link to="/trainer-adda" onClick={() => handleNavigation('/trainer-adda')} className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" onClick={() => handleNavigation('/pricing')} className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" onClick={() => handleNavigation('/support')} className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                    Log In
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainer.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cursor-pointer"
                    >
                      Trainer Login
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainee.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cursor-pointer"
                    >
                      Trainee Login
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/contact" onClick={() => handleNavigation('/contact')}>
                <Button variant="orange" className="text-white rounded-full">
                  Start Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Stop Fighting the Infra.<br />
                  <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 bg-clip-text text-transparent">Start Shipping Work.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">CloudAdda runs your Virtual Training Labs, Cloud Desktops & VPS — so your team doesn't have to.</p>
                <p className="text-lg text-gray-800 font-semibold">
                  No chaos. No cloud headaches. Just clean infra that does its damn job.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" onClick={() => handleNavigation('/contact')}>
                  <Button size="lg" variant="orange" className="text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/pricing" onClick={() => handleNavigation('/pricing')}>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-50">
                    See Pricing
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
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden space-y-4">
            {/* First row - left to right */}
            <div className="flex animate-marquee">
              {customerLogos.slice(0, Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {customerLogos.slice(0, Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row - right to left */}
            <div className="flex animate-marquee-reverse">
              {customerLogos.slice(Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {customerLogos.slice(Math.ceil(customerLogos.length / 2)).map((logo, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-6 w-48 h-24 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 w-full h-full flex items-center justify-center">
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Pain Section */}
      <section className="py-20 bg-purple-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
                <span className="text-white">Focus on what you do best -</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">we'll take care of the rest.</span>
              </h2>
              
              <div className="space-y-6 text-center lg:text-left">
                <p className="text-xl text-white leading-relaxed">
                  You're not here to manage servers.
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                  You're here to teach. Build. Scale. Win.
                </p>
                <p className="text-xl text-white leading-relaxed">
                  But you're stuck in cloud chaos — provisioning environments, babysitting infra, solving support tickets.
                </p>
                
                <div className="mt-12 space-y-4">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-400">
                    That's our job.
                  </div>
                  <p className="text-xl text-white leading-relaxed">
                    We run your labs, your virtual desktops, your cloud infra.<br />
                    You run your business. Simple.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img src="/lovable-uploads/69230053-96f2-4f6a-ad77-9419979d6f8e.png" alt="Frustrated person at desk with laptop" className="w-full max-w-lg h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              It's Not for Everyone.
              <br />
              <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 bg-clip-text text-transparent">
                Just the Smart Ones.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-8">
                If
              </div>
              
              {["You're tired of spending hours configuring labs.", "You want your team to work — not wait for IT.", "You care about performance. But you care more about reliability.", "You want to scale, without feeling like you're managing a data center."].map((text, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {text}
                  </p>
                </div>
              ))}
              
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mt-12">
                Then you're our people.
              </div>
              <div className="w-24 h-1 bg-purple-600 rounded-full"></div>
            </div>
            
            <div className="flex justify-center">
              <img src="/lovable-uploads/f690fdec-4d37-4062-af23-158e9b86a21e.png" alt="Professional man in business suit with welcoming gesture" className="w-full max-w-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* The Fix Section - UPDATED WITH LEARN MORE BUTTONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-purple-400 bg-clip-text text-transparent">CloudAdda Handles Your Infra.</span>
              <span className="text-gray-900"> So You Can Handle Your Business.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't give you a control panel and disappear. We deliver the infrastructure — fast, fully configured, and rock-solid.
            </p>
          </div>

          <div className="space-y-24">
            {/* Training Labs */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Virtual Training Labs</h3>
                  <p className="text-sm text-purple-600 font-semibold">For Training Firms & Enterprises</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">We don't give you a console. We give you results. Send us your exact training requirements — Windows, Linux, custom stacks, networking labs — and we deliver the whole hands-on cloud lab, fully configured, at scale. Faster than your internal team. More reliable than ad-hoc clouds.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/training-labs" onClick={() => { window.location.href = '/training-labs'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100); }}>
                    <Button variant="outline" className="rounded-full px-8 py-3 border-orange-500 text-orange-500 hover:bg-orange-50">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Training Lab Dashboard</h4>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-900">Windows Lab Environment</span>
                      </div>
                      <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">Active</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-3">
                        <Server className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-gray-900">Linux Server Stack</span>
                      </div>
                      <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Running</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-3">
                        <Database className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium text-gray-900">Network Lab Setup</span>
                      </div>
                      <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Ready</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">40 instances</span> • <span className="font-semibold">99.9% uptime</span> • <span className="font-semibold">2hr setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Virtual Desktops */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Cloud Desktops</h3>
                  <p className="text-sm text-purple-600 font-semibold">DaaS for Modern Teams</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">High-performance, secure virtual desktops — ready to power remote teams, call centers, dev shops, and full-scale organizations. Blazing fast, customizable, and easier than hiring IT admins.</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Starts at ₹1,499/user/month</span></p>
                    <p><span className="font-semibold">From 2vCPU, 4GB RAM, SSD/NVMe, 100% SLA</span></p>
                    <p><span className="font-semibold">Built-in snapshots, security policies, and remote access</span></p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/cloud-desktops" onClick={() => { window.location.href = '/cloud-desktops'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100); }}>
                    <Button variant="outline" className="rounded-full px-8 py-3 border-orange-500 text-orange-500 hover:bg-orange-50">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="lg:order-1 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Desktop Management</h4>
                    <Activity className="w-5 h-5 text-purple-600" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
                        <div className="flex items-center justify-between">
                          <Monitor className="w-6 h-6" />
                          <span className="text-2xl font-bold">24</span>
                        </div>
                        <p className="text-sm opacity-90 mt-2">Active Desktops</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
                        <div className="flex items-center justify-between">
                          <Cpu className="w-6 h-6" />
                          <span className="text-2xl font-bold">89%</span>
                        </div>
                        <p className="text-sm opacity-90 mt-2">Performance</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Resource Usage</span>
                        <span className="text-xs text-gray-500">Real-time</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">CPU</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">RAM</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '60%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VPS */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900">Virtual Private Servers</h3>
                  <p className="text-sm text-purple-600 font-semibold">For Developers & Startups</p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Don't waste time on cheap, oversold VPS providers. CloudAdda gives you fast, isolated, NVMe-powered instances with real support and predictable performance.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Starts at ₹199/month</span></p>
                    <p><span className="font-semibold">From 96vCPU, 768GB RAM, full root access</span></p>
                    <p><span className="font-semibold">Indian & global locations. Backups included.</span></p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/vps" onClick={() => { window.location.href = '/vps'; setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 100); }}>
                    <Button variant="outline" className="rounded-full px-8 py-3 border-orange-500 text-orange-500 hover:bg-orange-50">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Server Overview</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">Online</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Server className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">8</div>
                        <div className="text-xs text-gray-600">vCPU</div>
                      </div>
                      
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Database className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">16GB</div>
                        <div className="text-xs text-gray-600">RAM</div>
                      </div>
                      
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <HardDrive className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-gray-900">500GB</div>
                        <div className="text-xs text-gray-600">NVMe</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Server Locations</span>
                        <Globe className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Mumbai, India</span>
                          <span className="text-green-600 font-medium">12ms</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Singapore</span>
                          <span className="text-green-600 font-medium">45ms</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Frankfurt</span>
                          <span className="text-green-600 font-medium">120ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Switch You Didn't Know You Needed Section */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              The Switch You Didn't Know
              <br />
              <span className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 bg-clip-text text-transparent">
                You Needed.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what life's like on the other side — faster, simpler, happier.
            </p>
          </div>

          <div className="grid lg:grid-cols-7 gap-8 items-center">
            {/* Left Image - Confused Person */}
            <div className="lg:col-span-2 flex justify-center">
              <img src="/lovable-uploads/9b9e01c2-e3f9-4704-9bc8-59a73b35ce7d.png" alt="Confused person representing before state" className="w-full max-w-lg h-auto object-contain transform scale-[2.5]" />
            </div>

            {/* Center Table */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-red-50 to-green-50">
                        <th className="text-left p-8 text-xl font-bold text-red-600 border-r border-gray-200">
                          ❌ Before CloudAdda
                        </th>
                        <th className="text-left p-8 text-xl font-bold text-green-600">
                          ✅ After CloudAdda
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[{
                      before: "Manual infra setup. Every time.",
                      after: "Labs provisioned in hours — just send a config."
                    }, {
                      before: "Labs crash mid-session. Chaos.",
                      after: "Rock-solid infra, every session."
                    }, {
                      before: "Devs on slow laptops. Lag everywhere.",
                      after: "Fast cloud desktops built to scale."
                    }, {
                      before: "Zoom + IDE = system freeze.",
                      after: "Secure, lag-free access — even for remote teams."
                    }, {
                      before: "AWS bills with no logic.",
                      after: "Flat pricing. No surprises."
                    }, {
                      before: "Confusing dashboards. No support.",
                      after: "Friendly support that actually helps."
                    }].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-25 transition-all duration-200">
                          <td className="p-6 text-base text-gray-700 border-r border-gray-100 bg-red-25 leading-relaxed">
                            {row.before}
                          </td>
                          <td className="p-6 text-base text-gray-700 bg-green-25 leading-relaxed">
                            {row.after}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Image - Happy Person */}
            <div className="lg:col-span-2 flex justify-center">
              <img src="/lovable-uploads/8a2d7816-a253-40ef-a846-db190a4798a5.png" alt="Happy person representing after state" className="w-full max-w-lg h-auto object-contain transform scale-[2.5]" />
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

      {/* Testimonials Section - UPDATED WITH SINGLE CARD AND AUTO-SCROLL */}
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
                <p className="text-xl text-gray-700 leading-relaxed relative z-10 italic text-center min-h-[120px] flex items-center justify-center">
                  {testimonials[currentTestimonialIndex].quote}
                </p>
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
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonialIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About CloudAdda Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">CloudAdda is Born in India,</span>
            <span className="text-white"> Built for the World</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl">
              We're not a low-end provider. We're a new kind of cloud — built around your actual needs. No bloated control panels, no guessing, no jargon.
            </p>
            <p className="text-xl">
              We specialize in three things, and we do them well.
            </p>
            <p className="text-xl">
              All of it with elite customer service, clear pricing, and a 100% commitment to reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-green-700 via-blue-700 to-purple-600 bg-clip-text text-transparent">
                Transparent Pricing.
              </span>
              <br />
              <div className="inline-flex items-center justify-center bg-gradient-to-r from-orange-100 to-red-100 border-4 border-orange-400 rounded-3xl px-12 py-6 mt-8 shadow-lg">
                <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  No Hidden Gotchas. Ever.
                </span>
              </div>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[{
            title: "Training Labs",
            price: "Custom Quote",
            subtitle: "Based on your exact requirements",
            description: "We ask 3-5 questions about your training needs, then deliver a complete lab environment.",
            features: ["Same-day delivery possible", "Fully customized environments", "Windows, Linux, or mixed stacks", "Scalable to any number of users"],
            cta: "View Pricing",
            gradient: "from-blue-500 to-blue-600",
            link: "/pricing"
          }, {
            title: "Virtual Desktops",
            price: "₹3,299",
            subtitle: "per user/month",
            description: "High-performance cloud desktops with 2vCPU, 4GB RAM, and enterprise-grade security.",
            features: ["2vCPU, 4GB RAM, SSD storage", "99.9% uptime guarantee", "Built-in security & compliance", "Instant scaling"],
            cta: "View Pricing",
            gradient: "from-purple-500 to-purple-600",
            link: "/pricing"
          }, {
            title: "VPS Hosting",
            price: "₹1,499",
            subtitle: "per month",
            description: "NVMe-powered virtual servers with AMD EPYC processors and dedicated resources.",
            features: ["NVMe SSD storage", "AMD EPYC processors", "Full root access", "Multiple data center locations"],
            cta: "View Pricing",
            gradient: "from-orange-500 to-orange-600",
            link: "/pricing"
          }].map((plan, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-purple-200">
                  {/* Gradient top bar */}
                  <div className={`h-3 bg-gradient-to-r ${plan.gradient}`}></div>
                  
                  <div className="p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                        <div className="text-gray-600 text-lg">{plan.subtitle}</div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-center mb-8 leading-relaxed text-lg">{plan.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-6 h-6 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link to={plan.link} onClick={() => handleNavigation(plan.link)}>
                      <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg`}>
                        {plan.cta}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6 text-lg">Need something custom? We've got you covered.</p>
            <Link to="/contact" onClick={() => handleNavigation('/contact')}>
              <Button size="lg" variant="outline" className="text-orange-500 border-2 border-orange-500 hover:bg-orange-50 text-lg px-8 py-4 rounded-2xl">
                Talk to Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* The Closer Section - REMOVED TESTIMONIAL */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-800/30 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">The Moment of Truth</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Your Competition
              </span>
              <br />
              <span className="text-white">
                Is Already Moving.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">While You're Managing Servers...</h3>
                    <p className="text-gray-300">They're training more customers, launching faster, and scaling without the headaches.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">While You're Fighting Downtime...</h3>
                    <p className="text-gray-300">They're building reputation, winning clients, and growing revenue.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">While You're Troubleshooting...</h3>
                    <p className="text-gray-300">They're innovating, creating, and leaving you behind.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-orange-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Make the Switch?</h3>
                    <p className="text-gray-300">Join the companies that stopped fighting infrastructure and started winning customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="text-center space-y-8 mb-16">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">The Cost of Waiting</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">$10K+</div>
                  <p className="text-gray-300">Lost revenue per month from infrastructure issues</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">40hrs</div>
                  <p className="text-gray-300">Wasted weekly on server management</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <p className="text-gray-300">Of teams switch within 6 months anyway</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-6">Make The Switch. Today.</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join 500+ companies who stopped fighting infrastructure and started winning customers.
              </p>
              
              <Link to="/contact" onClick={() => handleNavigation('/contact')}>
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                  Start Your Transformation
                  <Rocket className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              
              <p className="text-sm text-gray-400 mt-6">
                ⚡ Setup in hours, not weeks • 💰 Pay for what you use • 🔒 Enterprise security included
              </p>
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
                <img src="/lovable-uploads/ab89b288-4111-435f-8c60-3551cd55182c.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </div>
              <p className="text-gray-400">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/training-labs" onClick={() => handleNavigation('/training-labs')} className="hover:text-white transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" onClick={() => handleNavigation('/cloud-desktops')} className="hover:text-white transition-colors">Cloud Desktops</Link></li>
                <li><Link to="/vps" onClick={() => handleNavigation('/vps')} className="hover:text-white transition-colors">VPS</Link></li>
                <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Press</Link></li>
                <li><Link to="/contact" onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/support" onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/support" onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/trainer-adda" onClick={() => handleNavigation('/trainer-adda')} className="hover:text-white transition-colors">Community</Link></li>
                <li><Link to="/support" onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors">Status</Link></li>
              </ul>
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
    </div>
  );
};

export default Index;
