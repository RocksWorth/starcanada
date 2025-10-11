import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import KeySellingPoints from './components/KeySellingPoints';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection id="hero" />

      {/* Stats Bar */}
      <StatsBar />

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