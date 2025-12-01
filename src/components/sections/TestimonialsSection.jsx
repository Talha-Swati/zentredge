// src/components/sections/TestimonialsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from '../common/AnimatedSection';

/**
 * Client testimonials section with carousel
 */
const TestimonialsSection = ({ isDark, visibleSections }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Working with ZentRedge was a game-changer for our startup. Their expertise in SaaS development helped us launch our product in record time, and their ongoing support has been invaluable.",
      author: "Tauseef Ashraf",
      position: "My at drone USA client",
      avatar: null
    },
    {
      id: 2,
      quote: "The AI integration they built for us has transformed our business operations. We've seen a 40% increase in efficiency since implementation.",
      author: "Furqan Khan",
      position: "CEO At-Drone",
      avatar: null
    },
    {
      id: 3,
      quote: "Professional, responsive, and technically excellent. ZentRedge delivered exactly what we needed, on time and within budget.",
      author: "David Rodriguez",
      position: "CEO, CloudSync",
      avatar: null
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 2000); // Change every 2 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-[#0B0B0D]' : 'bg-white'
    }`}>
      <div className="max-w-4xl mx-auto">
        <AnimatedSection
          animationId="testimonials-header"
          animationType="slide-up"
          visibleSections={visibleSections}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#1A1A1A]'
          }`}>
            What Our Clients Say
          </h2>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-[#B3B3B3]' : 'text-[#4A4A4A]'
          }`}>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </AnimatedSection>

        <AnimatedSection
          animationId="testimonial-card"
          animationType="scale-in"
          visibleSections={visibleSections}
          delay="delay-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative rounded-2xl p-8 md:p-12 ${
            isDark 
              ? 'bg-[#1A1A1C] border border-[#FF6B00]/20' 
              : 'bg-[#F8F9FA] border-2 border-[#FF6B00]/30'
          } shadow-xl`}
        >
          {/* Quote Icon */}
          <div className="absolute top-6 left-6">
            <svg className="w-12 h-12 text-[#FF6B00] opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial Content */}
          <div className="relative z-10 text-center">
            <p className={`text-lg md:text-xl italic mb-8 ${
              isDark ? 'text-[#E6E6E6]' : 'text-[#1A1A1A]'
            }`}>
              "{testimonials[activeTestimonial].quote}"
            </p>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${
                isDark ? 'bg-[#FF6B00]/10' : 'bg-[#FF6B00]/20'
              }`}>
                <span className="text-2xl font-bold text-[#FF6B00]">
                  {testimonials[activeTestimonial].author.charAt(0)}
                </span>
              </div>
              <div className={`font-bold text-lg ${
                isDark ? 'text-white' : 'text-[#1A1A1A]'
              }`}>
                {testimonials[activeTestimonial].author}
              </div>
              <div className={`text-sm ${
                isDark ? 'text-[#FF6B00]' : 'text-[#FF6B00]'
              }`}>
                {testimonials[activeTestimonial].position}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isDark 
                  ? 'bg-[#2A2A2C] hover:bg-[#3A3A3C] text-white' 
                  : 'bg-white hover:bg-[#F0F0F0] text-[#1A1A1A]'
              } border ${
                isDark ? 'border-[#FF6B00]/20' : 'border-[#FF6B00]/30'
              } transition-all duration-300`}
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-[#FF6B00] w-8'
                      : isDark
                        ? 'bg-[#3A3A3C]'
                        : 'bg-[#D0D0D0]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isDark 
                  ? 'bg-[#2A2A2C] hover:bg-[#3A3A3C] text-white' 
                  : 'bg-white hover:bg-[#F0F0F0] text-[#1A1A1A]'
              } border ${
                isDark ? 'border-[#FF6B00]/20' : 'border-[#FF6B00]/30'
              } transition-all duration-300`}
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
