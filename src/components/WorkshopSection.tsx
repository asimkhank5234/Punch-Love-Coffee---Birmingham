import React, { useState } from 'react';
import { Workshop, WorkshopBooking } from '../types/coffee';
import { WORKSHOPS, CAFE_INFO } from '../data/coffeeData';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  X, 
  Coffee, 
  ShieldCheck, 
  Download, 
  MapPin, 
  UserCheck,
  ChevronRight,
  Printer
} from 'lucide-react';

interface WorkshopSectionProps {
  initialSelectedWorkshopId?: string | null;
  isOpenBookingModal: boolean;
  onCloseBookingModal: () => void;
  onOpenBookingModal: (workshopId?: string) => void;
}

export const WorkshopSection: React.FC<WorkshopSectionProps> = ({
  initialSelectedWorkshopId,
  isOpenBookingModal,
  onCloseBookingModal,
  onOpenBookingModal,
}) => {
  // Generate realistic upcoming weekly workshop dates (next 5 weeks)
  const getUpcomingDates = () => {
    const dates = [];
    const today = new Date();
    // Generate dates for the upcoming 28 days
    for (let i = 2; i <= 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const day = d.getDay(); // 0 is Sunday, 4 is Thursday, 6 is Saturday
      if (day === 6 || day === 0 || day === 4) {
        dates.push({
          dateString: d.toISOString().split('T')[0],
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          formatted: d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
          dayType: day === 6 ? 'Saturday' : day === 0 ? 'Sunday' : 'Thursday'
        });
      }
    }
    return dates;
  };

  const upcomingDates = getUpcomingDates();

  // Booking Modal State
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop>(
    WORKSHOPS.find(w => w.id === initialSelectedWorkshopId) || WORKSHOPS[0]
  );
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>(upcomingDates[0]?.dateString || '');
  const [participants, setParticipants] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  
  // Confirmed booking state
  const [confirmedBooking, setConfirmedBooking] = useState<WorkshopBooking | null>(null);

  const handleSelectWorkshopToBook = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setBookingStep(1);
    setConfirmedBooking(null);
    onOpenBookingModal(workshop.id);
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail) return;

    const newBooking: WorkshopBooking = {
      id: `PLC-${Math.floor(100000 + Math.random() * 900000)}`,
      workshopId: selectedWorkshop.id,
      workshopTitle: selectedWorkshop.title,
      date: selectedDate,
      timeSlot: selectedWorkshop.timeSlot,
      participants,
      totalPrice: selectedWorkshop.price * participants,
      customerName,
      customerEmail,
      customerPhone: customerPhone || '(205) 555-0199',
      specialRequests: specialNotes,
      status: 'confirmed',
      bookedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    setConfirmedBooking(newBooking);
    setBookingStep(3); // confirmation step
  };

  const handleDownloadPass = () => {
    window.print();
  };

  const totalPrice = selectedWorkshop.price * participants;

  return (
    <section id="workshops" className="py-16 sm:py-24 bg-[#F4EFEA] relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#E07A5F]/20 text-[#9A3412] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Hands-On Barista Academy inside MAKEbhm</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C241D] tracking-tight">
            Weekly Barista Workshops
          </h2>
          <p className="mt-4 text-[#5A4E46] text-base sm:text-lg">
            Step behind our commercial espresso bar. Small, intimate cohorts (capped at 6–8 seats) led by Q-Grader trained roasters. 
            Includes a complimentary 12 oz bag of fresh beans, dial-in cheat cards, and barista certification.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {WORKSHOPS.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-3xl border border-[#E2D8CF] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header Image & Badges */}
                <div className="relative aspect-16/9 bg-[#2C241D] overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {workshop.featured && (
                    <div className="absolute top-4 left-4 bg-[#E07A5F] text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-3 h-3" />
                      Most Popular Class
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <div className="text-xs font-semibold text-[#E07A5F] uppercase tracking-wider">
                        {workshop.level}
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                        {workshop.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-extrabold text-white">
                        ${workshop.price}
                      </div>
                      <div className="text-[11px] text-neutral-300">per person</div>
                    </div>
                  </div>
                </div>

                {/* Details & Syllabus */}
                <div className="p-6 sm:p-7 space-y-5">
                  <p className="text-sm text-[#5A4E46] leading-relaxed">
                    {workshop.description}
                  </p>

                  {/* Meta Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-[#FAF7F2] rounded-2xl border border-[#E8DFD8] text-xs">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#E07A5F]" />
                      <div>
                        <div className="text-[10px] text-neutral-400 font-bold uppercase">Duration</div>
                        <div className="font-bold text-[#2C241D]">{workshop.duration}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#E07A5F]" />
                      <div>
                        <div className="text-[10px] text-neutral-400 font-bold uppercase">Max Size</div>
                        <div className="font-bold text-[#2C241D]">{workshop.maxSeats} Students</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4 text-[#E07A5F]" />
                      <div>
                        <div className="text-[10px] text-neutral-400 font-bold uppercase">Schedule</div>
                        <div className="font-bold text-[#2C241D]">{workshop.timeSlot.split('–')[0]}</div>
                      </div>
                    </div>
                  </div>

                  {/* Syllabus Points */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A3412] mb-2.5">
                      What You Will Learn:
                    </h4>
                    <ul className="space-y-1.5">
                      {workshop.syllabus.map((item, i) => (
                        <li key={i} className="text-xs text-[#4A3E37] flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perks & Take Homes */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9A3412] mb-2">
                      Everything Included:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {workshop.includes.map((perk, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#FAF7F2] text-[#2C241D] border border-[#E2D8CF]"
                        >
                          🎁 {perk}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#F0EBE5] flex items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-2.5">
                  <img
                    src={workshop.instructor.avatar}
                    alt={workshop.instructor.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#E2D8CF]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2C241D]">{workshop.instructor.name}</div>
                    <div className="text-[10px] text-neutral-500 font-medium">{workshop.instructor.title}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectWorkshopToBook(workshop)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#2C241D] hover:bg-[#E07A5F] text-white text-xs font-bold transition-all shadow-xs cursor-pointer group"
                >
                  <span>Book Spot</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Workshop Booking Banner Callout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D8CF] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E07A5F]/15 flex items-center justify-center text-[#9A3412] shrink-0">
              <Coffee className="w-7 h-7 text-[#E07A5F]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#2C241D]">
                Planning a Private Team Event or Birthday Cupping?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                We host private 6–15 person workshops at MAKEbhm with custom tasting flights and catering.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-[#FAF7F2] hover:bg-neutral-100 text-[#2C241D] border border-[#E2D8CF] text-xs font-bold transition-colors shrink-0"
          >
            Inquire for Private Group
          </a>
        </div>

      </div>

      {/* Booking System Interactive Modal */}
      {isOpenBookingModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-[#E8DFD8] my-8">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#E8DFD8] flex items-center justify-between bg-[#FAF7F2]">
              <div>
                <span className="text-[11px] font-bold text-[#E07A5F] uppercase tracking-wider">
                  MAKEbhm Roastery Studio
                </span>
                <h3 className="font-display text-xl font-bold text-[#2C241D]">
                  {bookingStep === 3 ? '🎉 Booking Confirmed!' : `Reserve Your Spot: ${selectedWorkshop.title}`}
                </h3>
              </div>
              <button
                onClick={onCloseBookingModal}
                className="p-2 rounded-full hover:bg-neutral-200 text-neutral-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Based on Steps */}
            <div className="p-6">
              
              {/* STEP 1: Workshop, Date & Seats Selection */}
              {bookingStep === 1 && (
                <div className="space-y-6">
                  {/* Select Workshop Switcher */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9A3412] mb-2">
                      Choose Workshop:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {WORKSHOPS.map((ws) => (
                        <button
                          key={ws.id}
                          type="button"
                          onClick={() => setSelectedWorkshop(ws)}
                          className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                            selectedWorkshop.id === ws.id
                              ? 'bg-[#2C241D] text-white border-[#2C241D] shadow-xs'
                              : 'bg-white text-[#2C241D] border-[#E2D8CF] hover:border-neutral-400'
                          }`}
                        >
                          <div className="text-xs font-bold truncate">{ws.title}</div>
                          <div className={`text-[11px] mt-0.5 ${selectedWorkshop.id === ws.id ? 'text-neutral-300' : 'text-neutral-500'}`}>
                            ${ws.price} · {ws.duration}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Upcoming Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#9A3412] mb-2">
                      Select Upcoming Session Date:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {upcomingDates.slice(0, 6).map((d) => (
                        <button
                          key={d.dateString}
                          type="button"
                          onClick={() => setSelectedDate(d.dateString)}
                          className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                            selectedDate === d.dateString
                              ? 'bg-[#E07A5F] text-white border-[#E07A5F] font-bold shadow-xs'
                              : 'bg-[#FAF7F2] text-[#2C241D] border-[#E2D8CF] hover:border-neutral-400'
                          }`}
                        >
                          <div className="text-xs font-bold">{d.formatted}</div>
                          <div className={`text-[10px] ${selectedDate === d.dateString ? 'text-white/80' : 'text-neutral-500'}`}>
                            {selectedWorkshop.timeSlot.split('–')[0]}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seat Quantity */}
                  <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8DFD8]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-[#2C241D]">Number of Participants</div>
                        <div className="text-[11px] text-neutral-500">Max 6 per group for intimate hands-on access</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setParticipants(Math.max(1, participants - 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-[#E2D8CF] font-bold text-sm hover:bg-neutral-100 flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-bold text-base w-4 text-center">{participants}</span>
                        <button
                          type="button"
                          onClick={() => setParticipants(Math.min(6, participants + 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-[#E2D8CF] font-bold text-sm hover:bg-neutral-100 flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-[#E8DFD8] flex items-center justify-between text-xs">
                      <span className="text-neutral-500">Class Rate: ${selectedWorkshop.price} × {participants}</span>
                      <span className="font-display text-lg font-bold text-[#2C241D]">
                        Total: ${totalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => setBookingStep(2)}
                    className="w-full py-3 rounded-xl bg-[#2C241D] hover:bg-[#E07A5F] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Continue to Attendee Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: Attendee Form */}
              {bookingStep === 2 && (
                <form onSubmit={handleCompleteBooking} className="space-y-4">
                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8DFD8] text-xs space-y-1">
                    <div className="font-bold text-[#2C241D]">{selectedWorkshop.title}</div>
                    <div className="text-neutral-600 flex items-center gap-2">
                      <span>📅 {selectedDate}</span>
                      <span>⏰ {selectedWorkshop.timeSlot}</span>
                      <span>👥 {participants} {participants === 1 ? 'Guest' : 'Guests'}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Asim Khan"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E2D8CF] focus:outline-hidden focus:border-[#9A3412]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Email Address * (For Confirmation & Pass)
                    </label>
                    <input
                      type="email"
                      required
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="e.g. coffee@bham.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E2D8CF] focus:outline-hidden focus:border-[#9A3412]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Phone Number (For SMS reminders)
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="(205) 555-0123"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E2D8CF] focus:outline-hidden focus:border-[#9A3412]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Dietary or Milk Preference (Oat, Whole, Almond)
                    </label>
                    <input
                      type="text"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Prefer Oat milk, bringing home espresso machine questions"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E2D8CF] focus:outline-hidden focus:border-[#9A3412]"
                    />
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setBookingStep(1)}
                      className="px-4 py-2.5 rounded-xl border border-[#E2D8CF] text-xs font-semibold text-neutral-600 hover:bg-neutral-50 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-[#E07A5F] hover:bg-[#C9664C] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm & Reserve (${totalPrice})</span>
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: Confirmed Ticket Pass */}
              {bookingStep === 3 && confirmedBooking && (
                <div className="space-y-6">
                  {/* Digital Barista Pass Card */}
                  <div className="bg-[#2C241D] text-white rounded-3xl p-6 border-2 border-[#E07A5F] shadow-xl relative overflow-hidden">
                    {/* Top ticket strip */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#E07A5F] flex items-center justify-center">
                          <Coffee className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-sm tracking-wide">PUNCH LOVE COFFEE</div>
                          <div className="text-[10px] text-neutral-300">Barista Academy · Birmingham, AL</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
                        CONFIRMED PASS
                      </span>
                    </div>

                    {/* Class Name */}
                    <div className="mb-4">
                      <div className="text-[11px] text-[#E07A5F] font-bold uppercase tracking-wider">Workshop</div>
                      <h4 className="font-display text-xl font-bold text-white">{confirmedBooking.workshopTitle}</h4>
                    </div>

                    {/* Booking Reference & Details Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs bg-black/30 p-3 rounded-2xl border border-white/10 mb-4">
                      <div>
                        <div className="text-[10px] text-neutral-400">Date & Time</div>
                        <div className="font-bold text-white">{confirmedBooking.date}</div>
                        <div className="text-[11px] text-neutral-300">{confirmedBooking.timeSlot}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-neutral-400">Pass Holder</div>
                        <div className="font-bold text-white">{confirmedBooking.customerName}</div>
                        <div className="text-[11px] text-neutral-300">{confirmedBooking.participants} Seat(s)</div>
                      </div>
                      <div className="col-span-2 pt-1 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] text-neutral-400">Location:</span>
                        <span className="text-[11px] font-medium text-neutral-200">
                          MAKEbhm #103, 4000 3rd Ave S, Birmingham, AL 35222
                        </span>
                      </div>
                    </div>

                    {/* Reference ID & Perks Reminder */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <div>
                        <div className="text-[10px] text-neutral-400 uppercase">Booking Ref</div>
                        <div className="font-mono font-bold text-[#E07A5F] tracking-wider">{confirmedBooking.id}</div>
                      </div>
                      <div className="text-right text-[11px] text-neutral-300">
                        Includes: 12oz Roast + Certificate
                      </div>
                    </div>
                  </div>

                  {/* Actions: Print / Close */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={handleDownloadPass}
                      className="w-full sm:flex-1 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#2C241D] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Print / Save Ticket Pass</span>
                    </button>

                    <button
                      onClick={onCloseBookingModal}
                      className="w-full sm:flex-1 py-2.5 rounded-xl bg-[#2C241D] hover:bg-[#E07A5F] text-white font-bold text-xs flex items-center justify-center cursor-pointer transition-colors"
                    >
                      Done & Return to Site
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
