import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, BookOpen, Users, TrendingUp, FileText, Video, Download, ExternalLink, Play, Star, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useMetaTags } from "@/utils/metaTags";

const TrainerAdda = () => {
  useMetaTags({
    title: "Adda Insights – Cloud Infra, Training Labs & VDI Trends | CloudAdda",
    description: "Stay ahead with insights on virtual training delivery, DaaS adoption, and cloud infra optimization. Trusted by trainers, IT teams & remote-first businesses."
  });

  return (
    <div className="min-h-screen bg-background">
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
              <Link to="/trainer-adda" className="text-orange-500 font-medium">Resources</Link>
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
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block mb-8">
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200 text-sm font-medium px-4 py-2">
                  Empowering Trainers
                </Badge>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                Unlock Your
                <br />
                <span className="text-purple-600 relative">
                  Training
                  <div className="absolute -bottom-4 left-0 w-full h-1 bg-orange-500 transform -rotate-1"></div>
                </span>
                <br />
                Potential
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-purple-600"></div>
                <div className="text-2xl font-bold text-foreground">Resources, Insights, Community.</div>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Welcome to the CloudAdda Trainer's Hub — your go-to destination for resources, insights, and community support to elevate your training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                  <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Explore Resources
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative flex justify-center">
                <img
                  src="/lovable-uploads/49849491-e36f-4981-8c11-a4b43a9d911f.png"
                  alt="CloudAdda Hero - VR Tech Innovation"
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Resources Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Key Resources
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Essential Tools for Modern Trainers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Industry Insights",
                description: "Stay ahead with the latest trends in cloud infrastructure, training methodologies, and remote learning.",
                link: "#",
                color: "purple"
              },
              {
                icon: FileText,
                title: "Downloadable Guides",
                description: "Access our library of guides, checklists, and templates to streamline your training processes.",
                link: "#",
                color: "orange"
              },
              {
                icon: Video,
                title: "Video Tutorials",
                description: "Learn from our expert-led video tutorials covering everything from lab setup to advanced training techniques.",
                link: "#",
                color: "purple"
              }
            ].map((resource, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                    resource.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community and Collaboration Section */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-8 bg-orange-100 text-orange-800 border-orange-200">
                <Users className="w-4 h-4 mr-2" />
                Connect & Collaborate
              </Badge>
              <h2 className="text-5xl font-bold text-foreground mb-8 leading-tight">
                Join Our Community of
                <br />
                <span className="text-orange-600">Passionate</span>
                <br />
                <span className="text-purple-600">Trainers</span>
              </h2>
              <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Connect with fellow trainers, share insights, and collaborate on innovative training solutions.
                </p>
                <div className="bg-white p-8 rounded-2xl border-l-4 border-purple-500 shadow-sm">
                  <p className="text-foreground font-bold text-2xl mb-4">
                    "The CloudAdda community has been invaluable in helping me refine my training programs and connect with other experts."
                  </p>
                  <p className="text-muted-foreground italic">- A Satisfied Trainer</p>
                </div>
                <p>
                  Access exclusive forums, webinars, and networking events designed to foster collaboration and growth.
                </p>
                <p className="font-bold text-foreground text-xl">Let's build the future of training together.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-12 shadow-lg border border-orange-100">
                <div className="text-center space-y-8">
                  <div>
                    <div className="text-6xl font-black text-purple-600 mb-2">500+</div>
                    <div className="text-xl font-semibold text-foreground">Active Community Members</div>
                    <div className="w-full h-2 bg-purple-500 rounded-full mt-4"></div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-6xl font-black text-orange-600 mb-2">95%</div>
                    <div className="text-xl font-semibold text-foreground">Member Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">Trainer Success Stories</h2>
            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read how trainers are leveraging CloudAdda to deliver exceptional learning experiences and achieve outstanding results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Enhanced Engagement",
                description: "Trainers report a significant increase in student engagement and knowledge retention with CloudAdda's interactive labs.",
                color: "purple"
              },
              {
                icon: Calendar,
                title: "Streamlined Scheduling",
                description: "Effortlessly schedule and manage training sessions with our intuitive platform, saving valuable time and resources.",
                color: "orange"
              },
              {
                icon: Clock,
                title: "Reduced Setup Time",
                description: "Say goodbye to lengthy setup processes. CloudAdda's ready-to-use environments allow trainers to focus on what they do best — teaching.",
                color: "purple"
              }
            ].map((story, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                    story.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}>
                    <story.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {story.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Diagonal Layout */}
      <section className="py-24 bg-purple-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -translate-y-32 translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 rounded-full translate-y-24 -translate-x-24 opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-white/20 text-white border-white/30">
            <Download className="w-4 h-4 mr-2" />
            Download Our Free Resources
          </Badge>
          <h2 className="text-5xl font-bold mb-8">Elevate Your Training Today</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            Access exclusive resources, connect with a vibrant community, and unlock the full potential of your training programs with CloudAdda.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform" />
              Explore Now
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section with Centered Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 transform hover:rotate-12 transition-transform duration-500">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-8">Our Vision</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-2xl text-muted-foreground leading-relaxed font-light">
            To empower trainers worldwide with the tools, resources, and community support they need to create exceptional learning experiences.
          </p>
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

export default TrainerAdda;
