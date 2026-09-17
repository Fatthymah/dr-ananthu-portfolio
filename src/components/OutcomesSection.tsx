'use client';

import React from 'react';
import { clinicalOutcomes } from '@/data/outcomesData';
import { ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function OutcomesSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-bold font-heading text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block">
            Evidence-Based Care Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Clinical metrics that reflect surgical precision.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
            By prioritizing minimally invasive and sub-specialized surgical modalities, patients
            experience markedly accelerated wound healing, lower complication rates, and faster
            return to family and work.
          </p>
        </div>

        {/* 4 Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clinicalOutcomes.map((outcome) => (
            <div
              key={outcome.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-heading">
                    {outcome.category}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <div className="my-3">
                  <span className="font-heading font-black text-3xl sm:text-4xl text-slate-900 tracking-tight block text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600">
                    {outcome.metric}
                  </span>
                  <span className="text-xs font-heading font-bold text-slate-800 uppercase tracking-wide mt-1 block">
                    {outcome.label}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-body leading-relaxed mt-4 pt-4 border-t border-slate-100">
                  {outcome.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold text-teal-700 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{outcome.verificationBadge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Assurance Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 mt-0.5 sm:mt-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-slate-900">
                Patient-First Medical Ethics
              </h4>
              <p className="text-xs text-slate-600 font-body leading-relaxed">
                All clinical pathways adhere to strict evidence-based guidelines and ethical surgical standards. Every patient receives a transparent explanation of risks and benefits.
              </p>
            </div>
          </div>

          <a
            href="#booking"
            className="w-full sm:w-auto text-center justify-center min-h-[44px] px-5 py-3 sm:py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-heading font-bold transition-all whitespace-nowrap inline-flex items-center shrink-0"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
