
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VPSFinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience High-Performance VPS?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who have upgraded to our premium VPS hosting. 
          Get started today with our 30-day money-back guarantee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact">
            <Button className="bg-white text-orange-500 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold">
              Start Your VPS Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>Live Chat</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm opacity-90">
          <p>30-day money-back guarantee • No setup fees • Free migration assistance</p>
        </div>
      </div>
    </section>
  );
};

export default VPSFinalCTA;
