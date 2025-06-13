
import { Code, Phone, Heart, Calculator, Users, Palette } from "lucide-react";

const CloudDesktopsUseCases = () => {
  const useCases = [
    { 
      name: "Developers & Engineers", 
      icon: Code, 
      description: "Run full dev environments, IDEs, containers, and build tools — even from a Chromebook."
    },
    { 
      name: "Call Centers & BPOs", 
      icon: Phone, 
      description: "Spin up secure, compliant desktops at scale. Central control. No data leaks. No IT chaos."
    },
    { 
      name: "Healthcare, Clinics & Labs", 
      icon: Heart, 
      description: "Secure access to EMRs, diagnostics tools, and patient records — without storing anything locally."
    },
    { 
      name: "Finance, Accounting & Tax Pros", 
      icon: Calculator, 
      description: "Run heavy Excel models, Tally, ERPs — with airtight compliance and zero downtime."
    },
    { 
      name: "Remote Teams & Back Offices", 
      icon: Users, 
      description: "Give your team a desktop they can use from anywhere, without the support tickets."
    },
    { 
      name: "Designers & Creators", 
      icon: Palette, 
      description: "Yes — you can run Adobe Creative Cloud from the cloud. And yes, it flies."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-900">If You Work With a Screen,</span><br />
            <span className="text-orange-500">This Is For You</span>
          </h2>
          <p className="text-xl text-gray-600">
            Stop asking "Will it work?" Start asking "How fast can I get started?"
          </p>
        </div>

        <div className="space-y-4">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {useCase.name}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex justify-center`}>
                <div className="w-24 h-24 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <useCase.icon className="w-12 h-12 text-orange-400" />
                </div>
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
