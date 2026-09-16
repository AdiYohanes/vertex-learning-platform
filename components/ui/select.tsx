"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = "Select an option",
  className = "",
  disabled = false,
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    value ?? defaultValue ?? (options.length > 0 ? options[0].value : "")
  );
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(
    (opt) => opt.value === (value !== undefined ? value : internalValue)
  );

  const handleSelect = (optionValue: string) => {
    if (disabled) return;
    if (value === undefined) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-[44px] w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-4 text-sm font-sans text-neutral-900 shadow-2xs hover:border-neutral-300 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/20 transition-colors disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400"
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`text-neutral-500 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1.5 w-full rounded-md border border-neutral-200 bg-white py-1 shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-neutral-50 ${
                option.value === (selectedOption?.value)
                  ? "font-medium text-primary-500 bg-primary-100/30"
                  : "text-neutral-700"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
