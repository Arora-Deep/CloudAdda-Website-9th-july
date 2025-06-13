
import { AlertTriangle, Clock, DollarSign, Settings } from "lucide-react";

const VPSRealityCheck = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Hours Lost to Setup",
      description: "Complex server configurations eating into development time"
    },
    {
      icon: DollarSign,
      title: "Surprise Bills",
      description: "Hidden charges and unpredictable pricing from major cloud providers"
    },
    {
      icon: AlertTriangle,
      title: "Performance Issues",
      description: "Shared hosting limitations and unreliable performance"
    },
    {
      icon: Settings,
      title: "Limited Control",
      description: "Restricted access and inflexible hosting environments"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Developer's Daily Reality Check
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tired of wrestling with infrastructure instead of building great products? You're not alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            What if hosting just... worked?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full root access, predictable pricing, India-hosted performance, and expert support. 
            That's what CloudAdda VPS delivers.
          </p>
          <div className="bg-gray-50 rounded-2xl h-64 flex items-center justify-center text-gray-400">
            [3D Illustration: Developer working seamlessly with cloud infrastructure]
          </div>
        </div>
      </div>
    </section>
  );
};

export default VPSRealityCheck;
