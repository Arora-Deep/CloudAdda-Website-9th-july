
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Shield, Clock } from "lucide-react";

const CloudDesktopsRealityCheck = () => {
  const transformations = [
    {
      problem: "Hardware Failures",
      description: "Laptop crashes, lost work, missed deadlines",
      solution: "Cloud Continuity",
      benefit: "Work from any device, anytime, anywhere",
      icon: Zap,
      color: "blue"
    },
    {
      problem: "Environment Inconsistencies", 
      description: "\"Works on my machine\" debugging nightmares",
      solution: "Standardized Environments",
      benefit: "Same setup for everyone, every time",
      icon: Users,
      color: "green"
    },
    {
      problem: "Security Vulnerabilities",
      description: "Data scattered across personal devices",
      solution: "Centralized Security",
      benefit: "All data secure in the cloud",
      icon: Shield,
      color: "purple"
    },
    {
      problem: "Slow Onboarding",
      description: "Days spent setting up new team members",
      solution: "Instant Access",
      benefit: "New hires productive from day one",
      icon: Clock,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800", 
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Team's Reality</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop managing infrastructure problems. Start empowering your team with cloud desktops that just work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {transformations.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-gray-200 transition-all duration-300 hover:shadow-xl h-full">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${getColorClasses(item.color)}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.problem}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <ArrowRight className="w-4 h-4 text-orange-500" />
                        <span className="font-semibold text-orange-600">{item.solution}</span>
                      </div>
                      <p className="text-gray-700 font-medium">{item.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of teams who've made the switch to cloud desktops
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 rounded-full px-8 py-3">
                See Live Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsRealityCheck;
