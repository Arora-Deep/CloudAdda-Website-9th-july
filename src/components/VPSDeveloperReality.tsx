
import React from "react";
import { Cpu, HardDrive, Wifi, Clock, DollarSign, Gauge } from "lucide-react";

const VPSDeveloperReality = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Slow Build Times",
      problem: "Waiting 10+ minutes for builds",
      solution: "Sub-2 minute builds with AMD EPYC",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cpu,
      title: "Resource Constraints",
      problem: "Local machine struggles with heavy workloads",
      solution: "Scalable resources on-demand",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: HardDrive,
      title: "Storage Limitations",
      problem: "Running out of disk space constantly",
      solution: "NVMe SSD with instant scaling",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: Wifi,
      title: "Network Bottlenecks",
      problem: "Slow downloads and deployments",
      solution: "10Gbps connections included",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transform Your <span className="text-orange-500">Development Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop letting infrastructure slow you down. See how CloudAdda VPS eliminates common developer pain points.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center mb-6`}>
                <point.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="text-sm font-medium text-red-700 mb-1">Common Problem:</div>
                  <div className="text-red-800">{point.problem}</div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm font-medium text-green-700 mb-1">CloudAdda Solution:</div>
                  <div className="text-green-800 font-semibold">{point.solution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers who've already made the switch to CloudAdda VPS
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <Gauge className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-bold">5x Faster</div>
                <div className="text-sm opacity-80">Build Times</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <DollarSign className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-bold">60% Less</div>
                <div className="text-sm opacity-80">Infrastructure Costs</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Availability</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-colors">
                Compare Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VPSDeveloperReality;
