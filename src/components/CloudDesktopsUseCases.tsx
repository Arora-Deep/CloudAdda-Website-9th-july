
import { Code, Phone, Heart, Calculator, Users, Palette } from "lucide-react";

const CloudDesktopsUseCases = () => {
  const useCases = [
    { 
      name: "Developers & Engineers", 
      icon: Code, 
      description: "CloudAdda allowed us to scale our development team globally without hardware constraints. Our developers can now code from anywhere with full IDE support.",
      company: "TechCorp",
      person: "Sarah Chen",
      role: "Head of Engineering at TechCorp",
      savings: "$200k",
      metric: "in hardware costs saved"
    },
    { 
      name: "Call Centers & BPOs", 
      icon: Phone, 
      description: "We reduced our IT overhead by 60% while improving security compliance across all locations. Zero data leaks, centralized control.",
      company: "GlobalSupport",
      person: "Raj Patel",
      role: "IT Director at GlobalSupport", 
      savings: "60%",
      metric: "reduction in IT overhead"
    },
    { 
      name: "Healthcare & Clinics", 
      icon: Heart, 
      description: "HIPAA compliance became effortless with centralized data and zero local storage risks. Patient records are always secure and accessible.",
      company: "MediCare Plus",
      person: "Dr. Lisa Wong",
      role: "Chief Technology Officer at MediCare Plus",
      savings: "100%",
      metric: "HIPAA compliance achieved"
    },
    { 
      name: "Finance & Accounting", 
      icon: Calculator, 
      description: "Our month-end processing time decreased by 40% with CloudAdda's high-performance desktops. Heavy Excel models run like a dream.",
      company: "FinanceFirst",
      person: "Michael Rodriguez",
      role: "Senior Manager at FinanceFirst",
      savings: "40%",
      metric: "faster processing time"
    },
    { 
      name: "Remote Teams", 
      icon: Users, 
      description: "Employee productivity increased 30% when we eliminated local hardware bottlenecks. Our team works seamlessly from anywhere.",
      company: "RemoteWorks",
      person: "Emma Thompson",
      role: "Operations Lead at RemoteWorks",
      savings: "30%",
      metric: "productivity boost"
    },
    { 
      name: "Designers & Creators", 
      icon: Palette, 
      description: "Rendering times improved dramatically, and our designers can work from any device, anywhere. Adobe Creative Cloud flies in the cloud.",
      company: "CreativeStudio",
      person: "Alex Kumar",
      role: "Creative Director at CreativeStudio",
      savings: "50%",
      metric: "faster rendering times"
    }
  ];

  const cardColors = [
    'bg-purple-100',
    'bg-orange-100', 
    'bg-blue-100',
    'bg-green-100',
    'bg-pink-100',
    'bg-yellow-100'
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Who's It For?</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everyone Who Works With a Screen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className={`${cardColors[index]} rounded-3xl p-8 text-left`}>
              {/* Savings/Metric at top */}
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {useCase.savings}
                </div>
                <div className="text-gray-700 font-medium">
                  {useCase.metric}
                </div>
              </div>

              {/* Company logo area */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white bg-opacity-70 rounded-2xl flex items-center justify-center">
                  <useCase.icon className="w-8 h-8 text-gray-700" />
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <p className="text-gray-800 font-medium text-lg leading-relaxed">
                  "{useCase.description}"
                </p>
              </div>

              {/* Person info */}
              <div>
                <div className="font-bold text-gray-900 mb-1">
                  {useCase.person}
                </div>
                <div className="text-gray-700 text-sm">
                  {useCase.role}
                </div>
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
