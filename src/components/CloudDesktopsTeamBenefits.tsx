
import { Clock, Shield, Settings, Users, Unlock, Zap } from "lucide-react";

const CloudDesktopsTeamBenefits = () => {
  const benefits = [
    {
      title: "Always-On Workspaces",
      description: "No boot-up delays, no lost progress, no waiting around for your computer to start.",
      icon: Clock,
      stat: "0 sec",
      statLabel: "Boot time"
    },
    {
      title: "Zero Downtime Guarantee", 
      description: "We monitor, maintain, and patch your systems silently in the background.",
      icon: Shield,
      stat: "99.98%",
      statLabel: "Uptime SLA"
    },
    {
      title: "Custom Templates",
      description: "We build your development environment exactly how your team needs it configured.",
      icon: Settings,
      stat: "< 5 min",
      statLabel: "Setup time"
    },
    {
      title: "Human Support",
      description: "Real people, real engineers providing real fast help when you need it most.",
      icon: Users,
      stat: "24/7",
      statLabel: "Live support"
    },
    {
      title: "No Lock-In",
      description: "Monthly plans with no long-term contracts. Cancel or scale anytime you want.",
      icon: Unlock,
      stat: "0",
      statLabel: "Contracts required"
    },
    {
      title: "Lightning Performance",
      description: "AMD EPYC processors and NVMe storage deliver desktop performance that beats most laptops.",
      icon: Zap,
      stat: "10x",
      statLabel: "Faster than typical VDI"
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 text-purple-600">
            Why Teams Love CloudAdda
          </h2>
          <p className="text-2xl text-gray-600">The benefits that matter to your team</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-purple-600">{benefit.stat}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{benefit.statLabel}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-orange-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Team?</h3>
            <p className="text-xl mb-8 opacity-90">Join thousands of teams already working smarter, not harder.</p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsTeamBenefits;
