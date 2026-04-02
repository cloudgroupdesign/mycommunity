"use client";

import { useEffect, useState } from "react";
import HeroMockup from "./hero-mockup";
import { useDemoModal } from "@/components/shared/modal-context";

const H1_LINES = [
  ["Єдина", "система"],
  ["управління", "бізнесом"],
  ["для", "підприємців"],
];
const WORD_COUNT = H1_LINES.flat().length;
const H1_ANIM_DURATION = WORD_COUNT * 120 + 800;

export default function Hero() {
  const [stage, setStage] = useState(0);
  const { open: openModal } = useDemoModal();

  useEffect(() => {
    const start = () => {
      setStage(1);
      setTimeout(() => setStage(2), H1_ANIM_DURATION * 0.5);
      setTimeout(() => setStage(3), H1_ANIM_DURATION * 0.8);
    };
    const fallback = setTimeout(start, 300);
    return () => clearTimeout(fallback);
  }, []);

  const stageClass = [
    stage >= 1 ? "hero-stage-1" : "",
    stage >= 2 ? "hero-stage-2" : "",
    stage >= 3 ? "hero-stage-3" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={`bg-white w-full flex flex-col items-center px-4 md:px-6 pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-[72px] lg:pb-[120px] gap-10 md:gap-14 lg:gap-20 ${stageClass}`}
    >
      {/* Text + buttons */}
      <div className="w-full flex flex-col items-center text-center gap-8 md:gap-10" style={{ maxWidth: 1080 }}>
        {/* h1 + subtitle */}
        <div className="w-full flex flex-col items-center text-center gap-5 md:gap-7 lg:gap-8">
          <h1 className="hero-h1">
            {H1_LINES.map((line, li) => (
              <span key={li} style={{ display: "block" }}>
                {line.map((word, wi) => {
                  const globalIndex =
                    H1_LINES.slice(0, li).reduce((a, l) => a + l.length, 0) + wi;
                  return (
                    <span key={wi} className="hero-word-outer">
                      <span
                        className="hero-word-inner"
                        style={{ animationDelay: `${0.1 * (globalIndex + 1)}s` }}
                      >
                        {word}
                      </span>
                      {wi < line.length - 1 ? "\u00A0" : ""}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p
            className="text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[32px] font-normal text-[#4b5563]"
            style={{
              maxWidth: 640,
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            My Community об'єднує продажі, комунікації, задачі та команди,
            <br className="hidden lg:block" />
            {" "}виробництво, фінанси та аналітику в одному зручному просторі.
            <br className="hidden lg:block" />
            {" "}Без хаосу. Без десятків сервісів.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full sm:w-auto"
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <button
            className="btn-primary w-full sm:w-auto"
            onClick={openModal}
            style={{
              background: "#29abe2",
              color: "#fff",
              fontSize: 17,
              fontWeight: 600,
              lineHeight: "28px",
              padding: "13px 28px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Записатися на демо-перегляд
          </button>
          <button
            className="btn-secondary w-full sm:w-auto"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#fff",
              color: "#141414",
              fontSize: 17,
              fontWeight: 600,
              lineHeight: "28px",
              padding: "13px 28px",
              borderRadius: 12,
              border: "1px solid #e5e6ea",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            Переглянути можливості
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 5l5 5-5 5" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mockup */}
      <div
        className="w-full"
        style={{
          maxWidth: 1080,
          isolation: "isolate",
          opacity: stage >= 3 ? 1 : 0,
          transform: stage >= 3 ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <HeroMockup />
      </div>
    </section>
  );
}
