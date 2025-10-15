import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/lib/catalog';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);
  if (!category) return notFound();

  return (
    <main className="container mx-auto px-6 py-16">
      <section className="mb-12">
        <div
          className="h-72 rounded-2xl bg-cover bg-center shadow-xl"
          style={{ backgroundImage: `url("${encodeURI(category.hero)}")` }}
          aria-label={category.title}
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-8">{category.title}</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl">{category.description}</p>
        <ul className="flex flex-wrap gap-3 mt-6">
          {category.highlights.map((h) => (
            <li key={h} className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
              {h}
            </li>
          ))}
        </ul>
        <a href="#contact" className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-6 py-3 rounded-lg mt-6">
          {category.ctaLabel}
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.gallery.map((src, i) => (
            <div key={src + i} className="relative pt-[75%] rounded-xl overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${encodeURI(src)}")` }} aria-label={`${category.title} ${i+1}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


