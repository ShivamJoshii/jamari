import { useState } from 'react';
import { ShoppingBag, Check, ChevronLeft, Truck, Shield } from 'lucide-react';
import { getProductBySlug } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';

interface ProductPageProps {
  slug: string;
  onBack: () => void;
}

export function ProductPage({ slug, onBack }: ProductPageProps) {
  const product = getProductBySlug(slug);
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart, openCart } = useCartStore();

  if (!product) {
    return (
      <div className="min-h-screen bg-white pt-32 text-center">
        <p className="text-gray-500">Product not found</p>
        <Button onClick={onBack} className="mt-4 rounded-none">
          Go Back
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product && selectedVariant) {
      addToCart(product, selectedVariant);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleBuyNow = () => {
    if (product && selectedVariant) {
      addToCart(product, selectedVariant);
      openCart();
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-gray-500 hover:text-black transition-colors mb-8"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col lg:pt-8">
            {/* Title & Price */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl lg:text-4xl font-light mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-medium">
                ${product.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Select Size
              </label>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={variant.stockQuantity === 0}
                    className={`min-w-[60px] px-4 py-3 text-sm font-medium transition-all ${
                      selectedVariant?.id === variant.id
                        ? 'bg-black text-white'
                        : variant.stockQuantity === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white border border-gray-200 text-black hover:border-black'
                    }`}
                  >
                    {variant.sizeLabel}
                  </button>
                ))}
              </div>
              {selectedVariant && (
                <p className="text-gray-400 text-xs mt-2">
                  {selectedVariant.stockQuantity} in stock
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-8">
              <Button
                onClick={handleAddToCart}
                disabled={addedToCart || !selectedVariant}
                size="lg"
                className={`w-full py-6 rounded-none font-medium transition-all ${
                  addedToCart
                    ? 'bg-green-600 hover:bg-green-600'
                    : 'bg-black hover:bg-gray-800'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Bag
                  </>
                )}
              </Button>
              <Button
                onClick={handleBuyNow}
                variant="outline"
                size="lg"
                disabled={!selectedVariant}
                className="w-full py-6 rounded-none font-medium border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all"
              >
                Buy Now
              </Button>
            </div>

            {/* Trust Points */}
            <div className="flex items-center space-x-6 py-6 border-t border-gray-100 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Free shipping over $100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure checkout</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-sm font-medium mb-4">Product Details</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Premium cotton construction</li>
                <li>• Limited edition design</li>
                <li>• Designed in Atlanta, GA</li>
                <li>• Machine wash cold</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
