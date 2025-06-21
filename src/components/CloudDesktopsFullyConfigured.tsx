
import { Settings, CheckCircle, Zap, Shield, Wand2 } from "lucide-react";

const CloudDesktopsFullyConfigured = () => {
  const features = [
    "Pre-installed software suites (Adobe Creative Cloud, Office 365, IDEs)",
    "Custom development environments (Docker, Kubernetes, databases)",
    "Industry-specific applications (CAD, ERP, analytics tools)",
    "Security protocols and compliance frameworks",
    "Team collaboration tools and workflows",
    "Backup and recovery systems"
  ];

  const cloudAddaWayPoints = [
    {
      title: "Feels Instant. Because It Is.",
      description: "Blistering-fast performance powered by AMD EPYC CPUs and NVMe storage — with latency so low, it feels local.",
      icon: Zap,
      highlight: "AMD EPYC + NVMe"
    },
    {
      title: "Security That Travels With You",
      description: "Zero local storage. Full encryption. Centralized control. Sleep easy knowing every desktop is protected by default.",
      icon: Shield,
      highlight: "Zero Trust Architecture"
    },
    {
      title: "Runs Anywhere. Looks Beautiful Everywhere.",
      description: "Access your desktop from a Mac, PC, tablet, or browser. It's always there — pixel-perfect, fast, and reliable.",
      icon: Wand2,
      highlight: "Multi-device Access"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-orange-100 rounded-full px-6 py-3 mb-8">
            <Settings className="w-6 h-6 text-orange-600" />
            <span className="text-orange-700 font-semibold">Pre-configured Templates</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fully Configured, Ready to Go
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Need Photoshop? Tally? Postgres? VSCode? We pre-install and fine-tune it all to your exact workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What's Included</h3>
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

        {/* Integrated CloudAdda Way Points */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The <span className="text-orange-500">CloudAdda</span> Advantage
            </h3>
            <p className="text-xl text-gray-600">Why our configured desktops are different</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cloudAddaWayPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <point.icon className="w-8 h-8 text-orange-600" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-orange-50 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">
                    {point.highlight}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsFullyConfigured;
