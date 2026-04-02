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
  <svg width="20" height="20" viewBox="0 0 16 16" fill="white">
    <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 13.5 14.5l1.95-1.955a.5.5 0 0 0-.017-.707l-8.5-8.333.042-.438z" />
  </svg>
);
const CubeFill = () => (
  <svg width="20" height="20" viewBox="2 1.5 16 17" fill="white">
    <path d="M10.75 1.566a1.5 1.5 0 0 0-1.5 0L2.5 5.5v9l7.75 4.434L18 14.5v-9l-7.25-3.934Z" />
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
    desc: "Управління командою та ролями, контроль ефективності, облік доходів і витрат.",
    price: 29,
    accent: "#b747f6",
    bg: "#f3e8fd",
    dark: "#5a1a7a",
    Icon: UsersFill,
  },
];

const totalBase = modules.reduce((s, m) => s + m.price, 0);
const totalBundle = Math.round(totalBase * 1.2);

export default function PricesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">

        {/* Hero */}
        <section className="w-full flex flex-col items-center text-center px-4 md:px-6 pt-10 pb-10 md:pt-16 md:pb-14 lg:pt-24 lg:pb-16">
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
                  Підключіть всі 5 модулів і отримайте повний контроль над бізнесом.
                  До загальної суми додається 20%.
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
