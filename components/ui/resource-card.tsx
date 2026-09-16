import React from "react";
import { Card } from "./card";
import { FileText, ArrowUpRight } from "lucide-react";

export interface ResourceCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  summary: string;
  format: string; // e.g. "PDF"
  fileSize: string; // e.g. "1.2 MB"
  href?: string;
  onDownload?: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title = "Caching and Revalidation Guide",
  summary = "Deep dive into Next.js caching strategies.",
  format = "PDF",
  fileSize = "1.2 MB",
  href,
  onDownload,
  className = "",
  ...props
}) => {
  return (
    <Card
      className={`flex flex-col justify-between border-neutral-200 group ${className}`}
      {...props}
    >
      <div>
        {/* Document Icon */}
        <div className="mb-4">
          <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-700">
            <FileText size={20} strokeWidth={2} />
          </div>
        </div>

        {/* Title & Summary */}
        <h3 className="font-sans text-[16px] font-semibold text-neutral-900 leading-[24px] mb-1.5 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="font-sans text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-6">
          {summary}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
        <span>
          {format} • {fileSize}
        </span>
        <a
          href={href ?? "#"}
          onClick={onDownload}
          className="text-primary-500 hover:text-[#EA580C] transition-colors p-1"
          aria-label={`Open ${title}`}
        >
          <ArrowUpRight size={18} strokeWidth={2} />
        </a>
      </div>
    </Card>
  );
};
