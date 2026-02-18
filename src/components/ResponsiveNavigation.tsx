
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowRight, ChevronDown } from 'lucide-react';
import MobileNavigation from './MobileNavigation';

const ResponsiveNavigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" 
                alt="CloudAdda Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Solutions</Link>
            <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                  Log In
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <a href="https://trainer-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer">
                    Trainer Log In
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://trainee-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full cursor-pointer">
                    Trainee Log In
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild variant="orange" className="rounded-full px-6">
              <Link to="/contact">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavigation;
