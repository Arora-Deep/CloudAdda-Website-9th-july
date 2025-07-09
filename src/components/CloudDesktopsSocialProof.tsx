
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
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by 5,000+ Development Teams</h2>
          <p className="text-xl text-gray-600">From solo developers to enterprise teams</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-16 hover:shadow-xl transition-all duration-300 text-center border border-gray-200">
                    <div className="flex items-center justify-center space-x-1 mb-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-7 h-7 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="max-w-4xl mx-auto">
                      <p className="text-gray-700 leading-relaxed mb-12 text-2xl italic font-light">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center border-2 border-blue-300">
                        <span className="text-blue-700 font-bold text-xl">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-gray-900 text-xl">{testimonial.author}</div>
                        <div className="text-gray-600 text-lg">{testimonial.title}</div>
                        <div className="text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-8 bg-white/80 hover:bg-white shadow-lg" />
            <CarouselNext className="right-8 bg-white/80 hover:bg-white shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CloudDesktopsSocialProof;
