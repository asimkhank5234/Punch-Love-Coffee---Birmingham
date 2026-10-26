import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Coffee, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/coffeeData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine open/closed status based on current Alabama time (CST/CDT)
  useEffect(() => {
    try {
      const now = new Date();
      // Format to America/Chicago time (Birmingham, AL)
      const bhamHour = parseInt(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Chicago',
          hour: 'numeric',
          hour12: false
        }).format(now),
        10
      );
      const bhamDay = now.toLocaleDateString('en-US', { timeZone: 'America/Chicago', weekday: 'short' });
      
      if (bhamDay === 'Sun') {
        setIsOpenNow(bhamHour >= 8 && bhamHour < 14);
      } else if (bhamDay === 'Sat') {
        setIsOpenNow(bhamHour >= 8 && bhamHour < 16);
      } else {
        setIsOpenNow(bhamHour >= 7 && bhamHour < 16);
      }
    } catch {
      setIsOpenNow(true);
    }
  }, []);

  const navLinks = [
    { name: 'Shop Roasts', href: '#shop' },
    { name: 'Our Story', href: '#about' },
    { name: 'Cafe Menu', href: '#menu' },
    { name: 'Brew Lab', href: '#brew-lab' },
    { name: 'Journal', href: '#blog' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#2C241D] text-[#EFEBE4] text-xs py-2 px-4 border-b border-[#3D332A] relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#3D332A] text-[#F39C12]">
              <MessageCircle className="w-3 h-3 text-[#E07A5F]" />
              <span>Great Coffee, Good Trash Talk</span>
            </span>
            <span className="hidden md:inline text-neutral-400">|</span>
            <span className="hidden md:inline">MAKEbhm #103 · Proud Mary, Thankfully, Junto & Last Call Baking</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-neutral-300">
                {isOpenNow ? 'Cafe Open Now (Closes 4 PM)' : 'Opens 7 AM Weekdays · 8 AM Wknds'}
              </span>
            </div>
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E07A5F] hover:underline flex items-center gap-1"
            >
              <MapPin className="w-3 h-3" />
              Directions
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD8] py-3'
            : 'bg-[#FAF7F2] border-b border-[#EFE8E1] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#2C241D] flex items-center justify-center text-[#FAF7F2] shadow-sm group-hover:bg-[#E07A5F] transition-colors">
              <Coffee className="w-5 h-5 text-[#FAF7F2]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-bold text-xl tracking-tight text-[#2C241D]">
                  PUNCH LOVE
                </span>
                <span className="font-display italic text-[#E07A5F] font-semibold text-lg">
                  Coffee
                </span>
              </div>
              <p className="text-[10px] tracking-widest font-semibold uppercase text-neutral-500">
                Birmingham, AL · MAKEbhm
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#9A3412] bg-[#E07A5F]/10 font-semibold'
                      : 'text-[#4A3E37] hover:text-[#2C241D] hover:bg-neutral-100/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#about"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#FAF7F2] hover:bg-neutral-100 border border-[#E2D8CF] text-[#2C241D] px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Inside Our World</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="View Shopping Cart"
              className="relative p-2.5 rounded-xl bg-white border border-[#E8DFD8] text-[#2C241D] hover:border-[#2C241D] transition-colors cursor-pointer shadow-2xs"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#9A3412] text-white text-[11px] font-bold flex items-center justify-center animate-scaleIn shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-lg text-[#2C241D] hover:bg-neutral-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD8] px-4 pt-3 pb-6 mt-3 space-y-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#4A3E37] hover:text-[#9A3412] hover:bg-[#E07A5F]/10"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E8DFD8] flex flex-col gap-2">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#2C241D] text-white py-2.5 rounded-xl text-sm font-semibold shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                <span>Inside Our World</span>
              </a>

              <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 px-1">
                <span>Great Coffee, Good Trash Talk</span>
                <span className="font-semibold text-[#2C241D]">MAKEbhm #103</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
