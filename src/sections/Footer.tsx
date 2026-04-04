import { Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold tracking-widest uppercase mb-4">Jamari</h3>
            <p className="text-gray-500 mb-6 max-w-sm">
              Atlanta-based streetwear brand blending music and fashion for over 13 years. 
              Limited drops. Real culture.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick('shop')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shop')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  T-Shirts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('shop')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Shorts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  New Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Shipping Info
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Size Guide
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            {currentYear} Jamari. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <button className="hover:text-black transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-black transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
