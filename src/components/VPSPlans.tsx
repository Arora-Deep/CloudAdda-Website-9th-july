
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const VPSPlans = () => {
  const plans = [
    {
      name: "Starter VPS",
      price: "$29",
      period: "/month",
      cpu: "2 vCPU",
      ram: "4 GB RAM",
      storage: "50 GB SSD",
      bandwidth: "2 TB Transfer",
      features: ["Root Access", "24/7 Support", "99.9% Uptime", "Free SSL"]
    },
    {
      name: "Business VPS",
      price: "$59",
      period: "/month",
      cpu: "4 vCPU",
      ram: "8 GB RAM",
      storage: "100 GB SSD",
      bandwidth: "4 TB Transfer",
      features: ["Root Access", "24/7 Support", "99.9% Uptime", "Free SSL", "Daily Backups"],
      popular: true
    },
    {
      name: "Enterprise VPS",
      price: "$119",
      period: "/month",
      cpu: "8 vCPU",
      ram: "16 GB RAM",
      storage: "200 GB SSD",
      bandwidth: "8 TB Transfer",
      features: ["Root Access", "24/7 Support", "99.9% Uptime", "Free SSL", "Daily Backups", "Priority Support"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your VPS Plan
          </h2>
          <p className="text-xl text-gray-600">
            Scalable solutions for every business need
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg p-8 ${plan.popular ? 'ring-2 ring-orange-500 relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>{plan.cpu}</div>
                  <div>{plan.ram}</div>
                  <div>{plan.storage}</div>
                  <div>{plan.bandwidth}</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="w-full">
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VPSPlans;
