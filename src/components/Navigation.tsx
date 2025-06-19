
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Target } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-12 w-auto object-contain" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Horizontal Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 transition-colors py-2 flex items-center font-medium">
                Solutions
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 flex space-x-6 w-max">
                  <Link to="/training-labs" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors group/item">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover/item:text-orange-600">Training Labs</div>
                      <div className="text-sm text-gray-600">Provisioned lab environments</div>
                    </div>
                  </Link>
                  <Link to="/cloud-desktops" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group/item">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover/item:text-purple-600">Cloud Desktops</div>
                      <div className="text-sm text-gray-600">Fast, secure desktops</div>
                    </div>
                  </Link>
                  <Link to="/vps" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group/item">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover/item:text-blue-600">VPS Hosting</div>
                      <div className="text-sm text-gray-600">High-performance VPS</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
            <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
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
  );
};

export default Navigation;
