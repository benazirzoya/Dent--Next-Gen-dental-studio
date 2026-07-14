"use client";

import React, { useState } from "react";
import { ArrowRight, Lock, Mail, User, CheckCircle } from "lucide-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-md glass-panel p-8 md:p-10 rounded-3xl border border-glass-border shadow-md select-none pointer-events-auto">
        {!success ? (
          <div className="flex flex-col gap-6">
            
            {/* Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isLogin
                    ? "bg-white text-luxury-charcoal shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
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
              <p className="text-[11px] text-white/80 font-semibold leading-relaxed">
                {isLogin
                  ? "Sign in to access your digital smile scans and records."
                  : "Register to request diagnostic reviews and treatment tracking."}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Register-only Field: Name */}
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

              {/* Register-only Field: Confirm Password */}
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
                className="w-full group mt-2 flex items-center justify-center gap-2 py-4 rounded-full bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white transition-all duration-500 shadow-md hover:shadow-lg animate-glow cursor-pointer"
              >
                <span className="text-xs font-bold uppercase tracking-widest">
                  {isLogin ? "Authenticate" : "Create Account"}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

            </form>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center gap-4 animate-fade-in select-none">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-luxury-gold mb-2 border border-white/20 shadow-inner">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              {isLogin ? "Authenticated Successfully" : "Account Established"}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-semibold max-w-sm leading-relaxed">
              Welcome to the DENT portal, <span className="text-luxury-gold font-bold">{formData.email.split('@')[0]}</span>. 
              Redirecting you to your personal smile concierge dashboard...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
