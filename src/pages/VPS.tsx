
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import VPSDeveloperReality from "@/components/VPSDeveloperReality";
import VPSPricingDifferentiator from "@/components/VPSPricingDifferentiator";

const VPS = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      quarterlyPrice: 78, // 10% discount
      yearlyPrice: 290, // 17% discount
      popular: false,
      features: [
        "2 vCPU AMD EPYC 7713",
        "4 GB RAM",
        "80 GB NVMe SSD",
        "2 TB Transfer",
        "1 IPv4 Address",
        "Linux & Windows",
        "24/7 Support"
      ]
    },
    {
      name: "Growth",
      monthlyPrice: 59,
      quarterlyPrice: 159, // 10% discount
      yearlyPrice: 590, // 17% discount
      popular: true,
      features: [
        "4 vCPU AMD EPYC 7713",
        "8 GB RAM",
        "160 GB NVMe SSD",
        "4 TB Transfer",
        "1 IPv4 Address",
        "Linux & Windows",
        "24/7 Support"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: 119,
      quarterlyPrice: 321, // 10% discount
      yearlyPrice: 1190, // 17% discount
      popular: false,
      features: [
        "8 vCPU AMD EPYC 7713",
        "16 GB RAM",
        "320 GB NVMe SSD",
        "8 TB Transfer",
        "1 IPv4 Address",
        "Linux & Windows",
        "24/7 Support"
      ]
    },
    {
      name: "Enterprise",
      monthlyPrice: 239,
      quarterlyPrice: 645, // 10% discount
      yearlyPrice: 2390, // 17% discount
      popular: false,
      features: [
        "16 vCPU AMD EPYC 7713",
        "32 GB RAM",
        "640 GB NVMe SSD",
        "16 TB Transfer",
        "1 IPv4 Address",
        "Linux & Windows",
        "Priority Support"
      ]
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    switch (billingCycle) {
      case 'quarterly':
        return plan.quarterlyPrice;
      case 'yearly':
        return plan.yearlyPrice;
      default:
        return plan.monthlyPrice;
    }
  };

  const getPriceLabel = () => {
    switch (billingCycle) {
      case 'quarterly':
        return '/quarter';
      case 'yearly':
        return '/year';
      default:
        return '/month';
    }
  };

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
                    <NavigationMenuTrigger className="text-gray-700 hover:text-orange-500 transition-colors bg-transparent data-[state=open]:bg-gray-50">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                      <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-1 bg-white">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/training-labs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-accent-foreground focus:bg-gray-50 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none text-gray-900">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/cloud-desktops"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-accent-foreground focus:bg-gray-50 focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none text-gray-900">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/vps"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-accent-foreground focus:bg-gray-50 focus:text-accent-foreground"
                          >
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
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50">
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

      {/* Developer Reality Section */}
      <VPSDeveloperReality />

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">VPS Plans</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('quarterly')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'quarterly'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Quarterly
                <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">10% OFF</span>
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">17% OFF</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-orange-500 bg-white transform scale-105'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${getPrice(plan)}</span>
                    <span className="text-gray-600">{getPriceLabel()}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full rounded-full font-semibold py-3 ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-purple-500 hover:bg-purple-600 text-white'
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Differentiator */}
      <VPSPricingDifferentiator />
    </div>
  );
};

export default VPS;
