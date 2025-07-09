import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ArrowRight, BookOpen, Users, Award, TrendingUp, FileText, Video, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
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

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Resources for Trainers and Educators
          </h2>
          <p className="mt-2 text-lg text-gray-600 text-center">
            Enhance your training sessions with our curated collection of resources.
          </p>

          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Resource Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  <span>Training Guides</span>
                </div>
                <p className="text-gray-700 text-base">
                  Comprehensive guides to help you deliver effective training.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                  View Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span>Community Forum</span>
                </div>
                <p className="text-gray-700 text-base">
                  Connect with other trainers, share ideas, and get support.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                  Join Forum
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center space-x-2">
                  <Award className="h-5 w-5 text-orange-500" />
                  <span>Certification Programs</span>
                </div>
                <p className="text-gray-700 text-base">
                  Get certified and showcase your expertise in training.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                  Explore Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resource Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-orange-500" />
                  <span>Training Trends</span>
                </div>
                <p className="text-gray-700 text-base">
                  Stay updated with the latest trends and methodologies in training.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                  Discover Trends
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resource Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-orange-500" />
                  <span>Sample Training Materials</span>
                </div>
                <p className="text-gray-700 text-base">
                  Download sample materials to use as a starting point for your training.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                  Download Samples
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Resource Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center space-x-2">
                  <Video className="h-5 w-5 text-orange-500" />
                  <span>Video Tutorials</span>
                </div>
                <p className="text-gray-700 text-base">
                  Access video tutorials to learn new skills and techniques.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300">
                  Watch Tutorials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Ready to Elevate Your Training Sessions?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our platform and discover the tools and resources you need to succeed.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="orange" className="rounded-full px-8 py-3 text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4">About Us</h4>
            <p className="text-gray-400">
              We are dedicated to providing the best resources for trainers and educators.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul>
              <li><Link to="#" className="text-gray-400 hover:text-white flex items-center space-x-2"><ArrowRight className="h-4 w-4" /><span>Training Guides</span></Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white flex items-center space-x-2"><ArrowRight className="h-4 w-4" /><span>Community Forum</span></Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white flex items-center space-x-2"><ArrowRight className="h-4 w-4" /><span>Certification</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Downloads</h4>
            <ul>
              <li><Link to="#" className="text-gray-400 hover:text-white flex items-center space-x-2"><Download className="h-4 w-4" /><span>Resource 1</span></Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white flex items-center space-x-2"><Download className="h-4 w-4" /><span>Resource 2</span></Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white flex items-center space-x-2"><Download className="h-4 w-4" /><span>Resource 3</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <p className="text-gray-400">
              Stay connected with us on social media.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-gray-400 hover:text-white"><ExternalLink className="h-5 w-5" /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><ExternalLink className="h-5 w-5" /></Link>
              <Link to="#" className="text-gray-400 hover:text-white"><ExternalLink className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-500">
            © 2024 CloudAdda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TrainerAdda;
