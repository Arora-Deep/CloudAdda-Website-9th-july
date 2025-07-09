import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, Server, Shield, Zap, Clock, Users, CheckCircle, Star, Cpu, HardDrive, Wifi } from "lucide-react";
import { Link } from "react-router-dom";

const VPS = () => {
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
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Log In
              </Button>
              <Button variant="orange" className="rounded-full px-6">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            High-Performance VPS Hosting
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Experience the power of our AMD EPYC-powered VPS servers.
            Ideal for developers, businesses, and anyone needing robust
            hosting solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-orange-300 text-orange-600 hover:bg-orange-50">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Server className="text-orange-500 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900">
                  AMD EPYC Processors
                </h3>
              </div>
              <p className="text-gray-600">
                Benefit from the latest AMD EPYC processors for superior
                performance and speed.
              </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Shield className="text-orange-500 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900">
                  DDoS Protection
                </h3>
              </div>
              <p className="text-gray-600">
                Advanced DDoS protection to keep your VPS secure and online,
                even under attack.
              </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Zap className="text-orange-500 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900">
                  Instant Activation
                </h3>
              </div>
              <p className="text-gray-600">
                Your VPS is activated instantly, allowing you to start your
                projects without delay.
              </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Clock className="text-orange-500 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900">
                  99.9% Uptime Guarantee
                </h3>
              </div>
              <p className="text-gray-600">
                We guarantee a 99.9% uptime, ensuring your VPS is always
                available.
              </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Users className="text-orange-500 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900">
                  Full Root Access
                </h3>
              </div>
              <p className="text-gray-600">
                Gain full root access to your VPS, giving you complete control
                over your server environment.
              </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-orange-500 mr-3 h-6 w-6" />
                <h3 className="text-xl font-medium text-gray-900">
                  Scalable Resources
                </h3>
              </div>
              <p className="text-gray-600">
                Easily scale your VPS resources as your needs grow, ensuring
                optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Why Choose Our VPS Hosting?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit Card */}
            <div className="flex items-start">
              <Star className="text-orange-500 mr-4 h-8 w-8" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Unmatched Performance
                </h3>
                <p className="text-gray-600">
                  Our VPS servers are powered by the latest AMD EPYC processors
                  and NVMe storage for lightning-fast performance.
                </p>
              </div>
            </div>

            {/* Benefit Card */}
            <div className="flex items-start">
              <Cpu className="text-orange-500 mr-4 h-8 w-8" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  High Availability
                </h3>
                <p className="text-gray-600">
                  We utilize redundant infrastructure and advanced monitoring to
                  ensure high availability for your VPS.
                </p>
              </div>
            </div>

            {/* Benefit Card */}
            <div className="flex items-start">
              <HardDrive className="text-orange-500 mr-4 h-8 w-8" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Flexible Configurations
                </h3>
                <p className="text-gray-600">
                  Choose from a variety of VPS configurations to match your
                  specific requirements and budget.
                </p>
              </div>
            </div>

            {/* Benefit Card */}
            <div className="flex items-start">
              <Wifi className="text-orange-500 mr-4 h-8 w-8" />
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  24/7 Expert Support
                </h3>
                <p className="text-gray-600">
                  Our expert support team is available 24/7 to assist you with
                  any issues or questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Simplified) */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Simple and Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            No hidden fees. Just powerful VPS hosting at an affordable price.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
            View All Pricing Plans
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 CloudAdda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default VPS;
