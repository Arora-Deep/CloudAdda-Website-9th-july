
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">Business</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">HOME</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">ABOUT</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">CONTACT</a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors font-medium">DISCOUNT</a>
            </div>
            <div className="bg-black text-white px-6 py-2 rounded-full text-sm">
              Search
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-lime-300 rounded-full opacity-60"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-lime-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-lime-500 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-1/3 w-12 h-12 bg-lime-300 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-lime-400 rounded-full opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight">
                  Elevate Your Experience
                </h1>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-lg text-gray-700 font-medium">Your success</p>
                  <p className="text-lg text-gray-700 font-medium">is our business</p>
                </div>
                
                <div className="bg-lime-400 text-black px-4 py-2 rounded-lg inline-block font-medium text-sm">
                  637 Green Street, City
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">✓</span>
                  </div>
                  <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">✓</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main illustration area - using a placeholder since we're matching the layout */}
                <div className="relative w-full max-w-lg mx-auto h-96 flex items-center justify-center">
                  {/* Person at desk illustration placeholder */}
                  <div className="w-80 h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Illustration Area</span>
                  </div>
                </div>
                
                {/* Floating elements around the main illustration */}
                <div className="absolute top-10 -left-10 bg-white p-3 rounded-lg shadow-lg">
                  <div className="w-12 h-8 bg-green-400 rounded"></div>
                </div>
                
                <div className="absolute top-20 -right-8 bg-white p-2 rounded-lg shadow-lg">
                  <div className="w-8 h-6 bg-lime-400 rounded"></div>
                </div>
                
                <div className="absolute bottom-20 -left-8 bg-white p-2 rounded-lg shadow-lg">
                  <div className="w-6 h-6 bg-gray-800 rounded"></div>
                </div>
              </div>
              
              {/* Right side buttons */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-lg block w-full">
                  LOGIN
                </Button>
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-lg block w-full">
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
