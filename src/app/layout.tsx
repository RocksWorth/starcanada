import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Star Canada International - Global Industrial Equipment Trading',
    template: '%s | Star Canada International'
  },
  description: 'Leading global trader of recycling mix metals, construction machinery, and industrial equipment. Since 2005, we connect suppliers and buyers worldwide with reliable logistics and competitive pricing.',
  keywords: [
    'recycling metals',
    'construction equipment',
    'industrial machinery',
    'metal scrap trading',
    'plastic molding machines',
    'VMC machines',
    'metalworking equipment',
    'global trading',
    'industrial supplies',
    'machinery export',
    'equipment trading',
    'recycling industry',
    'construction machinery',
    'industrial equipment',
    'metal recycling',
    'machinery parts',
    'heavy equipment',
    'manufacturing machines'
  ],
  authors: [{ name: 'Star Canada International' }],
  creator: 'Star Canada International',
  publisher: 'Star Canada International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://starcanada.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://starcanada.ca',
    title: 'Star Canada International - Global Industrial Equipment Trading',
    description: 'Leading global trader of recycling mix metals, construction machinery, and industrial equipment. Since 2005, we connect suppliers and buyers worldwide.',
    siteName: 'Star Canada International',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Star Canada International - Industrial Equipment Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Star Canada International - Global Industrial Equipment Trading',
    description: 'Leading global trader of recycling mix metals, construction machinery, and industrial equipment. Since 2005.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F9BE05" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Star Canada International",
              "alternateName": "Star Canada",
              "url": "https://starcanada.ca",
              "logo": "https://starcanada.ca/logo.png",
              "description": "Leading global trader of recycling mix metals, construction machinery, and industrial equipment since 2005.",
              "foundingDate": "2005",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA",
                "addressRegion": "BC",
                "addressLocality": "Vancouver"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-604-123-4567",
                "contactType": "customer service",
                "email": "starcanadainc@yahoo.ca",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/star-canada-international"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Industrial Equipment and Materials",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Recycling Mix Metals",
                      "description": "High-quality ferrous and non-ferrous metal scrap materials"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Construction Machinery",
                      "description": "Heavy construction equipment and industrial machinery"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Manufacturing Machines",
                      "description": "Plastic molding, VMC, and metalworking machines"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}