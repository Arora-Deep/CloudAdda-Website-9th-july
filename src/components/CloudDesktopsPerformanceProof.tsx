
import { Activity, Clock, Cpu, HardDrive } from "lucide-react";

const CloudDesktopsPerformanceProof = () => {
  const performanceMetrics = [
    {
      metric: "Docker Build Time",
      cloudAdda: "45 seconds",
      competitor: "3m 20s (AWS)",
      improvement: "77% faster",
      icon: Clock
    },
    {
      metric: "IDE Loading",
      cloudAdda: "2.1 seconds",
      competitor: "15.8s (Local)",
      improvement: "87% faster",
      icon: Activity
    },
    {
      metric: "File Transfer",
      cloudAdda: "1.2 GB/s",
      competitor: "180 MB/s",
      improvement: "6x faster",
      icon: HardDrive
    },
    {
      metric: "CPU Performance",
      cloudAdda: "EPYC 64-core",
      competitor: "Intel i7 8-core",
      improvement: "8x cores",
      icon: Cpu
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-blue-600">Real Performance</span> Benchmarks
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">Don't just take our word for it. Here's how CloudAdda stacks up against the competition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{metric.metric}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">CloudAdda</span>
                  <span className="text-xl sm:text-2xl font-bold text-orange-600">{metric.cloudAdda}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Competition</span>
                  <span className="text-base sm:text-lg text-gray-500">{metric.competitor}</span>
                </div>
                <div className="border-t pt-3 sm:pt-4">
                  <span className="text-base sm:text-lg font-semibold text-green-600">{metric.improvement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">Want to see these numbers for yourself?</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
            Run Your Own Benchmark Test
          </button>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsPerformanceProof;
