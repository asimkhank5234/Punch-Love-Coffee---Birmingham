import React, { useState } from 'react';
import { TESTIMONIALS, CAFE_INFO } from '../data/coffeeData';
import { Star, CheckCircle, MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredReviews = TESTIMONIALS.filter((rev) => {
    if (filter === 'all') return true;
    if (filter === 'workshop') return rev.source === 'Workshop Attendee';
    if (filter === 'subscription') return rev.source === 'Subscriber';
    if (filter === 'google') return rev.source === 'Google';
    return true;
  });

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Overall Score Bar */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-800 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Community Verified Feedback</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight">
            Loved by Birmingham & Coffee Connoisseurs
          </h2>
          <p className="mt-4 text-[#5A4E46] text-base sm:text-lg">
            See why locals and visitors rate Punch Love Coffee 4.6 stars across {CAFE_INFO.reviewCount}+ Google reviews.
          </p>
        </div>

        {/* Big Rating Summary Banner */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D8CF] shadow-xs mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center sm:text-left">
              <div className="font-display text-5xl font-black text-[#2C241D]">
                {CAFE_INFO.googleRating}
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < 4 || (i === 4 && CAFE_INFO.googleRating >= 4.5) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}`}
                  />
                ))}
              </div>
              <div className="text-xs text-neutral-500 mt-1 font-medium">
                Based on {CAFE_INFO.reviewCount} verified Google reviews
              </div>
            </div>

            <div className="hidden md:block h-16 w-px bg-[#E8DFD8]" />

            <div className="hidden md:block text-xs text-neutral-600 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-12 text-neutral-400">5 stars</span>
                <div className="w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[88%]" />
                </div>
                <span className="font-bold text-[#2C241D]">88%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-neutral-400">4 stars</span>
                <div className="w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[10%]" />
                </div>
                <span className="font-bold text-[#2C241D]">10%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-neutral-400">3 stars</span>
                <div className="w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full w-[2%]" />
                </div>
                <span className="font-bold text-[#2C241D]">2%</span>
              </div>
            </div>
          </div>

          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-neutral-100 text-[#2C241D] border border-[#E2D8CF] text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            <span>Write a Google Review</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
          </a>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'google', label: 'Google Cafe Reviews' },
            { id: 'workshop', label: 'Barista Workshop Graduates' },
            { id: 'subscription', label: 'Roast Subscribers' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#2C241D] text-white'
                  : 'bg-white border border-[#E2D8CF] text-neutral-600 hover:border-neutral-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#E2D8CF] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-neutral-400 bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#E8DFD8]">
                    {rev.source}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-[#2C241D] mb-2 leading-snug">
                  "{rev.highlight}"
                </h4>

                <p className="text-xs text-[#5A4E46] leading-relaxed mb-4">
                  {rev.text}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EBE5] flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-[#2C241D] flex items-center gap-1">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-[10px] text-neutral-400">{rev.location}</div>
                </div>
                <div className="text-[10px] text-neutral-400 font-medium">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
