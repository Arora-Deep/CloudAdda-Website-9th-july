
import React from 'react';
import { Check, X } from 'lucide-react';

const VPSHostingComparison = () => {
  const comparison = [
    { feature: "Dedicated Resources", us: true, shared: false },
    { feature: "Root Access", us: true, shared: false },
    { feature: "Custom Software", us: true, shared: false },
    { feature: "Scalability", us: true, shared: false },
    { feature: "Performance", us: "High", shared: "Limited" },
    { feature: "Security", us: "Enhanced", shared: "Basic" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            VPS vs Shared Hosting
          </h2>
          <p className="text-xl text-gray-600">
            See why VPS hosting is the superior choice for your business
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            <div className="p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Feature</h3>
            </div>
            <div className="p-6 bg-orange-50">
              <h3 className="text-lg font-semibold text-orange-600">Our VPS</h3>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Shared Hosting</h3>
            </div>
          </div>
          {comparison.map((item, index) => (
            <div key={index} className="grid grid-cols-3 divide-x divide-gray-200 border-t border-gray-200">
              <div className="p-4">
                <span className="text-gray-900">{item.feature}</span>
              </div>
              <div className="p-4 text-center">
                {typeof item.us === 'boolean' ? (
                  item.us ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className="text-green-600 font-medium">{item.us}</span>
                )}
              </div>
              <div className="p-4 text-center">
                {typeof item.shared === 'boolean' ? (
                  item.shared ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className="text-red-600 font-medium">{item.shared}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VPSHostingComparison;
