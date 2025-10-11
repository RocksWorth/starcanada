"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection({ id }: { id?: string }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // Handle scroll-to functionality for smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set video as loaded after it's ready
  useEffect(() => {
    const videoElement = document.getElementById('background-video');
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
    
    // Trigger animations after component mounts
    setIsVisible(true);
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  return (
    <section id={id} className="relative h-screen overflow-hidden">
      {/* Video Background with Fallback Image */}
      <div className="absolute inset-0 bg-black z-10">
        {/* Fallback image that shows until video loads */}
        <Image
          src="/images/hero-background.jpg" 
          alt="Industrial metal recycling facility"
          fill
          className={`object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
          priority
        />
        
        {/* Video Background */}
        <video 
          id="background-video"
          autoPlay 
          loop 
          muted 
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-75' : 'opacity-0'}`}
        >
          <source src="/videos/industrial-metal-recycling.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50 z-10"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <div className={`mb-6 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-yellow-500 px-4 py-1 rounded">
              <h2 className="text-black font-bold text-lg uppercase tracking-wider">Star Canada International</h2>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block drop-shadow-2xl">Transforming Waste</span>
            <span className="block">Into <span className="text-gradient bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">Valuable Resources</span></span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl leading-relaxed transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} drop-shadow-lg`}>
            Connecting global suppliers and buyers with <span className="text-yellow-300 font-semibold">sustainable solutions</span> for metal scrap trading 
            and industrial equipment since <span className="text-yellow-300 font-semibold">2005</span>.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 transition-all duration-700 delay-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button 
              onClick={() => scrollToSection('services')}
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg text-center transition duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Our Services
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-center transition-all duration-300 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          
          {/* Scroll down indicator with improved animation */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white opacity-80 hover:opacity-100 transition-all hover:text-yellow-400 group"
              aria-label="Scroll down"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium mb-2 tracking-widest uppercase">Discover More</span>
                <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className={`absolute bottom-8 right-8 flex items-center space-x-6 transition-all duration-700 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hidden lg:flex`}>
            <div className="text-white/80 flex flex-col items-center">
              <span className="text-yellow-500 font-bold text-4xl">18+</span>
              <span className="text-xs uppercase tracking-wider mt-1">Years Experience</span>
            </div>
            <div className="text-white/80 flex flex-col items-center">
              <span className="text-yellow-500 font-bold text-4xl">50+</span>
              <span className="text-xs uppercase tracking-wider mt-1">Global Partners</span>
            </div>
            <div className="text-white/80 flex flex-col items-center">
              <span className="text-yellow-500 font-bold text-4xl">100%</span>
              <span className="text-xs uppercase tracking-wider mt-1">Sustainable</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Particles/Floating Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-300 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-float-slow"></div>
      </div>
      
      {/* Add these keyframe animations to your globals.css file */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-30px) translateX(-10px); opacity: 0.6; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-15px); opacity: 0.7; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 200% auto;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
}