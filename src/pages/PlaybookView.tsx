
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";
import ResponsiveNavigation from "@/components/ResponsiveNavigation";

import imgZeroToLive from "@/assets/blog-zero-to-live-lab.jpg";
import imgScaling from "@/assets/blog-scaling-1000.jpg";
import imgChecklist from "@/assets/blog-checklist.jpg";

const PlaybookView = () => {
  const { id } = useParams();

  const playbooks = {
    "zero-to-live-lab": {
      title: "Zero to Live — How to Deliver a Flawless Virtual Training Lab in 3 Hours",
      description: "The complete blueprint to go from training plan to fully functional, cloud-hosted lab in just 3 hours",
      category: "Lab Setup",
      readTime: "15 min read",
      date: "Jan 22, 2025",
      author: "CloudAdda Team",
      authorBio: "Training Infrastructure Experts with 10+ years experience",
      image: imgZeroToLive,
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">If you're still spending entire weekends setting up labs for Monday training — stop. There's a faster, smarter way.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Whether you're teaching DevOps, Data Science, Cybersecurity, or IT Fundamentals — this is the trainer's blueprint to stress-free lab delivery.</p>
        </div>
        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">✅ Step 1: Define the Lab Environment (30 min)</h2>
        <h3 id="heading-1" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">What you'll do:</h3>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">List tools and OS needed</strong></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Define user count and concurrency</strong></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Include pre-installed packages</strong></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Specify network configs and storage</strong></div></li>
        </ul>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg"><p class="text-blue-900 font-medium text-lg"><strong>Why it matters:</strong> A clear scope = zero back-and-forth during provisioning.</p></div>
        <h2 id="heading-2" class="text-3xl font-bold text-gray-900 mt-16 mb-8">⚙️ Step 2: Send It to CloudAdda (5 min)</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Submit the lab scope via the Lab Request Form</span></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Quick call with a CloudAdda infra expert</span></li>
        </ul>
        <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg"><p class="text-orange-900 font-medium text-lg"><strong>Why it matters:</strong> CloudAdda gives you people. Real engineers who build the lab for you.</p></div>
        <h2 id="heading-4" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🚀 Step 3: Provisioning (1.5 hr)</h2>
        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Built on NVMe, AMD EPYC infra</span></li>
            <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Custom configs and toolchains set up</span></li>
            <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Tested for stability under load</span></li>
          </ul>
        </div>
        <h2 id="heading-6" class="text-3xl font-bold text-gray-900 mt-16 mb-8">👩‍🏫 Step 4: Final Review & Go Live (1 hr)</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Test instructor and student login links</span></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Verify software, networking, and access</span></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Add optional branding or tracking</span></li>
        </ul>
        <h2 id="heading-8" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🎉 You're Live.</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">Your training environment is now running, monitored, and supported 24/7. Focus on teaching.</p>
        <h2 id="heading-10" class="text-3xl font-bold text-gray-900 mt-16 mb-8">TL;DR — From Idea to Infra in 3 Hours</h2>
        <div class="overflow-x-auto mb-8">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead class="bg-gray-50"><tr><th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phase</th><th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">What Happens</th><th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time</th></tr></thead>
            <tbody class="divide-y divide-gray-200">
              <tr><td class="px-6 py-4 text-sm font-medium text-gray-900">Plan</td><td class="px-6 py-4 text-sm text-gray-700">Define lab needs</td><td class="px-6 py-4 text-sm text-gray-700">30 min</td></tr>
              <tr><td class="px-6 py-4 text-sm font-medium text-gray-900">Submit</td><td class="px-6 py-4 text-sm text-gray-700">Share with CloudAdda</td><td class="px-6 py-4 text-sm text-gray-700">30 min</td></tr>
              <tr><td class="px-6 py-4 text-sm font-medium text-gray-900">Provision</td><td class="px-6 py-4 text-sm text-gray-700">CloudAdda builds & tests</td><td class="px-6 py-4 text-sm text-gray-700">1.5 hr</td></tr>
              <tr><td class="px-6 py-4 text-sm font-medium text-gray-900">Review</td><td class="px-6 py-4 text-sm text-gray-700">Test and go live</td><td class="px-6 py-4 text-sm text-gray-700">1 hr</td></tr>
              <tr class="bg-orange-50"><td class="px-6 py-4 text-sm font-bold text-orange-900">Total</td><td class="px-6 py-4 text-sm text-gray-700"></td><td class="px-6 py-4 text-sm font-bold text-orange-900">~3 hrs</td></tr>
            </tbody>
          </table>
        </div>
      `
    },
    "scaling-1000-students": {
      title: "Scaling to 1,000 Students: Infrastructure Strategies That Don't Break Mid-Session",
      description: "Proven strategies to scale training infrastructure without crashes or failures during high-load sessions",
      category: "Scaling",
      readTime: "12 min read",
      date: "Jan 20, 2025",
      author: "CloudAdda Team",
      authorBio: "Infrastructure Scaling Specialists",
      image: imgScaling,
      content: `
        <div class="prose-intro"><p class="text-xl leading-relaxed text-gray-700 mb-8">You've landed a major client. 1,000 students across time zones. The margin for error is zero.</p></div>
        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Scaling Fails</h2>
        <h3 id="heading-1" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">1. Using Generic Cloud Platforms</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Big cloud platforms aren't optimized for training sessions.</p>
        <h3 id="heading-2" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">2. Manual Scaling Is a Time Bomb</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Pre-allocating resources works—until it doesn't.</p>
        <h3 id="heading-3" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">3. Shared Resources = Sudden Failures</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Cheap VPS might look fine on paper, but under load, they buckle.</p>
        <h2 id="heading-4" class="text-3xl font-bold text-gray-900 mt-16 mb-8">The CloudAdda Scaling Philosophy</h2>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-blue-50 p-6 rounded-xl"><h4 class="font-semibold text-blue-900 mb-3">✅ Auto-Scaling</h4><p class="text-blue-800">Dynamic pre-provisioning based on login patterns.</p></div>
          <div class="bg-green-50 p-6 rounded-xl"><h4 class="font-semibold text-green-900 mb-3">✅ Workload Isolation</h4><p class="text-green-800">Every lab runs in isolated containers or VMs.</p></div>
          <div class="bg-purple-50 p-6 rounded-xl"><h4 class="font-semibold text-purple-900 mb-3">✅ Real-Time Monitoring</h4><p class="text-purple-800">CPU, memory, and IOPS per session in real-time.</p></div>
          <div class="bg-orange-50 p-6 rounded-xl"><h4 class="font-semibold text-orange-900 mb-3">✅ Purpose-Built Infra</h4><p class="text-orange-800">Servers optimized for bursty training workloads.</p></div>
        </div>
        <h2 id="heading-5" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Strategies You Can Steal Today</h2>
        <h3 id="heading-6" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">1. Use Parallel Lab Pools</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Pre-deploy different sets of labs across nodes.</p>
        <h3 id="heading-7" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">2. Time-Zone Based Scaling</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Schedule lab loads in staggered time blocks.</p>
        <h3 id="heading-8" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">3. Integrate Smart Alerts</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Set alerts on CPU/memory thresholds per lab.</p>
        <h2 id="heading-9" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Final Thoughts</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">With the right infra strategy, you scale effortlessly.</p>
      `
    },
    "virtual-lab-checklist": {
      title: "The Ultimate Virtual Lab Checklist: 7 Things Before You Go Live",
      description: "Essential pre-launch checklist to prevent virtual training failures and ensure smooth sessions",
      category: "Quality Assurance",
      readTime: "10 min read",
      date: "Jan 18, 2025",
      author: "CloudAdda Team",
      authorBio: "Training Lab Quality Experts",
      image: imgChecklist,
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">Going Live Without a Plan? That's a Disaster Waiting to Happen.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Most failures don't happen during the session — they happen before it starts.</p>
        </div>
        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">✅ 1. Does Your Infra Match Your Curriculum?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">If you're teaching Kubernetes, but your VMs have no Docker pre-installed... you're starting late.</p>
        <h2 id="heading-1" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 2. Have You Simulated Full Load?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">One student clicking "Run" is fine. One thousand? Welcome to Chaos City.</p>
        <h2 id="heading-2" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 3. Are Access Credentials Bulletproof?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">A student who can't log in is a support ticket waiting to happen.</p>
        <h2 id="heading-3" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 4. Is Your Support Plan Battle-Tested?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">If something breaks mid-session, you need help — fast.</p>
        <h2 id="heading-4" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 5. Is There a Failover Plan?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Most infra fails don't give you a warning.</p>
        <h2 id="heading-5" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 6. Are You Monitoring Student Activity?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Without visibility, you're flying blind.</p>
        <h2 id="heading-6" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 7. Have You Run a Pre-Flight Test?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Nothing beats a live test. Bring in 5–10 internal users.</p>
        <h2 id="heading-7" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Ready to Launch With Confidence?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">CloudAdda builds and tests every training lab against this checklist — and 30+ more internal criteria.</p>
      `
    }
  };

  const playbook = playbooks[id as keyof typeof playbooks] || playbooks["zero-to-live-lab"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ResponsiveNavigation />

      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img src={playbook.image} alt={playbook.title} className="w-full h-full object-cover" />
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10">
          {/* Main Article */}
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="text-xs uppercase tracking-wide">{playbook.category}</Badge>
                <span className="text-sm text-gray-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{playbook.readTime}</span>
                <span className="text-sm text-gray-500">{playbook.date}</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{playbook.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{playbook.description}</p>

              <div className="flex items-center gap-3 pb-8 mb-8 border-b border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{playbook.author}</div>
                  <div className="text-xs text-gray-500">{playbook.authorBio}</div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: playbook.content }} />

              {/* Bottom CTA */}
              <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Want to set up your training lab?</p>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <BlogSidebar content={playbook.content} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PlaybookView;
