
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Zap, Users, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const ZeroToLive = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
            Trainer Playbook
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Zero to Live — How to Deliver a Flawless Virtual Training Lab in 3 Hours
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The Playbook Every Modern Trainer Needs
          </p>
          <p className="text-lg text-gray-700">
            If you're still spending entire weekends setting up labs for Monday training — stop. There's a faster, smarter way.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-12">
            This guide walks you through exactly how to go from a training plan on paper to a fully functional, 
            cloud-hosted lab environment that's ready to teach in just 3 hours.
          </p>

          {/* Step 1 */}
          <Card className="mb-8 border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                Step 1: Define the Lab Environment
                <Badge className="ml-4 bg-purple-100 text-purple-800">30 min</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3">What you'll do:</h4>
              <ul className="space-y-2 mb-4">
                <li>• List tools and OS needed (Ubuntu, Windows, macOS?)</li>
                <li>• Define user count and concurrency</li>
                <li>• Include pre-installed packages (e.g. VS Code, Anaconda, Wireshark, MySQL)</li>
                <li>• Specify network configs, storage, and internet access</li>
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>Why it matters:</strong> A clear scope = zero back-and-forth during provisioning. 
                Good infra starts with great documentation.
              </p>
              <p className="text-purple-600 font-medium">
                Pro tip: Use our downloadable Lab Planning Worksheet to speed this up.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="mb-8 border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Zap className="w-6 h-6 text-orange-600 mr-3" />
                Step 2: Send It to CloudAdda
                <Badge className="ml-4 bg-orange-100 text-orange-800">5 min</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3">What you'll do:</h4>
              <ul className="space-y-2 mb-4">
                <li>• Email or submit the lab scope via the Lab Request Form</li>
                <li>• Hop on a quick call (15–20 min) with a CloudAdda infra expert</li>
              </ul>
              <p className="text-gray-600">
                <strong>Why it matters:</strong> CloudAdda doesn't give you a panel — it gives you people. 
                Real engineers who read your plan, understand your session goals, and build the lab for you.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="mb-8 border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                Step 3: Sit Back While It's Provisioned
                <Badge className="ml-4 bg-blue-100 text-blue-800">1.5 hr</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3">What happens:</h4>
              <ul className="space-y-2 mb-4">
                <li>• Your environment is built on high-performance infra (NVMe, AMD EPYC)</li>
                <li>• Custom configs, toolchains, and scaling are set up</li>
                <li>• The lab is tested for stability under load</li>
              </ul>
              <p className="text-gray-600">
                <strong>Why it matters:</strong> Most DIY labs crash under real-world usage. 
                Ours are purpose-built for 10 to 1,000 concurrent users. No surprises mid-session.
              </p>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="mb-8 border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="w-6 h-6 text-green-600 mr-3" />
                Step 4: Final Review & Go Live
                <Badge className="ml-4 bg-green-100 text-green-800">1 hr</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3">What you'll do:</h4>
              <ul className="space-y-2 mb-4">
                <li>• Test instructor and student login links</li>
                <li>• Verify software, networking, file access, and control settings</li>
                <li>• Add optional branding or tracking (if needed)</li>
              </ul>
              <p className="text-gray-600">
                <strong>Why it matters:</strong> The final sanity check before you hit the classroom. 
                CloudAdda helps ensure everything is polished and production-grade.
              </p>
            </CardContent>
          </Card>

          {/* Summary Table */}
          <Card className="mb-12 bg-gradient-to-r from-purple-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">TL;DR — From Idea to Infra in 3 Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-3 font-semibold">Phase</th>
                      <th className="text-left p-3 font-semibold">What Happens</th>
                      <th className="text-left p-3 font-semibold">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Plan</td>
                      <td className="p-3">Define your exact lab needs</td>
                      <td className="p-3">30 min</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Submit</td>
                      <td className="p-3">Share with CloudAdda & discuss live</td>
                      <td className="p-3">30 min</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Provision</td>
                      <td className="p-3">CloudAdda builds and tests the lab</td>
                      <td className="p-3">1.5 hr</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium">Final Review</td>
                      <td className="p-3">You test and go live</td>
                      <td className="p-3">1 hr</td>
                    </tr>
                    <tr className="bg-purple-100">
                      <td className="p-3 font-bold">Total Time</td>
                      <td className="p-3 font-bold"></td>
                      <td className="p-3 font-bold">~3 hrs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Bonus Tools */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Bonus Tools:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Lab Planning Worksheet PDF
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Trainer Onboarding Checklist
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Go-Live Testing Script
                </Button>
                <Button variant="outline" className="justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Emergency Support Hotline Card
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-purple-600 to-orange-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                You're Live. You're in Control. You're Not Alone.
              </h3>
              <p className="text-lg mb-6">
                Your training environment is now running, monitored, and supported 24/7 by CloudAdda's real engineers. 
                Focus on what you do best — teaching.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Schedule a free consultation with our training lab engineers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ZeroToLive;
