import React from "react";
import { Card } from "./card";
import { Badge } from "./badge";
import { Play, ArrowUpRight } from "lucide-react";

export type LessonCardVariant = "video" | "lesson";

export interface LessonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LessonCardVariant;
  title: string;
  summary: string;
  meta: string; // e.g., "Lesson 5.1 • 12:45" or "Module 5"
  actionLabel?: string;
  onAction?: () => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  variant = "video",
  title,
  summary,
  meta,
  actionLabel,
  onAction,
  className = "",
  ...props
}) => {
  const isVideo = variant === "video";

  return (
    <Card
      className={`flex flex-col justify-between border-neutral-200 ${className}`}
      {...props}
    >
      <div>
        {/* Badge */}
        <div className="mb-3">
          <Badge variant={isVideo ? "video" : "lesson"}>
            {isVideo ? "VIDEO" : "LESSON"}
          </Badge>
        </div>

        {/* Title & Summary */}
        <h3 className="font-sans text-[18px] font-semibold text-neutral-900 leading-[26px] mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm text-neutral-500 leading-relaxed line-clamp-3 mb-6">
          {summary}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs text-neutral-500">
        <span className="font-medium text-neutral-500">{meta}</span>

        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-primary-500 hover:text-[#EA580C] transition-colors cursor-pointer"
        >
          {isVideo ? (
            <>
              <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center shrink-0">
                <Play size={10} className="fill-primary-500 translate-x-[0.5px]" />
              </span>
              <span>{actionLabel ?? "Watch from 12:45"}</span>
            </>
          ) : (
            <>
              <span>{actionLabel ?? "View lesson"}</span>
              <ArrowUpRight size={16} className="text-primary-500 shrink-0" />
            </>
          )}
        </button>
      </div>
    </Card>
  );
};
