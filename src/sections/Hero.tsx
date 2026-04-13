import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <section className="min-h-screen bg-white pt-16">
      {/* Main Hero */}
      <div className="relative">
        {/* Hero Image - Using the motion blur street photo */}
        <div className="relative h-[85vh] overflow-hidden">
          <img
            src="/images/product-2.png"
            alt="NEWFRESHREBBULUM Collection"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Hero Content - Overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/80 text-sm tracking-widest uppercase mb-4">
              New Collection
            </p>
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight">
              NEWFRESHREBBULUM
            </h1>
            <p className="text-white/80 max-w-md mb-8 text-lg">
              Atlanta-based streetwear. 13 years of authentic style.
            </p>
            <Button
              onClick={onShopNow}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-6 rounded-none"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Brand Strip */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-sm text-gray-500">
            <span>Atlanta Based</span>
            <span className="hidden lg:inline text-gray-300">|</span>
            <span>13 Years Strong</span>
            <span className="hidden lg:inline text-gray-300">|</span>
            <span>Music & Streetwear</span>
            <span className="hidden lg:inline text-gray-300">|</span>
            <span>Limited Drops</span>
          </div>
        </div>
      </div>
    </section>
  );
}
