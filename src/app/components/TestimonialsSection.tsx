"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image?: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Anderson",
    position: "Procurement Manager",
    company: "MetalWorks Inc.",
    quote: "Star Canada International has been an invaluable partner for our metal procurement needs. Their global reach and commitment to quality have consistently exceeded our expectations.",
    image: "/images/testimonials/john-anderson.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "Operations Director",
    company: "Global Industries",
    quote: "Working with Star Canada has transformed our supply chain. Their sustainable approach and competitive pricing have helped us reduce costs while meeting our environmental goals.",
    image: "/images/testimonials/sarah-chen.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "CEO",
    company: "Rodriguez Manufacturing",
    quote: "The team at Star Canada International truly understands the industrial equipment market. Their expertise has helped us source high-quality used machinery at excellent prices.",
    image: "/images/testimonials/michael-rodriguez.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "Emma Williams",
    position: "Sustainability Officer",
    company: "EcoTech Solutions",
    quote: "Star Canada's commitment to sustainable practices aligns perfectly with our corporate values. They've helped us implement recycling solutions that have measurably reduced our environmental impact.",
    image: "/images/testimonials/emma-williams.jpg",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Autoplay functionality
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setActiveIndex(index);
    // Reset autoplay timeout when manually navigating
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
  };

  const nextSlide = () => {
    goToSlide((activeIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    goToSlide(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  };

  // Generate star rating display
  const renderRating = () => {
    return (
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            className="w-8 h-8 text-yellow-500" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section 
      id="testimonials" 
      className="py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" 
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-10 max-w-7xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl">
            Trusted by companies worldwide for our commitment to quality and sustainability
          </p>
        </div>

        {/* Featured testimonial */}
        <div className={`mb-20 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left column - Image (on larger screens) */}
              <div className="hidden lg:block lg:col-span-2 relative bg-gradient-to-br from-yellow-50 to-yellow-100">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    {currentTestimonial.image ? (
                      <Image 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white text-5xl font-bold">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-8 left-8 opacity-20">
                  <svg className="w-24 h-24 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="absolute top-8 right-8 opacity-10">
                  <svg className="w-32 h-32 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              
              {/* Right column - Quote */}
              <div className="p-10 md:p-12 lg:col-span-3 flex flex-col justify-center">
                {/* Small profile image (mobile only) */}
                <div className="flex items-center mb-6 lg:hidden">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 mr-4 flex-shrink-0">
                    {currentTestimonial.image ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={currentTestimonial.image} 
                          alt={currentTestimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-yellow-500 flex items-center justify-center text-white text-xl font-bold">
                        {currentTestimonial.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{currentTestimonial.name}</h3>
                    <p className="text-gray-600">{currentTestimonial.position}</p>
                  </div>
                </div>
                
                {/* Company badge */}
                <div className="mb-8">
                  <div className="inline-block bg-gradient-to-r from-yellow-50 to-yellow-100 px-6 py-3 rounded-xl text-yellow-700 font-bold text-lg shadow-md border border-yellow-200">
                    {currentTestimonial.company}
                  </div>
                </div>
                
                {/* Quote */}
                <div className="mb-8 relative">
                  <div className="absolute -left-4 -top-2 text-yellow-300 opacity-50">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light italic">&ldquo;{currentTestimonial.quote}&rdquo;</p>
                </div>
                
                {/* Rating stars */}
                {renderRating()}
                
                {/* Author info (desktop) */}
                <div className="hidden lg:flex items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{currentTestimonial.name}</h3>
                    <p className="text-lg text-gray-600">{currentTestimonial.position}, {currentTestimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation controls (positioned outside the card for better visibility) */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between pointer-events-none z-30">
              <button 
                onClick={prevSlide}
                className="group w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-gray-800 transition-all hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white pointer-events-auto focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <svg className="w-7 h-7 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="group w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-gray-800 transition-all hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white pointer-events-auto focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg className="w-7 h-7 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Dot indicators - positioned below the card */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 rounded-full transition-all focus:outline-none ${
                  activeIndex === index 
                    ? 'bg-yellow-500 w-12' 
                    : 'bg-gray-300 hover:bg-gray-400 w-4'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Testimonial stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-200">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3">98%</p>
            <p className="text-gray-700 text-base font-semibold">Client Satisfaction</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-200">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3">150+</p>
            <p className="text-gray-700 text-base font-semibold">Active Clients</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-200">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3">18+</p>
            <p className="text-gray-700 text-base font-semibold">Years of Service</p>
          </div>
          <div className="group bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-200">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3">25+</p>
            <p className="text-gray-700 text-base font-semibold">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}