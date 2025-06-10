
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp } from "lucide-react";

const CloudDesktopsSuccessStories = () => {
  const stories = [
    {
      developer: "Ankit Sharma",
      title: "Engineering Lead",
      company: "FinTech Startup",
      project: "Mobile banking platform",
      problem: "Team of 8 developers struggling with inconsistent local environments",
      solution: "Migrated entire team to CloudAdda desktops",
      result: "Zero environment issues, 40% faster builds, instant new developer onboarding",
      quote: "We went from spending 30% of our time on environment issues to zero. Our velocity doubled overnight.",
      savings: "₹25,000/month saved",
      rating: 5,
      timeOnPlatform: "18 months"
    },
    {
      developer: "Megha Patel", 
      title: "Senior Developer",
      company: "E-commerce Platform",
      project: "Microservices architecture",
      problem: "MacBook Pro couldn't handle Docker containers efficiently",
      solution: "Switched to CloudAdda high-performance desktop",
      result: "10x faster Docker builds, consistent performance, better battery life",
      quote: "My laptop used to sound like a jet engine. Now it's silent while I get twice the performance in the cloud.",
      savings: "₹8,000/month saved",
      rating: 5,
      timeOnPlatform: "12 months"
    },
    {
      developer: "Rohit Kumar",
      title: "DevOps Engineer", 
      company: "SaaS Startup",
      project: "CI/CD pipeline optimization",
      problem: "Complex local setup for testing infrastructure changes",
      solution: "CloudAdda desktops with pre-configured DevOps tools",
      result: "Instant environment cloning, parallel testing, zero setup time",
      quote: "I can spin up 5 different environments in parallel to test infrastructure changes. Game changer.",
      savings: "₹15,000/month saved",
      rating: 5,
      timeOnPlatform: "9 months"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Development Teams Who Made the Switch</h2>
          <p className="text-xl text-gray-600">Real stories from real teams building real products</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-500 ml-2">({story.timeOnPlatform})</span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{story.developer}</h3>
                <p className="text-blue-600 font-semibold">{story.title}</p>
                <p className="text-sm text-gray-600">{story.company}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Project:</h4>
                  <p className="text-sm text-gray-600">{story.project}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">Problem:</h4>
                  <p className="text-sm text-gray-600">{story.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-1">Solution:</h4>
                  <p className="text-sm text-gray-600">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-700 mb-1">Result:</h4>
                  <p className="text-sm text-gray-600">{story.result}</p>
                </div>
              </div>

              <blockquote className="italic text-gray-700 border-l-4 border-blue-300 pl-4 mb-6">
                "{story.quote}"
              </blockquote>

              <div className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-lg font-bold text-green-600">{story.savings}</div>
                <div className="text-sm text-green-700">Monthly savings achieved</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Success Story</h3>
            <p className="text-gray-600 mb-6">We love featuring development teams who've transformed their workflow with CloudAdda</p>
            <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3">
              Submit Your Story
              <ThumbsUp className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsSuccessStories;
