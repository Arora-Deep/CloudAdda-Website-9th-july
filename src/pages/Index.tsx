import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Monitor, Server, Users, CheckCircle, Star, Shield, Zap, Globe, Clock, DollarSign, Headphones, Code, Brain, Award, Play, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
                          <Link to="/training-labs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/cloud-desktops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/vps" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50 pt-20 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 inline-flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Born in India, Built for the World</span>
              </Badge>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Infrastructure That 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">
                  Just Works
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Stop wrestling with servers, VMs, and network configs. We deliver enterprise-grade cloud infrastructure 
                that scales instantly, performs flawlessly, and costs 60% less than the competition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/contact">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">60%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">&lt;5min</div>
                  <div className="text-sm text-gray-600">Setup Time</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png" alt="CloudAdda Infrastructure Dashboard" className="w-full h-auto rounded-3xl shadow-2xl border border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Complete Infrastructure Solutions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">CloudAdda Handles Your Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From training labs to production workloads, we've got every infrastructure need covered. 
              Choose your solution and scale without limits.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Training Labs */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-purple-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  Training Labs
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Ready-to-run lab environments for training companies. Deploy complex setups in minutes, 
                  not hours. Perfect for bootcamps, workshops, and technical training.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <ul className="space-y-3">
                  {[
                    "Pre-configured environments",
                    "Auto-scaling for any class size",
                    "99.9% session uptime",
                    "Instant lab provisioning"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200">
                    <Link to="/training-labs">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Cloud Desktops */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-orange-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                  <Monitor className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                  Cloud Desktops
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  High-performance virtual desktops accessible from anywhere. Secure, scalable, 
                  and faster than traditional VDI solutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <ul className="space-y-3">
                  {[
                    "GPU-accelerated performance",
                    "Enterprise-grade security",
                    "Global access from any device",
                    "Automated backup & recovery"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full group-hover:bg-orange-50 group-hover:border-orange-200">
                    <Link to="/cloud-desktops">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* VPS Hosting */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-purple-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <Server className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  VPS Hosting
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Lightning-fast VPS with AMD EPYC processors. Raw performance, transparent pricing, 
                  and infrastructure that doesn't break your budget.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <ul className="space-y-3">
                  {[
                    "AMD EPYC 7003 series processors",
                    "NVMe SSD storage",
                    "Unmetered bandwidth",
                    "24/7 expert support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-200">
                    <Link to="/vps">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-6">
              <Heart className="w-4 h-4 mr-2" />
              A Cloud Company That Actually Cares
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Experience the Difference</h2>
            
            <div className="mb-12"></div>
            
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-orange-400 border-2 border-white"></div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ companies worldwide</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: "Security Without Compromise",
                  description: "Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and 24/7 monitoring."
                },
                {
                  icon: Zap,
                  title: "Performance That Delivers",
                  description: "AMD EPYC processors, NVMe storage, and global CDN ensure your applications run at peak performance."
                },
                {
                  icon: Headphones,
                  title: "Support That Actually Helps",
                  description: "Real engineers, not chatbots. Get expert help when you need it, with average response times under 15 minutes."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img src="/lovable-uploads/69230053-96f2-4f6a-ad77-9419979d6f8e.png" alt="CloudAdda team providing support" className="w-full h-auto rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Honest Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no surprise bills. Just straightforward pricing for world-class infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Training Labs */}
            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors relative">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Training Labs</CardTitle>
                <CardDescription className="text-gray-600">Perfect for training companies and bootcamps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">Custom Pricing</div>
                  <div className="text-sm text-gray-600">Based on your requirements</div>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Pre-configured environments",
                    "Auto-scaling infrastructure",
                    "99.9% uptime SLA",
                    "24/7 technical support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link to="/pricing#training-labs">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Cloud Desktops */}
            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors relative">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Cloud Desktops</CardTitle>
                <CardDescription className="text-gray-600">High-performance virtual desktops</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">Starting ₹500</div>
                  <div className="text-sm text-gray-600">per desktop per month</div>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "GPU-accelerated performance",
                    "Global access",
                    "Enterprise security",
                    "Automated backups"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link to="/pricing#cloud-desktops">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>

            {/* VPS */}
            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors relative">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">VPS Hosting</CardTitle>
                <CardDescription className="text-gray-600">High-performance virtual servers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-gray-900">Starting ₹300</div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "AMD EPYC processors",
                    "NVMe SSD storage",
                    "Unmetered bandwidth",
                    "24/7 expert support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link to="/pricing#vps">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 mb-6">
              <Award className="w-4 h-4 mr-2" />
              Don't Just Take Our Word For It
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See What Our Customers Are Saying</h2>
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
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-purple-200 transition-colors relative">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                    <div className="text-xs text-purple-600 font-medium">{testimonial.stats}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-100 mb-12">
            Experience the power of CloudAdda. Launch your infrastructure in minutes and scale without limits.
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 rounded-full px-12 py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Book a Demo
            <ArrowRight className="ml-3 h-5 w-5" />
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

export default Index;
