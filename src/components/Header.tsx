'use client';

import React, { useState } from 'react';
import { doctorData } from '@/data/doctorData';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Specialties', href: '#specialties' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Qualifications', href: '#qualifications' },
    { name: 'Journey', href: '#experience' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Sticky Fixed Header - Perfectly nested visually inside Hero at top & pinned on scroll */}
      <div className="fixed top-3.5 sm:top-5 inset-x-0 z-50 px-3.5 sm:px-6 pointer-events-none select-none">
        <header className="w-full max-w-5xl mx-auto pointer-events-auto transition-all duration-300">
          <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10 rounded-2xl p-1.5 sm:p-2 pl-3 sm:pl-4 pr-1.5 sm:pr-2 flex items-center justify-between transition-all w-full">
            {/* Brand - 1 Line (Doctor Photo + Badge + Doctor Name) */}
            <a
              href="#"
              className="flex items-center gap-2 sm:gap-2.5 group shrink-0 focus:outline-none"
              aria-label="Dr. Ananthu N Home"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-teal-600/40 ring-offset-1 ring-offset-white group-hover:scale-105 transition-all bg-teal-50 flex items-center justify-center shrink-0">
                <img
                  src="/images/doctor-headshot.jpg"
                  alt="Dr. Ananthu N"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200 text-teal-800 font-heading font-black text-[11px] sm:text-xs tracking-wider uppercase shadow-2xs group-hover:bg-teal-100 transition-colors">
                Dr.
              </span>
              <span className="font-heading font-extrabold text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-teal-700 transition-colors whitespace-nowrap">
                Ananthu N
              </span>
            </a>

            {/* Desktop Navigation Links - Full on xl screens */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 mx-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs 2xl:text-sm font-heading font-semibold text-slate-600 hover:text-teal-700 transition-colors duration-150 py-1 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Compact Navigation Links - For laptop/tablet screens (1024px to 1279px) so it never overflows */}
            <nav className="hidden lg:flex xl:hidden items-center gap-3.5 mx-3">
              {[
                { name: 'Specialties', href: '#specialties' },
                { name: 'Philosophy', href: '#philosophy' },
                { name: 'Qualifications', href: '#qualifications' },
                { name: 'Schedule', href: '#schedule' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-heading font-semibold text-slate-600 hover:text-teal-700 transition-colors duration-150 py-1 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Section */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Primary Action Button */}
              <a
                href="#booking"
                className="group inline-flex items-center gap-1.5 sm:gap-2 pl-3.5 sm:pl-4 pr-2 sm:pr-2.5 py-1.5 sm:py-2 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white rounded-xl text-xs sm:text-sm font-heading font-bold tracking-wide transition-all shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 shrink-0 min-h-[38px] sm:min-h-[42px]"
              >
                <span className="whitespace-nowrap">
                  <span className="hidden xs:inline">Book </span>Consult
                </span>
                <span className="w-5 h-5 rounded-full border border-white/40 group-hover:border-white flex items-center justify-center shrink-0 transition-colors bg-white/10">
                  <ArrowUpRight className="w-3 h-3 text-white stroke-[2.5]" />
                </span>
              </a>

              {/* Mobile / Tablet Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-700 hover:text-teal-800 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-15 sm:top-17 left-1/2 -translate-x-1/2 z-50 w-[94vw] max-w-md animate-in fade-in zoom-in-95 duration-200">
          <div className="bg-white/98 backdrop-blur-2xl rounded-2xl p-5 shadow-2xl border border-slate-200 flex flex-col gap-2 ring-1 ring-slate-900/5 max-h-[85vh] overflow-y-auto">
            {/* Mobile Header Brand & Status */}
            <div className="pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-teal-500/50 shrink-0">
                  <img
                    src="/images/doctor-headshot.jpg"
                    alt="Dr. Ananthu N"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="px-2 py-0.5 rounded-md bg-teal-50 border border-teal-200 text-teal-800 font-heading font-black text-xs uppercase">
                  Dr.
                </span>
                <span className="font-heading font-bold text-slate-900 text-sm">
                  Ananthu N
                </span>
              </div>
              <span className="px-2.5 py-1 bg-teal-50 text-teal-800 text-[10px] font-bold rounded-full border border-teal-200">
                Star Care Hospital
              </span>
            </div>

            {/* Mobile Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 min-h-[44px] flex items-center text-sm font-heading font-semibold text-slate-700 hover:text-teal-700 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Action Buttons */}
            <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:+91${doctorData.contact.phone}`}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-800 hover:bg-slate-200 rounded-xl text-xs font-heading font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Star Care OPD</span>
              </a>
              <a
                href={`https://wa.me/${doctorData.contact.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Dr. Ananthu N, I would like to inquire about an OPD consultation at Star Care Hospital.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white rounded-xl text-xs font-heading font-bold shadow-xs transition-all"
              >
                <span>WhatsApp Doctor</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
