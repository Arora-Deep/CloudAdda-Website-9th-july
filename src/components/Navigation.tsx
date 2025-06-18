
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" 
                alt="CloudAdda Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-foreground">CloudAdda</span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/support" className="text-gray-700 hover:text-gray-900">
              Support
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              Log In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
              Start Now →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
