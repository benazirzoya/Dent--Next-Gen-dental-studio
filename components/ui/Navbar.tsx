"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center pointer-events-none">
      {/* Brand Logo - Elegant Serif */}
      <Link 
        href="/"
        className="text-2xl font-serif font-bold tracking-wider text-white hover:opacity-75 transition-opacity cursor-pointer pointer-events-auto select-none"
      >
        DENT
      </Link>

      {/* Nav Menu Items - Glassmorphic capsule */}
      <nav className="hidden md:flex items-center gap-0.5 p-1 rounded-full glass-panel pointer-events-auto shadow-sm select-none">
        <Link
          href="/#showcase"
          onClick={(e) => handleNavClick(e, "showcase")}
          className="px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/10 hover:text-luxury-gold rounded-full transition-all duration-300"
        >
          Showcase
        </Link>
        <Link
          href="/features"
          className={cn(
            "px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300",
            pathname === "/features" ? "bg-white/20 text-luxury-gold" : "text-white hover:bg-white/10 hover:text-luxury-gold"
          )}
        >
          Speciality
        </Link>
        <Link
          href="/treatment"
          className={cn(
            "px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300",
            pathname === "/treatment" ? "bg-white/20 text-luxury-gold" : "text-white hover:bg-white/10 hover:text-luxury-gold"
          )}
        >
          Treatment
        </Link>
        <Link
          href="/blog"
          className={cn(
            "px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300",
            pathname === "/blog" ? "bg-white/20 text-luxury-gold" : "text-white hover:bg-white/10 hover:text-luxury-gold"
          )}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={cn(
            "px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300",
            pathname === "/about" ? "bg-white/20 text-luxury-gold" : "text-white hover:bg-white/10 hover:text-luxury-gold"
          )}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={cn(
            "px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all duration-300",
            pathname === "/contact" ? "bg-white/20 text-luxury-gold" : "text-white hover:bg-white/10 hover:text-luxury-gold"
          )}
        >
          Contact
        </Link>
      </nav>

      {/* Booking / Login Area */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <Link
          href="/login"
          className={cn(
            "px-4 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300",
            pathname === "/login" ? "bg-white/20 text-luxury-gold" : "text-white hover:bg-white/10 hover:text-luxury-gold"
          )}
        >
          Login
        </Link>
        <Link 
          href="/#booking"
          onClick={(e) => handleNavClick(e, "booking")}
          className="group relative flex items-center justify-center gap-2 px-5 py-2.5 rounded-full overflow-hidden bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="text-xs font-bold uppercase tracking-widest transition-colors duration-300">
            Book Appointment
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </Link>
      </div>
    </header>
  );
}
