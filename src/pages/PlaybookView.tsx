
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, CheckCircle, Download, BookOpen, Users, Target, Star } from "lucide-react";
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
      overview: "This comprehensive AWS certification training playbook provides everything you need to successfully prepare your students for AWS certification exams. Built by industry experts with years of training experience.",
      objectives: [
        "Master core AWS services and their use cases",
        "Understand AWS pricing and cost optimization",
        "Implement security best practices",
        "Design scalable and resilient architectures",
        "Prepare for AWS certification exams"
      ],
      curriculum: [
        {
          week: 1,
          title: "AWS Fundamentals & Core Services",
          topics: ["AWS Global Infrastructure", "EC2 & Storage Services", "VPC & Networking", "IAM & Security"],
          labs: ["Setting up AWS Account", "Launching EC2 Instances", "Configuring VPC", "IAM Policies Lab"]
        },
        {
          week: 2,
          title: "Advanced Services & Integration",
          topics: ["RDS & Database Services", "Lambda & Serverless", "CloudFormation", "Monitoring & Logging"],
          labs: ["Database Migration Lab", "Serverless Application", "Infrastructure as Code", "CloudWatch Setup"]
        },
        {
          week: 3,
          title: "Security & Compliance",
          topics: ["Security Best Practices", "Compliance Frameworks", "Encryption & Key Management", "Incident Response"],
          labs: ["Security Assessment", "KMS Implementation", "Compliance Audit", "Security Automation"]
        },
        {
          week: 4,
          title: "Exam Preparation & Practice",
          topics: ["Exam Strategies", "Practice Tests", "Review Sessions", "Certification Planning"],
          labs: ["Mock Exams", "Hands-on Scenarios", "Troubleshooting Labs", "Final Assessment"]
        }
      ],
      resources: [
        "Instructor presentation slides (200+ slides)",
        "Lab environment setup scripts",
        "Student workbooks and exercises",
        "Assessment rubrics and quizzes",
        "Real-world case studies",
        "Certification exam vouchers guidance"
      ]
    }
  };

  const playbook = playbooks[id as keyof typeof playbooks] || playbooks["aws-certification"];

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
            <Badge className="bg-blue-500 text-white">{playbook.type}</Badge>
            <Badge variant="outline">{playbook.difficulty}</Badge>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              {playbook.duration}
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              {playbook.participants}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{playbook.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{playbook.description}</p>
          <p className="text-lg text-gray-700">{playbook.overview}</p>
        </div>

        {/* Learning Objectives */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-6 h-6 mr-2 text-orange-500" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {playbook.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Curriculum */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
              Weekly Curriculum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {playbook.curriculum.map((week, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Week {week.week}: {week.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {week.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Hands-on Labs:</h4>
                      <ul className="space-y-2">
                        {week.labs.map((lab, labIndex) => (
                          <li key={labIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{lab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources Included */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Download className="w-6 h-6 mr-2 text-purple-500" />
              Resources Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {playbook.resources.map((resource, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{resource}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Use This Playbook?</h3>
          <p className="text-gray-600 mb-6">Get started with CloudAdda's training infrastructure to deliver this course.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Download Sample Materials
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaybookView;
