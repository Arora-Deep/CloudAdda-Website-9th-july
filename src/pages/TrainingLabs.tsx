
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings, Zap, MessageCircle, Target, CheckCircle, Clock, Shield, Wrench } from "lucide-react";
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
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
              <span className="text-purple-600">Training Labs That Just Work.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You bring the training. We handle the infrastructure — fast, stable, and tailored to your exact needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Request Your Lab
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <p className="text-gray-500 text-lg">Let's Get You Set Up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Philosophical Statement - Cascading Layout */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">You're Not an Infra Company — So Stop Acting Like One.</h2>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-16">
              <div className="text-center transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                    You're here to teach. Not configure virtual networks. Not debug port forwarding. Not pray your lab doesn't crash mid-session.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-1 h-24 bg-purple-300"></div>
              </div>
              
              <div className="text-center transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300">
                  <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                    Every minute spent wrestling infrastructure is a minute lost with your learners. CloudAdda flips that.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-1 h-24 bg-orange-300"></div>
              </div>
              
              <div className="text-center transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-purple-50 border-2 border-purple-300 rounded-3xl p-12 shadow-xl">
                  <p className="text-2xl font-bold text-purple-800 leading-relaxed">
                    We handle everything — fast setup, deep customization, zero downtime — so your only job is delivering a great experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problems We Kill - Vertical Split Comparison */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">The Problems We Kill</h2>
          </div>
          
          <div className="space-y-12">
            {[
              { old: "Hours wasted spinning up VMs", new: "Labs provisioned in hours — not days" },
              { old: "Labs crash mid-session", new: "Rock-solid environments, always" },
              { old: "Trainees struggle to log in", new: "One-click access, no confusion" },
              { old: "Poor support, no real help", new: "Engineers on call, always human" },
              { old: "One-size-fits-all setups", new: "Tailored labs for your curriculum" }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="grid lg:grid-cols-2 gap-1 bg-gray-200 p-1 rounded-3xl">
                  <div className="bg-white rounded-2xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full"></div>
                    <h3 className="text-lg font-bold text-red-600 mb-4">The Old Way</h3>
                    <p className="text-xl text-gray-700">{item.old}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="text-lg font-bold text-green-600 mb-4">The CloudAdda Way</h3>
                    <p className="text-xl text-gray-700">{item.new}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center z-10">
                  <ArrowRight className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works - Interconnected Web */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">How It Works</h2>
          </div>
          
          <div className="relative min-h-96">
            {[
              { step: "1", title: "Share Requirements", description: "You share your course requirements (specs, tools, OS, network config).", position: "top-left" },
              { step: "2", title: "We Provision", description: "We provision the full environment — secure, stable, and customized — in hours.", position: "top-right" },
              { step: "3", title: "Get Your Link", description: "You get a link. Trainees click, log in, and everything just works.", position: "bottom-left" },
              { step: "4", title: "Focus on Teaching", description: "Done. You focus on the teaching. We handle the rest.", position: "bottom-right" }
            ].map((item, index) => (
              <div 
                key={index}
                className={`absolute w-80 group hover:scale-105 transition-all duration-500 ${
                  item.position === 'top-left' ? 'top-0 left-0' :
                  item.position === 'top-right' ? 'top-0 right-0' :
                  item.position === 'bottom-left' ? 'bottom-0 left-0' :
                  'bottom-0 right-0'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 relative">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <line x1="20%" y1="30%" x2="80%" y2="30%" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="80%" y1="30%" x2="80%" y2="70%" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="80%" y1="70%" x2="20%" y2="70%" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="20%" y1="70%" x2="20%" y2="30%" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 4: Who This Is For - Checklist Matrix */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">Who This Is For</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                "Training Companies running instructor-led or self-paced courses",
                "Corporate L&D teams delivering hands-on tech upskilling", 
                "Bootcamps and academies needing high-availability lab infra",
                "Freelance trainers tired of DIY setups and flaky cloud platforms"
              ].map((item, index) => (
                <div key={index} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <CheckCircle className="w-6 h-6 text-purple-600" />
                      </div>
                      <p className="text-xl text-gray-700 leading-relaxed flex-1">{item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <p className="text-3xl font-bold text-purple-600">If you train with tech, we've got you covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Real Talk - Quote Carousel */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">Real Talk — Why Trainers Switch to CloudAdda</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              "We were spending more time on infra than training.",
              "Trainees couldn't log in. My reputation was suffering.", 
              "Other providers were slow, robotic, and couldn't customize anything."
            ].map((quote, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative min-h-48 flex items-center">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💭</span>
                  </div>
                  <p className="text-xl italic text-gray-700 leading-relaxed">{quote}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 shadow-xl border-2 border-purple-200">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-purple-600 mb-8">With CloudAdda:</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  "Labs are ready in hours, not days.",
                  "Environments are stable, secure, and tailored to your stack.",
                  "Support is fast, human, and technical — not sales reps."
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-purple-50 rounded-2xl">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-800">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <p className="text-2xl font-bold text-purple-800">You're not renting cloud VMs. You're getting a real partner.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why We Beat Everyone - Pentagon Formation */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900">Why CloudAdda Beats Everyone Else</h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto min-h-96">
            {[
              { title: "Built for Trainers", description: "Not generic cloud — this is purpose-built for training.", icon: Target, position: "center-top" },
              { title: "Zero Downtime Labs", description: "Stability is baked in. Mid-session crashes? Not here.", icon: Shield, position: "right" },
              { title: "Tailored, Not Templated", description: "We don't force you to fit into our platform — we fit to your course.", icon: Settings, position: "bottom-right" },
              { title: "Infra Experts on Call", description: "Every support ticket is handled by an engineer. No bots. Ever.", icon: MessageCircle, position: "bottom-left" },
              { title: "Rapid Turnaround", description: "Share your specs today. Start training tomorrow.", icon: Zap, position: "left" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`absolute w-72 group hover:scale-105 transition-all duration-500 ${
                  feature.position === 'center-top' ? 'top-0 left-1/2 transform -translate-x-1/2' :
                  feature.position === 'right' ? 'top-1/3 right-0' :
                  feature.position === 'bottom-right' ? 'bottom-0 right-1/4' :
                  feature.position === 'bottom-left' ? 'bottom-0 left-1/4' :
                  'top-1/3 left-0'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
            
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center shadow-xl z-10">
              <Wrench className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-16 border-2 border-purple-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Pricing That Makes Sense</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We don't do per-minute billing or surprise charges. You get transparent, flat-rate pricing that scales with your batch size — not your headaches.
            </p>
            
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-6">
              Let's Discuss Pricing
            </Button>
            <p className="text-lg text-gray-500">We'll send you a custom quote based on your course needs.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Your Students Deserve Better Labs. So Do You.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            You train. We take care of everything else — with blazing speed, unbeatable support, and no compromises.
          </p>
          
          <div className="space-y-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl px-16 py-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <ArrowRight className="mr-3 h-6 w-6" />
              Request Your Lab Now
            </Button>
            <p className="text-lg text-gray-500">Instant response. Zero friction.</p>
          </div>
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
