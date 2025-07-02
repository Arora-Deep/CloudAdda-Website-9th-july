import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen, Lightbulb, Eye, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";

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
      heroImage: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      contentImage: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      views: "2.4k",
      likes: "156",
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">In today's rapidly evolving technology landscape, cloud computing has become the backbone of modern business operations. Organizations worldwide are racing to adopt cloud technologies, creating an unprecedented demand for skilled cloud professionals.</p>
        </div>

        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Challenge of Cloud Training</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Training teams face unique challenges when designing cloud curricula. Unlike traditional IT training, cloud technologies are constantly evolving, require hands-on practice, and demand both theoretical knowledge and practical skills.</p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p class="text-blue-900 font-medium text-lg italic">"The most effective cloud training programs combine theoretical foundations with intensive hands-on practice in real-world scenarios."</p>
        </div>

        <h3 id="heading-1" class="text-2xl font-semibold text-gray-900 mt-10 mb-4">Key Success Factors</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">After working with hundreds of training organizations, we've identified several critical success factors:</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Hands-on Practice:</strong>
              <span class="text-gray-700"> Students learn best by doing. Theoretical knowledge alone isn't sufficient in cloud training.</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Real-world Scenarios:</strong>
              <span class="text-gray-700"> Use actual business cases and problems that students will encounter in their careers.</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Progressive Complexity:</strong>
              <span class="text-gray-700"> Start with basics and gradually introduce advanced concepts.</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Industry Alignment:</strong>
              <span class="text-gray-700"> Ensure curriculum matches current industry demands and certification requirements.</span>
            </div>
          </li>
        </ul>

        <div class="my-12">
          <img src="/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png" alt="Cloud Training Infrastructure" class="w-full rounded-2xl shadow-lg" />
          <p class="text-center text-gray-500 text-sm mt-4 italic">Modern cloud training requires sophisticated infrastructure and real-world practice environments</p>
        </div>

        <h2 id="heading-2" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Designing Your Curriculum</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">A well-designed cloud training curriculum should follow a structured approach that builds competency progressively while maintaining student engagement through practical applications.</p>

        <div class="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-2xl my-10">
          <h3 id="heading-3" class="text-2xl font-semibold text-gray-900 mb-6">1. Foundation Phase (Week 1-2)</h3>
          <p class="text-lg text-gray-700 mb-4">Begin with cloud fundamentals, basic concepts, and terminology. Students should understand:</p>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span class="text-gray-700">What cloud computing is and its benefits</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span class="text-gray-700">Different service models (IaaS, PaaS, SaaS)</span>
              </li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span class="text-gray-700">Major cloud providers and their offerings</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span class="text-gray-700">Basic security and compliance concepts</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl my-10">
          <h3 id="heading-4" class="text-2xl font-semibold text-gray-900 mb-6">2. Core Services Phase (Week 3-6)</h3>
          <p class="text-lg text-gray-700 mb-4">Dive deep into core cloud services with extensive hands-on labs:</p>
          <div class="grid md:grid-cols-2 gap-4">
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700">Compute services and virtual machines</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700">Storage solutions and data management</span>
              </li>
            </ul>
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                <span class="text-gray-700">Networking and connectivity</span>
              </li>
              <li class="flex items-center space-x-2">
                <div class="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                <span class="text-gray-700">Identity and access management</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 id="heading-5" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Best Practices for Implementation</h2>

        <h3 id="heading-6" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">Infrastructure Requirements</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Successful cloud training requires reliable, scalable infrastructure. Consider these requirements:</p>
        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Individual lab environments for each student</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Pre-configured templates and scenarios</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Automated setup and teardown processes</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Cost monitoring and budget controls</span>
            </li>
          </ul>
        </div>

        <h2 id="heading-7" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Measuring Success</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Track these key metrics to ensure your program's effectiveness:</p>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h4 class="font-semibold text-blue-900 mb-3">Completion Rate</h4>
            <p class="text-blue-800">Percentage of students who complete the program</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl">
            <h4 class="font-semibold text-green-900 mb-3">Certification Pass Rate</h4>
            <p class="text-green-800">Success rate on industry certifications</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl">
            <h4 class="font-semibold text-purple-900 mb-3">Job Placement Rate</h4>
            <p class="text-purple-800">Employment success within 6 months</p>
          </div>
          <div class="bg-orange-50 p-6 rounded-xl">
            <h4 class="font-semibold text-orange-900 mb-3">Student Satisfaction</h4>
            <p class="text-orange-800">Feedback scores and testimonials</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl my-12">
          <h2 id="heading-8" class="text-2xl font-bold mb-4">Conclusion</h2>
          <p class="text-lg leading-relaxed text-blue-100">Building effective cloud training programs requires careful planning, the right infrastructure, and continuous iteration based on student feedback and industry trends. By following these guidelines and focusing on hands-on learning, you can create programs that truly prepare students for successful cloud careers.</p>
        </div>

        <p class="text-lg leading-relaxed text-gray-700 mt-8">Remember, the cloud landscape evolves rapidly. Stay connected with industry professionals, update your curriculum regularly, and always prioritize practical, hands-on learning experiences.</p>
      `
    }
  };

  const post = posts[id as keyof typeof posts] || posts["building-effective-cloud-training"];

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

      {/* Hero Image */}
      <div className="w-full h-96 relative overflow-hidden">
        <img 
          src={post.heroImage} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-medium">
              <Lightbulb className="w-3 h-3 mr-1" />
              {post.category}
            </Badge>
            <div className="flex items-center text-gray-600 space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {post.views} views
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                {post.likes} likes
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.description}</p>
          
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-lg">{post.author}</div>
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
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex gap-8 pb-12">
          {/* Content - Much Wider */}
          <article className="flex-1 max-w-5xl">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* CTA Footer */}
            <footer className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-12 text-white text-center mt-12">
              <BookOpen className="w-12 h-12 text-white mx-auto mb-4"  />
              <h3 className="text-3xl font-bold mb-4">Ready to Build Your Training Program?</h3>
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
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-24">
              <BlogSidebar content={post.content} showOnlyActions={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
