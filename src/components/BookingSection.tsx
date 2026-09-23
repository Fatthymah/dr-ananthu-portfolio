'use client';

import React from 'react';
import {
  Hospital,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left card — Star Care Hospital */}
          <div className="w-full bg-[#0b1f2d] text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-teal-500/20 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
                  <Hospital className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 font-heading block">
                    Clinical Consultation Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-0.5">
                    Star Care Hospital
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-300/90 font-medium mt-0.5">Kozhikode, Kerala</p>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs sm:text-sm font-body text-slate-200">
                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Consultation Schedule:</span>
                    <span className="text-slate-200 leading-relaxed">Monday – Saturday (09:30 AM – 04:30 PM)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Location:</span>
                    <span className="text-slate-200 leading-relaxed">Kozhikode (Calicut), Kerala</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Direct Consultation Phone:</span>
                    <a
                      href="tel:+914952489000"
                      className="text-teal-300 hover:text-teal-200 font-semibold text-sm sm:text-base hover:underline tracking-wide block mt-0.5"
                    >
                      +91 495 248 9000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Prior appointment ensures minimal waiting time. Direct phone and WhatsApp consultation scheduling available Monday to Saturday.
            </div>
          </div>

          {/* Right card — Farooq Hospital */}
          <div className="w-full bg-[#0b1f2d] text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-teal-500/20 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
                  <Hospital className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 font-heading block">
                    Clinical Consultation Desk
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-0.5">
                    Farooq Hospital
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-300/90 font-medium mt-0.5">Kozhikode, Kerala</p>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs sm:text-sm font-body text-slate-200">
                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Consultation Schedule:</span>
                    <span className="text-slate-200 leading-relaxed">Monday – Saturday (09:30 AM – 04:30 PM)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Location:</span>
                    <span className="text-slate-200 leading-relaxed">Kozhikode (Calicut), Kerala</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-1">Direct Consultation Phone:</span>
                    <a
                      href="tel:+914953521950"
                      className="text-teal-300 hover:text-teal-200 font-semibold text-sm sm:text-base hover:underline tracking-wide block mt-0.5"
                    >
                      +91 495 352 1950
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Prior appointment ensures minimal waiting time. Direct phone and WhatsApp consultation scheduling available Monday to Saturday.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
