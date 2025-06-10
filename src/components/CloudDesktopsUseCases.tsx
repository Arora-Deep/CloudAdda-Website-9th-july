
import { Globe, Settings, Brain, Monitor, CheckCircle, Database, Server, Shield } from "lucide-react";

const CloudDesktopsUseCases = () => {
  const useCases = [
    { 
      name: "Full-Stack Development", 
      icon: Globe, 
      description: "React, Vue, Node.js, Python - your full stack runs faster in the cloud",
      customers: "1,200+ development teams"
    },
    { 
      name: "DevOps & Infrastructure", 
      icon: Settings, 
      description: "Kubernetes, Docker, Terraform - infrastructure-as-code workflows",
      customers: "400+ DevOps teams"
    },
    { 
      name: "Data Science & ML", 
      icon: Brain, 
      description: "Jupyter, TensorFlow, PyTorch - GPU-accelerated data workflows",
      customers: "300+ data teams"
    },
    { 
      name: "Mobile Development", 
      icon: Monitor, 
      description: "React Native, Flutter, native iOS/Android with simulators",
      customers: "200+ mobile teams"
    },
    { 
      name: "QA & Testing", 
      icon: CheckCircle, 
      description: "Automated testing, cross-browser testing, load testing suites",
      customers: "500+ QA teams"
    },
    { 
      name: "Design & Prototyping", 
      icon: Database, 
      description: "Figma, Sketch, Adobe Creative Suite - design workflows in the cloud",
      customers: "150+ design teams"
    },
    { 
      name: "Blockchain Development", 
      icon: Server, 
      description: "Solidity, Web3, DeFi - blockchain development environments",
      customers: "100+ blockchain teams"
    },
    { 
      name: "Enterprise Development", 
      icon: Shield, 
      description: "Large-scale enterprise applications with compliance requirements",
      customers: "80+ enterprise teams"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect For Every Development Team</h2>
          <p className="text-xl text-gray-600">From startups to enterprises</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl h-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <useCase.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{useCase.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{useCase.description}</p>
                  <div className="text-xs text-blue-600 font-medium">{useCase.customers}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsUseCases;
