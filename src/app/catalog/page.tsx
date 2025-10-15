import Link from 'next/link';
import { getCatalogCategories } from '@/lib/catalog';

export default function CatalogPage() {
  const categories = getCatalogCategories();

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/catalog/${cat.slug}`} className="group">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url("${encodeURI(cat.hero)}")` }}
                aria-label={cat.title}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold">{cat.title}</h2>
                <p className="text-gray-600 mt-2">{cat.subtitle}</p>
                <div className="mt-4 inline-block font-semibold text-yellow-700">
                  View {cat.title} →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


