import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverable = true, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg border border-neutral-200 p-6 shadow-sm ${
          hoverable
            ? "transition-all duration-200 hover:shadow-md hover:border-neutral-300"
            : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
