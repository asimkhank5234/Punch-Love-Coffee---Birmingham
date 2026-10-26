import React, { useState, useEffect } from 'react';
import { CoffeeProduct, CartItem, GrindOption, BagSize } from './types/coffee';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoreSection } from './components/StoreSection';
import { AboutSection } from './components/AboutSection';
import { CafeMenuSection } from './components/CafeMenuSection';
import { BrewCalculator } from './components/BrewCalculator';
import { BlogSection } from './components/BlogSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('punchlove_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('punchlove_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['shop', 'about', 'menu', 'brew-lab', 'blog', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (
    product: CoffeeProduct,
    grind: GrindOption,
    size: BagSize,
    isSubscription: boolean,
    subscriptionInterval?: '2-weeks' | '4-weeks'
  ) => {
    let multiplier = 1;
    if (size === '2 lb (907g)') multiplier = 2.4;
    if (size === '5 lb (Bulk)') multiplier = 5.2;

    let base = product.price * multiplier;
    if (isSubscription) {
      base = base * 0.90;
    }

    const cartItemId = `${product.id}-${grind}-${size}-${isSubscription ? subscriptionInterval : 'once'}`;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          product,
          grind,
          size,
          quantity: 1,
          isSubscription,
          subscriptionInterval,
          pricePerUnit: base
        }
      ];
    });

    // Auto open cart drawer to provide immediate feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241D]">
      {/* Sticky Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreShop={() => scrollToSection('shop')}
          onExploreStory={() => scrollToSection('about')}
        />

        {/* Online Store: Specialty Roasts */}
        <StoreSection onAddToCart={handleAddToCart} />

        {/* About Us & "Inside Our World" - Great Coffee, Good Trash Talk */}
        <AboutSection />

        {/* In-Person Cafe Drinks Menu ($1-10) with Proud Mary, Thankfully & Last Call Baking */}
        <CafeMenuSection />

        {/* Brew Lab: Ratio Calculator & Pour Timer */}
        <BrewCalculator />

        {/* Coffee Journal & Extraction Guides */}
        <BlogSection />

        {/* Google Reviews & Testimonials (4.6 stars, 207 reviews) */}
        <TestimonialsSection />

        {/* Contact & Visit Us in Birmingham */}
        <ContactSection />
      </main>

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Branded Footer */}
      <Footer />
    </div>
  );
}
