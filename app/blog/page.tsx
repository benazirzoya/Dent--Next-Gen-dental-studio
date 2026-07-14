"use client";

import React from "react";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "The Physics of Enamel Light Refraction in Veneers",
      excerpt: "How sub-micron ceramic layering dictates color reflection and prevents veneer restorations from looking artificial. Explore the optical geometry of tooth structures.",
      date: "July 12, 2026",
      readTime: "6 Min Read",
      image: "/t5.jpg",
      author: "Dr. Clara Sterling, DDS"
    },
    {
      title: "Craniofacial Proportions in Modern Aligners Design",
      excerpt: "Custom smile alignment is not just dental mapping. Read how our digital smile architecture aligns with the natural geometric proportions of your face.",
      date: "June 28, 2026",
      readTime: "8 Min Read",
      image: "/t1.jpg",
      author: "Dr. Julian Vance, DDS"
    },
    {
      title: "Material Science: Translucent Polymers vs Steel Braces",
      excerpt: "An in-depth review of bio-compatibility, continuous structural pressure levels, and overall tissue health when comparing crystal polymer aligners with metal wires.",
      date: "May 15, 2026",
      readTime: "5 Min Read",
      image: "/t3.jpg",
      author: "DENT Laboratories"
    }
  ];

  return (
    <div className="relative w-full min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 flex flex-col justify-center overflow-hidden">
      
      {/* Page Header */}
      <div className="relative max-w-2xl mb-16 select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-gold/5 text-luxury-gold text-[9px] font-bold uppercase tracking-widest mb-4">
          Clinical Insights
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
          Dental Aesthetics & Science Blog
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/80 font-semibold mt-4 leading-relaxed">
          Read academic discussions and dental technology reviews published by our lead practitioners.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto items-stretch">
        {posts.map((post, idx) => (
          <article 
            key={idx}
            className="group flex flex-col rounded-3xl overflow-hidden glass-panel border border-glass-border hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-500 pointer-events-auto"
          >
            {/* Post Image (Aspect Ratio 16/10) */}
            <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-white/10 shadow-inner">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-4 left-4 bg-luxury-charcoal/80 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <BookOpen className="w-3 h-3 text-luxury-gold" /> {post.author}
              </span>
            </div>

            {/* Post Content */}
            <div className="flex flex-col flex-grow p-6 sm:p-8 justify-between gap-6 select-none">
              
              <div className="flex flex-col gap-3">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-luxury-gold">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-serif font-bold text-white group-hover:text-luxury-gold transition-colors duration-300 leading-snug">
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-white/90 font-semibold leading-relaxed mt-1">
                  {post.excerpt}
                </p>
              </div>

              {/* Read button */}
              <div className="border-t border-white/10 pt-4 mt-auto">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-luxury-gold transition-colors cursor-pointer pointer-events-auto">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>

            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
