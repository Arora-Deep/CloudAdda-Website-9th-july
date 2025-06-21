
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Building, Users, Target, TrendingUp, Quote, CheckCircle } from "lucide-react";

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  author: string;
  role: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "techcorp-transformation",
    company: "TechCorp",
    industry: "Technology",
    challenge: "TechCorp needed to rapidly upskill their entire development team of 500+ developers on modern cloud technologies across 15 global offices.",
    solution: "CloudAdda provided comprehensive training infrastructure with dedicated lab environments, allowing developers to learn while continuing their regular work responsibilities.",
    results: ["500+ developers trained", "85% certification rate", "40% faster time to productivity", "$2.3M annual cost savings"],
    testimonial: "CloudAdda's platform transformed how we approach technical training. The hands-on labs were incredible.",
    author: "Sarah Johnson",
    role: "VP of Engineering, TechCorp",
    image: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png"
  },
  {
    id: "edutech-scale",
    company: "EduTech Solutions",
    industry: "Education",
    challenge: "A growing EdTech company needed to scale their virtual classroom infrastructure to support 10,000+ concurrent students during peak hours.",
    solution: "CloudAdda deployed auto-scaling cloud desktop environments with optimized performance for educational applications and real-time collaboration tools.",
    results: ["10,000+ concurrent users", "99.9% uptime achieved", "50% cost reduction", "Zero student complaints"],
    testimonial: "The reliability and performance exceeded our expectations. Our students now have seamless learning experiences.",
    author: "Michael Chen",
    role: "CTO, EduTech Solutions",
    image: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png"
  },
  {
    id: "fintech-security",
    company: "SecureFinance",
    industry: "Financial Services",
    challenge: "A fintech startup required ultra-secure, compliant infrastructure for their trading platform while maintaining high performance and scalability.",
    solution: "CloudAdda implemented enterprise-grade security with dedicated VPS instances, compliance monitoring, and 24/7 security support.",
    results: ["100% compliance maintained", "Sub-10ms latency", "Zero security incidents", "300% user growth supported"],
    testimonial: "Security and performance in one package. CloudAdda made our regulatory compliance seamless.",
    author: "Amanda Rodriguez",
    role: "Head of Infrastructure, SecureFinance",
    image: "/lovable-uploads/c219099e-0e5b-49c8-83b1-e799238baebd.png"
  }
];

const CaseStudyStoryCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-500 text-white">
              <Building className="w-3 h-3 mr-1" />
              Case Study {currentIndex + 1} of {caseStudies.length}
            </Badge>
            <h1 className="text-2xl font-bold text-gray-900">{currentStudy.company} Success Story</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentIndex === 0}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentIndex === caseStudies.length - 1}>
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Main Story Card */}
        <Card className="overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Image and Company Info */}
            <div className="relative bg-gradient-to-br from-orange-500 to-purple-600 p-12 flex flex-col justify-center">
              <div className="text-white">
                <Badge className="bg-white/20 text-white mb-4">{currentStudy.industry}</Badge>
                <h2 className="text-4xl font-bold mb-4">{currentStudy.company}</h2>
                <div className="space-y-4">
                  {currentStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <span className="text-lg">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              <img 
                src={currentStudy.image} 
                alt={currentStudy.company}
                className="absolute bottom-0 right-0 w-32 h-32 object-cover rounded-tl-3xl opacity-20"
              />
            </div>

            {/* Right Side - Story Content */}
            <CardContent className="p-12">
              <div className="space-y-8">
                {/* Challenge */}
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-red-500 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{currentStudy.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-2" />
                    <h3 className="text-2xl font-bold text-gray-900">The Solution</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{currentStudy.solution}</p>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <Quote className="w-12 h-12 text-gray-400 mb-4" />
                  <blockquote className="text-xl text-gray-800 mb-6 italic">
                    "{currentStudy.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{currentStudy.author}</div>
                      <div className="text-gray-600">{currentStudy.role}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                    Get Similar Results
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyStoryCards;
