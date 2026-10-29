"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedFinancialBackground } from "@/components/ui/AnimatedFinancialBackground";

export const FinalCTA: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-t border-slate-200/80 relative overflow-hidden">
      {/* Restrained Animated Gradient Background */}
      <AnimatedFinancialBackground variant="cta" />

      {/* Atmospheric Glow Mesh */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full blur-[100px] opacity-35 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,165,233,0.35), rgba(2,132,199,0.15), transparent 70%)",
        }}
      />

      {/* Full-Width Expansive Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 text-center">
        
        <motion.div
          className="max-w-3xl mx-auto space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0284C7] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Intelligent Enterprise Control</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.025em] leading-[1.12]">
            Ready to experience{" "}
            <span className="gradient-accent inline-block">
              RaapNexus ERP?
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#475569] max-w-xl mx-auto leading-relaxed font-normal">
            Step inside our live demonstration environment to explore unified operations, financial ledgers, and automated business workflows.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/erp-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#0F172A] hover:bg-[#0284C7] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(15,23,42,0.14)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.25)] active:scale-[0.98] transition-all duration-200 group interactive-target"
            >
              <span>Explore the Live ERP Demo</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1 text-sky-400" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all duration-200 interactive-target"
            >
              <span>Talk to Our Experts</span>
            </Link>
          </div>

          {/* Institutional Trust Guarantees */}
          <div className="pt-6 border-t border-slate-200/70 max-w-lg mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium font-mono">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Zero direct database writes</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span>Cryptographic entity isolation</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Continuous audit trail reconciliation</span>
              </span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
