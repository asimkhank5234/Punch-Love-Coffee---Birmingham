import React, { useState } from 'react';
import { CAFE_INFO } from '../data/coffeeData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Instagram, 
  Navigation, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  DollarSign,
  Coffee,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', topic: 'General Inquiry', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F4EFEA] border-t border-[#E8DFD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#E07A5F]/20 text-[#9A3412] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Birmingham Location & Inquiries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight">
            Visit Punch Love Coffee at MAKEbhm
          </h2>
          <p className="mt-4 text-[#5A4E46] text-base sm:text-lg">
            Stop by for your morning pour-over, pick up freshly roasted beans, or drop us a line for wholesale roasts and private barista workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Business Details & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Snapshot Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2D8CF] shadow-xs space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#2C241D]">
                    {CAFE_INFO.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#E07A5F] mt-0.5">
                    Located in: {CAFE_INFO.locationName}
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  {CAFE_INFO.priceRange} · Coffee shop
                </div>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3 text-xs text-[#4A3E37]">
                <MapPin className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#2C241D] text-sm">
                    {CAFE_INFO.address}
                  </div>
                  <div className="text-neutral-500 mt-0.5">
                    United States (Avondale / 3rd Ave South)
                  </div>
                  <a
                    href={CAFE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-[#9A3412] font-bold hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Turn-by-Turn Directions</span>
                  </a>
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#F0EBE5] text-xs">
                <a
                  href={`tel:${CAFE_INFO.phone}`}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-neutral-100 text-[#2C241D] font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E07A5F]" />
                  <span>{CAFE_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${CAFE_INFO.email}`}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF7F2] hover:bg-neutral-100 text-[#2C241D] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E07A5F]" />
                  <span>{CAFE_INFO.email}</span>
                </a>
              </div>

              {/* Instagram link */}
              <a
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200 text-xs font-bold text-[#9A3412] hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#E07A5F]" />
                  <span>Instagram: {CAFE_INFO.instagramHandle}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

            {/* Hours Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2D8CF] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-base text-[#2C241D] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E07A5F]" />
                  <span>Cafe Hours</span>
                </h4>
                <span className="text-[11px] font-bold text-neutral-500 bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#E8DFD8]">
                  Birmingham (CST)
                </span>
              </div>

              <div className="space-y-2 text-xs">
                {CAFE_INFO.hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-[#F0EBE5] last:border-0"
                  >
                    <span className="font-semibold text-neutral-700">{h.days}</span>
                    <span className="font-bold text-[#2C241D]">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD8] text-[11px] text-neutral-600 flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#E07A5F] shrink-0" />
                <span>Great Coffee, Good Trash Talk. Cozy space inside MAKEbhm Suite #103.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form & Location Map Visual */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E2D8CF] shadow-xs">
            
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-[#2C241D]">
                Send Us a Note
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Have questions about our single-origin roasts, coffee subscriptions, or stopping by MAKEbhm? We respond within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-xl text-emerald-900">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out to Punch Love Coffee. A member of our Birmingham roastery team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E2D8CF] focus:outline-hidden focus:border-[#9A3412]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E2D8CF] focus:outline-hidden focus:border-[#9A3412]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    What can we help you with?
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E2D8CF] bg-white focus:outline-hidden focus:border-[#9A3412]"
                  >
                    <option value="General Inquiry">General Question / Cafe Visit</option>
                    <option value="Coffee Beans">Coffee Bean Orders & Subscriptions</option>
                    <option value="Wholesale Beans">Wholesale Coffee Beans for Cafes/Offices</option>
                    <option value="Event Catering">Coffee Catering inside MAKEbhm</option>
                    <option value="Feedback">Feedback on Roasts or Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what coffee you love or how we can assist..."
                    className="w-full text-xs p-3.5 rounded-xl border border-[#E2D8CF] focus:outline-hidden focus:border-[#9A3412]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#2C241D] hover:bg-[#E07A5F] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Birmingham Roastery</span>
                </button>
              </form>
            )}

            {/* Quick interactive directions map preview card */}
            <div className="mt-8 pt-6 border-t border-[#E8DFD8]">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E2D8CF] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#2C241D]">
                    Heading to MAKEbhm?
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Free parking available in front of Suite #103 and on 3rd Ave South.
                  </div>
                </div>
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-[#E2D8CF] text-xs font-bold text-[#9A3412] hover:bg-neutral-50 shrink-0"
                >
                  Open Maps
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
