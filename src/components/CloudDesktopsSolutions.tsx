
import { Zap, Shield, Settings, Wand2 } from "lucide-react";

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
      title: "Fully Configured, Ready to Go",
      description: "Need Photoshop? Tally? Postgres? VSCode? We pre-install and fine-tune it all to your exact workflow.",
      icon: Settings,
      highlight: "Pre-configured Templates"
    },
    {
      title: "Runs Anywhere. Looks Beautiful Everywhere.",
      description: "Access your desktop from a Mac, PC, tablet, or browser. It's always there — pixel-perfect, fast, and reliable.",
      icon: Wand2,
      highlight: "Multi-device Access"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            The <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CloudAdda Way</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desktops That Actually Work
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-8`}>
                <div className="inline-flex items-center space-x-3 bg-orange-100 rounded-full px-6 py-3">
                  <solution.icon className="w-6 h-6 text-orange-600" />
                  <span className="text-orange-700 font-semibold">{solution.highlight}</span>
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                  {solution.title}
                </h3>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-4 h-1 bg-orange-300 rounded-full"></div>
                  <div className="w-8 h-1 bg-orange-200 rounded-full"></div>
                </div>
              </div>

              {/* 3D Illustration Space */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20"></div>
                  <div className="text-center z-10">
                    <solution.icon className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-20" />
                    <p className="text-gray-500 text-lg">
                      [3D Illustration: {solution.title}]
                    </p>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-6 h-6 bg-blue-400 rounded-full opacity-40 animate-bounce"></div>
                  <div className="absolute top-1/2 left-6 w-3 h-3 bg-purple-400 rounded-full opacity-50"></div>
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
