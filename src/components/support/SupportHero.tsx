
import React from "react";
import { Clock, Users, CheckCircle } from "lucide-react";

const SupportHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Support That 
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> Actually Helps</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Real humans. Real solutions. Available 24/7 to keep your infrastructure running smoothly.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Less than 2hr Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">24/7 Human Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">99.9% Resolution Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHero;
