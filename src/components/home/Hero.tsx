"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useSpring, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Receipt,
  Scale,
  TrendingUp,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";
import { AnimatedFinancialBackground } from "@/components/ui/AnimatedFinancialBackground";

export const Hero: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<"margin" | "tax" | "audit">("margin");
  const [displayedNumber, setDisplayedNumber] = useState(15200000);
  const prefersReducedMotion = useReducedMotion();

  // Subtle interactive pointer parallax for right console
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springTilt = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]), springTilt);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springTilt);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Smooth counter animation on mount
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedNumber(18420000);
      return;
    }

    const target = 18420000;
    const start = 14500000;
    const duration = 1600;
    const startTime = performance.now();

    const updateNumber = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(start + (target - start) * ease);
      setDisplayedNumber(current);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    const frameId = requestAnimationFrame(updateNumber);
    return () => cancelAnimationFrame(frameId);
  }, [prefersReducedMotion]);

  // Metric-specific data
  const metricConfigs = {
    margin: {
      label: "Unified Operations Run-Rate",
      value: `$${displayedNumber.toLocaleString()}`,
      badge: "+18.4% Operating Margin",
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
      tooltipLabel: "Operational Efficiency",
      tooltipValue: "99.4% · Continuous",
    },
    tax: {
      label: "Real-Time Business Insights",
      value: "4.8x LTV / CAC",
      badge: "Healthy Unit Economics",
      badgeColor: "text-sky-600 bg-sky-50 border-sky-200/60",
      tooltipLabel: "Gross Margin",
      tooltipValue: "72.4% · Optimized",
    },
    audit: {
      label: "Connected Workflow Approvals",
      value: "14,820 Tasks",
      badge: "0 System Bottlenecks",
      badgeColor: "text-emerald-600 bg-emerald-50 border-emerald-200/60",
      tooltipLabel: "Workflow Engine",
      tooltipValue: "Dual-Control Active",
    },
  };

  const currentConfig = metricConfigs[activeMetric];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[580px] lg:min-h-[720px] lg:max-h-[860px] flex flex-col justify-center pt-20 sm:pt-24 lg:pt-24 pb-12 sm:pb-14 bg-[#FAFBFD] overflow-hidden border-b border-slate-200/60"
    >
      {/* Premium Visible Continuous Animated Background */}
      <AnimatedFinancialBackground variant="hero" />

      {/* Full-Width Expansive Container (4–6% horizontal desktop padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: SHARP, READABLE EDITORIAL STATEMENT & CTAs ================= */}
          <div className="min-w-0 lg:col-span-6 xl:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-2xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] ring-4 ring-[#0284C7]/20 shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-[13px] font-medium text-slate-700 font-body tracking-normal truncate">
                Intelligent ERP · Complete Business Control
              </span>
            </div>

            {/* Clear Hero Headline */}
            <div>
              <h1 className="text-[clamp(1.75rem,6.5vw,3.5rem)] font-heading font-bold text-[#0F172A] tracking-[-0.03em] leading-[1.15] break-words">
                One ERP.{" "}
                <span className="block sm:inline mt-0.5 sm:mt-0 text-[#0F172A]">
                  Complete{" "}
                  <span className="gradient-accent">
                    Business Control.
                  </span>
                </span>
              </h1>
            </div>

            {/* Exact Supporting Text */}
            <p className="text-[15px] sm:text-base lg:text-[17px] text-slate-600 font-body font-normal leading-[1.65] max-w-xl break-words">
              Bring your business operations together with a smarter, more connected ERP experience.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#modules"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-body font-semibold text-[13px] sm:text-sm shadow-[0_4px_16px_rgba(15,23,42,0.14)] hover:shadow-[0_8px_26px_rgba(2,132,199,0.3)] active:scale-[0.98] transition-all duration-200 group interactive-target"
              >
                <span>Explore Our ERP</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1 text-sky-400" />
              </a>

              <Link
                href="/erp-demo"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/95 hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 font-body font-semibold text-[13px] sm:text-sm shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all duration-200 interactive-target backdrop-blur-sm"
              >
                <span>View the Live Demo</span>
              </Link>
            </div>

            {/* Understated Trust-Oriented Supporting Details */}
            <div className="pt-3 border-t border-slate-200/70">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-[13px] text-slate-500 font-body font-normal">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  <span>Read-only ERP interface</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  <span>Audit-ready dual control</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  <span>Multi-entity reconciliation</span>
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE 3D PARALLAX FINANCIAL INTELLIGENCE CONSOLE ================= */}
          <div className="min-w-0 lg:col-span-6 xl:col-span-7 relative [perspective:1000px]">
            
            {/* Visual Backplate Ambient Halo */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#0284C7]/15 via-[#38BDF8]/15 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Master Executive Console Container with Smooth Pointer-Responsive Tilt */}
            <motion.div
              style={{
                rotateX: prefersReducedMotion ? 0 : rotateX,
                rotateY: prefersReducedMotion ? 0 : rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_55px_-12px_rgba(15,23,42,0.1),0_0_1px_1px_rgba(15,23,42,0.04)] p-3.5 sm:p-5 space-y-3.5 overflow-hidden transition-shadow hover:shadow-[0_25px_65px_-15px_rgba(2,132,199,0.18)]"
            >
              
              {/* Console Top Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <div>
                    <span className="font-heading font-semibold text-xs text-[#0F172A] tracking-tight block">
                      RaapNexus ERP Operations Center
                    </span>
                    <span className="text-[10px] text-slate-500 block font-body">
                      Unified Business Control Engine · Active
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200/80 text-[10px] font-mono text-slate-600">
                    FY2026 Q3 · Multi-Entity
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-50 border border-sky-200/80 text-[10px] font-medium text-[#0284C7]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Dual Control</span>
                  </span>
                </div>
              </div>

              {/* Console Main Section: Financial Analysis Chart */}
              <div className="bg-[#FAFBFD] rounded-xl border border-slate-200/80 p-3 sm:p-3.5 relative overflow-hidden">
                <div className="flex flex-wrap items-end justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[11px] font-body text-slate-500 block">
                      {currentConfig.label}
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] tracking-tight transition-all duration-300">
                        {currentConfig.value}
                      </span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border inline-flex items-center gap-1 ${currentConfig.badgeColor}`}>
                        <TrendingUp className="w-3 h-3" />
                        {currentConfig.badge}
                      </span>
                    </div>
                  </div>

                  {/* Period Metric Switcher */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-[10px] font-medium text-slate-600 overflow-x-auto max-w-full">
                    <button
                      onClick={() => setActiveMetric("margin")}
                      className={`px-2 py-0.5 rounded transition-all whitespace-nowrap active:scale-95 ${
                        activeMetric === "margin"
                          ? "bg-[#0F172A] text-white shadow-xs font-semibold"
                          : "hover:text-[#0F172A]"
                      }`}
                    >
                      Unified Operations
                    </button>
                    <button
                      onClick={() => setActiveMetric("tax")}
                      className={`px-2 py-0.5 rounded transition-all whitespace-nowrap active:scale-95 ${
                        activeMetric === "tax"
                          ? "bg-[#0F172A] text-white shadow-xs font-semibold"
                          : "hover:text-[#0F172A]"
                      }`}
                    >
                      Business Insights
                    </button>
                    <button
                      onClick={() => setActiveMetric("audit")}
                      className={`px-2 py-0.5 rounded transition-all whitespace-nowrap active:scale-95 ${
                        activeMetric === "audit"
                          ? "bg-[#0F172A] text-white shadow-xs font-semibold"
                          : "hover:text-[#0F172A]"
                      }`}
                    >
                      Connected Workflows
                    </button>
                  </div>
                </div>

                {/* SVG Visual Chart with Smooth Animated Path */}
                <div className="relative h-28 sm:h-34 w-full pt-1">
                  <svg
                    viewBox="0 0 600 140"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="chartGradientHero" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0284C7" stopOpacity="0.22" />
                        <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="lineGradHero" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0284C7" />
                        <stop offset="50%" stopColor="#0EA5E9" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>

                    {/* Subtle Guidelines */}
                    <line x1="0" y1="30" x2="600" y2="30" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="70" x2="600" y2="70" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="110" x2="600" y2="110" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />

                    {/* Area Fill */}
                    <path
                      d="M 0,115 C 70,108 140,75 210,85 C 280,95 340,48 410,54 C 470,58 530,22 600,28 L 600,140 L 0,140 Z"
                      fill="url(#chartGradientHero)"
                    />

                    {/* Animated Line Stroke */}
                    <path
                      d="M 0,115 C 70,108 140,75 210,85 C 280,95 340,48 410,54 C 470,58 530,22 600,28"
                      fill="none"
                      stroke="url(#lineGradHero)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      className="animate-chart-line"
                    />

                    {/* Coordinate Data Points */}
                    <circle cx="210" cy="85" r="3.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
                    <circle cx="410" cy="54" r="3.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
                    <circle cx="600" cy="28" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                  </svg>

                  {/* Interactive Floating Tooltip Pill */}
                  <div className="absolute top-1 right-3 sm:right-8 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-md px-2 py-0.5 shadow-xs flex items-center gap-1.5 transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    <div className="text-[9px] sm:text-[10px] font-mono">
                      <span className="text-slate-500">{currentConfig.tooltipLabel}: </span>
                      <span className="font-bold text-[#0F172A]">{currentConfig.tooltipValue}</span>
                    </div>
                  </div>

                  {/* Time Axis Markers */}
                  <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-slate-400 pt-1 border-t border-slate-200/60 mt-1">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3 (Live)</span>
                    <span>Q4 (Fcst)</span>
                  </div>
                </div>
              </div>

              {/* Two Layered Strategic Sub-Panels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* PANEL A: Tax Intelligence Insight Panel (Floating Left) */}
                <div className="animate-float-slow bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs space-y-1.5 hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-heading font-semibold text-[#0F172A]">
                      <Receipt className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Tax Intelligence</span>
                    </div>
                    <span className="text-[10px] font-body font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/80 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Filing Pack Ready</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-xs font-mono pt-0.5">
                    <div className="bg-slate-50/80 p-1.5 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Input VAT</span>
                      <span className="font-bold text-[#0F172A] text-[11px] sm:text-xs">$228,400</span>
                      <span className="text-[8px] text-emerald-600 font-sans block">100% TRN Validated</span>
                    </div>
                    <div className="bg-slate-50/80 p-1.5 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Net Payable</span>
                      <span className="font-bold text-[#0F172A] text-[11px] sm:text-xs">$184,450</span>
                      <span className="text-[8px] text-[#0284C7] font-sans block">Zero Variance</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-100">
                    <span className="font-mono">UAE FTA & KSA ZATCA</span>
                    <span className="text-[#0284C7] font-medium">Cross-Border Balanced</span>
                  </div>
                </div>

                {/* PANEL B: Financial Audit & Ledger Findings Panel (Floating Right) */}
                <div className="animate-float-reverse bg-white rounded-xl border border-slate-200/90 p-3 shadow-2xs space-y-1.5 hover:shadow-xs transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-heading font-semibold text-[#0F172A]">
                      <Scale className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>Financial Auditing</span>
                    </div>
                    <span className="text-[10px] font-body font-medium text-[#0284C7] bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200/80">
                      GL Balanced
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-xs font-mono pt-0.5">
                    <div className="bg-slate-50/80 p-1.5 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Debits / Credits</span>
                      <span className="font-bold text-[#0F172A] text-[11px] sm:text-xs">$14,892,420</span>
                      <span className="text-[8px] text-emerald-600 font-sans block">$0.00 Variance</span>
                    </div>
                    <div className="bg-slate-50/80 p-1.5 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Vouchers</span>
                      <span className="font-bold text-[#0F172A] text-[11px] sm:text-xs">12,480 Verified</span>
                      <span className="text-[8px] text-[#0284C7] font-sans block">Source Traced</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-100">
                    <span className="font-mono">Continuous Sample Test</span>
                    <span className="text-emerald-600 font-medium font-mono">100% Passed</span>
                  </div>
                </div>

              </div>

              {/* Bottom Operational Telemetry Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[10px] sm:text-[11px] text-slate-600">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-5">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0" />
                    <span className="text-slate-400">Cash:</span>
                    <strong className="text-[#0F172A] font-mono">38 Days (-6d)</strong>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-slate-400">EBITDA:</span>
                    <strong className="text-[#0F172A] font-mono">32.6%</strong>
                  </span>
                </div>
                <span className="text-[9px] font-mono text-slate-400">
                  Illustrative sample
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
