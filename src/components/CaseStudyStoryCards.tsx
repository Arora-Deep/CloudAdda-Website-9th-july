
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Building, Users, Target, TrendingUp, Quote, CheckCircle, Lightbulb, Award } from "lucide-react";

interface CaseStudySlide {
  title: string;
  content: string;
  icon: React.ElementType;
  color: string;
}

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  logo: string;
  slides: CaseStudySlide[];
}

const caseStudyData: CaseStudy = {
  id: "techcorp-transformation",
  company: "TechCorp Solutions",
  industry: "Technology & Software",
  logo: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
  slides: [
    {
      title: "The Challenge",
      content: "TechCorp needed to rapidly upskill their entire development team of 500+ developers on modern cloud technologies across 15 global offices. Traditional training methods were too slow and expensive, creating bottlenecks in their digital transformation initiative.",
      icon: Target,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "The Solution",
      content: "CloudAdda provided comprehensive training infrastructure with dedicated lab environments, allowing developers to learn while continuing their regular work responsibilities. Custom learning paths were created for different skill levels and departments.",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Implementation",
      content: "The rollout was phased over 6 months, starting with team leads and senior developers. Each developer received access to personal cloud environments with pre-configured scenarios matching their daily work challenges.",
      icon: Building,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Results Achieved",
      content: "500+ developers trained with an 85% certification rate. Time to productivity for new cloud projects decreased by 40%, resulting in $2.3M annual cost savings. Developer satisfaction scores increased by 60%.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Client Testimonial",
      content: "\"CloudAdda's platform transformed how we approach technical training. The hands-on labs were incredible, and our team's confidence in cloud technologies skyrocketed. We've never seen such engagement in a training program.\" - Sarah Johnson, VP of Engineering",
      icon: Quote,
      color: "from-orange-500 to-pink-500"
    }
  ]
};

const CaseStudyStoryCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudyData.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudyData.slides.length) % caseStudyData.slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = caseStudyData.slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <img 
              src={caseStudyData.logo} 
              alt={caseStudyData.company}
              className="h-16 w-auto object-contain mr-4"
            />
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900">{caseStudyData.company}</h1>
              <Badge className="bg-blue-500 text-white mt-2">
                <Building className="w-3 h-3 mr-1" />
                {caseStudyData.industry}
              </Badge>
            </div>
          </div>
          <p className="text-xl text-gray-600">A comprehensive case study of digital transformation success</p>
        </div>

        {/* Navigation Pills */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-2">
              {caseStudyData.slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Slide Card */}
        <Card className="overflow-hidden shadow-2xl border-0">
          <div className={`bg-gradient-to-r ${currentSlideData.color} p-2`}>
            <CardContent className="bg-white m-2 rounded-lg p-12">
              <div className="flex items-center justify-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-r ${currentSlideData.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">{currentSlideData.title}</h2>
                <p className="text-xl leading-relaxed text-gray-700 mb-12">
                  {currentSlideData.content}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mt-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Slide {currentSlide + 1} of {caseStudyData.slides.length}
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round(((currentSlide + 1) / caseStudyData.slides.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${currentSlideData.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${((currentSlide + 1) / caseStudyData.slides.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </Button>

          <div className="flex space-x-2">
            {caseStudyData.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            size="lg" 
            onClick={nextSlide} 
            disabled={currentSlide === caseStudyData.slides.length - 1}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* CTA Section */}
        {currentSlide === caseStudyData.slides.length - 1 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl p-8 text-white">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join hundreds of companies that have transformed their teams with CloudAdda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                  Start Your Transformation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View More Case Studies
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyStoryCards;
