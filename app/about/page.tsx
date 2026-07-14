"use client";

import React from "react";
import Doctors from "@/components/sections/Doctors";
import { Compass, Cpu, Heart } from "lucide-react";

export default function AboutPage() {
  const philosophies = [
    {
      icon: Compass,
      title: "Geometrical Balance",
      desc: "Every face has a unique mathematical balance. We design orthodontic aligners and porcelain veneers that align with your natural craniofacial proportions, restoring optical harmony rather than cookie-cutter profiles."
    },
    {
      icon: Cpu,
      title: "Microscopic Accuracy",
      desc: "By operating under high-magnification dental microscopes, our surgeons ensure minimum tooth reduction. We preserve your natural tooth structure while achieving absolute marginal fit."
    },
    {
      icon: Heart,
      title: "Biological Integration",
      desc: "We use only medical-grade, highly bio-compatible crystal polymers and feldspathic porcelains that naturally integrate with your oral environment, eliminating inflammation and gum discoloration."
    }
  ];

  return (
    <div className="relative w-full min-h-screen pt-32 pb-16 overflow-hidden">
      
      {/* Introduction Hero Section */}
      <section className="relative px-6 md:px-16 lg:px-24 select-none mb-20 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-[9px] font-bold uppercase tracking-widest mb-4">
          Clinical Philosophy
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
          Where Medical Science Meets Artistic Craft
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/80 font-semibold mt-6 leading-relaxed max-w-2xl">
          At DENT, we believe that aesthetic dental surgery is not merely clinical utility—it is a discipline of 
          micro-restoration. We design custom-layered restorations that refract light naturally, restoring 
          anatomical function and organic beauty.
        </p>
      </section>

      {/* Philosophy Cards Grid */}
      <section className="relative px-6 md:px-16 lg:px-24 select-none mb-10 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-10">
          Core Foundations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {philosophies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-start gap-4 p-8 rounded-3xl glass-panel border border-glass-border shadow-sm group hover:border-luxury-gold/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-luxury-gold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Elite Clinical Specialists */}
      <Doctors />

    </div>
  );
}
