
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Users, Clock, Shield } from "lucide-react";

const TrainingLabsDemo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            See CloudAdda Training Labs in <span className="text-orange-500">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how our platform makes it incredibly easy to provision, manage, and scale your training environments.
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Interactive Demo</h3>
              <p className="text-lg text-gray-700 mb-8">
                Get hands-on experience with our platform. See how quickly you can set up comprehensive 
                training environments for your students without any technical complexity.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Multi-user lab environments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Setup in under 5 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">Enterprise-grade security</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Play className="w-5 h-5 mr-2" />
                  Start Interactive Demo
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  Schedule Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Step 1: Choose Your Tech Stack</h4>
                  <p className="text-gray-600 text-sm">Select from 50+ pre-configured environments</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Step 2: Configure Resources</h4>
                  <p className="text-gray-600 text-sm">Set CPU, memory, and storage based on your needs</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Step 3: Deploy & Share</h4>
                  <p className="text-gray-600 text-sm">Instant deployment with secure student access</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-700 text-sm font-medium">Live Environment Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingLabsDemo;
