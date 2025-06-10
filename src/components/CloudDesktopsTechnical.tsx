
import { Camera } from "lucide-react";

const CloudDesktopsTechnical = () => {
  const specs = [
    { label: "CPU Performance", value: "EPYC 64-core", desc: "Latest AMD server processors" },
    { label: "Storage", value: "Pure NVMe", desc: "No hybrid, no compromise" },
    { label: "RAM", value: "DDR4 ECC", desc: "Error-correcting memory" },
    { label: "Network", value: "10Gbps", desc: "Dedicated bandwidth" }
  ];

  const benchmarks = [
    { provider: "CloudAdda Desktop", speed: "Docker build: 45s", bar: 100 },
    { provider: "AWS WorkSpaces", speed: "Docker build: 3m 20s", bar: 22 },
    { provider: "Local MacBook Pro", speed: "Docker build: 2m 15s", bar: 33 },
    { provider: "Azure Virtual Desktop", speed: "Docker build: 2m 45s", bar: 27 }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Built for Developers, By Developers</h2>
            <p className="text-xl text-gray-600">While others build generic virtual machines, we optimized every layer for development workflows.</p>

            <div className="grid grid-cols-2 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">{spec.value}</div>
                  <div className="font-semibold text-gray-900">{spec.label}</div>
                  <div className="text-sm text-gray-600">{spec.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">Live Performance Comparison</h4>
              <div className="space-y-3">
                {benchmarks.map((bench, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className={index === 0 ? "font-bold text-blue-600" : "text-gray-600"}>{bench.provider}</span>
                      <span className={index === 0 ? "font-bold text-blue-600" : "text-gray-600"}>{bench.speed}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${index === 0 ? "bg-blue-500" : "bg-gray-400"}`}
                        style={{ width: `${bench.bar}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
              [3D Illustration: High-performance server infrastructure with development tools flowing seamlessly]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsTechnical;
