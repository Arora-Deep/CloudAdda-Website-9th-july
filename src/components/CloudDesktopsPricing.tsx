
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Users } from "lucide-react";

const CloudDesktopsPricing = () => {
  const plans = [
    { 
      name: "Developer", 
      price: "₹1,299", 
      period: "/user/month",
      originalPrice: "₹2,599",
      specs: ["4 vCPU (AMD EPYC)", "8GB ECC RAM", "100GB NVMe SSD", "Pre-installed Dev Tools", "VS Code, Docker, Git", "24/7 Human Support"],
      popular: false,
      description: "Perfect for individual developers",
      savings: "50% off vs AWS WorkSpaces"
    },
    { 
      name: "Team", 
      price: "₹2,199", 
      period: "/user/month",
      originalPrice: "₹4,399",
      specs: ["6 vCPU (AMD EPYC)", "16GB ECC RAM", "200GB NVMe SSD", "Custom Environment Templates", "Team Collaboration Tools", "Priority Support", "Admin Dashboard"],
      popular: true,
      description: "Ideal for development teams",
      savings: "50% off vs enterprise VDI"
    },
    { 
      name: "Enterprise", 
      price: "₹3,299", 
      period: "/user/month",
      originalPrice: "₹6,599",
      specs: ["8 vCPU (AMD EPYC)", "32GB ECC RAM", "500GB NVMe SSD", "GPU Access Available", "SSO Integration", "Advanced Security", "Dedicated Support Manager"],
      popular: false,
      description: "For large organizations and complex workloads",
      savings: "50% off vs traditional VDI"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing That Makes CFOs Smile</h2>
          <p className="text-xl text-gray-600">Enterprise performance at startup prices</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-2xl scale-105' 
                  : 'bg-white border-2 border-gray-200 hover:border-blue-300 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <span className="text-gray-600">{plan.period}</span>
                  <div className="text-sm text-green-600 font-medium mt-1">{plan.savings}</div>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full rounded-full py-3 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Launch Desktop Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">All plans include instant setup, free migrations, and 7-day free trial</p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>99.98% SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>90s Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Human Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsPricing;
