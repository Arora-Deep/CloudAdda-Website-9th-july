import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, HelpCircle, MessageCircle, Book, Mail, Phone, Clock, Users, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useMetaTags } from "@/utils/metaTags";

const Support = () => {
  useMetaTags({
    title: "CloudAdda Support - Help Center for Training Labs & Cloud Services",
    description: "Get help with CloudAdda's training labs, cloud desktops, and VPS hosting. 24/7 support, documentation, and resources for seamless cloud experience."
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
              <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" className="text-orange-500 font-medium">Support</Link>
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
                  24/7 Real Human Support
                </Badge>
              </div>
              <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                We're Here
                <br />
                <span className="text-purple-600 relative">
                  To Help
                  <div className="absolute -bottom-4 left-0 w-full h-1 bg-orange-500 transform -rotate-1"></div>
                </span>
                <br />
                You Succeed
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-purple-600"></div>
                <div className="text-2xl font-bold text-foreground">Your Success is Our Mission.</div>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
                Need assistance with your training labs, cloud desktops, or VPS hosting? Our support team is available around the clock to provide expert guidance and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Support
                </Button>
                <Button variant="outline" size="lg" className="text-purple-600 hover:bg-purple-50">
                  <Book className="w-5 h-5 mr-2" />
                  Explore Documentation
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative flex justify-center">
                <img
                  src="/lovable-uploads/4999a957-56a3-4999-886f-ca9943b89ca0.png"
                  alt="CloudAdda Support - VR Tech Innovation"
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <HelpCircle className="w-4 h-4 mr-2" />
              How Can We Help?
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Explore Support Options</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat Support",
                description: "Get instant assistance from our support team via live chat. Available 24/7 for all your queries.",
                link: "#",
                color: "purple"
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us an email with your questions or issues, and we'll get back to you within 24 hours.",
                link: "#",
                color: "orange"
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Call our support hotline for immediate assistance. Our team is ready to help you with any technical issues.",
                link: "#",
                color: "purple"
              }
            ].map((option, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                    option.color === 'purple' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {option.description}
                  </p>
                  <div className="mt-4 text-center">
                    <Button asChild variant="outline" className="text-purple-600 hover:bg-purple-50">
                      <Link to={option.link}>Get Support</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
              <Book className="w-4 h-4 mr-2" />
              Knowledge Base
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Explore Our Knowledge Base</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions, troubleshooting tips, and detailed guides in our comprehensive knowledge base.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Getting Started with Training Labs",
                description: "Learn how to set up and manage your virtual training labs effectively.",
                link: "#"
              },
              {
                title: "Configuring Cloud Desktops",
                description: "Step-by-step guide to configuring and optimizing your cloud desktops for peak performance.",
                link: "#"
              },
              {
                title: "Managing Your VPS Hosting",
                description: "Detailed instructions on managing your VPS hosting environment and resources.",
                link: "#"
              },
              {
                title: "Troubleshooting Common Issues",
                description: "Find solutions to common problems and errors you may encounter while using our services.",
                link: "#"
              },
              {
                title: "Understanding Billing and Payments",
                description: "Learn about our billing policies, payment methods, and how to manage your subscription.",
                link: "#"
              },
              {
                title: "Security Best Practices",
                description: "Tips and guidelines to ensure the security of your cloud infrastructure and data.",
                link: "#"
              }
            ].map((article, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="link" className="text-purple-600 hover:text-purple-800">
                      <Link to={article.link}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-orange-100 text-orange-800 border-orange-200">
              <Info className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold text-foreground">Common Questions Answered</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: "How do I set up a virtual training lab?",
                answer: "You can set up a virtual training lab by following our step-by-step guide in the knowledge base. It covers everything from creating the environment to managing users."
              },
              {
                question: "What are the benefits of using cloud desktops?",
                answer: "Cloud desktops offer enhanced security, accessibility from anywhere, and simplified management. They are perfect for remote teams and organizations looking to streamline their IT infrastructure."
              },
              {
                question: "How can I scale my VPS hosting resources?",
                answer: "Scaling your VPS resources is easy. Simply log in to your account and adjust the CPU, RAM, and storage as needed. The changes will be applied instantly."
              },
              {
                question: "What type of support is included in my plan?",
                answer: "All our plans include 24/7 real human support via live chat, email, and phone. We are committed to providing you with the best possible assistance."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-24 bg-purple-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -translate-y-32 translate-x-32 opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500 rounded-full translate-y-24 -translate-x-24 opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-8 bg-white/20 text-white border-white/30">
            <Mail className="w-4 h-4 mr-2" />
            Need More Assistance?
          </Badge>
          <h2 className="text-5xl font-bold mb-8">Contact Our Support Team</h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            If you have any questions or need further assistance, please don't hesitate to contact our support team. We're here to help you succeed.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 group">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform" />
              Contact Us
            </Button>
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

export default Support;
