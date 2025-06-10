
import { Clock, Shield, Settings, Users, Unlock } from "lucide-react";

const CloudDesktopsTeamBenefits = () => {
  const benefits = [
    {
      title: "Always-On Workspaces",
      description: "No boot-up delays, no lost progress, no waiting.",
      icon: Clock
    },
    {
      title: "Zero Downtime Guarantee", 
      description: "We monitor, maintain, and patch — silently.",
      icon: Shield
    },
    {
      title: "Custom Templates",
      description: "We build your environment exactly how you need it.",
      icon: Settings
    },
    {
      title: "Human Support",
      description: "Real people. Real engineers. Real fast help.",
      icon: Users
    },
    {
      title: "No Lock-In",
      description: "Monthly plans. Cancel or scale anytime.",
      icon: Unlock
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Teams Love CloudAdda</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <div key={index + 3} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsTeamBenefits;
