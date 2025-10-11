import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Canada International - Global Metal Scrap & Industrial Equipment Trading',
  description: 'Global trading company specializing in metal scrap and industrial equipment with a focus on sustainability.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/95 shadow-md z-50">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative h-12 w-40">
                  {/* Replace with your actual logo */}
                  <div className="font-bold text-xl text-yellow-600">
                    <span className="text-gray-800">Star</span> Canada
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300">
                  Home
                </Link>
                <Link href="#about" className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300">
                  Who We Are
                </Link>
                <Link href="#services" className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300">
                  What We Offer
                </Link>
                <Link href="#contact" className="text-gray-800 hover:text-yellow-600 font-medium transition duration-300">
                  Contact Us
                </Link>
              </div>

              {/* Mobile Navigation Toggle (you may want to implement a hamburger menu) */}
              <div className="md:hidden">
                <button className="text-gray-800 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer - Note: We already have a footer in the page.tsx for better customization, but we could move it here */}
      </body>
    </html>
  );
}