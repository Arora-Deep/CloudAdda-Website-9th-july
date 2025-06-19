
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Target, BookOpen, Lightbulb, Heart, Download, Calendar } from "lucide-react";

const Navigation = () => {
  const resourceSections = [
    {
      id: "trainer-playbook",
      label: "Trainer Playbook",
      icon: BookOpen
    },
    {
      id: "adda-insights",
      label: "Adda Insights", 
      icon: Lightbulb
    },
    {
      id: "customer-stories",
      label: "Customer Stories",
      icon: Heart
    },
    {
      id: "downloads",
      label: "Downloads",
      icon: Download
    },
    {
      id: "adda-dispatch",
      label: "The Adda Dispatch",
      icon: Calendar
    }
  ];

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
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 transition-all duration-300 py-2 flex items-center font-medium">
                Solutions
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Solutions</h3>
                    <p className="text-sm text-gray-600">Powerful infrastructure for every need</p>
                  </div>
                  <div className="space-y-6">
                    <Link to="/training-labs" className="block p-5 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-300 transform hover:scale-105 group/item border border-transparent hover:border-orange-200 hover:shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 group-hover/item:text-orange-600 transition-colors text-lg mb-1">Training Labs</div>
                          <p className="text-sm text-gray-600 leading-relaxed">Provisioned lab environments for training companies</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/cloud-desktops" className="block p-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all duration-300 transform hover:scale-105 group/item border border-transparent hover:border-purple-200 hover:shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 group-hover/item:text-purple-600 transition-colors text-lg mb-1">Cloud Desktops</div>
                          <p className="text-sm text-gray-600 leading-relaxed">Fast, secure desktops accessible from anywhere</p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/vps" className="block p-5 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 transform hover:scale-105 group/item border border-transparent hover:border-blue-200 hover:shadow-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors text-lg mb-1">VPS Hosting</div>
                          <p className="text-sm text-gray-600 leading-relaxed">High-performance VPS with AMD EPYC processors</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 transition-all duration-300 py-2 flex items-center font-medium">
                Resources
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Resources Hub</h3>
                    <p className="text-xs text-gray-600">Everything you need for training success</p>
                  </div>
                  <div className="space-y-3">
                    {resourceSections.map((section) => {
                      const IconComponent = section.icon;
                      return (
                        <Link key={section.id} to="/trainer-adda" className="block p-4 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all duration-300 transform hover:scale-105 group/item border border-transparent hover:border-orange-200 hover:shadow-md">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 text-sm group-hover/item:text-orange-600 transition-colors">{section.label}</div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

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
