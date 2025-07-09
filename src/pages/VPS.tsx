import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Server, Shield, Zap, Users, CheckCircle, Clock, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { useMetaTags } from "@/utils/metaTags";

const VPS = () => {
  useMetaTags({
    title: "Cloud VPS Hosting India | NVMe + AMD EPYC | CloudAdda",
    description: "High-speed VPS with NVMe storage and AMD EPYC performance. Perfect for devs, apps, and remote workloads. Starts at ₹699/month. SSD fast, human-supported."
  });

  return <div className="min-h-screen bg-background">
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
                    <NavigationMenuContent className="min-w-[400px] p-0 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                      <div className="grid gap-0 p-0 w-[400px] lg:w-[500px] lg:grid-cols-1">
                        <NavigationMenuLink asChild>
                          <Link to="/training-labs" className="block select-none space-y-1 rounded-none p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50 border-b border-gray-100">
                            <div className="text-sm font-medium leading-none text-gray-900">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/cloud-desktops" className="block select-none space-y-1 rounded-none p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50 border-b border-gray-100">
                            <div className="text-sm font-medium leading-none text-gray-900">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/vps" className="block select-none space-y-1 rounded-none p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50">
                            <div className="text-sm font-medium leading-none text-gray-900">VPS Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
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
              <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200">
                <Server className="mr-2 h-4 w-4" />
                VPS Hosting That Actually Delivers
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Power Without
                <span className="block text-purple-600">The BS.</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Latest gen processors and blazing fast storage with real human support at less than half the price of AWS. No throttling, no surprises, no regrets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all">
                  Deploy Your VPS Now
                  <Server className="ml-2 h-5 w-5" />
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-10 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  <Link to="/pricing#vps">
                    View Pricing
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">99.98%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">&lt; 2hr</div>
                  <div className="text-sm text-gray-600">Support Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">50%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="/lovable-uploads/a6ac61e1-af55-42c2-9e72-95b2baa9e4dc.png" alt="Powerful VPS Performance" className="w-full h-96 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* The Painful Reality Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Painful Reality of VPS Shopping</h2>
            <p className="text-xl text-gray-600">Every developer's nightmare, solved once and for all</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[{
              pain: "Shared Resources Lie",
              reality: "Your 'dedicated' 4GB RAM becomes 1GB when the neighbor's Bitcoin miner starts up",
              icon: AlertTriangle
            }, {
              pain: "Support Ticket Hell",
              reality: "48 hours to get a copy-paste response that doesn't solve your midnight server crash",
              icon: Clock
            }, {
              pain: "Bill Shock Syndrome",
              reality: "Your $20/month VPS becomes $200 because they count every byte of bandwidth",
              icon: DollarSign
            }, {
              pain: "Performance Roulette",
              reality: "Some days your API responds in 50ms, other days it's 5 seconds. Nobody knows why.",
              icon: TrendingUp
            }].map((item, index) => <div key={index} className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.pain}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.reality}</p>
                  </div>
                </div>)}
            </div>

            <div className="relative">
              <img src="/lovable-uploads/e253469c-57a6-42bb-bb9a-c74dc734846a.png" alt="Server Error Frustration" className="w-full h-96 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Fix Every Single Pain Point</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {[{
            title: "True Dedicated Resources",
            subtitle: "Your cores are YOURS",
            description: "When we say 4 vCPUs, you get 4 full AMD EPYC cores. No sharing, no throttling, no lies. We partition hardware at the hypervisor level.",
            icon: Cpu,
            metric: "100% Dedicated",
            proof: "Live resource monitor shows real allocation"
          }, {
            title: "Human-First Support",
            subtitle: "Engineers, not bots",
            description: "Every ticket goes to a real engineer who's built production systems. No chatbots, no scripts, no 'have you tried turning it off and on again?'",
            icon: Users,
            metric: "< 2hr Response",
            proof: "Average first response: 47 minutes"
          }, {
            title: "Transparent Pricing",
            subtitle: "No surprise bills",
            description: "Flat monthly rate includes everything. Unlimited bandwidth, free backups, no hidden fees. Your bill will be exactly what we quote.",
            icon: DollarSign,
            metric: "50% Less Cost",
            proof: "vs AWS/Azure/GCP equivalent specs"
          }].map((solution, index) => <div key={index} className="group hover:scale-105 transition-all duration-500">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                      <solution.icon className="w-8 h-8 text-purple-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-purple-600 font-semibold mb-4">{solution.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-600">{solution.metric}</div>
                      </div>
                      <div className="text-xs text-gray-500 text-center">{solution.proof}</div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Developer Reality Check - Updated to be cleaner */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Developer's Daily Reality</h2>
            <p className="text-xl text-gray-600">Stop us when this sounds familiar...</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current VPS Problems */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Current VPS Experience</h3>
                
                {[{
                title: "The 3 AM Production Crash",
                description: "Your side project that became your main income source just went down. Support ticket response: 'Have you tried restarting?'"
              }, {
                title: "The Mysterious Throttling",
                description: "Your API was responding in 200ms yesterday, today it's 3 seconds. Nobody can tell you why."
              }, {
                title: "The Bill Shock Monday",
                description: "Your $20/month VPS bill is now $180 because you forgot to set up billing alerts."
              }, {
                title: "The Documentation Lie",
                description: "The setup guide was written in 2019, half the commands don't work."
              }].map((problem, index) => <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">{problem.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                  </div>)}
              </div>

              {/* CloudAdda Experience */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your CloudAdda Experience</h3>
                
                {[{
                title: "The 3 AM Peace of Mind",
                description: "Your app hasn't gone down in 8 months. When you had a question at 2 AM, a real engineer responded in 23 minutes."
              }, {
                title: "The Consistent Performance",
                description: "Your API responds in 180-220ms consistently. Every day. Every month."
              }, {
                title: "The Predictable Bill",
                description: "Your bill is exactly what you choose. No surprises. No hidden fees."
              }, {
                title: "The Documentation That Works",
                description: "Copy-paste the commands from our docs. They work. First try. Every time."
              }].map((solution, index) => <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                  </div>)}
              </div>
            </div>

            <div className="text-center mt-16">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
                <Link to="/contact">
                  End Your VPS Nightmare Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real vs Marketing Specs - Updated Table */}
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
                  <th className="text-center p-6 bg-purple-50 font-bold text-purple-600">CloudAdda VPS</th>
                  <th className="text-center p-6 font-semibold text-gray-600">AWS t3.medium</th>
                  <th className="text-center p-6 font-semibold text-gray-600">DigitalOcean</th>
                  <th className="text-center p-6 font-semibold text-gray-600">Linode</th>
                </tr>
              </thead>
              <tbody>
                {[{
                spec: "CPU Performance (PassMark)",
                cloudAdda: "AMD EPYC (12,400)",
                aws: "Intel Xeon (6,200)",
                do: "Intel Xeon (7,100)",
                linode: "AMD EPYC (9,800)"
              }, {
                spec: "Storage IOPS",
                cloudAdda: "25,000 (Real NVMe)",
                aws: "3,000 (EBS gp3)",
                do: "7,000 (SSD)",
                linode: "25,000 (NVMe)"
              }, {
                spec: "Monthly Cost (No Hidden Fees)",
                cloudAdda: "₹1,399 (All included)",
                aws: "₹2,200+ (After data transfer)",
                do: "₹1,800+ (After bandwidth)",
                linode: "₹1,600+ (After backups)"
              }, {
                spec: "Setup Time",
                cloudAdda: "2-4 minutes",
                aws: "10+ minutes",
                do: "3-5 minutes",
                linode: "2-4 minutes"
              }, {
                spec: "Support Response (Real Human)",
                cloudAdda: "10-15 minutes",
                aws: "4-24 hours",
                do: "2-8 hours",
                linode: "1-4 hours"
              }].map((row, index) => <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-6 font-semibold text-gray-900">{row.spec}</td>
                    <td className="p-6 text-center bg-purple-50 font-bold text-purple-600">{row.cloudAdda}</td>
                    <td className="p-6 text-center text-gray-600">{row.aws}</td>
                    <td className="p-6 text-center text-gray-600">{row.do}</td>
                    <td className="p-6 text-center text-gray-600">{row.linode}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 inline-block">
              <div className="text-lg font-bold text-purple-800 mb-2">Transparency Promise</div>
              <div className="text-purple-600 mb-4">What we advertise is what you get. No fine print, no gotchas.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Superiority Section - Updated with new image */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Built Different From The Ground Up</h2>
              <p className="text-xl text-gray-600">While others cut corners, we invested in the infrastructure you actually need.</p>

              <div className="grid grid-cols-2 gap-6">
                {[{
                label: "NVMe Storage",
                value: "100%",
                desc: "Pure NVMe, no hybrid nonsense"
              }, {
                label: "AMD EPYC",
                value: "Latest Gen",
                desc: "64-core server processors"
              }, {
                label: "DDR4 RAM",
                value: "ECC",
                desc: "Error-correcting memory"
              }, {
                label: "Network",
                value: "10Gbps",
                desc: "Backbone connectivity"
              }].map((spec, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">{spec.value}</div>
                    <div className="font-semibold text-gray-900">{spec.label}</div>
                    <div className="text-sm text-gray-600">{spec.desc}</div>
                  </div>)}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-gray-900">Live Performance Comparison</h4>
                  <Button 
                    onClick={() => setShowComingSoon(true)}
                    variant="outline" 
                    size="sm"
                    className="text-purple-600 border-purple-600 hover:bg-purple-50"
                  >
                    View
                  </Button>
                </div>
                {showComingSoon && (
                  <div className="text-center py-8 text-purple-600 font-semibold text-lg">
                    Coming Soon!
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <img src="/lovable-uploads/d79d4d0f-d833-4a83-b822-c8d2899c8870.png" alt="Modern Data Center Infrastructure" className="w-full h-96 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect For Every Workload</h2>
            <p className="text-xl text-gray-600">From weekend projects to unicorn startups</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
            name: "Web Applications",
            icon: Globe,
            description: "React, Vue, Django, Rails - your framework runs faster here",
            customers: "2,400+ apps hosted"
          }, {
            name: "AI/ML Workloads",
            icon: Brain,
            description: "GPU instances for training, inference APIs that actually scale",
            customers: "150+ AI startups"
          }, {
            name: "Game Servers",
            icon: Monitor,
            description: "Sub-20ms latency, DDoS protection, automatic scaling",
            customers: "500+ game servers"
          }, {
            name: "Development",
            icon: Settings,
            description: "Staging environments that mirror production perfectly",
            customers: "1,200+ dev teams"
          }, {
            name: "E-commerce",
            icon: BarChart3,
            description: "Black Friday ready, PCI compliant, always-on monitoring",
            customers: "800+ online stores"
          }, {
            name: "Databases",
            icon: Database,
            description: "PostgreSQL, MongoDB, Redis - optimized storage layers",
            customers: "3,000+ databases"
          }, {
            name: "APIs",
            icon: Server,
            description: "REST, GraphQL, microservices with auto-scaling",
            customers: "5,000+ APIs"
          }, {
            name: "Startups",
            icon: Rocket,
            description: "MVP to IPO, we scale with your growth story",
            customers: "400+ funded startups"
          }].map((useCase, index) => <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <useCase.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{useCase.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{useCase.description}</p>
                    <div className="text-xs text-purple-600 font-medium">{useCase.customers}</div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Migration Success Rate - Simplified */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Migration Made Simple</h2>
            <p className="text-xl text-gray-600">We handle everything, you keep building</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[{
              metric: "Migration Success Rate",
              value: "100%",
              description: "Not a single failed migration in 3 years"
            }, {
              metric: "Zero Downtime",
              value: "98.7%",
              description: "Your users won't even notice the switch"
            }, {
              metric: "Customer Retention",
              value: "99.1%",
              description: "Once they switch, they never leave"
            }, {
              metric: "Performance Boost",
              value: "187%",
              description: "Average speed increase post-migration"
            }].map((stat, index) => <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="font-semibold text-gray-900 mb-2">{stat.metric}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>)}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Migrate?</h3>
              <p className="text-gray-600 mb-6">Our engineers handle everything - from DNS to databases. Zero downtime guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Pricing Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Simple, Transparent Pricing</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12 border border-purple-200">
            <div className="text-6xl font-bold text-purple-600 mb-4">₹300</div>
            <div className="text-xl text-gray-600 mb-2">Starting from</div>
            <div className="text-gray-500 mb-8">per month</div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>2-8 vCPU</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>4-16GB RAM</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>NVMe Storage</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-12 py-4 text-lg">
              <Link to="/pricing#vps">
                View All Plans & Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready for VPS That Actually Works?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Deploy in 60 seconds. Scale in real-time. Support that cares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Deploy Your VPS Now
              <Server className="ml-3 h-6 w-6" />
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-16 py-6 text-xl border-gray-300 hover:bg-gray-50">
              <Link to="/pricing#vps">
                View Pricing
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">1,000+</div>
              <div className="text-gray-600">Happy Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">99.98%</div>
              <div className="text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">47min</div>
              <div className="text-gray-600">Avg Support Response</div>
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
    </div>;
};

export default VPS;
