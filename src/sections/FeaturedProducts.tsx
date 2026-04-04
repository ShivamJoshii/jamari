import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

interface FeaturedProductsProps {
  onProductClick: (slug: string) => void;
  onViewAll: () => void;
}

export function FeaturedProducts({ onProductClick, onViewAll }: FeaturedProductsProps) {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">
              Featured
            </p>
            <h2 className="text-3xl lg:text-4xl font-light">
              This Season
            </h2>
          </div>
          <button
            onClick={onViewAll}
            className="hidden sm:flex items-center text-sm hover:opacity-70 transition-opacity"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Product Grid - Zara Style */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product.slug)}
              className={`group cursor-pointer ${index === 0 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full bg-white text-black text-sm font-medium py-3 hover:bg-black hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info - Minimal */}
              <div className="space-y-1">
                <h3 className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-8 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center text-sm"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
