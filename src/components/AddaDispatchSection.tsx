
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Bell, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const AddaDispatchSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold">Adda Dispatch</h2>
            </div>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Stay ahead of the curve with our weekly newsletter. Get insider insights, 
              industry trends, and practical tips delivered straight to your inbox.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-purple-200" />
                <span className="text-purple-100">Latest cloud industry trends and analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-purple-200" />
                <span className="text-purple-100">Product updates and new feature announcements</span>
              </div>
              <div className="flex items-center space-x-3">
                <Newspaper className="w-5 h-5 text-purple-200" />
                <span className="text-purple-100">Exclusive content and best practices</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                Subscribe Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Sample Issue
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Latest Issue Highlights</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="font-semibold text-white mb-2">🚀 The Future of Cloud Training</h4>
                <p className="text-purple-100 text-sm">How AI is revolutionizing technical education</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="font-semibold text-white mb-2">💡 Cost Optimization Secrets</h4>
                <p className="text-purple-100 text-sm">5 strategies that saved companies $2M+ annually</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <h4 className="font-semibold text-white mb-2">📊 Industry Report</h4>
                <p className="text-purple-100 text-sm">Q4 cloud adoption trends and predictions</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <span className="text-purple-200 text-sm">Join 15,000+ cloud professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddaDispatchSection;
