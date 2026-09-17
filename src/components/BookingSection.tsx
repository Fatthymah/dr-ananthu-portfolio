'use client';

import React from 'react';
import { doctorData } from '@/data/doctorData';
import {
  Hospital,
  Clock,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Full-Width Practice Center Card */}
        <div className="w-full bg-[#0b1f2d] text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-teal-500/20 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
                <Hospital className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white">
                  Star Care Hospital
                </h3>
                <p className="text-xs sm:text-sm text-teal-300 font-medium mt-0.5">Kozhikode, Kerala</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm font-body text-slate-200">
            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">OPD Schedule:</span>
                <span className="text-slate-200 leading-relaxed">Monday – Saturday (09:30 AM – 04:30 PM)</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">Address:</span>
                <span className="text-slate-200 leading-relaxed">NH Bypass Junction, Thondayad, Kozhikode 673017</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">Direct OPD Hotline:</span>
                <a href={`tel:+91${doctorData.contact.phone}`} className="text-teal-300 hover:underline">
                  {doctorData.contact.displayPhone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-1">Email:</span>
                <a href={`mailto:${doctorData.contact.email}`} className="text-teal-300 hover:underline break-all">
                  {doctorData.contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Prior booking ensures minimal waiting time. For acute surgical emergencies, please
            report immediately to the 24/7 Casualty department.
          </div>
        </div>
      </div>
    </section>
  );
}
