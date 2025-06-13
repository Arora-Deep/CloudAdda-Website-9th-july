
import { Zap, Shield, Wand2 } from "lucide-react";

const CloudDesktopsSolutions = () => {
  const solutions = [
    {
      title: "Feels Instant. Because It Is.",
      description: "Blistering-fast performance powered by AMD EPYC CPUs and NVMe storage — with latency so low, it feels local.",
      icon: Zap,
      highlight: "AMD EPYC + NVMe",
      image: "/lovable-uploads/253ac197-b795-4bd1-b29f-5305f2c651f5.png"
    },
    {
      title: "Security That Travels With You",
      description: "Zero local storage. Full encryption. Centralized control. Sleep easy knowing every desktop is protected by default.",
      icon: Shield,
      highlight: "Zero Trust Architecture",
      image: "/lovable-uploads/69485dce-cf7b-4411-9a07-e8c0f9e546a6.png"
    },
    {
      title: "Runs Anywhere. Looks Beautiful Everywhere.",
      description: "Access your desktop from a Mac, PC, tablet, or browser. It's always there — pixel-perfect, fast, and reliable.",
      icon: Wand2,
      highlight: "Multi-device Access",
      image: "/lovable-uploads/639f9cb2-d6b4-4b80-994f-224a274f679b.png"
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            The <span className="text-purple-600">CloudAdda Way</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desktops That Actually Work
          </p>
          <div className="mt-8 w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
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

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-auto"
                  />
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
