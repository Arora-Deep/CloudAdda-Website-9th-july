
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CloudDesktopsHero from "@/components/CloudDesktopsHero";
import CloudDesktopsPainPoints from "@/components/CloudDesktopsPainPoints";
import CloudDesktopsSolutions from "@/components/CloudDesktopsSolutions";
import CloudDesktopsRealityCheck from "@/components/CloudDesktopsRealityCheck";
import CloudDesktopsComparison from "@/components/CloudDesktopsComparison";
import CloudDesktopsTechnical from "@/components/CloudDesktopsTechnical";
import CloudDesktopsSuccessStories from "@/components/CloudDesktopsSuccessStories";
import CloudDesktopsUseCases from "@/components/CloudDesktopsUseCases";
import CloudDesktopsMigration from "@/components/CloudDesktopsMigration";
import CloudDesktopsPricing from "@/components/CloudDesktopsPricing";
import CloudDesktopsSocialProof from "@/components/CloudDesktopsSocialProof";
import CloudDesktopsFinalCTA from "@/components/CloudDesktopsFinalCTA";
import CloudDesktopsFooter from "@/components/CloudDesktopsFooter";

const CloudDesktops = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Log In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* All page sections */}
      <CloudDesktopsHero />
      <CloudDesktopsPainPoints />
      <CloudDesktopsSolutions />
      <CloudDesktopsRealityCheck />
      <CloudDesktopsComparison />
      <CloudDesktopsTechnical />
      <CloudDesktopsSuccessStories />
      <CloudDesktopsUseCases />
      <CloudDesktopsMigration />
      <CloudDesktopsPricing />
      <CloudDesktopsSocialProof />
      <CloudDesktopsFinalCTA />
      <CloudDesktopsFooter />
    </div>
  );
};

export default CloudDesktops;
