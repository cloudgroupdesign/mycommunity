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
      className={`bg-white w-full flex flex-col items-center px-6 ${stageClass}`}
      style={{ paddingTop: 72, paddingBottom: 120, gap: 72 }}
    >
      {/* Text + buttons — 1080px */}
      <div
        className="w-full flex flex-col items-center text-center"
        style={{ maxWidth: 1080, gap: 40 }}
      >
        {/* h1 + subtitle */}
        <div className="w-full flex flex-col items-center text-center" style={{ gap: 32 }}>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: "78px",
              letterSpacing: "-0.01em",
              color: "#141414",
              width: "100%",
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

          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "30px",
              color: "#4b5563",
              width: "100%",
              opacity: stage >= 2 ? 1 : 0,
              transform: stage >= 2 ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            My Community об&apos;єднує продажі, комунікації, задачі, команди,{" "}
            <br />
            виробництво, фінанси та аналітику в одному зручному просторі.{" "}
            <br />
            Без хаосу. Без десятків сервісів.
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "flex-start",
            opacity: stage >= 3 ? 1 : 0,
            transform: stage >= 3 ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <button
            style={{
              background: "#29abe2",
              color: "#fff",
              fontSize: 20,
              fontWeight: 600,
              lineHeight: "32px",
              padding: "14px 32px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Записатися на демо-перегляд
          </button>
          <button
            style={{
              background: "#fff",
              color: "#141414",
              fontSize: 20,
              fontWeight: 600,
              lineHeight: "32px",
              padding: "14px 32px",
              borderRadius: 12,
              border: "1px solid #e5e6ea",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Play size={16} />
            Переглянути демо
          </button>
        </div>
      </div>

      {/* Mockup — повна ширина 1080px, без паддінгу */}
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
