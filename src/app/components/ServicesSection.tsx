"use client";

import { useState, useEffect, useRef, ReactElement } from 'react';
import Image from 'next/image';

// Define type for service item
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: ReactElement;
  features: string[];
  image: string;
}

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("metal-scrap");
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services: ServiceItem[] = [
    {
      id: "metal-scrap",
      title: "Metal Scrap Trading",
      shortDesc: "Global sourcing and trading of high-quality metal scrap materials",
      description: "We specialize in sourcing and trading high-quality metal scrap materials globally. Our expertise covers various metals, ensuring competitive pricing and reliable supply.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      features: [
        "Ferrous and non-ferrous metals",
        "Quality assurance protocols",
        "Sustainable recycling practices",
        "Competitive global pricing",
        "Efficient logistics management",
        "Custom sorting and processing"
      ],
      image: "/images/metal-scrap.jpg"
    },
    {
      id: "industrial-equipment",
      title: "Industrial Equipment",
      shortDesc: "High-quality used industrial machinery and equipment for global businesses",
      description: "We deal in high-quality used industrial machinery and equipment, offering cost-effective solutions for businesses worldwide.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      features: [
        "Generators and power equipment",
        "Trucks and heavy machinery",
        "Used engines and machine parts",
        "Quality inspection services",
        "Installation assistance",
        "International shipping arrangements"
      ],
      image: "/images/industrial-equipment.jpg"
    },
    {
      id: "logistics",
      title: "Global Logistics",
      shortDesc: "End-to-end shipping and logistics solutions for international trade",
      description: "Our logistics services ensure your materials and equipment are transported efficiently and safely across international borders.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: [
        "International shipping",
        "Customs clearance",
        "Warehousing solutions",
        "Container loading supervision",
        "Real-time tracking",
        "Documentation assistance"
      ],
      image: "/images/logistics.jpg"
    }
  ];

  // Ensure we always have a valid service by providing a default if none is found
  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section id="services" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions for metal recycling and industrial equipment needs
          </p>
        </div>
        
        {/* Tabs */}
        <div className={`flex flex-wrap justify-center space-x-2 mb-12 transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 text-sm md:text-base rounded-full font-medium transition-all duration-300 mb-2 ${
                activeTab === service.id 
                ? 'bg-yellow-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Image */}
            <div className="relative h-64 lg:h-full min-h-[320px] bg-gray-100">
              <div className="absolute inset-0 bg-yellow-600/20 z-10"></div>
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 z-20 bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                    {activeService.icon}
                  </div>
                  <span>{activeService.title}</span>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{activeService.title}</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {activeService.description}
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-4">What We Provide:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold group"
              >
                Request a Quote
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional services teaser */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-6">Need customized solutions for your business?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg"
          >
            Contact Our Team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}