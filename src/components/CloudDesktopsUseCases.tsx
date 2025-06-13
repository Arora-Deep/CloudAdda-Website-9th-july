
import { Code, Phone, Heart, Calculator, Users, Palette } from "lucide-react";

const CloudDesktopsUseCases = () => {
  const useCases = [
    { 
      name: "Developers & Engineers", 
      icon: Code, 
      description: "Run full dev environments, IDEs, containers, and build tools — even from a Chromebook.",
      company: "TechCorp",
      quote: "CloudAdda allowed us to scale our development team globally without hardware constraints."
    },
    { 
      name: "Call Centers & BPOs", 
      icon: Phone, 
      description: "Spin up secure, compliant desktops at scale. Central control. No data leaks. No IT chaos.",
      company: "GlobalSupport",
      quote: "We reduced our IT overhead by 60% while improving security compliance across all locations."
    },
    { 
      name: "Healthcare, Clinics & Labs", 
      icon: Heart, 
      description: "Secure access to EMRs, diagnostics tools, and patient records — without storing anything locally.",
      company: "MediCare Plus",
      quote: "HIPAA compliance became effortless with centralized data and zero local storage risks."
    },
    { 
      name: "Finance, Accounting & Tax Pros", 
      icon: Calculator, 
      description: "Run heavy Excel models, Tally, ERPs — with airtight compliance and zero downtime.",
      company: "FinanceFirst",
      quote: "Our month-end processing time decreased by 40% with CloudAdda's high-performance desktops."
    },
    { 
      name: "Remote Teams & Back Offices", 
      icon: Users, 
      description: "Give your team a desktop they can use from anywhere, without the support tickets.",
      company: "RemoteWorks",
      quote: "Employee productivity increased 30% when we eliminated local hardware bottlenecks."
    },
    { 
      name: "Designers & Creators", 
      icon: Palette, 
      description: "Yes — you can run Adobe Creative Cloud from the cloud. And yes, it flies.",
      company: "CreativeStudio",
      quote: "Rendering times improved dramatically, and our designers can work from any device, anywhere."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Who's It For?</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everyone Who Works With a Screen
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            CloudAdda isn't built for one industry. It's built for anyone who wants their computer to just work — fast, secure, and from anywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {useCase.name}
                  </h3>
                  <div className="text-sm text-gray-500 font-medium">{useCase.company}</div>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {useCase.description}
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4">
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "{useCase.quote}"
                </p>
              </div>
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
