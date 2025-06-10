
import { CheckCircle, X, ArrowRight } from "lucide-react";

const CloudDesktopsComparison = () => {
  const comparisonData = [
    {
      feature: "Speed",
      cloudAdda: "Instant, server-grade",
      traditional: "Slow, aging hardware",
      icon: "⚡"
    },
    {
      feature: "Setup Time",
      cloudAdda: "Pre-configured, zero setup",
      traditional: "Manual installs, delays",
      icon: "🚀"
    },
    {
      feature: "Security",
      cloudAdda: "Centralized, no local data",
      traditional: "Risky, fragmented data",
      icon: "🔒"
    },
    {
      feature: "Portability",
      cloudAdda: "Log in anywhere",
      traditional: "Tied to one machine",
      icon: "🌐"
    },
    {
      feature: "Maintenance",
      cloudAdda: "We manage it all",
      traditional: "You manage everything",
      icon: "🛠️"
    },
    {
      feature: "Scaling",
      cloudAdda: "Add/remove in clicks",
      traditional: "Buy, image, deploy",
      icon: "📈"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-red-500">Old World</span> vs <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CloudAdda</span>
          </h2>
          <p className="text-2xl text-gray-600">See the Difference</p>
        </div>

        {/* VS Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Traditional Side */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-500 mb-4">Traditional Laptops</h3>
              <div className="w-16 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {comparisonData.map((item, index) => (
                <div key={index} className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.feature}</h4>
                      <p className="text-red-700">{item.traditional}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-2xl">VS</span>
            </div>
            
            {/* 3D Illustration Space */}
            <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-blue-100 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-lg max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
              <div className="text-center z-10">
                <ArrowRight className="w-16 h-16 text-blue-600 mx-auto mb-4 opacity-30" />
                <p className="text-gray-500 text-sm px-4">
                  [3D Illustration: Transformation from laptop to cloud]
                </p>
              </div>
              
              <div className="absolute top-6 left-6 w-4 h-4 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute bottom-6 right-6 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>

          {/* CloudAdda Side */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">CloudAdda Desktops</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {comparisonData.map((item, index) => (
                <div key={index} className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{item.feature}</h4>
                      <p className="text-blue-700 font-medium">{item.cloudAdda}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
            <span>Experience the CloudAdda Difference</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsComparison;
