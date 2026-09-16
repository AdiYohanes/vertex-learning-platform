import React from "react";

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  showLabel?: boolean;
  label?: string;
  size?: "sm" | "md";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  showLabel = true,
  label,
  size = "md",
  className = "",
  ...props
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  const heightClass = size === "sm" ? "h-2" : "h-2.5";

  return (
    <div
      className={`flex items-center gap-4 w-full ${className}`}
      {...props}
    >
      <div
        className={`flex-1 bg-neutral-200 rounded-full overflow-hidden ${heightClass}`}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="bg-primary-500 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="font-sans text-sm text-neutral-700 shrink-0 select-none">
          <span className="font-semibold text-neutral-900">{clampedValue}%</span>{" "}
          {label ?? "complete"}
        </span>
      )}
    </div>
  );
};
