import React from "react";
import { Card } from "./card";
import { BarChart2, Clock, Layers } from "lucide-react";

export interface CourseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  summary: string;
  level: string;
  duration: string;
  modulesCount: number | string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title = "Next.js for Production",
  summary = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = "12 modules",
  icon,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <Card
      onClick={onClick}
      className={`flex flex-col justify-between cursor-pointer group ${className}`}
      {...props}
    >
      <div>
        {/* Course Icon/Thumbnail */}
        <div className="mb-4">
          {icon ?? (
            <div className="w-12 h-12 rounded-md bg-neutral-900 text-white flex items-center justify-center font-bold text-xl shadow-2xs">
              N
            </div>
          )}
        </div>

        {/* Title & Summary */}
        <h3 className="font-sans text-[18px] font-semibold text-neutral-900 leading-[26px] mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="font-sans text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-6">
          {summary}
        </p>
      </div>

      {/* Meta Footer */}
      <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 pt-4 border-t border-neutral-100">
        <div className="flex items-center gap-1.5">
          <BarChart2 size={15} className="text-neutral-400" />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={15} className="text-neutral-400" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Layers size={15} className="text-neutral-400" />
          <span>
            {typeof modulesCount === "number"
              ? `${modulesCount} modules`
              : modulesCount}
          </span>
        </div>
      </div>
    </Card>
  );
};
