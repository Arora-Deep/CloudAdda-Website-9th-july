
import { Zap, Shield, Wand2, CheckCircle } from "lucide-react";

const CloudDesktopsSolutions = () => {
  const solutions = [
    {
      title: "Feels Instant. Because It Is.",
      description: "Blistering-fast performance powered by AMD EPYC CPUs and NVMe storage — with latency so low, it feels local.",
      highlight: "AMD EPYC + NVMe",
      icon: Zap
    },
    {
      title: "Security That Travels With You",
      description: "Zero local storage. Full encryption. Centralized control. Sleep easy knowing every desktop is protected by default.",
      highlight: "Zero Trust Architecture",
      icon: Shield
    },
    {
      title: "Runs Anywhere. Looks Beautiful Everywhere.",
      description: "Access your desktop from a Mac, PC, tablet, or browser. It's always there — pixel-perfect, fast, and reliable.",
      highlight: "Multi-device Access",
      icon: Wand2
    },
    {
      title: "No Setup Drama. Just Pure Productivity.",
      description: "Skip the installation nightmares. Your desktop is pre-configured, always updated, and ready to work in seconds.",
      highlight: "Zero Configuration",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            The <span className="text-purple-600">CloudAdda Way</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four principles that make cloud desktops actually work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <solution.icon className="w-6 h-6 text-orange-600" />
              </div>
              
              <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 mb-4">
                <span className="text-purple-700 font-semibold text-sm">{solution.highlight}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
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
