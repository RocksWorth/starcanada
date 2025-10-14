"use client";

import { useState, useEffect, useRef } from 'react';

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

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-100 rounded-full filter blur-3xl opacity-30 -mr-36"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-50 rounded-full filter blur-3xl opacity-40 -ml-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the industry in sustainable metal recycling and global trade since 2005
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left column - Image */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700">
                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="bg-yellow-500 text-black px-5 py-2 rounded-full inline-flex items-center font-bold text-sm shadow-lg">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    SINCE 2005
                  </div>
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">Global Excellence</h3>
                  <p className="text-white/90 text-lg drop-shadow-md">
                    Our state-of-the-art facility in Vancouver handles over <span className="font-bold text-yellow-300">30,000 tons</span> of material annually
                  </p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-2xl -z-10 transform rotate-12"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-full -z-10 opacity-50"></div>
            </div>
          </div>
          
          {/* Right column - Text */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Global Trading with a 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 block mt-2">Sustainable Focus</span>
            </h3>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              Star Canada International transforms waste materials into valuable resources through our 
              extensive international network, with partnerships across <span className="font-bold text-yellow-600">25+ countries</span>.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We specialize in connecting global suppliers and buyers, offering comprehensive solutions for 
              metal scrap trading, industrial equipment, and logistics services.
            </p>
            
            {/* Key Features List */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '🌍', text: 'Global network spanning 25+ countries' },
                { icon: '♻️', text: '100% commitment to sustainable practices' },
                { icon: '⚡', text: 'Fast, reliable logistics and delivery' },
                { icon: '🏆', text: 'Industry-leading quality standards' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center text-2xl group-hover:bg-yellow-100 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA button */}
            <button 
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform hover:scale-105"
            >
              Explore Our Services
              <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Core values */}
        <div className={`transition-all duration-700 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Sustainability', 
                desc: 'Environmental responsibility in every operation',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                color: 'from-green-400 to-green-600'
              },
              { 
                title: 'Reliability', 
                desc: 'Consistent quality and timely delivery',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: 'from-blue-400 to-blue-600'
              },
              { 
                title: 'Innovation', 
                desc: 'Advanced solutions for modern challenges',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                color: 'from-purple-400 to-purple-600'
              },
              { 
                title: 'Partnership', 
                desc: 'Building lasting business relationships',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                color: 'from-yellow-400 to-yellow-600'
              }
            ].map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}