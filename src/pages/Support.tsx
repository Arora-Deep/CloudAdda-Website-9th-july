import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle, 
  Search,
  Download,
  ExternalLink,
  Users,
  FileText,
  Video,
  HelpCircle,
  Info,
  Clock
} from "lucide-react";
import SupportHero from "@/components/support/SupportHero";
import SupportTicketForm from "@/components/support/SupportTicketForm";
import SupportQuickHelp from "@/components/support/SupportQuickHelp";

const Support = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/ab89b288-4111-435f-8c60-3551cd55182c.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <SupportHero />

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="help" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="help" className="flex items-center space-x-2">
                <HelpCircle className="w-4 h-4" />
                <span>Get Help</span>
              </TabsTrigger>
              <TabsTrigger value="docs" className="flex items-center space-x-2">
                <Book className="w-4 h-4" />
                <span>Documentation</span>
              </TabsTrigger>
              <TabsTrigger value="status" className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Service Status</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="help" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <SupportTicketForm />
                <SupportQuickHelp />
              </div>
            </TabsContent>

            <TabsContent value="docs" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Book,
                    title: "Getting Started",
                    description: "Quick setup guides and tutorials",
                    items: ["Account Setup", "First Lab Creation", "User Management", "Basic Configuration"]
                  },
                  {
                    icon: Video,
                    title: "Video Tutorials",
                    description: "Step-by-step video guides",
                    items: ["Platform Overview", "Advanced Features", "Troubleshooting", "Best Practices"]
                  },
                  {
                    icon: FileText,
                    title: "API Documentation",
                    description: "Technical integration guides",
                    items: ["REST API", "Webhooks", "SDKs", "Code Examples"]
                  }
                ].map((section, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <section.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                      </div>
                      <CardDescription>{section.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 cursor-pointer">
                            <ExternalLink className="w-4 h-4" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="status" className="space-y-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">All Systems Operational</span>
                </div>
                <p className="text-gray-600">All CloudAdda services are running smoothly</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Training Labs", status: "operational" },
                      { name: "Cloud Desktops", status: "operational" },
                      { name: "VPS Hosting", status: "operational" },
                      { name: "API Services", status: "operational" },
                      { name: "Dashboard", status: "operational" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-700">{service.name}</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Operational
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Uptime (30 days)</span>
                          <span className="text-sm font-medium text-green-600">99.98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '99.98%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Response Time</span>
                          <span className="text-sm font-medium text-blue-600">Less than 100ms</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Support Resolution</span>
                          <span className="text-sm font-medium text-purple-600">Less than 2 hours</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '98%'}}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Multiple ways to reach our support team. We're here to help 24/7.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                        <p className="text-gray-600 mb-2">Get instant help from our support team</p>
                        <Button variant="outline" size="sm">Start Chat</Button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                        <p className="text-gray-600">support@cloudadda.com</p>
                        <p className="text-sm text-gray-500">Response within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone Support</h4>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-sm text-gray-500">24/7 availability</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-purple-800">Support Commitment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">2-hour response guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Talk to real engineers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">99.9% issue resolution rate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">Proactive monitoring & alerts</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Support;
