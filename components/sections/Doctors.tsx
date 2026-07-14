"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Award, Shield } from "lucide-react";

export default function Doctors() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardGridRef.current?.children;
    if (!cards) return;

    const ctx = gsap.context(() => {
      // Staggered reveal for the doctor glass cards
      gsap.fromTo(
        Array.from(cards),
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: false,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const team = [
    {
      name: "Dr. Julian Vance, DDS",
      role: "Chief of Aesthetic Orthodontics",
      image: "/doctor-1.jpg",
      credentials: "Harvard Dental Alumnus • 14+ Years in Micro-Orthodontics",
      bio: "Specializes in digital smile designs, merging dental anatomy with geometric aligner spacing to achieve natural, balanced symmetry.",
      badge: <Sparkles className="w-4 h-4 text-luxury-gold" />
    },
    {
      name: "Dr. Clara Sterling, DDS, PhD",
      role: "Director of Cosmetic Surgery",
      image: "/doctor-2.jpg",
      credentials: "Penn Dental Medicine • Board Certified Cosmetic Prosthodontist",
      bio: "Pioneered the crystal-veneer layering technique. Focuses on ultra-thin, transmissive porcelain restorations that reflect light naturally.",
      badge: <Award className="w-4 h-4 text-luxury-gold" />
    }
  ];

  return (
    <section
      id="doctors"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center py-24 md:py-32 px-6 md:px-16 lg:px-24 z-10 overflow-hidden select-none"
    >
      <div className="line-grid" />

      {/* Header section */}
      <div className="relative mb-16 md:mb-20 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-[9px] font-bold uppercase tracking-widest mb-4">
          <Shield className="w-3 h-3" /> Elite Clinicians
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
          World-Class Medical Specialists
        </h2>
        <p className="text-xs sm:text-sm text-white/85 font-semibold mt-4 leading-relaxed">
          Our team consists of double-board certified cosmetic dental surgeons and orthodontic pioneers 
          committed to delivering microscopic precision and luxury patient care.
        </p>
      </div>

      {/* Grid of Doctor Cards */}
      <div 
        ref={cardGridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 w-full max-w-6xl mx-auto"
      >
        {team.map((doc, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col rounded-3xl overflow-hidden glass-panel border border-glass-border shadow-lg p-6 lg:p-8 hover:border-luxury-gold/30 transition-all duration-500 hover:shadow-2xl"
          >
            {/* Card Shimmer Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Image Container with organic shape */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-white/20 mb-6 lg:mb-8">
              <Image
                src={doc.image}
                alt={doc.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              
              {/* Badge overlay */}
              <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/40 backdrop-blur-md border border-white/60">
                {doc.badge}
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col flex-grow">
              <span className="text-[10px] font-extrabold text-luxury-gold uppercase tracking-wider mb-2">
                {doc.role}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                {doc.name}
              </h3>
              <p className="text-[10px] text-white/85 font-semibold mb-4 italic">
                {doc.credentials}
              </p>
              <p className="text-xs sm:text-sm text-white/90 font-semibold leading-relaxed">
                {doc.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
