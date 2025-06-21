
import React from "react";
import { Check, X, Award, Zap, Shield, Headphones } from "lucide-react";

const VPSPricingDifferentiator = () => {
  const competitors = [
    {
      name: "CloudAdda VPS",
      price: "$29",
      isOurs: true,
      features: [
        { name: "AMD EPYC 7713 Processors", included: true },
        { name: "NVMe Gen4 SSD Storage", included: true },
        { name: "10Gbps Network Included", included: true },
        { name: "Free DDoS Protection", included: true },
        { name: "24/7 Expert Support", included: true },
        { name: "99.99% Uptime SLA", included: true },
        { name: "Instant Scaling", included: true },
        { name: "Setup Fee", included: false }
      ]
    },
    {
      name: "Competitor A",
      price: "$35",
      isOurs: false,
      features: [
        { name: "AMD EPYC 7713 Processors", included: false },
        { name: "NVMe Gen4 SSD Storage", included: false },
        { name: "10Gbps Network Included", included: false },
        { name: "Free DDoS Protection", included: true },
        { name: "24/7 Expert Support", included: false },
        { name: "99.99% Uptime SLA", included: true },
        { name: "Instant Scaling", included: false },
        { name: "Setup Fee", included: true }
      ]
    },
    {
      name: "Competitor B",
      price: "$42",
      isOurs: false,
      features: [
        { name: "AMD EPYC 7713 Processors", included: false },
        { name: "NVMe Gen4 SSD Storage", included: true },
        { name: "10Gbps Network Included", included: false },
        { name: "Free DDoS Protection", included: false },
        { name: "24/7 Expert Support", included: true },
        { name: "99.99% Uptime SLA", included: false },
        { name: "Instant Scaling", included: true },
        { name: "Setup Fee", included: true }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-orange-500">CloudAdda VPS</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our value proposition against leading competitors. Same performance, better features, lower cost.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-4 gap-6 mb-8">
              {competitors.map((competitor, index) => (
                <div key={index} className={`text-center p-6 rounded-2xl ${
                  competitor.isOurs 
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white transform scale-105' 
                    : 'bg-white border border-gray-200'
                }`}>
                  {competitor.isOurs && (
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">Best Value</span>
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${competitor.isOurs ? 'text-white' : 'text-gray-900'}`}>
                    {competitor.name}
                  </h3>
                  <div className={`text-3xl font-bold ${competitor.isOurs ? 'text-white' : 'text-gray-900'}`}>
                    {competitor.price}
                    <span className="text-lg font-normal">/month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {competitors[0].features.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-4 gap-6 items-center py-3 border-b border-gray-200 last:border-b-0">
                  <div className="font-medium text-gray-900">{feature.name}</div>
                  {competitors.map((competitor, compIndex) => (
                    <div key={compIndex} className="text-center">
                      {competitor.features[featureIndex].included ? (
                        feature.name === "Setup Fee" ? (
                          <X className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        )
                      ) : (
                        feature.name === "Setup Fee" ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-orange-50 rounded-2xl">
            <Zap className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Superior Performance</h3>
            <p className="text-gray-600">Latest AMD EPYC processors deliver 40% better performance than industry average</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-2xl">
            <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Built-in DDoS protection and security monitoring at no extra cost</p>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-2xl">
            <Headphones className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">24/7 support from cloud infrastructure experts, not just ticket handlers</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors mr-4">
            Start Free Trial
          </button>
          <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg transition-colors">
            Get Detailed Comparison
          </button>
        </div>
      </div>
    </section>
  );
};

export default VPSPricingDifferentiator;
