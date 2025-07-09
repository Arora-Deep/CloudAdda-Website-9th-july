
import React from 'react';
import { Link } from 'react-router-dom';

const VPSFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400">
              Premium VPS hosting solutions with unmatched performance and reliability.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">VPS Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/vps" className="hover:text-white">Managed VPS</Link></li>
              <li><Link to="/vps" className="hover:text-white">Unmanaged VPS</Link></li>
              <li><Link to="/vps" className="hover:text-white">Windows VPS</Link></li>
              <li><Link to="/vps" className="hover:text-white">Linux VPS</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/support" className="hover:text-white">24/7 Support</Link></li>
              <li><Link to="/support" className="hover:text-white">Knowledge Base</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/support" className="hover:text-white">Server Status</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CloudAdda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default VPSFooter;
