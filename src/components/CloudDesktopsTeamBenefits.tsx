
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktopsTeamBenefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "IT Teams Get Their Lives Back",
      description: "No more late-night laptop fixes, no more endless support tickets. Everything's managed centrally, updated automatically, and secured by default."
    },
    {
      icon: TrendingUp,
      title: "Employees Stay Productive",
      description: "Access the same high-performance desktop from home, office, or anywhere. No VPN slowdowns, no compatibility issues, just pure productivity."
    },
    {
      icon: Shield,
      title: "C-Suite Sleeps Better",
      description: "Zero data on local devices means zero data breaches from stolen laptops. Full compliance, complete audit trails, and enterprise-grade security."
    }
  ];

  const painPoints = [
    "Laptop procurement delays holding up new hires",
    "Different performance across team members",
    "Security nightmares with remote work",
    "Expensive hardware refresh cycles",
    "Complex software licensing and updates"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Say goodbye to these common pain points that slow down every growing company
          </p>
        </div>

        {/* Pain Points */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Stop Dealing With:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-12 py-6 text-xl shadow-lg hover:shadow-xl transition-all">
            <Link to="/contact">
              Talk to an Expert
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsTeamBenefits;
