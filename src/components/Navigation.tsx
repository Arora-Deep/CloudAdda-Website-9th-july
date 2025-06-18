
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl text-gray-900">CLOUD</span>
              <span className="font-normal text-xl text-gray-600">ADDA</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/training-labs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Training Labs</Link>
                  <Link to="/cloud-desktops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Cloud Desktops</Link>
                  <Link to="/vps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">VPS</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/trainer-adda" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Trainer Adda</Link>
                  <Link to="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Guides</Link>
                  <Link to="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Support</Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </Link>

            <Link to="/support" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Support
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900">
              Log In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Start Now →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
