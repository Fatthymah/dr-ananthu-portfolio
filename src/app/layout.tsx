import type { Metadata, Viewport } from "next";
import { DM_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1f2d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dr. Ananthu N | Specialist General Surgeon | Kozhikode",
  description:
    "Official website of Dr. Ananthu N (MBBS, MS, DNB, FMAS, FDFM, MMIP). Specialist General Surgeon in Kozhikode specializing in Laparoscopic Surgery, Daycare Laser Proctology, and Diabetic Foot Limb Salvage.",
  keywords: [
    "Dr Ananthu N",
    "General Surgeon Kozhikode",
    "Laparoscopic Surgeon Calicut",
    "Laser Proctologist Kozhikode",
    "Diabetic Foot Surgeon Kerala",
    "Piles Laser Surgery Calicut",
    "Hernia Laparoscopic Repair Calicut",
    "Gallbladder Laparoscopy Calicut",
    "FMAS Surgeon Kozhikode",
  ],
  authors: [{ name: "Dr. Ananthu N" }],
  creator: "Dr. Ananthu N",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drananthun.com",
    title: "Dr. Ananthu N | Specialist General Surgeon | Kozhikode",
    description:
      "Specialist in Minimal Access Keyhole Surgery, Painless Laser Proctology, and Advanced Diabetic Foot Care based in Kozhikode.",
    siteName: "Dr. Ananthu N Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ananthu N | Specialist General Surgeon",
    description:
      "Consultant General Surgeon based in Kozhikode. Laparoscopy, Laser Proctology & Diabetic Foot Limb Salvage.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Ananthu N",
    description:
      "Specialist General Surgeon with advanced fellowships in Minimal Access Surgery (FMAS), Laser Proctology (MMIP), and Diabetic Foot Management (FDFM).",
    medicalSpecialty: [
      "GeneralSurgery",
      "SurgicalProcedure",
    ],
    telephone: "+91-8891468763",
    email: "ananthu.nandakumar@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kozhikode",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Government Medical College Kozhikode",
    },
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${openSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-teal-600 selection:text-white bg-[#fafbfc] text-slate-800">
        {children}
      </body>
    </html>
  );
}
