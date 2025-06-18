import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Zap, CheckCircle, Star, Globe, Award, TrendingUp, Shield, Clock, DollarSign, Sparkles, Monitor, Server, Database, Brain, BarChart3, Building, Lightbulb, FileCheck, Headphones, Code, Network, Cpu, HardDrive, Settings, Activity, Rocket, Eye, UserCheck, Play, Calendar, BookOpen, MessageCircle, AlertTriangle, Timer, ThumbsUp, Gauge, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-8 bg-blue-100 text-blue-800 border-blue-200 text-lg font-medium px-6 py-3">
              <Sparkles className="w-5 h-5 mr-2" />
              Infrastructure that just works
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Simple. Scalable.
              <span className="block text-purple-600">Human.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Launch cloud infrastructure in minutes, not months. Focus on your core business, not fighting with servers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 rounded-full px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center">
              <img src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" className="h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              From virtual machines to managed databases, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Cpu className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-semibold">High Performance VMs</CardTitle>
                <CardDescription>
                  Lightning-fast virtual machines with NVMe storage and powerful CPUs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Latest generation CPUs</li>
                  <li>NVMe SSD storage</li>
                  <li>Scalable resources</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Database className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle className="text-xl font-semibold">Managed Databases</CardTitle>
                <CardDescription>
                  Focus on building your app, not managing your database.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Automatic backups</li>
                  <li>One-click scaling</li>
                  <li>24/7 monitoring</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Network className="w-10 h-10 text-orange-600 mb-4" />
                <CardTitle className="text-xl font-semibold">Global Network</CardTitle>
                <CardDescription>
                  Deploy your applications closer to your users with our global network.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Low latency</li>
                  <li>DDoS protection</li>
                  <li>Global CDN</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Solutions for every need
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Whether you're a startup or an enterprise, we have a solution for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Building className="w-10 h-10 text-purple-600 mb-4" />
                <CardTitle className="text-xl font-semibold">Training Labs</CardTitle>
                <CardDescription>
                  Ready-to-go virtual training environments for your team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Customizable labs</li>
                  <li>Scalable infrastructure</li>
                  <li>24/7 support</li>
                </ul>
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Monitor className="w-10 h-10 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-semibold">Cloud Desktops</CardTitle>
                <CardDescription>
                  Secure and reliable virtual desktops for your workforce.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Remote access</li>
                  <li>Centralized management</li>
                  <li>Data security</li>
                </ul>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <Server className="w-10 h-10 text-green-600 mb-4" />
                <CardTitle className="text-xl font-semibold">Virtual Private Servers</CardTitle>
                <CardDescription>
                  Powerful and flexible virtual servers for any workload.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Full root access</li>
                  <li>Multiple OS options</li>
                  <li>SSD storage</li>
                </ul>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white rounded-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-purple-600">99.99%</div>
              <div className="mt-2 text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600">24/7</div>
              <div className="mt-2 text-gray-600">Expert Support</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-600">Global</div>
              <div className="mt-2 text-gray-600">Data Centers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Launch your cloud infrastructure today.
          </p>
          <Button size="lg" className="mt-8 bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            &copy; 2024 CloudAdda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
