import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star,
  Code,
  Database,
  Cloud,
  Settings,
  BarChart3,
  HeartHandshake,
  Target,
  Lightbulb,
  TrendingUp,
  Award,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const TrainingLabs = () => {
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    participants: "",
    duration: "",
    requirements: ""
  });
  const { toast } = useToast();

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Submitted! 🎉",
      description: "Our team will contact you within 24 hours to schedule your personalized demo.",
    });
    setDemoForm({
      name: "",
      email: "",
      company: "",
      participants: "",
      duration: "",
      requirements: ""
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
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Training Labs That Actually Work</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-orange-500">Stop</span>{" "}
            <span className="text-foreground">Fighting</span>{" "}
            <span className="text-purple-600">Infrastructure</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Focus on teaching. We'll handle the servers, networks, and all the technical nightmares 
            that keep you up at night. 🚀
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Whether you're running a coding bootcamp, corporate training, or university courses—our 
            custom-built training environments scale instantly and work flawlessly every time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="h-14 px-8 text-lg">
              <Zap className="w-6 h-6 mr-2" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
              <Clock className="w-6 h-6 mr-2" />
              See Live Demo
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, stat: "< 24hrs", label: "Setup Time", color: "text-blue-500" },
              { icon: Users, stat: "1000+", label: "Students Supported", color: "text-green-500" },
              { icon: CheckCircle, stat: "99.9%", label: "Uptime SLA", color: "text-purple-500" }
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

      {/* Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              The Real Problems We Solve
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tired of <span className="text-primary">Infrastructure Headaches?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We get it. Managing training infrastructure shouldn't be harder than the actual training.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  problem: "Spending weeks setting up environments instead of teaching",
                  solution: "Pre-built environments ready in hours, not weeks"
                },
                {
                  problem: "Students can't access labs from home or different locations",
                  solution: "Cloud-based access from anywhere, any device"
                },
                {
                  problem: "Running out of resources during peak training sessions",
                  solution: "Auto-scaling infrastructure that grows with demand"
                },
                {
                  problem: "Dealing with software conflicts and compatibility issues",
                  solution: "Isolated environments with pre-tested software stacks"
                }
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-destructive/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-destructive font-bold text-sm">✗</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-destructive mb-2">{item.problem}</p>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/5aab5b8e-c5b5-423b-a473-bcb996375d02.png" 
                alt="Training environment setup visualization" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Deep Dive */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Code className="w-4 h-4 mr-2" />
              Comprehensive Training Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Everything You Need for <span className="text-primary">Successful Training</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From basic coding environments to complex enterprise simulations—we've got it all covered
            </p>
          </div>

          <Tabs defaultValue="environments" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="environments" className="text-sm">Environments</TabsTrigger>
              <TabsTrigger value="management" className="text-sm">Management</TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm">Analytics</TabsTrigger>
              <TabsTrigger value="support" className="text-sm">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="environments" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Code,
                    title: "Development Environments",
                    description: "Pre-configured IDEs, compilers, and development tools for any programming language",
                    features: ["Visual Studio Code", "IntelliJ IDEA", "Git repositories", "Docker containers"]
                  },
                  {
                    icon: Database,
                    title: "Database Labs",
                    description: "Complete database environments with sample data and practice scenarios",
                    features: ["MySQL, PostgreSQL", "MongoDB, Redis", "Sample datasets", "Query optimization tools"]
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Platforms",
                    description: "Real cloud environments for hands-on AWS, Azure, and GCP training",
                    features: ["Live cloud accounts", "Practice scenarios", "Cost monitoring", "Sandbox environments"]
                  }
                ].map((env, index) => (
                  <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                        <env.icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{env.title}</CardTitle>
                      <CardDescription className="text-base">{env.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {env.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="management" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Effortless User Management</h3>
                  <div className="space-y-4">
                    {[
                      "Bulk user creation and management",
                      "Role-based access control",
                      "Single sign-on (SSO) integration",
                      "Automated environment provisioning",
                      "Resource usage monitoring",
                      "Automated cleanup and reset"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png" 
                    alt="User management dashboard" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/967ed3a4-84ec-495d-a09d-6acd43dccc98.png" 
                    alt="Analytics dashboard" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">Detailed Training Analytics</h3>
                  <div className="space-y-4">
                    {[
                      "Real-time usage monitoring",
                      "Student progress tracking",
                      "Resource utilization reports",
                      "Performance bottleneck identification",
                      "Cost optimization insights",
                      "Custom reporting and exports"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-8">24/7 Support That Actually Helps</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: HeartHandshake,
                      title: "Dedicated Success Manager",
                      description: "Your personal CloudAdda expert who knows your training needs inside out"
                    },
                    {
                      icon: Clock,
                      title: "Real-time Monitoring",
                      description: "We monitor your training environments 24/7 and fix issues before you notice them"
                    },
                    {
                      icon: Users,
                      title: "Training Workshops",
                      description: "Free workshops to help your team get the most out of your training infrastructure"
                    }
                  ].map((support, index) => (
                    <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <support.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-4">{support.title}</CardTitle>
                      <CardDescription className="text-base">{support.description}</CardDescription>
                    </Card>
                  ))}
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
              <Target className="w-4 h-4 mr-2" />
              Perfect For Every Training Scenario
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for <span className="text-primary">Real Training Needs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From bootcamps to enterprise training—see how CloudAdda adapts to your unique requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Coding Bootcamps",
                description: "Intensive programming courses with hands-on projects",
                stats: "500+ students per batch",
                features: ["Full-stack environments", "Project repositories", "Code review tools", "Deployment pipelines"],
                testimonial: "CloudAdda helped us scale from 50 to 500 students seamlessly. Setup time went from weeks to hours."
              },
              {
                icon: TrendingUp,
                title: "Corporate Training",
                description: "Professional development and skill enhancement programs",
                stats: "Enterprise-grade security",
                features: ["Custom curricula", "Progress tracking", "Compliance reporting", "Integration with LMS"],
                testimonial: "Our developers love the realistic environments. It's like having a production setup for learning."
              },
              {
                icon: Award,
                title: "University Courses",
                description: "Academic computer science and engineering programs",
                stats: "1000+ concurrent users",
                features: ["Multi-semester projects", "Research environments", "Collaborative workspaces", "Academic licensing"],
                testimonial: "Finally, our students can access labs 24/7 from anywhere. No more crowded computer labs."
              }
            ].map((useCase, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-4">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{useCase.description}</CardDescription>
                  <Badge variant="secondary" className="w-fit">{useCase.stats}</Badge>
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

      {/* Social Proof */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Trusted by Leading Organizations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join <span className="text-primary">1000+ Training Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to Fortune 500 companies—organizations worldwide trust CloudAdda for their training infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                company: "TechCorp University",
                logo: "/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png",
                testimonial: "CloudAdda transformed our training programs. Setup time reduced by 90%, and our students love the 24/7 access to realistic environments.",
                author: "Dr. Sarah Johnson",
                role: "Head of Computer Science"
              },
              {
                company: "DevBootcamp Pro",
                logo: "/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png",
                testimonial: "We scaled from 50 to 500 students without any infrastructure headaches. CloudAdda handles everything so we can focus on teaching.",
                author: "Mike Chen",
                role: "Founder & Lead Instructor"
              },
              {
                company: "Enterprise Solutions Inc",
                logo: "/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png",
                testimonial: "The enterprise-grade security and compliance features make CloudAdda perfect for our corporate training programs.",
                author: "Lisa Rodriguez",
                role: "VP of Learning & Development"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="flex items-center space-x-4 mb-6">
                  <img src={testimonial.logo} alt={testimonial.company} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.company}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-foreground mb-8">Ready to transform your training programs?</p>
            <Button size="lg" className="h-14 px-8 text-lg">
              <Clock className="w-6 h-6 mr-2" />
              Schedule Your Demo Today
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get Your Custom Demo</h2>
            <p className="text-xl opacity-90">
              See exactly how CloudAdda can transform your training programs. 
              We'll build a sample environment based on your specific needs.
            </p>
          </div>

          <Card className="p-8 bg-background text-foreground">
            <form onSubmit={handleDemoSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Your Name *</label>
                  <Input
                    placeholder="John Smith"
                    value={demoForm.name}
                    onChange={(e) => setDemoForm({...demoForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Work Email *</label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={demoForm.email}
                    onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Organization *</label>
                  <Input
                    placeholder="Your company or institution"
                    value={demoForm.company}
                    onChange={(e) => setDemoForm({...demoForm, company: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Expected Participants</label>
                  <Select value={demoForm.participants} onValueChange={(value) => setDemoForm({...demoForm, participants: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-25">1-25 students</SelectItem>
                      <SelectItem value="26-100">26-100 students</SelectItem>
                      <SelectItem value="101-500">101-500 students</SelectItem>
                      <SelectItem value="500+">500+ students</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Training Duration</label>
                <Select value={demoForm.duration} onValueChange={(value) => setDemoForm({...demoForm, duration: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="workshop">1-3 day workshop</SelectItem>
                    <SelectItem value="short">1-4 week course</SelectItem>
                    <SelectItem value="medium">1-3 month program</SelectItem>
                    <SelectItem value="long">3+ month program</SelectItem>
                    <SelectItem value="ongoing">Ongoing/semester-based</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Technical Requirements</label>
                <Textarea
                  placeholder="Tell us about your training curriculum, required software, programming languages, cloud platforms, etc. The more details, the better we can customize your demo."
                  value={demoForm.requirements}
                  onChange={(e) => setDemoForm({...demoForm, requirements: e.target.value})}
                  className="min-h-24"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                <Zap className="w-5 h-5 mr-2" />
                Get My Custom Demo
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

export default TrainingLabs;
