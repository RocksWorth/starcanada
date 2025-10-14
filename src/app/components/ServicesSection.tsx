"use client";

import { useState, useEffect, useRef, ReactElement } from 'react';

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
      image: "metal-scrap"
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
      image: "industrial-equipment"
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
      image: "logistics"
    }
  ];

  // Ensure we always have a valid service by providing a default if none is found
  const activeService = services.find(service => service.id === activeTab) || services[0];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl">
            Comprehensive solutions for metal recycling and industrial equipment needs
          </p>
        </div>
        
        {/* Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`group px-8 py-4 text-sm md:text-base rounded-xl font-bold transition-all duration-300 flex items-center space-x-3 transform hover:scale-105 ${
                activeTab === service.id 
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-xl' 
                : 'bg-white text-gray-700 hover:bg-yellow-50 border-2 border-gray-200 hover:border-yellow-300 shadow-md hover:shadow-lg'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                activeTab === service.id ? 'bg-white/20' : 'bg-yellow-100'
              }`}>
                {service.icon}
              </div>
              <span>{service.title}</span>
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:shadow-3xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Image */}
            <div className="relative h-80 lg:h-full min-h-[400px] group">
              {/* Gradient background based on service type */}
              <div className={`absolute inset-0 ${
                activeService.image === 'metal-scrap' 
                  ? 'bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800' 
                  : activeService.image === 'industrial-equipment'
                  ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900'
                  : 'bg-gradient-to-br from-green-600 via-teal-700 to-teal-900'
              }`}></div>
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-yellow-400/20 z-10"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl backdrop-blur-sm">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mr-3">
                    {activeService.icon}
                  </div>
                  <span className="text-lg">{activeService.title}</span>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-tl-full z-20"></div>
            </div>
            
            {/* Right side - Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-tight">{activeService.title}</h3>
              <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
                {activeService.description}
              </p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full mr-3"></span>
                What We Provide
              </h4>
              <div className="grid grid-cols-1 gap-4 mb-10">
                {activeService.features.map((feature, index) => (
                  <div key={index} className="flex items-start group hover:bg-yellow-50 p-3 rounded-lg transition-colors">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-4 text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Request a Quote
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
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