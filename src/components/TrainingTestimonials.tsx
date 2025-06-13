
import { Star } from "lucide-react";

const TrainingTestimonials = () => {
  const testimonials = [
    {
      quote: "CloudAdda's training labs saved us weeks of setup time. Our AWS certification program now runs flawlessly with zero infrastructure headaches.",
      author: "Rajesh Kumar",
      role: "Training Director",
      company: "TechEd Solutions",
      rating: 5
    },
    {
      quote: "The best part? We can focus entirely on curriculum delivery. CloudAdda handles all the technical complexity behind the scenes.",
      author: "Priya Sharma",
      role: "L&D Manager", 
      company: "InfoSys Learning",
      rating: 5
    },
    {
      quote: "From Docker workshops to Kubernetes bootcamps - CloudAdda's labs scale instantly. Our students get hands-on practice from day one.",
      author: "Michael Chen",
      role: "Senior Instructor",
      company: "DevOps Academy",
      rating: 5
    },
    {
      quote: "99.9% uptime means our training never stops. CloudAdda's reliability is unmatched in the Indian market.",
      author: "Anita Verma",
      role: "CEO",
      company: "SkillUp Training",
      rating: 5
    },
    {
      quote: "Custom lab environments that match our exact curriculum. CloudAdda understands training infrastructure like no one else.",
      author: "David Wilson",
      role: "Head of Training",
      company: "CyberSec Institute",
      rating: 5
    },
    {
      quote: "Cost-effective, reliable, and incredibly responsive support. CloudAdda has become our go-to infrastructure partner.",
      author: "Sneha Patel",
      role: "Training Coordinator",
      company: "Digital Skills Hub",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Purpose-Built for Every Kind of Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From corporate L&D teams to independent training institutes - see why hundreds of educators trust CloudAdda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-purple-600 font-medium">{testimonial.role}</div>
                <div className="text-gray-600 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingTestimonials;
