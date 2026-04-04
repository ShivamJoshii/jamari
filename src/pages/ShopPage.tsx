import { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ShopPageProps {
  onProductClick: (slug: string) => void;
}

export function ShopPage({ onProductClick }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'shirt' | 'shorts'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h1 className="text-4xl lg:text-5xl font-light mb-4">Shop All</h1>
          <p className="text-gray-500 max-w-xl">
            Discover our latest collection of limited drop pieces. 
            Premium quality streetwear designed in Atlanta.
          </p>
        </div>
      </div>

      {/* Filters & Products */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-gray-100">
          {/* Category Filters */}
          <div className="flex items-center space-x-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' 
                ? 'bg-black text-white hover:bg-gray-800 rounded-none' 
                : 'border-gray-200 text-gray-600 hover:border-black hover:text-black rounded-none'
              }
            >
              All
            </Button>
            <Button
              variant={selectedCategory === 'shirt' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('shirt')}
              className={selectedCategory === 'shirt' 
                ? 'bg-black text-white hover:bg-gray-800 rounded-none' 
                : 'border-gray-200 text-gray-600 hover:border-black hover:text-black rounded-none'
              }
            >
              T-Shirts
            </Button>
            <Button
              variant={selectedCategory === 'shorts' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('shorts')}
              className={selectedCategory === 'shorts' 
                ? 'bg-black text-white hover:bg-gray-800 rounded-none' 
                : 'border-gray-200 text-gray-600 hover:border-black hover:text-black rounded-none'
              }
            >
              Shorts
            </Button>
          </div>

          {/* Sort */}
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-sm border-none focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-400 text-sm mb-8">
          {filteredProducts.length} products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product.slug)}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-white text-black text-xs px-3 py-1">
                      Featured
                    </span>
                  </div>
                )}

                {/* Quick View */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full bg-white text-black text-sm font-medium py-3 hover:bg-black hover:text-white transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No products found</p>
            <Button 
              onClick={() => setSelectedCategory('all')}
              variant="outline"
              className="border-gray-200 hover:border-black rounded-none"
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
