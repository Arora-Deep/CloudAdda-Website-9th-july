
import { usePageMeta } from "@/hooks/usePageMeta";

const VPS = () => {
  usePageMeta({
    title: "Cloud VPS Hosting India | NVMe + AMD EPYC | CloudAdda",
    description: "High-speed VPS with NVMe storage and AMD EPYC performance. Perfect for devs, apps, and remote workloads. Starts at ₹699/month. SSD fast, human-supported."
  });

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">VPS Hosting</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          High-speed VPS with NVMe storage and AMD EPYC performance. Perfect for developers, applications, and remote workloads.
        </p>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Basic VPS</h3>
            <p className="text-3xl font-bold mb-4">₹699<span className="text-sm text-gray-500">/month</span></p>
            <ul className="space-y-2 text-sm">
              <li>• 1 vCPU</li>
              <li>• 2GB RAM</li>
              <li>• 25GB NVMe Storage</li>
              <li>• 1TB Bandwidth</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-500">
            <h3 className="text-xl font-semibold mb-4">Standard VPS</h3>
            <p className="text-3xl font-bold mb-4">₹1,299<span className="text-sm text-gray-500">/month</span></p>
            <ul className="space-y-2 text-sm">
              <li>• 2 vCPU</li>
              <li>• 4GB RAM</li>
              <li>• 50GB NVMe Storage</li>
              <li>• 2TB Bandwidth</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Premium VPS</h3>
            <p className="text-3xl font-bold mb-4">₹2,499<span className="text-sm text-gray-500">/month</span></p>
            <ul className="space-y-2 text-sm">
              <li>• 4 vCPU</li>
              <li>• 8GB RAM</li>
              <li>• 100GB NVMe Storage</li>
              <li>• 5TB Bandwidth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPS;
