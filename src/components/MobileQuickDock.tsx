'use client';

import React from 'react';
import { doctorData } from '@/data/doctorData';
import { Phone, Calendar, MessageSquare } from 'lucide-react';

export default function MobileQuickDock() {
  const whatsappUrl = `https://wa.me/${doctorData.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Dr. Ananthu N, I would like to inquire about an appointment at Star Care Hospital.'
  )}`;

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[96vw] max-w-md lg:hidden select-none animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#07131e]/95 backdrop-blur-2xl border border-teal-500/40 rounded-full p-1.5 pl-2.5 pr-1.5 sm:p-2 sm:pl-3 sm:pr-2 shadow-2xl shadow-teal-950/60 flex items-center justify-between text-white ring-1 ring-white/10">
        <div className="flex items-center gap-2 min-w-0 mr-1.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-teal-400 shrink-0">
            <img
              src="/images/doctor-headshot.jpg"
              alt="Dr. Ananthu N"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left leading-tight min-w-0">
            <p className="text-xs font-heading font-extrabold text-white truncate">
              Dr. Ananthu N
            </p>
            <p className="text-[10px] text-teal-300 font-semibold truncate">
              Star Care OPD
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[40px] px-2.5 sm:px-3 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:+91${doctorData.contact.phone}`}
            className="min-h-[40px] px-2.5 sm:px-3 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-heading font-bold text-xs border border-slate-700 flex items-center justify-center gap-1 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-teal-400" />
            <span>Call</span>
          </a>

          <a
            href="#booking"
            className="min-h-[40px] px-2.5 sm:px-3 py-2 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-heading font-bold text-xs flex items-center justify-center gap-1 shadow-sm transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book</span>
          </a>
        </div>
      </div>
    </div>
  );
}
