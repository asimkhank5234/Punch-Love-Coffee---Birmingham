import React, { useState } from 'react';
import { CAFE_MENU, CAFE_INFO } from '../data/coffeeData';
import { Coffee, Sparkles, MapPin, Clock, Heart, Award } from 'lucide-react';

export const CafeMenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E07A5F]/15 text-[#9A3412] mb-3">
            <Coffee className="w-3.5 h-3.5" />
            <span>Birmingham Cafe Bar Menu ({CAFE_INFO.priceRange} / Person)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight">
            Crafted Behind the Bar at MAKEbhm
          </h2>
          <p className="mt-4 text-[#5A4E46] text-base sm:text-lg">
            Featuring rotating roasts from <strong>Proud Mary</strong>, <strong>Thankfully Coffee</strong>, and <strong>Junto Coffee</strong>, paired with our house-made syrups and daily artisanal pastries from <strong>Last Call Baking</strong>.
          </p>
        </div>

        {/* Guest Roaster & Bakery Partners Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-[#F4EFEA] border border-[#E2D8CF] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E2D8CF] flex items-center justify-center text-[#9A3412] shrink-0">
              <Award className="w-5 h-5 text-[#E07A5F]" />
            </div>
            <div>
              <div className="font-bold text-[#2C241D]">Multi-Roaster Bar</div>
              <div className="text-neutral-600">Proud Mary (OR) · Thankfully (AL) · Junto (SC)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E2D8CF] flex items-center justify-center text-[#9A3412] shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="font-bold text-[#2C241D]">Pastries by Last Call Baking</div>
              <div className="text-neutral-600">Handcrafted daily in Birmingham, Alabama</div>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CAFE_MENU.map((category, idx) => (
            <button
              key={category.category}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#2C241D] text-white shadow-xs'
                  : 'bg-white border border-[#E2D8CF] text-[#4A3E37] hover:border-[#2C241D]'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {CAFE_MENU[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#E2D8CF] shadow-xs hover:border-[#9A3412] transition-colors flex items-start justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-base text-[#2C241D]">
                    {item.name}
                  </h3>
                  {item.isHouseSpecial && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-[#E07A5F]/15 text-[#9A3412] px-2 py-0.5 rounded-full">
                      <Sparkles className="w-2.5 h-2.5" />
                      House Favorite
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#5A4E46] leading-relaxed">
                  {item.description}
                </p>
                {item.notes && (
                  <div className="text-[11px] text-neutral-400 italic font-medium">
                    {item.notes}
                  </div>
                )}
              </div>

              <div className="font-display text-lg font-bold text-[#2C241D] bg-[#FAF7F2] px-3 py-1 rounded-xl border border-[#E8DFD8] shrink-0">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* Cafe Info Footer Banner */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#F4EFEA] rounded-2xl p-5 border border-[#E2D8CF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A3E37]">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#E07A5F]" />
            <span>House-made syrups that complement rather than overpower. Organic milk & oat options.</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-600">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              Open daily at 7/8 AM
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
              Suite #103
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
