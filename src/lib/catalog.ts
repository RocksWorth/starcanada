import fs from 'fs';
import path from 'path';

export type CatalogCategory = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  folder: string; // folder under public/StarCanadaImages
  hero: string; // public path
  gallery: string[]; // public paths
};

const PUBLIC_ROOT = path.join(process.cwd(), 'public');
const IMAGES_ROOT = path.join(PUBLIC_ROOT, 'StarCanadaImages');

// Map slugs to folders and copy
const CATEGORY_DEFINITIONS: Array<Omit<CatalogCategory, 'hero' | 'gallery'>> = [
  {
    slug: 'recycling-mix-metals',
    title: 'Recycling Mix Metals',
    subtitle: 'Bulk volumes, consistent grading, and logistics that cut total landed cost.',
    description:
      'We supply mixed metals at scale with steady availability, clear grading, and containerized logistics that arrive when you need them. Each lot is inspected, photographed, and verified pre-shipment to reduce disputes and speed clearance.',
    highlights: [
      'Bulk volumes with steady availability',
      'International shipping and customs support',
      'Strict quality control and media verification',
    ],
    ctaLabel: 'Request a Bulk Quote',
    folder: 'Big supplier of Recycling Mix Metals',
  },
  {
    slug: 'construction-industrial-supplies',
    title: 'Construction Machinery, Engines & Industrial Supplies',
    subtitle: 'Field-tested equipment with transparent condition reports.',
    description:
      'From heavy equipment to engines and essential supplies, we source reliable machinery that’s inspected, documented, and ready to work. Condition photos, videos, and documentation help you move quickly through customs.',
    highlights: [
      'Engines and heavy equipment from trusted sources',
      'Condition photos/videos and inspection notes',
      'End-to-end logistics coordination',
    ],
    ctaLabel: 'See Available Machines',
    folder: 'Construction Machinery and Engine and  Industrial supplies',
  },
  {
    slug: 'machines-plastic-vmc-metalworking',
    title: 'Plastic Molding, VMCs & Metalworking Machines',
    subtitle: 'High-value industrial machines at competitive prices.',
    description:
      'We trade plastic injection molding, VMCs, and metalworking machines, with pre-shipment testing, secure loading, and clear documentation so you commission faster and with fewer surprises.',
    highlights: [
      'Pre-shipment testing footage available',
      'Accessories and spares on request',
      'Secure packing and container loading',
    ],
    ctaLabel: 'Request Machine Inspection',
    folder: 'Machines like plastic molding vmcs and metal working',
  },
];

function listImagesForFolder(folder: string): string[] {
  const folderAbs = path.join(IMAGES_ROOT, folder);
  if (!fs.existsSync(folderAbs)) return [];
  const validExt = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);
  const files = fs.readdirSync(folderAbs).filter((file) =>
    validExt.has(path.extname(file).toLowerCase())
  );
  // Sort for stable order
  files.sort((a, b) => a.localeCompare(b));
  return files.map((file) => `/StarCanadaImages/${folder}/${file}`);
}

export function getCatalogCategories(): CatalogCategory[] {
  return CATEGORY_DEFINITIONS.map((base) => {
    const gallery = listImagesForFolder(base.folder);
    const hero = gallery[0] || '/window.svg';
    return { ...base, gallery, hero };
  });
}

export function getCategoryBySlug(slug: string): CatalogCategory | null {
  const all = getCatalogCategories();
  return all.find((c) => c.slug === slug) || null;
}

export function getCategorySlugs(): string[] {
  return CATEGORY_DEFINITIONS.map((c) => c.slug);
}


