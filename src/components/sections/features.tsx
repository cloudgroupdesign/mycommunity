"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@geist-ui/icons";
import { FunnelFill, CheckCircleFill, UsersFill } from "@/components/shared/icons";

/* ── Fill-іконки (Heroicons 20/solid paths) ── */
const ChatFill = () => (
  <svg width="17" height="17" viewBox="2 4 16 13" fill="white">
    <path fillRule="evenodd" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v5.5A2.75 2.75 0 0 1 15.25 15H8.614l-3.348 2.236A.75.75 0 0 1 4 16.75v-2.15A2.75 2.75 0 0 1 2 12.25v-5.5Z" clipRule="evenodd" />
  </svg>
);
const FolderFill = () => (
  <svg width="17" height="17" viewBox="2 2 16 15" fill="white">
    <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h3.879a2.5 2.5 0 0 1 1.768.732l.62.62c.162.162.38.253.609.253H15.5A2.5 2.5 0 0 1 18 6H2V4.5Z" />
    <path fillRule="evenodd" d="M2 7h16v7.5A2.5 2.5 0 0 1 15.5 17h-11A2.5 2.5 0 0 1 2 14.5V7Z" clipRule="evenodd" />
  </svg>
);
const WarehouseFill = () => (
  <svg width="17" height="17" viewBox="0 0 20 20" fill="white">
    <path d="M2 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z" />
    <path fillRule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 0 1-1.99 1.79H4.802a2 2 0 0 1-1.99-1.79L2 7.5ZM7 11a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" clipRule="evenodd" />
  </svg>
);

const slides = [
  {
    label: "CRM-системи",
    Icon: FunnelFill,
    title: "CRM та продажі",
    desc: "Воронки продажів, управління клієнтами та угодами, повна історія взаємодій, аналітика продажів та KPI, інтеграції та автоматизації у продажах, АІ-агент, який спілкується з клієнтами — і все це підтягується в угоди.",
    accent: "#367bf6",
    dark: "#1a3a7a",
    bg: "#eef2fc",
  },
  {
    label: "Завдання",
    Icon: CheckCircleFill,
    title: "Управління задачами",
    desc: "Постановка задач співробітникам, контроль дедлайнів і пріоритетів, командні та персональні задачі, прив'язка задач до клієнтів і проєктів.",
    accent: "#34a853",
    dark: "#1a4a25",
    bg: "#e8f5e9",
  },
  {
    label: "Комунікація",
    Icon: ChatFill,
    title: "Омніканальні комунікації",
    desc: "Усі канали в одному інтерфейсі: Telegram, Viber, Instagram, WhatsApp — вся комунікація з клієнтом зберігається в My Community.",
    accent: "#f7a117",
    dark: "#7a4a00",
    bg: "#fff8e1",
  },
  {
    label: "Проєкти",
    Icon: FolderFill,
    title: "Проєкти та виробництво",
    desc: "Планування процесів (Kanban, діаграма Ганта), контроль етапів та строків, узгоджена робота команд, управління виробничими циклами.",
    accent: "#ea463e",
    dark: "#6a1a16",
    bg: "#fce4e2",
  },
  {
    label: "HR та фінанси",
    Icon: UsersFill,
    title: "HR та фінанси",
    desc: "Управління командою та ролями, контроль ефективності співробітників, облік доходів і витрат.",
    accent: "#b747f6",
    dark: "#5a1a7a",
    bg: "#f3e8fd",
  },
  {
    label: "Виробництво",
    Icon: WarehouseFill,
    title: "Виробництво та склади",
    desc: "Облік товарів та залишків, управління складськими операціями та ресурсами, контроль переміщень і списань.",
    accent: "#0fa3b1",
    dark: "#064a52",
    bg: "#e0f7fa",
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];

  return (
    <section id="features" className="w-full flex flex-col items-center px-4 md:px-6 py-14 md:py-20 lg:py-24">
      <div className="w-full flex flex-col gap-8 md:gap-12" style={{ maxWidth: 1080 }}>

        {/* Заголовок */}
        <div className="flex flex-col gap-4 md:gap-5 items-center text-center">
          <h2 className="section-h2">
            Можливості My Community
          </h2>
          <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-normal text-[#727272]" style={{ maxWidth: 580 }}>
            Все для управління бізнесом в одній системі
          </p>
        </div>

        {/* Таби */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-1 sm:gap-x-4 sm:gap-y-2">
          {slides.flatMap((s, i) => {
            const active = i === current;
            const btn = (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px 10px 10px",
                  borderRadius: 14,
                  border: "none",
                  cursor: "pointer",
                  background: active ? s.accent + "1a" : "transparent",
                  transition: "background 0.25s ease",
                  minWidth: 0,
                }}
              >
                {/* Іконка — fill, 20×20, padding 5px, rounded 6px */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: s.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <s.Icon />
                </div>

                {/* Назва */}
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                    lineHeight: "22px",
                    color: active ? s.accent : "#141414",
                    transition: "color 0.25s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.label}
                </span>
              </button>
            );
            if (i === 3) return [btn, <div key="break" className="hidden lg:block" style={{ flexBasis: "100%", height: 0 }} />];
            return btn;
          })}
        </div>

        {/* Слайд-картка + стрілки */}
        <div className="relative w-full">

          {/* Ліва стрілка */}
          <button
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
            aria-label="Попередній"
            className="features-nav-btn absolute flex items-center justify-center rounded-full bg-white shadow-md"
            style={{ left: -32, top: "50%", width: 64, height: 64, zIndex: 10, border: "none" }}
          >
            <ChevronLeft size={32} color="#141414" strokeWidth={2.5} />
          </button>

        <div className="w-full rounded-2xl overflow-hidden flex flex-col lg:flex-row lg:h-[440px]">
          {/* Ліворуч — кольорова зона з мокапом */}
          <div
            className="flex-shrink-0 flex items-end justify-center"
            style={{
              flex: "0 0 60%",
              background: slide.accent,
              transition: "background 0.35s ease",
              padding: "28px 28px 0",
            }}
          >
            {/* Мокап-placeholder — замінити на <Image> */}
            <div
              className="lg:h-[360px]"
              style={{
                width: "100%",
                height: 200,
                background: "rgba(255,255,255,0.15)",
                borderRadius: "12px 12px 0 0",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />
          </div>

          {/* Праворуч — текст */}
          <div
            className="flex flex-col justify-start py-12 px-7 lg:px-10 gap-4"
            style={{
              flex: 1,
              background: slide.bg,
              transition: "background 0.35s ease",
            }}
          >
            <h3
              className="font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[40px] tracking-tight"
              style={{ color: slide.dark }}
            >
              {slide.title}
            </h3>
            <p
              className="font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-[30px]"
              style={{ color: slide.dark, opacity: 0.72 }}
            >
              {slide.desc}
            </p>
          </div>
        </div>

          {/* Права стрілка */}
          <button
            onClick={() => setCurrent((current + 1) % slides.length)}
            aria-label="Наступний"
            className="features-nav-btn absolute flex items-center justify-center rounded-full bg-white shadow-md"
            style={{ right: -32, top: "50%", width: 64, height: 64, zIndex: 10, border: "none" }}
          >
            <ChevronRight size={32} color="#141414" strokeWidth={2.5} />
          </button>

        </div>

      </div>
    </section>
  );
}
