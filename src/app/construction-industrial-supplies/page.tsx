import { getCategoryBySlug } from '@/lib/catalog';

export default function ConstructionIndustrialSuppliesPage() {
  const category = getCategoryBySlug('construction-industrial-supplies');
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Construction Machinery & Industrial Equipment</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-4xl">
              Heavy construction equipment, industrial engines, generators, and machinery parts. All equipment is inspected, tested, and documented before shipment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Heavy Equipment</h3>
                <p className="text-gray-700 dark:text-gray-300">Excavators, bulldozers, loaders, cranes, and earthmoving machinery</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Engines & Generators</h3>
                <p className="text-gray-700 dark:text-gray-300">Diesel engines, generators, power units, and industrial motors</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Parts & Supplies</h3>
                <p className="text-gray-700 dark:text-gray-300">Hydraulic components, filters, belts, and maintenance supplies</p>
              </div>
            </div>

          <a href="mailto:starcanadainc@yahoo.ca?subject=Construction Equipment Inquiry&body=Hello, I'm interested in viewing available construction and industrial equipment. Please provide details about current inventory and pricing." className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-lg mt-8 text-lg">
            View Available Equipment
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </div>
      </section>

        {/* Equipment Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Equipment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Construction Machinery</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Excavators (mini to large)</li>
                <li>• Bulldozers and crawlers</li>
                <li>• Wheel loaders and skid steers</li>
                <li>• Cranes and lifting equipment</li>
                <li>• Compactors and rollers</li>
                <li>• Graders and scrapers</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">All equipment includes condition reports, service history, and operational testing</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Power & Industrial</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Diesel engines (various sizes)</li>
                <li>• Generators and power units</li>
                <li>• Industrial motors and pumps</li>
                <li>• Hydraulic systems</li>
                <li>• Compressors and air tools</li>
                <li>• Welding equipment</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tested and certified equipment with performance documentation</p>
            </div>
          </div>
        </section>

        {/* Value Propositions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Why Buy From Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Verified Condition</h3>
              <p className="text-gray-600 dark:text-gray-300">Every piece of equipment is inspected, tested, and documented with photos and videos</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Competitive Pricing</h3>
              <p className="text-gray-600 dark:text-gray-300">Direct sourcing from suppliers eliminates middleman costs and reduces your total investment</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Global Logistics</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete shipping, customs, and delivery coordination to your job site or facility</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Available Equipment</h2>
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


