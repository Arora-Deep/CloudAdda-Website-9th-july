
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who's It For? Everyone Who Works With a Screen</h2>
          <p className="text-xl text-gray-600 mb-8">CloudAdda isn't built for one industry. It's built for anyone who wants their computer to just work — fast, secure, and from anywhere.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl h-full">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                    <useCase.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Not sure if it fits your workflow? <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">Talk to us →</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsUseCases;
