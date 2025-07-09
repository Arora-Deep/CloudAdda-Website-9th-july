
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const CloudDesktopsSocialProof = () => {
  const [api, setApi] = useState<any>();

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

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by 5,000+ Development Teams</h2>
          <p className="text-xl text-gray-600">From solo developers to enterprise teams</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="bg-gray-50 rounded-2xl p-12 hover:shadow-lg transition-all duration-300 text-center">
                    <div className="flex items-center justify-center space-x-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
                        <div className="text-gray-600">{testimonial.title}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsSocialProof;
