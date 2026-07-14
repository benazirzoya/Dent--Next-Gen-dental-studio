"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 flex items-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full max-w-6xl mx-auto items-start">
        
        {/* Left Side: Contact Information Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8 select-none">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-[9px] font-bold uppercase tracking-widest mb-4">
              Concierge Desk
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Get in Touch
            </h1>
            <p className="text-xs sm:text-sm text-white/80 font-semibold mt-4 leading-relaxed max-w-sm">
              Reach out to our patient concierge team to schedule evaluations, coordinate billing, 
              or request clinical records.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Phone Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl glass-panel border border-glass-border">
              <div className="w-10 h-10 rounded-xl bg-luxury-charcoal/5 flex items-center justify-center text-luxury-gold">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-luxury-charcoal/60">Concierge Line</div>
                <div className="text-sm font-bold text-luxury-charcoal mt-0.5">+1 (800) 909-DENT</div>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl glass-panel border border-glass-border">
              <div className="w-10 h-10 rounded-xl bg-luxury-charcoal/5 flex items-center justify-center text-luxury-gold">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-luxury-charcoal/60">Official Correspondence</div>
                <div className="text-sm font-bold text-luxury-charcoal mt-0.5">concierge@dentstudio.com</div>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl glass-panel border border-glass-border">
              <div className="w-10 h-10 rounded-xl bg-luxury-charcoal/5 flex items-center justify-center text-luxury-gold">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-luxury-charcoal/60">Dental Studio Address</div>
                <div className="text-sm font-bold text-luxury-charcoal mt-0.5">742 Evergreen Terrace, Suite 100, Premium Estates</div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl glass-panel border border-glass-border">
              <div className="w-10 h-10 rounded-xl bg-luxury-charcoal/5 flex items-center justify-center text-luxury-gold">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-luxury-charcoal/60">Clinical Schedule</div>
                <div className="text-sm font-bold text-luxury-charcoal mt-0.5">Mon – Fri: 8:00 AM – 6:00 PM (EST)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form Card (7 cols) */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="w-full glass-panel p-8 md:p-10 rounded-3xl border border-glass-border shadow-md select-none pointer-events-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="text-2xl font-serif font-bold text-luxury-charcoal mb-2">
                  Send a Direct Message
                </h2>
                
                {/* Input Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-luxury-charcoal">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Olivia Vance"
                    className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/40 border border-glass-border focus:bg-white/80 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-luxury-charcoal placeholder:text-luxury-charcoal/50"
                  />
                </div>

                {/* Input Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-luxury-charcoal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="olivia@domain.com"
                    className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/40 border border-glass-border focus:bg-white/80 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-luxury-charcoal placeholder:text-luxury-charcoal/50"
                  />
                </div>

                {/* Input Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-luxury-charcoal">
                    Clinical Inquiry or Notes
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your inquiry..."
                    className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/40 border border-glass-border focus:bg-white/80 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-luxury-charcoal placeholder:text-luxury-charcoal/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 py-4 rounded-full bg-luxury-charcoal text-white hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-md hover:shadow-lg animate-glow cursor-pointer"
                >
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Submit Inquiry
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4 animate-fade-in select-none">
                <div className="w-16 h-16 rounded-full bg-luxury-charcoal/5 flex items-center justify-center text-luxury-gold mb-2 border border-glass-border shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-luxury-charcoal">
                  Message Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-luxury-charcoal font-semibold max-w-sm leading-relaxed">
                  Thank you, <span className="text-luxury-gold font-bold">{formData.name}</span>. Our patient coordinator 
                  will review your message and reach out to you within 24 business hours.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
