"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ImageGallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  const galleryImages = [
    {
      src: "/StarCanadaImages/Big supplier of Recycling Mix Metals/WhatsApp Image 2025-09-23 at 19.12.15.jpeg",
      category: "Recycling Metals",
      link: "/recycling-mix-metals",
      color: "yellow"
    },
    {
      src: "/StarCanadaImages/Big supplier of Recycling Mix Metals/WhatsApp Image 2025-09-23 at 19.12.15 (1).jpeg",
      category: "Recycling Metals",
      link: "/recycling-mix-metals",
      color: "yellow"
    },
    {
      src: "/StarCanadaImages/Construction Machinery and Engine and  Industrial supplies/WhatsApp Image 2025-09-23 at 19.27.14.jpeg",
      category: "Construction Equipment",
      link: "/construction-industrial-supplies",
      color: "blue"
    },
    {
      src: "/StarCanadaImages/Construction Machinery and Engine and  Industrial supplies/WhatsApp Image 2025-09-23 at 19.20.02.jpeg",
      category: "Construction Equipment",
      link: "/construction-industrial-supplies",
      color: "blue"
    },
    {
      src: "/StarCanadaImages/Machines like plastic molding vmcs and metal working/WhatsApp Image 2025-09-23 at 18.54.13.jpeg",
      category: "Manufacturing Machines",
      link: "/machines-plastic-vmc-metalworking",
      color: "green"
    },
    {
      src: "/StarCanadaImages/Machines like plastic molding vmcs and metal working/WhatsApp Image 2025-09-23 at 18.58.17.jpeg",
      category: "Manufacturing Machines",
      link: "/machines-plastic-vmc-metalworking",
      color: "green"
    },
    {
      src: "/StarCanadaImages/Big supplier of Recycling Mix Metals/WhatsApp Image 2025-09-23 at 19.13.34.jpeg",
      category: "Recycling Metals",
      link: "/recycling-mix-metals",
      color: "yellow"
    },
    {
      src: "/StarCanadaImages/Construction Machinery and Engine and  Industrial supplies/WhatsApp Image 2025-09-23 at 19.20.03.jpeg",
      category: "Construction Equipment",
      link: "/construction-industrial-supplies",
      color: "blue"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">Our Inventory</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">Featured Equipment</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl">
            Browse our extensive collection of industrial equipment and materials
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative pt-[75%]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${item.src}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white ${
                  item.color === 'yellow' ? 'bg-yellow-500' : 
                  item.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                }`}>
                  {item.category}
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-bold text-lg mb-2">{item.category}</h3>
                  <Link
                    href={item.link}
                    className={`inline-flex items-center text-sm font-medium ${
                      item.color === 'yellow' ? 'text-yellow-300 hover:text-yellow-200' : 
                      item.color === 'blue' ? 'text-blue-300 hover:text-blue-200' : 'text-green-300 hover:text-green-200'
                    }`}
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Links */}
        <div className={`text-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Explore Our Categories</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/recycling-mix-metals"
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Recycling Mix Metals
            </Link>
            
            <Link
              href="/construction-industrial-supplies"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Construction & Industrial
            </Link>
            
            <Link
              href="/machines-plastic-vmc-metalworking"
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              Manufacturing Machines
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
