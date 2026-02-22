
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";
import ResponsiveNavigation from "@/components/ResponsiveNavigation";

import imgTrainingLabCosts from "@/assets/blog-training-lab-costs.jpg";
import imgCallCenter from "@/assets/blog-call-center.jpg";
import imgDaas from "@/assets/blog-daas-shift.jpg";

const BlogView = () => {
  const { id } = useParams();

  const posts = {
    "training-lab-costs": {
      title: "Why Your Training Lab Costs Are So High (And How to Cut Them by 70%)",
      description: "Break down the hidden cost traps of traditional virtual lab setups and discover how next-gen platforms help trainers save 60–80% without compromising quality.",
      category: "Cost Management",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "CloudAdda Team",
      authorBio: "Cost optimization experts with 15+ years in enterprise training infrastructure",
      image: imgTrainingLabCosts,
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">"We thought the cloud would save us money. Instead, it drained our budget."</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">If you're still paying per-hour for labs, juggling surprise invoices, and scaling infrastructure manually—you're burning money. This article breaks down the hidden cost traps of traditional virtual lab setups and shows you how next-gen platforms like CloudAdda help trainers save 60–80% without compromising quality.</p>
        </div>

        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">1. The Real Cost of 'DIY' Training Labs</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Most training companies think they're saving money by building their own lab infrastructure. The reality? Hidden costs stack up fast:</p>
        
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Surprise cloud bills from AWS/Azure:</strong><span class="text-gray-700"> Unpredictable usage spikes can triple your monthly bill overnight.</span></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Time lost to setup & troubleshooting:</strong><span class="text-gray-700"> 15-20 hours per month per trainer on infrastructure issues.</span></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">High support overhead from infra failures:</strong><span class="text-gray-700"> Every crash costs you student satisfaction and potential refunds.</span></div></li>
        </ul>

        <h2 id="heading-1" class="text-3xl font-bold text-gray-900 mt-16 mb-8">2. The 5 Hidden Expenses in Traditional Cloud Labs</h2>
        <h3 id="heading-2" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">Over-provisioning "just in case"</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">You provision for peak load but pay for idle resources 80% of the time.</p>
        <h3 id="heading-3" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">Long setup lead times</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Manual provisioning takes 2-3 days. Rush jobs cost 50% more.</p>
        <h3 id="heading-4" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">Paid support tiers</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">When labs crash at 2 AM before a big session, premium support costs ₹25,000+ per incident.</p>
        <h3 id="heading-5" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">Poor uptime = re-runs & refunds</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Infrastructure failures force you to re-run sessions or issue refunds.</p>
        <h3 id="heading-6" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">Inefficient student usage</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Students leave labs running overnight. Without auto-shutdown, costs spiral.</p>

        <h2 id="heading-7" class="text-3xl font-bold text-gray-900 mt-16 mb-8">3. The CloudAdda Cost Advantage</h2>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-green-50 p-6 rounded-xl"><h4 class="font-semibold text-green-900 mb-3">Quote-based pricing</h4><p class="text-green-800">Know your exact costs upfront. No surprise bills.</p></div>
          <div class="bg-blue-50 p-6 rounded-xl"><h4 class="font-semibold text-blue-900 mb-3">Human support included</h4><p class="text-blue-800">Real engineers available 24/7. No premium fees.</p></div>
          <div class="bg-purple-50 p-6 rounded-xl"><h4 class="font-semibold text-purple-900 mb-3">Labs ready in 3 hours</h4><p class="text-purple-800">Same-day provisioning means no rushed weekend setups.</p></div>
          <div class="bg-orange-50 p-6 rounded-xl"><h4 class="font-semibold text-orange-900 mb-3">No over-provisioning</h4><p class="text-orange-800">Auto-scaling handles peak loads without waste.</p></div>
        </div>

        <h2 id="heading-8" class="text-3xl font-bold text-gray-900 mt-16 mb-8">4. What Trainers Actually Save</h2>
        <div class="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl my-10">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center"><div class="text-3xl font-bold text-green-600 mb-2">15-20 hrs</div><p class="text-gray-700">Time saved per month</p></div>
            <div class="text-center"><div class="text-3xl font-bold text-blue-600 mb-2">₹1.5-2L</div><p class="text-gray-700">Monthly cost savings</p></div>
            <div class="text-center"><div class="text-3xl font-bold text-purple-600 mb-2">3.2 → 4.8</div><p class="text-gray-700">Student satisfaction</p></div>
          </div>
        </div>

        <h2 id="heading-9" class="text-3xl font-bold text-gray-900 mt-16 mb-8">5. The Bottom Line</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">If you're serious about scaling, you need infra that doesn't fight you—or your CFO. CloudAdda eliminates hidden costs and lets you focus on delivering great training.</p>
      `
    },
    "call-center-case-study": {
      title: "Behind the Screen: How a Call Center Saved ₹20 Lakhs by Moving to Cloud Desktops",
      description: "A mid-sized call center's journey from operational chaos to streamlined efficiency with cloud desktops.",
      category: "Case Study",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      author: "CloudAdda Team",
      authorBio: "Enterprise transformation specialists with proven track record",
      image: imgCallCenter,
      content: `
        <div class="prose-intro"><p class="text-xl leading-relaxed text-gray-700 mb-8">🧨 The Problem: A mid-sized call center with 200 agents was drowning in operational issues.</p></div>
        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">The Breaking Point</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Frequent laptop failures</strong></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Lost hours to crashes, updates, and malware</strong></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">A stretched IT team managing dozens of device issues weekly</strong></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">₹35–₹40 lakh/year hardware and licensing budget</strong></div></li>
        </ul>
        <div class="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg"><p class="text-red-900 font-medium text-lg">Final breaking point: A ransomware attack. 72 hours of downtime. ₹6 lakhs in business loss.</p></div>
        <h2 id="heading-1" class="text-3xl font-bold text-gray-900 mt-16 mb-8">💡 The Switch to Cloud Desktops</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">They turned to CloudAdda — here's what changed:</p>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">No More Laptops:</strong><span class="text-gray-700"> Agents use thin clients or existing machines.</span></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">No Local Data:</strong><span class="text-gray-700"> Everything secure in the cloud.</span></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Same-Day Setup:</strong><span class="text-gray-700"> 200 desktops deployed within 3 hours.</span></div></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Flat Monthly Cost:</strong><span class="text-gray-700"> No hardware refreshes or bloated IT budgets.</span></div></li>
        </ul>
        <h2 id="heading-2" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🧮 The Savings Breakdown</h2>
        <div class="overflow-x-auto mb-8">
          <table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead class="bg-gray-50"><tr><th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Expense Area</th><th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">Before</th><th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">After CloudAdda</th></tr></thead>
            <tbody class="divide-y divide-gray-200">
              <tr><td class="px-6 py-4 text-sm font-medium text-gray-900">Laptops & Licenses</td><td class="px-6 py-4 text-sm text-red-600">₹28L/year</td><td class="px-6 py-4 text-sm text-green-600">₹0</td></tr>
              <tr><td class="px-6 py-4 text-sm font-medium text-gray-900">IT Management</td><td class="px-6 py-4 text-sm text-red-600">₹10L/year</td><td class="px-6 py-4 text-sm text-green-600">₹4L/year</td></tr>
              <tr><td class="px-6 py-4 text-sm font-medium text-gray-900">Downtime & Security</td><td class="px-6 py-4 text-sm text-red-600">₹6L/year</td><td class="px-6 py-4 text-sm text-green-600">₹0</td></tr>
              <tr class="bg-yellow-50"><td class="px-6 py-4 text-sm font-bold text-gray-900">Total</td><td class="px-6 py-4 text-sm font-bold text-red-600">₹44L/year</td><td class="px-6 py-4 text-sm font-bold text-green-600">₹24L/year</td></tr>
            </tbody>
          </table>
        </div>
        <div class="bg-green-50 p-8 rounded-2xl my-10 text-center"><h3 class="text-2xl font-bold text-green-900 mb-4">🎯 Net Annual Savings: ₹20,00,000+</h3><p class="text-lg text-green-800">📈 33% jump in agent productivity.</p></div>
        <h2 id="heading-3" class="text-3xl font-bold text-gray-900 mt-16 mb-8">💬 Feedback</h2>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg"><p class="text-blue-900 font-medium text-lg italic">"We used to worry about patching machines and fighting viruses. Now we just onboard agents and go."</p></div>
        <h2 id="heading-4" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🧠 Final Result</h2>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl"><ul class="space-y-3"><li class="flex items-center space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full"></div><span class="text-gray-700">98.7% agent uptime</span></li><li class="flex items-center space-x-3"><div class="w-2 h-2 bg-blue-500 rounded-full"></div><span class="text-gray-700">Just 1 IT manager for 200 agents</span></li></ul></div>
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl"><ul class="space-y-3"><li class="flex items-center space-x-3"><div class="w-2 h-2 bg-purple-500 rounded-full"></div><span class="text-gray-700">Zero data loss or malware</span></li><li class="flex items-center space-x-3"><div class="w-2 h-2 bg-pink-500 rounded-full"></div><span class="text-gray-700">Better compliance, smoother audits</span></li></ul></div>
        </div>
      `
    },
    "daas-shift-2025": {
      title: "Why DaaS Is Taking Over: The Shift Away from Laptops in 2025",
      description: "Explore why smart companies are moving away from laptops to Desktop-as-a-Service solutions.",
      category: "Industry Trends",
      readTime: "5 min read",
      date: "Dec 10, 2024",
      author: "CloudAdda Team",
      authorBio: "Future of work technology analysts and DaaS implementation experts",
      image: imgDaas,
      content: `
        <div class="prose-intro">
          <p class="text-xl leading-relaxed text-gray-700 mb-8">🔥 The End of the Laptop Era?</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Walk into any modern office and you'll still see rows of laptops. But in 2025, they're no longer the future — they're the friction.</p>
          <p class="text-lg leading-relaxed text-gray-700 mb-8">Smart companies are asking: Why burn ₹70,000–₹1,20,000 per employee on hardware that slows down, breaks, or walks away?</p>
        </div>
        <h2 id="heading-0" class="text-3xl font-bold text-gray-900 mt-12 mb-6">💥 Laptops Weren't Built for This</h2>
        <h3 id="heading-1" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">They crash.</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Spilled coffee. Overheating. Disk failures. It's not if — it's when.</p>
        <h3 id="heading-2" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">They choke.</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Docker, Chrome, Zoom, VS Code — your laptop turns into a jet engine before lunchtime.</p>
        <h3 id="heading-3" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">They delay.</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Onboarding takes days. Setups drag.</p>
        <h3 id="heading-4" class="text-2xl font-semibold text-gray-900 mt-10 mb-6">They terrify IT.</h3>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">Sensitive data scattered across hundreds of machines. VPNs misconfigured.</p>
        <h2 id="heading-5" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🚀 Why Teams Are Switching to DaaS in 2025</h2>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-blue-50 p-6 rounded-xl"><h4 class="font-semibold text-blue-900 mb-3">🖥 Productivity from Any Device</h4><p class="text-blue-800">Laptop stolen? Log in from your phone. You're back in seconds.</p></div>
          <div class="bg-green-50 p-6 rounded-xl"><h4 class="font-semibold text-green-900 mb-3">⚡ Instant Setup</h4><p class="text-green-800">New hire today, fully productive in under 15 minutes.</p></div>
          <div class="bg-purple-50 p-6 rounded-xl"><h4 class="font-semibold text-purple-900 mb-3">🔐 Built-In Security</h4><p class="text-purple-800">Data never touches local machines. End-to-end encryption.</p></div>
          <div class="bg-orange-50 p-6 rounded-xl"><h4 class="font-semibold text-orange-900 mb-3">💸 Predictable Cost</h4><p class="text-orange-800">No CapEx. Just one flat, scalable monthly cost.</p></div>
        </div>
        <h2 id="heading-6" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🧠 Smart Configs for Every Role</h2>
        <div class="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl my-10">
          <ul class="space-y-4">
            <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-gray-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Entry-level staff?</strong><span class="text-gray-700"> 2-core lightweight machines.</span></div></li>
            <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Designers & Devs?</strong><span class="text-gray-700"> 8-core beasts with NVMe power.</span></div></li>
            <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><div><strong class="text-gray-900">Finance, Ops, CX?</strong><span class="text-gray-700"> Tailored setups that match the workload.</span></div></li>
          </ul>
        </div>
        <h2 id="heading-7" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🌐 Who's Already Making the Switch?</h2>
        <ul class="space-y-4 mb-8">
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Developers running full-stack apps with Docker, Postgres, and Kubernetes</span></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Call centers scaling from 50 to 1,000 agents</span></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Healthcare teams with HIPAA-grade compliance</span></li>
          <li class="flex items-start space-x-3"><div class="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div><span class="text-gray-700">Remote-first startups with global teams</span></li>
        </ul>
        <h2 id="heading-8" class="text-3xl font-bold text-gray-900 mt-16 mb-8">🧠 Final Thought</h2>
        <p class="text-lg leading-relaxed text-gray-700 mb-6">It's fast. It's secure. It's always with you. It runs on CloudAdda.</p>
        <p class="text-lg leading-relaxed text-gray-700 mb-8">💡 The future of work isn't carried in a backpack. It's floating securely in the cloud.</p>
      `
    }
  };

  const post = posts[id as keyof typeof posts] || posts["training-lab-costs"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ResponsiveNavigation />

      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10">
          {/* Main Article */}
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline" className="text-xs uppercase tracking-wide">{post.category}</Badge>
                <span className="text-sm text-gray-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{post.description}</p>

              <div className="flex items-center gap-3 pb-8 mb-8 border-b border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{post.author}</div>
                  <div className="text-xs text-gray-500">{post.authorBio}</div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Bottom CTA */}
              <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">Want to learn more about how CloudAdda can help?</p>
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
            <BlogSidebar content={post.content} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
