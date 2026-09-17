import React from "react";

export interface WaveformGraphicProps {
  className?: string;
}

export const WaveformGraphic: React.FC<WaveformGraphicProps> = ({
  className = "",
}) => {
  // Column definitions replicating the exact visual rhythm of vertex-home.png
  // A subtle acoustic frequency profile: higher at outer edges, dipping into a gentle trough in the center
  const bars = [
    { height: "55%", opacity: 0.85 },
    { height: "82%", opacity: 0.95 },
    { height: "98%", opacity: 1.0 },
    { height: "72%", opacity: 0.9 },
    { height: "56%", opacity: 0.82 },
    { height: "42%", opacity: 0.75 },
    { height: "30%", opacity: 0.7 },
    { height: "22%", opacity: 0.65 },
    { height: "24%", opacity: 0.68 },
    { height: "36%", opacity: 0.75 },
    { height: "52%", opacity: 0.82 },
    { height: "74%", opacity: 0.9 },
    { height: "96%", opacity: 1.0 },
    { height: "84%", opacity: 0.95 },
    { height: "60%", opacity: 0.88 },
  ];

  return (
    <div
      className={`relative w-full h-48 sm:h-56 md:h-64 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Ambient warm radial glow */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-primary-200/40 via-primary-100/20 to-transparent blur-3xl" />

      {/* Acoustic equalizer bar columns */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-1.5 sm:gap-2.5 md:gap-3 px-2 sm:px-6 h-full">
        {bars.map((bar, idx) => (
          <div
            key={idx}
            style={{
              height: bar.height,
              opacity: bar.opacity,
            }}
            className="flex-1 max-w-[58px] rounded-t-lg bg-gradient-to-t from-primary-400 via-primary-300/85 to-primary-100/10 shadow-2xs"
          />
        ))}
      </div>

      {/* Top fade overlay to blend smoothly into the white page background */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/95" />
    </div>
  );
};
