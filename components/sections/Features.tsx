"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles, Layers, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current?.children;
    if (!cards) return;

    const ctx = gsap.context(() => {
      // Staggered reveal of feature cards
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.15,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 65%",
            end: "top 25%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const featuresList = [
    {
      num: "01",
      title: "Precision Orthodontics",
      desc: "Perfect teeth alignment using state-of-the-art clear aligner series. Designed using 3D modeling to ensure optimal occlusion, absolute comfort, and near-zero visibility.",
      icon: Layers,
      image: "/t1.jpg"
    },
    {
      num: "02",
      title: "Aesthetic Restoration",
      desc: "Premium, ultra-thin porcelain veneers and structural ceramic overlays matching the subtle variations of natural teeth to create a brilliant, flawless, yet genuine smile.",
      icon: Sparkles,
      image: "/t2.jpg"
    },
    {
      num: "03",
      title: "Preventative Longevity",
      desc: "Advanced protective solutions and clinical care targeting structural preservation. We shield your teeth from micro-wear, keeping your smile radiant for decades.",
      icon: ShieldCheck,
      image: "/t3.jpg"
    },
  ];

  return (
    <section 
      id="features"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center py-32 px-6 md:px-16 lg:px-24 z-10 overflow-hidden"
    >
      <div className="line-grid" />

      {/* Header */}
      <div className="max-w-xl mb-16 md:mb-24 select-none">
        <div className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold mb-3">
          Our Specialization
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
          Expert Care With A Human Touch
        </h2>
        <p className="text-xs sm:text-sm text-white/80 font-semibold mt-4 leading-relaxed">
          We blend clinical rigor with artistic craft to offer bespoke dental procedures 
          tailored to your exact anatomy. Here is our core design portfolio.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div 
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full select-none"
      >
        {featuresList.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className="flex flex-col items-start gap-4 p-6 rounded-3xl glass-panel shadow-sm border border-glass-border hover:shadow-md hover:border-luxury-gold/20 transition-all duration-500 group pointer-events-auto"
            >
              {/* Image Showcase */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-inner border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Header (Icon & Index) */}
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
    </section>
  );
}
