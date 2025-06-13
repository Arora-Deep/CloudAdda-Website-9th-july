
import { Settings, CheckCircle } from "lucide-react";

const CloudDesktopsFullyConfigured = () => {
  const features = [
    "Pre-installed software suites (Adobe Creative Cloud, Office 365, IDEs)",
    "Custom development environments (Docker, Kubernetes, databases)",
    "Industry-specific applications (CAD, ERP, analytics tools)",
    "Security protocols and compliance frameworks",
    "Team collaboration tools and workflows",
    "Backup and recovery systems"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-3 bg-orange-100 rounded-full px-6 py-3 mb-8">
              <Settings className="w-6 h-6 text-orange-600" />
              <span className="text-orange-700 font-semibold">Pre-configured Templates</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Fully Configured, Ready to Go
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Need Photoshop? Tally? Postgres? VSCode? We pre-install and fine-tune it all to your exact workflow.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Setup Process</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Tell us your needs</h4>
                  <p className="text-gray-600 text-sm">Share your software requirements and workflow</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">We configure everything</h4>
                  <p className="text-gray-600 text-sm">Our team sets up your perfect environment</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Start working instantly</h4>
                  <p className="text-gray-600 text-sm">Log in and everything is ready to use</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">&lt; 5 min</div>
                <div className="text-sm text-gray-600">Average setup time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsFullyConfigured;
