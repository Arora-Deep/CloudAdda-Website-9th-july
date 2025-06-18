
import Navigation from "@/components/Navigation";
import CloudDesktopsHero from "@/components/CloudDesktopsHero";
import CloudDesktopsPainPoints from "@/components/CloudDesktopsPainPoints";
import CloudDesktopsSolutions from "@/components/CloudDesktopsSolutions";
import CloudDesktopsFullyConfigured from "@/components/CloudDesktopsFullyConfigured";
import CloudDesktopsUseCases from "@/components/CloudDesktopsUseCases";
import CloudDesktopsComparison from "@/components/CloudDesktopsComparison";
import CloudDesktopsTeamBenefits from "@/components/CloudDesktopsTeamBenefits";
import CloudDesktopsTrustSignals from "@/components/CloudDesktopsTrustSignals";
import CloudDesktopsPricing from "@/components/CloudDesktopsPricing";
import CloudDesktopsMigration from "@/components/CloudDesktopsMigration";
import CloudDesktopsFinalCTA from "@/components/CloudDesktopsFinalCTA";
import CloudDesktopsFooter from "@/components/CloudDesktopsFooter";

const CloudDesktops = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Page sections */}
      <CloudDesktopsHero />
      <CloudDesktopsPainPoints />
      <CloudDesktopsSolutions />
      <CloudDesktopsFullyConfigured />
      <CloudDesktopsUseCases />
      <CloudDesktopsComparison />
      <CloudDesktopsTeamBenefits />
      <CloudDesktopsTrustSignals />
      <CloudDesktopsPricing />
      <CloudDesktopsMigration />
      <CloudDesktopsFinalCTA />
      <CloudDesktopsFooter />
    </div>
  );
};

export default CloudDesktops;
