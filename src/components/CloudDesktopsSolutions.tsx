
import { Zap, Shield, Settings, Wand2 } from "lucide-react";

const CloudDesktopsSolutions = () => {
  const solutions = [
    {
      title: "Feels Instant. Because It Is.",
      description: "Blistering-fast performance powered by AMD EPYC CPUs and NVMe storage — with latency so low, it feels local.",
      icon: Zap
    },
    {
      title: "Security That Travels With You",
      description: "Zero local storage. Full encryption. Centralized control. Sleep easy knowing every desktop is protected by default.",
      icon: Shield
    },
    {
      title: "Fully Configured, Ready to Go",
      description: "Need Photoshop? Tally? Postgres? VSCode? We pre-install and fine-tune it all to your exact workflow.",
      icon: Settings
    },
    {
      title: "Runs Anywhere. Looks Beautiful Everywhere.",
      description: "Access your desktop from a Mac, PC, tablet, or browser. It's always there — pixel-perfect, fast, and reliable.",
      icon: Wand2
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The CloudAdda Way: Desktops That Actually Work</h2>
          <p className="text-xl text-gray-600">We took everything frustrating about local machines and eliminated it. Then we supercharged what was left.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl h-full">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
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
