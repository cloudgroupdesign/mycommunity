"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@geist-ui/icons";

const slides = [
  {
    title: "Створена підприємцями для підприємців",
    desc: "Ми самі були в ситуації наших клієнтів. My Community створена людьми, які розуміють реальні виклики бізнесу — без зайвої складності та корпоративного хаосу. Кожна функція продумана під реальний запит, а не під звіти для ради директорів.",
    accent: "#29ABE2",
    dark: "#0a5a78",
    bg: "#e8f5fc",
  },
  {
    title: "Легка в управлінні та масштабуванні",
    desc: "Простий інтерфейс без тривалого навчання. Від старту до повного запуску — дні, а не місяці. Система росте разом з вашим бізнесом: додавайте модулі та користувачів без зупинки процесів.",
    accent: "#F7941D",
    dark: "#7a3e00",
    bg: "#fef3e3",
  },
  {
    title: "Доступна альтернатива дорогим міжнародним системам",
    desc: "Замість SAP чи Salesforce, які впроваджуються пів року і коштують десятки тисяч доларів — My Community запускається швидко та коштує адекватно. Повний функціонал без переплати за бренд.",
    accent: "#E84C3D",
    dark: "#7a150d",
    bg: "#fde9e7",
  },
  {
    title: "Швидке впровадження без складних процесів",
    desc: "Ми є і розробниками, і впроваджувачами. Тому налаштуємо систему під ваш бізнес без посередників — саме так, як потрібно вам. Жодних затягнутих проєктів і консультантів з почасовою оплатою.",
    accent: "#8DC63F",
    dark: "#3a5900",
    bg: "#eef7e2",
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);

  const go = (next: number) => setCurrent((next + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      <div className="w-full flex flex-col gap-14" style={{ maxWidth: 1080 }}>

        {/* Заголовок */}
        <div className="flex flex-col gap-5 items-center text-center">
          <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
            Чим My Community відрізняється
          </h2>
          <p className="font-normal text-[18px] leading-[30px] text-[#727272]" style={{ maxWidth: 580 }}>
            Ми не просто ще один ERP-інструмент — це платформа, побудована з реального досвіду впровадження бізнес-процесів.
          </p>
        </div>

        {/* Слайдер */}
        <div className="relative">

          {/* Ліва стрілка */}
          <button
            onClick={() => go(current - 1)}
            aria-label="Попередній"
            className="absolute flex items-center justify-center rounded-full bg-white border border-[#e5e6ea] shadow-md hover:border-[#141414] transition-colors"
            style={{
              left: -24,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              zIndex: 10,
            }}
          >
            <ChevronLeft size={20} color="#141414" />
          </button>

          {/* Картка слайду */}
          <div
            className="w-full rounded-2xl overflow-hidden flex flex-col lg:flex-row"
            style={{ minHeight: 460 }}
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
                  height: 320,
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "12px 12px 0 0",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              />
            </div>

            {/* Праворуч — текст */}
            <div
              className="flex flex-col justify-center gap-6 p-10 lg:p-14"
              style={{
                flex: 1,
                background: slide.bg,
                transition: "background 0.35s ease",
              }}
            >
              {/* Лічильник */}
              <p
                className="font-medium text-[13px] leading-5 tracking-widest uppercase"
                style={{ color: slide.accent }}
              >
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>

              {/* Заголовок */}
              <h3
                className="font-semibold text-[30px] leading-[38px] tracking-tight"
                style={{ color: slide.dark }}
              >
                {slide.title}
              </h3>

              {/* Опис */}
              <p
                className="font-normal text-[16px] leading-7"
                style={{ color: slide.dark, opacity: 0.72 }}
              >
                {slide.desc}
              </p>
            </div>
          </div>

          {/* Права стрілка */}
          <button
            onClick={() => go(current + 1)}
            aria-label="Наступний"
            className="absolute flex items-center justify-center rounded-full bg-white border border-[#e5e6ea] shadow-md hover:border-[#141414] transition-colors"
            style={{
              right: -24,
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              zIndex: 10,
            }}
          >
            <ChevronRight size={20} color="#141414" />
          </button>
        </div>

      </div>
    </section>
  );
}
