
import { Zap, Wrench, Shield, DollarSign, CheckCircle } from "lucide-react";

const CloudDesktopsPainPoints = () => {
  const localPainPoints = [
    {
      pain: "Performance Bottlenecks",
      reality: "Crashes. Freezes. Lag. You're stuck with the specs you bought — and they age fast.",
      icon: Zap
    },
    {
      pain: "IT Headaches Everywhere", 
      reality: "Installing apps, managing updates, onboarding users — it's a nightmare at scale.",
      icon: Wrench
    },
    {
      pain: "Gaping Security Holes",
      reality: "Your data scattered across laptops is a breach waiting to happen.",
      icon: Shield
    },
    {
      pain: "Expensive, Inflexible, Fragile",
      reality: "You're paying more for machines that deliver less — and break often.",
      icon: DollarSign
    }
  ];

  const cloudAddaBenefits = [
    "No setup drama",
    "No hardware failures", 
    "No data risk",
    "Just pure, seamless productivity"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Say Goodbye to <span className="text-orange-500">Local Machines</span>. Forever.
          </h2>
          <p className="text-xl text-gray-600 mb-8">Your device shouldn't dictate your performance. With CloudAdda, your desktop lives in the cloud — not your hardware — and it's always on, always powerful, always ready.</p>
          
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border border-orange-200">
            <div className="grid grid-cols-2 gap-6">
              {cloudAddaBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-600 mt-8 max-w-4xl mx-auto">
            Whether you're answering support calls, editing massive video files, managing hospital data, or running your entire business — CloudAdda gives you a desktop that never slows down, never crashes, and never holds you back.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why <span className="text-red-500">Local Desktops</span> Are Holding You Hostage
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localPainPoints.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-400">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.pain}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsPainPoints;
