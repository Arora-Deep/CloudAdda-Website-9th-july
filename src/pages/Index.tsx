import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, CheckCircle, Users, Shield, Zap, Globe, Star, ChevronRight } from "lucide-react";

const Index = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2">
                <img src="/lovable-uploads/0d7cc304-837a-44d4-a0e0-6728bd1bad16.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
              </button>
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
                          <button
                            onClick={() => handleNavigation('/training-labs')}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                          >
                            <div className="text-sm font-medium leading-none">Training Labs</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Provisioned lab environments for training companies
                            </p>
                          </button>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation('/cloud-desktops')}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                          >
                            <div className="text-sm font-medium leading-none">Cloud Desktops</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Fast, secure desktops accessible from anywhere
                            </p>
                          </button>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => handleNavigation('/vps')}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left"
                          >
                            <div className="text-sm font-medium leading-none">VPS Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              High-performance VPS with AMD EPYC processors
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <button onClick={() => handleNavigation('/trainer-adda')} className="text-gray-700 hover:text-orange-500 transition-colors">Resources</button>
              <button onClick={() => handleNavigation('/about')} className="text-gray-700 hover:text-orange-500 transition-colors">About Us</button>
              <button onClick={() => handleNavigation('/pricing')} className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</button>
              <button onClick={() => handleNavigation('/contact')} className="text-gray-700 hover:text-orange-500 transition-colors">Contact</button>
              <button onClick={() => handleNavigation('/support')} className="text-gray-700 hover:text-orange-500 transition-colors">Support</button>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600 rounded-full px-6">
                Log In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Infrastructure That
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Just Works
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Born in India, Built for the World. Get instant access to cloud desktops, training labs, and VPS hosting with zero setup time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="orange" 
                size="lg" 
                className="text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300"
                onClick={() => handleNavigation('/cloud-desktops')}
              >
                Log In <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                onClick={() => handleNavigation('/contact')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Marquee - Enhanced for bigger company visibility */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
          <p className="text-gray-600">Join thousands of companies using CloudAdda infrastructure</p>
        </div>
        
        {/* First row - Left to Right with strategic positioning */}
        <div className="relative flex overflow-hidden py-4 mb-8">
          <div className="flex animate-marquee-slow whitespace-nowrap items-center">
            {/* Strategic positioning - Start with key logos */}
            <img src="/lovable-uploads/df4fd201-2c8e-4ad6-b65a-1f0d13add86d.png" alt="Red Hat" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/eb28034e-23b0-4ede-a4d8-635ce65d965e.png" alt="Times of India" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/4e4d4486-2767-498c-816b-a1beee44cbf9.png" alt="NIIT" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/21459b8a-fdf1-42f6-8503-d17013aede66.png" alt="Unext" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/c65616c4-1ed8-4c76-8cd6-93f0ddd9a95a.png" alt="Indian Institute of Science" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/02252fc8-4957-494c-82db-1f7917b81b8b.png" alt="Xebia" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/9bc8f666-3076-423e-9425-f6233997cb50.png" alt="Customer 7" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/168f3b7e-5abe-4850-bdac-add53e21fcb4.png" alt="Customer 8" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <div className="flex animate-marquee-slow whitespace-nowrap items-center">
            <img src="/lovable-uploads/df4fd201-2c8e-4ad6-b65a-1f0d13add86d.png" alt="Red Hat" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/eb28034e-23b0-4ede-a4d8-635ce65d965e.png" alt="Times of India" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/4e4d4486-2767-498c-816b-a1beee44cbf9.png" alt="NIIT" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/21459b8a-fdf1-42f6-8503-d17013aede66.png" alt="Unext" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/c65616c4-1ed8-4c76-8cd6-93f0ddd9a95a.png" alt="Indian Institute of Science" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/02252fc8-4957-494c-82db-1f7917b81b8b.png" alt="Xebia" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/9bc8f666-3076-423e-9425-f6233997cb50.png" alt="Customer 7" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/168f3b7e-5abe-4850-bdac-add53e21fcb4.png" alt="Customer 8" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>

        {/* Second row - Right to Left with strategic positioning */}
        <div className="relative flex overflow-hidden py-4">
          <div className="flex animate-marquee-reverse-slow whitespace-nowrap items-center">
            <img src="/lovable-uploads/78472758-6da6-4403-9e80-a1e2d61a0893.png" alt="Customer 9" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/b30cdbbc-43d3-4690-bc58-4817dcedd4d6.png" alt="Customer 10" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            {/* Repeat key logos for visibility */}
            <img src="/lovable-uploads/df4fd201-2c8e-4ad6-b65a-1f0d13add86d.png" alt="Red Hat" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/eb28034e-23b0-4ede-a4d8-635ce65d965e.png" alt="Times of India" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/4e4d4486-2767-498c-816b-a1beee44cbf9.png" alt="NIIT" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/21459b8a-fdf1-42f6-8503-d17013aede66.png" alt="Unext" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/c65616c4-1ed8-4c76-8cd6-93f0ddd9a95a.png" alt="Indian Institute of Science" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/02252fc8-4957-494c-82db-1f7917b81b8b.png" alt="Xebia" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <div className="flex animate-marquee-reverse-slow whitespace-nowrap items-center">
            <img src="/lovable-uploads/78472758-6da6-4403-9e80-a1e2d61a0893.png" alt="Customer 9" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/b30cdbbc-43d3-4690-bc58-4817dcedd4d6.png" alt="Customer 10" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/df4fd201-2c8e-4ad6-b65a-1f0d13add86d.png" alt="Red Hat" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/eb28034e-23b0-4ede-a4d8-635ce65d965e.png" alt="Times of India" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/4e4d4486-2767-498c-816b-a1beee44cbf9.png" alt="NIIT" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/21459b8a-fdf1-42f6-8503-d17013aede66.png" alt="Unext" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/c65616c4-1ed8-4c76-8cd6-93f0ddd9a95a.png" alt="Indian Institute of Science" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="/lovable-uploads/02252fc8-4957-494c-82db-1f7917b81b8b.png" alt="Xebia" className="h-16 mx-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* Hero Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliable Infrastructure</h3>
            <p className="text-gray-600">Built on top of trusted cloud providers with 99.9% uptime SLA.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
            <p className="text-gray-600">Easy to use dashboards and APIs for managing your cloud resources.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">Industry-standard security practices to keep your data safe.</p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <Zap className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Desktops</h3>
              <p className="text-gray-600">Access fast, secure virtual desktops from anywhere in the world.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <Globe className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Training Labs</h3>
              <p className="text-gray-600">Provisioned lab environments tailored for training companies and educators.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <Star className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">VPS Hosting</h3>
              <p className="text-gray-600">High-performance VPS hosting powered by AMD EPYC processors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose CloudAdda?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Instant Setup</h3>
            <p className="text-gray-600 mb-6">Get started with zero setup time and instant access to your cloud resources.</p>
            <h3 className="text-2xl font-semibold mb-4">Scalable & Flexible</h3>
            <p className="text-gray-600">Scale your infrastructure up or down based on your needs with flexible plans.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600 mb-6">Our support team is available around the clock to assist you.</p>
            <h3 className="text-2xl font-semibold mb-4">Cost Effective</h3>
            <p className="text-gray-600">Competitive pricing with no hidden fees or long-term contracts.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
          <div className="space-y-8">
            <blockquote className="text-center text-gray-700 italic">
              "CloudAdda has transformed the way we deliver training labs to our students. The infrastructure is reliable and easy to manage."
              <footer className="mt-4 font-semibold">- Rajesh Kumar, NIIT</footer>
            </blockquote>
            <blockquote className="text-center text-gray-700 italic">
              "The virtual desktops are fast and secure. Our team can work from anywhere without any hassle."
              <footer className="mt-4 font-semibold">- Anjali Singh, Xebia</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">99.9%</div>
            <div className="text-gray-700">Uptime SLA</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">10K+</div>
            <div className="text-gray-700">Active Users</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-700">Enterprise Customers</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="mb-8 text-lg">Join thousands of companies using CloudAdda infrastructure to power their business.</p>
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-white border-white border-2 rounded-full px-10 py-4 hover:bg-white hover:text-orange-500 transition-all duration-300"
            onClick={() => handleNavigation('/cloud-desktops')}
          >
            Log In <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img src="/lovable-uploads/7dbdbf50-fd3e-44fd-ae94-47ff369c1d01.png" alt="CloudAdda Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl">CloudAdda</span>
          </div>
          <div className="flex space-x-6">
            <button onClick={() => handleNavigation('/privacy-policy')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavigation('/terms-of-service')} className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => handleNavigation('/contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
