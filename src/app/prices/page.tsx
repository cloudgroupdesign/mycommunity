import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const FunnelFill = () => (
  <svg width="20" height="20" viewBox="2.5 1 15.5 17.5" fill="white">
    <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 0 1 .628.74v2.288a2.25 2.25 0 0 1-.659 1.59l-4.682 4.683a2.25 2.25 0 0 0-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 0 1 8 18.25v-5.757a2.25 2.25 0 0 0-.659-1.591L2.66 6.22A2.25 2.25 0 0 1 2 4.629V2.34a.75.75 0 0 1 .628-.74z" clipRule="evenodd" />
  </svg>
);
const WrenchFill = () => (
  <svg width="20" height="20" viewBox="2 2 16 16" fill="white">
    <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-.438 1.75a.75.75 0 0 1-.943.527l-1.706-.427-1.645 6.585 1.705.426a.75.75 0 0 1 .527.922l-.438 1.75a.75.75 0 0 1-.922.527l-4.5-1.125a.75.75 0 0 1-.527-.921l.438-1.75a.75.75 0 0 1 .922-.528l1.707.427 1.644-6.584-1.706-.427a.75.75 0 0 1-.527-.922l.438-1.75a.75.75 0 0 1 .921-.527l4.5 1.125Z" clipRule="evenodd" />
  </svg>
);
const CheckCircleFill = () => (
  <svg width="20" height="20" viewBox="2 2 16 16" fill="white">
    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
  </svg>
);
const CubeFill = () => (
  <svg width="20" height="20" viewBox="2 1.5 16 17" fill="white">
    <path d="M10.75 1.566a1.5 1.5 0 0 0-1.5 0L2.5 5.5v9l7.75 4.434L18 14.5v-9l-7.25-3.934Z" />
  </svg>
);
const UsersFill = () => (
  <svg width="20" height="20" viewBox="1.5 2 18 15" fill="white">
    <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 17a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
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
    Icon: WrenchFill,
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
        <section className="w-full flex flex-col items-center text-center px-6 pt-24 pb-16">
          <div className="flex flex-col gap-5 items-center" style={{ maxWidth: 640 }}>
            <h1
              style={{
                fontSize: 72,
                fontWeight: 600,
                lineHeight: "78px",
                letterSpacing: "-0.01em",
                color: "#141414",
              }}
            >
              Прозорі ціни для вашого бізнесу
            </h1>
            <p style={{ fontSize: 18, lineHeight: "30px", color: "#727272", fontWeight: 400 }}>
              Обирайте модулі, які потрібні саме вам. Платіть лише за те, що використовуєте.
            </p>
          </div>
        </section>

        {/* Module cards */}
        <section className="w-full px-6 pb-16">
          <div
            className="w-full mx-auto grid gap-5"
            style={{
              maxWidth: 1080,
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            }}
          >
            {modules.map((m) => (
              <div
                key={m.label}
                style={{
                  background: m.bg,
                  borderRadius: 20,
                  padding: "32px 32px 36px",
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
        </section>

        {/* Bundle + Setup row */}
        <section className="w-full px-6 pb-24">
          <div
            className="w-full mx-auto grid gap-5"
            style={{
              maxWidth: 1080,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* Bundle */}
            <div
              style={{
                background: "#141414",
                borderRadius: 20,
                padding: "40px 40px 44px",
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

              <button
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
              </button>
            </div>

            {/* Setup */}
            <div
              style={{
                background: "#f5f5f7",
                borderRadius: 20,
                padding: "40px 40px 44px",
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

              <button
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
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
