import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "header" | "footer";
  variant?: "official" | "light" | "dark" | "monochrome" | "full-image";
  withLink?: boolean;
  withTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  variant = "official",
  withLink = true,
  withTagline = false,
}) => {
  // Proportional emblem heights: Mobile 26–32px, Desktop 30–38px (Standardized per guidelines)
  const markDimensions = {
    sm: "w-5 h-6",
    header: "w-6 h-7 sm:w-7 sm:h-8 md:w-7 md:h-8",
    md: "w-6 h-7 sm:w-7 sm:h-8 md:w-8 md:h-9",
    footer: "w-6 h-7 sm:w-7 sm:h-8",
    lg: "w-8 h-9 sm:w-9 sm:h-10",
    xl: "w-10 h-11 sm:w-12 sm:h-13",
  }[size];

  const fullImageHeights = {
    sm: "h-6",
    header: "h-7 sm:h-8",
    md: "h-7 sm:h-8",
    footer: "h-7 sm:h-8",
    lg: "h-9 sm:h-10",
    xl: "h-11 sm:h-13",
  }[size];

  const textStyles = {
    sm: "text-sm",
    header: "text-base sm:text-lg",
    md: "text-base sm:text-lg",
    footer: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl",
  }[size];

  const isFullImage = variant === "full-image";

  const content = (
    <div className={`inline-flex items-center gap-2 sm:gap-2.5 select-none group ${className}`}>
      {isFullImage ? (
        /* Full Official Logo Asset with Preserved Aspect Ratio */
        <div className={`relative ${fullImageHeights} w-auto flex items-center`}>
          <img
            src="/images/raapnexus-logo-tight.png"
            alt="RaapNexus — The Ultimate Finance Platform"
            className={`${fullImageHeights} w-auto object-contain max-h-[36px]`}
            loading="eager"
          />
        </div>
      ) : (
        <>
          {/* Authentic 3D Chrome + Electric Cyan "R" Emblem */}
          <div className={`relative ${markDimensions} flex items-center justify-center shrink-0`}>
            {/* Soft Ambient Cyan Backlight */}
            <div className="absolute inset-0 bg-[#0284C7]/15 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <img
              src="/images/raapnexus-mark.png"
              alt="RaapNexus Emblem"
              className="w-full h-full object-contain relative z-10 transform transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </div>

          {/* Authentic Clean Typography Wordmark */}
          <div className="flex flex-col text-left">
            <div className={`flex items-baseline tracking-tight leading-none ${textStyles}`}>
              {variant === "dark" ? (
                <>
                  <span className="text-[#FBF9F5] font-semibold tracking-tight">Raap</span>
                  <span className="text-[#38BDF8] ml-0.5 tracking-tight font-bold">Nexus</span>
                </>
              ) : (
                <>
                  <span className="text-[#0F172A] font-semibold tracking-tight">Raap</span>
                  <span className="text-[#0284C7] ml-0.5 tracking-tight font-bold">Nexus</span>
                </>
              )}
            </div>
            {withTagline && (
              <span className="text-[9px] uppercase tracking-[0.16em] font-medium text-[#64748B] mt-0.5">
                The Ultimate Finance Platform
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        aria-label="RaapNexus Homepage"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-md transition-opacity hover:opacity-90"
      >
        {content}
      </Link>
    );
  }

  return content;
};