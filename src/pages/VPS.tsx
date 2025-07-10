
import { usePageMeta } from "@/hooks/usePageMeta";

const VPS = () => {
  usePageMeta({
    title: "Cloud VPS Hosting | NVMe + AMD EPYC | CloudAdda",
    description: "High-speed VPS with NVMe storage and AMD EPYC performance. Perfect for devs, apps, and remote workloads. Starts at ₹199/month. nvme fast, human-supported."
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">VPS Hosting</h1>
        <p className="text-lg text-gray-600">This is the VPS hosting page.</p>
      </div>
    </div>
  );
};

export default VPS;
