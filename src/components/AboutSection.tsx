'use client';

import React from 'react';
import { doctorData } from '@/data/doctorData';
import {
  HeartHandshake,
  Compass,
  ShieldCheck,
  Target,
  GraduationCap,
  Stethoscope,
} from 'lucide-react';

export default function AboutSection() {
  const principles = [
    {
      icon: Target,
      title: 'Precision in Surgery',
      desc: 'Every procedure is guided by meticulous planning, refined surgical technique, and attention to detail. Our focus is on achieving precise results while prioritizing safety, faster recovery, and patient comfort.',
    },
    {
      icon: Compass,
      title: 'Clarity in Decision-Making',
      desc: 'Transparently explaining all surgical and non-surgical choices, empowering patients and families to make well-informed healthcare decisions.',
    },
    {
      icon: HeartHandshake,
      title: 'Genuine Empathy & Follow-Up',
      desc: 'Surgery does not end in the operating theater. Compassionate, regular post-operative monitoring ensures enduring recovery and infection prevention.',
    },
    {
      icon: ShieldCheck,
      title: 'Multidisciplinary Wound Care',
      desc: 'Bridging surgical salvage with advanced dressings, nutrition, offloading, and podiatric care to keep diabetic patients mobile and independent.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Clinical Philosophy & Doctor Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Clinical Philosophy & Rotating Stamp */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold font-heading text-teal-700 uppercase tracking-widest bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 inline-block w-fit">
                Clinical Philosophy & Pedigree
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
                Combining surgical excellence with genuine compassion.
              </h2>
              <p className="font-medium text-slate-800 text-sm sm:text-base leading-snug border-l-2 border-teal-600 pl-3.5">
                &ldquo;{doctorData.philosophy}&rdquo;
              </p>
              <p className="text-slate-600 font-body text-xs sm:text-sm leading-relaxed">
                Trained at GMC Kozhikode and GMC Manjery, Dr. Ananthu N unites traditional operative rigor with modern minimally invasive daycare surgical advancements.
              </p>
            </div>

            {/* Circular Rotating Badge Stamp */}
            <div className="pt-2 flex items-center gap-4">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center shrink-0">
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 120 120">
                  <path
                    id="philosophyCirclePath"
                    d="M 60, 60 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-heading font-bold uppercase tracking-[0.2em] fill-slate-700">
                    <textPath href="#philosophyCirclePath" startOffset="0%">
                      • DR. ANANTHU N • SURGEON KOZHIKODE •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-teal-50 border border-teal-200/90 flex items-center justify-center text-teal-700 shadow-xs">
                  <Stethoscope className="w-5 h-5" />
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs font-heading font-bold uppercase tracking-wider text-teal-700">
                  Calicut Alumnus
                </div>
                <div className="text-xs text-slate-600 font-body mt-0.5 leading-snug">
                  GMC Kozhikode & GMC Manjery Surgical Pedigree
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor's Image (Fixed in place, clean, well-proportioned) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-100 aspect-[4/3]">
              <img
                src="/images/doctor-philosophy-real.png"
                alt="Dr. Ananthu N consulting with patient in Kozhikode"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-teal-500/40 shadow-xs hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pedigree Story Banner */}
        <div className="bg-gradient-to-br from-[#0c202e] to-[#07131d] text-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-12 border border-teal-500/20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-teal-300 text-xs font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Premier Medical Institutions of Kerala</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight leading-snug">
                From Government Medical College Kozhikode to Advanced Surgical Care.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-body leading-relaxed max-w-2xl">
                Having managed thousands of acute emergency and elective operations across premier
                medical colleges in Calicut and Manjery, Dr. Ananthu now directs modern minimally
                invasive general and daycare laser surgical procedures in Kozhikode.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                <div className="text-xl sm:text-2xl font-heading font-bold text-emerald-400">10+ Years</div>
                <div className="text-xs text-slate-300 mt-0.5">Medical Education & Practice</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                <div className="text-xl sm:text-2xl font-heading font-bold text-teal-300">Calicut Alumnus</div>
                <div className="text-xs text-slate-300 mt-0.5">MBBS (2018) & MS Gen Surg (2023)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
