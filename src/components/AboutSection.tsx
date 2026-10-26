import React from 'react';
import { CAFE_INFO } from '../data/coffeeData';
import { MapPin, Sparkles, MessageCircle, Heart, Coffee, ShieldCheck, Flame } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage of MAKEbhm & Cafe Atmosphere */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Cafe counter & intimate cozy seating */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-[#3D332A]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Punch Love Coffee cozy cafe bar and engaging conversation inside MAKEbhm Birmingham Alabama"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold text-[#E07A5F] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Great Coffee, Good Trash Talk</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mt-1">
                    Punch Love Coffee
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    MAKEbhm #103 · 4000 3rd Ave S, Birmingham, AL
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Multi-Roaster Showcase */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E8DFD8] max-w-[210px]">
                <div className="flex items-center gap-1.5 text-[#9A3412] font-bold text-xs uppercase tracking-wider">
                  <Coffee className="w-4 h-4 text-[#E07A5F]" />
                  <span>Curated Roasters</span>
                </div>
                <p className="text-xs font-bold text-[#2C241D] mt-1.5 leading-snug">
                  Proud Mary · Thankfully · Junto
                </p>
                <p className="text-[10px] text-neutral-500 mt-0.5">
                  Portland, Auburn & South Carolina
                </p>
              </div>

              {/* Floating Badge 2: Last Call Baking Partner */}
              <div className="absolute -bottom-6 -left-4 bg-[#2C241D] text-white rounded-2xl p-4 shadow-xl border border-[#3D332A] max-w-[220px]">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>Fresh Local Pastries</span>
                </div>
                <div className="font-display text-sm font-bold text-white mt-1">
                  Last Call Baking Co.
                </div>
                <p className="text-[10px] text-neutral-300 mt-0.5 leading-tight">
                  Artisanal morning pastries baked fresh right here in Birmingham.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story - "Inside Our World" */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#E07A5F]/20 text-[#9A3412]">
              <MessageCircle className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span className="font-semibold tracking-wide">Great Coffee, Good Trash Talk</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight leading-tight">
              Inside Our World
            </h2>

            {/* Exact User Story Content */}
            <div className="space-y-4 text-[#4A3E37] text-base leading-relaxed">
              <p>
                Welcome to <strong>Punch Love</strong>, where great coffee and engaging conversation are always on the menu. We're not your typical coffee shop, and we have no intention of blending into the crowd. What sets us apart is our pride in serving an eclectic range of coffees from multiple roasters, catering to coffee enthusiasts. Our selection includes <strong>Proud Mary</strong> from Portland, <strong>Thankfully Coffee</strong> from Auburn, and <strong>Junto Coffee</strong> from South Carolina.
              </p>

              <p>
                For those who enjoy a touch of sweetness, we offer house-made syrups that complement rather than overpower our brews. Our delicious pastries from <strong>Last Call Baking</strong> pair perfectly with our coffee, adding a delightful touch to your visit.
              </p>

              <p>
                We cherish our cozy space, perfect for intimate gatherings or a quiet coffee break. While we're enthusiastic about future growth, our current setup isn't ideal for large groups. Come by, enjoy a great cup, and join the conversation. We promise you'll leave with a smile and a deeper appreciation for exceptional coffee.
              </p>
            </div>

            {/* Curated Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E8DFD8]">
              <div className="p-3.5 rounded-2xl bg-[#F4EFEA] border border-[#E2D8CF]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9A3412] flex items-center gap-1.5 mb-1">
                  <Coffee className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>Multi-Roaster</span>
                </div>
                <div className="text-xs text-[#2C241D] font-bold">
                  Guest Roaster Lineup
                </div>
                <p className="text-[11px] text-neutral-600 mt-0.5">
                  Rotating beans from top roasters across the country.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F4EFEA] border border-[#E2D8CF]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9A3412] flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>House-Made</span>
                </div>
                <div className="text-xs text-[#2C241D] font-bold">
                  Craft Syrups
                </div>
                <p className="text-[11px] text-neutral-600 mt-0.5">
                  Subtle, balanced sweetness that lets the espresso shine.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F4EFEA] border border-[#E2D8CF]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#9A3412] flex items-center gap-1.5 mb-1">
                  <Heart className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>Local Love</span>
                </div>
                <div className="text-xs text-[#2C241D] font-bold">
                  Last Call Baking
                </div>
                <p className="text-[11px] text-neutral-600 mt-0.5">
                  Birmingham's best pastries paired with world-class brews.
                </p>
              </div>
            </div>

            {/* Location & Instagram link */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#2C241D]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E07A5F]" />
                <span>{CAFE_INFO.address}</span>
              </div>
              <span className="text-neutral-300">•</span>
              <a
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A3412] hover:underline"
              >
                Follow {CAFE_INFO.instagramHandle}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
