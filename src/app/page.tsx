import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import KeySellingPoints from './components/KeySellingPoints';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Key Selling Points */}
      <KeySellingPoints />
      
      {/* Testimonials Section - Optional */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}