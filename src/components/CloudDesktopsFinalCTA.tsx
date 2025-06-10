
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor } from "lucide-react";

const CloudDesktopsFinalCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Ready to Transform Your Development Experience?
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Launch in 90 seconds. Scale instantly. Support that cares.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Launch Your Desktop Now
            <Monitor className="ml-3 h-6 w-6" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-16 py-6 text-xl border-gray-300 hover:bg-gray-50">
            Schedule a Demo
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">5,000+</div>
            <div className="text-gray-600">Happy Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">99.98%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">90sec</div>
            <div className="text-gray-600">Setup Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsFinalCTA;
