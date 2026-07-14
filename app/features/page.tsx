"use client";

import React, { useRef, useState, useEffect } from "react";
import { Sparkles, Layers, Activity, ShieldCheck, Heart, Cpu, ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturesPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isPausedRef = useRef(false);

  const featuresList = [
    {
      num: "01",
      title: "Orthodontic Aligners",
      desc: "Invisible structural corrective systems engineered from bio-compatible medical polymers. We map tooth movement at sub-micron resolution for steady, pain-free anatomical alignment.",
      icon: Sparkles,
      image: "/t1.jpg"
    },
    {
      num: "02",
      title: "Refractive Veneers",
      desc: "Ultra-thin porcelain laminates layered to match the natural light refraction of real enamel. Our veneers require minimal tooth alteration and are designed for absolute aesthetic harmony.",
      icon: Layers,
      image: "/t2.jpg"
    },
    {
      num: "03",
      title: "Smile Diagnostics",
      desc: "Comprehensive 3D digital smile mapping. We analyze facial symmetry, lip lines, and dental alignment geometry before initiating any cosmetic or structural modifications.",
      icon: Activity,
      image: "/t3.jpg"
    },
    {
      num: "04",
      title: "Structural Shield",
      desc: "Custom occlusal guards and micro-wear protection designed to absorb night grinding impact, shielding teeth from enamel degradation and muscle strain.",
      icon: ShieldCheck,
      image: "/t4.jpg"
    },
    {
      num: "05",
      title: "Bio-Implantology",
      desc: "Advanced biological root restorations. Using ceramic and zirconia posts, we design natural-looking replacements that merge seamlessly with your jaw structure.",
      icon: Cpu,
      image: "/t5.jpg"
    },
    {
      num: "06",
      title: "Clinical Longevity",
      desc: "Laser-assisted hygiene and preventive micro-treatments targeting deep bacterial removal. We shield your teeth and gums to preserve your natural bite for decades.",
      icon: Heart,
      image: "/t6.jpg"
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const target = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: target,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    // Autoplay scroll timer loops every 3.5 seconds
    const interval = setInterval(() => {
      if (el && !isPausedRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = el;
        // Loop back to start if we are at the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const scrollAmount = clientWidth * 0.75;
          el.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3500);

    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center overflow-hidden">
      
      {/* Header section */}
      <div className="relative max-w-2xl mb-12 select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-[9px] font-bold uppercase tracking-widest mb-4">
          Services Portfolio
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
          Clinical Expertise & Technology
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/80 font-semibold mt-4 leading-relaxed">
          Explore our range of digital smile procedures engineered for long-term health, structural stability, 
          and premium aesthetics.
        </p>
      </div>

      {/* Interactive Carousel Grid Container */}
      <div className="relative w-full group">
        
        {/* Navigation Arrows */}
        <div className="absolute -top-16 right-0 flex gap-3 z-20">
          <button
            onClick={() => {
              isPausedRef.current = true;
              scroll("left");
            }}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              isPausedRef.current = true;
              scroll("right");
            }}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          className="w-full flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 pointer-events-auto cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] sm:w-[350px] snap-start flex flex-col items-start gap-4 p-6 rounded-3xl glass-panel shadow-md border border-glass-border hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-500 group pointer-events-auto select-none"
              >
                {/* Image Showcase */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Header inside Card */}
                <div className="w-full flex justify-between items-center mt-2">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-serif font-bold text-luxury-gold/75 group-hover:text-luxury-gold transition-colors duration-500">
                    {item.num}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg md:text-xl font-serif font-bold text-white group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 group-hover:bg-luxury-gold/15 transition-colors duration-500" />

                {/* Card Description */}
                <p className="text-xs text-white/90 font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Custom Progress Bar Indicator */}
        <div className="w-32 h-0.5 bg-white/10 rounded-full mx-auto mt-10 relative">
          <div
            className="absolute top-0 left-0 h-full bg-luxury-gold rounded-full transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

      </div>

    </div>
  );
}
