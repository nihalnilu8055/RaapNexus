import React from "react";
import { Hero } from "@/components/home/Hero";
import { ModuleExplorer } from "@/components/home/ModuleExplorer";
import { ERPShowcase } from "@/components/home/ERPShowcase";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. ERP-focused Hero with Dashboard Preview */}
      <Hero />

      {/* 2. Interactive ERP Module Explorer: Everything Connected. One ERP. */}
      <ModuleExplorer />

      {/* 3. Premium ERP Demo Showcase: See RaapNexus in Action */}
      <ERPShowcase />
    </div>
  );
}
