"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[580px] lg:h-[86vh] lg:max-h-[780px] flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-10 overflow-hidden bg-white text-center">
      {/* Soft Light Ambient Gradient Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#0284C7]/[0.06] via-[#38BDF8]/[0.04] to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Viewport Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col items-center justify-center space-y-6 sm:space-y-7">
        {/* Controlled Centerpiece: Authentic 3D Nexus Emblem with Refined Proportions */}
        <div className="hero-animate-emblem relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center select-none group">
          {/* Subtle Ambient Refraction */}
          <div className="absolute inset-0 rounded-full bg-[#0284C7]/10 blur-xl group-hover:blur-2xl transition-all duration-500 pointer-events-none" />
          
          {/* Delicate Hairline Orbital Rings */}
          <div className="absolute inset-[-8px] rounded-full border border-slate-200/80 pointer-events-none" />
          <div className="absolute inset-[-16px] rounded-full border border-dashed border-slate-200/60 pointer-events-none" />

          {/* Authentic 3D Emblem Mark */}
          <img
            src="/images/raapnexus-mark.png"
            alt="RaapNexus — Official Platform Emblem"
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain relative z-10 transform transition-transform duration-500 ease-out group-hover:scale-105"
            loading="eager"
          />
        </div>

        {/* Brand Recognition Eyebrow */}
        <div className="hero-animate-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
            RaapNexus
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="hero-animate-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] sm:leading-[1.08] max-w-3xl px-2">
          The Ultimate{" "}
          <span className="gradient-accent block sm:inline">
            Finance Platform.
          </span>
        </h1>

        {/* Supporting Line: Official Brand Ethos */}
        <p className="hero-animate-subhead text-base sm:text-lg md:text-xl text-[#475569] font-normal tracking-normal max-w-lg mx-auto leading-relaxed px-2">
          Financial clarity. Intelligent decisions.
        </p>

        {/* Single Restrained Call to Action */}
        <div className="hero-animate-cta pt-1 sm:pt-2">
          <Link
            href="/platform"
            className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0F172A] text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-[#1E293B] hover:shadow-lg transition-all duration-200"
          >
            <span>Explore Platform</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="relative z-10 pt-4 flex flex-col items-center justify-center">
        <a
          href="#intro"
          aria-label="Scroll to platform overview"
          className="inline-flex flex-col items-center text-slate-400 hover:text-slate-700 transition-colors focus:outline-none"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium mb-1 opacity-80">
            Overview
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-slate-400" />
        </a>
      </div>
    </section>
  );
};
