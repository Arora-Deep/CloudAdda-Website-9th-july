
import { Link } from "react-router-dom";

const CloudDesktopsFooter = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/7dbdbf50-fd3e-44fd-ae94-47ff369c1d01.png" alt="CloudAdda Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl">CloudAdda</span>
            </div>
            <p className="text-gray-400">
              Born in India, Built for the World. Infrastructure that just works.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => handleNavigation('/training-labs')} className="hover:text-white transition-colors text-left">Training Labs</button></li>
              <li><button onClick={() => handleNavigation('/cloud-desktops')} className="hover:text-white transition-colors text-left">Virtual Desktops</button></li>
              <li><button onClick={() => handleNavigation('/vps')} className="hover:text-white transition-colors text-left">VPS</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors text-left">Custom Solutions</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => handleNavigation('/about')} className="hover:text-white transition-colors text-left">About Us</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors text-left">Careers</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors text-left">Press</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors text-left">Documentation</button></li>
              <li><button onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors text-left">Help Center</button></li>
              <li><button onClick={() => handleNavigation('/trainer-adda')} className="hover:text-white transition-colors text-left">Community</button></li>
              <li><button onClick={() => handleNavigation('/support')} className="hover:text-white transition-colors text-left">Status</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => handleNavigation('/privacy-policy')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavigation('/terms-of-service')} className="text-gray-400 hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CloudDesktopsFooter;
