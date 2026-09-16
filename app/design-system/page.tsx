"use client";

import React, { useState } from "react";
import {
  VertexLogo,
  VertexGlyph,
  BellIcon,
  SearchIcon,
  PlayIcon,
  DocumentIcon,
  BookmarkIcon,
  AnalyticsIcon,
  ClockIcon,
  UserIcon,
  ChevronRightIcon,
  Eye,
  LayoutGrid,
  Target,
  Accessibility,
  ArrowUpRight,
} from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { CourseCard } from "@/components/ui/course-card";
import { LessonCard } from "@/components/ui/lesson-card";
import { ResourceCard } from "@/components/ui/resource-card";
import { Breadcrumbs, Pagination } from "@/components/ui/navigation";

export default function DesignSystemPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-[#FAFAFC] py-12 px-6 sm:px-12 lg:px-20 text-neutral-900 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-16">
        {/* =========================================================================
            HEADER & HERO
           ========================================================================= */}
        <div className="border-b border-neutral-200 pb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <VertexLogo size={36} />
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900">
                Design System
              </h1>

              <p className="font-sans text-neutral-600 text-lg leading-relaxed">
                A unified design language for Vertex learning platform. Clean, modern and
                focused on clarity, consistency and intuitive learning experiences.
              </p>

              <div className="pt-2">
                <span className="inline-block text-xs font-semibold tracking-widest text-neutral-400 uppercase">
                  VERSION 1.0 • MAY 2025
                </span>
              </div>
            </div>

            {/* 01 COLORS (Inline at top right matching reference sheet) */}
            <div className="w-full md:w-[620px] bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                  01 COLORS
                </span>
              </div>

              {/* Primary Palette */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-neutral-700">Primary</div>
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { name: "Primary 500", hex: "#F97316", bg: "bg-primary-500", text: "text-white" },
                    { name: "Primary 400", hex: "#FB923C", bg: "bg-primary-400", text: "text-white" },
                    { name: "Primary 300", hex: "#FDBA74", bg: "bg-primary-300", text: "text-neutral-900" },
                    { name: "Primary 200", hex: "#FED7AA", bg: "bg-primary-200", text: "text-neutral-900" },
                    { name: "Primary 100", hex: "#FFEEE5", bg: "bg-primary-100", text: "text-primary-500" },
                  ].map((color) => (
                    <div key={color.hex} className="space-y-1.5">
                      <div
                        className={`h-14 rounded-md ${color.bg} shadow-2xs border border-black/5`}
                      />
                      <div className="text-[11px] font-medium text-neutral-800 truncate">
                        {color.name}
                      </div>
                      <div className="text-[10px] text-neutral-400 font-mono">
                        {color.hex}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral Palette */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-neutral-700">Neutral</div>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
                  {[
                    { name: "Neutral 900", hex: "#0F172A", bg: "bg-neutral-900", border: "" },
                    { name: "Neutral 700", hex: "#334155", bg: "bg-neutral-700", border: "" },
                    { name: "Neutral 500", hex: "#64748B", bg: "bg-neutral-500", border: "" },
                    { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-neutral-300", border: "" },
                    { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-neutral-200", border: "" },
                    { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-neutral-100", border: "" },
                    { name: "Neutral 50", hex: "#FAFAFC", bg: "bg-neutral-50", border: "border border-neutral-200" },
                    { name: "White", hex: "#FFFFFF", bg: "bg-white", border: "border border-neutral-200" },
                  ].map((color) => (
                    <div key={color.hex} className="space-y-1">
                      <div
                        className={`h-11 rounded-md ${color.bg} ${color.border} shadow-2xs`}
                      />
                      <div className="text-[10px] font-medium text-neutral-800 truncate">
                        {color.name}
                      </div>
                      <div className="text-[9px] text-neutral-400 font-mono">
                        {color.hex}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            02 TYPOGRAPHY & 03 TYPE SCALE
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 02 Typography */}
          <div className="lg:col-span-5 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                02 TYPOGRAPHY
              </span>
            </div>

            <div className="space-y-8">
              {/* Playfair Display */}
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-6xl font-bold text-neutral-900 leading-none">
                  Ag
                </span>
                <div>
                  <div className="font-serif text-2xl font-bold text-neutral-900">
                    Playfair Display
                  </div>
                  <div className="text-xs font-medium text-neutral-500 mt-1">
                    Elegant <span className="text-primary-500 mx-1">•</span> Readable{" "}
                    <span className="text-primary-500 mx-1">•</span> Timeless
                  </div>
                </div>
              </div>

              {/* Inter */}
              <div className="flex items-baseline gap-6">
                <span className="font-sans text-6xl font-bold text-neutral-900 leading-none">
                  Ag
                </span>
                <div>
                  <div className="font-sans text-2xl font-bold text-neutral-900">
                    Inter
                  </div>
                  <div className="text-xs font-medium text-neutral-500 mt-1">
                    Clean <span className="text-primary-500 mx-1">•</span> Modern{" "}
                    <span className="text-primary-500 mx-1">•</span> Highly legible
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 Type Scale */}
          <div className="lg:col-span-7 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                03 TYPE SCALE
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 text-xs text-neutral-400 font-semibold uppercase">
                    <th className="py-2.5">Style</th>
                    <th className="py-2.5">Font</th>
                    <th className="py-2.5">Size / Line Height</th>
                    <th className="py-2.5">Weight</th>
                    <th className="py-2.5">Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-700">
                  <tr>
                    <td className="py-2 font-serif text-xl font-bold text-neutral-900">
                      Display 1
                    </td>
                    <td className="py-2 text-xs">Playfair Display</td>
                    <td className="py-2 text-xs font-mono">48 / 56</td>
                    <td className="py-2 text-xs font-medium">Bold</td>
                    <td className="py-2 text-xs text-neutral-500">Page titles</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-serif text-lg font-bold text-neutral-900">
                      Display 2
                    </td>
                    <td className="py-2 text-xs">Playfair Display</td>
                    <td className="py-2 text-xs font-mono">36 / 44</td>
                    <td className="py-2 text-xs font-medium">Bold</td>
                    <td className="py-2 text-xs text-neutral-500">Section titles</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-sans font-semibold text-neutral-900">
                      Heading 1
                    </td>
                    <td className="py-2 text-xs">Inter</td>
                    <td className="py-2 text-xs font-mono">28 / 36</td>
                    <td className="py-2 text-xs font-medium">Semi Bold</td>
                    <td className="py-2 text-xs text-neutral-500">Card titles</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-sans font-semibold text-neutral-900">
                      Heading 2
                    </td>
                    <td className="py-2 text-xs">Inter</td>
                    <td className="py-2 text-xs font-mono">22 / 30</td>
                    <td className="py-2 text-xs font-medium">Semi Bold</td>
                    <td className="py-2 text-xs text-neutral-500">Sub section</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-sans font-medium text-neutral-900">
                      Heading 3
                    </td>
                    <td className="py-2 text-xs">Inter</td>
                    <td className="py-2 text-xs font-mono">18 / 26</td>
                    <td className="py-2 text-xs font-medium">Medium</td>
                    <td className="py-2 text-xs text-neutral-500">Small titles</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-sans text-neutral-800">Body Large</td>
                    <td className="py-2 text-xs">Inter</td>
                    <td className="py-2 text-xs font-mono">16 / 24</td>
                    <td className="py-2 text-xs font-medium">Regular</td>
                    <td className="py-2 text-xs text-neutral-500">Body copy</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-sans text-neutral-700">Body</td>
                    <td className="py-2 text-xs">Inter</td>
                    <td className="py-2 text-xs font-mono">14 / 20</td>
                    <td className="py-2 text-xs font-medium">Regular</td>
                    <td className="py-2 text-xs text-neutral-500">Supporting text</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-sans text-xs text-neutral-600">Small</td>
                    <td className="py-2 text-xs">Inter</td>
                    <td className="py-2 text-xs font-mono">12 / 16</td>
                    <td className="py-2 text-xs font-medium">Regular</td>
                    <td className="py-2 text-xs text-neutral-500">Captions, meta</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* =========================================================================
            04 SPACING SYSTEM & 05 RADIUS & SHADOWS
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 04 Spacing */}
          <div className="lg:col-span-6 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                04 SPACING SYSTEM
              </span>
              <span className="text-xs text-neutral-500">Base unit: 4px</span>
            </div>

            <div className="flex flex-wrap items-end gap-3 sm:gap-5 pt-4">
              {[
                { px: 4, rem: "0.25rem", size: "w-2 h-2" },
                { px: 8, rem: "0.5rem", size: "w-3 h-3" },
                { px: 12, rem: "0.75rem", size: "w-4 h-4" },
                { px: 16, rem: "1rem", size: "w-6 h-6" },
                { px: 24, rem: "1.5rem", size: "w-8 h-8" },
                { px: 32, rem: "2rem", size: "w-10 h-10" },
                { px: 40, rem: "2.5rem", size: "w-12 h-12" },
                { px: 48, rem: "3rem", size: "w-14 h-14" },
                { px: 64, rem: "4rem", size: "w-16 h-16" },
              ].map((space) => (
                <div key={space.px} className="flex flex-col items-center gap-2">
                  <div
                    className={`${space.size} bg-primary-200/80 rounded-[4px] border border-primary-300`}
                  />
                  <div className="text-center">
                    <div className="text-xs font-bold text-neutral-800">
                      {space.px}
                    </div>
                    <div className="text-[10px] text-neutral-400 font-mono">
                      ({space.rem})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 05 Radius & Shadows */}
          <div className="lg:col-span-6 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                05 RADIUS & SHADOWS
              </span>
            </div>

            {/* Radius */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-700">Radius</div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[
                  { name: "4px", label: "(xs)", radius: "rounded-xs" },
                  { name: "8px", label: "(sm)", radius: "rounded-sm" },
                  { name: "12px", label: "(md)", radius: "rounded-md" },
                  { name: "16px", label: "(lg)", radius: "rounded-lg" },
                  { name: "24px", label: "(xl)", radius: "rounded-xl" },
                  { name: "Full", label: "(circle)", radius: "rounded-full" },
                ].map((r) => (
                  <div key={r.name} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-12 h-12 border-2 border-neutral-300 bg-neutral-50 ${r.radius}`}
                    />
                    <div className="text-center">
                      <div className="text-xs font-bold text-neutral-800">
                        {r.name}
                      </div>
                      <div className="text-[10px] text-neutral-400">{r.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-semibold text-neutral-700">Shadows</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Sm", spec: "0 1px 2px 0", sub: "rgba(15, 23, 42, 0.05)", shadowClass: "shadow-sm" },
                  { name: "Md", spec: "0 4px 12px -2px", sub: "rgba(15, 23, 42, 0.08)", shadowClass: "shadow-md" },
                  { name: "Lg", spec: "0 12px 24px -4px", sub: "rgba(15, 23, 42, 0.10)", shadowClass: "shadow-lg" },
                  { name: "Xl", spec: "0 20px 40px -8px", sub: "rgba(15, 23, 42, 0.12)", shadowClass: "shadow-xl" },
                ].map((sh) => (
                  <div
                    key={sh.name}
                    className={`bg-white border border-neutral-100 rounded-md py-3.5 px-2 text-center flex flex-col justify-center min-h-[72px] ${sh.shadowClass}`}
                  >
                    <div className="text-xs font-bold text-neutral-800">{sh.name}</div>
                    <div className="text-[10px] text-neutral-500 font-mono mt-0.5">
                      {sh.spec}
                    </div>
                    <div className="text-[9px] text-neutral-400 font-mono">
                      {sh.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            06 ICONS, 07 BUTTONS, 08 INPUTS (3-Column Layout)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 06 Icons */}
          <div className="lg:col-span-4 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                06 ICONS
              </span>
            </div>

            {/* Outline Style */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-700">
                Outline Style
              </div>
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-md border border-neutral-100">
                <BellIcon size={20} />
                <SearchIcon size={20} />
                <PlayIcon size={20} />
                <DocumentIcon size={20} />
                <BookmarkIcon size={20} />
                <AnalyticsIcon size={20} />
                <ClockIcon size={20} />
                <UserIcon size={20} />
                <ChevronRightIcon size={20} />
              </div>
            </div>

            {/* Filled Style */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-neutral-700">
                Filled Style
              </div>
              <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-md border border-neutral-100">
                <BellIcon size={20} filled />
                <SearchIcon size={20} filled />
                <PlayIcon size={20} filled />
                <DocumentIcon size={20} filled />
                <BookmarkIcon size={20} filled />
                <AnalyticsIcon size={20} filled />
                <ClockIcon size={20} filled />
                <UserIcon size={20} filled />
                <ChevronRightIcon size={20} filled />
              </div>
            </div>

            {/* Icon Specs */}
            <div className="text-xs text-neutral-500 space-y-1 pt-2 border-t border-neutral-100">
              <div className="font-semibold text-neutral-700">Icon Specs</div>
              <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                <li>24x24px grid</li>
                <li>2px stroke width (outline)</li>
                <li>Rounded line caps</li>
                <li>Consistent optical balance</li>
              </ul>
            </div>
          </div>

          {/* 07 Buttons */}
          <div className="lg:col-span-5 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                07 BUTTONS
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-4 gap-2 text-xs font-semibold text-neutral-500 text-center">
                <span>Primary</span>
                <span>Secondary</span>
                <span>Tertiary</span>
                <span>Text</span>
              </div>

              {/* Default */}
              <div className="flex items-center gap-2">
                <span className="w-12 text-[11px] text-neutral-400 font-medium shrink-0">
                  Default
                </span>
                <div className="grid grid-cols-4 gap-2 flex-1 items-center">
                  <Button variant="primary" size="md" className="w-full text-xs">
                    Get Started
                  </Button>
                  <Button variant="secondary" size="md" className="w-full text-xs truncate">
                    Explore
                  </Button>
                  <Button
                    variant="tertiary"
                    size="md"
                    rightIcon={<ArrowUpRight size={13} />}
                    className="w-full text-xs truncate"
                  >
                    View
                  </Button>
                  <Button
                    variant="text"
                    size="md"
                    rightIcon={<PlayIcon size={12} />}
                    className="w-full text-xs justify-center"
                  >
                    Watch
                  </Button>
                </div>
              </div>

              {/* Hover / Active */}
              <div className="flex items-center gap-2">
                <span className="w-12 text-[11px] text-neutral-400 font-medium shrink-0">
                  Hover
                </span>
                <div className="grid grid-cols-4 gap-2 flex-1 items-center">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full text-xs bg-[#EA580C]"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full text-xs truncate bg-primary-100/50 border-primary-500"
                  >
                    Explore
                  </Button>
                  <Button
                    variant="tertiary"
                    size="md"
                    rightIcon={<ArrowUpRight size={13} />}
                    className="w-full text-xs truncate bg-neutral-100 border-neutral-300"
                  >
                    View
                  </Button>
                  <Button
                    variant="text"
                    size="md"
                    rightIcon={<PlayIcon size={12} />}
                    className="w-full text-xs justify-center text-[#EA580C]"
                  >
                    Watch
                  </Button>
                </div>
              </div>

              {/* Disabled */}
              <div className="flex items-center gap-2">
                <span className="w-12 text-[11px] text-neutral-400 font-medium shrink-0">
                  Disabled
                </span>
                <div className="grid grid-cols-4 gap-2 flex-1 items-center">
                  <Button variant="primary" size="md" disabled className="w-full text-xs">
                    Get Started
                  </Button>
                  <Button variant="secondary" size="md" disabled className="w-full text-xs truncate">
                    Explore
                  </Button>
                  <Button
                    variant="tertiary"
                    size="md"
                    disabled
                    rightIcon={<ArrowUpRight size={13} />}
                    className="w-full text-xs truncate"
                  >
                    View
                  </Button>
                  <Button
                    variant="text"
                    size="md"
                    disabled
                    rightIcon={<PlayIcon size={12} />}
                    className="w-full text-xs justify-center"
                  >
                    Watch
                  </Button>
                </div>
              </div>
            </div>

            {/* Button Specs */}
            <div className="text-xs text-neutral-500 space-y-1 pt-2 border-t border-neutral-100">
              <div className="font-semibold text-neutral-700">Button Specs</div>
              <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                <li>Height: 44px (default)</li>
                <li>Padding: 0 16px (lg), 0 12px (md)</li>
                <li>Radius: 12px</li>
                <li>Font: Inter Medium (14–16px)</li>
              </ul>
            </div>
          </div>

          {/* 08 Inputs */}
          <div className="lg:col-span-3 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                08 INPUTS
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-neutral-700">
                  Search / Text Input
                </div>
                <SearchInput placeholder="Search anything..." />
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-neutral-700">
                  Select
                </div>
                <Select
                  options={[
                    { value: "relevant", label: "Most Relevant" },
                    { value: "rating", label: "Highest Rated" },
                    { value: "newest", label: "Newest Courses" },
                  ]}
                  defaultValue="relevant"
                />
              </div>
            </div>

            {/* Field Specs */}
            <div className="text-xs text-neutral-500 space-y-1 pt-2 border-t border-neutral-100">
              <div className="font-semibold text-neutral-700">Field Specs</div>
              <ul className="list-disc list-inside space-y-0.5 text-[11px]">
                <li>Height: 44px</li>
                <li>Radius: 12px</li>
                <li>Border: 1px solid #E2E8F0</li>
                <li>Padding: 0 16px</li>
                <li>Focus: Border color #FB923C</li>
              </ul>
            </div>
          </div>
        </div>

        {/* =========================================================================
            09 BADGES / TAGS, 10 STATUS / INDICATORS, 11 PROGRESS BAR
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 09 Badges */}
          <div className="md:col-span-4 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                09 BADGES / TAGS
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-2">
                <div className="text-xs text-neutral-500">Video</div>
                <Badge variant="video">VIDEO</Badge>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-neutral-500">Lesson</div>
                <Badge variant="lesson">LESSON</Badge>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-neutral-500">Popular</div>
                <Badge variant="popular">POPULAR</Badge>
              </div>
            </div>
          </div>

          {/* 10 Status Indicators */}
          <div className="md:col-span-4 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                10 STATUS / INDICATORS
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </div>

          {/* 11 Progress Bar */}
          <div className="md:col-span-4 bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                11 PROGRESS BAR
              </span>
            </div>

            <div className="pt-2">
              <ProgressBar value={35} />
            </div>
          </div>
        </div>

        {/* =========================================================================
            12 CARDS
           ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              12 CARDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course Card */}
            <div className="space-y-2">
              <div className="text-xs text-neutral-400 font-medium">Course Card</div>
              <CourseCard
                title="Next.js for Production"
                summary="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modulesCount="12 modules"
              />
            </div>

            {/* Lesson Card (Video) */}
            <div className="space-y-2">
              <div className="text-xs text-neutral-400 font-medium">
                Lesson Card (Video)
              </div>
              <LessonCard
                variant="video"
                title="Data Fetching in Server Components"
                summary="Learn how to fetch data on the server using async/await and Next.js best practices."
                meta="Lesson 5.1 • 12:45"
                actionLabel="Watch from 12:45"
              />
            </div>

            {/* Lesson Card (Lesson) */}
            <div className="space-y-2">
              <div className="text-xs text-neutral-400 font-medium">
                Lesson Card (Lesson)
              </div>
              <LessonCard
                variant="lesson"
                title="Data Fetching & Caching"
                summary="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
                meta="Module 5"
                actionLabel="View lesson"
              />
            </div>

            {/* Resource Card */}
            <div className="space-y-2">
              <div className="text-xs text-neutral-400 font-medium">
                Resource Card
              </div>
              <ResourceCard
                title="Caching and Revalidation Guide"
                summary="Deep dive into Next.js caching strategies."
                format="PDF"
                fileSize="1.2 MB"
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            13 NAVIGATION
           ========================================================================= */}
        <div className="bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              13 NAVIGATION
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Header / Logo Navigation */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <VertexGlyph size={28} />
                <span className="font-bold text-lg text-neutral-900 tracking-tight">
                  Vertex
                </span>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <span className="text-primary-500 font-medium cursor-pointer">
                  Courses
                </span>
                <span className="text-neutral-600 hover:text-neutral-900 font-normal cursor-pointer">
                  My Learning
                </span>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-neutral-400 font-medium">
                Breadcrumbs
              </div>
              <Breadcrumbs
                items={[
                  { label: "All Courses", href: "#" },
                  { label: "Next.js for Production", href: "#" },
                  { label: "Data Fetching & Caching" },
                ]}
              />
            </div>

            {/* Pagination */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-neutral-400 font-medium">
                Pagination
              </div>
              <Pagination
                currentPage={currentPage}
                onPageChange={(p) => setCurrentPage(p)}
              />
            </div>
          </div>
        </div>

        {/* =========================================================================
            14 PRINCIPLES
           ========================================================================= */}
        <div className="bg-white rounded-lg p-6 border border-neutral-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              14 PRINCIPLES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Principle 1: Clarity First */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                <Eye size={20} strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Clarity First
                </div>
                <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Every element should communicate clearly.
                </div>
              </div>
            </div>

            {/* Principle 2: Consistency */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                <LayoutGrid size={20} strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Consistency
                </div>
                <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Use components and patterns consistently across the platform.
                </div>
              </div>
            </div>

            {/* Principle 3: Focus & Calm */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                <Target size={20} strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Focus & Calm
                </div>
                <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Remove noise and help learners focus on what matters.
                </div>
              </div>
            </div>

            {/* Principle 4: Accessible */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
                <Accessibility size={20} strokeWidth={2} />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">
                  Accessible
                </div>
                <div className="text-xs text-neutral-500 mt-1 leading-relaxed">
                  Design with accessibility and inclusivity in mind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
