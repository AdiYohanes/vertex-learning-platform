import React from "react";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", leftIcon, rightElement, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {leftIcon && (
          <div className="absolute left-4 flex items-center pointer-events-none text-neutral-500">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={`h-[44px] w-full rounded-md border border-neutral-200 bg-white px-4 text-sm font-sans text-neutral-900 placeholder:text-neutral-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-colors disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400 ${
            leftIcon ? "pl-11" : ""
          } ${rightElement ? "pr-14" : ""} ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 flex items-center">{rightElement}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface SearchInputProps
  extends Omit<InputProps, "leftIcon" | "rightElement"> {
  shortcut?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ shortcut = "⌘ K", placeholder = "Search anything...", className = "", ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="search"
        placeholder={placeholder}
        leftIcon={<Search size={18} strokeWidth={2} className="text-neutral-400" />}
        rightElement={
          shortcut ? (
            <kbd className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-neutral-500 bg-neutral-100 border border-neutral-200 rounded-[6px] shadow-2xs select-none">
              {shortcut}
            </kbd>
          ) : undefined
        }
        className={className}
        {...props}
      />
    );
  }
);

SearchInput.displayName = "SearchInput";
