"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Maximize2, Minimize2, RefreshCw } from "lucide-react";

export default function ERPDemoPage() {
  const router = useRouter();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Keyboard shortcut: Esc to return to main website when not in native fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !document.fullscreenElement) {
        router.push("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  // Handle Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        }).catch(() => {});
      }
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  const handleOpenExternal = () => {
    window.open("https://raap.techorbit.net/src/abc-dashboard.html", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-[100] w-screen h-screen bg-[#faf9f5] flex flex-col overflow-hidden select-none">
      {/* Sleek, Non-Intrusive ERP Application Top Bar */}
      <header className="h-10 bg-slate-900 text-white px-3 sm:px-4 flex items-center justify-between border-b border-slate-800 shrink-0 text-xs font-sans">
        {/* Left: Clean Return to RaapNexus */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-white transition-colors px-2 py-1 rounded hover:bg-slate-800"
            title="Return to RaapNexus Homepage (Esc)"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back to RaapNexus</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <span className="h-3.5 w-px bg-slate-700 hidden sm:block" />

          {/* Live System Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-medium text-slate-300 truncate">
              RaapNexus ERP <span className="text-slate-500 hidden md:inline">• Live Interactive Environment</span>
            </span>
          </div>
        </div>

        {/* Right: Essential App Controls */}
        <div className="flex items-center gap-1 sm:gap-2 text-[11px] font-mono text-slate-300">
          <button
            onClick={handleReload}
            className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-800 hover:text-white transition-colors"
            title="Reset Dashboard State"
          >
            <RefreshCw className="w-3 h-3 text-slate-400" />
            <span className="hidden md:inline">Reset</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-800 hover:text-white transition-colors"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-3 h-3 text-slate-400" />
            ) : (
              <Maximize2 className="w-3 h-3 text-slate-400" />
            )}
            <span className="hidden md:inline">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
          </button>

          <button
            onClick={handleOpenExternal}
            className="inline-flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-800 hover:text-sky-400 transition-colors"
            title="Open standalone window"
          >
            <span className="hidden sm:inline">External Tab</span>
            <ExternalLink className="w-3 h-3 text-sky-400" />
          </button>
        </div>
      </header>

      {/* Main ERP Dashboard Viewport — Takes 100% of Available Screen */}
      <main className="flex-1 w-full h-[calc(100vh-40px)] relative bg-[#faf9f5] overflow-hidden">
        <iframe
          key={iframeKey}
          src="/erp-dashboard.html"
          title="RaapNexus ERP Dashboard Application"
          className="w-full h-full border-0 block"
          allow="fullscreen; clipboard-read; clipboard-write"
        />
      </main>
    </div>
  );
}
