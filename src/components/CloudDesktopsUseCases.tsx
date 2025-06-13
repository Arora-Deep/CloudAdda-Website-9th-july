
import { Code, Phone, Heart, Calculator, Users, Palette } from "lucide-react";

const CloudDesktopsUseCases = () => {
  const useCases = [
    { 
      name: "Developers & Engineers", 
      icon: Code, 
      description: "Scale development teams globally without hardware constraints."
    },
    { 
      name: "Call Centers & BPOs", 
      icon: Phone, 
      description: "Reduce IT overhead while improving security compliance."
    },
    { 
      name: "Healthcare & Clinics", 
      icon: Heart, 
      description: "HIPAA compliance with centralized, secure patient records."
    },
    { 
      name: "Finance & Accounting", 
      icon: Calculator, 
      description: "High-performance desktops for heavy financial modeling."
    },
    { 
      name: "Remote Teams", 
      icon: Users, 
      description: "Seamless collaboration from anywhere in the world."
    },
    { 
      name: "Designers & Creators", 
      icon: Palette, 
      description: "Creative workflows with powerful cloud rendering."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Who's It For?</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everyone Who Works With a Screen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <useCase.icon className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {useCase.name}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-gray-600">
            Not sure if it fits your workflow? 
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold ml-2 underline decoration-2 underline-offset-4">
              Talk to us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsUseCases;
