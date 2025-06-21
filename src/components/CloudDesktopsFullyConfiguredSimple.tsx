
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Download, Code, Database, Globe } from "lucide-react";

const CloudDesktopsFullyConfiguredSimple = () => {
  const features = [
    {
      icon: Code,
      title: "Development Tools",
      description: "VS Code, IntelliJ, Docker, Git, and all your favorite IDEs pre-installed"
    },
    {
      icon: Database,
      title: "Database Systems",
      description: "MySQL, PostgreSQL, MongoDB, Redis ready to use out of the box"
    },
    {
      icon: Globe,
      title: "Web Frameworks",
      description: "Node.js, React, Angular, Python, Java environments configured"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fully Configured, <span className="text-blue-600">Ready to Go</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skip the setup hassle. Get production-ready development environments 
            with everything you need pre-installed and configured.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h4 className="text-lg font-semibold text-gray-900">Zero Configuration Required</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Start coding immediately. No downloads, installations, or configuration needed. 
                Everything is ready when you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Download className="w-5 h-5 mr-2" />
                  View Tech Stack
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="bg-gray-900 rounded-2xl p-6 text-green-400 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400">CloudAdda Terminal</span>
              </div>
              <div className="space-y-2">
                <div>$ docker --version</div>
                <div className="text-gray-400">Docker version 24.0.6</div>
                <div>$ node --version</div>
                <div className="text-gray-400">v18.17.1</div>
                <div>$ python3 --version</div>
                <div className="text-gray-400">Python 3.11.5</div>
                <div>$ git --version</div>
                <div className="text-gray-400">git version 2.34.1</div>
                <div className="text-green-400">✓ All tools ready to use!</div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-xs text-blue-700">Pre-installed Tools</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-xs text-green-700">Setup Time</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-xs text-purple-700">Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsFullyConfiguredSimple;
