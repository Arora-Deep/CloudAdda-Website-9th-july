
import { Link } from "react-router-dom";

const CloudDesktopsFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl">CloudAdda</span>
            </div>
            <p className="text-gray-400">
              Born in India, Built for the World. Infrastructure that just works.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
              <li><Link to="/cloud-desktops" className="hover:text-white transition-colors">Virtual Desktops</Link></li>
              <li><Link to="/vps" className="hover:text-white transition-colors">VPS</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/support" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/trainer-adda" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CloudDesktopsFooter;
