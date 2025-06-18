import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Server, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star,
  Cpu,
  HardDrive,
  Network,
  Globe,
  Award,
  Users,
  Target,
  TrendingUp,
  BarChart3,
  Settings,
  Code,
  Database,
  Gauge
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const VPS = () => {
  const [configForm, setConfigForm] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    requirements: "",
    budget: ""
  });
  const { toast } = useToast();

  const handleConfigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Configuration Request Submitted! 🚀",
      description: "Our technical team will contact you within 2 hours with a custom VPS recommendation.",
    });
    setConfigForm({
      name: "",
      email: "",
      company: "",
      useCase: "",
      requirements: "",
      budget: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23e2e8f0' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8 animate-bounce">
            <Server className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Enterprise-Grade VPS Hosting</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-orange-500">Raw</span>{" "}
            <span className="text-foreground">Performance,</span>{" "}
            <span className="text-purple-600">Real Control</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            No shared resources. No performance surprises. Just pure, dedicated power 
            for your applications that demand the best. 🚀
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Built on AMD EPYC processors with NVMe SSD storage and premium networking. 
            Deploy in minutes, scale instantly, and enjoy 99.9% uptime with human support 
            that actually understands your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="h-14 px-8 text-lg">
              <Zap className="w-6 h-6 mr-2" />
              Deploy Now
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
              <BarChart3 className="w-6 h-6 mr-2" />
              Performance Benchmarks
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Clock, stat: "< 60s", label: "Deploy Time", color: "text-blue-500" },
              { icon: Gauge, stat: "99.9%", label: "Uptime SLA", color: "text-green-500" },
              { icon: Shield, stat: "24/7", label: "Security Monitoring", color: "text-purple-500" },
              { icon: Users, stat: "Human", label: "Support Engineers", color: "text-orange-500" }
            ].map((item, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2 text-foreground">{item.stat}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Built for Performance
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Our <span className="text-primary">VPS Outperforms</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't oversell. We don't compromise. Every VPS gets dedicated resources and premium hardware.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Cpu,
                title: "AMD EPYC Processors",
                description: "Latest generation 64-core processors with guaranteed vCPU allocation",
                specs: ["7nm architecture", "3.4GHz base frequency", "Dedicated cores", "AVX-512 support"]
              },
              {
                icon: HardDrive,
                title: "NVMe SSD Storage",
                description: "Ultra-fast PCIe 4.0 NVMe drives with enterprise-grade reliability",
                specs: ["1M+ IOPS capability", "< 0.1ms latency", "RAID-10 protection", "Real-time monitoring"]
              },
              {
                icon: Network,
                title: "Premium Networking",
                description: "Multi-gigabit connections with DDoS protection and global backbone",
                specs: ["10Gbps uplinks", "DDoS mitigation", "Global CDN integration", "IPv4 & IPv6 ready"]
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Target className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your <span className="text-primary">Perfect Configuration</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From lightweight applications to enterprise workloads—find the right balance of power and price
            </p>
          </div>

          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="plans">Standard Plans</TabsTrigger>
              <TabsTrigger value="comparison">Full Comparison</TabsTrigger>
            </TabsList>

            <TabsContent value="plans">
              <div className="grid lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Starter VPS",
                    price: "₹999",
                    description: "Perfect for small websites and development",
                    specs: {
                      cpu: "2 vCPU",
                      ram: "4GB RAM",
                      storage: "50GB NVMe",
                      bandwidth: "2TB Transfer"
                    },
                    features: ["Full root access", "99.9% uptime SLA", "24/7 monitoring", "Free SSL certificates"],
                    popular: false
                  },
                  {
                    name: "Growth VPS",
                    price: "₹1,999",
                    description: "Ideal for growing businesses and applications",
                    specs: {
                      cpu: "4 vCPU",
                      ram: "8GB RAM",
                      storage: "100GB NVMe",
                      bandwidth: "4TB Transfer"
                    },
                    features: ["Everything in Starter", "Priority support", "Automated backups", "Load balancer ready"],
                    popular: true
                  },
                  {
                    name: "Pro VPS",
                    price: "₹3,599",
                    description: "High-performance for demanding applications",
                    specs: {
                      cpu: "8 vCPU",
                      ram: "16GB RAM",
                      storage: "200GB NVMe",
                      bandwidth: "6TB Transfer"
                    },
                    features: ["Everything in Growth", "Dedicated support", "Custom configurations", "Advanced monitoring"],
                    popular: false
                  },
                  {
                    name: "Enterprise VPS",
                    price: "Custom",
                    description: "Tailored solutions for enterprise needs",
                    specs: {
                      cpu: "Custom vCPU",
                      ram: "Custom RAM",
                      storage: "Custom Storage",
                      bandwidth: "Unlimited Transfer"
                    },
                    features: ["Custom everything", "Dedicated manager", "SLA guarantees", "White-glove support"],
                    popular: false
                  }
                ].map((plan, index) => (
                  <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'border-2 border-primary scale-105' : 'border hover:border-primary/50'
                  }`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {plan.price}
                        {plan.price !== "Custom" && <span className="text-lg text-muted-foreground">/month</span>}
                      </div>
                      <CardDescription className="text-base">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">CPU:</span>
                          <span className="font-semibold">{plan.specs.cpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">RAM:</span>
                          <span className="font-semibold">{plan.specs.ram}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Storage:</span>
                          <span className="font-semibold">{plan.specs.storage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bandwidth:</span>
                          <span className="font-semibold">{plan.specs.bandwidth}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}>
                        {plan.price === "Custom" ? "Contact Sales" : "Deploy Now"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="comparison">
              <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
                <div className="p-8 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground text-center">
                  <h3 className="text-2xl font-bold mb-2">Complete VPS Comparison</h3>
                  <p className="opacity-90">All plans include 99.9% uptime SLA and 24/7 support</p>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="font-bold text-foreground">Plan</TableHead>
                        <TableHead className="font-bold text-foreground">vCPU</TableHead>
                        <TableHead className="font-bold text-foreground">RAM</TableHead>
                        <TableHead className="font-bold text-foreground">Storage</TableHead>
                        <TableHead className="font-bold text-foreground">Bandwidth</TableHead>
                        <TableHead className="font-bold text-foreground">Price</TableHead>
                        <TableHead className="font-bold text-foreground">Best For</TableHead>
                        <TableHead className="font-bold text-foreground">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "Starter VPS", vcpu: "2", ram: "4GB", storage: "50GB NVMe", bandwidth: "2TB", price: "₹999/mo", bestFor: "Small websites, blogs", popular: false },
                        { name: "Growth VPS", vcpu: "4", ram: "8GB", storage: "100GB NVMe", bandwidth: "4TB", price: "₹1,999/mo", bestFor: "Business websites, APIs", popular: true },
                        { name: "Pro VPS", vcpu: "8", ram: "16GB", storage: "200GB NVMe", bandwidth: "6TB", price: "₹3,599/mo", bestFor: "SaaS applications, databases", popular: false },
                        { name: "Power VPS", vcpu: "12", ram: "32GB", storage: "500GB NVMe", bandwidth: "10TB", price: "₹5,999/mo", bestFor: "High-traffic applications", popular: false },
                        { name: "Enterprise VPS", vcpu: "16+", ram: "64GB+", storage: "1TB+ NVMe", bandwidth: "Unlimited", price: "Custom", bestFor: "Enterprise workloads", popular: false }
                      ].map((plan, index) => (
                        <TableRow key={index} className={plan.popular ? "bg-primary/5 border-l-4 border-l-primary" : ""}>
                          <TableCell className="font-semibold">
                            <div className="flex items-center space-x-2">
                              <span>{plan.name}</span>
                              {plan.popular && <Badge className="bg-primary text-primary-foreground text-xs">Popular</Badge>}
                            </div>
                          </TableCell>
                          <TableCell>{plan.vcpu}</TableCell>
                          <TableCell>{plan.ram}</TableCell>
                          <TableCell>{plan.storage}</TableCell>
                          <TableCell>{plan.bandwidth}</TableCell>
                          <TableCell className="font-bold text-primary">{plan.price}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{plan.bestFor}</TableCell>
                          <TableCell>
                            <Button size="sm" className={plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80 text-foreground"}>
                              {plan.price === "Custom" ? "Contact" : "Deploy"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Built for Every Application
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Perfect for <span className="text-primary">Your Use Case</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From web hosting to machine learning—our VPS adapts to your specific needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Web Applications",
                description: "Host websites, web apps, and APIs with confidence",
                features: ["LAMP/LEMP stack", "Node.js & Python", "Load balancing", "SSL certificates"],
                testimonial: "Our e-commerce site handles 10x more traffic since migrating to CloudAdda VPS."
              },
              {
                icon: Database,
                title: "Database Hosting",
                description: "Run MySQL, PostgreSQL, MongoDB with guaranteed performance",
                features: ["Optimized for databases", "Automated backups", "Replication support", "Monitoring tools"],
                testimonial: "Database queries are 5x faster with the NVMe storage. Game-changer!"
              },
              {
                icon: Settings,
                title: "Development & Testing",
                description: "Isolated environments for development and CI/CD pipelines",
                features: ["Docker support", "Git integration", "Custom environments", "Snapshot backups"],
                testimonial: "Perfect for our CI/CD pipeline. Deployments are now seamless and reliable."
              }
            ].map((useCase, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm italic text-muted-foreground">"{useCase.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Complete Control
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">Powerful Management</span> Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full root access with enterprise-grade management tools that make server administration effortless
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description: "Enterprise-grade security with automated monitoring and threat detection"
                },
                {
                  icon: BarChart3,
                  title: "Real-time Monitoring",
                  description: "Comprehensive metrics and alerts for CPU, memory, disk, and network usage"
                },
                {
                  icon: Clock,
                  title: "Automated Backups",
                  description: "Daily automated backups with point-in-time recovery and instant restoration"
                },
                {
                  icon: Network,
                  title: "Network Management",
                  description: "Advanced networking with firewalls, VPNs, and private networking options"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/8a2d7816-a253-40ef-a846-db190a4798a5.png" 
                alt="VPS management dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Award className="w-4 h-4 mr-2" />
              Customer Success Stories
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Trusted by <span className="text-primary">Growing Businesses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our VPS solutions have helped businesses scale and succeed
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechStartup Inc",
                industry: "SaaS Platform",
                challenge: "Needed reliable hosting for their growing user base",
                solution: "Migrated to CloudAdda Growth VPS with auto-scaling",
                result: "50% cost reduction and 99.9% uptime achieved",
                testimonial: "CloudAdda VPS gave us the reliability and performance we needed to scale from 100 to 10,000 users.",
                author: "Sarah Chen, CTO"
              },
              {
                company: "E-commerce Pro",
                industry: "Online Retail",
                challenge: "Frequent downtime during traffic spikes",
                solution: "Deployed on Pro VPS with load balancing",
                result: "Zero downtime during Black Friday sales",
                testimonial: "We handled our biggest sales day ever without a single glitch. CloudAdda's infrastructure is rock solid.",
                author: "Mike Rodriguez, Tech Lead"
              },
              {
                company: "Data Analytics Co",
                industry: "Big Data",
                challenge: "Slow processing times affecting client deliverables",
                solution: "Upgraded to Enterprise VPS with custom CPU configuration",
                result: "75% faster data processing and happier clients",
                testimonial: "The performance improvement was immediate. Our analytics pipelines now run 3x faster than before.",
                author: "Dr. Lisa Park, Data Scientist"
              }
            ].map((story, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{story.industry}</Badge>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{story.company}</CardTitle>
                  <CardDescription className="text-base mb-4">Challenge: {story.challenge}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Solution:</strong> {story.solution}</p>
                    <p className="text-sm"><strong>Result:</strong> <span className="text-green-600 font-semibold">{story.result}</span></p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm italic text-muted-foreground mb-3">"{story.testimonial}"</p>
                    <p className="text-sm font-semibold text-foreground">— {story.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Request Form */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need a Custom Configuration?</h2>
            <p className="text-xl opacity-90">
              Tell us about your requirements and we'll recommend the perfect VPS setup for your needs.
            </p>
          </div>

          <Card className="p-8 bg-background text-foreground">
            <form onSubmit={handleConfigSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Your Name *</label>
                  <Input
                    placeholder="John Smith"
                    value={configForm.name}
                    onChange={(e) => setConfigForm({...configForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={configForm.email}
                    onChange={(e) => setConfigForm({...configForm, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Company</label>
                  <Input
                    placeholder="Your company name"
                    value={configForm.company}
                    onChange={(e) => setConfigForm({...configForm, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Primary Use Case *</label>
                  <Select value={configForm.useCase} onValueChange={(value) => setConfigForm({...configForm, useCase: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select use case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-hosting">Web Hosting</SelectItem>
                      <SelectItem value="application">Application Hosting</SelectItem>
                      <SelectItem value="database">Database Server</SelectItem>
                      <SelectItem value="development">Development Environment</SelectItem>
                      <SelectItem value="analytics">Data Analytics</SelectItem>
                      <SelectItem value="ml">Machine Learning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Budget Range</label>
                <Select value={configForm.budget} onValueChange={(value) => setConfigForm({...configForm, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-2k">Under ₹2,000/month</SelectItem>
                    <SelectItem value="2k-5k">₹2,000 - ₹5,000/month</SelectItem>
                    <SelectItem value="5k-10k">₹5,000 - ₹10,000/month</SelectItem>
                    <SelectItem value="10k-25k">₹10,000 - ₹25,000/month</SelectItem>
                    <SelectItem value="over-25k">Over ₹25,000/month</SelectItem>
                    <SelectItem value="flexible">Flexible based on requirements</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Technical Requirements</label>
                <textarea
                  placeholder="Tell us about your specific requirements: expected traffic, software stack, performance needs, compliance requirements, etc."
                  value={configForm.requirements}
                  onChange={(e) => setConfigForm({...configForm, requirements: e.target.value})}
                  className="w-full min-h-24 p-3 border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                <Server className="w-5 h-5 mr-2" />
                Get Custom Recommendation
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-foreground">CloudAdda</span>
              </Link>
              <p className="text-muted-foreground">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/training-labs" className="hover:text-foreground transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-foreground transition-colors">Virtual Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-foreground transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/support" className="hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link to="/trainer-adda" className="hover:text-foreground transition-colors">Trainer Adda</Link></li>
                <li><Link to="/guides" className="hover:text-foreground transition-colors">Documentation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VPS;
