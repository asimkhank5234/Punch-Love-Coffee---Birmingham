import React, { useState } from 'react';
import { Coffee, Instagram, MapPin, Mail, Phone, Heart, Star, Send, Check } from 'lucide-react';
import { CAFE_INFO } from '../data/coffeeData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3500);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#211B15] text-[#EFEBE4] pt-16 pb-12 border-t border-[#382E25]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#382E25]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E07A5F] flex items-center justify-center text-white shadow-xs">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  PUNCH LOVE
                </span>
                <span className="font-display italic text-[#E07A5F] font-semibold text-lg ml-1.5">
                  Coffee
                </span>
                <div className="text-[10px] tracking-widest uppercase text-neutral-400 font-semibold">
                  Birmingham, Alabama
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Artisanal organic specialty roaster located inside MAKEbhm. Dedicated to direct-trade transparency, small 12kg batch roasting, and empowering coffee enthusiasts through weekly barista masterclasses.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-1 bg-[#2C241D] px-2.5 py-1 rounded-lg border border-[#3D332A] text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">{CAFE_INFO.googleRating}</span>
                <span className="text-neutral-400 text-[11px]">({CAFE_INFO.reviewCount} Google reviews)</span>
              </div>
              <span className="text-xs text-neutral-400 font-medium">{CAFE_INFO.priceRange} Cafe</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#shop" className="hover:text-white transition-colors">Specialty Coffee Store</a></li>
              <li><a href="#workshops" className="hover:text-white transition-colors">Barista Workshops</a></li>
              <li><a href="#brew-lab" className="hover:text-white transition-colors">Dial-In Brew Lab</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Birmingham Cafe Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our MAKEbhm Story</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Journal & Guides</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Testimonials</a></li>
            </ul>
          </div>

          {/* Cafe & Visit Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Visit Us
            </h4>
            <div className="text-xs text-neutral-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
                <span>
                  {CAFE_INFO.address}<br />
                  <span className="text-neutral-300 font-medium">Located in: {CAFE_INFO.locationName}</span>
                </span>
              </div>
              <div className="pt-1">
                <div className="font-semibold text-neutral-300">Cafe Hours:</div>
                <div>Mon–Fri: 7:00 AM – 4:00 PM</div>
                <div>Saturday: 8:00 AM – 4:00 PM</div>
                <div>Sunday: 8:00 AM – 2:00 PM</div>
              </div>
              <div className="pt-1">
                <a
                  href={CAFE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E07A5F] hover:underline font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{CAFE_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Roaster Dispatch
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Get notified when rare single-origin micro-lots drop and new barista workshop cohorts open.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>You're on the list! Welcome to the family.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#2C241D] border border-[#3D332A] text-white placeholder-neutral-500 focus:outline-hidden focus:border-[#E07A5F]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#E07A5F] hover:bg-[#C9664C] text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-neutral-500">
                  No spam, ever. 10% off your first coffee bag order.
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Punch Love Coffee LLC. All rights reserved. Made in MAKEbhm, Birmingham, Alabama.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#shop" className="hover:text-white">Organic Sourcing</a>
            <a href="#workshops" className="hover:text-white">Barista Certification</a>
            <a href={CAFE_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Google Maps
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
