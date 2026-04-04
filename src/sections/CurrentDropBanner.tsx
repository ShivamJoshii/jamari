import { Button } from '@/components/ui/button';

interface CurrentDropBannerProps {
  onShopNow: () => void;
}

export function CurrentDropBanner({ onShopNow }: CurrentDropBannerProps) {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-white/60 text-sm tracking-widest uppercase mb-4">
              Limited Availability
            </p>
            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Current Drop
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md">
              Small batch release. Once they're gone, they're gone. 
              Don't sleep on the latest pieces from Fresh Rebellion.
            </p>
            <Button
              onClick={onShopNow}
              size="lg"
              className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-6 rounded-none"
            >
              Shop the Drop
            </Button>
          </div>

          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/images/product-3.png"
              alt="Current Drop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
