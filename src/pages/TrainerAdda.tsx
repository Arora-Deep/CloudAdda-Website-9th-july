import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import ResponsiveNavigation from "@/components/ResponsiveNavigation";
import Footer from "@/components/Footer";

import imgZeroToLive from "@/assets/blog-zero-to-live-lab.jpg";
import imgTrainingLabCosts from "@/assets/blog-training-lab-costs.jpg";
import imgScaling from "@/assets/blog-scaling-1000.jpg";
import imgCallCenter from "@/assets/blog-call-center.jpg";
import imgChecklist from "@/assets/blog-checklist.jpg";
import imgDaas from "@/assets/blog-daas-shift.jpg";

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
      featured: true,
      image: imgZeroToLive
    },
    {
      id: "training-lab-costs",
      type: "blog",
      title: "Why Your Training Lab Costs Are So High (And How to Cut Them by 70%)",
      description: "Break down the hidden cost traps of traditional virtual lab setups and discover how next-gen platforms help trainers save 60–80% without compromising quality.",
      category: "Cost Management",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      featured: true,
      image: imgTrainingLabCosts
    },
    {
      id: "scaling-1000-students",
      type: "playbook",
      title: "Scaling to 1,000 Students: Infrastructure Strategies That Don't Break Mid-Session",
      description: "Proven strategies to scale training infrastructure without crashes or failures during high-load sessions.",
      category: "Scaling",
      readTime: "12 min read",
      date: "Jan 20, 2025",
      featured: false,
      image: imgScaling
    },
    {
      id: "call-center-case-study",
      type: "blog",
      title: "Behind the Screen: How a Call Center Saved ₹20 Lakhs by Moving to Cloud Desktops",
      description: "A mid-sized call center's journey from operational chaos to streamlined efficiency with cloud desktops.",
      category: "Case Study",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      featured: false,
      image: imgCallCenter
    },
    {
      id: "virtual-lab-checklist",
      type: "playbook",
      title: "The Ultimate Virtual Lab Checklist: 7 Things Before You Go Live",
      description: "Essential pre-launch checklist to prevent virtual training failures and ensure smooth sessions.",
      category: "Quality Assurance",
      readTime: "10 min read",
      date: "Jan 18, 2025",
      featured: false,
      image: imgChecklist
    },
    {
      id: "daas-shift-2025",
      type: "blog",
      title: "Why DaaS Is Taking Over: The Shift Away from Laptops in 2025",
      description: "Explore why smart companies are moving away from laptops to Desktop-as-a-Service solutions.",
      category: "Industry Trends",
      readTime: "5 min read",
      date: "Dec 10, 2024",
      featured: false,
      image: imgDaas
    }
  ];

  const getLink = (post: typeof allPosts[0]) => {
    return post.type === "playbook" ? `/playbook/${post.id}` : `/blog/${post.id}`;
  };

  return (
    <>
      <Helmet>
        <title>Virtual Training Lab Resources & Guides | CloudAdda</title>
        <meta name="description" content="Guides and insights on virtual training labs, hands-on IT training infrastructure, batch management, and scalable lab provisioning." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <ResponsiveNavigation />

        {/* Hero Header */}
        <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">Resources & Insights</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Playbooks</span>, Insights & Guides
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Everything you need to deliver world-class virtual training experiences — from setup to scale.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {allPosts.filter(p => p.featured).map((post, index) => (
                <Link key={index} to={getLink(post)} className="group">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-orange-500 text-white text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                        <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs uppercase tracking-wide">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.filter(p => !p.featured).map((post, index) => (
                <Link key={index} to={getLink(post)} className="group">
                  <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs uppercase tracking-wide">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Training?</h2>
            <p className="text-orange-100 text-lg mb-8">Get started with CloudAdda and deliver world-class virtual labs.</p>
            <Link to="/contact">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TrainerAdda;
