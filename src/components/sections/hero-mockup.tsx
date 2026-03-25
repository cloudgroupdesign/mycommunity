"use client";

import { useEffect, useRef } from "react";

export default function HeroMockup() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mockupRef.current) return;

      const rect = mockupRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      // 0 = element center at bottom of screen, 1 = element center at viewport center
      const raw = 1 - elementCenter / (viewportCenter + rect.height * 0.5);
      const progress = Math.max(0, Math.min(1, raw));

      const rotateX = -20 * (1 - progress);
      const scale = 1.08 - 0.08 * progress;

      mockupRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-[1080px] flex items-center justify-center">
      {/* Spinning gradient background glow */}
      <div
        className="absolute rounded-3xl overflow-hidden"
        style={{
          inset: "-40px",
          zIndex: 0,
          filter: "blur(60px)",
          opacity: 0.55,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(#29abe2, #f7941d, #e84c3d, #8dc63f, #20a99d, #29abe2)",
            animation: "gradientSpin 6s linear infinite",
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* Mockup card */}
      <div
        ref={mockupRef}
        className="relative w-full h-[604px] rounded-2xl overflow-hidden"
        style={{
          transformOrigin: "center bottom",
          willChange: "transform",
          zIndex: 1,
        }}
      >
        {/* Spinning gradient border */}
        <div
          className="absolute rounded-2xl overflow-hidden"
          style={{
            inset: "-2px",
            zIndex: 0,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(#29abe2, #f7941d, #e84c3d, #8dc63f, #20a99d, #29abe2)",
              animation: "gradientSpin 6s linear infinite",
              transformOrigin: "center center",
            }}
          />
        </div>

        {/* White inner content */}
        <div
          className="absolute inset-[2px] bg-white rounded-2xl"
          style={{ zIndex: 1 }}
        />
      </div>
    </div>
  );
}
