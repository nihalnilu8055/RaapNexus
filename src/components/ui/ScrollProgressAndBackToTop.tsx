"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollProgressAndBackToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll Progress Bar at Top */}
      <div
        className="fixed top-0 left-0 right-0 h-[2.5px] z-[999] pointer-events-none bg-transparent"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#2563EB] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(2,132,199,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 p-2.5 sm:p-3 rounded-full bg-white/95 text-[#0F172A] border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.1)] hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all duration-300 backdrop-blur-md active:scale-95 group ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:-translate-y-0.5" />
      </button>
    </>
  );
};
