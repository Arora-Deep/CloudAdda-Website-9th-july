
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Building, Users, Target, TrendingUp, Clock, CheckCircle, Quote } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CaseStudyView = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const caseStudies = {
    "techcorp-transformation": {
      title: "TechCorp's Digital Transformation Journey",
      description: "How TechCorp trained 500+ developers on cloud technologies in 6 months",
      company: "TechCorp",
      industry: "Technology",
      companySize: "5,000+ employees",
      duration: "6 months",
      category: "Enterprise Training",
      challenge: "TechCorp, a leading software company, needed to rapidly upskill their entire development team on modern cloud technologies to stay competitive in the market. They had 500+ developers spread across 15 global offices who needed comprehensive training on AWS, DevOps practices, and modern application development.",
      solution: "CloudAdda provided a comprehensive training infrastructure solution with dedicated lab environments for each developer. The training program was delivered in phases, allowing developers to learn while continuing their regular work responsibilities.",
      results: {
        trained: "500+ developers",
        certificationRate: "85%",
        timeToProductivity: "40% faster",
        costSavings: "$2.3M annually"
      },
      testimonial: "CloudAdda's platform transformed how we approach technical training. The hands-on labs were incredible, and our developers could practice real scenarios without affecting production systems.",
      testimonialAuthor: "Sarah Johnson",
      testimonialRole: "VP of Engineering, TechCorp",
      timeline: [
        {
          phase: "Phase 1: Assessment & Planning",
          duration: "2 weeks",
          activities: ["Skills assessment", "Curriculum design", "Infrastructure setup", "Pilot program"]
        },
        {
          phase: "Phase 2: Foundation Training",
          duration: "8 weeks",
          activities: ["Cloud fundamentals", "AWS core services", "Security basics", "Hands-on labs"]
        },
        {
          phase: "Phase 3: Advanced Topics",
          duration: "10 weeks",
          activities: ["DevOps practices", "Microservices architecture", "Container orchestration", "Advanced security"]
        },
        {
          phase: "Phase 4: Certification & Assessment",
          duration: "4 weeks",
          activities: ["Certification preparation", "Mock exams", "Final assessments", "Knowledge validation"]
        }
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "GitLab CI/CD"],
      keyMetrics: [
        { metric: "Training Completion Rate", value: "96%" },
        { metric: "AWS Certification Pass Rate", value: "85%" },
        { metric: "Time to Deploy New Features", improvement: "60% faster" },
        { metric: "Infrastructure Costs", improvement: "35% reduction" },
        { metric: "Developer Satisfaction", value: "9.2/10" },
        { metric: "Knowledge Retention", value: "92% after 3 months" }
      ]
    }
  };

  const study = caseStudies[id as keyof typeof caseStudies] || caseStudies["techcorp-transformation"];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <Link to="/trainer-adda" className="flex items-center space-x-2 text-orange-500 hover:text-orange-600">
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Badge className="bg-green-500 text-white">
              <Building className="w-3 h-3 mr-1" />
              {study.category}
            </Badge>
            <Badge variant="outline">{study.industry}</Badge>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              {study.companySize}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              {study.duration}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{study.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{study.description}</p>
        </div>

        {/* Key Results Highlight */}
        <Card className="mb-12 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <TrendingUp className="w-6 h-6 mr-2" />
              Key Results Achieved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{study.results.trained}</div>
                <div className="text-sm text-gray-600">Developers Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{study.results.certificationRate}</div>
                <div className="text-sm text-gray-600">Certification Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{study.results.timeToProductivity}</div>
                <div className="text-sm text-gray-600">Faster Productivity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{study.results.costSavings}</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Challenge */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-6 h-6 mr-2 text-red-500" />
              The Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed">{study.challenge}</p>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-blue-500" />
              The Solution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{study.solution}</p>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technologies Covered:</h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-blue-50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-6 h-6 mr-2 text-purple-500" />
              Implementation Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {study.timeline.map((phase, index) => (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    {index < study.timeline.length - 1 && <div className="w-0.5 h-16 bg-purple-200 mt-2"></div>}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                    <Badge variant="outline" className="mb-3">{phase.duration}</Badge>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-green-500" />
              Detailed Impact Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {study.keyMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{metric.metric}</span>
                  <span className="text-lg font-bold text-green-600">
                    {metric.value || metric.improvement}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonial */}
        <Card className="mb-12 bg-gray-50">
          <CardContent className="p-8">
            <Quote className="w-12 h-12 text-gray-400 mb-4" />
            <blockquote className="text-xl text-gray-800 mb-6 italic">
              "{study.testimonial}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{study.testimonialAuthor}</div>
                <div className="text-gray-600">{study.testimonialRole}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Training?</h3>
          <p className="text-gray-600 mb-6">See how CloudAdda can help you achieve similar results for your organization.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              View More Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyView;
