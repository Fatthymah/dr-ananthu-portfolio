'use client';

import React from 'react';
import { hospitalSchedule } from '@/data/scheduleData';
import { doctorData } from '@/data/doctorData';
import {
  Hospital,
  MapPin,
  Clock,
  Phone,
  Calendar,
  ArrowUpRight,
  ShieldAlert,
  Navigation,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

export default function HospitalOPD() {
  const whatsappUrl = `https://wa.me/${doctorData.contact.whatsappNumber}?text=${encodeURIComponent(
    'Hello Dr. Ananthu N, I would like to book an OPD consultation at Star Care Hospital Kozhikode.'
  )}`;

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold font-heading uppercase tracking-widest shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span>Consultation Schedule & OPD Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Consult Dr. Ananthu N at Star Care Hospital Kozhikode
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
            Star Care Hospital offers an advanced minimally invasive surgical suite, daycare laser
            facilities, high-dependency post-op monitoring, and 24/7 emergency surgical casualty.
          </p>
        </div>

        {/* Hospital Card & Location Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hospital Details Card (8 Cols) */}
          <div className="lg:col-span-8 bg-gradient-to-br from-slate-50 via-white to-teal-50/20 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/90 p-5 sm:p-10 shadow-lg shadow-slate-900/5 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header inside card */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 sm:pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md shadow-teal-900/20 shrink-0">
                    <Hospital className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-700 block">
                      Primary Practice Center
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                      {hospitalSchedule.hospitalName}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold font-heading">
                  Mon – Sat OPD Available
                </span>
              </div>

              {/* Department & Photo Row */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative h-48 sm:h-56 rounded-2xl overflow-hidden shadow-sm border border-slate-200 group">
                  <img
                    src="/images/doctor-rounds.jpg"
                    alt="Dr. Ananthu N on hospital rounds at Star Care Hospital"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded-md">
                    Active Clinical Care
                  </span>
                </div>

                <div className="sm:col-span-7 space-y-3 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-heading">
                    Department & Facility
                  </h4>
                  <p className="text-base font-heading font-bold text-slate-900 leading-snug">
                    {hospitalSchedule.department}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-body">
                    Complete daycare surgery infrastructure, advanced laparoscopic tower suites, and
                    specialized outpatient dressings for diabetic foot salvage.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>In-hospital diagnostics, ultrasound, and pharmacy</span>
                  </div>
                </div>
              </div>

              {/* Timing and Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Consultation Timings</span>
                  </div>
                  <p className="font-heading font-extrabold text-base text-slate-900">
                    {hospitalSchedule.timings}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Days: {hospitalSchedule.days}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Hospital Location</span>
                  </div>
                  <p className="font-heading font-bold text-sm text-slate-900 leading-snug">
                    NH Bypass Junction, Thondayad
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Kozhikode (Calicut), Kerala 673017
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/60 text-xs text-teal-900 font-medium leading-relaxed text-left">
                <span className="font-bold font-heading text-teal-950">Patient Note: </span>
                {hospitalSchedule.bookingNote}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-6 border-t border-slate-100 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={`tel:+91${hospitalSchedule.phone}`}
                className="w-full sm:w-auto justify-center min-h-[44px] px-6 py-3.5 bg-gradient-to-r from-teal-700 to-emerald-600 hover:from-teal-800 hover:to-emerald-700 text-white rounded-2xl text-xs sm:text-sm font-bold font-heading shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call OPD Desk: {hospitalSchedule.displayPhone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center min-h-[44px] px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs sm:text-sm font-bold font-heading shadow-xs transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={hospitalSchedule.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center min-h-[44px] px-4 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-teal-700 rounded-2xl text-xs sm:text-sm font-bold font-heading border border-slate-200 transition-all inline-flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-teal-600" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Emergency & Quick Access Card (4 Cols) */}
          <div className="lg:col-span-4 bg-[#081521] text-white rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-8 border border-teal-500/20 shadow-xl flex flex-col justify-between">
            <div className="space-y-6 text-left">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center">
                <ShieldAlert className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-bold font-heading uppercase tracking-widest text-rose-400 block">
                  24/7 Surgical Casualty
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
                  Emergency Hospital Access
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
                For acute surgical abdomen, high fever with spreading diabetic foot cellulitis, or
                uncontrolled anorectal bleeding, report immediately to Star Care Hospital casualty.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Casualty Hotline
                </span>
                <a
                  href={`tel:${hospitalSchedule.emergencyPhone.replace(/\s+/g, '')}`}
                  className="text-lg font-mono font-black text-rose-300 hover:underline block"
                >
                  {hospitalSchedule.emergencyPhone}
                </a>
                <span className="text-[11px] text-slate-400 block">Round-the-clock medical triage</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 block">
                  Doctor Direct Inquiries
                </span>
                <p className="text-xs text-slate-300 font-medium">
                  Email: {doctorData.contact.email}
                </p>
                <p className="text-xs text-slate-300 font-medium">
                  Mobile: {doctorData.contact.displayPhone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
