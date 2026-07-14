"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;
    const cta = ctaRef.current;

    if (!title || !text || !cta) return;

    // Split title text into words for stagger reveal
    const words = title.innerText.split(" ");
    title.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden py-1"><span class="inline-block translate-y-[120%] transition-transform duration-[0.8s] ease-[cubic-bezier(0.215,0.61,0.355,1)] title-word">${word}</span></span>`
      )
      .join(" ");

    // Animate words in with GSAP
    const ctx = gsap.context(() => {
      gsap.timeline()
        .to(".title-word", {
          y: "0%",
          stagger: 0.08,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.2,
        })
        .fromTo(
          text,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          cta,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const el = document.getElementById("showcase");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10 pt-20 overflow-hidden"
    >
      <div className="line-grid" />

      {/* Hero content container */}
      <div className="max-w-4xl flex flex-col items-start gap-6 md:gap-8 mt-12 md:mt-0 select-none">
        
        {/* Subtitle tag with gold neon glow */}
        <div 
          className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-luxury-gold/40 bg-luxury-gold/10 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-[0_0_8px_#D4AF37] animate-pulse" />
          <span 
            className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-luxury-gold"
            style={{ textShadow: "0 0 8px rgba(212, 175, 55, 0.7), 0 0 15px rgba(212, 175, 55, 0.3)" }}
          >
            Next-Gen Dental Studio
          </span>
        </div>

        {/* Large Premium Serif Headline */}
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.08] tracking-tight text-left max-w-3xl"
        >
          Confident Smiles Start With Expert Care
        </h1>

        {/* Clean, high-end description text */}
        <p 
          ref={textRef}
          className="text-sm sm:text-base md:text-lg text-white/90 font-semibold max-w-xl leading-relaxed text-left opacity-0"
        >
          At DENT, we reframe clinical dentistry into a design studio experience. 
          Every treatment is custom engineered, ensuring absolute anatomical precision 
          paired with premium aesthetic finish.
        </p>

        {/* Action Button */}
        <div ref={ctaRef} className="opacity-0 mt-4">
          <button 
            onClick={scrollToNext}
            className="group relative px-8 py-3.5 rounded-full overflow-hidden bg-white text-luxury-charcoal border border-white/20 hover:border-luxury-gold shadow-md hover:shadow-lg transition-all duration-300 pointer-events-auto"
          >
            <span className="relative z-10 text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-luxury-gold-dark">
              Explore Design System
            </span>
          </button>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer hover:opacity-75 transition-opacity select-none group pointer-events-auto"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/80 group-hover:text-luxury-gold transition-colors duration-300">
          Scroll Down
        </span>
        <div className="w-[18px] h-[32px] rounded-full border border-white/30 flex justify-center py-1.5">
          <div className="w-1 h-1.5 rounded-full bg-luxury-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
