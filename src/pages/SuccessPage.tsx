import { Check, Package, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuccessPageProps {
  onContinue: () => void;
}

export function SuccessPage({ onContinue }: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center py-16">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-light mb-4">
          Order Confirmed
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 p-6 mb-8 text-left">
          <div className="flex items-center space-x-3 mb-4">
            <Package className="w-5 h-5" />
            <span className="font-medium">What happens next?</span>
          </div>
          <ol className="space-y-3 text-gray-500 text-sm list-decimal list-inside">
            <li>You'll receive an order confirmation email</li>
            <li>We'll process your order within 2-3 business days</li>
            <li>Tracking information will be sent via email</li>
            <li>Your package will arrive at your doorstep</li>
          </ol>
        </div>

        {/* Contact */}
        <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm mb-8">
          <Mail className="w-4 h-4" />
          <span>contact@jamari.store</span>
        </div>

        {/* CTA */}
        <Button
          onClick={onContinue}
          size="lg"
          className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-6 rounded-none"
        >
          Continue Shopping
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
