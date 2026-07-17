"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Lock, Mail, User, CheckCircle, AlertCircle, Loader2, Calendar, Clock, LogOut, FileText } from "lucide-react";

interface BookingItem {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  status: string;
  createdAt: string;
}

interface UserProfile {
  name: string;
  email: string;
  role: string;
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  
  // Dashboard states
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(false);

  // Sync profile state with localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("dent_user_profile");
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setUserProfile(parsed);
        fetchUserBookings(parsed.email);
      } catch (e) {
        localStorage.removeItem("dent_user_profile");
      }
    }
  }, []);

  const fetchUserBookings = async (email: string) => {
    setLoadingBookings(true);
    try {
      const response = await fetch(`/api/user-bookings?email=${encodeURIComponent(email)}`);
      const data = await response.json();
      if (response.ok && data.success) {
        setBookings(data.bookings || []);
      }
    } catch (err) {
      console.error("Failed to fetch user bookings:", err);
    } finally {
      setLoadingBookings(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    localStorage.removeItem("dent_user_profile");
    setUserProfile(null);
    setBookings([]);
    setErrorMsg("");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMsg("Please provide a valid email address.");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setErrorMsg("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        // Authenticate User
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Authentication failed.");
        }

        localStorage.setItem("dent_user_profile", JSON.stringify(data.user));
        setUserProfile(data.user);
        fetchUserBookings(data.user.email);
      } else {
        // Register User
        const response = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Registration failed.");
        }

        // Auto-login after successful registration
        const autoLoginResponse = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const autoLoginData = await autoLoginResponse.json();
        
        if (autoLoginResponse.ok) {
          localStorage.setItem("dent_user_profile", JSON.stringify(autoLoginData.user));
          setUserProfile(autoLoginData.user);
          fetchUserBookings(autoLoginData.user.email);
        } else {
          setIsLogin(true);
          setErrorMsg("Account created. Please log in.");
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to contact authorization API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="line-grid" />

      {/* Main Container Card */}
      <div className="w-full max-w-2xl glass-panel p-8 md:p-10 rounded-3xl border border-glass-border shadow-md select-none pointer-events-auto z-10">
        
        {/* Render Patient Portal Dashboard if user is logged in */}
        {userProfile ? (
          <div className="flex flex-col gap-8 animate-fade-in">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-white flex items-center gap-2">
                  Welcome, <span className="text-luxury-gold">{userProfile.name}</span>
                </h1>
                <p className="text-xs text-white/60 font-semibold uppercase tracking-wider mt-1.5">
                  Patient Portal / {userProfile.email}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-red-500/30 hover:bg-red-500/10 text-white hover:text-red-400 transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>

            {/* Scheduled Appointments Grid */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-serif font-bold text-white tracking-wide">
                Your Scheduled Consultations
              </h2>
              
              {loadingBookings ? (
                <div className="flex flex-col items-center justify-center py-12 gap-2 text-white/50 text-xs font-semibold">
                  <Loader2 className="w-6 h-6 animate-spin text-luxury-gold" />
                  <span>Retrieving schedules from database...</span>
                </div>
              ) : bookings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bookings.map((booking) => (
                    <div 
                      key={booking._id}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3.5 hover:border-luxury-gold/30 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-bold text-white tracking-wide">
                          {booking.service}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
                          booking.status === "confirmed" 
                            ? "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20" 
                            : "bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20"
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      
                      <div className="w-full h-px bg-white/5" />

                      <div className="flex flex-col gap-2 text-xs font-semibold text-white/80">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                          <span>Date: {booking.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                          <span>Time: {booking.time}</span>
                        </div>
                        {booking.message && (
                          <div className="flex items-start gap-2 mt-1 text-[11px] text-white/60">
                            <FileText className="w-3.5 h-3.5 text-white/30 flex-shrink-0 mt-0.5" />
                            <p className="leading-relaxed italic">“{booking.message}”</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-6 rounded-2xl bg-white/3 border border-dashed border-white/15 text-center gap-3">
                  <Calendar className="w-8 h-8 text-white/20" />
                  <p className="text-xs text-white/60 font-semibold max-w-xs leading-relaxed">
                    No active bookings. Submit a date using the Concierge Booking panel on the homepage to start scheduling.
                  </p>
                </div>
              )}
            </div>

          </div>
        ) : (
          /* Render Authentication Forms (Login / Register) */
          <div className="flex flex-col gap-6 max-w-md mx-auto">
            {/* Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setErrorMsg("");
                }}
                className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isLogin
                    ? "bg-white text-luxury-charcoal shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setErrorMsg("");
                }}
                className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  !isLogin
                    ? "bg-white text-luxury-charcoal shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Register
              </button>
            </div>

            {/* Form Title */}
            <div>
              <h1 className="text-3xl font-serif font-bold text-white mb-2">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-xs text-white/70 font-semibold leading-relaxed">
                {isLogin
                  ? "Sign in to access your digital smile scans and records."
                  : "Register to request diagnostic reviews and treatment tracking."}
              </p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold flex items-center gap-2.5 animate-shake">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Register Name */}
              {!isLogin && (
                <div className="flex flex-col gap-1.5 animate-slide-down">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required={!isLogin}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Olivia Vance"
                      className="w-full pl-10 pr-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60"
                    />
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="olivia@domain.com"
                    className="w-full pl-10 pr-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60"
                  />
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60"
                  />
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
                </div>
              </div>

              {/* Confirm Password */}
              {!isLogin && (
                <div className="flex flex-col gap-1.5 animate-slide-down">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirmPassword"
                      required={!isLogin}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-3 text-sm font-semibold rounded-xl bg-white/10 border border-white/30 focus:bg-white/20 focus:border-luxury-gold focus:outline-none transition-all duration-300 text-white placeholder:text-white/60"
                    />
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full group mt-2 flex items-center justify-center gap-2 py-4 rounded-full bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-md hover:shadow-lg disabled:bg-white/40 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting to Database...</span>
                  </>
                ) : (
                  <>
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {isLogin ? "Authenticate" : "Create Account"}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
