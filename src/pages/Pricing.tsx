import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, Check, CheckCircle, Users, Calendar, Clock, Zap, Shield, Award, Star, Sparkles, TrendingUp, Target, Globe, Heart, Settings, Monitor, Database, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const plans = {
    monthly: [
      {
        name: "Basic",
        price: 49,
        features: [
          "5 Training Labs",
          "Up to 50 Students",
          "Standard Support",
          "Basic Analytics",
        ],
      },
      {
        name: "Pro",
        price: 99,
        features: [
          "20 Training Labs",
          "Up to 200 Students",
          "Priority Support",
          "Advanced Analytics",
          "Custom Branding",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: 299,
        features: [
          "Unlimited Training Labs",
          "Unlimited Students",
          "24/7 Premium Support",
          "Advanced Analytics",
          "Custom Branding",
          "Dedicated Account Manager",
        ],
      },
    ],
    yearly: [
      {
        name: "Basic",
        price: 499,
        features: [
          "5 Training Labs",
          "Up to 50 Students",
          "Standard Support",
          "Basic Analytics",
        ],
      },
      {
        name: "Pro",
        price: 999,
        features: [
          "20 Training Labs",
          "Up to 200 Students",
          "Priority Support",
          "Advanced Analytics",
          "Custom Branding",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: 2999,
        features: [
          "Unlimited Training Labs",
          "Unlimited Students",
          "24/7 Premium Support",
          "Advanced Analytics",
          "Custom Branding",
          "Dedicated Account Manager",
        ],
      },
    ],
  };

  const features = [
    {
      name: "Interactive Training Labs",
      description: "Hands-on learning environments for practical skill development.",
      icon: Monitor,
    },
    {
      name: "Scalable Infrastructure",
      description: "Seamlessly scale your training programs to accommodate any number of students.",
      icon: TrendingUp,
    },
    {
      name: "Real-time Monitoring",
      description: "Track student progress and lab performance with detailed analytics.",
      icon: Settings,
    },
    {
      name: "Dedicated Support",
      description: "Get expert assistance whenever you need it with our dedicated support team.",
      icon: Shield,
    },
    {
      name: "Customizable Environments",
      description: "Tailor lab environments to match your specific training requirements.",
      icon: Database,
    },
    {
      name: "Global Accessibility",
      description: "Access your training labs from anywhere in the world with our cloud-based platform.",
      icon: Globe,
    },
  ];

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 flex items-center space-x-1">
                    <span>Log In</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainer.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Trainer Log In
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainee.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      Trainee Log In
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full px-6">
                <Link to="/contact">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-purple-500 text-white mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple Plans for Every Training Need
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Flexible pricing options to scale your training programs without breaking the bank.
          </p>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button
              onClick={() => setSelectedPlan("monthly")}
              className={`px-6 py-3 text-lg font-medium ${
                selectedPlan === "monthly"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } rounded-l-md`}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setSelectedPlan("yearly")}
              className={`px-6 py-3 text-lg font-medium ${
                selectedPlan === "yearly"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } rounded-r-md`}
            >
              Yearly (Save up to 20%)
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans[selectedPlan].map((plan, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.popular ? (
                      <Badge className="bg-green-500 text-white">
                        Most Popular
                      </Badge>
                    ) : null}
                  </CardDescription>
                  <div className="text-5xl font-bold text-purple-600 mt-4">
                    ${plan.price}
                  </div>
                  <p className="text-gray-500">per month</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unlock the Power of CloudAdda
            </h2>
            <p className="text-xl text-gray-600">
              Explore the key features that make CloudAdda the perfect solution
              for your training needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              See how CloudAdda has helped training companies around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "John Smith",
                title: "CEO, Tech Training Inc.",
                quote:
                  "CloudAdda has transformed our training programs. The scalability and reliability are unmatched.",
              },
              {
                name: "Emily Johnson",
                title: "Director, Global Education",
                quote:
                  "The interactive labs and dedicated support have made a huge difference in our student outcomes.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent>
                  <div className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about CloudAdda pricing and
              features.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "What is included in each plan?",
                answer:
                  "Each plan includes a set number of training labs, student capacity, support level, and analytics features. See the plan details above for more information.",
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.",
              },
              {
                question: "Do you offer custom plans?",
                answer:
                  "Yes, we offer custom plans for organizations with unique training needs. Contact our sales team to discuss your requirements.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and bank transfers.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes, we offer a 14-day free trial for all new users. Sign up today to experience the power of CloudAdda.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started with CloudAdda?
          </h2>
          <p className="text-xl mb-8">
            Choose the plan that's right for you and transform your training
            programs today.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png"
                  alt="CloudAdda Logo"
                  className="h-8 w-auto"
                />
                <span className="font-bold text-xl">CloudAdda</span>
              </Link>
              <p className="text-gray-400">
                Simple. Scalable. Human. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/training-labs" className="hover:text-white">
                    Training Labs
                  </Link>
                </li>
                <li>
                  <Link to="/cloud-desktops" className="hover:text-white">
                    Cloud Desktops
                  </Link>
                </li>
                <li>
                  <Link to="/vps" className="hover:text-white">
                    VPS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/trainer-adda" className="hover:text-white">
                    Trainer Adda
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="hover:text-white">
                    Guides & Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/support" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 CloudAdda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
