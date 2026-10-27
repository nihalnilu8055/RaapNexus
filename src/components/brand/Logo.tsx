import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  withLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  variant = "dark",
  withLink = true,
}) => {
  const iconDimensions = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  }[size];

  const textStyles = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }[size];

  const content = (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none group ${className}`}>
      {/* Geometric Nexus Symbol */}
      <div className={`relative ${iconDimensions} flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Glow Filter */}
          <defs>
            <linearGradient id="nexusGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#42D9F5" />
              <stop offset="100%" stopColor="#9B8CFF" />
            </linearGradient>
            <linearGradient id="nexusGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9B8CFF" />
              <stop offset="100%" stopColor="#42D9F5" />
            </linearGradient>
            <filter id="nexusGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Nexus Polygon Connection Lines */}
          <path
            d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
            stroke="url(#nexusGrad1)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />

          {/* Inner Converging Nexus Rays */}
          <line x1="20" y1="5" x2="20" y2="15" stroke="#42D9F5" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="33" y1="12.5" x2="24" y2="18" stroke="#9B8CFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="33" y1="27.5" x2="24" y2="22" stroke="#42D9F5" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="20" y1="35" x2="20" y2="25" stroke="#9B8CFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="7" y1="27.5" x2="16" y2="22" stroke="#42D9F5" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="7" y1="12.5" x2="16" y2="18" stroke="#9B8CFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Center Nexus Intelligent Core */}
          <polygon
            points="20,15 25,20 20,25 15,20"
            fill="url(#nexusGrad1)"
            filter="url(#nexusGlow)"
          />
          <circle cx="20" cy="20" r="2.2" fill="#FFFFFF" />

          {/* Peripheral Node Accent Points */}
          <circle cx="20" cy="5" r="1.8" fill="#42D9F5" />
          <circle cx="33" cy="12.5" r="1.8" fill="#9B8CFF" />
          <circle cx="33" cy="27.5" r="1.8" fill="#42D9F5" />
          <circle cx="20" cy="35" r="1.8" fill="#9B8CFF" />
          <circle cx="7" cy="27.5" r="1.8" fill="#42D9F5" />
          <circle cx="7" cy="12.5" r="1.8" fill="#9B8CFF" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className={`flex items-baseline font-extrabold ${textStyles}`}>
          <span className={variant === "dark" ? "text-white" : "text-[#07111F]"}>
            Raap
          </span>
          <span className="bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] bg-clip-text text-transparent ml-0.5">
            Nexus
          </span>
        </div>
      </div>
    </div>
  );

  if (withLink) {
    return (
      <Link href="/" aria-label="RaapNexus Homepage" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42D9F5] rounded-md">
        {content}
      </Link>
    );
  }

  return content;
};
