
import { MessageSquare, Copy, Users, HeadphonesIcon } from "lucide-react";

const CloudDesktopsMigration = () => {
  const migrationSteps = [
    {
      step: "Share your use case",
      description: "Tell us about your workflow and requirements",
      icon: MessageSquare
    },
    {
      step: "We replicate your environment", 
      description: "Our team sets up your exact environment in the cloud",
      icon: Copy
    },
    {
      step: "Your team gets instant access",
      description: "Everyone can log in and start working immediately",
      icon: Users
    },
    {
      step: "We support every step",
      description: "Ongoing support to ensure everything runs smoothly",
      icon: HeadphonesIcon
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Migration? We Handle Everything.</h2>
          <p className="text-lg sm:text-xl text-gray-600">No downtime. No learning curve. No regrets.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {migrationSteps.map((step, index) => (
            <div key={index} className="text-center group relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors">
                <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{step.step}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < migrationSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 sm:top-8 left-full w-full h-0.5 bg-blue-200 transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsMigration;
