import React from "react";
import { Card } from "./card";
import { BarChart2, Clock, FileText } from "lucide-react";

export interface CourseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  summary: string;
  level: string;
  duration: string;
  modulesCount: number | string;
  icon?: React.ReactNode;
  titleClassName?: string;
  onClick?: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title = "Next.js for Production",
  summary = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = "12 modules",
  icon,
  titleClassName = "font-serif text-[20px] font-bold text-neutral-900 leading-[28px] mb-2 group-hover:text-primary-500 transition-colors",
  className = "",
  onClick,
  ...props
}) => {
  return (
    <Card
      onClick={onClick}
      className={`flex flex-col justify-between cursor-pointer group p-6 rounded-2xl border border-neutral-200/80 bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200 ${className}`}
      {...props}
    >
      <div>
        {/* Course Icon/Thumbnail */}
        <div className="mb-4">
          {icon ?? (
            <div className="w-14 h-14 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-2xl shadow-2xs">
              N
            </div>
          )}
        </div>

        {/* Title & Summary */}
        <h3 className={titleClassName}>
          {title}
        </h3>
        <p className="font-sans text-sm text-neutral-600 leading-relaxed min-h-[42px] mb-6">
          {summary}
        </p>
      </div>

      {/* Meta Footer */}
      <div className="flex items-center justify-between text-xs font-medium text-neutral-500 pt-4 border-t border-neutral-100">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <BarChart2 size={15} className="text-neutral-400 shrink-0" />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <Clock size={15} className="text-neutral-400 shrink-0" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <FileText size={15} className="text-neutral-400 shrink-0" />
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
