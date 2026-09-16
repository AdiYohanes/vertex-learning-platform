import React from "react";

export type BadgeVariant = "video" | "lesson" | "popular";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "video",
  className = "",
  ...props
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    video: "bg-primary-100 text-primary-500",
    lesson: "bg-[#EBF5FF] text-[#2563EB]",
    popular: "bg-[#FFF7ED] text-[#EA580C]",
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-sans text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-[6px] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
