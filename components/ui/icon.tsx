import React from "react";
import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  Lock,
  ExternalLink,
  ArrowUpRight,
  Eye,
  LayoutGrid,
  Target,
  Sparkles,
  Accessibility,
} from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  filled?: boolean;
}

export const VertexGlyph: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
  >
    {/* Stylized faceted geometric V mark */}
    <path
      d="M5 6L14 26L17 26L9 6H5Z"
      fill="#F97316"
    />
    <path
      d="M27 6L14 26H18L27 6Z"
      fill="#FB923C"
    />
    <path
      d="M17 26L27 6H21L14.5 20.5L17 26Z"
      fill="#EA580C"
      opacity="0.85"
    />
  </svg>
);

export const VertexLogo: React.FC<{
  size?: number;
  showWordmark?: boolean;
  className?: string;
}> = ({ size = 32, showWordmark = true, className = "" }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`}>
    <VertexGlyph size={size} />
    {showWordmark && (
      <span className="font-sans font-bold text-xl tracking-tight text-neutral-900">
        Vertex
      </span>
    )}
  </div>
);

// Core 8 Icons shown in Section 06 of the Design System
export const BellIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <Bell
    size={size}
    strokeWidth={2}
    className={`${filled ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"} ${className}`}
    {...props}
  />
);

export const SearchIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <Search
    size={size}
    strokeWidth={filled ? 3 : 2}
    className={`${filled ? "text-neutral-900 stroke-[3]" : "text-neutral-900 stroke-[2]"} ${className}`}
    {...props}
  />
);

export const PlayIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <Play
    size={size}
    strokeWidth={2}
    className={`${filled ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"} ${className}`}
    {...props}
  />
);

export const DocumentIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <FileText
    size={size}
    strokeWidth={2}
    className={`${filled ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"} ${className}`}
    {...props}
  />
);

export const BookmarkIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <Bookmark
    size={size}
    strokeWidth={2}
    className={`${filled ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"} ${className}`}
    {...props}
  />
);

export const AnalyticsIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <BarChart2
    size={size}
    strokeWidth={filled ? 2.5 : 2}
    className={`${filled ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"} ${className}`}
    {...props}
  />
);

export const ClockIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <Clock
    size={size}
    strokeWidth={2}
    className={`${filled ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"} ${className}`}
    {...props}
  />
);

export const UserIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <User
    size={size}
    strokeWidth={2}
    className={`${filled ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"} ${className}`}
    {...props}
  />
);

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 24, filled = false, className = "", ...props }) => (
  <ChevronRight
    size={size}
    strokeWidth={filled ? 3 : 2}
    className={`text-neutral-900 ${className}`}
    {...props}
  />
);

export {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Lock,
  ExternalLink,
  ArrowUpRight,
  Eye,
  LayoutGrid,
  Target,
  Sparkles,
  Accessibility,
};
