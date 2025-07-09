
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PricingHero = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-block mb-8">
              <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200 text-sm font-medium px-4 py-2">
                <DollarSign className="w-4 h-4 mr-2" />
                Zero Waste Pricing
              </Badge>
            </div>
            <h1 className="text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
              <span className="text-purple-600">Pricing</span>
              <br />
              <span className="text-gray-900">That Makes</span>
              <br />
              <span className="text-orange-600">CFOs Smile</span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-2xl font-bold text-foreground">Zero waste. Full performance. Built to scale.</div>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl">
              At CloudAdda, we don't just offer pricing — we offer clarity. Whether you're running training labs, 
              deploying virtual desktops, or spinning up servers, every rupee delivers real-world value.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button size="lg" variant="orange" className="group">
                  <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <img 
                src="/lovable-uploads/c219099e-0e5b-49c8-83b1-e799238baebd.png" 
                alt="Business person with tablet sitting on piggy bank - cost savings" 
                className="w-full h-auto max-w-lg object-contain rounded-3xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
