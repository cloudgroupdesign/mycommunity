export const revalidate = 86400; // ISR: revalidate daily

import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import DemoCTAButton from "@/components/shared/demo-cta-button";
import { FunnelFill, CheckCircleFill, UsersFill } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Ціни",
  description:
    "Прозорі ціни на модулі My Community. Обирайте CRM, задачі, виробництво, склад та HR-процеси — платіть лише за те, що використовуєте.",
};

const HammerFill = () => (
  <svg width="20" height="20" viewBox="0 0.86 15.45 13.64" fill="white">
    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 13.5 14.5l1.95-1.955a.5.5 0 0 0-.017-.707l-8.5-8.333.042-.438z" />
  </svg>
);
const CubeFill = () => (
  <svg width="20" height="20" viewBox="2.5 1.5 15.5 17.5" fill="white">
    <path d="M10.75 1.566a1.5 1.5 0 0 0-1.5 0L2.5 5.5v9l7.75 4.434L18 14.5v-9l-7.25-3.934Z" />
  </svg>
);
const CashFill = () => (
  <svg width="20" height="20" viewBox="0.4 0.69 22.2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6104 0.686523C9.43476 0.686523 7.30802 1.33166 5.49908 2.54036C3.69014 3.74905 2.28025 5.46702 1.44768 7.477C0.615118 9.48699 0.397281 11.6987 0.821718 13.8325C1.24616 15.9663 2.2938 17.9263 3.83218 19.4647C5.37056 21.0031 7.33057 22.0507 9.46436 22.4752C11.5982 22.8996 13.8099 22.6818 15.8199 21.8492C17.8299 21.0166 19.5478 19.6067 20.7565 17.7978C21.9652 15.9889 22.6104 13.8621 22.6104 11.6865C22.6073 8.77009 21.4474 5.97398 19.3851 3.91175C17.3229 1.84952 14.5268 0.689603 11.6104 0.686523ZM12.8796 16.7634H12.4565V17.6096C12.4565 17.834 12.3674 18.0492 12.2087 18.2079C12.05 18.3666 11.8348 18.4558 11.6104 18.4558C11.3859 18.4558 11.1707 18.3666 11.012 18.2079C10.8533 18.0492 10.7642 17.834 10.7642 17.6096V16.7634H9.07189C8.84748 16.7634 8.63226 16.6743 8.47357 16.5156C8.31489 16.3569 8.22574 16.1417 8.22574 15.9173C8.22574 15.6929 8.31489 15.4777 8.47357 15.319C8.63226 15.1603 8.84748 15.0711 9.07189 15.0711H12.8796C13.2162 15.0711 13.539 14.9374 13.7771 14.6994C14.0151 14.4614 14.1488 14.1385 14.1488 13.8019C14.1488 13.4653 14.0151 13.1425 13.7771 12.9044C13.539 12.6664 13.2162 12.5327 12.8796 12.5327H10.3411C9.55568 12.5327 8.8024 12.2207 8.247 11.6653C7.6916 11.1099 7.37959 10.3566 7.37959 9.57114C7.37959 8.78569 7.6916 8.03241 8.247 7.47701C8.8024 6.92162 9.55568 6.6096 10.3411 6.6096H10.7642V5.76345C10.7642 5.53903 10.8533 5.32381 11.012 5.16512C11.1707 5.00644 11.3859 4.91729 11.6104 4.91729C11.8348 4.91729 12.05 5.00644 12.2087 5.16512C12.3674 5.32381 12.4565 5.53903 12.4565 5.76345V6.6096H14.1488C14.3732 6.6096 14.5885 6.69875 14.7471 6.85743C14.9058 7.01612 14.995 7.23134 14.995 7.45575C14.995 7.68017 14.9058 7.89539 14.7471 8.05407C14.5885 8.21276 14.3732 8.30191 14.1488 8.30191H10.3411C10.0045 8.30191 9.68167 8.43563 9.44364 8.67366C9.20562 8.91168 9.07189 9.23452 9.07189 9.57114C9.07189 9.90776 9.20562 10.2306 9.44364 10.4686C9.68167 10.7066 10.0045 10.8404 10.3411 10.8404H12.8796C13.665 10.8404 14.4183 11.1524 14.9737 11.7078C15.5291 12.2632 15.8411 13.0165 15.8411 13.8019C15.8411 14.5874 15.5291 15.3406 14.9737 15.896C14.4183 16.4514 13.665 16.7634 12.8796 16.7634Z" fill="white"/>
  </svg>
);

const modules = [
  {
    label: "CRM та продажі",
    desc: "Воронки продажів, управління клієнтами та угодами, аналітика та KPI, АІ-агент.",
    price: 49,
    accent: "#367bf6",
    bg: "#eef2fc",
    dark: "#1a3a7a",
    Icon: FunnelFill,
  },
  {
    label: "Виробництво",
    desc: "Управління виробничими циклами, контроль етапів та строків, узгоджена робота команд.",
    price: 129,
    accent: "#ea463e",
    bg: "#fce4e2",
    dark: "#6a1a16",
    Icon: HammerFill,
  },
  {
    label: "Проєкти та задачі",
    desc: "Kanban, діаграма Ганта, постановка задач, контроль дедлайнів і пріоритетів.",
    price: 29,
    accent: "#34a853",
    bg: "#e8f5e9",
    dark: "#1a4a25",
    Icon: CheckCircleFill,
  },
  {
    label: "Склад",
    desc: "Облік товарів та залишків, управління складськими операціями та ресурсами.",
    price: 49,
    accent: "#f7a117",
    bg: "#fff8e1",
    dark: "#7a4a00",
    Icon: CubeFill,
  },
  {
    label: "HR-процеси",
    desc: "Управління командою та ролями, контроль ефективності та навантаження персоналу.",
    price: 29,
    accent: "#b747f6",
    bg: "#f3e8fd",
    dark: "#5a1a7a",
    Icon: UsersFill,
  },
  {
    label: "Фінанси",
    desc: "Облік доходів і витрат, управління рахунками, контроль фінансових потоків та звіти.",
    price: 29,
    accent: "#20a99d",
    bg: "#e0f5f4",
    dark: "#0a4a46",
    Icon: CashFill,
  },
];

