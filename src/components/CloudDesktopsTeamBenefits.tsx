
import { Clock, Shield, Settings, Users, Unlock } from "lucide-react";

const CloudDesktopsTeamBenefits = () => {
  const benefits = [
    {
      title: "Always-On Workspaces",
      description: "No boot-up delays, no lost progress, no waiting.",
      icon: Clock,
      stat: "0 sec",
      statLabel: "Boot time"
    },
    {
      title: "Zero Downtime Guarantee", 
      description: "We monitor, maintain, and patch — silently.",
      icon: Shield,
      stat: "99.98%",
      statLabel: "Uptime SLA"
    },
    {
      title: "Custom Templates",
      description: "We build your environment exactly how you need it.",
      icon: Settings,
      stat: "< 5 min",
      statLabel: "Setup time"
    },
    {
      title: "Human Support",
      description: "Real people. Real engineers. Real fast help.",
      icon: Users,
      stat: "24/7",
      statLabel: "Live support"
    },
    {
      title: "No Lock-In",
      description: "Monthly plans. Cancel or scale anytime.",
      icon: Unlock,
      stat: "0",
      statLabel: "Contracts"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Why Teams <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Love</span> CloudAdda
          </h2>
        </div>

        {/* Flow Layout */}
        <div className="relative">
          {/* Central flowing line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-200 via-blue-200 to-purple-200"></div>
          
          <div className="space-y-24">
            {benefits.map((benefit, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-16`}>
                
                {/* Content Side */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'} mb-8 lg:mb-0`}>
                  <div className={`inline-flex items-center space-x-3 mb-6 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-bold text-gray-900">{benefit.stat}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">{benefit.statLabel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {benefit.description}
                  </p>
                </div>

                {/* 3D Illustration Side */}
                <div className="lg:w-1/2">
                  <div className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30"></div>
                    <div className="text-center z-10">
                      <benefit.icon className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-30" />
                      <p className="text-gray-500 text-sm px-4">
                        [3D Illustration: {benefit.title}]
                      </p>
                    </div>
                    
                    {/* Animated elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                  </div>
                </div>

                {/* Flow indicator */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-orange-400 rounded-full shadow-lg" style={{top: `${index * 24 + 12}rem`}}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Team?</h3>
              <p className="text-xl opacity-90 mb-8">Join thousands of teams already working smarter, not harder.</p>
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsTeamBenefits;
