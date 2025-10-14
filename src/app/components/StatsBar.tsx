"use client";

import { useState, useEffect, useRef } from 'react';

export default function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    partners: 0,
    clients: 0,
    countries: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          animateCounters();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
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

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      years: 18,
      partners: 50,
      clients: 150,
      countries: 25
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        years: Math.floor(targets.years * progress),
        partners: Math.floor(targets.partners * progress),
        clients: Math.floor(targets.clients * progress),
        countries: Math.floor(targets.countries * progress)
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(interval);
      }
    }, stepDuration);
  };

  const stats = [
    {
      value: `${counts.years}+`,
      label: 'Years of Excellence',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      value: `${counts.partners}+`,
      label: 'Global Partners',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      value: `${counts.clients}+`,
      label: 'Satisfied Clients',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: `${counts.countries}+`,
      label: 'Countries Served',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-4 transform transition-transform hover:scale-110 hover:rotate-6 duration-300">
                  {stat.icon}
                </div>
                
                {/* Value */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-sm md:text-base lg:text-lg text-white/90 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="mt-12 flex justify-center">
          <div className="w-32 h-1 bg-white/40 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

