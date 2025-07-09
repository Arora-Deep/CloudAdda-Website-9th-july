
import React from 'react';
import { Server, Zap, Shield, Clock } from 'lucide-react';

const VPSFeatures = () => {
  const features = [
    {
      icon: Server,
      title: "AMD EPYC Processors",
      description: "Latest generation AMD EPYC processors for maximum performance"
    },
    {
      icon: Zap,
      title: "SSD Storage",
      description: "Ultra-fast NVMe SSD storage for lightning-quick data access"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security features and DDoS protection included"
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Guaranteed uptime with 24/7 monitoring and support"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our VPS?
          </h2>
          <p className="text-xl text-gray-600">
            Premium features that set us apart from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VPSFeatures;
