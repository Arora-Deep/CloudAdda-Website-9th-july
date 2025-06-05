
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Settings, Zap, Lock, GraduationCap, Building2, Users, MessageCircle, Target, Rocket, CheckCircle, AlertTriangle, Quote, Clock, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const TrainingLabs = () => {
  return (
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
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
              <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
                Log In
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-purple-600">Training Labs That Just Work.</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              You bring the training. We handle the infrastructure — fast, stable, and tailored to your exact needs.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Request Your Lab
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <p className="text-lg text-gray-500 mt-4">Let's Get You Set Up</p>
          </div>
        </div>
      </section>

      {/* Section 1: You're Not an Infra Company */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">You're Not an Infra Company — So Stop Acting Like One.</h2>
            <div className="max-w-4xl mx-auto space-y-8 text-xl leading-relaxed">
              <p>You're here to teach. Not configure virtual networks. Not debug port forwarding. Not pray your lab doesn't crash mid-session.</p>
              <p>Every minute spent wrestling infrastructure is a minute lost with your learners. CloudAdda flips that.</p>
              <p className="text-2xl font-semibold text-yellow-300">We handle everything — fast setup, deep customization, zero downtime — so your only job is delivering a great experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problems We Kill */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">The Problems We Kill</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 to-green-400 hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  old: "☠️ Hours wasted spinning up VMs",
                  new: "⚡ Labs provisioned in hours — not days",
                  oldBg: "bg-red-50 border-red-200",
                  newBg: "bg-green-50 border-green-200"
                },
                {
                  old: "😫 Labs crash mid-session",
                  new: "✅ Rock-solid environments, always",
                  oldBg: "bg-red-50 border-red-200",
                  newBg: "bg-green-50 border-green-200"
                },
                {
                  old: "🤯 Trainees struggle to log in",
                  new: "🔒 One-click access, no confusion",
                  oldBg: "bg-red-50 border-red-200",
                  newBg: "bg-green-50 border-green-200"
                },
                {
                  old: "🤝 Poor support, no real help",
                  new: "❤️ Engineers on call, always human",
                  oldBg: "bg-red-50 border-red-200",
                  newBg: "bg-green-50 border-green-200"
                },
                {
                  old: "🔁 One-size-fits-all setups",
                  new: "🧬 Tailored labs for your curriculum",
                  oldBg: "bg-red-50 border-red-200",
                  newBg: "bg-green-50 border-green-200"
                }
              ].map((item, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`p-6 rounded-2xl border-2 ${item.oldBg} transform hover:scale-105 transition-all duration-300`}>
                    <h3 className="text-xl font-bold text-red-700 mb-2">The Old Way</h3>
                    <p className="text-lg text-gray-700">{item.old}</p>
                  </div>
                  
                  <div className="hidden lg:flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-2xl border-2 ${item.newBg} transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                    <h3 className="text-xl font-bold text-green-700 mb-2">The CloudAdda Way</h3>
                    <p className="text-lg text-gray-700">{item.new}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">How It Works</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Share Requirements",
                description: "You share your course requirements (specs, tools, OS, network config).",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2", 
                title: "We Provision",
                description: "We provision the full environment — secure, stable, and customized — in hours.",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "3",
                title: "Get Your Link",
                description: "You get a link. Trainees click, log in, and everything just works.",
                color: "from-orange-500 to-orange-600"
              },
              {
                step: "4",
                title: "Focus on Teaching",
                description: "Done. You focus on the teaching. We handle the rest.",
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Who This Is For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Who This Is For</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Training Companies running instructor-led or self-paced courses",
              "Corporate L&D teams delivering hands-on tech upskilling", 
              "Bootcamps and academies needing high-availability lab infra",
              "Freelance trainers tired of DIY setups and flaky cloud platforms"
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-purple-600">If you train with tech, we've got you covered.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Real Talk */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-8">Real Talk — Why Trainers Switch to CloudAdda</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              "🧠 \"We were spending more time on infra than training.\"",
              "💬 \"Trainees couldn't log in. My reputation was suffering.\"", 
              "🛑 \"Other providers were slow, robotic, and couldn't customize anything.\""
            ].map((quote, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-0 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <p className="text-xl italic">{quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-yellow-300">💡 With CloudAdda:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Labs are ready in hours, not days.",
                "Environments are stable, secure, and tailored to your stack.",
                "Support is fast, human, and technical — not sales reps."
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl font-bold mt-8">You're not renting cloud VMs. You're getting a real partner.</p>
          </div>
        </div>
      </section>

      {/* Section 6: Why CloudAdda Beats Everyone Else */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why CloudAdda Beats Everyone Else</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Built for Trainers",
                description: "Not generic cloud — this is purpose-built for training.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Shield,
                title: "Zero Downtime Labs",
                description: "Stability is baked in. Mid-session crashes? Not here.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Settings,
                title: "Tailored, Not Templated",
                description: "We don't force you to fit into our platform — we fit to your course.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: MessageCircle,
                title: "Infra Experts on Call",
                description: "Every support ticket is handled by an engineer. No bots. Ever.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: Zap,
                title: "Rapid Turnaround",
                description: "Share your specs today. Start training tomorrow.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-purple-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing That Makes Sense</h2>
            <p className="text-xl text-gray-600 mb-8">
              We don't do per-minute billing or surprise charges. You get transparent, flat-rate pricing that scales with your batch size — not your headaches.
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Let's Discuss Pricing
            </Button>
            <p className="text-lg text-gray-500 mt-4">We'll send you a custom quote based on your course needs.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Your Students Deserve Better Labs. So Do You.
          </h2>
          <p className="text-2xl text-gray-200 mb-12">
            You train. We take care of everything else — with blazing speed, unbeatable support, and no compromises.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105">
            <ArrowRight className="mr-3 h-6 w-6" />
            Request Your Lab Now
          </Button>
          <p className="text-lg text-gray-300 mt-4">Instant response. Zero friction.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl">CloudAdda</span>
              </div>
              <p className="text-gray-400">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/training-labs" className="hover:text-white transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-white transition-colors">Virtual Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-white transition-colors">VPS</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CloudAdda. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainingLabs;
