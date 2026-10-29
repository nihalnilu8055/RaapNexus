"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const InteractiveCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for organic trailing feel
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Trailing larger glow follower with slightly softer damping
  const glowConfig = { damping: 40, stiffness: 180, mass: 0.8 };
  const glowX = useSpring(cursorX, glowConfig);
  const glowY = useSpring(cursorY, glowConfig);

  useEffect(() => {
    // Check if device supports fine hover pointer
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsTouchDevice(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hoverable targets (buttons, links, cards, tabs)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("button") ||
          target.closest("a") ||
          target.closest("[role='button']") ||
          target.closest(".card-interactive") ||
          target.closest(".interactive-target"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Soft Ambient Spotlight Glow (Follows cursor smoothly) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30 mix-blend-soft-light"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.45 : 0,
        }}
        transition={{ opacity: { duration: 0.25 } }}
      >
        <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-r from-sky-400/20 via-blue-500/15 to-transparent blur-[70px]" />
      </motion.div>

      {/* Primary Precision Cursor Ring & Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
        }}
        transition={{ scale: { type: "spring", damping: 20, stiffness: 300 } }}
      >
        {/* Outer subtle glow ring */}
        <div
          className={`rounded-full transition-all duration-200 border ${
            isHovered
              ? "w-10 h-10 border-[#0284C7]/80 bg-[#0284C7]/[0.08] backdrop-blur-[1px] shadow-[0_0_15px_rgba(2,132,199,0.35)]"
              : "w-7 h-7 border-[#0284C7]/40 bg-transparent shadow-[0_0_10px_rgba(2,132,199,0.15)]"
          }`}
        />

        {/* Center micro dot */}
        <div
          className={`absolute rounded-full transition-all duration-150 ${
            isHovered ? "w-1 h-1 bg-[#0284C7]" : "w-1.5 h-1.5 bg-[#0284C7]"
          }`}
        />
      </motion.div>
    </>
  );
};
