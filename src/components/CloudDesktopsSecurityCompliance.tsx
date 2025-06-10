
import { Shield, Lock, Eye, FileCheck, Users, AlertTriangle } from "lucide-react";

const CloudDesktopsSecurityCompliance = () => {
  const securityFeatures = [
    {
      title: "Zero Trust Architecture",
      description: "Every connection verified, every session monitored, every byte encrypted.",
      icon: Shield
    },
    {
      title: "Enterprise-Grade Encryption",
      description: "AES-256 encryption in transit and at rest. Your data is safer than Fort Knox.",
      icon: Lock
    },
    {
      title: "Complete Session Monitoring",
      description: "Full audit logs, screen recordings, and user activity tracking for compliance.",
      icon: Eye
    },
    {
      title: "Compliance Ready",
      description: "HIPAA, SOC 2, GDPR, ISO 27001 compliant out of the box.",
      icon: FileCheck
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permissions, multi-factor authentication, and single sign-on.",
      icon: Users
    },
    {
      title: "Disaster Recovery",
      description: "Automated backups, instant failover, and 99.99% availability guarantee.",
      icon: AlertTriangle
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-orange-400">Enterprise Security</span> That Actually Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While your competitors worry about data breaches, you'll sleep peacefully knowing your digital workspace is protected by military-grade security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-500 rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Security Audit Available</h3>
          <p className="text-orange-100 mb-6">Get a comprehensive security assessment of your current setup vs. CloudAdda's protection.</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
            Request Security Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsSecurityCompliance;
