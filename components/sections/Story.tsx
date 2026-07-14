"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftContent = leftContentRef.current;
    const imageWrapper = imageWrapperRef.current;
    const image = imageRef.current;

    if (!leftContent || !imageWrapper || !image) return;

    const ctx = gsap.context(() => {
      // Left side text slide & fade
      gsap.fromTo(
        leftContent,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "top 20%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image reveal (clip path slide reveal)
      gsap.fromTo(
        imageWrapper,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 55%",
          },
        }
      );

      // Image parallax zoom scroll effect
      gsap.fromTo(
        image,
        { scale: 1.15, y: -20 },
        {
          scale: 1.0,
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="story"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center py-24 md:py-32 px-6 md:px-16 lg:px-24 z-10 overflow-hidden"
    >
      <div className="line-grid" />

      {/* Two Column Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center">
        
        {/* Left Side Content & Statistics */}
        <div ref={leftContentRef} className="flex flex-col items-start gap-8 select-none">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold mb-3">
              Transparency First
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight max-w-lg">
              Understand Your Options Before Treatment
            </h2>
            <p className="text-xs sm:text-sm text-white/80 font-semibold mt-6 leading-relaxed max-w-md">
              We eliminate guesswork from aesthetic medicine. Through highly detailed digital mockups 
              and translucent material prototypes, you see, feel, and approve your aligners 
              and veneers before any permanent clinical shifts are initiated.
            </p>
          </div>

          {/* Key Clinical Statistics Grid */}
          <div className="grid grid-cols-2 gap-8 w-full border-t border-white/10 pt-8 max-w-md">
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-luxury-gold">
                12+
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/80 mt-2">
                Years of Clinical Excellence
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-serif font-bold text-luxury-gold">
                4,400+
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/80 mt-2">
                Confidence Restored
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Parallax Luxury Image Showcase */}
        <div className="w-full flex justify-center pointer-events-auto">
          <div 
            ref={imageWrapperRef}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-glass-border glass-panel"
            style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          >
            <div ref={imageRef} className="relative w-full h-full">
              <Image
                src="/t7.jpg"
                alt="Luxury dental orthodontics clear aligners"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
