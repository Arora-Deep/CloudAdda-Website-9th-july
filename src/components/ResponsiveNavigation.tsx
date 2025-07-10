
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
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Monitor, Users, Server, BookOpen } from 'lucide-react';
import MobileNavigation from './MobileNavigation';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const ResponsiveNavigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" 
              alt="CloudAdda Logo" 
              className="h-8 w-auto sm:h-10" 
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-50 to-orange-100 p-6 no-underline outline-none focus:shadow-md"
                            to="/cloud-desktops"
                          >
                            <Monitor className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Cloud Desktops
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              High-performance cloud-native desktops. Work from anywhere.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/training-labs"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">Training Labs</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Hands-on cloud training environments.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/vps"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <Server className="h-4 w-4" />
                              <div className="text-sm font-medium leading-none">VPS</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Virtual private servers for your projects.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/trainer-adda" className={cn(navigationMenuTriggerStyle(), isActive('/trainer-adda') && 'bg-accent text-accent-foreground')}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Trainer Adda
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), isActive('/pricing') && 'bg-accent text-accent-foreground')}>
                    Pricing
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about" className={cn(navigationMenuTriggerStyle(), isActive('/about') && 'bg-accent text-accent-foreground')}>
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/support" className={cn(navigationMenuTriggerStyle(), isActive('/support') && 'bg-accent text-accent-foreground')}>
                    Support
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation - Always visible on small screens */}
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResponsiveNavigation;
