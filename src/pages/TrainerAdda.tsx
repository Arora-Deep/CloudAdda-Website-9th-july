import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BookOpen, ArrowRight, Star, Clock, Eye, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const TrainerAdda = () => {
  const allPosts = [
    {
      id: "zero-to-live-lab",
      type: "playbook",
      title: "Zero to Live — How to Deliver a Flawless Virtual Training Lab in 3 Hours",
      description: "The complete blueprint to go from training plan to fully functional, cloud-hosted lab in just 3 hours.",
      category: "Lab Setup",
      readTime: "15 min read",
      date: "Jan 22, 2025",
      featured: true
    },
    {
      id: "training-lab-costs",
      type: "blog",
      title: "Why Your Training Lab Costs Are So High (And How to Cut Them by 70%)",
      description: "Break down the hidden cost traps of traditional virtual lab setups and discover how next-gen platforms help trainers save 60–80% without compromising quality.",
      category: "Cost Management",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      featured: true
    },
    {
      id: "scaling-1000-students",
      type: "playbook",
      title: "Scaling to 1,000 Students: Infrastructure Strategies That Don't Break Mid-Session",
      description: "Proven strategies to scale training infrastructure without crashes or failures during high-load sessions.",
      category: "Scaling",
      readTime: "12 min read",
      date: "Jan 20, 2025",
      featured: false
    },
    {
      id: "call-center-case-study",
      type: "blog",
      title: "Behind the Screen: How a Call Center Saved ₹20 Lakhs by Moving to Cloud Desktops",
      description: "A mid-sized call center's journey from operational chaos to streamlined efficiency with cloud desktops.",
      category: "Case Study",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      featured: false
    },
    {
      id: "virtual-lab-checklist",
      type: "playbook",
      title: "The Ultimate Virtual Lab Checklist: 7 Things Before You Go Live",
      description: "Essential pre-launch checklist to prevent virtual training failures and ensure smooth sessions.",
      category: "Quality Assurance",
      readTime: "10 min read",
      date: "Jan 18, 2025",
      featured: false
    },
    {
      id: "daas-shift-2025",
      type: "blog",
      title: "Why DaaS Is Taking Over: The Shift Away from Laptops in 2025",
      description: "Explore why smart companies are moving away from laptops to Desktop-as-a-Service solutions.",
      category: "Industry Trends",
      readTime: "5 min read",
      date: "Dec 10, 2024",
      featured: false
    }
  ];

  const getLink = (post: typeof allPosts[0]) => {
    return post.type === "playbook" ? `/playbook/${post.id}` : `/blog/${post.id}`;
  };

  return (
    <>
      <Helmet>
        <title>Resources – Training Insights, Playbooks & Guides | CloudAdda</title>
        <meta name="description" content="Explore our collection of training playbooks, insights, and guides to help you deliver world-class virtual training experiences." />
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/training-labs" className="text-gray-700 hover:text-orange-500 transition-colors">Solutions</Link>
                <Link to="/trainer-adda" className="text-orange-500 font-medium">Resources</Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</Link>
                <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</Link>
                <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-orange-500 hover:text-orange-600 flex items-center gap-1">
                      Log In
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white border border-gray-200 shadow-lg">
                    <DropdownMenuItem asChild>
                      <a href="https://trainer-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                        Trainer Log In
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <a href="https://trainee-v2.cloudadda.com/login" target="_blank" rel="noopener noreferrer" className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
                        Trainee Log In
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6">
                    Start Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Simple Header */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-xl text-gray-600">
              Playbooks, insights, and guides to help you deliver better training.
            </p>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {allPosts.map((post, index) => (
                <Link key={index} to={getLink(post)} className="block group">
                  <article className="border-b border-gray-200 pb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline" className="text-xs uppercase tracking-wide">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="bg-orange-500 text-white text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link to="/" className="flex items-center space-x-2">
                  <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                </Link>
                <p className="text-gray-400">
                  Simple. Scalable. Human. Infrastructure that just works.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/training-labs" className="hover:text-white">Training Labs</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/trainer-adda" className="hover:text-white">All Resources</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
                  <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 CloudAdda. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TrainerAdda;
