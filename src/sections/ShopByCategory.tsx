import { ArrowRight } from 'lucide-react';

interface ShopByCategoryProps {
  onCategoryClick: (category: string) => void;
}

export function ShopByCategory({ onCategoryClick }: ShopByCategoryProps) {
  const categories = [
    {
      id: 'shirt',
      name: 'T-Shirts',
      description: 'Graphic tees & essentials',
      image: '/images/product-4.png',
    },
    {
      id: 'shorts',
      name: 'Shorts',
      description: 'Denim & streetwear',
      image: '/images/product-6.png',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">
            Browse
          </p>
          <h2 className="text-3xl lg:text-4xl font-light">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-white/70 text-sm mb-2">
                  {category.description}
                </p>
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
                  {category.name}
                </h3>
                <div className="flex items-center text-white text-sm group-hover:underline">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
