"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, ArrowRight, CheckCircle } from "lucide-react";

export default function Booking() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("orthodontics");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;
    setFormSubmitted(true);
  };

  return (
    <section 
      id="booking"
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-32 px-6 md:px-16 lg:px-24 z-10 overflow-hidden"
    >
      <div className="line-grid" />

      {/* Booking Header */}
      <div className="text-center max-w-xl mb-16 select-none">
        <div className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold mb-3">
          Concierge Booking
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
          Let&apos;s Plan Your Next Visit
        </h2>
        <p className="text-xs sm:text-sm text-white/80 font-semibold mt-4 leading-relaxed">
          Schedule an in-person diagnostic evaluation or a digital consultation with our lead clinicians.
        </p>
      </div>

      {/* Booking Glassmorphic Card Container */}
      <div className="w-full max-w-lg glass-panel p-8 md:p-10 rounded-3xl shadow-md border border-glass-border select-none pointer-events-auto">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Service Selection Capsules */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Select Service
              </span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setSelectedService("orthodontics")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                    selectedService === "orthodontics"
                      ? "bg-white text-luxury-charcoal border-white shadow-md"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  Orthodontics
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedService("aesthetics")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                    selectedService === "aesthetics"
                      ? "bg-white text-luxury-charcoal border-white shadow-md"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  Cosmetic Veneers
                </button>
              </div>
            </div>

            {/* Input Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                Patient Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="E.g. Olivia Vance"
                className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="olivia@domain.com"
                className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60"
              />
            </div>

            {/* Input Date */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                Preferred Consultation Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white"
                />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
              </div>
            </div>

            {/* Submit Button with dynamic glow animation */}
            <button
              type="submit"
              className="w-full group mt-2 flex items-center justify-center gap-2 py-4 rounded-full bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-md hover:shadow-lg animate-glow cursor-pointer"
            >
              <span className="text-xs font-bold uppercase tracking-widest">
                Schedule Consultation
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        ) : (
          /* Success State card with smooth transition feedback */
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4 animate-fade-in select-none">
            <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-2">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-luxury-charcoal">
              Booking Request Received
            </h3>
            <p className="text-sm text-luxury-muted font-light max-w-sm leading-relaxed">
              Thank you, <span className="font-medium text-luxury-charcoal">{formData.name}</span>. Our boutique concierge service will reach out to you at <span className="font-medium text-luxury-charcoal">{formData.email}</span> within 2 hours to confirm your consultation slot on <span className="font-medium text-luxury-charcoal">{formData.date}</span>.
            </p>
            
            <button
              onClick={() => {
                setFormSubmitted(false);
                setFormData({ name: "", email: "", date: "" });
              }}
              className="mt-6 text-xs uppercase font-semibold tracking-wider text-luxury-gold hover:text-luxury-gold-dark transition-colors duration-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Book Another Consultation
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
