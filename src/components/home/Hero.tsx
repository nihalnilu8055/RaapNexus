"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[680px] lg:h-[92vh] lg:max-h-[860px] flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 overflow-hidden bg-[#05080E] text-center">
      {/* Subtle Financial Coordinate Grid & Ambient Glow */}
      <div className="absolute inset-0 subtle-financial-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C4FF]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-t from-[#00C4FF]/[0.02] to-transparent pointer-events-none" />

      {/* Main Hero Viewport Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col items-center justify-center space-y-7">
        {/* Authentic 3D Nexus Emblem - Centerpiece */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center select-none group">
          {/* Ambient Cyan Refraction Halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C4FF]/25 via-[#42D9F5]/10 to-transparent blur-3xl group-hover:blur-[60px] transition-all duration-700 pointer-events-none" />
          
          {/* Concentric Precision Orbital Rings */}
          <div className="absolute inset-[-12px] rounded-full border border-[#00C4FF]/15 pointer-events-none" />
          <div className="absolute inset-[-24px] rounded-full border border-dashed border-[#00C4FF]/10 pointer-events-none animate-[spin_120s_linear_infinite]" />

          {/* Authentic 3D Emblem Mark from Official Brand Asset */}
          <img
            src="/images/raapnexus-mark.png"
            alt="RaapNexus — Official Platform Emblem"
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain relative z-10 transform transition-transform duration-700 ease-out group-hover:scale-105 filter drop-shadow-[0_12px_28px_rgba(0,196,255,0.4)]"
            loading="eager"
          />
        </div>

        {/* Brand Recognition Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-[#0E1726]/80 border border-[#00C4FF]/25 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C4FF] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#C8CED8]">
            <span className="gradient-text-raap font-bold">Raap</span>
            <span className="gradient-text-nexus font-bold ml-0.5">Nexus</span>
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#FBF9F5] leading-[1.1] max-w-3xl px-2">
          The Ultimate{" "}
          <span className="gradient-text-nexus block sm:inline">
            Finance Platform.
          </span>
        </h1>

        {/* Supporting Line: Kept strictly to one short sentence */}
        <p className="text-sm sm:text-lg md:text-xl text-[#C8CED8] font-normal max-w-xl mx-auto leading-relaxed px-2">
          Financial clarity for better business decisions.
        </p>

        {/* Single Restrained Call to Action */}
        <div className="pt-2">
          <Link
            href="/platform"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00C4FF] via-[#38BDF8] to-[#0284C7] text-[#05080E] font-extrabold text-sm sm:text-base shadow-xl shadow-[#00C4FF]/25 hover:shadow-[#00C4FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Explore Platform</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="relative z-10 pt-6 flex flex-col items-center justify-center">
        <a
          href="#intro"
          aria-label="Scroll to introduction"
          className="inline-flex flex-col items-center text-[#7E8B9E] hover:text-[#E5C378] transition-colors focus:outline-none"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1 opacity-70">
            Overview
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]/70" />
        </a>
      </div>
    </section>
  );
};