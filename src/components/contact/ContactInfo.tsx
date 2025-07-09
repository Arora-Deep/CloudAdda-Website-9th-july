
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Zap, Users, Shield, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600">hello@cloudadda.com</p>
              <p className="text-gray-600">support@cloudadda.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
              <p className="text-gray-600">Available 24/7 for support</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
              <p className="text-gray-600">Bengaluru, India</p>
              <p className="text-gray-600">Serving clients globally</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
              <p className="text-gray-600">Within 2 hours</p>
              <p className="text-gray-600">Business hours: 9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>

      <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-xl text-purple-800">Why Choose CloudAdda?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-gray-700">Setup in hours, not weeks</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">24/7 human support</span>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">99.9% uptime guarantee</span>
          </div>
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700">Transparent pricing</span>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900">Quick Actions</h4>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/pricing">
            <Button variant="outline" className="w-full justify-start">
              View Pricing
            </Button>
          </Link>
          <Link to="/support">
            <Button variant="outline" className="w-full justify-start">
              Get Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
