
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award, Users, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: "TechCorp's Digital Transformation Journey",
      description: "How TechCorp trained 500+ developers on cloud technologies in 6 months",
      company: "TechCorp",
      industry: "Technology",
      results: "500+ developers trained, 85% certification rate",
      challenge: "Legacy infrastructure training needs",
      solution: "Comprehensive cloud training program",
      outcome: "Successful digital transformation",
      category: "Enterprise Training",
      metrics: {
        participants: "500+",
        certificationRate: "85%",
        timeframe: "6 months",
        satisfaction: "92%"
      }
    },
    {
      id: 2,
      title: "StartupAccelerator's Bootcamp Success",
      description: "Scaling technical education for 50 startups simultaneously",
      company: "StartupAccelerator",
      industry: "Education",
      results: "50 startups, 200+ participants, 95% satisfaction",
      challenge: "Scaling technical education efficiently",
      solution: "Cloud-based training infrastructure",
      outcome: "Successful multi-cohort training delivery",
      category: "Bootcamp",
      metrics: {
        startups: "50",
        participants: "200+",
        satisfaction: "95%",
        completion: "88%"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-12">
          <Link to="/trainer-adda">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600">
            Real-world case studies showcasing transformative training outcomes and measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="border border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    {story.category}
                  </Badge>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{story.company}</div>
                    <div className="text-sm text-gray-500">{story.industry}</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">{story.title}</CardTitle>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {story.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(story.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="font-bold text-lg text-green-600">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Challenge</div>
                      <div className="text-gray-600">{story.challenge}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Solution</div>
                      <div className="text-gray-600">{story.solution}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Outcome</div>
                      <div className="text-gray-600">{story.outcome}</div>
                    </div>
                  </div>
                </div>

                <Link to={`/success-stories/${story.id}`}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Read Full Case Study
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
