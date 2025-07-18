
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktopsHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-16 pb-12 sm:pb-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
              <Monitor className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              High-Performance Cloud Desktops
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Your Next Desktop Isn't a Laptop.
              <span className="block text-orange-500">It's in the Cloud.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-orange-600 leading-relaxed font-medium">
              It's fast. It's secure. It's always with you.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              No more sluggish laptops, fragile setups, or IT bottlenecks. CloudAdda gives you high-performance, cloud-native desktops that run from anywhere — on any device — powered by raw AMD EPYC muscle and blazing-fast NVMe storage.
            </p>

            <p className="text-base sm:text-lg font-semibold text-blue-600">
              Boot up in seconds. Work without limits. Scale effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">
                  Get a Free Trial
                  <Monitor className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg border-orange-300 text-orange-600 hover:bg-orange-50">
                <Link to="/pricing#cloud-desktops">
                  View Pricing
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-orange-600">99.98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-orange-600">&lt; 2min</div>
                <div className="text-xs sm:text-sm text-gray-600">Desktop Ready</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-orange-600">73%</div>
                <div className="text-xs sm:text-sm text-gray-600">Productivity Boost</div>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <img 
              alt="Cloud Desktop User Illustration" 
              className="w-full h-auto object-contain" 
              src="/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsHero;