const totalBase = modules.reduce((s, m) => s + m.price, 0); // 314
const totalBundle = Math.floor(totalBase * 0.7); // 219

export default function PricesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">

        {/* Hero */}
        <section className="w-full flex flex-col items-center text-center px-4 md:px-6 pt-10 md:pt-14 lg:pt-[72px] pb-0">
          <div className="flex flex-col gap-4 md:gap-5 items-center" style={{ maxWidth: 640 }}>
            <h1 className="hero-h1">
              Прозорі ціни для вашого бізнесу
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#727272]">
              Обирайте модулі під свій бізнес. Ціни фіксовані — жодних прихованих платежів.{" "}
              <span className="text-[#141414] font-medium">
                Підключення відбувається після персональної демонстрації системи.
              </span>
            </p>
          </div>
          <p className="text-[15px] md:text-[16px] text-[#9ca3af]" style={{ marginTop: 56, marginBottom: 56 }}>
            Вартість кожного модуля розрахована для команди{" "}
            <span className="font-medium text-[#6b7280]">до 10 користувачів</span> включно.
          </p>
        </section>

        {/* Module cards */}
        <section className="w-full px-4 md:px-6 pb-10 md:pb-14 lg:pb-16">
          <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" style={{ maxWidth: 1080 }}>
            {modules.map((m) => (
              <div
                key={m.label}
                style={{
                  background: m.bg,
                  borderRadius: 20,
                  padding: "28px 24px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: m.accent,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <m.Icon />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  <p style={{ fontSize: 20, fontWeight: 600, color: m.dark, lineHeight: "28px" }}>
                    {m.label}
                  </p>
                  <p style={{ fontSize: 15, lineHeight: "24px", color: m.dark, opacity: 0.72 }}>
                    {m.desc}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontSize: 36, fontWeight: 700, color: m.dark, lineHeight: 1 }}>
                    ${m.price}
                  </span>
                  <span style={{ fontSize: 15, color: m.dark, opacity: 0.55 }}>/міс</span>
                </div>
              </div>
            ))}

          </div>
          {/* Кнопка по центру після карток */}
          <div className="w-full mx-auto flex justify-center" style={{ maxWidth: 1080, paddingTop: 64 }}>
            <DemoCTAButton
              style={{
                background: "#29abe2",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                padding: "14px 36px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Записатися на демо
            </DemoCTAButton>
          </div>
        </section>

        {/* Bundle + Setup row */}
        <section className="w-full px-4 md:px-6 pb-16 md:pb-20 lg:pb-24">
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" style={{ maxWidth: 1080 }}>
            {/* Bundle */}
            <div
              style={{
                background: "#141414",
                borderRadius: 20,
                padding: "32px 28px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ fontSize: 22, fontWeight: 600, color: "#ffffff", lineHeight: "30px" }}>
                  Всі модулі разом
                </p>
                <p style={{ fontSize: 15, lineHeight: "24px", color: "rgba(255,255,255,0.55)" }}>
                  Підключіть всі 6 модулів і отримайте повний контроль над бізнесом.
                  Знижка 30% при підключенні всіх модулів одразу.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "line-through",
                  }}
                >
                  ${totalBase}/міс
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: 48, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>
                  ${totalBundle}
                </span>
                <span style={{ fontSize: 16, color: "rgba(255,255,255,0.55)" }}>/міс</span>
              </div>

              <DemoCTAButton
                className="btn-primary"
                style={{
                  marginTop: 8,
                  background: "#29abe2",
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "13px 28px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  whiteSpace: "nowrap",
                }}
              >
                Записатися на демо
              </DemoCTAButton>
            </div>

            {/* Setup */}
            <div
              style={{
                background: "#f5f5f7",
                borderRadius: 20,
                padding: "32px 28px 36px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <p style={{ fontSize: 22, fontWeight: 600, color: "#141414", lineHeight: "30px" }}>
                  Налаштування системи
                </p>
                <p style={{ fontSize: 15, lineHeight: "24px", color: "#727272" }}>
                  Наша команда допоможе налаштувати систему під ваші процеси.
                  Вартість залежить від кількості підключених модулів.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: "auto" }}>
                <span style={{ fontSize: 22, fontWeight: 500, color: "#141414" }}>від</span>
                <span style={{ fontSize: 48, fontWeight: 700, color: "#141414", lineHeight: 1, marginLeft: 8 }}>
                  $300
                </span>
                <span style={{ fontSize: 16, color: "#727272" }}>за блок</span>
              </div>

              <DemoCTAButton
                className="btn-dark"
                style={{
                  marginTop: 8,
                  background: "#141414",
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 600,
                  padding: "13px 28px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  whiteSpace: "nowrap",
                }}
              >
                Отримати консультацію
              </DemoCTAButton>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
