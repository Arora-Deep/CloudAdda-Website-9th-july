
import React from "react";

const CustomerLogosShowcase = () => {
  const customers = [
    "TechCorp", "InnovateInc", "GlobalSoft", "FutureTech", "DevStudio", "CloudFirst",
    "DataFlow", "NetSolutions", "CodeCraft", "DigitalEdge", "SmartCloud", "TechPioneers",
    "InnovateLab", "CloudGenius", "DevMasters", "TechVision", "CodeWorks", "CloudBase",
    "DataCore", "TechFlow", "DevCentric", "CloudForward", "InnovateTech", "SmartDev"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-orange-500">Leading Companies</span> Worldwide
          </h2>
          <p className="text-xl text-gray-600">Join 5,000+ companies that have transformed their training with CloudAdda</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {customers.map((customer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 h-20 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <span className="text-gray-600 font-semibold text-sm text-center">{customer}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Them?</h3>
            <p className="text-lg text-gray-600 mb-6">
              See why thousands of companies choose CloudAdda for their training infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Start Your Free Trial
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogosShowcase;
