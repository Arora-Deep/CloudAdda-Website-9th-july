
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle, Download, BookOpen, Users, Target, Star, Calendar, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const PlaybookView = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const playbooks = {
    "aws-certification": {
      title: "AWS Certification Training Playbook",
      description: "Complete curriculum and lab setup for AWS certification preparation",
      type: "Cloud Platform",
      duration: "4 weeks",
      difficulty: "Intermediate",
      participants: "25-30 learners",
      author: "Rajesh Kumar",
      authorTitle: "Senior Cloud Architect",
      publishDate: "December 15, 2024",
      readTime: "12 min read",
      tags: ["AWS", "Certification", "Cloud Computing", "Training"],
      overview: "This comprehensive AWS certification training playbook provides everything you need to successfully prepare your students for AWS certification exams. Built by industry experts with years of training experience, this playbook has been battle-tested across 200+ training sessions.",
      objectives: [
        "Master core AWS services and their use cases",
        "Understand AWS pricing and cost optimization strategies",
        "Implement security best practices and compliance frameworks",
        "Design scalable and resilient cloud architectures",
        "Successfully pass AWS certification exams with 95%+ success rate"
      ],
      curriculum: [
        {
          week: 1,
          title: "AWS Fundamentals & Core Services",
          topics: ["AWS Global Infrastructure & Regions", "EC2 & Elastic Storage Services", "VPC & Advanced Networking", "IAM & Security Foundations"],
          labs: ["Multi-Region AWS Account Setup", "Auto-Scaling EC2 Deployment", "Complex VPC Configuration", "Advanced IAM Policies Lab"]
        },
        {
          week: 2,
          title: "Advanced Services & Integration",
          topics: ["RDS & Database Migration Services", "Lambda & Serverless Architecture", "CloudFormation & CDK", "CloudWatch & X-Ray Monitoring"],
          labs: ["Database Migration Project", "Serverless Application Pipeline", "Infrastructure as Code Deployment", "Advanced Monitoring Setup"]
        },
        {
          week: 3,
          title: "Security & Compliance Excellence",
          topics: ["Advanced Security Best Practices", "SOC 2 & HIPAA Compliance", "KMS & Secrets Manager", "Security Incident Response"],
          labs: ["Enterprise Security Assessment", "End-to-End Encryption Implementation", "Compliance Audit Simulation", "Automated Security Response"]
        },
        {
          week: 4,
          title: "Certification Mastery & Career Preparation",
          topics: ["Exam Strategy & Time Management", "Advanced Practice Scenarios", "Industry Case Study Review", "Career Advancement Planning"],
          labs: ["Full-Length Mock Exams", "Real-World Architecture Scenarios", "Troubleshooting Challenge Labs", "Capstone Project Presentation"]
        }
      ],
      resources: [
        "300+ professionally designed presentation slides",
        "Automated lab environment provisioning scripts",
        "Comprehensive student workbooks with exercises",
        "Industry-standard assessment rubrics and quizzes",
        "12 detailed real-world case studies",
        "Certification exam voucher procurement guidance",
        "Access to exclusive trainer community forum",
        "Quarterly curriculum updates and improvements"
      ]
    }
  };

  const playbook = playbooks[id as keyof typeof playbooks] || playbooks["aws-certification"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <Link to="/trainer-adda" className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>
          </div>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
              {playbook.type}
            </Badge>
            <Badge variant="outline" className="px-3 py-1 text-sm">
              {playbook.difficulty}
            </Badge>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span className="text-sm">{playbook.readTime}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm">{playbook.publishDate}</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {playbook.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {playbook.description}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-lg">{playbook.author}</div>
                <div className="text-gray-600">{playbook.authorTitle}</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {playbook.participants}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {playbook.duration}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {playbook.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Overview */}
        <section className="mb-12">
          <Card className="border-l-4 border-l-blue-500 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">{playbook.overview}</p>
            </CardContent>
          </Card>
        </section>

        {/* Learning Objectives */}
        <section className="mb-12">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <Target className="w-6 h-6 mr-3 text-orange-500" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {playbook.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Curriculum */}
        <section className="mb-12">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <BookOpen className="w-6 h-6 mr-3 text-blue-500" />
                Weekly Curriculum Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {playbook.curriculum.map((week, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {week.week}
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Week {week.week}: {week.title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h4 className="font-medium text-blue-900 mb-3 flex items-center">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Topics Covered
                            </h4>
                            <ul className="space-y-2">
                              {week.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-blue-800 text-sm">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-medium text-green-900 mb-3 flex items-center">
                              <Target className="w-4 h-4 mr-2" />
                              Hands-on Labs
                            </h4>
                            <ul className="space-y-2">
                              {week.labs.map((lab, labIndex) => (
                                <li key={labIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-green-800 text-sm">{lab}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < playbook.curriculum.length - 1 && (
                      <div className="absolute left-4 top-12 w-px h-8 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <Download className="w-6 h-6 mr-3 text-purple-500" />
                Complete Resource Package
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {playbook.resources.map((resource, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Star className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-purple-900">{resource}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Training?</h3>
          <p className="text-xl mb-8 opacity-90">
            Get access to this playbook and start delivering world-class cloud training today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Playbooks
            </Button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default PlaybookView;
