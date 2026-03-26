"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@geist-ui/icons";

/* ── Fill-іконки (Heroicons 20/solid paths) ── */
const FunnelFill = () => (
  <svg width="17" height="17" viewBox="2.5 1 15.5 17.5" fill="white">
    <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.66 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74z" clipRule="evenodd" />
  </svg>
);
const CheckCircleFill = () => (
  <svg width="17" height="17" viewBox="2 2 16 16" fill="white">
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
  </svg>
);
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
const UsersFill = () => (
  <svg width="17" height="17" viewBox="1.5 2 18 15" fill="white">
    <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 17a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
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
    title: "HR, фінанси та склад",
    desc: "Управління командою та ролями, контроль ефективності співробітників, облік доходів і витрат, управління складом і ресурсами.",
    accent: "#b747f6",
    dark: "#5a1a7a",
    bg: "#f3e8fd",
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];

  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      <div className="w-full flex flex-col gap-12" style={{ maxWidth: 1080 }}>

        {/* Заголовок */}
        <div className="flex flex-col gap-5 items-center text-center">
          <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
            Можливості My Community
          </h2>
          <p className="font-normal text-[18px] leading-[30px] text-[#727272]" style={{ maxWidth: 580 }}>
            Все для управління бізнесом в одній системі
          </p>
        </div>

        {/* Таби */}
        <div className="flex flex-wrap justify-center" style={{ gap: 16 }}>
          {slides.map((s, i) => {
            const active = i === current;
            return (
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

        <div
          className="w-full rounded-2xl overflow-hidden flex flex-col lg:flex-row"
          style={{ height: 440 }}
        >
          {/* Ліворуч — кольорова зона з мокапом */}
          <div
            className="flex-shrink-0 flex items-end justify-center"
            style={{
              flex: "0 0 60%",
              background: slide.accent,
              transition: "background 0.35s ease",
              padding: "40px 40px 0",
            }}
          >
            {/* Мокап-placeholder — замінити на <Image> */}
            <div
              style={{
                width: "100%",
                height: 360,
                background: "rgba(255,255,255,0.15)",
                borderRadius: "12px 12px 0 0",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            />
          </div>

          {/* Праворуч — текст */}
          <div
            className="flex flex-col justify-start"
            style={{
              gap: 24,
              flex: 1,
              background: slide.bg,
              transition: "background 0.35s ease",
              paddingTop: 56,
              paddingLeft: 48,
              paddingRight: 64,
              paddingBottom: 40,
            }}
          >
            <h3
              className="font-semibold text-[32px] leading-[40px] tracking-tight"
              style={{ color: slide.dark }}
            >
              {slide.title}
            </h3>
            <p
              className="font-normal text-[18px] leading-[30px]"
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
