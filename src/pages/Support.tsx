
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Book, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Search,
  Download,
  ExternalLink,
  Users,
  FileText,
  Video,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "",
    category: "",
    description: ""
  });

  const { toast } = useToast();

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your support ticket has been created. We'll respond within 2 hours.",
      duration: 5000,
    });
    
    // Reset form
    setTicketForm({
      name: "",
      email: "",
      subject: "",
      priority: "",
      category: "",
      description: ""
    });
  };

  const handleTicketChange = (field: string, value: string) => {
    setTicketForm(prev => ({ ...prev, [field]: value }));
  };

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Support That 
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent"> Actually Helps</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Real humans. Real solutions. Available 24/7 to keep your infrastructure running smoothly.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">< 2hr Response Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">24/7 Human Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">99.9% Resolution Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                {/* Support Ticket Form */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Support Ticket</h2>
                  <p className="text-gray-600 mb-8">
                    Having an issue? Create a ticket and our support team will help you resolve it within 2 hours.
                  </p>

                  <form onSubmit={handleTicketSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          value={ticketForm.name}
                          onChange={(e) => handleTicketChange('name', e.target.value)}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={ticketForm.email}
                          onChange={(e) => handleTicketChange('email', e.target.value)}
                          required
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        value={ticketForm.subject}
                        onChange={(e) => handleTicketChange('subject', e.target.value)}
                        required
                        className="w-full"
                        placeholder="Brief description of the issue"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Priority
                        </label>
                        <Select value={ticketForm.priority} onValueChange={(value) => handleTicketChange('priority', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General question</SelectItem>
                            <SelectItem value="medium">Medium - Minor issue</SelectItem>
                            <SelectItem value="high">High - Service disruption</SelectItem>
                            <SelectItem value="critical">Critical - System down</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <Select value={ticketForm.category} onValueChange={(value) => handleTicketChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="training-labs">Training Labs</SelectItem>
                            <SelectItem value="cloud-desktops">Cloud Desktops</SelectItem>
                            <SelectItem value="vps">VPS Hosting</SelectItem>
                            <SelectItem value="billing">Billing & Account</SelectItem>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                      </label>
                      <Textarea
                        value={ticketForm.description}
                        onChange={(e) => handleTicketChange('description', e.target.value)}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Please provide detailed information about your issue, including any error messages, steps to reproduce, and what you've already tried..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg py-3"
                    >
                      Submit Ticket
                    </Button>
                  </form>
                </div>

                {/* Quick Help */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Help</h3>
                    
                    <div className="space-y-4">
                      <Card className="border-l-4 border-l-green-500">
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <CardTitle className="text-lg">System Status: All Good</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">All CloudAdda services are operating normally.</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">Common Issues</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-gray-900">Can't access my lab?</p>
                              <p className="text-sm text-gray-600">Check your internet connection and try refreshing the page.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-gray-900">Slow performance?</p>
                              <p className="text-sm text-gray-600">Close unnecessary browser tabs and applications.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Info className="w-4 h-4 text-blue-500 mt-0.5" />
                            <div>
                              <p className="font-medium text-gray-900">Billing questions?</p>
                              <p className="text-sm text-gray-600">Check your account dashboard or contact billing support.</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-800 flex items-center space-x-2">
                        <AlertCircle className="w-5 h-5" />
                        <span>Emergency Support</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-700 mb-4">For critical issues affecting production systems:</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-red-600" />
                          <span className="font-medium text-red-800">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-red-600" />
                          <span className="font-medium text-red-800">emergency@cloudadda.com</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
                          <span className="text-sm font-medium text-blue-600">< 100ms</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-600">Support Resolution</span>
                          <span className="text-sm font-medium text-purple-600">< 2 hours</span>
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
