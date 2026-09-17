"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  // Keyboard shortcut listener: ⌘K or Ctrl+K focuses the search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="pt-12 sm:pt-16 pb-12 px-4 sm:px-6 flex flex-col items-center text-center">
      {/* Pill Badge */}
      <div className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-primary-100/50 border border-primary-200/90 mb-8 shadow-2xs">
        <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.16em] text-primary-500 uppercase">
          INTELLIGENT LEARNING
        </span>
      </div>

      {/* Main Display Headline */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-[58px] font-bold tracking-tight text-neutral-900 leading-[1.12] max-w-2xl sm:max-w-3xl mb-5">
        Search your learning<br />in plain English.
      </h1>

      {/* Subtitle */}
      <p className="font-sans text-neutral-600 text-base sm:text-[17px] leading-relaxed max-w-md sm:max-w-lg mb-8">
        Vertex understands what you want to learn and finds the exact lessons across all your courses.
      </p>

      {/* CTA Button */}
      <div className="mb-10">
        <Link
          href="/courses"
          className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-primary-500 hover:bg-[#EA580C] active:bg-[#C2410C] text-white font-sans text-sm font-medium shadow-sm hover:shadow-md transition-all duration-150"
        >
          <span>Explore Courses</span>
          <ArrowRight size={16} strokeWidth={2} />
        </Link>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="w-full max-w-2xl relative flex items-center"
      >
        <div className="relative w-full flex items-center bg-white border border-neutral-200/90 rounded-2xl shadow-xs focus-within:border-primary-400 focus-within:ring-3 focus-within:ring-primary-100 transition-all duration-150">
          <div className="pl-5 pr-3 text-neutral-400 pointer-events-none flex items-center">
            <Search size={20} strokeWidth={2} />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about your learning..."
            className="w-full h-14 bg-transparent text-sm sm:text-base font-sans text-neutral-900 placeholder:text-neutral-400 focus:outline-none pr-16"
            aria-label="Search learning content"
          />

          <div className="absolute right-3.5 flex items-center">
            <kbd
              onClick={() => inputRef.current?.focus()}
              className="inline-flex items-center justify-center px-2 py-1 text-xs font-sans font-medium text-neutral-500 bg-neutral-100/90 border border-neutral-200/80 rounded-md shadow-2xs select-none cursor-pointer"
            >
              ⌘ K
            </kbd>
          </div>
        </div>
      </form>
    </section>
  );
};
