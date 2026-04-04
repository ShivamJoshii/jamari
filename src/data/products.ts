import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'UFO Graphic Tee - Cream',
    category: 'shirt',
    price: 30,
    description: 'Premium cotton graphic tee featuring the signature UFO beam design. Relaxed fit with a soft hand feel.',
    slug: 'ufo-graphic-tee-cream',
    featured: true,
    image: '/images/product-1.png',
    variants: [
      { id: '1-s', size: 'S', sizeLabel: 'Small', stockQuantity: 10 },
      { id: '1-m', size: 'M', sizeLabel: 'Medium', stockQuantity: 8 },
      { id: '1-l', size: 'L', sizeLabel: 'Large', stockQuantity: 5 },
    ],
  },
  {
    id: '2',
    name: 'UFO Denim Shorts',
    category: 'shorts',
    price: 50,
    description: 'Light wash denim shorts with matching UFO graphic print. Chain detail included.',
    slug: 'ufo-denim-shorts',
    featured: true,
    image: '/images/product-6.png',
    variants: [
      { id: '2-30', size: '30', sizeLabel: 'Waist 30', stockQuantity: 6 },
      { id: '2-32', size: '32', sizeLabel: 'Waist 32', stockQuantity: 4 },
    ],
  },
  {
    id: '3',
    name: 'Fresh Rebellion Logo Tee - Black',
    category: 'shirt',
    price: 30,
    description: 'Classic black tee with the Fresh Rebellion star logo. Essential wardrobe piece.',
    slug: 'fresh-rebellion-logo-tee-black',
    featured: true,
    image: '/images/product-4.png',
    variants: [
      { id: '3-s', size: 'S', sizeLabel: 'Small', stockQuantity: 12 },
      { id: '3-m', size: 'M', sizeLabel: 'Medium', stockQuantity: 10 },
      { id: '3-l', size: 'L', sizeLabel: 'Large', stockQuantity: 7 },
    ],
  },
  {
    id: '4',
    name: 'Worldwide Graphic Tee - White',
    category: 'shirt',
    price: 30,
    description: 'Bold worldwide graphic print on premium white cotton. Statement piece.',
    slug: 'worldwide-graphic-tee-white',
    featured: false,
    image: '/images/product-5.png',
    variants: [
      { id: '4-s', size: 'S', sizeLabel: 'Small', stockQuantity: 8 },
      { id: '4-m', size: 'M', sizeLabel: 'Medium', stockQuantity: 6 },
    ],
  },
  {
    id: '5',
    name: 'Complete Collection Set',
    category: 'shirt',
    price: 75,
    description: 'Full Fresh Rebellion collection featuring all signature designs. Limited availability.',
    slug: 'complete-collection-set',
    featured: false,
    image: '/images/product-3.png',
    variants: [
      { id: '5-bundle', size: 'BUNDLE', sizeLabel: 'One Size', stockQuantity: 3 },
    ],
  },
  {
    id: '6',
    name: 'UFO Street Look',
    category: 'shirt',
    price: 30,
    description: 'The signature UFO tee styled for the streets. Cream colorway with bold red graphic.',
    slug: 'ufo-street-look',
    featured: false,
    image: '/images/product-2.png',
    variants: [
      { id: '6-s', size: 'S', sizeLabel: 'Small', stockQuantity: 5 },
      { id: '6-m', size: 'M', sizeLabel: 'Medium', stockQuantity: 3 },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getProductsByCategory = (category: 'shirt' | 'shorts'): Product[] => {
  return products.filter((p) => p.category === category);
};
