
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktopsFinalCTA = () => {
  return (
    <section className="py-12 sm:py-24 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
          The Future of Work Isn't on Your Laptop.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
          It's in the cloud. It's fast. It's always available anytime anywhere.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-12 sm:px-16 py-4 sm:py-6 text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
            <Link to="/contact">
              Get a Free Trial
              <Monitor className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-12 sm:px-16 py-4 sm:py-6 text-lg sm:text-xl border-orange-300 text-orange-600 hover:bg-orange-50 w-full sm:w-auto">
            <Link to="/pricing#cloud-desktops">
              View Pricing
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-orange-600">5,000+</div>
            <div className="text-xs sm:text-base text-gray-600">Happy Developers</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-orange-600">99.98%</div>
            <div className="text-xs sm:text-base text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-orange-600">90sec</div>
            <div className="text-xs sm:text-base text-gray-600">Setup Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsFinalCTA;
