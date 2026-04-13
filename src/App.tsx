import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { CartDrawer } from '@/components/CartDrawer';
import { ImagePreloader } from '@/components/ImagePreloader';
import { Hero } from '@/sections/Hero';
import { FeaturedProducts } from '@/sections/FeaturedProducts';
import { BrandStory } from '@/sections/BrandStory';
import { ShopByCategory } from '@/sections/ShopByCategory';
import { CurrentDropBanner } from '@/sections/CurrentDropBanner';
import { Footer } from '@/sections/Footer';
import { ShopPage } from '@/pages/ShopPage';
import { ProductPage } from '@/pages/ProductPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { SuccessPage } from '@/pages/SuccessPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);

  const handleShopNow = () => {
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (slug: string) => {
    setSelectedProductSlug(slug);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSuccess = () => {
    setCurrentPage('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinueShopping = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromProduct = () => {
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromCheckout = () => {
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <main>
            <Hero onShopNow={handleShopNow} />
            <FeaturedProducts 
              onProductClick={handleProductClick} 
              onViewAll={handleShopNow} 
            />
            <BrandStory />
            <ShopByCategory onCategoryClick={() => setCurrentPage('shop')} />
            <CurrentDropBanner onShopNow={handleShopNow} />
            <Footer onPageChange={setCurrentPage} />
          </main>
        );
      case 'shop':
        return (
          <>
            <ShopPage onProductClick={handleProductClick} />
            <Footer onPageChange={setCurrentPage} />
          </>
        );
      case 'product':
        return selectedProductSlug ? (
          <>
            <ProductPage 
              slug={selectedProductSlug} 
              onBack={handleBackFromProduct}
            />
            <Footer onPageChange={setCurrentPage} />
          </>
        ) : (
          <>
            <ShopPage onProductClick={handleProductClick} />
            <Footer onPageChange={setCurrentPage} />
          </>
        );
      case 'checkout':
        return (
          <CheckoutPage 
            onBack={handleBackFromCheckout} 
            onSuccess={handleOrderSuccess} 
          />
        );
      case 'success':
        return <SuccessPage onContinue={handleContinueShopping} />;
      default:
        return (
          <main>
            <Hero onShopNow={handleShopNow} />
            <FeaturedProducts 
              onProductClick={handleProductClick} 
              onViewAll={handleShopNow} 
            />
            <BrandStory />
            <ShopByCategory onCategoryClick={() => setCurrentPage('shop')} />
            <CurrentDropBanner onShopNow={handleShopNow} />
            <Footer onPageChange={setCurrentPage} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ImagePreloader />
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      <CartDrawer onCheckout={handleCheckout} />
      {renderPage()}
    </div>
  );
}

export default App;
