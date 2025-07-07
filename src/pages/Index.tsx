import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Shield, Users, Heart, Star, Globe, Monitor, Server, GraduationCap, Award, Clock, DollarSign, Headphones, Eye, Building2, Lightbulb, Target, TrendingUp, Sparkles, Code, Database, Lock, Cpu, HardDrive, Network, BarChart3, PieChart, LineChart, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState("training");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 pt-32 pb-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-orange-100 text-orange-700 border border-orange-200">
                <Sparkles className="mr-2 h-4 w-4" />
                Simple. Scalable. Human.
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Cloud Infrastructure
                <span className="block text-orange-500">That Just Works</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                No complexity. No vendor lock-in. No surprises. Just reliable, 
                high-performance cloud solutions that grow with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Our Solutions
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">99.98%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Human Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                alt="Cloud Infrastructure Illustration" 
                className="w-full h-auto object-contain" 
                src="/lovable-uploads/da1c17cc-16bf-47be-834a-68e473782db8.png" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CloudAdda Handles Your Infrastructure */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
              <Zap className="w-4 h-4 mr-2" />
              Complete Infrastructure Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              CloudAdda Handles Your Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From training environments to production workloads, we provide everything you need to run your business in the cloud.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Training Labs */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Training Labs</CardTitle>
                <CardDescription className="text-gray-600">
                  Ready-to-use lab environments for training companies and educational institutions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Custom lab environments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Multi-user access control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Real-time collaboration</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/training-labs">
                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Cloud Desktops */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Cloud Desktops</CardTitle>
                <CardDescription className="text-gray-600">
                  High-performance virtual desktops accessible from anywhere, on any device.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">AMD EPYC performance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">NVMe SSD storage</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/cloud-desktops">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* VPS Hosting */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900">VPS Hosting</CardTitle>
                <CardDescription className="text-gray-600">
                  Scalable virtual private servers with full root access and premium hardware.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Full root access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Instant provisioning</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/vps">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience the Difference Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              <Heart className="w-4 h-4 mr-2" />
              A Cloud Company That Actually Cares
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experience the Difference
            </h2>
            <div className="mb-8">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just another cloud provider. We're your technology partner, committed to your success.
              </p>
            </div>
            <div className="mb-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto font-medium">
                Trusted by 500+ companies worldwide
              </p>
            </div>
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Unmatched Expertise</h3>
              <p className="text-gray-600">Decades of experience in cloud infrastructure and managed services.</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Human Support</h3>
              <p className="text-gray-600">Real humans available around the clock to assist you.</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees, no surprises. Just honest pricing for honest performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <TrendingUp className="w-4 h-4 mr-2" />
              Blazing-Fast Performance
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Performance That Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We optimize every layer of our infrastructure to deliver unparalleled speed and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-blue-500 transition-colors">
              <Cpu className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">AMD EPYC CPUs</h3>
              <p className="text-gray-600 mb-6">Latest generation processors for maximum performance</p>
              <div className="text-3xl font-bold text-blue-600">3.9 GHz</div>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-500 transition-colors">
              <HardDrive className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">NVMe SSD Storage</h3>
              <p className="text-gray-600 mb-6">Ultra-fast storage for lightning-quick data access</p>
              <div className="text-3xl font-bold text-orange-600">7 GB/s</div>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-green-500 transition-colors">
              <Network className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">High-Speed Networking</h3>
              <p className="text-gray-600 mb-6">Premium bandwidth with low latency for seamless connectivity</p>
              <div className="text-3xl font-bold text-green-600">40 Gbps</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
              <Code className="w-4 h-4 mr-2" />
              Technical Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Built for the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and best practices to deliver robust and scalable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 hover:border-blue-500 transition-colors">
              <Database className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
              <p className="text-gray-600 mb-6">Designed to handle massive workloads and scale on demand</p>
              <div className="text-3xl font-bold text-blue-600">Horizontal Scaling</div>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-500 transition-colors">
              <Lock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-600 mb-6">Multi-layered security measures to protect your data and applications</p>
              <div className="text-3xl font-bold text-orange-600">ISO 27001 Certified</div>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-green-500 transition-colors">
              <BarChart3 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Real-Time Monitoring</h3>
              <p className="text-gray-600 mb-6">Advanced monitoring tools to track performance and identify issues</p>
              <div className="text-3xl font-bold text-green-600">24/7 Monitoring</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              <DollarSign className="w-4 h-4 mr-2" />
              Zero Waste Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees. No surprise bills. Just honest pricing for honest performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 border-2 hover:border-blue-500 transition-colors">
              <GraduationCap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Training Labs</h3>
              <p className="text-gray-600 mb-6">Custom infrastructure for education and training</p>
              <Link to="/pricing#training-labs">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  View Pricing
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-orange-500 transition-colors">
              <Monitor className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Cloud Desktops</h3>
              <p className="text-gray-600 mb-6">Role-based pricing starting from ₹1,499/month</p>
              <Link to="/pricing#cloud-desktops">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  View Pricing
                </Button>
              </Link>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-green-500 transition-colors">
              <Server className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">VPS Hosting</h3>
              <p className="text-gray-600 mb-6">Scalable servers starting from ₹200/month</p>
              <Link to="/pricing#vps-hosting">
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  View Pricing
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Contact us today to learn more about how CloudAdda can transform your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Book a Demo
                  <Headphones className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-foreground">CloudAdda</span>
              </Link>
              <p className="text-muted-foreground">
                Simple. Scalable. Human. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/training-labs" className="hover:text-foreground transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-foreground transition-colors">Cloud Desktops</Link></li>
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
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
