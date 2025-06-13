
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Start a Conversation",
      description: "Got questions? We've got answers. Let's chat about your infrastructure needs.",
      action: "Chat with Sales",
      highlight: true
    },
    {
      icon: Phone,
      title: "Call Us Directly",
      description: "Speak to a real human who understands tech, costs, and constraints.",
      action: "+91 98765 43210",
      highlight: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed questions? Send us an email and we'll respond within 2 hours.",
      action: "support@cloudadda.com",
      highlight: false
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Emergency support only" }
  ];

  const quickLinks = [
    { title: "Book a 15-min Demo", description: "See CloudAdda in action" },
    { title: "Request Custom Pricing", description: "For training labs or enterprise needs" },
    { title: "Technical Documentation", description: "APIs, guides, and tutorials" },
    { title: "Status Page", description: "Real-time system status" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">Home</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Pricing</Link>
              <Link to="/support" className="text-gray-700 hover:text-orange-500 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Let's Build Something
                <span className="block text-orange-500">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you need a quick chat, detailed consultation, or just want to say hello — 
                we're here, we're human, and we genuinely love talking about infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  Start a Conversation
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg">
                  Schedule a Call
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-orange-50 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Friendly team welcoming visitors]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Preferred Way to Connect</h2>
            <p className="text-xl text-gray-600">We're available across multiple channels. Pick what works best for you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`rounded-3xl p-8 text-center transition-all duration-300 hover:scale-105 ${
                  method.highlight 
                    ? 'bg-purple-600 text-white shadow-2xl' 
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                  method.highlight ? 'bg-white bg-opacity-20' : 'bg-orange-100'
                }`}>
                  <method.icon className={`w-8 h-8 ${
                    method.highlight ? 'text-white' : 'text-orange-600'
                  }`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  method.highlight ? 'text-white' : 'text-gray-900'
                }`}>
                  {method.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${
                  method.highlight ? 'text-purple-100' : 'text-gray-600'
                }`}>
                  {method.description}
                </p>
                <Button 
                  className={`w-full ${
                    method.highlight 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {method.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-3 bg-orange-100 rounded-full px-6 py-3 mb-8">
                <Clock className="w-6 h-6 text-orange-600" />
                <span className="text-orange-700 font-semibold">We're Available</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8">When & Where to Find Us</h2>
              
              <div className="space-y-6 mb-8">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-purple-600 font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      123 Tech Park, Cyber City<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-purple-50 rounded-3xl h-96 flex items-center justify-center text-gray-400">
                [3D Illustration: Modern office with friendly team at work]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Looking for Something Specific?</h2>
            <p className="text-xl text-gray-600">Quick access to our most requested resources</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 w-full">
                  Access Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-3 bg-white bg-opacity-20 rounded-full px-6 py-3 mb-8">
            <Zap className="w-6 h-6" />
            <span className="font-semibold">Lightning Fast Response</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Our Response Time Promise</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">&lt; 2 Hours</div>
              <div className="opacity-90">Email Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt; 15 Minutes</div>
              <div className="opacity-90">Live Chat</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Same Day</div>
              <div className="opacity-90">Phone Callbacks</div>
            </div>
          </div>
          <p className="text-xl opacity-90">
            Because your time matters, and infrastructure problems can't wait.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src="/lovable-uploads/2797aeb8-75f1-469f-bf89-b1bdd8c25e91.png" alt="CloudAdda Logo" className="h-8 w-auto" />
                <span className="font-bold text-xl text-gray-900">CloudAdda</span>
              </Link>
              <p className="text-gray-600">
                Born in India, Built for the World. Infrastructure that just works.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/training-labs" className="hover:text-gray-900 transition-colors">Training Labs</Link></li>
                <li><Link to="/cloud-desktops" className="hover:text-gray-900 transition-colors">Virtual Desktops</Link></li>
                <li><Link to="/vps" className="hover:text-gray-900 transition-colors">VPS</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
                <li><Link to="/pricing" className="hover:text-gray-900 transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/support" className="hover:text-gray-900 transition-colors">Help Center</Link></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
