
import React, { useState } from 'react';
import { Menu, X, Monitor, Users, Server, DollarSign, BookOpen, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Cloud Desktops', href: '/cloud-desktops', icon: Monitor },
    { name: 'Training Labs', href: '/training-labs', icon: Users },
    { name: 'VPS', href: '/vps', icon: Server },
    { name: 'Trainer Adda', href: '/trainer-adda', icon: BookOpen },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'About', href: '/about', icon: null },
    { name: 'Support', href: '/support', icon: Phone },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="p-2 hover:bg-gray-100"
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <SheetTitle className="text-left flex items-center">
            <img 
              src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" 
              alt="CloudAdda Logo" 
              className="h-8 w-auto" 
            />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col h-full">
          <ul className="flex-1 space-y-1 px-4 py-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="p-4 border-t border-gray-200">
            <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/contact" onClick={handleLinkClick}>
                Get Started
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
