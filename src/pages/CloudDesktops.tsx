
import ResponsiveNavigation from "@/components/ResponsiveNavigation";
import CloudDesktopsHero from "@/components/CloudDesktopsHero";
import CloudDesktopsPainPoints from "@/components/CloudDesktopsPainPoints";
import CloudDesktopsWay from "@/components/CloudDesktopsWay";
import CloudDesktopsFullyConfigured from "@/components/CloudDesktopsFullyConfigured";
import CloudDesktopsStopAsking from "@/components/CloudDesktopsStopAsking";
import CloudDesktopsComparison from "@/components/CloudDesktopsComparison";
import CloudDesktopsRealityCheck from "@/components/CloudDesktopsRealityCheck";
import CloudDesktopsMigration from "@/components/CloudDesktopsMigration";
import CloudDesktopsFinalCTA from "@/components/CloudDesktopsFinalCTA";
import CloudDesktopsFooter from "@/components/CloudDesktopsFooter";

const CloudDesktops = () => {
  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavigation />
      
      {/* Hero */}
      <CloudDesktopsHero />
      
      {/* Say Goodbye to Local Machines */}
      <CloudDesktopsPainPoints />
      
      {/* The CloudAdda Way */}
      <CloudDesktopsWay />
      
      {/* Fully Configured Ready to Go */}
      <CloudDesktopsFullyConfigured />
      
      {/* Stop Asking "Will It Work" */}
      <CloudDesktopsStopAsking />
      
      {/* Traditional Laptops vs CloudAdda Desktops */}
      <CloudDesktopsComparison />
      
      {/* Ready to Transform Your Team */}
      <CloudDesktopsRealityCheck />
      
      {/* Migration - We Handle Everything */}
      <CloudDesktopsMigration />
      
      {/* The Future of Work Isn't on Your Laptop */}
      <CloudDesktopsFinalCTA />
      
      {/* Footer */}
      <CloudDesktopsFooter />
    </div>
  );
};

export default CloudDesktops;
