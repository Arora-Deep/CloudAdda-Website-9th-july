
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface CloudDesktopsPricingProps {
  currency: 'INR' | 'USD';
}

const CloudDesktopsPricing = ({ currency }: CloudDesktopsPricingProps) => {
  const rolePlans = [
    { 
      name: "Essential", 
      idealFor: "Admins, HR, Finance, Light Users",
      priceINR: "₹1,499",
      priceUSD: "$18", // Rounded up from 17.99
      specs: ["2 vCPU", "4 GB RAM", "100 GB NVMe SSD"]
    },
    { 
      name: "Standard", 
      idealFor: "Developers, QA, Analysts",
      priceINR: "₹2,499",
      priceUSD: "$30", // Rounded up from 29.99
      specs: ["4 vCPU", "8 GB RAM", "200 GB NVMe SSD"]
    },
    { 
      name: "Power", 
      idealFor: "DevOps, Architects, Designers",
      priceINR: "₹3,799",
      priceUSD: "$46", // Rounded up from 45.59
      specs: ["6 vCPU", "16 GB RAM", "300 GB NVMe SSD"],
      popular: true
    },
    { 
      name: "Ultra", 
      idealFor: "Heavy Dev, AI/ML, GPU workloads",
      priceINR: "₹5,499",
      priceUSD: "$66", // Rounded up from 65.99
      specs: ["8 vCPU", "32 GB RAM", "500 GB NVMe SSD"]
    },
    { 
      name: "Custom Setup", 
      idealFor: "Mixed teams or enterprise deployments",
      priceINR: "Contact Us",
      priceUSD: "Contact Us",
      specs: ["Fully tailored specs", "GPU options", "SSO integration", "Enterprise features"]
    }
  ];

  const includedFeatures = [
    "Enterprise AMD EPYC performance",
    "Pure NVMe storage",
    "Built-in snapshots & access controls",
    "99.98% uptime SLA",
    "24/7 real-human support",
    "OS options: Windows, Linux, macOS (on request)"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Cloud Desktops (DaaS)</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4">Why pay the same for everyone when every role is different?</p>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With CloudAdda, you can give your admins a lightweight desktop, your devs a performance beast, 
            and your designers a GPU-accelerated workstation — all managed from one dashboard.
          </p>
        </div>

        {/* Role-Based Plans Header */}
        <div className="flex items-center justify-center mb-8">
          <Users className="w-6 h-6 text-blue-500 mr-2" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Role-Based Plans</h3>
        </div>

        {/* Mobile: Card Layout, Desktop: Table Layout */}
        <div className="mb-12">
          {/* Mobile Card Layout */}
          <div className="block md:hidden space-y-4">
            {rolePlans.map((plan, index) => (
              <div 
                key={index}
                className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 bg-blue-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-blue-300 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold mb-3">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{plan.idealFor}</p>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {currency === 'INR' ? plan.priceINR : plan.priceUSD}
                  </div>
                  {(currency === 'INR' ? plan.priceINR : plan.priceUSD) !== "Contact Us" && (
                    <div className="text-sm text-gray-600">Per User/Month</div>
                  )}
                </div>
                
                <div className="space-y-2">
                  {plan.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Role Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Ideal For</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Specs</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Price (Per User/Month)</th>
                </tr>
              </thead>
              <tbody>
                {rolePlans.map((plan, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      plan.popular ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{plan.name}</span>
                        {plan.popular && (
                          <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{plan.idealFor}</td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {plan.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="text-lg font-bold text-gray-900">
                        {currency === 'INR' ? plan.priceINR : plan.priceUSD}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Included Features */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">All plans include:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🧩</span>
              <p className="text-gray-700">
                <strong>Mix & match plans</strong> across your team — only pay for what each role actually needs.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🎯</span>
              <p className="text-gray-700">
                <strong>Custom pricing available</strong> for 20+ users or enterprise-scale deployments.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <span className="mr-2">⚡</span>
              Launch Your Desktop Now
            </Button>
          </Link>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-4 text-lg w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Sales for Custom Plans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsPricing;
