
import { Settings } from "lucide-react";

const CloudDesktopsConfiguration = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-purple-100 rounded-full px-6 py-3">
              <Settings className="w-6 h-6 text-purple-600" />
              <span className="text-purple-700 font-semibold">Pre-configured Templates</span>
            </div>
            
            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
              Fully Configured, Ready to Go
            </h3>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Need Photoshop? Tally? Postgres? VSCode? We pre-install and fine-tune it all to your exact workflow.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Development Environment</h4>
                <p className="text-gray-600">VS Code, Docker, Git, Node.js, Python, and your favorite frameworks</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Creative Suite</h4>
                <p className="text-gray-600">Adobe Creative Cloud, Figma, Sketch, and design tools</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Business Applications</h4>
                <p className="text-gray-600">Tally, QuickBooks, ERP systems, and productivity suites</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-3xl h-96 flex items-center justify-center text-gray-400">
              [3D Illustration: Software configuration and setup]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsConfiguration;
