"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Why Us', href: 'features' },
    { label: 'Testimonials', href: 'testimonials' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 group"
          >
            <div className={`flex items-center space-x-2 transition-all ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                  SC
                </div>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-xl leading-tight">
                  Star Canada
                </div>
                <div className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-yellow-300'}`}>
                  International Trading
                </div>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled
                    ? 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                    : 'text-white hover:text-yellow-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2.5 rounded-lg font-bold transition-all transform hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-md hover:shadow-lg'
                  : 'bg-white text-yellow-600 shadow-lg hover:shadow-xl'
              }`}
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className={`py-4 space-y-2 rounded-lg ${
            isScrolled ? 'bg-white' : 'bg-black/50 backdrop-blur-md'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  isScrolled
                    ? 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                    : 'text-white hover:text-yellow-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

