import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import KeySellingPoints from './components/KeySellingPoints';
import ImageGallerySection from './components/ImageGallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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

          {/* Image Gallery Section */}
          <ImageGallerySection />

          {/* Contact Section */}
          <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}