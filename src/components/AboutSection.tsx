import React from 'react';
import { CAFE_INFO } from '../data/coffeeData';
import { MapPin, Heart, Sparkles, ShieldCheck, Users, Flame, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage of MAKEbhm & Roaster */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image: Roasting & Cafe counter */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-[#3D332A]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Punch Love Coffee roastery and espresso bar inside MAKEbhm Birmingham Alabama"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold text-[#E07A5F] uppercase tracking-wider">
                    Our Creative Home
                  </div>
                  <h3 className="font-display text-xl font-bold">
                    MAKEbhm Makerspace
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    4000 3rd Ave S #103, Avondale / Forest Park, Birmingham
                  </p>
                </div>
              </div>

              {/* Floating Stat Card: Small Batches */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E8DFD8] max-w-[190px]">
                <div className="flex items-center gap-2 text-[#9A3412] font-bold text-xs uppercase">
                  <Flame className="w-4 h-4 text-[#E07A5F]" />
                  <span>Small Batches</span>
                </div>
                <div className="font-display text-2xl font-black text-[#2C241D] mt-1">
                  12 kg
                </div>
                <p className="text-[11px] text-neutral-500 mt-0.5 leading-tight">
                  Maximum drum roast capacity for surgical temperature control.
                </p>
              </div>

              {/* Floating Stat Card: Direct Trade Impact */}
              <div className="absolute -bottom-6 -left-4 bg-[#2C241D] text-white rounded-2xl p-4 shadow-xl border border-[#3D332A] max-w-[200px]">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Direct Trade</span>
                </div>
                <div className="font-display text-2xl font-black text-white mt-1">
                  +250%
                </div>
                <p className="text-[10px] text-neutral-300 mt-0.5 leading-tight">
                  Paid directly to smallholder farming cooperatives vs commodity rates.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E07A5F]/20 text-[#9A3412]">
              <Heart className="w-3.5 h-3.5 fill-[#E07A5F] text-[#E07A5F]" />
              <span>The Punch Love Ethos</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight leading-tight">
              Coffee that Packs a Punch, Roasted with Deep Love.
            </h2>

            <div className="space-y-4 text-[#5A4E46] text-base leading-relaxed">
              <p>
                Punch Love Coffee was founded in Birmingham, Alabama, with a simple yet relentless philosophy: 
                <strong> specialty coffee should be extraordinary, transparently sourced, and accessible to everyone without pretension.</strong>
              </p>

              <p>
                When searching for our roasting headquarters, nowhere spoke to us like <strong>MAKEbhm</strong>. 
                Surrounded by metal fabricators, ceramic artists, printmakers, and industrial creators, we treat coffee roasting as an artisanal trade—balancing science, thermodynamics, and sensory intuition.
              </p>

              <p>
                The pottery mugs on our shelves are thrown in the ceramic wing down the hall. 
                The timber espresso counter was hand-planed by Birmingham carpenters. We are proud to be an integral thread in Birmingham’s thriving makerspace culture.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8DFD8]">
              <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#E2D8CF] space-y-1">
                <div className="font-display font-bold text-base text-[#2C241D] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Organic & Clean</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Only certified organic crops and Mountain Water decaffeination. No glyphosate, no chemical sprays, no synthetic solvents.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#E2D8CF] space-y-1">
                <div className="font-display font-bold text-base text-[#2C241D] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E07A5F]" />
                  <span>Education Over Gatekeeping</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our weekly barista classes exist because we love sharing our craft. Ask us anything about grind sizes, TDS, or dialing in.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#2C241D]">
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
