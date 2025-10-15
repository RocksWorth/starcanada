import { getCategoryBySlug } from '@/lib/catalog';

export default function MachinesPlasticVmcMetalworkingPage() {
  const category = getCategoryBySlug('machines-plastic-vmc-metalworking');
  if (!category) return null;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div
            className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: `url("/StarCanadaImages/Machines like plastic molding vmcs and metal working/WhatsApp Image 2025-09-23 at 18.54.13.jpeg")` }}
            aria-label={category.title}
          />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Plastic Molding, VMCs & Metalworking Machines</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-4xl">
              High-precision manufacturing equipment including plastic injection molding machines, vertical machining centers (VMCs), and metalworking machinery. All machines are tested and verified before shipment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Plastic Molding</h3>
                <p className="text-gray-700 dark:text-gray-300">Injection molding machines, blow molding, compression molding, and auxiliary equipment</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">VMCs & CNC</h3>
                <p className="text-gray-700 dark:text-gray-300">Vertical machining centers, CNC mills, lathes, and precision machining equipment</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">Metalworking</h3>
                <p className="text-gray-700 dark:text-gray-300">Presses, shears, brakes, welding equipment, and metal forming machinery</p>
              </div>
            </div>

          <a href="mailto:starcanadainc@yahoo.ca?subject=Machine Inspection Request&body=Hello, I'm interested in requesting an inspection for plastic molding, VMC, or metalworking machines. Please provide details about available machines and inspection process." className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-8 py-4 rounded-lg mt-8 text-lg">
            Request Machine Inspection
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </div>
      </section>

        {/* Machine Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Machine Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Plastic Injection Molding</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Hydraulic injection molding machines</li>
                <li>• Electric injection molding machines</li>
                <li>• Blow molding equipment</li>
                <li>• Compression molding presses</li>
                <li>• Auxiliary equipment (dryers, chillers)</li>
                <li>• Molds and tooling</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tonnage range: 50T to 2000T+ with various shot sizes and configurations</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">CNC & VMCs</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                <li>• Vertical machining centers (3-5 axis)</li>
                <li>• Horizontal machining centers</li>
                <li>• CNC lathes and turning centers</li>
                <li>• CNC mills and routers</li>
                <li>• EDM machines</li>
                <li>• Tooling and workholding</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400">Various table sizes, spindle speeds, and precision capabilities</p>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Quality Assurance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Inspection</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Complete visual and mechanical inspection of all components</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Testing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Operational testing with video documentation of performance</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Documentation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Complete service history, manuals, and technical specifications</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Shipping</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Professional crating and secure transport to your facility</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Available Machines</h2>
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


