
import { Star } from "lucide-react";

const CloudDesktopsSocialProof = () => {
  const testimonials = [
    {
      quote: "We reduced our development environment costs by 60% while doubling performance. Our team is more productive than ever.",
      author: "Prateek Singh",
      title: "CTO, FinTech Startup",
      company: "Series B Company",
      rating: 5
    },
    {
      quote: "New developers are productive on day one. No more week-long environment setup. It's like magic.",
      author: "Divya Agarwal",
      title: "Engineering Manager",
      company: "E-commerce Platform",
      rating: 5
    },
    {
      quote: "CloudAdda desktops feel faster than our local machines. The consistency across our team is incredible.",
      author: "Karthik Nair",
      title: "Senior Developer",
      company: "SaaS Company",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by 5,000+ Development Teams</h2>
          <p className="text-xl text-gray-600">From solo developers to enterprise teams</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center text-gray-400">
              [3D Illustration: Happy diverse development team celebrating with laptops showing cloud desktops]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsSocialProof;
