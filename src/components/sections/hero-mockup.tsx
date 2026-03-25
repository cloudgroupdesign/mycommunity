"use client";

import { useEffect, useRef } from "react";

export default function HeroMockup() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!mockupRef.current) return;

      const rect = mockupRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress: 0 = mockup top just entered viewport bottom
      //           1 = mockup center is at viewport center
      const elementCenter = rect.top + rect.height / 2;
      const startPoint = vh;           // starts when top hits bottom of screen
      const endPoint = vh / 2;         // ends when center hits middle of screen

      const progress = Math.max(
        0,
        Math.min(1, (startPoint - elementCenter) / (startPoint - endPoint))
      );

      const rotateX = -22 * (1 - progress);   // -22deg → 0deg
      const scale   =  1 + 0.08 * (1 - progress); // 1.08 → 1.0

      mockupRef.current.style.transform = `perspective(1400px) rotateX(${rotateX}deg) scale(${scale})`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    /* Outer: clips overflow + perspective origin */
    <div className="relative w-[1080px] mx-auto" style={{ perspective: "1400px" }}>

      {/* ── Blurred glow that rotates behind the card ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-60px -80px",
          zIndex: 0,
          borderRadius: "40px",
          overflow: "hidden",
          filter: "blur(80px)",
          opacity: 0.5,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "conic-gradient(from 0deg, #29abe2, #f7941d, #e84c3d, #8dc63f, #20a99d, #29abe2)",
            animation: "gradientSpin 6s linear infinite",
            transformOrigin: "center center",
          }}
        />
      </div>

      {/* ── Mockup card ── */}
      <div
        ref={mockupRef}
        style={{
          position: "relative",
          width: "100%",
          height: "604px",
          borderRadius: "16px",
          transformOrigin: "center bottom",
          willChange: "transform",
          zIndex: 1,
        }}
      >
        {/* Spinning gradient border (2 px) */}
        <div
          style={{
            position: "absolute",
            inset: "-2px",
            borderRadius: "18px",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "conic-gradient(from 0deg, #29abe2, #f7941d, #e84c3d, #8dc63f, #20a99d, #29abe2)",
              animation: "gradientSpin 6s linear infinite",
              transformOrigin: "center center",
            }}
          />
        </div>

        {/* White inner */}
        <div
          style={{
            position: "absolute",
            inset: "2px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
