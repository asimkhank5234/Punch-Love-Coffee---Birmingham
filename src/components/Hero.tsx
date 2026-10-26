import React from 'react';
import { ArrowRight, Star, Sparkles, MapPin, Award, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { CAFE_INFO } from '../data/coffeeData';

interface HeroProps {
  onExploreShop: () => void;
  onBookWorkshop: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreShop, onBookWorkshop }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFEA] to-[#FAF7F2]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-[#E07A5F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 translate-x-1/3 w-[30rem] h-[30rem] bg-[#3D332A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Social Proof & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-white/90 border border-[#E2D8CF] shadow-xs text-xs font-medium text-[#2C241D]">
              <span className="flex items-center gap-1 bg-amber-500/10 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>4.6</span>
              </span>
              <span className="text-neutral-600 font-semibold">207+ Google Reviews</span>
              <span className="text-neutral-300">•</span>
              <span className="text-[#9A3412] font-semibold">{CAFE_INFO.priceRange} Cafe</span>
              <span className="text-neutral-300">•</span>
              <span className="text-neutral-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E07A5F]" />
                MAKEbhm, Birmingham
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl text-[#2C241D] font-bold leading-[1.15] tracking-tight">
              Organic, Ethically Sourced{' '}
              <span className="italic font-normal text-[#9A3412] underline decoration-[#E07A5F]/40 underline-offset-8">
                Specialty Roasts
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#5A4E46] leading-relaxed max-w-2xl font-normal">
              Roasted with intention in small 12kg batches inside <strong>MAKEbhm</strong>, Birmingham, AL. 
              We partner directly with organic smallholder growers to bring vibrant single origins, velvety signature blends, and weekly barista workshops to coffee lovers everywhere.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreShop}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2C241D] hover:bg-[#1a1511] text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Shop Specialty Beans</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookWorkshop}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 border-2 border-[#E07A5F] text-[#9A3412] font-semibold text-base transition-all duration-200 shadow-xs cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                <span>Book Barista Workshop</span>
              </button>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8DFD8]">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9A3412]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Organic</span>
                </div>
                <p className="text-xs text-neutral-600">Zero pesticides or chemical synthetic inputs.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9A3412]">
                  <HeartHandshake className="w-4 h-4 text-[#E07A5F]" />
                  <span>Direct Trade</span>
                </div>
                <p className="text-xs text-neutral-600">Paying 250%+ above commodity market rates.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9A3412]">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Weekly Labs</span>
                </div>
                <p className="text-xs text-neutral-600">Hands-on barista classes in Birmingham.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Coffee & Makerspace Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#3D332A]">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80"
                  alt="Punch Love Coffee barista pouring manual V60 drip coffee inside MAKEbhm Birmingham"
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1612]/90 via-[#1C1612]/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#E07A5F] mb-1">
                    <span className="uppercase tracking-widest">Fresh Roast Spotlight</span>
                    <span className="bg-[#FAF7F2]/20 backdrop-blur-xs px-2 py-0.5 rounded text-white text-[11px]">New Crop</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Alabama Sunburst</h3>
                  <p className="text-xs text-neutral-200 mt-1">Ethiopia Guji Organic · Wild Blueberry, Jasmine, Honeycomb</p>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/20">
                    <span className="font-display font-semibold text-lg text-white">$19.50</span>
                    <span className="text-xs bg-white text-[#2C241D] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      Roasted Weekly in Avondale
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: MAKEbhm Address Callout */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-[#E8DFD8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D8CF] flex items-center justify-center text-[#9A3412]">
                  <Compass className="w-5 h-5 text-[#E07A5F]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                    Crafted in Birmingham
                  </div>
                  <div className="text-xs font-bold text-[#2C241D]">
                    4000 3rd Ave S #103
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Google 4.6 Stars Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E8DFD8] max-w-[210px]">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-extrabold text-[#2C241D] ml-1">4.6</span>
                </div>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  "Best specialty coffee & barista classes in Alabama."
                </p>
                <div className="text-[10px] text-neutral-400 mt-1 font-medium">
                  207 Verified Reviews
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
