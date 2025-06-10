
import { CheckCircle, X } from "lucide-react";

const CloudDesktopsComparison = () => {
  const comparisonData = [
    {
      feature: "Speed",
      cloudAdda: "⚡ Instant, server-grade",
      traditional: "🐢 Slow, aging hardware"
    },
    {
      feature: "Setup Time",
      cloudAdda: "🚀 Pre-configured, zero setup",
      traditional: "⏳ Manual installs, delays"
    },
    {
      feature: "Security",
      cloudAdda: "🔒 Centralized, no local data",
      traditional: "❗ Risky, fragmented data"
    },
    {
      feature: "Portability",
      cloudAdda: "🌐 Log in anywhere",
      traditional: "💼 Tied to one machine"
    },
    {
      feature: "Maintenance",
      cloudAdda: "🧩 We manage it all",
      traditional: "🔧 You manage everything"
    },
    {
      feature: "Scaling",
      cloudAdda: "📈 Add/remove in clicks",
      traditional: "🛑 Buy, image, deploy"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Old World vs CloudAdda: See the Difference</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-3xl shadow-2xl border border-gray-200">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                <th className="text-center p-6 bg-blue-50 font-bold text-blue-600">CloudAdda Desktops</th>
                <th className="text-center p-6 font-semibold text-gray-600">Traditional Laptops</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-6 font-semibold text-gray-900">{row.feature}</td>
                  <td className="p-6 text-center bg-blue-50 font-medium text-blue-600">{row.cloudAdda}</td>
                  <td className="p-6 text-center text-gray-600">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsComparison;
