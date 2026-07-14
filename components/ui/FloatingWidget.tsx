"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function FloatingWidget() {
  return (
    <div className="fixed right-6 top-24 flex flex-col gap-4 z-50 pointer-events-auto select-none">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full glass-panel border border-white/20 hover:border-[#25D366] bg-white/5 hover:bg-[#25D366]/10 flex items-center justify-center text-white hover:text-[#25D366] hover:scale-110 shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.528 2.012 14.07 1.01 11.99 1.012c-5.437 0-9.862 4.37-9.866 9.801-.002 1.718.455 3.394 1.324 4.894L2.4 20.9l5.35-1.396.002.002.004-.002zM15.934 13c-.22-.11-1.298-.64-1.5-.71-.2-.08-.35-.12-.5.12-.15.24-.59.71-.72.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.03-.28-.02-.39-.05-.11-.5-1.2-.68-1.64-.18-.44-.38-.38-.52-.38h-.44c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2 1.93 2.35.11.02 2.2 3.37 5.33 4.73.74.32 1.33.52 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.8-.74 2.05-1.46.25-.72.25-1.34.18-1.46-.07-.12-.26-.19-.48-.3zm0 0" />
        </svg>
        {/* Soft green pulse indicator */}
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border border-luxury-charcoal animate-pulse" />
      </a>

      {/* Telephone Call Button */}
      <a
        href="tel:+18009093368"
        className="group relative w-12 h-12 rounded-full glass-panel border border-white/20 hover:border-luxury-gold bg-white/5 hover:bg-luxury-gold/10 flex items-center justify-center text-white hover:text-luxury-gold hover:scale-110 shadow-lg hover:shadow-luxury-gold/20 transition-all duration-300 pointer-events-auto"
        aria-label="Call Concierge"
      >
        <Phone className="w-5 h-5" />
        {/* Soft blue/gold pulse indicator */}
        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-luxury-gold rounded-full border border-luxury-charcoal animate-pulse" />
      </a>

    </div>
  );
}
