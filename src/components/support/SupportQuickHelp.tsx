
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Info, AlertCircle, Phone, Mail } from "lucide-react";

const SupportQuickHelp = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h3>
        
        <div className="space-y-4">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <CardTitle className="text-lg">System Status: All Good</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">All CloudAdda services are operating normally.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Common Issues</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Can't access my lab?</p>
                  <p className="text-sm text-gray-600">Check your internet connection and try refreshing the page.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Slow performance?</p>
                  <p className="text-sm text-gray-600">Close unnecessary browser tabs and applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Billing questions?</p>
                  <p className="text-sm text-gray-600">Check your account dashboard or contact billing support.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-red-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-lg text-red-800 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5" />
            <span>Emergency Support</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-700 mb-4">For critical issues affecting production systems:</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-red-600" />
              <span className="font-medium text-red-800">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-red-600" />
              <span className="font-medium text-red-800">emergency@cloudadda.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportQuickHelp;
