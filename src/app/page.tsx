import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import KeySellingPoints from './components/KeySellingPoints';
import ImageGallerySection from './components/ImageGallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Star Canada International",
  "url": "https://starcanada.ca",
  "description": "Leading global trader of recycling mix metals, construction machinery, and industrial equipment since 2005.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://starcanada.ca/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
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
    </>
  );
}