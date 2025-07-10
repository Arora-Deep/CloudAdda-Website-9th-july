import { usePageMeta } from "@/hooks/usePageMeta";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const VPS = () => {
  usePageMeta({
    title: "Cloud VPS Hosting India | NVMe + AMD EPYC | CloudAdda",
    description: "High-speed VPS with NVMe storage and AMD EPYC performance. Perfect for devs, apps, and remote workloads. Starts at ₹699/month. SSD fast, human-supported."
  });

  return (
    <>
      <Navbar />
      <div>
        <h1>VPS Page</h1>
        <p>This is the VPS page content.</p>
      </div>
      <Footer />
    </>
  );
};

export default VPS;
