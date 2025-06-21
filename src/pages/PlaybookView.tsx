import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Download, BookOpen, Target, Users, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";

const PlaybookView = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const playbooks = {
    "effective-lab-management": {
      title: "Effective Lab Management Playbook",
      description: "Best practices for managing cloud training labs at scale",
      category: "Training Operations",
      readTime: "12 min read",
      date: "Jan 22, 2025",
      author: "Arjun Patel",
      authorBio: "Cloud Training Expert with 15+ years experience",
      heroImage: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      contentImage: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      views: "1.8k",
      downloads: "322",
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">Managing cloud training labs effectively is crucial for delivering high-quality learning experiences. This playbook provides actionable strategies and best practices to optimize your lab operations.</p>
        </div>

        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Challenges in Lab Management</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Training teams often face challenges such as:</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Cost Control:</strong>
              <span class="text-gray-700"> Managing cloud resource costs effectively.</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Scalability:</strong>
              <span class="text-gray-700"> Scaling lab environments to accommodate varying student numbers.</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Security:</strong>
              <span class="text-gray-700"> Ensuring secure access and data protection.</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Consistency:</strong>
              <span class="text-gray-700"> Maintaining consistent lab environments across all students.</span>
            </div>
          </li>
        </ul>

        <h2 id="heading-1" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Best Practices for Effective Lab Management</h2>

        <h3 id="heading-2" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">1. Standardize Lab Environments</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Use infrastructure-as-code (IaC) tools like Terraform or CloudFormation to define and provision lab environments. This ensures consistency and repeatability.</p>

        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Version control your IaC templates</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Automate environment provisioning and teardown</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Use pre-built images and templates</span>
            </li>
          </ul>
        </div>

        <h3 id="heading-3" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">2. Implement Cost Management Strategies</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Monitor and optimize cloud resource usage to minimize costs.</p>
        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Set budget alerts and spending limits</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Schedule lab environments to run only when needed</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Use cost-effective instance types</span>
            </li>
          </ul>
        </div>

        <h3 id="heading-4" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">3. Automate Lab Provisioning</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Automate the process of creating and configuring lab environments for each student.</p>
        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Use APIs and SDKs to integrate with your learning management system (LMS)</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Implement self-service portals for students to request labs</span>
            </li>
          </ul>
        </div>

        <h3 id="heading-5" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">4. Implement Access Controls and Security</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Secure lab environments by implementing strict access controls and security measures.</p>
        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Use identity and access management (IAM) roles to control access to resources</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Enable multi-factor authentication (MFA)</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Regularly audit and review access permissions</span>
            </li>
          </ul>
        </div>

        <h3 id="heading-6" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">5. Monitor Lab Usage and Performance</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Track lab usage and performance metrics to identify areas for improvement.</p>
        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Monitor resource utilization (CPU, memory, disk)</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Track lab creation and teardown times</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Collect student feedback on lab experience</span>
            </li>
          </ul>
        </div>

        <h2 id="heading-7" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Tools and Technologies</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Consider using the following tools and technologies to enhance your lab management:</p>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h4 class="font-semibold text-blue-900 mb-3">Terraform</h4>
            <p class="text-blue-800">Infrastructure-as-code tool for provisioning and managing cloud resources.</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl">
            <h4 class="font-semibold text-green-900 mb-3">Ansible</h4>
            <p class="text-green-800">Automation tool for configuring and managing systems.</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl">
            <h4 class="font-semibold text-purple-900 mb-3">Docker</h4>
            <p class="text-purple-800">Containerization platform for creating consistent lab environments.</p>
          </div>
          <div class="bg-orange-50 p-6 rounded-xl">
            <h4 class="font-semibold text-orange-900 mb-3">Kubernetes</h4>
            <p class="text-orange-800">Container orchestration platform for managing containerized labs.</p>
          </div>
        </div>

        <h2 id="heading-8" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Conclusion</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Effective lab management is essential for delivering successful cloud training programs. By implementing these best practices, you can optimize costs, improve scalability, and ensure a secure and consistent learning environment for your students.</p>
      `
    }
  };

  const playbook = playbooks[id as keyof typeof playbooks] || playbooks["effective-lab-management"];

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
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

      <div className="w-full h-80 relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600">
        <img 
          src={playbook.heroImage} 
          alt={playbook.title}
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-12">
          <Badge className="bg-orange-500 text-white mb-4">
            <Target className="w-4 h-4 mr-1" />
            {playbook.category}
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">{playbook.title}</h1>
          <p className="text-xl text-gray-200 italic">{playbook.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{playbook.author}</div>
                <div className="text-sm text-gray-600">{playbook.authorBio}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {playbook.readTime}
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-500">
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-gray-700">
              Get the complete guide to managing your training labs effectively.
            </p>
          </div>
        </div>

        {/* Main Content - Single column, wider */}
        <div className="flex gap-12 pb-12">
          {/* Content */}
          <article className="flex-1 max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: playbook.content }}
              />
            </div>

            <footer className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-12 text-white text-center mt-12">
              <BookOpen className="w-12 h-12 text-white mx-auto mb-4"  />
              <h3 className="text-3xl font-bold mb-4">Ready to Optimize Your Training Labs?</h3>
              <p className="text-xl mb-8 opacity-90">
                Get the infrastructure and resources you need to deliver world-class training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore More Resources
                </Button>
              </div>
            </footer>
          </article>

          {/* Right Sidebar - Social & CTA */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-24">
              <BlogSidebar content={playbook.content} showOnlyActions={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaybookView;
