
import { Award, Users, Zap } from "lucide-react";

const CloudDesktopsTrustSignals = () => {
  const achievements = [
    {
      number: "500+",
      label: "Development Teams",
      icon: Users
    },
    {
      number: "99.98%",
      label: "Uptime SLA",
      icon: Zap
    },
    {
      number: "ISO",
      label: "Certification",
      icon: Award
    }
  ];

  const logos = [
    "TechCorp", "InnovateInc", "GlobalSoft", "FutureTech", "DevStudio", "CloudFirst"
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600">Join thousands of companies who've already made the switch</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{achievement.number}</div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Trusted by companies like:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {logos.map((logo, index) => (
              <div key={index} className="bg-gray-100 rounded-lg h-16 flex items-center justify-center text-gray-500 font-semibold">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see case studies from companies like yours?</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
            View Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsTrustSignals;
