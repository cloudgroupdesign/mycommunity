"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@geist-ui/icons";
import { FunnelFill, CheckCircleFill, UsersFill } from "@/components/shared/icons";

/* ── Fill-іконки (Heroicons 20/solid paths) ── */
type IconProps = { size?: number; fill?: string };
const ChatFill = ({ size = 17, fill = "white" }: IconProps) => (
  <svg width={size} height={size} viewBox="2 4 16 13" fill={fill}>
    <path fillRule="evenodd" d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v5.5A2.75 2.75 0 0 1 15.25 15H8.614l-3.348 2.236A.75.75 0 0 1 4 16.75v-2.15A2.75 2.75 0 0 1 2 12.25v-5.5Z" clipRule="evenodd" />
  </svg>
);
const FolderFill = ({ size = 17, fill = "white" }: IconProps) => (
  <svg width={size} height={size} viewBox="2 2 16 15" fill={fill}>
    <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h3.879a2.5 2.5 0 0 1 1.768.732l.62.62c.162.162.38.253.609.253H15.5A2.5 2.5 0 0 1 18 6H2V4.5Z" />
    <path fillRule="evenodd" d="M2 7h16v7.5A2.5 2.5 0 0 1 15.5 17h-11A2.5 2.5 0 0 1 2 14.5V7Z" clipRule="evenodd" />
  </svg>
);
const WarehouseFill = ({ size = 17, fill = "white" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill={fill}>
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
  const [hovered, setHovered] = useState<number | null>(null);

  const slide = slides[current];

  return (
    <section id="features" className="w-full flex flex-col items-center px-4 md:px-6 py-14 md:py-20 lg:py-24">
      <div className="w-full flex flex-col gap-8 md:gap-12" style={{ maxWidth: 1080 }}>

        {/* Заголовок */}
        <div className="flex flex-col gap-4 md:gap-5 items-center text-center">
          <h2 className="section-h2">
            Можливості My Community
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#727272]" style={{ maxWidth: 580 }}>
            Все для управління бізнесом в одній системі
          </p>
        </div>

        {/* Таби — mobile+tablet: horizontal scroll; lg+: flex-wrap centered */}
        <div
          className="flex lg:flex-wrap lg:justify-center gap-4"
          style={{ overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {slides.map((s, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="features-tab-btn"
                onMouseEnter={() => { if (!active) setHovered(i); }}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  padding: 24,
                  borderRadius: 16,
                  border: "none",
                  cursor: "pointer",
                  width: 144,
                  background: active
                    ? s.accent + "12"
                    : hovered === i ? s.accent + "0F" : "transparent",
                  transition: "background 0.25s ease",
                }}
              >
                {/* Іконка з боксом — desktop/tablet */}
                <div
                  className="features-tab-icon-box"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    background: s.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <s.Icon size={22} />
                </div>

                {/* Іконка без боксу — mobile */}
                <div className="features-tab-icon-naked" style={{ flexShrink: 0, display: "none" }}>
                  <s.Icon size={24} fill={s.accent} />
                </div>

                {/* Назва */}
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "20px",
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

          {/* Картка: mobile — flex-col; md — grid 1.40fr:1fr 497px; lg — grid 1.40fr:1fr 417px */}
          <div
            className="w-full overflow-hidden flex flex-col md:grid md:h-[497px] lg:h-[417px]"
            style={{
              borderRadius: 24,
              gridTemplateColumns: "1.40fr 1fr",
            }}
          >
            {/* Ліворуч — зона фотографії */}
            <div
              className="w-full aspect-[342/231] md:aspect-auto"
              style={{
                background: slide.accent,
                transition: "background 0.35s ease",
              }}
            >
              {/* TODO: замінити на <Image src="..." /> */}
            </div>

            {/* Праворуч — текст */}
            <div
              className="flex flex-col justify-start p-8 md:px-12 md:py-[58px] gap-4"
              style={{
                background: slide.bg,
                transition: "background 0.35s ease",
              }}
            >
              <h3
                className="font-semibold text-[24px] md:text-[32px] leading-[30px] md:leading-[40px]"
                style={{ color: slide.dark, letterSpacing: "-0.01em" }}
              >
                {slide.title}
              </h3>
              <p
                className="font-normal text-[15px] md:text-[16px]"
                style={{ color: slide.dark, opacity: 0.72, lineHeight: "1.6" }}
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
