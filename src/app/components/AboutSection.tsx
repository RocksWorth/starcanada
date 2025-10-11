"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Image */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-image.jpg"
                alt="Global trading operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Caption */}
              <div className="absolute bottom-8 left-8 text-white">
                <div className="bg-yellow-500 text-black px-4 py-1 rounded-md inline-block font-bold text-sm mb-3">
                  SINCE 2005
                </div>
                <h3 className="text-2xl font-bold mb-2">Global Excellence</h3>
                <p className="text-white/90 max-w-md">
                  Our state-of-the-art facility in Vancouver handles over 30,000 tons of material annually
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className={`lg:col-span-5 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Global Trading with a 
              <span className="text-yellow-600 block mt-1">Sustainable Focus</span>
            </h3>
            
            <p className="text-gray-700 text-xl leading-relaxed mb-8">
              Star Canada International transforms waste materials into valuable resources through our 
              extensive international network, with partnerships across <span className="font-semibold">25+ countries</span>.
            </p>
            
            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-1">18+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-1">50+</div>
                <div className="text-gray-600 font-medium">Global Partners</div>
              </div>
            </div>
            
            {/* CTA button */}
            <a 
              href="#services" 
              className="inline-flex items-center justify-center w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-xl"
            >
              Our Services
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Core values */}
        <div className={`mt-20 transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Sustainability', desc: 'Environmental responsibility in every operation' },
              { title: 'Reliability', desc: 'Consistent quality and timely delivery' },
              { title: 'Innovation', desc: 'Advanced solutions for modern challenges' },
              { title: 'Partnership', desc: 'Building lasting business relationships' }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 text-center hover:shadow-lg transition-all hover:bg-white">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}