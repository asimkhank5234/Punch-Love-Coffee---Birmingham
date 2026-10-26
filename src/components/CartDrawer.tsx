import React, { useState } from 'react';
import { CartItem } from '../types/coffee';
import { ShoppingBag, X, Trash2, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<{ text: string; error?: boolean } | null>(null);
  
  // Checkout flow state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);
  const [checkoutData, setCheckoutData] = useState({
    name: '',
    email: '',
    address: '',
    city: 'Birmingham',
    state: 'AL',
    zip: '35222',
  });

  const subtotal = items.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingThreshold = 40;
  const isFreeShipping = subtotal >= shippingThreshold || subtotal === 0;
  const shippingCost = isFreeShipping ? 0 : 5.95;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'PUNCHLOVE10' || clean === 'MAKEBHM') {
      setDiscountPercent(10);
      setPromoMessage({ text: '10% Discount applied!' });
    } else if (clean === 'FREESHIP') {
      setDiscountPercent(5);
      setPromoMessage({ text: 'Promo code applied!' });
    } else {
      setPromoMessage({ text: 'Invalid code. Try "PUNCHLOVE10"', error: true });
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutData.name || !checkoutData.email || !checkoutData.address) return;
    const orderId = `PLC-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderComplete(orderId);
  };

  const handleFinishAndReset = () => {
    setOrderComplete(null);
    setIsCheckingOut(false);
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#E8DFD8] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#9A3412]" />
              <h3 className="font-display font-bold text-lg text-[#2C241D]">
                Your Coffee Cart
              </h3>
              <span className="text-xs bg-[#E8DFD8] text-[#2C241D] px-2 py-0.5 rounded-full font-bold">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-5 py-3 bg-[#F4EFEA] border-b border-[#E8DFD8] text-xs">
            {subtotal >= shippingThreshold ? (
              <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>You unlocked FREE nationwide shipping!</span>
              </div>
            ) : (
              <div>
                <span className="text-neutral-600">
                  Add <strong className="text-[#9A3412]">${(shippingThreshold - subtotal).toFixed(2)}</strong> more for free shipping!
                </span>
                <div className="w-full h-1.5 bg-neutral-200 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#E07A5F] h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {orderComplete ? (
              /* ORDER SUCCESS VIEW */
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h4 className="font-display text-2xl font-bold text-[#2C241D]">
                  Thank You for Your Order!
                </h4>
                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD8] text-xs font-mono">
                  Order ID: <strong>{orderComplete}</strong>
                </div>
                <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
                  Your beans will be roasted to order in our MAKEbhm roastery, stamped with the roast date, and dispatched to:
                </p>
                <div className="text-xs font-semibold text-[#2C241D]">
                  {checkoutData.name} · {checkoutData.address}, {checkoutData.city}, {checkoutData.state}
                </div>
                <button
                  onClick={handleFinishAndReset}
                  className="w-full py-3 rounded-xl bg-[#2C241D] hover:bg-[#E07A5F] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Continue Browsing
                </button>
              </div>
            ) : isCheckingOut ? (
              /* CHECKOUT FORM VIEW */
              <form onSubmit={handleCompleteOrder} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E8DFD8]">
                  <span className="font-display font-bold text-sm text-[#2C241D]">
                    Shipping & Delivery Details
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#9A3412] font-semibold hover:underline cursor-pointer"
                  >
                    ← Back to Cart
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={checkoutData.name}
                    onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#E2D8CF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={checkoutData.email}
                    onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#E2D8CF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={checkoutData.address}
                    onChange={(e) => setCheckoutData({ ...checkoutData, address: e.target.value })}
                    placeholder="4000 3rd Ave S"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#E2D8CF]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700 mb-1">City</label>
                    <input
                      type="text"
                      value={checkoutData.city}
                      onChange={(e) => setCheckoutData({ ...checkoutData, city: e.target.value })}
                      className="w-full text-xs px-2.5 py-2 rounded-lg border border-[#E2D8CF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700 mb-1">State</label>
                    <input
                      type="text"
                      value={checkoutData.state}
                      onChange={(e) => setCheckoutData({ ...checkoutData, state: e.target.value })}
                      className="w-full text-xs px-2.5 py-2 rounded-lg border border-[#E2D8CF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700 mb-1">ZIP</label>
                    <input
                      type="text"
                      value={checkoutData.zip}
                      onChange={(e) => setCheckoutData({ ...checkoutData, zip: e.target.value })}
                      className="w-full text-xs px-2.5 py-2 rounded-lg border border-[#E2D8CF]"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD8] text-xs space-y-1">
                  <div className="flex justify-between font-bold text-[#2C241D]">
                    <span>Total Charged:</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                  <div className="text-[10px] text-neutral-500">
                    Payment securely processed in test demo mode.
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#2C241D] hover:bg-[#E07A5F] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  Place Coffee Order (${grandTotal.toFixed(2)})
                </button>
              </form>
            ) : items.length === 0 ? (
              <div className="py-12 text-center text-neutral-500 space-y-3">
                <ShoppingBag className="w-12 h-12 text-neutral-300 mx-auto" />
                <p className="text-sm font-semibold">Your cart is empty.</p>
                <p className="text-xs">Explore our organic single origins and house blends.</p>
              </div>
            ) : (
              /* CART ITEMS LIST */
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFD8] flex gap-3 items-center"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#E2D8CF]"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-xs text-[#2C241D] truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      {item.size} · {item.grind}
                    </div>
                    {item.isSubscription && (
                      <span className="inline-block mt-1 text-[10px] font-bold text-[#9A3412] bg-[#E07A5F]/15 px-1.5 py-0.5 rounded">
                        Subscribe ({item.subscriptionInterval === '2-weeks' ? 'Every 2 wks' : 'Monthly'})
                      </span>
                    )}
                    <div className="font-bold text-xs text-[#2C241D] mt-1">
                      ${(item.pricePerUnit * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-neutral-400 hover:text-red-600 transition-colors cursor-pointer"
                      title="Remove Item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-1.5 bg-white border border-[#E2D8CF] rounded-lg px-2 py-0.5 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="text-neutral-500 hover:text-black font-bold cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-4 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="text-neutral-500 hover:text-black font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Totals & Checkout Button */}
          {!orderComplete && items.length > 0 && !isCheckingOut && (
            <div className="p-5 border-t border-[#E8DFD8] bg-[#FAF7F2] space-y-3">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. PUNCHLOVE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 text-xs px-3 py-1.5 rounded-lg border border-[#E2D8CF] bg-white uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-[#2C241D] text-white text-xs font-bold cursor-pointer hover:bg-[#E07A5F]"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <div className={`text-[11px] font-semibold ${promoMessage.error ? 'text-red-600' : 'text-emerald-700'}`}>
                  {promoMessage.text}
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1 text-xs text-neutral-600 pt-2 border-t border-[#E8DFD8]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#2C241D]">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{isFreeShipping ? <strong className="text-emerald-700">FREE</strong> : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#2C241D] pt-2 border-t border-[#E8DFD8]">
                  <span>Total</span>
                  <span className="font-display text-lg">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 rounded-xl bg-[#2C241D] hover:bg-[#E07A5F] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
