
import { AlertTriangle, Clock, Shield, TrendingDown } from "lucide-react";

const CloudDesktopsPainPoints = () => {
  const painPoints = [
    {
      pain: "Laptop Performance Hell",
      reality: "Your local machine crawls with Docker, VS Code, and Chrome open. Compilation takes forever while your laptop sounds like a jet engine.",
      icon: AlertTriangle
    },
    {
      pain: "Environment Setup Nightmare",
      reality: "New developer onboarding takes 3 days of 'it works on my machine' debugging and environment configuration.",
      icon: Clock
    },
    {
      pain: "Security Compliance Chaos",
      reality: "Sensitive code on personal laptops, VPN hassles, and IT teams panicking about data scattered across devices.",
      icon: Shield
    },
    {
      pain: "Hardware Dependency Prison",
      reality: "Team productivity dies when laptops break, get stolen, or just can't handle the workload anymore.",
      icon: TrendingDown
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Painful Reality of Remote Work</h2>
          <p className="text-xl text-gray-600">Every developer's nightmare, solved once and for all</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {painPoints.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.pain}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.reality}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
              [3D Illustration: Frustrated developer with crashed laptop, broken setup, security alerts popping up]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsPainPoints;
