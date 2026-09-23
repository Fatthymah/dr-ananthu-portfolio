import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustTicker from '@/components/TrustTicker';
import AboutSection from '@/components/AboutSection';
import CredentialsGrid from '@/components/CredentialsGrid';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import TechnologyFeature from '@/components/TechnologyFeature';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import OutcomesSection from '@/components/OutcomesSection';
import FaqSection from '@/components/FaqSection';
import BookingSection from '@/components/BookingSection';
import MobileQuickDock from '@/components/MobileQuickDock';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800">
      {/* Sticky Fixed Header - Perfectly nested visually over Hero at top & pinned on scroll */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Professional Accreditations Scrolling Ribbon */}
      <TrustTicker />

      {/* Philosophy & Narrative */}
      <AboutSection />

      {/* Degrees & Fellowships Matrix */}
      <CredentialsGrid />

      {/* The 4 Core Clinical Pillars (Interactive Master-Detail) */}
      <SpecialtiesSection />

      {/* Advanced Surgical Technology Spotlight */}
      <TechnologyFeature />

      {/* Career Journey & Surgical Experience Timeline */}
      <ExperienceTimeline />

      {/* Evidence-Based Clinical Outcomes & Standards */}
      <OutcomesSection />

      {/* Patient Education & Interactive Accordion FAQ */}
      <FaqSection />

      {/* Direct Appointment Request & WhatsApp Router */}
      <BookingSection />

      {/* Persistent Floating Bottom Action Bar for Mobile */}
      <MobileQuickDock />

      {/* Comprehensive Medical Regulatory Footer */}
      <Footer />
    </main>
  );
}
