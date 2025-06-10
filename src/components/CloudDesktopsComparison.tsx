
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const CloudDesktopsComparison = () => {
  const comparisonData = [
    {
      spec: "Setup Time",
      cloudAdda: "90 seconds (Actually)",
      aws: "15+ minutes",
      azure: "20+ minutes",
      citrix: "30+ minutes"
    },
    {
      spec: "Performance (Real World)",
      cloudAdda: "Native-like (10ms latency)",
      aws: "Laggy (50ms+ latency)",
      azure: "Variable (20-80ms)",
      citrix: "Sluggish (40ms+ latency)"
    },
    {
      spec: "Storage Speed",
      cloudAdda: "NVMe (50,000+ IOPS)",
      aws: "EBS (3,000 IOPS)",
      azure: "Premium SSD (5,000 IOPS)",
      citrix: "Standard SSD (2,000 IOPS)"
    },
    {
      spec: "Network Performance",
      cloudAdda: "10Gbps consistent",
      aws: "Variable throttling",
      azure: "Bandwidth limits",
      citrix: "Shared bandwidth"
    },
    {
      spec: "Monthly Cost (4vCPU, 8GB)",
      cloudAdda: "₹2,799 (All included)",
      aws: "₹4,500+ (After data transfer)",
      azure: "₹3,800+ (After compute hours)",
      citrix: "₹5,200+ (After licenses)"
    },
    {
      spec: "Pre-installed Software",
      cloudAdda: "VS Code, Docker, Git, Node.js",
      aws: "Basic Windows only",
      azure: "Basic Windows only",
      citrix: "Depends on license"
    },
    {
      spec: "Support Response (Human)",
      cloudAdda: "< 2 hours (Real engineers)",
      aws: "4-24 hours (Tier 1)",
      azure: "2-12 hours (Tier 1)",
      citrix: "Business hours only"
    },
    {
      spec: "Custom Environment Setup",
      cloudAdda: "Free (Template creation)",
      aws: "Manual configuration",
      azure: "PowerShell scripting",
      citrix: "Complex policies"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Marketing Specs vs Reality</h2>
          <p className="text-xl text-gray-600">What they promise vs what you actually get</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-6 font-semibold text-gray-900">What You Get</th>
                <th className="text-center p-6 bg-blue-50 font-bold text-blue-600">CloudAdda Desktop</th>
                <th className="text-center p-6 font-semibold text-gray-600">AWS WorkSpaces</th>
                <th className="text-center p-6 font-semibold text-gray-600">Azure Virtual Desktop</th>
                <th className="text-center p-6 font-semibold text-gray-600">Citrix Cloud</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-6 font-semibold text-gray-900">{row.spec}</td>
                  <td className="p-6 text-center bg-blue-50 font-bold text-blue-600">{row.cloudAdda}</td>
                  <td className="p-6 text-center text-gray-600">{row.aws}</td>
                  <td className="p-6 text-center text-gray-600">{row.azure}</td>
                  <td className="p-6 text-center text-gray-600">{row.citrix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 inline-block">
            <div className="text-lg font-bold text-blue-800 mb-2">Transparency Promise</div>
            <div className="text-blue-600 mb-4">What we advertise is what you get. No fine print, no gotchas.</div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-3">
              See Live Performance Demo
              <Activity className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsComparison;
