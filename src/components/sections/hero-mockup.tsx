"use client";

import { useEffect, useRef } from "react";

export default function HeroMockup() {
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let ticking = false;
    let targetScroll = 1;

    const measureTarget = () => {
      if (!mockupRef.current) return;
      const mockupOffsetTop =
        mockupRef.current.getBoundingClientRect().top +
        window.scrollY +
        mockupRef.current.offsetHeight / 2;
      targetScroll = Math.max(1, mockupOffsetTop - window.innerHeight / 2);
    };

    const update = () => {
      ticking = false;
      if (!mockupRef.current) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / targetScroll));
      const rotateX = 24 * (1 - progress);
      const scale   = 0.88 + 0.12 * progress;
      mockupRef.current.style.transform =
        `perspective(1200px) rotateX(${rotateX}deg) scale(${scale})`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => { measureTarget(); update(); };

    measureTarget();

    if (window.scrollY > 0 && mockupRef.current) {
      mockupRef.current.style.transition =
        "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      update();
      const tid = setTimeout(() => {
        if (mockupRef.current) mockupRef.current.style.transition = "none";
      }, 750);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
      return () => {
        clearTimeout(tid);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        if (rafId !== null) cancelAnimationFrame(rafId);
      };
    }

    if (mockupRef.current) mockupRef.current.style.transition = "none";
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={mockupRef}
      style={{
        position: "relative",
        transformOrigin: "center top",
        transform: "perspective(1200px) rotateX(24deg) scale(0.88)",
        transition: "none",
        isolation: "isolate",
      }}
    >
      {/* Blurred glow shadow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 18,
          overflow: "hidden",
          filter: "blur(48px)",
          opacity: 0.16,
          transform: "scale(1.08) translateZ(0) translateY(16px)",
          zIndex: -1,
          /* без contain — щоб не обрізало по краях */
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
            background:
              "conic-gradient(from 0deg, #29ABE2, #F7941D, #E84C3D, #8DC63F, #20A99D, #29ABE2)",
            animation: "gradientSpin 5s linear infinite",
          }}
        />
      </div>

      {/* Gradient border через CSS mask — без overflow:hidden, куточки не зникають */}
      <div className="mockup-gradient-border" style={{ position: "relative" }}>
        {/* Inner content (photo/video placeholder) */}
        <div
          style={{
            position: "relative",
            borderRadius: 13,
            background: "#F8FAFC",
            height: 588,
          }}
        />
      </div>
    </div>
  );
}
