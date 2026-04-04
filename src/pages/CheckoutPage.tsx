import { useState } from 'react';
import { ChevronLeft, Lock } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { CustomerInfo } from '@/types';

interface CheckoutPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function CheckoutPage({ onBack, onSuccess }: CheckoutPageProps) {
  const { items, getSubtotal, clearCart } = useCartStore();
  const [step, setStep] = useState<'info' | 'payment'>('info');
  const [isProcessing, setIsProcessing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const subtotal = getSubtotal();
  const shipping = subtotal >= 100 ? 0 : 10;
  const total = subtotal + shipping;

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePayPalCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      onSuccess();
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-32 text-center px-4">
        <p className="text-gray-500 text-lg mb-4">Your bag is empty</p>
        <Button onClick={onBack} className="rounded-none bg-black hover:bg-gray-800">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Progress */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-8">
            <div className={`flex items-center space-x-2 ${step === 'info' ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 flex items-center justify-center text-sm ${step === 'info' ? 'bg-black text-white' : 'bg-gray-100'}`}>
                1
              </div>
              <span className="hidden sm:inline text-sm">Information</span>
            </div>
            <div className="w-12 h-px bg-gray-200" />
            <div className={`flex items-center space-x-2 ${step === 'payment' ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 flex items-center justify-center text-sm ${step === 'payment' ? 'bg-black text-white' : 'bg-gray-100'}`}>
                2
              </div>
              <span className="hidden sm:inline text-sm">Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Form */}
          <div>
            <button
              onClick={step === 'payment' ? () => setStep('info') : onBack}
              className="flex items-center text-gray-500 hover:text-black transition-colors mb-6"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              {step === 'payment' ? 'Back' : 'Return to shop'}
            </button>

            {step === 'info' ? (
              <form onSubmit={handleContinueToPayment}>
                <h2 className="text-2xl font-light mb-6">Contact Information</h2>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <Label htmlFor="email" className="text-sm mb-2 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={customerInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="rounded-none border-gray-200 focus:border-black"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm mb-2 block">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="rounded-none border-gray-200 focus:border-black"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-light mb-6">Shipping Address</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-sm mb-2 block">Full Name</Label>
                    <Input
                      id="fullName"
                      required
                      value={customerInfo.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="rounded-none border-gray-200 focus:border-black"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-sm mb-2 block">Address</Label>
                    <Input
                      id="address"
                      required
                      value={customerInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="rounded-none border-gray-200 focus:border-black"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-sm mb-2 block">City</Label>
                      <Input
                        id="city"
                        required
                        value={customerInfo.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="rounded-none border-gray-200 focus:border-black"
                        placeholder="Atlanta"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-sm mb-2 block">State</Label>
                      <Input
                        id="state"
                        required
                        value={customerInfo.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        className="rounded-none border-gray-200 focus:border-black"
                        placeholder="GA"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="zipCode" className="text-sm mb-2 block">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      required
                      value={customerInfo.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="rounded-none border-gray-200 focus:border-black"
                      placeholder="30309"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-8 bg-black hover:bg-gray-800 text-white font-medium py-6 rounded-none"
                >
                  Continue to Payment
                </Button>
              </form>
            ) : (
              <div>
                <h2 className="text-2xl font-light mb-6">Payment</h2>
                
                {/* PayPal */}
                <div className="border border-gray-200 p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium">Pay with PayPal</span>
                    <Lock className="w-4 h-4 text-gray-400" />
                  </div>
                  <Button
                    onClick={handlePayPalCheckout}
                    disabled={isProcessing}
                    className="w-full bg-[#0070BA] hover:bg-[#003087] text-white font-medium py-6 rounded-none"
                  >
                    {isProcessing ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>Pay ${total} with PayPal</>
                    )}
                  </Button>
                </div>

                <p className="text-gray-400 text-xs text-center">
                  Secure checkout. Your information is protected.
                </p>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:pl-8">
            <div className="bg-gray-50 p-6 sticky top-24">
              <h3 className="text-lg font-medium mb-6">Order Summary</h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.variant.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-white flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {item.product.name}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">
                        Size: {item.variant.sizeLabel}
                      </p>
                      <p className="text-sm mt-1">
                        ${item.product.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-green-600 text-xs">Free shipping on orders over $100</p>
                )}
                <div className="flex justify-between text-lg font-medium pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
