"use client";

import React, { useState } from "react";
import { Sparkles, Calendar, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Booking() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedService, setSelectedService] = useState("Orthodontics");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "09:00 AM - Morning Slot",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          date: formData.date,
          time: formData.time,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to connect to database API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="booking"
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-32 px-6 md:px-16 lg:px-24 z-10 overflow-hidden"
    >
      <div className="line-grid" />

      {/* Booking Header */}
      <div className="text-center max-w-xl mb-12 select-none">
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
        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Service Selection Capsules */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Select Service
              </span>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setSelectedService("Orthodontics")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                    selectedService === "Orthodontics"
                      ? "bg-white text-luxury-charcoal border-white shadow-md"
                      : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                  }`}
                >
                  Orthodontics
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedService("Cosmetic Veneers")}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                    selectedService === "Cosmetic Veneers"
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

            {/* Input Email & Phone (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 909-3368"
                  className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60"
                />
              </div>
            </div>

            {/* Input Date & Time (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Consultation Date
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
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Preferred Time Slot
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white [&>option]:bg-luxury-charcoal"
                >
                  <option value="09:00 AM - Morning Slot">09:00 AM - Morning Slot</option>
                  <option value="11:30 AM - Late Morning">11:30 AM - Late Morning</option>
                  <option value="02:00 PM - Afternoon Slot">02:00 PM - Afternoon Slot</option>
                  <option value="04:30 PM - Late Afternoon">04:30 PM - Late Afternoon</option>
                </select>
              </div>
            </div>

            {/* Special Instructions (Optional notes) */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                Special Inquiries / Symptoms (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Details of your request..."
                rows={2}
                className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full group mt-2 flex items-center justify-center gap-2 py-4 rounded-full bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-md hover:shadow-lg disabled:bg-white/40 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Connecting to Database...
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Schedule Consultation
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>
        ) : (
          /* Success State Card */
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4 animate-fade-in select-none">
            <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold mb-2">
              <CheckCircle className="w-8 h-8 animate-bounce" />
            </div>
            <h3 className="text-2xl font-serif text-white">
              Appointment Secured
            </h3>
            <p className="text-xs text-white/80 font-semibold max-w-sm leading-relaxed">
              Thank you, <span className="text-luxury-gold font-bold">{formData.name}</span>. Your request has been written to our database. Concierge slots are pending verification. Email updates will be dispatched to <span className="text-luxury-gold font-bold">{formData.email}</span> shortly.
            </p>
            
            <button
              onClick={() => {
                setFormSubmitted(false);
                setFormData((prev) => ({
                  ...prev,
                  name: "",
                  email: "",
                  phone: "",
                  date: "",
                  message: "",
                }));
              }}
              className="mt-6 text-xs uppercase font-bold tracking-widest text-luxury-gold hover:text-white transition-colors duration-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" /> Book Another Consultation
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
