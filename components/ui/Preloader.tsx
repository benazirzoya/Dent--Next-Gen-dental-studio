"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Set timer to trigger Apple-like sliding up animation after 3.2 seconds
    const slideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    // Completely unmount the preloader from DOM after transition completes (4.5 seconds total)
    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 4500);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-black z-[9999] flex flex-col items-center justify-center select-none transition-all duration-[1200ms] ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-95 pointer-events-none"
      }`}
      style={{
        transitionTimingFunction: "cubic-bezier(0.85, 0, 0.15, 1)",
      }}
    >
      
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/loader.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Centered Text Overlay */}
      <div 
        className={`relative z-10 flex flex-col items-center text-center px-6 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-widest text-white uppercase">
          DENT
        </h1>
        <div className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-luxury-gold font-bold mt-3">
          Dental Aesthetics Studio
        </div>
        <p className="text-[11px] text-white/60 font-semibold uppercase tracking-wider mt-8 animate-pulse">
          Calibrating Smile Systems...
        </p>
      </div>

    </div>
  );
}
