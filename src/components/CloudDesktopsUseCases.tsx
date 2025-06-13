
import { Code, Phone, Heart, Calculator, Users, Palette } from "lucide-react";

const CloudDesktopsUseCases = () => {
  const useCases = [
    { 
      name: "Developers & Engineers", 
      icon: Code, 
      description: "Run full dev environments, IDEs, containers, and build tools — even from a Chromebook.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    { 
      name: "Call Centers & BPOs", 
      icon: Phone, 
      description: "Spin up secure, compliant desktops at scale. Central control. No data leaks. No IT chaos.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    { 
      name: "Healthcare, Clinics & Labs", 
      icon: Heart, 
      description: "Secure access to EMRs, diagnostics tools, and patient records — without storing anything locally.",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    { 
      name: "Finance, Accounting & Tax Pros", 
      icon: Calculator, 
      description: "Run heavy Excel models, Tally, ERPs — with airtight compliance and zero downtime.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    { 
      name: "Remote Teams & Back Offices", 
      icon: Users, 
      description: "Give your team a desktop they can use from anywhere, without the support tickets.",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    { 
      name: "Designers & Creators", 
      icon: Palette, 
      description: "Yes — you can run Adobe Creative Cloud from the cloud. And yes, it flies.",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">Stop Asking "Will It Work?"</span><br />
            <span className="text-orange-500">Start Asking "How Fast Can I Get Started?"</span>
          </h2>
          <p className="text-xl text-gray-600">
            If you work with a screen, this is for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl ${useCase.bgColor} ${useCase.borderColor} border-2 hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${useCase.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <useCase.icon className={`w-8 h-8 ${useCase.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600">
            Not sure if it fits your workflow? 
            <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold ml-2 underline decoration-2 underline-offset-4">
              Talk to us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsUseCases;
