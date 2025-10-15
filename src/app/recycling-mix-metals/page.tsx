import { getCategoryBySlug } from '@/lib/catalog';

export default function RecyclingMixMetalsPage() {
  const category = getCategoryBySlug('recycling-mix-metals');
  if (!category) return null;

  return (
    <main className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div
          className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url("${encodeURI(category.hero)}")` }}
          aria-label={category.title}
        />
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Recycling Mix Metals</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-4xl">
            Bulk mixed metal supply with consistent grading and reliable logistics. We source ferrous and non-ferrous metals from trusted suppliers and deliver containerized loads to your facility.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="font-bold text-yellow-800 mb-2">Ferrous Metals</h3>
              <p className="text-gray-700">Steel scrap, cast iron, automotive scrap, structural steel, and industrial steel waste</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="font-bold text-yellow-800 mb-2">Non-Ferrous Metals</h3>
              <p className="text-gray-700">Aluminum, copper, brass, stainless steel, and specialty alloys</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="font-bold text-yellow-800 mb-2">Mixed Loads</h3>
              <p className="text-gray-700">Pre-sorted combinations optimized for your processing requirements</p>
            </div>
          </div>

          <a href="#contact" className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-lg mt-8 text-lg">
            Request Bulk Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Metal Supply</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Pre-shipment inspection and grading</li>
              <li>• Photo documentation of each lot</li>
              <li>• Consistent quality standards</li>
              <li>• Detailed material specifications</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Logistics Excellence</h3>
            <ul className="space-y-2 text-gray-700">
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
        <h2 className="text-3xl font-bold mb-8">Available Inventory</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.gallery.map((src, i) => (
            <div key={src + i} className="relative pt-[75%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${encodeURI(src)}")` }} aria-label={`${category.title} ${i+1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


