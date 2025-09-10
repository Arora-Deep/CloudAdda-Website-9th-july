
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-orange-500 transition-colors bg-transparent focus:outline-none focus:ring-0 focus:bg-transparent focus:text-orange-500">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[400px] p-0 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                    <div className="grid gap-0 p-0 w-[400px] lg:w-[500px] lg:grid-cols-1">
                      <NavigationMenuLink asChild>
                        <Link to="/training-labs" className="block select-none space-y-1 rounded-none p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50 border-b border-gray-100">
                          <div className="text-sm font-medium leading-none text-gray-900">Training Labs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Provisioned lab environments for training companies
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/cloud-desktops" className="block select-none space-y-1 rounded-none p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50 border-b border-gray-100">
                          <div className="text-sm font-medium leading-none text-gray-900">Cloud Desktops</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            Fast, secure desktops accessible from anywhere
                          </p>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="/vps" className="block select-none space-y-1 rounded-none p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50">
                          <div className="text-sm font-medium leading-none text-gray-900">VPS Hosting</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                            High-performance VPS with AMD EPYC processors
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="/trainer-adda" className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
            <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-orange-500 hover:text-orange-600 focus:outline-none focus:ring-0 focus:bg-transparent">
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
