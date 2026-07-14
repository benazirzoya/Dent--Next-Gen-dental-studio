"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const title = titleRef.current;
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;

    if (!title || !leftCard || !rightCard) return;

    // Stagger fade-in of titles and cards on scroll
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        title,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      // Left info card slide in
      gsap.fromTo(
        leftCard,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      // Right info card slide in
      gsap.fromTo(
        rightCard,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            end: "top 25%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="showcase"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-16 lg:px-24 z-10 overflow-hidden"
    >
      <div className="line-grid" />

      {/* Section Header */}
      <div className="w-full flex justify-center text-center mt-6 select-none">
        <h2 
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold tracking-tight text-white max-w-2xl leading-tight"
        >
          Designed Around Your Smile
        </h2>
      </div>

      {/* Floating Interactive Details (Overlaying the 3D model) */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 my-auto select-none pointer-events-none">
        
        {/* Left Specification Card */}
        <div 
          ref={leftCardRef}
          className="flex flex-col items-start gap-3 max-w-sm glass-panel p-5 rounded-2xl shadow-sm self-start pointer-events-auto group"
        >
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-inner border border-white/10 mb-1">
            <img
              src="/t4.jpg"
              alt="Diagnostics"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-luxury-gold">
            01 / Digital Smile Architecture
          </div>
          <h3 className="text-xl font-serif font-bold text-white">
            Refractive Diagnostics
          </h3>
          <p className="text-xs text-white/90 font-semibold leading-relaxed">
            Every tooth surface is mapped at sub-micron resolution. We compute natural lighting refraction to design veneers that reflect light exactly like real enamel.
          </p>
        </div>

        {/* Right Specification Card */}
        <div 
          ref={rightCardRef}
          className="flex flex-col items-start gap-3 max-w-sm glass-panel p-5 rounded-2xl shadow-sm self-end justify-self-end md:mt-24 pointer-events-auto group"
        >
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-inner border border-white/10 mb-1">
            <img
              src="/t5.jpg"
              alt="Aligners"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-luxury-gold">
            02 / Bio-compatible Materials
          </div>
          <h3 className="text-xl font-serif font-bold text-white">
            Crystal Polymers
          </h3>
          <p className="text-xs text-white/90 font-semibold leading-relaxed">
            Our clear aligners feature premium optical transparency, preventing yellowing and remaining completely imperceptible while maintaining continuous structural force.
          </p>
        </div>
      </div>

      {/* Footer spacer/indicator for scrolling context */}
      <div className="w-full text-center text-[10px] font-bold uppercase tracking-widest text-white/70 select-none">
        360° Interactive Anatomy
      </div>
    </section>
  );
}
