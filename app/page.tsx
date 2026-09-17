import React from "react";
import { Bell } from "lucide-react";
import { Navbar } from "@/components/ui/navigation";
import { AuthControls } from "@/components/ui/auth-controls";
import { HeroSection } from "@/components/home/hero-section";
import { CoursesSection } from "@/components/home/courses-section";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start bg-[#FAFAFC]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          #edeef2 0,
          #edeef2 1.5px,
          transparent 0,
          transparent 10px
        )`,
      }}
    >
      {/* Main Canvas Container (matches 1024px visual design specification) */}
      <div className="w-full max-w-[1024px] min-h-screen bg-white border-x border-neutral-200/80 shadow-xs flex flex-col justify-between overflow-hidden">
        <div>
          {/* Header Navigation */}
          <Navbar
            items={[
              { label: "Courses", href: "/courses", active: false },
              { label: "My Learning", href: "/my-learning", active: false },
            ]}
            className="border-b border-neutral-100 px-6 sm:px-10"
            rightElement={
              <div className="flex items-center gap-4">
                {/* Notification Bell */}
                <button
                  type="button"
                  className="p-1.5 text-neutral-600 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-100 cursor-pointer"
                  aria-label="Notifications"
                >
                  <Bell size={20} strokeWidth={2} className="text-neutral-700" />
                </button>

                {/* Clerk Auth Controls */}
                <AuthControls />
              </div>
            }
          />

          {/* Hero Section */}
          <HeroSection />

          {/* All Courses Section (contains course cards, star callout, and bottom waveform) */}
          <CoursesSection />
        </div>
      </div>
    </div>
  );
}
