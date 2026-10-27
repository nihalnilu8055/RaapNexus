"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/platform" },
    { name: "Solutions", href: "/solutions" },
    { name: "Security", href: "/security" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07111F]/90 backdrop-blur-md border-b border-[#1E314B]/80 shadow-lg shadow-black/30 py-2.5 sm:py-3"
          : "bg-[#07111F]/60 backdrop-blur-sm border-b border-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Logo size="md" variant="dark" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0B1728]/70 border border-[#1E314B]/70 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-white bg-[#101F35] shadow-sm border border-[#42D9F5]/30 text-shadow-sm"
                      : "text-[#8E9EBA] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <Link
              href="/platform#demo"
              className="text-xs font-bold uppercase tracking-wider text-[#8E9EBA] hover:text-[#42D9F5] transition-colors px-3 py-2 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#42D9F5]" />
              <span>Simulate</span>
            </Link>
            <Link
              href="/contact"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42D9F5]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] rounded-full transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[#07111F] transition-all duration-300 group-hover:bg-[#101F35] text-white text-xs sm:text-sm font-bold shadow-md">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 text-[#42D9F5] transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2 shrink-0">
            <Link
              href="/contact"
              className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] shadow-sm"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-[#101F35] border border-[#1E314B] text-white hover:text-[#42D9F5] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111F]/98 border-b border-[#1E314B] backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 transition-all duration-300 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${
                    isActive
                      ? "bg-[#101F35] text-[#42D9F5] border border-[#42D9F5]/30"
                      : "text-white/90 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#42D9F5]"></div>}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#1E314B]/60 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-xs text-[#8E9EBA] px-2 py-1">
              <ShieldCheck className="w-4 h-4 text-[#42D9F5]" />
              <span>Enterprise-Grade Authorization Layer</span>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm shadow-lg shadow-[#42D9F5]/20"
            >
              <span>Schedule Architecture Walkthrough</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
