"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { CourseCard } from "@/components/ui/course-card";
import { WaveformGraphic } from "./waveform-graphic";

// Docker Whale Icon matching the visual in vertex-home.png
const DockerIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-xl bg-transparent flex items-center justify-center">
    <svg
      width="46"
      height="46"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Containers on back */}
      <rect x="14" y="16" width="4.5" height="4" rx="0.5" fill="#0db7ed" stroke="#00477b" strokeWidth="1" />
      <rect x="19.5" y="16" width="4.5" height="4" rx="0.5" fill="#0db7ed" stroke="#00477b" strokeWidth="1" />
      <rect x="25" y="16" width="4.5" height="4" rx="0.5" fill="#0db7ed" stroke="#00477b" strokeWidth="1" />
      <rect x="19.5" y="11" width="4.5" height="4" rx="0.5" fill="#0db7ed" stroke="#00477b" strokeWidth="1" />
      <rect x="25" y="11" width="4.5" height="4" rx="0.5" fill="#0db7ed" stroke="#00477b" strokeWidth="1" />

      {/* Whale body */}
      <path
        d="M39.5 24C38.5 21.5 35.5 20.5 33 21C31 20 29.5 20 28 20.5H10C9.5 20.5 8 21.5 8 23.5C8 28.5 12 34 22 34C31 34 37 30 38 26.5C39.5 26.5 42 26 43 24C41.5 23.5 40 23.5 39.5 24Z"
        fill="#2496ed"
        stroke="#00477b"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Whale Eye */}
      <circle cx="13.5" cy="24.5" r="1" fill="#ffffff" />
      {/* Spout / Tail Fin */}
      <path
        d="M40 22C42 20 44 20 45 19C44.5 21 44 22.5 43 23.5"
        stroke="#00477b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

// TypeScript TS Icon matching the visual in vertex-home.png
const TypeScriptIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-xl bg-[#3178C6] flex items-center justify-center text-white font-bold text-2xl tracking-tight shadow-2xs select-none">
    TS
  </div>
);

// Next.js N Icon matching the visual in vertex-home.png
const NextJsIcon: React.FC = () => (
  <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center text-white font-bold text-3xl tracking-tighter shadow-2xs select-none">
    N
  </div>
);

export const CoursesSection: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-8 pb-0 px-6 sm:px-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-2xl sm:text-[28px] font-bold text-neutral-900 tracking-tight">
          All Courses
        </h2>

        <Link
          href="/courses"
          className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors group"
        >
          <span>View all courses</span>
          <ArrowRight
            size={15}
            strokeWidth={2}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>

      {/* 3-Column Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {/* Card 1: Next.js */}
        <CourseCard
          title="Next.js for Production"
          summary="Build scalable, high-performance web applications with Next.js."
          level="Intermediate"
          duration="18h 24m"
          modulesCount="12 modules"
          icon={<NextJsIcon />}
        />

        {/* Card 2: Docker */}
        <CourseCard
          title="Docker Essentials"
          summary="Containerize applications and streamline your development workflow."
          level="Beginner"
          duration="10h 12m"
          modulesCount="8 modules"
          icon={<DockerIcon />}
        />

        {/* Card 3: TypeScript */}
        <CourseCard
          title="TypeScript Deep Dive"
          summary="Go beyond the basics and write safer, more expressive code."
          level="Intermediate"
          duration="14h 36m"
          modulesCount="10 modules"
          icon={<TypeScriptIcon />}
        />
      </div>

      {/* Central Star Callout Divider */}
      <div className="relative flex items-center justify-center my-10 px-4">
        <div className="flex-1 h-px bg-neutral-200/80 max-w-xs" />
        <div className="flex items-center gap-2.5 px-4 text-neutral-600 text-sm font-sans select-none">
          <Star size={17} className="text-primary-500 fill-transparent shrink-0" strokeWidth={1.8} />
          <span>New courses and lessons added every week.</span>
        </div>
        <div className="flex-1 h-px bg-neutral-200/80 max-w-xs" />
      </div>

      {/* Bottom Equalizer Waveform Graphic flush with container edges */}
      <div className="mt-8 -mx-6 sm:-mx-10">
        <WaveformGraphic />
      </div>
    </section>
  );
};
