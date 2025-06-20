
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen, Lightbulb } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BlogView = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const posts = {
    "building-effective-cloud-training": {
      title: "Building Effective Cloud Training Programs",
      description: "A comprehensive guide to designing and implementing cloud training curricula that drive real results.",
      category: "Training Strategy",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Priya Sharma",
      authorBio: "Senior Training Architect at CloudAdda with 10+ years in enterprise training",
      content: `
        <p>In today's rapidly evolving technology landscape, cloud computing has become the backbone of modern business operations. Organizations worldwide are racing to adopt cloud technologies, creating an unprecedented demand for skilled cloud professionals.</p>

        <h2>The Challenge of Cloud Training</h2>
        <p>Training teams face unique challenges when designing cloud curricula. Unlike traditional IT training, cloud technologies are constantly evolving, require hands-on practice, and demand both theoretical knowledge and practical skills.</p>

        <h3>Key Success Factors</h3>
        <p>After working with hundreds of training organizations, we've identified several critical success factors:</p>
        
        <ul>
          <li><strong>Hands-on Practice:</strong> Students learn best by doing. Theoretical knowledge alone isn't sufficient in cloud training.</li>
          <li><strong>Real-world Scenarios:</strong> Use actual business cases and problems that students will encounter in their careers.</li>
          <li><strong>Progressive Complexity:</strong> Start with basics and gradually introduce advanced concepts.</li>
          <li><strong>Industry Alignment:</strong> Ensure curriculum matches current industry demands and certification requirements.</li>
        </ul>

        <h2>Designing Your Curriculum</h2>
        <p>A well-designed cloud training curriculum should follow a structured approach:</p>

        <h3>1. Foundation Phase (Week 1-2)</h3>
        <p>Begin with cloud fundamentals, basic concepts, and terminology. Students should understand:</p>
        <ul>
          <li>What cloud computing is and its benefits</li>
          <li>Different service models (IaaS, PaaS, SaaS)</li>
          <li>Major cloud providers and their offerings</li>
          <li>Basic security and compliance concepts</li>
        </ul>

        <h3>2. Core Services Phase (Week 3-6)</h3>
        <p>Dive deep into core cloud services with extensive hands-on labs:</p>
        <ul>
          <li>Compute services and virtual machines</li>
          <li>Storage solutions and data management</li>
          <li>Networking and connectivity</li>
          <li>Identity and access management</li>
        </ul>

        <h3>3. Advanced Topics Phase (Week 7-10)</h3>
        <p>Cover advanced concepts and specialized services:</p>
        <ul>
          <li>Serverless computing and microservices</li>
          <li>DevOps and CI/CD pipelines</li>
          <li>Monitoring, logging, and optimization</li>
          <li>Advanced security and compliance</li>
        </ul>

        <h3>4. Capstone Project Phase (Week 11-12)</h3>
        <p>Students work on real-world projects that demonstrate their skills:</p>
        <ul>
          <li>Design and implement a complete cloud solution</li>
          <li>Present to industry professionals</li>
          <li>Receive feedback and iterate</li>
        </ul>

        <h2>Best Practices for Implementation</h2>

        <h3>Infrastructure Requirements</h3>
        <p>Successful cloud training requires reliable, scalable infrastructure. Consider these requirements:</p>
        <ul>
          <li>Individual lab environments for each student</li>
          <li>Pre-configured templates and scenarios</li>
          <li>Automated setup and teardown processes</li>
          <li>Cost monitoring and budget controls</li>
        </ul>

        <h3>Assessment and Feedback</h3>
        <p>Regular assessment ensures students are progressing effectively:</p>
        <ul>
          <li>Weekly practical assessments</li>
          <li>Peer review sessions</li>
          <li>Industry mentor feedback</li>
          <li>Mock certification exams</li>
        </ul>

        <h2>Measuring Success</h2>
        <p>Track these key metrics to ensure your program's effectiveness:</p>
        <ul>
          <li><strong>Completion Rate:</strong> Percentage of students who complete the program</li>
          <li><strong>Certification Pass Rate:</strong> Success rate on industry certifications</li>
          <li><strong>Job Placement Rate:</strong> Employment success within 6 months</li>
          <li><strong>Student Satisfaction:</strong> Feedback scores and testimonials</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Building effective cloud training programs requires careful planning, the right infrastructure, and continuous iteration based on student feedback and industry trends. By following these guidelines and focusing on hands-on learning, you can create programs that truly prepare students for successful cloud careers.</p>

        <p>Remember, the cloud landscape evolves rapidly. Stay connected with industry professionals, update your curriculum regularly, and always prioritize practical, hands-on learning experiences.</p>
      `
    }
  };

  const post = posts[id as keyof typeof posts] || posts["building-effective-cloud-training"];

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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <Badge className="bg-orange-500 text-white">
              <Lightbulb className="w-3 h-3 mr-1" />
              {post.category}
            </Badge>
            <div className="flex items-center text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{post.description}</p>
          
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-600">{post.authorBio}</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-500">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            lineHeight: '1.7',
            fontSize: '18px'
          }}
        />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Training Program?</h3>
            <p className="text-gray-600 mb-6">Get the infrastructure and resources you need to deliver world-class training.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Explore More Resources
              </Button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogView;
