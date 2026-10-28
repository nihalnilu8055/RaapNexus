import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "official" | "gold" | "monochrome" | "light" | "full-image";
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
  const markDimensions = {
    sm: "w-6 h-7",
    md: "w-7 h-8 sm:w-8 sm:h-9",
    lg: "w-9 h-10 sm:w-10 sm:h-12",
    xl: "w-12 h-14 sm:w-14 sm:h-16",
  }[size];

  const fullImageHeights = {
    sm: "h-6",
    md: "h-8 sm:h-9",
    lg: "h-10 sm:h-11",
    xl: "h-12 sm:h-14",
  }[size];

  const textStyles = {
    sm: "text-base sm:text-lg",
    md: "text-base sm:text-xl",
    lg: "text-xl sm:text-2xl",
    xl: "text-2xl sm:text-3xl",
  }[size];

  const isFullImage = variant === "full-image";

  const content = (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {isFullImage ? (
        /* Full Official Logo Asset (Tight Cropped) */
        <div className={`relative ${fullImageHeights} w-auto flex items-center`}>
          <img
            src="/images/raapnexus-logo-tight.png"
            alt="RaapNexus — The Ultimate Finance Platform"
            className={`${fullImageHeights} w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,196,255,0.2)]`}
            loading="eager"
          />
        </div>
      ) : (
        <>
          {/* Authentic 3D Chrome + Electric Cyan "R" Emblem */}
          <div className={`relative ${markDimensions} flex items-center justify-center shrink-0`}>
            {/* Subtle Cyan Backlight Pulse */}
            <div className="absolute inset-0 bg-[#00C4FF]/20 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <img
              src="/images/raapnexus-mark.png"
              alt="RaapNexus Emblem"
              className="w-full h-full object-contain relative z-10 transform transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,196,255,0.3)]"
              loading="eager"
            />
          </div>

          {/* Authentic Typography Wordmark */}
          <div className="flex flex-col">
            <div className={`flex items-baseline font-extrabold tracking-tight ${textStyles}`}>
              {variant === "gold" ? (
                <>
                  <span className="text-[#FBF9F5] tracking-tight">Raap</span>
                  <span className="gradient-text-gold ml-0.5 tracking-tight">Nexus</span>
                </>
              ) : (
                <>
                  <span className="gradient-text-raap tracking-tight">Raap</span>
                  <span className="gradient-text-nexus ml-0.5 tracking-tight">Nexus</span>
                </>
              )}
            </div>
            {withTagline && (
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#8FA5B8] group-hover:text-[#00C4FF] transition-colors">
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
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C4FF] rounded-md transition-opacity hover:opacity-95"
      >
        {content}
      </Link>
    );
  }

  return content;
};