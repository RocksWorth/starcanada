import { getCategoryBySlug } from '@/lib/catalog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recycling Mix Metals - Bulk Metal Supply & Trading',
  description: 'High-quality recycling mix metals including ferrous and non-ferrous materials. Bulk metal supply with consistent grading, reliable logistics, and competitive pricing. Containerized shipping worldwide.',
  keywords: [
    'recycling metals',
    'metal scrap',
    'ferrous metals',
    'non-ferrous metals',
    'steel scrap',
    'aluminum scrap',
    'copper scrap',
    'brass scrap',
    'stainless steel',
    'bulk metal supply',
    'metal trading',
    'recycling industry',
    'metal grading',
    'containerized shipping',
    'global metal trading'
  ],
  openGraph: {
    title: 'Recycling Mix Metals - Bulk Metal Supply & Trading',
    description: 'High-quality recycling mix metals with consistent grading and reliable logistics. Bulk supply of ferrous and non-ferrous materials.',
    url: 'https://starcanada.ca/recycling-mix-metals',
    type: 'website',
    images: [
      {
        url: '/StarCanadaImages/Big supplier of Recycling Mix Metals/WhatsApp Image 2025-09-23 at 19.12.15.jpeg',
        width: 1200,
        height: 630,
        alt: 'Recycling Mix Metals - Star Canada International',
      },
    ],
  },
  alternates: {
    canonical: '/recycling-mix-metals',
  },
};

export default function RecyclingMixMetalsPage() {
  const category = getCategoryBySlug('recycling-mix-metals');
  if (!category) return null;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div
            className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url("${encodeURI(category.hero)}")` }}
            aria-label={category.title}
          />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Recycling Mix Metals</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-4xl">
              Bulk mixed metal supply with consistent grading and reliable logistics. We source ferrous and non-ferrous metals from trusted suppliers and deliver containerized loads to your facility.
            </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Ferrous Metals</h3>
              <p className="text-gray-700 dark:text-gray-300">Steel scrap, cast iron, automotive scrap, structural steel, and industrial steel waste</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Non-Ferrous Metals</h3>
              <p className="text-gray-700 dark:text-gray-300">Aluminum, copper, brass, stainless steel, and specialty alloys</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Mixed Loads</h3>
              <p className="text-gray-700 dark:text-gray-300">Pre-sorted combinations optimized for your processing requirements</p>
            </div>
          </div>

          <a href="mailto:starcanadainc@yahoo.ca?subject=Bulk Metal Quote Request&body=Hello, I'm interested in requesting a bulk quote for recycling mix metals. Please provide details about available quantities and pricing." className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-lg mt-8 text-lg">
            Request Bulk Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </div>
      </section>

        {/* Value Propositions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Why Choose Our Metal Supply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quality Assurance</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Pre-shipment inspection and grading</li>
                <li>• Photo documentation of each lot</li>
                <li>• Consistent quality standards</li>
                <li>• Detailed material specifications</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Logistics Excellence</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Containerized shipping worldwide</li>
                <li>• Customs clearance support</li>
                <li>• On-time delivery guarantees</li>
                <li>• Real-time shipment tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Available Inventory</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.gallery.map((src, i) => (
              <div key={src + i} className="relative pt-[75%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${encodeURI(src)}")` }} aria-label={`${category.title} ${i+1}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}


