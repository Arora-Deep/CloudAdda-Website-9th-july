
import { Zap, Shield, Wand2 } from "lucide-react";

const CloudDesktopsSolutions = () => {
  const solutions = [
    {
      title: "Feels Instant. Because It Is.",
      description: "Blistering-fast performance powered by AMD EPYC CPUs and NVMe storage — with latency so low, it feels local.",
      icon: Zap,
      highlight: "AMD EPYC + NVMe"
    },
    {
      title: "Security That Travels With You",
      description: "Zero local storage. Full encryption. Centralized control. Sleep easy knowing every desktop is protected by default.",
      icon: Shield,
      highlight: "Zero Trust Architecture"
    },
    {
      title: "Enterprise-Grade Accessibility",
      description: "Access your desktop from a Mac, PC, tablet, or browser. It's always there — consistent, fast, and reliable.",
      icon: Wand2,
      highlight: "Multi-device Access"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The <span className="text-orange-500">CloudAdda Way</span>
          </h2>
          <p className="text-xl text-gray-600">
            Desktops That Actually Work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <solution.icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-orange-50 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">
                  {solution.highlight}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsSolutions;
