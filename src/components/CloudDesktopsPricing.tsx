
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CloudDesktopsPricing = () => {
  const plans = [
    { 
      name: "Starter Plan", 
      price: "₹2,599", 
      period: "/user/mo",
      description: "Perfect for individual users and light workloads",
      specs: ["4 vCPU", "8GB RAM", "100GB NVMe", "Pre-installed essentials", "24/7 support"]
    },
    { 
      name: "Team Plan", 
      price: "₹4,399", 
      period: "/user/mo",
      description: "Built for growing teams and multitasking workflows",
      specs: ["6 vCPU", "16GB RAM", "200GB NVMe", "Admin dashboard", "Custom base templates"],
      popular: true
    },
    { 
      name: "Enterprise Plan", 
      price: "₹6,599", 
      period: "/user/mo",
      description: "For complex, high-security, or high-performance needs",
      specs: ["8 vCPU", "32GB RAM", "500GB NVMe", "GPU access, audit logs", "SSO, onboarding support"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing That Scales With You</h2>
          <p className="text-xl text-gray-600">Choose a plan. Launch in minutes. Upgrade anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <div className="space-y-4 mb-8 text-left">
                  {plan.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full rounded-full py-3 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.name === "Enterprise Plan" ? "Talk to Sales" : "Start Free Trial"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsPricing;
