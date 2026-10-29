"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ERP Modules", href: "/#modules" },
    { name: "Showcase", href: "/#erp-showcase" },
    { name: "Platform", href: "/platform" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-white/92 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(15,23,42,0.04)] py-2.5 sm:py-3"
          : "bg-white/75 backdrop-blur-sm border-b border-slate-200/40 py-3 sm:py-3.5"
      }`}
    >
      {/* Full-Width Expansive Container with 4-6% Horizontal Padding */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo on Left - Correctly Proportioned & Clearly Visible */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="inline-block" aria-label="RaapNexus Home">
              <Logo size="header" variant="official" />
            </Link>
          </div>

          {/* Minimal Navigation: Solutions, Insights, About, Contact */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-body font-medium tracking-normal transition-colors ${
                    isActive
                      ? "text-slate-950 font-semibold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Strong, Elegant “Explore ERP” Button */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <Link
              href="/erp-demo"
              className="inline-flex items-center gap-2 px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs lg:text-sm font-body font-semibold bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-[0_2px_10px_rgba(15,23,42,0.12)] hover:shadow-[0_4px_16px_rgba(15,23,42,0.18)] active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Explore ERP</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 text-sky-400" />
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center space-x-2 shrink-0">
            <Link
              href="/erp-demo"
              className="hidden sm:inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-[#0F172A] text-white"
            >
              Explore ERP
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#0284C7] bg-slate-50 font-semibold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#0F172A] text-white font-semibold text-xs transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
