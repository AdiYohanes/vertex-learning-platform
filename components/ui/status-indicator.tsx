import React from "react";
import { CheckCircle2, Lock, Play } from "lucide-react";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  className = "",
  ...props
}) => {
  const statusConfig = {
    "in-progress": {
      defaultLabel: "In Progress",
      colorClass: "text-primary-500",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary-500 shrink-0"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ),
    },
    completed: {
      defaultLabel: "Completed",
      colorClass: "text-emerald-600",
      icon: <CheckCircle2 size={18} strokeWidth={2.5} className="text-emerald-600 shrink-0" />,
    },
    "now-playing": {
      defaultLabel: "Now Playing",
      colorClass: "text-primary-500",
      icon: (
        <div className="w-[18px] h-[18px] rounded-full bg-primary-500 flex items-center justify-center shrink-0">
          <Play size={10} className="fill-white text-white translate-x-[0.5px]" />
        </div>
      ),
    },
    locked: {
      defaultLabel: "Locked",
      colorClass: "text-neutral-500",
      icon: <Lock size={18} strokeWidth={2} className="text-neutral-500 shrink-0" />,
    },
  }[status];

  return (
    <div
      className={`inline-flex items-center gap-2 font-sans text-sm font-medium text-neutral-800 ${className}`}
      {...props}
    >
      {statusConfig.icon}
      <span>{label || statusConfig.defaultLabel}</span>
    </div>
  );
};
