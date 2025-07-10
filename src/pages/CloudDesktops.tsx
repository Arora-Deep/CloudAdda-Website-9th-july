import CloudDesktopsHero from "@/components/CloudDesktopsHero";
import CloudDesktopsPainPoints from "@/components/CloudDesktopsPainPoints";
import CloudDesktopsSolutions from "@/components/CloudDesktopsSolutions";
import CloudDesktopsFullyConfigured from "@/components/CloudDesktopsFullyConfigured";
import CloudDesktopsUseCases from "@/components/CloudDesktopsUseCases";
import CloudDesktopsComparison from "@/components/CloudDesktopsComparison";
import CloudDesktopsTeamBenefits from "@/components/CloudDesktopsTeamBenefits";
import CloudDesktopsPricing from "@/components/CloudDesktopsPricing";
import CloudDesktopsMigration from "@/components/CloudDesktopsMigration";
import CloudDesktopsFinalCTA from "@/components/CloudDesktopsFinalCTA";
import CloudDesktopsFooter from "@/components/CloudDesktopsFooter";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const CloudDesktops = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" onClick={() => handleNavigation('/')} className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-orange-500 transition-colors bg-transparent">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/training-labs"
                            onClick={() => handleNavigation('/training-labs')}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/cloud-desktops"
                            onClick={() => handleNavigation('/cloud-desktops')}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/vps"
                            onClick={() => handleNavigation('/vps')}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">VPS Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              High-performance VPS with AMD EPYC processors
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <Link to="/trainer-adda" onClick={() => handleNavigation('/trainer-adda')} className="text-gray-700 hover:text-orange-500 transition-colors">Resources</Link>
              <Link to="/about" onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
              <Link to="/pricing" onClick={() => handleNavigation('/pricing')} className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/contact" onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
              <Link to="/support" onClick={() => handleNavigation('/support')} className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 flex items-center gap-1">
                    Log In
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainer.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Trainer Log In
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a 
                      href="https://trainee.cloudadda.com/login" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Trainee Log In
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page sections */}
      <CloudDesktopsHero />
      <CloudDesktopsPainPoints />
      <CloudDesktopsSolutions />
      <CloudDesktopsFullyConfigured />
      <CloudDesktopsUseCases />
      <CloudDesktopsComparison />
      <CloudDesktopsTeamBenefits />
      <CloudDesktopsMigration />
      <CloudDesktopsFinalCTA />
      <CloudDesktopsFooter />
    </div>
  );
};

export default CloudDesktops;
