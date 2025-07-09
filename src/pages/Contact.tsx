
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/ab89b288-4111-435f-8c60-3551cd55182c.png" alt="CloudAdda Logo" className="h-16 w-auto object-contain" />
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-orange-500 transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <ContactHero />

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How quickly can you set up our infrastructure?",
                answer: "Most environments are ready within 2-4 hours. Complex custom setups may take up to 24 hours. We'll give you an exact timeline during our initial consultation."
              },
              {
                question: "Do you provide 24/7 support?",
                answer: "Yes! Our support team is available 24/7 via email, chat, and phone. You'll always talk to a human engineer who understands your setup."
              },
              {
                question: "Can I customize my environment?",
                answer: "Absolutely. We specialize in custom configurations. Just tell us your requirements, and we'll build exactly what you need."
              },
              {
                question: "What's your uptime guarantee?",
                answer: "We guarantee 99.9% uptime with full SLA. If we don't meet this, you get service credits automatically."
              },
              {
                question: "How does pricing work?",
                answer: "Transparent, predictable pricing with no hidden fees. You pay for what you use, with volume discounts for larger deployments."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
