import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems, openCart } = useCartStore();
  const cartCount = getTotalItems();

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('shop')}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === 'shop' ? 'text-black font-medium' : 'text-gray-500 hover:text-black'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => handleNavClick('home')}
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              New Arrivals
            </button>
          </div>

          {/* Logo - Center */}
          <button
            onClick={() => handleNavClick('home')}
            className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold tracking-widest uppercase"
          >
            Jamari
          </button>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            {/* Desktop Nav - Right */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick('home')}
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('home')}
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 hover:opacity-70 transition-opacity"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('shop')}
                className="text-left text-sm tracking-wide py-2"
              >
                Shop All
              </button>
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-sm text-gray-500 py-2"
              >
                New Arrivals
              </button>
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-sm text-gray-500 py-2"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('home')}
                className="text-left text-sm text-gray-500 py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
