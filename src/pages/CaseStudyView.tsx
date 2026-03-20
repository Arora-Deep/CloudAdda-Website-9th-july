import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CaseStudyStoryCards from "@/components/CaseStudyStoryCards";

const CaseStudyView = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Case Studies | CloudAdda</title>
        <meta name="description" content="Real-world case studies showing how training companies use CloudAdda's virtual labs to deliver reliable, scalable IT training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudadda.com/case-study" />
        <meta property="og:title" content="Case Studies | CloudAdda" />
        <meta property="og:description" content="Real-world case studies showing how training companies use CloudAdda's virtual labs." />
        <meta property="og:image" content="https://cloudadda.com/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | CloudAdda" />
        <meta name="twitter:description" content="Real-world case studies showing how training companies use CloudAdda's virtual labs." />
        <meta name="twitter:image" content="https://cloudadda.com/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" />
        <link rel="canonical" href="https://cloudadda.com/case-study" />
      </Helmet>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <Link to="/trainer-adda" className="flex items-center space-x-2 text-orange-500 hover:text-orange-600">
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
          </div>
        </div>
      </nav>

      <CaseStudyStoryCards />
    </div>
  );
};

export default CaseStudyView;
