
import { Zap, Shield, Wand2 } from "lucide-react";

const CloudDesktopsWay = () => {
  const wayPoints = [
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
      title: "Runs Anywhere. Looks Beautiful Everywhere.",
      description: "Access your desktop from a Mac, PC, tablet, or browser. It's always there — pixel-perfect, fast, and reliable.",
      icon: Wand2,
      highlight: "Multi-device Access"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            The <span className="text-orange-500">CloudAdda</span> Way
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Why our cloud desktops are different</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {wayPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-8 h-8 text-orange-600" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-orange-50 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">
                  {point.highlight}
                </span>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {point.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsWay;
