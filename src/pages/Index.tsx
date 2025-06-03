import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Users, Shield, Zap, Play, CheckCircle, ArrowRight, Globe, Settings, BarChart3, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-10 w-auto object-contain" />
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
      <section className="bg-gray-50 pt-16 pb-20 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-green-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400 rounded-full opacity-50"></div>
        <div className="absolute top-60 right-1/3 w-16 h-16 bg-green-500 rounded-full opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Cloud Labs,<br />
                  Virtual Desktops<br />
                  & High-Performance VPS
                </h1>
                <div className="bg-lime-400 text-black px-4 py-2 rounded-lg inline-block text-sm font-medium">
                  All in One Platform
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700 font-medium">Your success</p>
                  <p className="text-gray-700 font-medium">is our business</p>
                </div>
                
                <div className="bg-lime-400 text-black px-6 py-3 rounded-lg inline-block font-medium">
                  High-performance cloud built for training providers
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                High-performance cloud built for training providers, remote teams, 
                and developers who demand more.
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
                <img src="/lovable-uploads/6df3b19a-2c57-45c8-89b1-a0f0e58db9ab.png" alt="3D illustration of a person with laptop and lightbulb idea" className="w-full max-w-lg mx-auto relative z-10" />
                
                {/* Floating elements around the main image */}
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
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-lg">
                  LOGIN
                </Button>
                <Button className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-lg">
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl mb-8">
              <span className="text-purple-300">Enjoyable...</span> User-friendly, <span className="text-purple-300">Scalable</span>, Cost-effective
            </h2>
            <h3 className="text-3xl font-normal mb-8">If your training looks like this...</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
              <div>
                <h4 className="font-semibold mb-2">You're still rolling out training the old school way</h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2">It's hard to get learners to participate</h4>
              </div>
              <div>
                <h4 className="font-semibold mb-2">You can't get more budget because you can't prove ROI</h4>
              </div>
            </div>
            
            <h3 className="text-3xl font-normal">...we can help you fix it</h3>
          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="relative">
                <img src="/lovable-uploads/eb2c47ec-d601-4c75-b1fc-847f67a73aa6.png" alt="3D illustration of businessman meditating" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Cloud Labs</h3>
                <p className="text-gray-600">
                  Deliver engaging, hands-on self-paced and virtual instructor-led
                  training every time with CloudAdda's cloud lab solutions
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="relative">
                <img src="/lovable-uploads/5aab5b8e-c5b5-423b-a473-bcb996375d02.png" alt="3D illustration of woman working at desk" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">Sales Demos & POCs</h3>
                <p className="text-gray-600">
                  Take that first impression to the next level and deliver engaging virtual
                  sales demos and POCs in the cloud.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <img src="/lovable-uploads/0190e56d-e54b-4c1f-81b8-34e45bd41e84.png" alt="3D illustration of woman working with laptop" className="w-full max-w-sm mx-auto" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">VPS</h3>
                <p className="text-gray-600">
                  High-performance Virtual Private Servers with full root access and
                  scalable resources for your development and production needs.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Setup Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-sm text-purple-600 font-semibold uppercase tracking-wide">FAST SETUP</div>
              <h2 className="text-4xl font-bold text-gray-900">
                Spin up interactive software experiences in a flash
              </h2>
              <p className="text-gray-600">
                Create or clone environments in minutes to mimic real world experiences for demos,
                POCs, and training. No code required - all you need is your web browser (and the
                internet, obviously).
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <p className="text-gray-700">Start fast with customizable templates.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <p className="text-gray-700">Duplicate environments with just a click.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <p className="text-gray-700">Cloud-agnostic setup.</p>
                </div>
              </div>
              
              <p className="text-gray-600">
                Easily build complex networking between environments to deliver the exact scenario for
                your users.
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-gray-600">"Easy to use, quick to spin up environments!"</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-900">CloudAdda Environment</div>
                    <div className="text-xs text-gray-600 mt-1">Spinning up...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hands-on Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="text-sm font-medium text-gray-900">Welcome</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-sm text-purple-600 font-semibold uppercase tracking-wide">HANDS-ON EXPERIENCES</div>
              <h2 className="text-4xl font-bold text-gray-900">
                Our "play and break" philosophy
              </h2>
              <p className="text-gray-600">
                Take people from "Hmm" to "Aha!" with interactive replicas of your product. And if they
                break something? There's a handy reset button to start over.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <p className="text-gray-700">Train people in risk-free, hands-on environments.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <p className="text-gray-700">Interact with learners in virtual classes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-sm text-gray-600 mb-2">Globally Recognised</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-sm text-gray-600">Happy & productive users worldwide</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Sales Enablement</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">311%</div>
              <div className="text-sm text-gray-600">Increase in POC buyer engagement</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Virtual Training</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">365%</div>
              <div className="text-sm text-gray-600">Higher course completion rate</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Net Promoter Score</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">&gt;50 NPS</div>
              <div className="text-sm text-gray-600">Customers that work with us, stay with us</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Want to learn more?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-t-lg relative">
                  <div className="absolute top-4 right-4 bg-white text-xs px-2 py-1 rounded">eBooks</div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Virtual Hands-on Labs:</h3>
                    <h4 className="text-lg font-bold">A Strategic Buyer's Guide</h4>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-sm text-purple-600 uppercase tracking-wide mb-2">VIRTUAL TRAINING</div>
                <h4 className="font-semibold text-gray-900">Virtual Hands-On Labs: A Strategic Buyer's Guide</h4>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-t-lg relative">
                  <div className="absolute top-4 right-4 bg-white text-xs px-2 py-1 rounded">eBooks</div>
                  <div className="p-6 text-white">
                    <h3 className="text-6xl font-bold mb-2">10</h3>
                    <h4 className="text-lg">Top Training Tips For Cyber C&I Leaders</h4>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-sm text-purple-600 uppercase tracking-wide mb-2">VIRTUAL TRAINING</div>
                <h4 className="font-semibold text-gray-900">Expert Insights: Inside Track Cyber Training</h4>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="p-0">
                <div className="h-48 bg-gray-800 rounded-t-lg relative">
                  <div className="absolute top-4 right-4 bg-white text-xs px-2 py-1 rounded">Videos</div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-sm text-purple-600 uppercase tracking-wide mb-2">CYBER SECURITY</div>
                <h4 className="font-semibold text-gray-900">How CloudAdda Transformed Technical Training for Thales</h4>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </div>
              <p className="text-gray-400">
                Empowering organizations with virtual IT environments for training, demos, and development.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">IT Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sales Demos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
