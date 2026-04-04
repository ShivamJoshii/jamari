import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  onCheckout: () => void;
}

export function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();

  if (!isOpen) return null;

  const handleCheckout = () => {
    closeCart();
    onCheckout();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-medium tracking-wide">Shopping Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" strokeWidth={1.5} />
              <p className="text-gray-500 mb-1">Your bag is empty</p>
              <p className="text-gray-400 text-sm">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.variant.id}
                  className="flex gap-4"
                >
                  {/* Product Image */}
                  <div className="w-24 h-32 bg-gray-100 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium truncate pr-4">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.variant.id)}
                        className="text-gray-400 hover:text-black transition-colors text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      Size: {item.variant.sizeLabel}
                    </p>
                    <p className="font-medium mt-auto">
                      ${item.product.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.variant.id, item.quantity - 1)}
                        className="w-7 h-7 border border-gray-200 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.variant.id, item.quantity + 1)}
                        className="w-7 h-7 border border-gray-200 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-lg font-medium">${subtotal}</span>
            </div>

            <p className="text-gray-400 text-xs mb-4">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-6 rounded-none"
            >
              Checkout
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Continue Shopping */}
            <button
              onClick={closeCart}
              className="w-full mt-3 text-sm text-gray-500 hover:text-black transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
