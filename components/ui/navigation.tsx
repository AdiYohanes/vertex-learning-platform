"use client";

import React from "react";
import Link from "next/link";
import { VertexLogo } from "./icon";
import { ChevronRight, ChevronLeft } from "lucide-react";

/* 1. Header / Brand Navbar */
export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  items?: NavItem[];
  className?: string;
  rightElement?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  items = [
    { label: "Courses", href: "/courses", active: true },
    { label: "My Learning", href: "/my-learning", active: false },
  ],
  className = "",
  rightElement,
}) => {
  return (
    <nav
      className={`flex items-center justify-between h-16 px-6 bg-white border-b border-neutral-200 ${className}`}
    >
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center">
          <VertexLogo size={28} />
        </Link>

        <div className="flex items-center gap-8">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-sans text-sm transition-colors ${
                item.active
                  ? "text-primary-500 font-medium"
                  : "text-neutral-600 hover:text-neutral-900 font-normal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {rightElement && <div className="flex items-center gap-4">{rightElement}</div>}
    </nav>
  );
};

/* 2. Breadcrumbs */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items = [
    { label: "All Courses", href: "#" },
    { label: "Next.js for Production", href: "#" },
    { label: "Data Fetching & Caching" },
  ],
  className = "",
}) => {
  return (
    <nav
      aria-label="Breadcrumbs"
      className={`flex items-center gap-2 text-sm font-sans ${className}`}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            {idx > 0 && (
              <ChevronRight
                size={14}
                className="text-neutral-400 shrink-0 select-none"
              />
            )}
            {isLast || !item.href ? (
              <span className="font-medium text-neutral-900 truncate">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-neutral-500 hover:text-neutral-800 transition-colors truncate"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

/* 3. Pagination */
export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  onPageChange,
  className = "",
}) => {
  const pages = [1, 2, 3, "...", 8];

  return (
    <nav
      aria-label="Pagination"
      className={`inline-flex items-center gap-1.5 font-sans select-none ${className}`}
    >
      {/* Previous button */}
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        className="w-9 h-9 flex items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Pages */}
      {pages.map((p, idx) => {
        if (p === "...") {
          return (
            <span
              key={`dots-${idx}`}
              className="w-9 h-9 flex items-center justify-center text-sm text-neutral-400"
            >
              ...
            </span>
          );
        }

        const pageNumber = p as number;
        const isActive = pageNumber === currentPage;

        return (
          <button
            key={pageNumber}
            type="button"
            onClick={() => onPageChange?.(pageNumber)}
            className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "border border-primary-500 text-primary-500 bg-primary-100/30"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next button */}
      <button
        type="button"
        disabled={currentPage >= 8}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="w-9 h-9 flex items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
};
