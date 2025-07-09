
import React from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const VPSSecurity = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Advanced DDoS mitigation to keep your services online during attacks"
    },
    {
      icon: Lock,
      title: "SSL Certificates",
      description: "Free SSL certificates for secure data transmission"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your server's health and performance"
    },
    {
      icon: AlertTriangle,
      title: "Automated Backups",
      description: "Daily automated backups to protect your valuable data"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-600">
            Your data and applications are protected by multiple layers of security
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-lg p-6">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Security Compliance</h3>
          <p className="text-lg mb-4">
            Our infrastructure meets industry standards including SOC 2, ISO 27001, and PCI DSS compliance
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <span>SOC 2 Type II</span>
            <span>ISO 27001</span>
            <span>PCI DSS</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VPSSecurity;
