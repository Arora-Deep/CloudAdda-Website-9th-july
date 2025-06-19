
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, CheckCircle, PlayCircle, FileText, BookOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";

const PlaybookView = () => {
  const { id } = useParams();
  
  const playbooks = [
    {
      id: 1,
      title: "AWS Certification Training Playbook",
      description: "Complete curriculum and lab setup for AWS certification preparation with hands-on exercises and real-world scenarios.",
      type: "Cloud Platform",
      duration: "4 weeks",
      modules: 12,
      difficulty: "Intermediate",
      prerequisites: ["Basic cloud knowledge", "Linux fundamentals"],
      learningObjectives: [
        "Master core AWS services",
        "Understand cloud architecture patterns",
        "Implement security best practices",
        "Design cost-effective solutions"
      ],
      moduleList: [
        { title: "Introduction to AWS", duration: "2 hours", type: "Theory + Lab" },
        { title: "EC2 and Compute Services", duration: "4 hours", type: "Hands-on Lab" },
        { title: "Storage Solutions (S3, EBS)", duration: "3 hours", type: "Practical Exercise" },
        { title: "Networking Fundamentals", duration: "3 hours", type: "Lab + Quiz" },
        { title: "Database Services", duration: "4 hours", type: "Project Work" },
        { title: "Security and Identity", duration: "3 hours", type: "Workshop" }
      ]
    },
    {
      id: 2,
      title: "DevOps Fundamentals Workshop",
      description: "Hands-on DevOps training with real-world scenarios, CI/CD pipelines, and infrastructure automation.",
      type: "DevOps",
      duration: "2 weeks",
      modules: 8,
      difficulty: "Beginner",
      prerequisites: ["Basic programming knowledge", "Command line familiarity"],
      learningObjectives: [
        "Understand DevOps principles",
        "Build CI/CD pipelines",
        "Automate infrastructure deployment",
        "Monitor and troubleshoot applications"
      ],
      moduleList: [
        { title: "DevOps Introduction", duration: "1.5 hours", type: "Theory" },
        { title: "Version Control with Git", duration: "2 hours", type: "Hands-on" },
        { title: "Continuous Integration", duration: "3 hours", type: "Lab Exercise" },
        { title: "Containerization with Docker", duration: "4 hours", type: "Workshop" }
      ]
    },
    {
      id: 3,
      title: "Kubernetes Mastery Program",
      description: "Advanced Kubernetes training with practical deployment scenarios, troubleshooting, and best practices.",
      type: "Container Orchestration",
      duration: "3 weeks",
      modules: 15,
      difficulty: "Advanced",
      prerequisites: ["Docker experience", "Linux administration", "Basic networking"],
      learningObjectives: [
        "Deploy and manage Kubernetes clusters",
        "Implement advanced networking",
        "Configure monitoring and logging",
        "Troubleshoot complex issues"
      ],
      moduleList: [
        { title: "Kubernetes Architecture", duration: "2 hours", type: "Deep Dive" },
        { title: "Pod and Service Management", duration: "3 hours", type: "Lab Exercise" },
        { title: "Advanced Networking", duration: "4 hours", type: "Practical Lab" },
        { title: "Storage and Persistence", duration: "3 hours", type: "Workshop" }
      ]
    }
  ];

  const playbook = playbooks.find(p => p.id === parseInt(id || '1')) || playbooks[0];

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
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200">{playbook.type}</Badge>
            <Badge variant="outline">{playbook.difficulty}</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{playbook.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{playbook.description}</p>
          
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {playbook.duration}
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              {playbook.modules} modules
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              {playbook.difficulty} level
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {playbook.learningObjectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Module Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlayCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Module Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playbook.moduleList.map((module, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{module.title}</h4>
                        <p className="text-sm text-gray-600">{module.type}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="text-xs">{module.duration}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {playbook.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Get Started */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Get Started</CardTitle>
                <CardDescription>
                  Ready to begin this training program?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Start Training
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaybookView;
