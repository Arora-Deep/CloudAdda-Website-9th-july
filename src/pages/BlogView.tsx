import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, User, Share2, BookOpen, Lightbulb, Eye, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";

const BlogView = () => {
  const { id } = useParams();

  // Updated content with your provided blog posts
  const posts = {
    "zero-to-live-playbook": {
      title: "Zero to Live — How to Deliver a Flawless Virtual Training Lab in 3 Hours",
      description: "The complete playbook every modern trainer needs to deliver flawless virtual training labs",
      category: "Trainer Playbook",
      readTime: "12 min read",
      date: "Dec 15, 2024",
      author: "CloudAdda Team",
      authorBio: "Expert training infrastructure engineers with 10+ years in enterprise training",
      heroImage: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      contentImage: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      views: "3.2k",
      likes: "198",
      content: `
        <div class="prose-intro">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">The Playbook Every Modern Trainer Needs</h2>
          <p class="text-xl leading-relaxed text-gray-700 mb-8">If you're still spending entire weekends setting up labs for Monday training — stop. There's a faster, smarter way.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">This guide walks you through exactly how to go from a training plan on paper to a fully functional, cloud-hosted lab environment that's ready to teach in just 3 hours.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Whether you're teaching DevOps, Data Science, Cybersecurity, or IT Fundamentals — this is the trainer's blueprint to stress-free lab delivery.</p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">✅ Step 1: Define the Lab Environment (Time: 30 min)</h2>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">What you'll do:</h3>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">List tools and OS needed (Ubuntu, Windows, macOS?)</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Define user count and concurrency</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Include pre-installed packages (e.g. VS Code, Anaconda, Wireshark, MySQL)</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Specify network configs, storage, and internet access</span>
          </li>
        </ul>
        <p class="text-lg text-gray-700 mb-4"><strong>Why it matters:</strong> A clear scope = zero back-and-forth during provisioning. Good infra starts with great documentation.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p class="text-blue-900 font-medium">Pro tip: Use our downloadable [Lab Planning Worksheet] to speed this up.</p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">⚙️ Step 2: Send It to CloudAdda (Time: 5 min)</h2>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">What you'll do:</h3>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Email or submit the lab scope via the [Lab Request Form]</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Hop on a quick call (15–20 min) with a CloudAdda infra expert</span>
          </li>
        </ul>
        <p class="text-lg text-gray-700 mb-8"><strong>Why it matters:</strong> CloudAdda doesn't give you a panel — it gives you people. Real engineers who read your plan, understand your session goals, and build the lab for you.</p>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">🚀 Step 3: Sit Back While It's Provisioned (Time: 1.5 hr)</h2>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">What happens:</h3>
        <ul class="space-y-3 mb-6">
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
        <p class="text-lg text-gray-700 mb-8"><strong>Why it matters:</strong> Most DIY labs crash under real-world usage. Ours are purpose-built for 10 to 1,000 concurrent users. No surprises mid-session.</p>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">👩‍🏫 Step 4: Final Review & Go Live (Time: 1 hr)</h2>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">What you'll do:</h3>
        <ul class="space-y-3 mb-6">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Test instructor and student login links</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Verify software, networking, file access, and control settings</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Add optional branding or tracking (if needed)</span>
          </li>
        </ul>
        <p class="text-lg text-gray-700 mb-8"><strong>Why it matters:</strong> The final sanity check before you hit the classroom. CloudAdda helps ensure everything is polished and production-grade.</p>

        <div class="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-2xl my-12">
          <h2 class="text-3xl font-bold mb-4">🎉 You're Live. You're in Control. You're Not Alone.</h2>
          <p class="text-lg leading-relaxed text-green-100">Your training environment is now running, monitored, and supported 24/7 by CloudAdda's real engineers. Focus on what you do best — teaching.</p>
        </div>

        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Bonus Tools:</h3>
        <div class="grid md:grid-cols-2 gap-4 mb-8">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-blue-900 font-medium">✅ [Lab Planning Worksheet PDF]</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <p class="text-green-900 font-medium">✅ [Trainer Onboarding Checklist]</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <p class="text-purple-900 font-medium">✅ [Go-Live Testing Script]</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <p class="text-orange-900 font-medium">✅ [Emergency Support Hotline Card]</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-16 mb-8">TL;DR — From Idea to Infra in 3 Hours</h2>
        <div class="overflow-x-auto mb-8">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Phase</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">What Happens</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-medium">Plan</td>
                <td class="border border-gray-300 px-4 py-2">Define your exact lab needs</td>
                <td class="border border-gray-300 px-4 py-2">30 min</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-medium">Submit</td>
                <td class="border border-gray-300 px-4 py-2">Share with CloudAdda & discuss live</td>
                <td class="border border-gray-300 px-4 py-2">30 min</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-medium">Provision</td>
                <td class="border border-gray-300 px-4 py-2">CloudAdda builds and tests the lab</td>
                <td class="border border-gray-300 px-4 py-2">1.5 hr</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="border border-gray-300 px-4 py-2 font-medium">Final Review</td>
                <td class="border border-gray-300 px-4 py-2">You test and go live</td>
                <td class="border border-gray-300 px-4 py-2">1 hr</td>
              </tr>
              <tr class="bg-blue-50">
                <td class="border border-gray-300 px-4 py-2 font-bold">Total Time</td>
                <td class="border border-gray-300 px-4 py-2"></td>
                <td class="border border-gray-300 px-4 py-2 font-bold">~3 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-8 rounded-2xl my-12 text-center">
          <p class="text-lg font-medium">Want help planning your next lab? 👉</p>
          <p class="text-xl font-bold mt-2">[Schedule a free consultation with our training lab engineers]</p>
        </div>
      `
    },
    "training-lab-costs": {
      title: "Why Your Training Lab Costs Are So High (And How to Cut Them by 70%)",
      description: "Breaking down the hidden cost traps of traditional virtual lab setups and how next-gen platforms help trainers save 60–80%.",
      category: "Cost Management",
      readTime: "8 min read", 
      date: "Dec 12, 2024",
      author: "CloudAdda Team",
      authorBio: "Cost optimization experts specializing in training infrastructure",
      heroImage: "/lovable-uploads/1fc1b438-cdbd-423b-a581-fed76e12ae99.png",
      views: "2.8k",
      likes: "142",
      content: `
        <div class="prose-intro">
          <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p class="text-2xl font-bold text-red-900 mb-4">"We thought the cloud would save us money. Instead, it drained our budget."</p>
          </div>
          <p class="text-xl leading-relaxed text-gray-700 mb-8">If you're still paying per-hour for labs, juggling surprise invoices, and scaling infrastructure manually—you're burning money.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">This article breaks down the hidden cost traps of traditional virtual lab setups and shows you how next-gen platforms like CloudAdda help trainers save 60–80% without compromising quality.</p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">1. The Real Cost of 'DIY' Training Labs</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700"><strong>Surprise cloud bills from AWS/Azure</strong></span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700"><strong>Time lost to setup & troubleshooting</strong></span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700"><strong>High support overhead from infra failures</strong></span>
          </li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">2. The 5 Hidden Expenses in Traditional Cloud Labs</h2>
        <div class="grid md:grid-cols-1 gap-6 mb-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-semibold text-gray-900 mb-3">Over-provisioning "just in case"</h4>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-semibold text-gray-900 mb-3">Long setup lead times</h4>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-semibold text-gray-900 mb-3">Paid support tiers</h4>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-semibold text-gray-900 mb-3">Poor uptime = re-runs & refunds</h4>
          </div>
          <div class="bg-gray-50 p-6 rounded-xl">
            <h4 class="font-semibold text-gray-900 mb-3">Inefficient student usage</h4>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">3. The CloudAdda Cost Advantage</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700"><strong>Quote-based pricing (not per-hour)</strong></span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700"><strong>Human support included</strong></span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700"><strong>Labs ready in 3 hours, not 3 days</strong></span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700"><strong>No need to over-provision resources</strong></span>
          </li>
        </ul>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">4. What Trainers Actually Save</h2>
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="bg-blue-50 p-6 rounded-xl text-center">
            <h4 class="font-semibold text-blue-900 mb-3">Time per trainer</h4>
            <p class="text-2xl font-bold text-blue-800">15–20 hours/month</p>
          </div>
          <div class="bg-green-50 p-6 rounded-xl text-center">
            <h4 class="font-semibold text-green-900 mb-3">Average cost savings</h4>
            <p class="text-2xl font-bold text-green-800">₹1.5–2L/month</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl text-center">
            <h4 class="font-semibold text-purple-900 mb-3">Student satisfaction</h4>
            <p class="text-2xl font-bold text-purple-800">Up from 3.2 to 4.8</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">5. The Bottom Line</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">If you're serious about scaling, you need infra that doesn't fight you—or your CFO.</p>
        
        <div class="bg-gradient-to-r from-orange-500 to-blue-600 text-white p-8 rounded-2xl my-12 text-center">
          <p class="text-xl font-bold">Get a Custom Quote →</p>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 class="text-xl font-bold text-yellow-900 mb-4">Downloadable Resource: The Ultimate Lab Setup Checklist</h3>
          <p class="text-lg font-semibold text-yellow-800 mb-2">Title: "Don't Launch Another Session Without This"</p>
          <h4 class="font-semibold text-yellow-900 mb-2">What's Inside:</h4>
          <ul class="space-y-2 text-yellow-800 mb-4">
            <li>• 15-point readiness checklist for every lab</li>
            <li>• Pre-launch config verification</li>
            <li>• Backup plan template</li>
            <li>• Troubleshooting flowchart</li>
            <li>• Quick-access command sheet for Linux & Windows</li>
          </ul>
          <p class="text-yellow-800 mb-4"><strong>Why It's Useful:</strong> Most lab outages are preventable. This checklist helps training teams catch problems before they ruin a session.</p>
          <p class="text-yellow-900 font-bold">CTA: Download the Checklist → (PDF)</p>
        </div>
      `
    },
    "daas-takeover-2025": {
      title: "Why DaaS Is Taking Over: The Shift Away from Laptops in 2025",
      description: "Smart companies are moving away from traditional laptops to cloud desktops. Here's why and how to make the switch.",
      category: "Technology Trends",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      author: "CloudAdda Team",
      authorBio: "Cloud infrastructure specialists focused on modern workplace solutions",
      heroImage: "/lovable-uploads/2c2c88a8-7220-4594-bca2-cc4e5f6d6780.png",
      views: "4.1k",
      likes: "267",
      content: `
        <div class="prose-intro">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">🔥 The End of the Laptop Era?</h2>
          <p class="text-xl leading-relaxed text-gray-700 mb-8">Walk into any modern office and you'll still see rows of laptops. But in 2025, they're no longer the future — they're the friction.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Smart companies are asking: Why burn ₹70,000–₹1,20,000 per employee on hardware that slows down, breaks, or walks away… when you can give your team a faster, safer, cloud desktop for a fraction of the cost?</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8"><strong>Welcome to the era of DaaS (Desktop-as-a-Service).</strong></p>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">💥 Laptops Weren't Built for This</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-red-50 p-6 rounded-xl">
            <h4 class="font-semibold text-red-900 mb-3">They crash.</h4>
            <p class="text-red-800">Spilled coffee. Overheating. Disk failures. It's not if — it's when.</p>
          </div>
          <div class="bg-orange-50 p-6 rounded-xl">
            <h4 class="font-semibold text-orange-900 mb-3">They choke.</h4>
            <p class="text-orange-800">Docker, Chrome, Zoom, VS Code — your laptop turns into a jet engine before lunchtime.</p>
          </div>
          <div class="bg-yellow-50 p-6 rounded-xl">
            <h4 class="font-semibold text-yellow-900 mb-3">They delay.</h4>
            <p class="text-yellow-800">Onboarding takes days. Setups drag. Your new hire is waiting while competitors are shipping.</p>
          </div>
          <div class="bg-purple-50 p-6 rounded-xl">
            <h4 class="font-semibold text-purple-900 mb-3">They terrify IT.</h4>
            <p class="text-purple-800">Sensitive data scattered across hundreds of machines. VPNs misconfigured. Compliance nightmares.</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">🚀 Why the Smartest Teams Are Switching to DaaS in 2025</h2>

        <div class="space-y-8 mb-12">
          <div class="bg-blue-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold text-blue-900 mb-4">🖥 Productivity from Any Device</h3>
            <p class="text-blue-800 mb-2">Laptop stolen? Log in from your phone, tablet, or another machine. You're back in seconds.</p>
            <p class="text-blue-800 font-medium">Your entire desktop lives in the cloud — untouched, uninterrupted.</p>
          </div>

          <div class="bg-green-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold text-green-900 mb-4">⚡ Instant Setup</h3>
            <p class="text-green-800 mb-2">New hire today, fully productive in under 15 minutes.</p>
            <p class="text-green-800 font-medium">Their environment? Pre-loaded with the exact tools they need.</p>
          </div>

          <div class="bg-purple-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold text-purple-900 mb-4">🔐 Built-In Security</h3>
            <p class="text-purple-800 mb-2">Your data never touches local machines. End-to-end encryption, access controls, full audit trails.</p>
            <p class="text-purple-800 font-medium">Security and compliance? Handled by design.</p>
          </div>

          <div class="bg-orange-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold text-orange-900 mb-4">💸 Predictable Cost, No Surprise Breakdowns</h3>
            <p class="text-orange-800 mb-2">No CapEx. No surprise repair bills.</p>
            <p class="text-orange-800 font-medium">Just one flat, scalable monthly cost — no matter how many desktops you spin up.</p>
          </div>

          <div class="bg-cyan-50 p-6 rounded-xl">
            <h3 class="text-xl font-semibold text-cyan-900 mb-4">🧠 Smart Configs for Every Role</h3>
            <ul class="space-y-2 text-cyan-800">
              <li>• <strong>Entry-level staff?</strong> 2-core lightweight machines.</li>
              <li>• <strong>Designers & Devs?</strong> 8-core beasts with NVMe power.</li>
              <li>• <strong>Finance, Ops, CX?</strong> Tailored setups that match the workload.</li>
            </ul>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6">🌐 Who's Already Making the Switch?</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Developers running full-stack apps with Docker, Postgres, and Kubernetes</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Call centers scaling from 50 to 1,000 agents without lifting a laptop</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Healthcare teams delivering care with HIPAA-grade compliance</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Remote-first startups with global teams working on unified cloud desktops</span>
          </li>
          <li class="flex items-start space-x-3">
            <div class="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
            <span class="text-gray-700">Designers & CX teams collaborating in real time, without lag</span>
          </li>
        </ul>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl my-12">
          <h2 class="text-2xl font-bold mb-4">🧠 Final Thought: Your Next Desktop Isn't a Laptop</h2>
          <p class="text-lg leading-relaxed text-blue-100 mb-4">It's fast. It's secure. It's always with you. It runs on CloudAdda — powered by AMD EPYC, NVMe, and enterprise-grade reliability.</p>
          <p class="text-xl font-bold text-white">💡 The future of work isn't carried in a backpack. It's floating securely in the cloud — ready whenever, wherever, however you work.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-4 mt-8">
          <div class="bg-orange-50 p-6 rounded-xl text-center">
            <p class="text-orange-900 font-bold text-lg">👉 [Launch a Cloud Desktop Today]</p>
          </div>
          <div class="bg-blue-50 p-6 rounded-xl text-center">
            <p class="text-blue-900 font-bold text-lg">👉 [Explore Role-Based Pricing]</p>
          </div>
        </div>
      `
    }
  };

  const post = posts[id as keyof typeof posts] || posts["zero-to-live-playbook"];

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
