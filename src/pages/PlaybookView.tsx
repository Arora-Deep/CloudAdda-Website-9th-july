
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
    "zero-to-live-lab": {
      title: "Zero to Live — How to Deliver a Flawless Virtual Training Lab in 3 Hours",
      description: "The complete blueprint to go from training plan to fully functional, cloud-hosted lab in just 3 hours",
      category: "Lab Setup",
      readTime: "15 min read",
      date: "Jan 22, 2025",
      author: "CloudAdda Team",
      authorBio: "Training Infrastructure Experts with 10+ years experience",
      heroImage: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      contentImage: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      views: "2.1k",
      downloads: "428",
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">If you're still spending entire weekends setting up labs for Monday training — stop. There's a faster, smarter way. This guide walks you through exactly how to go from a training plan on paper to a fully functional, cloud-hosted lab environment that's ready to teach in just 3 hours.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Whether you're teaching DevOps, Data Science, Cybersecurity, or IT Fundamentals — this is the trainer's blueprint to stress-free lab delivery.</p>
        </div>

        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">✅ Step 1: Define the Lab Environment (Time: 30 min)</h2>
        
        <h3 id="heading-1" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">What you'll do:</h3>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">List tools and OS needed:</strong>
              <span class="text-gray-700"> Ubuntu, Windows, macOS?</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Define user count and concurrency</strong>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Include pre-installed packages:</strong>
              <span class="text-gray-700"> e.g. VS Code, Anaconda, Wireshark, MySQL</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <strong class="text-gray-900">Specify network configs, storage, and internet access</strong>
            </div>
          </li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p class="text-blue-900 font-medium text-lg"><strong>Why it matters:</strong> A clear scope = zero back-and-forth during provisioning. Good infra starts with great documentation.</p>
        </div>

        <div class="bg-green-50 p-6 rounded-xl mb-8">
          <p class="text-green-800 font-semibold mb-2">💡 Pro tip:</p>
          <p class="text-green-700">Use our downloadable [Lab Planning Worksheet] to speed this up.</p>
        </div>

        <h2 id="heading-2" class="text-3xl font-bold text-gray-900 mt-16 mb-8">⚙️ Step 2: Send It to CloudAdda (Time: 5 min)</h2>
        
        <h3 id="heading-3" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">What you'll do:</h3>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <span class="text-gray-700">Email or submit the lab scope via the [Lab Request Form]</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <span class="text-gray-700">Hop on a quick call (15–20 min) with a CloudAdda infra expert</span>
            </div>
          </li>
        </ul>

        <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
          <p class="text-orange-900 font-medium text-lg"><strong>Why it matters:</strong> CloudAdda doesn't give you a panel — it gives you people. Real engineers who read your plan, understand your session goals, and build the lab for you.</p>
        </div>

        <h2 id="heading-4" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🚀 Step 3: Sit Back While It's Provisioned (Time: 1.5 hr)</h2>
        
        <h3 id="heading-5" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">What happens:</h3>
        <div class="bg-gray-50 p-6 rounded-xl mb-8">
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Your environment is built on high-performance infra (NVMe, AMD EPYC)</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">Custom configs, toolchains, and scaling are set up</span>
            </li>
            <li class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
              <span class="text-gray-700">The lab is tested for stability under load</span>
            </li>
          </ul>
        </div>

        <div class="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-lg">
          <p class="text-purple-900 font-medium text-lg"><strong>Why it matters:</strong> Most DIY labs crash under real-world usage. Ours are purpose-built for 10 to 1,000 concurrent users. No surprises mid-session.</p>
        </div>

        <h2 id="heading-6" class="text-3xl font-bold text-gray-900 mt-16 mb-8">👩‍🏫 Step 4: Final Review & Go Live (Time: 1 hr)</h2>
        
        <h3 id="heading-7" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">What you'll do:</h3>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <span class="text-gray-700">Test instructor and student login links</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <span class="text-gray-700">Verify software, networking, file access, and control settings</span>
            </div>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <span class="text-gray-700">Add optional branding or tracking (if needed)</span>
            </div>
          </li>
        </ul>

        <div class="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg">
          <p class="text-cyan-900 font-medium text-lg"><strong>Why it matters:</strong> The final sanity check before you hit the classroom. CloudAdda helps ensure everything is polished and production-grade.</p>
        </div>

        <h2 id="heading-8" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🎉 You're Live. You're in Control. You're Not Alone.</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">Your training environment is now running, monitored, and supported 24/7 by CloudAdda's real engineers. Focus on what you do best — teaching.</p>

        <h3 id="heading-9" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">Bonus Tools:</h3>
        <div class="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl my-10">
          <ul class="space-y-3">
            <li class="flex items-center space-x-3">
              <CheckCircle class="w-5 h-5 text-green-500" />
              <span class="text-gray-700">[Lab Planning Worksheet PDF]</span>
            </li>
            <li class="flex items-center space-x-3">
              <CheckCircle class="w-5 h-5 text-green-500" />
              <span class="text-gray-700">[Trainer Onboarding Checklist]</span>
            </li>
            <li class="flex items-center space-x-3">
              <CheckCircle class="w-5 h-5 text-green-500" />
              <span class="text-gray-700">[Go-Live Testing Script]</span>
            </li>
            <li class="flex items-center space-x-3">
              <CheckCircle class="w-5 h-5 text-green-500" />
              <span class="text-gray-700">[Emergency Support Hotline Card]</span>
            </li>
          </ul>
        </div>

        <h2 id="heading-10" class="text-3xl font-bold text-gray-900 mt-16 mb-8">TL;DR — From Idea to Infra in 3 Hours</h2>
        <div class="overflow-x-auto mb-8">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Phase</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">What Happens</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Time</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Plan</td>
                <td class="px-6 py-4 text-sm text-gray-700">Define your exact lab needs</td>
                <td class="px-6 py-4 text-sm text-gray-700">30 min</td>
              </tr>
              <tr>
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Submit</td>
                <td class="px-6 py-4 text-sm text-gray-700">Share with CloudAdda & discuss live</td>
                <td class="px-6 py-4 text-sm text-gray-700">30 min</td>
              </tr>
              <tr>
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Provision</td>
                <td class="px-6 py-4 text-sm text-gray-700">CloudAdda builds and tests the lab</td>
                <td class="px-6 py-4 text-sm text-gray-700">1.5 hr</td>
              </tr>
              <tr>
                <td class="px-6 py-4 text-sm font-medium text-gray-900">Final Review</td>
                <td class="px-6 py-4 text-sm text-gray-700">You test and go live</td>
                <td class="px-6 py-4 text-sm text-gray-700">1 hr</td>
              </tr>
              <tr class="bg-orange-50">
                <td class="px-6 py-4 text-sm font-bold text-orange-900">Total Time</td>
                <td class="px-6 py-4 text-sm text-gray-700"></td>
                <td class="px-6 py-4 text-sm font-bold text-orange-900">~3 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-8 rounded-2xl my-12 text-center">
          <p class="text-lg leading-relaxed mb-4">Want help planning your next lab? 👉</p>
          <button class="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Schedule a free consultation with our training lab engineers</button>
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
      heroImage: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      contentImage: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      views: "1.7k",
      downloads: "356",
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">You've landed a major client. You're running a 1,000-person training across time zones. The pressure is real—and the margin for error is zero.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Every trainer's nightmare: halfway through a session, 400 students drop off. Labs crash. Emails start flying. Your reputation takes a hit. This guide helps you avoid that disaster—and scale with confidence.</p>
        </div>

        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Scaling Fails for Most Training Companies</h2>
        
        <h3 id="heading-1" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">1. Using Generic Cloud Platforms</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Big cloud platforms aren't optimized for training sessions. They're built for general workloads, not 1,000 students simultaneously launching labs.</p>

        <h3 id="heading-2" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">2. Manual Scaling Is a Time Bomb</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Pre-allocating resources? Manually provisioning instances? It works—until it doesn't. One burst of student activity, and things break.</p>

        <h3 id="heading-3" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">3. Shared Resources = Sudden Failures</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Cheap VPS or shared infra might look fine on paper, but under load, they buckle. Your students pay the price.</p>

        <h2 id="heading-4" class="text-3xl font-bold text-gray-900 mt-16 mb-8">The CloudAdda Scaling Philosophy</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">At CloudAdda, we've provisioned thousands of labs for training firms scaling from 10 to 10,000 users. Here's what works:</p>

        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h4 class="font-semibold text-blue-900 mb-3">✅ Auto-Scaling on Demand</h4>
            <p class="text-blue-800">We monitor student login patterns and pre-provision environments dynamically. No cold starts. No crashes.</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl">
            <h4 class="font-semibold text-green-900 mb-3">✅ Workload Isolation</h4>
            <p class="text-green-800">Every lab runs in isolated containers or VMs—no shared memory, no shared CPU. If one crashes, it doesn't bring down others.</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl">
            <h4 class="font-semibold text-purple-900 mb-3">✅ Real-Time Performance Monitoring</h4>
            <p class="text-purple-800">Our ops team monitors CPU, memory, and IOPS per session in real-time. We catch issues before they impact students.</p>
          </div>
          <div class="bg-orange-50 p-6 rounded-xl">
            <h4 class="font-semibold text-orange-900 mb-3">✅ Purpose-Built Infra</h4>
            <p class="text-orange-800">Our servers are optimized for bursty training workloads, not just steady-state compute. It's built for 100+ students hitting "Run" at the same time.</p>
          </div>
        </div>

        <h2 id="heading-5" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Scaling Strategies You Can Steal Today</h2>

        <h3 id="heading-6" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">1. Use Parallel Lab Pools</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Pre-deploy different sets of labs across nodes. Students connect to available pools instantly with load balanced access.</p>

        <h3 id="heading-7" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">2. Time-Zone Based Scaling Windows</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Schedule lab loads in staggered time blocks to reduce peak-time strain.</p>

        <h3 id="heading-8" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">3. Integrate Smart Alerts</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Set alerts on CPU/memory thresholds per lab. If thresholds cross 80%, auto-deploy backups or reroute users.</p>

        <h2 id="heading-9" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Final Thoughts: Don't Let Infra Be the Weakest Link</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">The quality of your training shouldn't be judged by your cloud provider's limits. With the right infra strategy, you scale effortlessly—and look like a pro while doing it.</p>

        <div class="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-8 rounded-2xl my-12 text-center">
          <p class="text-lg leading-relaxed mb-6">👉 Need help planning a 1,000-student session? [Get a Custom Scaling Plan]</p>
          <p class="text-lg leading-relaxed">👉 Want the checklist we use internally? [Download Our Lab Scaling Checklist]</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl mt-8">
          <p class="text-gray-700 text-sm"><strong>About CloudAdda:</strong> We power high-performance, crash-proof training labs for leading training companies all around the world. Same-day provisioning. Zero headaches.</p>
        </div>
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
      heroImage: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      contentImage: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      views: "2.3k",
      downloads: "512",
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">Going Live Without a Plan? That's a Disaster Waiting to Happen.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Most virtual training failures don't happen during the session — they happen before it even starts. Because the lab wasn't fully tested. Because the infra wasn't ready. Because someone missed something obvious.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">This checklist saves you from those moments. Whether you're running a 10-person Python workshop or a 1,000-student cloud bootcamp, check these 7 boxes before you ever hit "Go Live."</p>
        </div>

        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">✅ 1. Does Your Infra Match Your Curriculum?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Sounds obvious. Isn't. If you're teaching Kubernetes, but your VMs have no Docker pre-installed... you're starting late and losing credibility.</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Match every learning outcome to a config</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Pre-load all tools, packages, and files</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Simulate real-world use cases</span>
          </li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p class="text-blue-900 font-medium text-lg"><strong>CloudAdda Tip:</strong> We pre-map your curriculum to infra templates. So nothing gets missed.</p>
        </div>

        <h2 id="heading-1" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 2. Have You Simulated Full Load?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">One student clicking "Run" is fine. One thousand students doing it at once? Welcome to Chaos City.</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Run a stress test with 100% simulated concurrency</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Monitor CPU, RAM, and network under pressure</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Watch for provisioning bottlenecks</span>
          </li>
        </ul>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <p class="text-green-900 font-medium text-lg"><strong>CloudAdda Tip:</strong> Our environments scale automatically and are pre-load tested for 1,000+ concurrent users.</p>
        </div>

        <h2 id="heading-2" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 3. Are Access Credentials Bulletproof?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">A student who can't log in is a support ticket waiting to happen. Now multiply that by 200.</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Double-check usernames/passwords or SSO</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Send access details in advance</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Provide backup logins in case of issues</span>
          </li>
        </ul>

        <div class="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-lg">
          <p class="text-purple-900 font-medium text-lg"><strong>CloudAdda Tip:</strong> We auto-generate and bulk-send credentials, with built-in SSO support.</p>
        </div>

        <h2 id="heading-3" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 4. Is Your Support Plan Battle-Tested?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">If a student can't access their lab or something breaks mid-session, you need help — fast.</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Do you have real human support?</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Can issues be escalated in under 10 minutes?</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Is someone monitoring infra live during the session?</span>
          </li>
        </ul>

        <div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 rounded-r-lg">
          <p class="text-orange-900 font-medium text-lg"><strong>CloudAdda Tip:</strong> 24/7 support by engineers. 47 min avg response.</p>
        </div>

        <h2 id="heading-4" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 5. Is There a Failover Plan?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Most infra fails don't give you a warning. Having a backup means the session doesn't stop.</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Redundant infra in case of regional failure</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Auto-restart policies for crashed VMs</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Daily snapshot backups</span>
          </li>
        </ul>

        <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <p class="text-red-900 font-medium text-lg"><strong>CloudAdda Tip:</strong> Auto-failover is built in. And backups run daily.</p>
        </div>

        <h2 id="heading-5" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 6. Are You Monitoring Student Activity?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Without visibility, you're flying blind.</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Can you see who's logged in?</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Who's progressing? Who's stuck?</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-cyan-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Any dropped sessions?</span>
          </li>
        </ul>

        <div class="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-lg">
          <p class="text-cyan-900 font-medium text-lg"><strong>CloudAdda Tip:</strong> Trainer dashboards show live usage, progress, and system status.</p>
        </div>

        <h2 id="heading-6" class="text-3xl font-bold text-gray-900 mt-16 mb-8">✅ 7. Have You Run a Pre-Flight Test Session?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Nothing beats a live test. Bring in 5–10 internal users and run a dry session.</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Time how long it takes to get started</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Check for usability issues or UI confusion</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Ask for feedback on speed + performance</span>
          </li>
        </ul>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
          <p class="text-yellow-900 font-medium text-lg"><strong>CloudAdda Tip:</strong> We always include a free test deployment before launch day.</p>
        </div>

        <h2 id="heading-7" class="text-3xl font-bold text-gray-900 mt-16 mb-8">Ready to Launch With Confidence?</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">CloudAdda builds and tests every training lab against this checklist — and 30+ more internal criteria.</p>
        
        <div class="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-2xl my-12 text-center">
          <p class="text-lg leading-relaxed mb-4">✅ You send your curriculum.</p>
          <p class="text-lg leading-relaxed mb-6">✅ We send back a ready-to-run lab.</p>
          <button class="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Schedule Your Custom Lab Deployment Today →</button>
        </div>
      `
    }
  };

  const playbook = playbooks[id as keyof typeof playbooks] || playbooks["zero-to-live-lab"];

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
              Get the complete guide to delivering flawless virtual training labs.
            </p>
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="flex gap-12 pb-12">
          {/* Content - Much Wider */}
          <article className="flex-1 max-w-5xl">
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
