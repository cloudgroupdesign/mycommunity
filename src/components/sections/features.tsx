"use client";

import { useState } from "react";
import { Users, MessageSquare, CheckSquare, Grid, Briefcase, ChevronLeft, ChevronRight } from "@geist-ui/icons";

const slides = [
  {
    label: "CRM-системи",
    Icon: Users,
    title: "CRM та продажі",
    desc: "Воронки продажів, управління клієнтами та угодами, повна історія взаємодій, аналітика продажів та KPI, інтеграції та автоматизації у продажах, АІ-агент, який спілкується з клієнтами — і все це підтягується в угоди.",
    accent: "#3B6FD4",
    dark: "#1a3a7a",
    bg: "#eef2fc",
  },
  {
    label: "Комунікації",
    Icon: MessageSquare,
    title: "Омніканальні комунікації",
    desc: "Усі канали в одному інтерфейсі: Telegram, Viber, Instagram, WhatsApp — вся комунікація з клієнтом зберігається в My Community.",
    accent: "#20A99D",
    dark: "#0a5a54",
    bg: "#e4f5f4",
  },
  {
    label: "Завдання",
    Icon: CheckSquare,
    title: "Управління задачами",
    desc: "Постановка задач співробітникам, контроль дедлайнів і пріоритетів, командні та персональні задачі, прив'язка задач до клієнтів і проєктів.",
    accent: "#F7941D",
    dark: "#7a3e00",
    bg: "#fef3e3",
  },
  {
    label: "Проєкти",
    Icon: Grid,
    title: "Проєкти та виробництво",
    desc: "Планування процесів (Kanban, діаграма Ганта), контроль етапів та строків, узгоджена робота команд, управління виробничими циклами.",
    accent: "#8DC63F",
    dark: "#3a5900",
    bg: "#eef7e2",
  },
  {
    label: "HR та фінанси",
    Icon: Briefcase,
    title: "HR, фінанси та склад",
    desc: "Управління командою та ролями, контроль ефективності співробітників, облік доходів і витрат, управління складом і ресурсами.",
    accent: "#9B59B6",
    dark: "#52207a",
    bg: "#f4edf9",
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
        <div className="flex flex-wrap justify-center" style={{ gap: 8 }}>
          {slides.map((s, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 20px 12px 12px",
                  borderRadius: 16,
                  border: "none",
                  cursor: "pointer",
                  background: active ? s.accent + "18" : "transparent",
                  transition: "background 0.25s ease",
                  minWidth: 0,
                }}
              >
                {/* Іконка — завжди кольорова */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    background: s.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <s.Icon size={20} color="#fff" strokeWidth={2.5} />
                </div>

                {/* Назва — кольорова лише у активній табі */}
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
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
          style={{ height: 464 }}
        >
          {/* Ліворуч — кольорова зона з мокапом */}
          <div
            className="flex-shrink-0 flex items-end justify-center"
            style={{
              flex: "0 0 52%",
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
            className="flex flex-col justify-center p-10 lg:p-14"
            style={{
              gap: 24,
              flex: 1,
              background: slide.bg,
              transition: "background 0.35s ease",
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
