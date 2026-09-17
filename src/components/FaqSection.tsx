'use client';

import React, { useState } from 'react';
import { faqData } from '@/data/faqData';
import { HelpCircle, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('1');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'proctology', label: 'Laser Proctology' },
    { id: 'laparoscopy', label: 'Laparoscopic Surgery' },
    { id: 'diabetic-foot', label: 'Diabetic Foot & VAC' },
    { id: 'general', label: 'OPD & Consultations' },
  ];

  const filteredFaqs =
    filterCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === filterCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fafbfc] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold font-heading uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            Clear answers to common patient questions.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
            Understanding your surgical procedures, preparation, and recovery expectations before your
            consultation at Star Care Hospital.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 min-h-[38px] sm:min-h-[40px] rounded-xl text-xs font-heading font-bold transition-all cursor-pointer flex items-center justify-center ${
                filterCategory === cat.id
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-teal-500/50 shadow-md ring-1 ring-teal-500/20'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full min-h-[52px] p-4 sm:p-6 text-left flex items-start justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-2.5 sm:gap-4">
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold mt-0.5 ${
                        isOpen ? 'text-teal-700' : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-lg text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-0 animate-in fade-in duration-200 border-t border-slate-100 mt-2">
                    <div className="flex gap-2.5 sm:gap-4 pt-4">
                      <span className="hidden sm:inline-block text-xs sm:text-sm font-mono font-bold invisible select-none shrink-0">
                        0{idx + 1}
                      </span>
                      <div className="space-y-4">
                        <p className="text-slate-600 text-xs sm:text-sm font-body leading-relaxed">
                          {faq.answer}
                        </p>
                        <a
                          href="#booking"
                          className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-teal-700 hover:text-teal-800 underline underline-offset-4"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Schedule an evaluation with Dr. Ananthu N</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
