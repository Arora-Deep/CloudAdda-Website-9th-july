
import { Zap, Rocket, Lock } from "lucide-react";

const CloudDesktopsSolutions = () => {
  const solutions = [
    {
      title: "Enterprise-Grade Performance",
      subtitle: "Power that never lags",
      description: "High-throughput servers with NVMe storage and EPYC CPUs deliver zero-lag performance, even on poor networks. Your desktop feels native.",
      icon: Zap,
      metric: "10x Faster",
      proof: "Than average local development setups"
    },
    {
      title: "Instant Environment Setup",
      subtitle: "From zero to coding in minutes",
      description: "Pre-configured environments with IDEs, Docker, VS Code, and custom stacks. New team members productive on day one.",
      icon: Rocket,
      metric: "< 2min Setup",
      proof: "Average environment deployment time"
    },
    {
      title: "Security & Compliance Built-in",
      subtitle: "Enterprise security by default",
      description: "Encrypted, isolated environments with role-based access control. Your code never leaves our secure infrastructure.",
      icon: Lock,
      metric: "SOC 2 Compliant",
      proof: "Enterprise-grade security standards"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Fix Every Single Pain Point</h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-500">
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl h-full">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{solution.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{solution.metric}</div>
                    </div>
                    <div className="text-xs text-gray-500 text-center">{solution.proof}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsSolutions;
