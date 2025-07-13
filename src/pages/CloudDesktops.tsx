
import ResponsiveNavigation from "@/components/ResponsiveNavigation";
import CloudDesktopsHero from "@/components/CloudDesktopsHero";
import CloudDesktopsPainPoints from "@/components/CloudDesktopsPainPoints";
import CloudDesktopsSolutions from "@/components/CloudDesktopsSolutions";
import CloudDesktopsUseCases from "@/components/CloudDesktopsUseCases";
import CloudDesktopsTechnical from "@/components/CloudDesktopsTechnical";
import CloudDesktopsTeamBenefits from "@/components/CloudDesktopsTeamBenefits";
import CloudDesktopsFullyConfigured from "@/components/CloudDesktopsFullyConfigured";
import CloudDesktopsMigration from "@/components/CloudDesktopsMigration";
import CloudDesktopsComparison from "@/components/CloudDesktopsComparison";
import CloudDesktopsPricing from "@/components/CloudDesktopsPricing";
import CloudDesktopsFinalCTA from "@/components/CloudDesktopsFinalCTA";
import CloudDesktopsFooter from "@/components/CloudDesktopsFooter";

const CloudDesktops = () => {
  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavigation />
      
      {/* Hero Section */}
      <CloudDesktopsHero />
      
      {/* Pain Points */}
      <CloudDesktopsPainPoints />
      
      {/* Solutions */}
      <CloudDesktopsSolutions />
      
      {/* Use Cases */}
      <CloudDesktopsUseCases />
      
      {/* Technical Specs */}
      <CloudDesktopsTechnical />
      
      {/* Team Benefits */}
      <CloudDesktopsTeamBenefits />
      
      {/* Fully Configured */}
      <CloudDesktopsFullyConfigured />
      
      {/* Migration */}
      <CloudDesktopsMigration />
      
      {/* Comparison */}
      <CloudDesktopsComparison />
      
      {/* Pricing */}
      <CloudDesktopsPricing currency="INR" />
      
      {/* Final CTA */}
      <CloudDesktopsFinalCTA />
      
      {/* Footer */}
      <CloudDesktopsFooter />
    </div>
  );
};

export default CloudDesktops;
