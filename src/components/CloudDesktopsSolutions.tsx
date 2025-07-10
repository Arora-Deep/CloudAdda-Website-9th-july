
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
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            The <span className="text-orange-500">CloudAdda Way</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Desktops That Actually Work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-orange-50 text-orange-700 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                  {solution.highlight}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {solution.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
