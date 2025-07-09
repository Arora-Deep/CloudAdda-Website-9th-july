
import React from 'react';
import { Cpu, HardDrive, Wifi, Database } from 'lucide-react';

const VPSDedicatedResources = () => {
  const resources = [
    {
      icon: Cpu,
      title: "Dedicated CPU",
      description: "Your own CPU cores that aren't shared with other users",
      benefit: "Consistent performance"
    },
    {
      icon: Database,
      title: "Dedicated RAM",
      description: "Guaranteed memory allocation for your applications",
      benefit: "No memory conflicts"
    },
    {
      icon: HardDrive,
      title: "Dedicated Storage",
      description: "Your own SSD storage space with guaranteed IOPS",
      benefit: "Fast data access"
    },
    {
      icon: Wifi,
      title: "Dedicated Bandwidth",
      description: "Unshared network resources for optimal connectivity",
      benefit: "Reliable network speed"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Truly Dedicated Resources
          </h2>
          <p className="text-xl text-gray-600">
            Unlike shared hosting, every resource is exclusively yours
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 rounded-lg p-3">
                  <resource.icon className="h-6 w-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-3">{resource.description}</p>
                  <span className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                    {resource.benefit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VPSDedicatedResources;
