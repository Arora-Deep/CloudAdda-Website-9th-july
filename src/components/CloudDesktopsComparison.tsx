
import { CheckCircle, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CloudDesktopsComparison = () => {
  const comparisonData = [
    {
      feature: "Speed",
      cloudAdda: "Instant, server-grade performance",
      traditional: "Slow due to ageing hardware"
    },
    {
      feature: "Setup Time",
      cloudAdda: "Pre-configured, zero setup required",
      traditional: "Manual installs, lengthy delays"
    },
    {
      feature: "Security",
      cloudAdda: "Centralized, no local data storage",
      traditional: "Risky, fragmented data everywhere"
    },
    {
      feature: "Portability",
      cloudAdda: "Log in from anywhere, any device",
      traditional: "Tied to one physical machine"
    },
    {
      feature: "Maintenance",
      cloudAdda: "We manage everything for you",
      traditional: "You handle all maintenance tasks"
    },
    {
      feature: "Scaling",
      cloudAdda: "Add or remove users instantly",
      traditional: "Buy, image, and deploy manually"
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-orange-500">Traditional Laptops</span> vs <span className="text-purple-600">CloudAdda Desktops</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600">See the Clear Difference</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 w-1/3 px-3 sm:px-6 py-3 sm:py-4">Feature</TableHead>
                  <TableHead className="text-sm sm:text-base lg:text-lg font-bold text-orange-600 w-1/3 text-center px-3 sm:px-6 py-3 sm:py-4">Traditional Laptops</TableHead>
                  <TableHead className="text-sm sm:text-base lg:text-lg font-bold text-purple-600 w-1/3 text-center px-3 sm:px-6 py-3 sm:py-4">CloudAdda Desktops</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((item, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg px-3 sm:px-6 py-3 sm:py-4">
                      {item.feature}
                    </TableCell>
                    <TableCell className="text-center px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700">{item.traditional}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">{item.cloudAdda}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsComparison;
