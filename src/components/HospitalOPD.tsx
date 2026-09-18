'use client';

import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export default function HospitalOPD() {
  return (
    <section id="schedule" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold font-heading uppercase tracking-widest shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span>Consultation Schedule & OPD Desk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Consult Dr. Ananthu N
          </h2>
        </div>

        {/* Minimal Card (Image + Short Text + Phone Number) - Center-Aligned */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-50 via-white to-teal-50/20 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-slate-900/5 text-center flex flex-col items-center">
          {/* Existing Image */}
          <div className="relative w-full max-w-md h-60 sm:h-72 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group mb-6">
            <img
              src="/images/doctor-rounds.jpg"
              alt="Dr. Ananthu N"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs whitespace-nowrap">
              Clinical Consultation
            </span>
          </div>

          {/* Short Text + Phone Number Link */}
          <div className="space-y-4 text-center max-w-md mx-auto">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 font-heading block">
                Direct Appointment & Inquiries
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mt-1 leading-snug">
                Dr. Ananthu N
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-body mt-2 leading-relaxed">
                For clinical appointments, second opinions, and surgical consultations:
              </p>
            </div>

            <div className="pt-1 flex justify-center">
              <a
                href="tel:8891468763"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-teal-700 to-emerald-600 hover:from-teal-800 hover:to-emerald-700 text-white rounded-2xl text-base sm:text-lg font-heading font-bold shadow-sm hover:shadow-md transition-all group"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
                <span>8891468763</span>
              </a>
            </div>

            <p className="text-xs text-slate-500 font-body">
              Available Monday – Saturday | Prior booking recommended
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
