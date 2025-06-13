
import { Code, Phone, Heart, Calculator, Users, Palette } from "lucide-react";

const CloudDesktopsUseCases = () => {
  const useCases = [
    { 
      name: "Developers & Engineers", 
      icon: Code, 
      description: "Run full dev environments, IDEs, containers, and build tools — even from a Chromebook.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Call Centers & BPOs", 
      icon: Phone, 
      description: "Spin up secure, compliant desktops at scale. Central control. No data leaks. No IT chaos.",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Healthcare, Clinics & Labs", 
      icon: Heart, 
      description: "Secure access to EMRs, diagnostics tools, and patient records — without storing anything locally.",
      color: "from-red-500 to-pink-500"
    },
    { 
      name: "Finance, Accounting & Tax Pros", 
      icon: Calculator, 
      description: "Run heavy Excel models, Tally, ERPs — with airtight compliance and zero downtime.",
      color: "from-purple-500 to-violet-500"
    },
    { 
      name: "Remote Teams & Back Offices", 
      icon: Users, 
      description: "Give your team a desktop they can use from anywhere, without the support tickets.",
      color: "from-orange-500 to-yellow-500"
    },
    { 
      name: "Designers & Creators", 
      icon: Palette, 
      description: "Yes — you can run Adobe Creative Cloud from the cloud. And yes, it flies.",
      color: "from-indigo-500 to-purple-500"
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

        {/* Hexagonal Grid Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {useCases.slice(0, 3).map((useCase, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {useCase.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="mt-6 flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${useCase.color} rounded-full`}></div>
                      <div className="w-8 h-0.5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Offset row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-16">
            {useCases.slice(3).map((useCase, index) => (
              <div key={index + 3} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {useCase.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="mt-6 flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${useCase.color} rounded-full`}></div>
                      <div className="w-8 h-0.5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Illustration Space */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-blue-100 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
              <div className="text-center z-10">
                <Users className="w-20 h-20 text-blue-600 mx-auto mb-6 opacity-20" />
                <p className="text-gray-500 text-xl">
                  [3D Illustration: Diverse professionals using cloud desktops across industries]
                </p>
              </div>
              
              {/* Floating industry icons */}
              <div className="absolute top-8 left-8 opacity-20">
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              <div className="absolute top-12 right-12 opacity-20">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <div className="absolute bottom-8 left-12 opacity-20">
                <Palette className="w-8 h-8 text-purple-500" />
              </div>
              <div className="absolute bottom-12 right-8 opacity-20">
                <Calculator className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mt-12">
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
