import React, { useState } from 'react';
import { CoffeeProduct, GrindOption, BagSize } from '../types/coffee';
import { COFFEE_PRODUCTS } from '../data/coffeeData';
import { ShoppingBag, Star, Sparkles, SlidersHorizontal, Check, Info, RefreshCw, X, ShieldCheck, Flame } from 'lucide-react';

interface StoreSectionProps {
  onAddToCart: (
    product: CoffeeProduct,
    grind: GrindOption,
    size: BagSize,
    isSubscription: boolean,
    subscriptionInterval?: '2-weeks' | '4-weeks'
  ) => void;
}

export const StoreSection: React.FC<StoreSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [roastFilter, setRoastFilter] = useState<string>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<CoffeeProduct | null>(null);

  // Per-card state tracking for interactive selections before adding to cart
  const [cardSelections, setCardSelections] = useState<Record<string, {
    grind: GrindOption;
    size: BagSize;
    isSubscription: boolean;
    interval: '2-weeks' | '4-weeks';
  }>>({});

  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const getSelection = (productId: string) => {
    return cardSelections[productId] || {
      grind: 'Whole Bean' as GrindOption,
      size: '12 oz (340g)' as BagSize,
      isSubscription: false,
      interval: '2-weeks'
    };
  };

  const updateSelection = (productId: string, updates: Partial<{
    grind: GrindOption;
    size: BagSize;
    isSubscription: boolean;
    interval: '2-weeks' | '4-weeks';
  }>) => {
    setCardSelections(prev => ({
      ...prev,
      [productId]: {
        ...getSelection(productId),
        ...updates
      }
    }));
  };

  const calculatePrice = (basePrice: number, size: BagSize, isSubscription: boolean) => {
    let multiplier = 1;
    if (size === '2 lb (907g)') multiplier = 2.4;
    if (size === '5 lb (Bulk)') multiplier = 5.2;

    let total = basePrice * multiplier;
    if (isSubscription) {
      total = total * 0.90; // 10% off for subscribers
    }
    return total;
  };

  const handleAdd = (product: CoffeeProduct) => {
    const sel = getSelection(product.id);
    onAddToCart(product, sel.grind, sel.size, sel.isSubscription, sel.interval);
    setAddedAnimationId(product.id);
    setTimeout(() => setAddedAnimationId(null), 1800);
  };

  const filteredProducts = COFFEE_PRODUCTS.filter(product => {
    if (activeCategory !== 'all') {
      if (activeCategory === 'beans' && product.category === 'merch') return false;
      if (activeCategory !== 'beans' && product.category !== activeCategory) return false;
    }
    if (roastFilter !== 'all' && product.category !== 'merch') {
      if (roastFilter === 'light' && !product.roastLevel.includes('Light')) return false;
      if (roastFilter === 'medium' && !product.roastLevel.includes('Medium')) return false;
      if (roastFilter === 'dark' && product.roastLevel !== 'Dark') return false;
    }
    return true;
  });

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E07A5F]/15 text-[#9A3412] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct-Trade & Organic Coffee Roastery</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight">
            Specialty Roasts, Freshly Shipped
          </h2>
          <p className="mt-4 text-[#5A4E46] text-base sm:text-lg">
            Every bag is roasted to order in small batches at MAKEbhm. Whole bean or ground to your exact brew method. 
            Subscribe to never run out of freshly roasted morning coffee.
          </p>
        </div>

        {/* Filter Controls & Category Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8DFD8]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Offerings' },
              { id: 'single-origin', label: 'Single Origins' },
              { id: 'blend', label: 'Signature Blends' },
              { id: 'decaf', label: 'Organic Decaf' },
              { id: 'merch', label: 'Gear & Ceramics' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2C241D] text-white shadow-xs'
                    : 'bg-white border border-[#E2D8CF] text-[#4A3E37] hover:border-[#2C241D]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Roast Level Filter */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-neutral-500 font-medium flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
              Roast:
            </span>
            <select
              value={roastFilter}
              aria-label="Filter by roast level"
              onChange={(e) => setRoastFilter(e.target.value)}
              className="bg-white border border-[#E2D8CF] rounded-lg px-3 py-1.5 text-xs font-semibold text-[#2C241D] focus:outline-hidden focus:border-[#9A3412] cursor-pointer"
            >
              <option value="all">All Roast Profiles</option>
              <option value="light">Light & Floral</option>
              <option value="medium">Balanced Medium</option>
              <option value="dark">Rich Dark Roast</option>
            </select>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const sel = getSelection(product.id);
            const currentPrice = calculatePrice(product.price, sel.size, sel.isSubscription);
            const isAdded = addedAnimationId === product.id;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-[#E2D8CF] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Product Card Top: Image & Badges */}
                <div className="relative aspect-4/3 bg-[#F4EFEA] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#2C241D] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                      {product.badge}
                    </div>
                  )}

                  {product.isOrganic && (
                    <div className="absolute top-3 right-3 bg-emerald-600/95 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      Organic
                    </div>
                  )}

                  {/* Roast Level Indicator Pill */}
                  {product.category !== 'merch' && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#2C241D] text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-2xs">
                      <Flame className="w-3 h-3 text-[#E07A5F]" />
                      <span>{product.roastLevel} Roast</span>
                    </div>
                  )}

                  {/* Quick Info Button */}
                  <button
                    onClick={() => setSelectedProductForModal(product)}
                    title="View Origin Notes & Brew Specs"
                    className="absolute bottom-3 right-3 p-1.5 rounded-md bg-white/90 hover:bg-white text-[#2C241D] shadow-xs transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Info Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                      <span className="font-semibold text-[#9A3412] uppercase tracking-wider text-[11px]">
                        {product.origin.split(',')[0]}
                      </span>
                      <div className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{product.rating}</span>
                        <span className="text-neutral-400 text-[10px]">({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-[#2C241D] group-hover:text-[#9A3412] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5 font-medium line-clamp-1">
                      {product.subtitle}
                    </p>

                    {/* Tasting Notes Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                      {product.tastingNotes.slice(0, 3).map((note, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-[#FAF7F2] text-[#5A4E46] border border-[#E8DFD8]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Selection Options (Grind & Size) if coffee bean */}
                  <div className="pt-3 border-t border-[#EFE8E1] space-y-2.5">
                    
                    {product.category !== 'merch' && (
                      <>
                        {/* Grind Selection */}
                        <div>
                          <label className="block text-[11px] font-semibold text-neutral-600 mb-1">
                            Grind Type:
                          </label>
                          <select
                            value={sel.grind}
                            aria-label={`Grind type for ${product.name}`}
                            onChange={(e) => updateSelection(product.id, { grind: e.target.value as GrindOption })}
                            className="w-full text-xs bg-[#FAF7F2] border border-[#E2D8CF] rounded-lg px-2.5 py-1.5 font-medium text-[#2C241D] focus:outline-hidden focus:border-[#9A3412] cursor-pointer"
                          >
                            <option value="Whole Bean">Whole Bean (Recommended)</option>
                            <option value="Espresso / Moka">Fine (Espresso / Moka)</option>
                            <option value="Pour Over / Chemex">Medium (Pour Over / Chemex)</option>
                            <option value="Drip / Batch Brew">Medium (Drip / Batch Brew)</option>
                            <option value="French Press / Cold Brew">Coarse (French Press / Cold)</option>
                          </select>
                        </div>

                        {/* Size Selection */}
                        <div className="flex items-center justify-between gap-1 text-[11px]">
                          {(['12 oz (340g)', '2 lb (907g)', '5 lb (Bulk)'] as BagSize[]).map((sz) => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() => updateSelection(product.id, { size: sz })}
                              className={`flex-1 py-1 rounded text-center font-medium border transition-colors cursor-pointer ${
                                sel.size === sz
                                  ? 'bg-[#2C241D] text-white border-[#2C241D]'
                                  : 'bg-white text-neutral-600 border-[#E2D8CF] hover:border-neutral-400'
                              }`}
                            >
                              {sz.split(' ')[0]}
                            </button>
                          ))}
                        </div>

                        {/* Subscription Toggle */}
                        <div className="p-2 rounded-lg bg-[#FAF7F2] border border-[#E8DFD8] flex items-center justify-between text-xs">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={sel.isSubscription}
                              onChange={(e) => updateSelection(product.id, { isSubscription: e.target.checked })}
                              className="w-3.5 h-3.5 rounded text-[#9A3412] focus:ring-[#9A3412]"
                            />
                            <span className="font-semibold text-[#2C241D] text-[11px] flex items-center gap-1">
                              <RefreshCw className="w-3 h-3 text-[#E07A5F]" />
                              Subscribe (Save 10%)
                            </span>
                          </label>

                          {sel.isSubscription && (
                            <select
                              value={sel.interval}
                              aria-label="Subscription frequency"
                              onChange={(e) => updateSelection(product.id, { interval: e.target.value as '2-weeks' | '4-weeks' })}
                              className="text-[10px] bg-white border border-[#E2D8CF] rounded px-1.5 py-0.5 font-medium"
                            >
                              <option value="2-weeks">Every 2 wks</option>
                              <option value="4-weeks">Monthly</option>
                            </select>
                          )}
                        </div>
                      </>
                    )}

                    {/* Price & Add to Cart Action */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <div className="font-display text-xl font-bold text-[#2C241D]">
                          ${currentPrice.toFixed(2)}
                        </div>
                        {sel.isSubscription && (
                          <span className="text-[10px] text-emerald-700 font-bold">
                            Subscribed Price
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAdd(product)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#2C241D] hover:bg-[#E07A5F] text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Roaster Quality Guarantee Banner */}
        <div className="mt-16 bg-[#2C241D] rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="text-[#E07A5F] font-bold text-xs uppercase tracking-widest">
              Birmingham Freshness Guarantee
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Roasted Within 48 Hours of Your Doorstep
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              We never warehouse old beans. Orders are roasted in our MAKEbhm facility, degassed gently, and shipped immediately with the roast date stamped on every single bag. Free shipping on all orders over $40.
            </p>
          </div>
          
          <div className="absolute right-0 bottom-0 top-0 hidden lg:flex items-center pr-12 opacity-20 pointer-events-none">
            <div className="font-display text-8xl font-black text-white select-none">
              PUNCH LOVE
            </div>
          </div>
        </div>

      </div>

      {/* Product Deep-Dive Modal */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8DFD8]">
            <div className="relative p-6 sm:p-8">
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#2C241D] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#E07A5F] uppercase tracking-wider">
                  Origin Dossier
                </span>
                {selectedProductForModal.isOrganic && (
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    USDA Certified Organic
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2C241D]">
                {selectedProductForModal.name}
              </h3>
              <p className="text-neutral-500 font-medium text-sm mt-1">
                {selectedProductForModal.subtitle}
              </p>

              {/* Origin Specifics Table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD8]">
                <div>
                  <div className="text-[11px] text-neutral-500 font-semibold uppercase">Origin</div>
                  <div className="text-xs font-bold text-[#2C241D] mt-0.5">{selectedProductForModal.origin}</div>
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-semibold uppercase">Altitude</div>
                  <div className="text-xs font-bold text-[#2C241D] mt-0.5">{selectedProductForModal.altitude}</div>
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-semibold uppercase">Process</div>
                  <div className="text-xs font-bold text-[#2C241D] mt-0.5">{selectedProductForModal.process}</div>
                </div>
                <div>
                  <div className="text-[11px] text-neutral-500 font-semibold uppercase">Roast Level</div>
                  <div className="text-xs font-bold text-[#2C241D] mt-0.5">{selectedProductForModal.roastLevel}</div>
                </div>
              </div>

              {/* Farm & Cup Notes */}
              <div className="space-y-4 text-sm text-[#4A3E37]">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#9A3412] mb-1">
                    Producer & Farm Story
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProductForModal.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#9A3412] mb-1">
                    Head Roaster’s Brew Recipe
                  </h4>
                  <div className="p-3 bg-[#F4EFEA] rounded-xl border border-[#E2D8CF] text-xs font-medium leading-relaxed">
                    ☕ {selectedProductForModal.brewRecommendation}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFD8] flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-[#2C241D]">
                  ${selectedProductForModal.price.toFixed(2)}
                  <span className="text-xs font-normal text-neutral-500 ml-1">/ 12 oz</span>
                </span>
                
                <button
                  onClick={() => {
                    handleAdd(selectedProductForModal);
                    setSelectedProductForModal(null);
                  }}
                  className="bg-[#2C241D] hover:bg-[#E07A5F] text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                >
                  Add This Roast to Order
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
