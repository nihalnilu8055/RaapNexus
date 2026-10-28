"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-500 border-t border-slate-200/80 w-full">
      {/* Full-Width Expansive Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-100">
          
          {/* Logo & Platform Tagline */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <Link href="/" className="inline-block" aria-label="RaapNexus Home">
              <Logo size="header" variant="official" />
            </Link>
            <span className="text-xs text-slate-500 text-center lg:text-left">
              The Ultimate Finance Platform · Tax Auditing · Financial Auditing · Financial Analysis · Business Analysis
            </span>
          </div>

          {/* Minimal Clean Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-slate-600">
            <Link href="/#solutions" className="hover:text-slate-950 transition-colors">
              Solutions
            </Link>
            <Link href="/#showcase" className="hover:text-slate-950 transition-colors">
              Insights
            </Link>
            <Link href="/platform" className="hover:text-slate-950 transition-colors">
              Platform
            </Link>
            <Link href="/about" className="hover:text-slate-950 transition-colors">
              About
            </Link>
            <Link href="/security" className="hover:text-slate-950 transition-colors">
              Security
            </Link>
            <Link href="/contact" className="hover:text-slate-950 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-slate-950 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-950 transition-colors">
              Terms
            </Link>
          </nav>

          {/* Contact Direct Link */}
          <div className="text-xs text-center lg:text-right">
            <span className="text-slate-400 block mb-0.5">Direct Enterprise Advisory</span>
            <a
              href="mailto:info@techlogica.com?subject=RaapNexus%20Enterprise%20Inquiry"
              className="text-[#0284C7] hover:underline font-semibold"
            >
              info@techlogica.com
            </a>
          </div>
        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© {currentYear} RaapNexus. All rights reserved.</p>
          <p>Read-only ERP interface architecture. Dual-control authorization standard.</p>
        </div>

      </div>
    </footer>
  );
};
