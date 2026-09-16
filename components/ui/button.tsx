import React from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "lg",
      leftIcon,
      rightIcon,
      disabled,
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles: height 44px (lg) or 38px (md), 12px radius, Inter Medium font
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium transition-colors duration-150 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 select-none cursor-pointer disabled:cursor-not-allowed";

    const sizeStyles = {
      lg: "h-[44px] px-4 text-sm gap-2",
      md: "h-[38px] px-3 text-sm gap-1.5",
    }[size];

    const variantStyles: Record<ButtonVariant, string> = {
      primary: disabled
        ? "bg-primary-100 text-primary-300 border border-transparent shadow-none"
        : "bg-primary-500 text-white hover:bg-[#EA580C] active:bg-[#C2410C] shadow-sm",
      secondary: disabled
        ? "bg-transparent border border-primary-200 text-primary-200"
        : "bg-white border border-primary-400 text-primary-500 hover:bg-[#FFF7ED] hover:border-primary-500 active:bg-primary-100 shadow-sm",
      tertiary: disabled
        ? "bg-white border border-neutral-200 text-neutral-300"
        : "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-100 hover:border-neutral-300 active:bg-neutral-200 shadow-sm",
      text: disabled
        ? "bg-transparent text-primary-200 p-0 h-auto"
        : "bg-transparent text-primary-500 hover:text-[#EA580C] active:text-[#C2410C] p-0 h-auto",
    };

    // Text buttons don't have default padding/height unless specified
    const appliedSizeStyles = variant === "text" ? "py-1 px-1 text-sm gap-1.5 font-medium" : sizeStyles;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${appliedSizeStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
