
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, BookmarkPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: "Building Effective Cloud Training Programs",
      description: "A comprehensive guide to designing and implementing cloud training curricula that drive real results.",
      content: "Learn how to structure your cloud training programs for maximum impact...",
      category: "Training Strategy",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Priya Sharma",
      featured: true
    },
    {
      id: 2,
      title: "Remote Lab Management Best Practices",
      description: "Tips and tricks for managing virtual training environments across distributed teams.",
      content: "Managing remote training labs presents unique challenges...",
      category: "Technical Guide", 
      readTime: "12 min read",
      date: "Dec 12, 2024",
      author: "Rajesh Kumar",
      featured: false
    },
    {
      id: 3,
      title: "Cost Optimization for Training Infrastructure",
      description: "How to reduce training costs by 40% without compromising on quality or performance.",
      content: "Training infrastructure costs can quickly spiral out of control...",
      category: "Cost Management",
      readTime: "6 min read", 
      date: "Dec 10, 2024",
      author: "Anjali Mehta",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-8">
          <Link to="/trainer-adda">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Insights</h1>
          <p className="text-lg text-gray-600">
            In-depth tutorials, best practices, and technical guides for cloud infrastructure.
          </p>
        </div>

        <div className="space-y-8">
          {insights.map((insight) => (
            <Card key={insight.id} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{insight.category}</Badge>
                  {insight.featured && (
                    <Badge className="bg-orange-500 text-white">Featured</Badge>
                  )}
                </div>
                <Link to={`/insights/${insight.id}`}>
                  <CardTitle className="text-2xl text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                    {insight.title}
                  </CardTitle>
                </Link>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {insight.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {insight.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {insight.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <BookmarkPlus className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Link to={`/insights/${insight.id}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Read Full Article
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

export default Insights;
