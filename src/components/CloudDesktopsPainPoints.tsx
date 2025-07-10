
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CloudDesktopsPainPoints = () => {
  const cloudAddaBenefits = [
    "No setup drama",
    "No hardware failures", 
    "No data risk",
    "Just pure, seamless productivity"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Say Goodbye to <span className="text-orange-500">Local Machines</span>. Forever.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto">Your device shouldn't dictate your performance. With CloudAdda, your desktop lives in the cloud — not your hardware — and it's always on, always powerful, always ready.</p>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg border border-orange-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {cloudAddaBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 mt-6 sm:mt-8 mb-6 sm:mb-8 max-w-4xl mx-auto">
            Whether you're answering support calls, editing massive video files, managing hospital data, or running your entire business — CloudAdda gives you a desktop that never slows down, never crashes, and never holds you back.
          </p>

          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Stop Asking "Will It Work?"</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              The answer is always yes. Our cloud desktops are built to handle anything you throw at them.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto">
              <Link to="/contact">
                Talk to Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsPainPoints;
