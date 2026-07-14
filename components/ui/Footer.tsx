"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full py-8 px-6 md:px-16 lg:px-24 border-t border-white/10 z-10 select-none bg-transparent">
      <div className="line-grid" />

      {/* Compact Grid Structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 w-full max-w-7xl mx-auto mb-8">
        
        {/* Col 1: Brand & Philosophy (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div>
            <div className="text-2xl font-serif font-bold tracking-widest text-white">
              DENT
            </div>
            <div className="text-[9px] uppercase tracking-[0.25em] text-luxury-gold font-bold mt-1">
              Dental Aesthetics Studio
            </div>
          </div>
          <p className="text-xs text-white/70 font-semibold leading-relaxed max-w-sm">
            Re-engineering clinical dentistry into a luxury design experience. We merge biological art with 
            microscopic precision to sculpt natural smiles.
          </p>
          {/* Social Icons */}
          <div className="flex gap-2.5 mt-1">
            <a 
              href="https://www.instagram.com/benazir1822" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all duration-300 pointer-events-auto"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://twitter.com/benriq18" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all duration-300 pointer-events-auto"
              aria-label="Twitter (X)"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/benazir-banu" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all duration-300 pointer-events-auto"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://github.com/benazirzoya" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all duration-300 pointer-events-auto"
              aria-label="GitHub"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://dribbble.com/benazirzoya" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all duration-300 pointer-events-auto"
              aria-label="Dribbble"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Studio Locations (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/90 border-b border-white/10 pb-1.5">
            Our Studios
          </h3>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-white/80 font-semibold leading-relaxed">
                <span className="text-white block font-bold">Premium Estates (HQ)</span>
                742 Evergreen Terrace, Suite 100, NYC
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0 mt-0.5" />
              <div className="text-[11px] text-white/80 font-semibold leading-relaxed">
                <span className="text-white block font-bold">West Coast Office</span>
                90210 Wilshire Blvd, Beverly Hills, CA
              </div>
            </div>
          </div>
        </div>

        {/* Col 3: Navigation Links (2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/90 border-b border-white/10 pb-1.5">
            Navigation
          </h3>
          <ul className="flex flex-col gap-2 text-[11px] font-bold text-white/70">
            <li>
              <Link href="/" className="hover:text-luxury-gold transition-colors pointer-events-auto">
                Home Portfolio
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-luxury-gold transition-colors pointer-events-auto">
                Features Grid
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-luxury-gold transition-colors pointer-events-auto">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-luxury-gold transition-colors pointer-events-auto">
                Get In Touch
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-luxury-gold transition-colors pointer-events-auto">
                Patient Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Concierge Contact (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/90 border-b border-white/10 pb-1.5">
            Direct Line
          </h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="text-[11px] font-bold text-white">+1 (800) 909-DENT</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="text-[11px] font-bold text-white">concierge@dentstudio.com</span>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center justify-between w-full mt-1.5 py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-white/20 bg-white/5 hover:bg-white text-white hover:text-luxury-charcoal transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-4 max-w-7xl mx-auto" />

      {/* Footer Bottom copyright details */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full max-w-7xl mx-auto text-[10px] font-bold text-white/70">
        <div>
          © {new Date().getFullYear()} Benazir Zoya. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-luxury-gold transition-colors pointer-events-auto">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-gold transition-colors pointer-events-auto">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
