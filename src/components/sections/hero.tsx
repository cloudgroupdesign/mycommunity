"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "@geist-ui/icons";
import HeroMockup from "./hero-mockup";

const H1_LINES = [
  ["Єдина", "система"],
  ["управління", "бізнесом"],
  ["для", "підприємців"],
];
const WORD_COUNT = H1_LINES.flat().length;
const H1_ANIM_DURATION = WORD_COUNT * 120 + 800;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);

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
      ref={sectionRef}
      className={`bg-white ${stageClass}`}
      style={{ paddingTop: 80 }}
    >
      <div
        className="max-w-[1080px] mx-auto px-6 lg:px-8 text-center"
        style={{ paddingTop: 64, paddingBottom: 72 }}
      >
        {/* H1 — word-by-word animation */}
        <h1
          className="mb-8"
          style={{
            fontSize: "clamp(38px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#141414",
          }}
        >
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

        {/* Subtitle */}
        <div
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            className="max-w-2xl mx-auto mb-12"
            style={{
              fontSize: 20,
              lineHeight: 1.6,
              color: "#4B5563",
            }}
          >
            My Community об&apos;єднує продажі, комунікації, задачі, команди,
            виробництво, фінанси та аналітику в одному зручному просторі.
            <br />
            Без хаосу. Без десятків сервісів.
          </p>
        </div>

        {/* Buttons + stats */}
        <div
          style={{
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 whitespace-nowrap">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 text-white rounded-xl px-8 py-4 transition-all duration-200 hover:opacity-90"
              style={{ background: "#29ABE2", fontSize: 20, fontWeight: 600 }}
            >
              Записатися на демо-перегляд
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 border border-gray-200 transition-all duration-200 hover:bg-gray-50"
              style={{ color: "#141414", fontSize: 20, fontWeight: 600 }}
            >
              <Play size={20} />
              Переглянути демо
            </a>
          </div>

          {/* Social proof */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
            style={{ color: "#6B7280" }}
          >
            <div className="flex items-center gap-1.5">
              <span style={{ color: "#FBBF24" }}>★★★★★</span>
              <span className="font-semibold" style={{ color: "#141414" }}>
                4.9
              </span>
              <span>· 200+ відгуків</span>
            </div>
            <span className="hidden sm:block text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: "#141414" }}>
                500+
              </span>
              <span>компаній довіряють</span>
            </div>
            <span className="hidden sm:block text-gray-300">|</span>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold" style={{ color: "#141414" }}>
                10+
              </span>
              <span>років досвіду команди</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mockup */}
      <div
        className="max-w-[1080px] mx-auto px-6 lg:px-8"
        style={{
          paddingBottom: 96,
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
