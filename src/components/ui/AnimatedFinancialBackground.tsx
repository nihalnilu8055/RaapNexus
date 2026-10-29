"use client";

import React from "react";

interface AnimatedFinancialBackgroundProps {
  variant?: "hero" | "section" | "solutions" | "cta" | "showcase";
  className?: string;
}

export const AnimatedFinancialBackground: React.FC<AnimatedFinancialBackgroundProps> = ({
  variant = "hero",
  className = "",
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Dynamic Animated Gradient Mesh Layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === "hero"
              ? "radial-gradient(at 0% 0%, rgba(224, 242, 254, 0.85) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(219, 234, 254, 0.75) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(240, 249, 255, 0.9) 0px, transparent 50%)"
              : "radial-gradient(at 50% 0%, rgba(240, 249, 255, 0.7) 0px, transparent 60%)",
        }}
      />

      {/* 1. Fine Financial Dotted Grid - Continuously Drifting */}
      <div className="absolute inset-0 bg-financial-grid animate-grid-drift opacity-80" />

      {/* 2. Variant: Hero Multi-Layered Moving Gradient Orbs */}
      {variant === "hero" && (
        <>
          {/* Orb 1: Primary Cyan & Sky Core (Top-Center / Left) */}
          <div
            className="absolute -top-16 left-[5%] w-[580px] h-[580px] rounded-full blur-[55px] animate-orb-1"
            style={{
              background:
                "radial-gradient(circle, rgba(14, 165, 233, 0.42) 0%, rgba(56, 189, 248, 0.24) 40%, rgba(2, 132, 199, 0.10) 65%, transparent 80%)",
            }}
          />

          {/* Orb 2: Royal Blue & Sapphire Atmosphere (Top-Right / Behind Console) */}
          <div
            className="absolute top-4 right-[-4%] w-[640px] h-[640px] rounded-full blur-[65px] animate-orb-2"
            style={{
              background:
                "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(14, 165, 233, 0.20) 45%, rgba(99, 102, 241, 0.08) 65%, transparent 80%)",
            }}
          />

          {/* Orb 3: Radiant Teal & Electric Cyan (Center / Under Headline) */}
          <div
            className="absolute top-[35%] left-[12%] w-[520px] h-[520px] rounded-full blur-[50px] animate-orb-3"
            style={{
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.38) 0%, rgba(56, 189, 248, 0.20) 45%, rgba(14, 165, 233, 0.08) 65%, transparent 75%)",
            }}
          />

          {/* Flowing Curved Financial Stream Lines */}
          <div className="absolute inset-0 w-full h-full opacity-75">
            <svg
              className="w-full h-full animate-wave-flow"
              viewBox="0 0 1440 680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.0" />
                  <stop offset="20%" stopColor="#0EA5E9" stopOpacity="0.75" />
                  <stop offset="65%" stopColor="#2563EB" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="streamGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.0" />
                  <stop offset="45%" stopColor="#0284C7" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Main Financial Vector Curve 1 */}
              <path
                d="M -100,280 C 260,140 520,390 920,210 C 1220,90 1400,240 1560,180"
                stroke="url(#streamGrad1)"
                strokeWidth="2.8"
                fill="none"
                strokeLinecap="round"
              />

              {/* Animated Dashed Flow Line 2 */}
              <path
                d="M -60,200 C 300,90 620,340 1020,160 C 1300,60 1440,190 1560,140"
                stroke="url(#streamGrad2)"
                strokeWidth="2.0"
                fill="none"
                strokeLinecap="round"
                className="animate-dash-flow"
              />

              {/* Secondary Horizon Curve */}
              <path
                d="M -80,440 C 340,310 720,490 1140,350 C 1360,270 1460,330 1560,290"
                stroke="rgba(2, 132, 199, 0.35)"
                strokeWidth="1.5"
                strokeDasharray="6 10"
                fill="none"
              />
            </svg>
          </div>
        </>
      )}

      {/* Variant: Solutions & Section Background */}
      {(variant === "solutions" || variant === "section") && (
        <>
          <div
            className="absolute -top-16 right-[-2%] w-[540px] h-[540px] rounded-full blur-[65px] animate-orb-2"
            style={{
              background:
                "radial-gradient(circle, rgba(14, 165, 233, 0.32) 0%, rgba(56, 189, 248, 0.16) 45%, transparent 75%)",
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[-4%] w-[500px] h-[500px] rounded-full blur-[60px] animate-orb-1"
            style={{
              background:
                "radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(2, 132, 199, 0.14) 45%, transparent 75%)",
            }}
          />
        </>
      )}

      {/* Variant: Showcase Section Background */}
      {variant === "showcase" && (
        <>
          <div
            className="absolute top-10 left-[15%] w-[620px] h-[620px] rounded-full blur-[75px] animate-orb-1"
            style={{
              background:
                "radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(56, 189, 248, 0.18) 45%, transparent 75%)",
            }}
          />
          <div
            className="absolute bottom-6 right-[10%] w-[560px] h-[560px] rounded-full blur-[70px] animate-orb-3"
            style={{
              background:
                "radial-gradient(circle, rgba(37, 99, 235, 0.30) 0%, rgba(2, 132, 199, 0.14) 45%, transparent 75%)",
            }}
          />
        </>
      )}

      {/* Variant: CTA Section Background */}
      {variant === "cta" && (
        <>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[460px] rounded-full blur-[75px] animate-orb-2"
            style={{
              background:
                "radial-gradient(ellipse, rgba(14, 165, 233, 0.38) 0%, rgba(37, 99, 235, 0.25) 45%, transparent 75%)",
            }}
          />
        </>
      )}
    </div>
  );
};
