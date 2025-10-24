import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import waterAccess from "@/assets/water-access.jpg";
import sanitationFacilities from "@/assets/sanitation-facilities.jpg";
import sanitationChallenge from "@/assets/sanitation-challenge.jpg";

const slides = [
  { image: waterAccess, alt: "Water Access Initiative" },
  { image: sanitationFacilities, alt: "Sanitation Facilities" },
  { image: sanitationChallenge, alt: "Sanitation Challenge" },
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Soft ocean blue to brown luxurious gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(200,70%,55%)]/88 via-[hsl(180,45%,50%)]/85 to-[hsl(30,40%,55%)]/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap gap-3 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm tracking-wide shadow-soft">
              COMMUNITY SANITATION IMPROVEMENT PROGRAMME
            </span>
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-semibold text-sm tracking-wide shadow-soft">
              KHOMAS REGION
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white animate-slide-up">
            Khomas is Growing. Our Commitment Must Grow With It.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed animate-slide-up-delay">
            Our region is the engine of Namibia's progress. Yet rapid growth has created a critical divide. While access to safe drinking water is high, sustainable sanitation has not kept pace — especially in informal settlements.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-delay">
            <Button size="lg" className="rounded-full px-8 shadow-soft hover:shadow-md transition-all duration-300 bg-white text-primary hover:bg-white/90" asChild>
              <a href="/about">Learn More</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 shadow-soft hover:shadow-md backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20 transition-all duration-300" asChild>
              <a href="#get-involved">Get Involved</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-12 bg-primary shadow-md"
                : "w-2 bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;

