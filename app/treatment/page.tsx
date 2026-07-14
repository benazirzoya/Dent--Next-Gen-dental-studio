"use client";

import React from "react";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Heart, Cpu } from "lucide-react";

export default function TreatmentPage() {
  const treatments = [
    {
      num: "01",
      title: "Invisalign Aesthetic Series",
      category: "Orthodontics",
      duration: "6 - 12 Months",
      desc: "Designed using 3D digital simulation to align your teeth using medical-grade transparent polymers. Near-zero visibility, easily removable, and custom-formed to your bite structure.",
      image: "/t1.jpg"
    },
    {
      num: "02",
      title: "Feldspathic Porcelain Veneers",
      category: "Cosmetic Restoration",
      duration: "2 - 3 Visits",
      desc: "Sub-micron ceramic laminates that duplicate the natural translucency, light refraction, and structural durability of real tooth enamel. Requires minimal tooth alteration.",
      image: "/t2.jpg"
    },
    {
      num: "03",
      title: "Bio-Compatible Zirconia Implants",
      category: "Restorative Surgery",
      duration: "3 - 6 Months",
      desc: "Advanced biological root restorations utilizing high-strength zirconia posts that merge naturally with bone tissue, eliminating dark lines at the gum boundary.",
      image: "/t5.jpg"
    },
    {
      num: "04",
      title: "Laser Preventive Shielding",
      category: "Clinical Longevity",
      duration: "1 Visit",
      desc: "Using low-level clinical lasers, we target deep sub-gingival bacterial profiles and seal micro-cavities to protect native teeth from structure loss.",
      image: "/veneers-feature.jpg"
    }
  ];

  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center overflow-hidden">
      
      {/* Page Header */}
      <div className="relative max-w-2xl mb-16 select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-[9px] font-bold uppercase tracking-widest mb-4">
          Aesthetic Solutions
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
          Treatment Portfolio & Procedures
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/80 font-semibold mt-4 leading-relaxed">
          Discover our bespoke restorative and aesthetic treatment regimens tailored around your unique dental anatomy.
        </p>
      </div>

      {/* Treatments List (Detailed Stacked Layout) */}
      <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto">
        {treatments.map((t, idx) => (
          <div 
            key={idx}
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl glass-panel border border-glass-border hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-500 pointer-events-auto"
          >
            
            {/* Visual Column (5 cols) */}
            <div className="md:col-span-5 relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border border-white/10">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-4 left-4 bg-luxury-charcoal/80 text-luxury-gold text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-luxury-gold/20">
                {t.category}
              </span>
            </div>

            {/* Info Column (7 cols) */}
            <div className="md:col-span-7 flex flex-col gap-4 select-none">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-luxury-gold uppercase tracking-wider">
                  Timeline: {t.duration}
                </span>
                <span className="text-xs font-serif font-bold text-white/40 group-hover:text-luxury-gold transition-colors duration-500">
                  {t.num}
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white leading-snug">
                {t.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/90 font-semibold leading-relaxed">
                {t.desc}
              </p>
              <div className="mt-2">
                <a 
                  href="/#booking"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-luxury-gold transition-colors pointer-events-auto"
                >
                  Request Consultation
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
