
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktopsStopAsking = () => {
  const guarantees = [
    "Lightning-fast performance on any device",
    "Seamless setup in under 2 minutes",
    "Enterprise-grade security by default",
    "24/7 support when you need it"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          Stop Asking <span className="text-blue-600">"Will It Work?"</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
          The answer is always yes. Our cloud desktops are built to handle anything you throw at them.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{guarantee}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-6">
            Join thousands of teams who've made the switch to cloud desktops that just work.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3">
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsStopAsking;
