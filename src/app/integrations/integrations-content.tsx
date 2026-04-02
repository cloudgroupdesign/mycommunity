"use client";

import { useState } from "react";
import IntegrationCard, { type IntegrationItem } from "@/components/shared/integration-card";

const ALL: IntegrationItem[] = [
  { id: "google-calendar", name: "Google Calendar", desc: "Синхронізація зустрічей та подій команди в реальному часі.",        logo: "/google-calendar-v2.png" },
  { id: "zoom",            name: "Zoom",            desc: "Запускайте відеодзвінки прямо з картки клієнта або угоди.",          logo: "/zoom-v2.png" },
  { id: "telegram",        name: "Telegram",        desc: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram.",    logo: "/telegram-new.png" },
  { id: "viber",           name: "Viber",           desc: "Надсилайте повідомлення та сповіщення клієнтам через Viber.",        logo: "/viber-v2.png" },
  { id: "meta",            name: "Meta",            desc: "Отримуйте ліди з Facebook Lead Ads та спілкуйтесь через Messenger.", logo: "/facebook-v2.png" },
  { id: "amazon",          name: "Amazon",          desc: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету.",     logo: "/amazon-v2.png" },
  { id: "ebay",            name: "eBay",            desc: "Синхронізуйте товари та замовлення з міжнародним маркетплейсом.",    logo: "/ebay-v2.png" },
  { id: "rozetka",         name: "Rozetka",         desc: "Обробляйте замовлення з найбільшого українського маркетплейсу.",     logo: "/rozetka-new.png" },
  { id: "ringostat",       name: "Ringostat",       desc: "Відстежуйте дзвінки та автоматично прив'язуйте їх до клієнтів і угод.", logo: "/ringostat-v2.png" },
  { id: "unitalk",         name: "Unitalk",         desc: "IP-телефонія з автоматичною фіксацією дзвінків у картці клієнта.",   logo: "/unitalk-v2.png" },
];

const by = (...ids: string[]) => ALL.filter((i) => ids.includes(i.id));

const categories = [
  { id: "all",          label: "Всі інтеграції", integrations: ALL },
  { id: "marketplaces", label: "Маркетплейси",   integrations: by("amazon", "ebay", "rozetka") },
  { id: "messengers",   label: "Месенджери",     integrations: by("telegram", "viber", "meta") },
  { id: "telephony",    label: "Телефонія",      integrations: by("ringostat", "unitalk") },
  { id: "video",        label: "Відеозв'язок",   integrations: by("zoom") },
  { id: "productivity", label: "Продуктивність", integrations: by("google-calendar") },
];

export default function IntegrationsContent() {
  const [activeId, setActiveId] = useState("all");

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <>
      {/* Hero */}
      <section className="w-full flex flex-col items-center text-center px-4 md:px-6 pt-10 pb-10 md:pt-16 md:pb-14 lg:pt-24 lg:pb-16">
        <div className="flex flex-col gap-4 md:gap-5 items-center" style={{ maxWidth: 640 }}>
          <h1 className="hero-h1">
            Інтеграції
          </h1>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#727272]">
            My Community підключається до інструментів, які ви вже використовуєте — без зайвих налаштувань.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full px-4 md:px-6 pb-16 md:pb-20 lg:pb-24">
        <div className="w-full mx-auto" style={{ maxWidth: 1080 }}>

          {/* Categories — horizontal scrollable pills on mobile/tablet */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-6" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-full text-[14px] font-medium whitespace-nowrap transition-colors"
                  style={{
                    background: isActive ? "#f0f4ff" : "#f5f5f7",
                    color: isActive ? "#367bf6" : "#374151",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {cat.label}
                  <span style={{ fontSize: 12, opacity: 0.7 }}>{cat.integrations.length}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop: sidebar + content */}
          <div className="flex flex-col lg:flex-row lg:gap-[40px]">

            {/* Sidebar — desktop only */}
            <div className="hidden lg:block flex-shrink-0" style={{ width: 220 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#727272", letterSpacing: "0.06em", textTransform: "uppercase", height: 28, display: "flex", alignItems: "center", marginBottom: 16 }}>
                Категорії
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {categories.map((cat) => {
                  const isActive = cat.id === activeId;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => setActiveId(cat.id)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "8px 12px",
                          borderRadius: 10,
                          border: "none",
                          background: isActive ? "#f0f4ff" : "transparent",
                          color: isActive ? "#367bf6" : "#374151",
                          fontSize: 15,
                          fontWeight: isActive ? 600 : 400,
                          cursor: "pointer",
                          transition: "background 0.15s ease, color 0.15s ease",
                        }}
                      >
                        {cat.label}
                        <span style={{ marginLeft: 6, fontSize: 13, color: isActive ? "#367bf6" : "#9ca3af", fontWeight: 400 }}>
                          {cat.integrations.length}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Cards grid */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {activeId === "all" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  {categories.slice(1).map((cat) => (
                    <div key={cat.id}>
                      <p style={{ fontSize: 18, fontWeight: 600, color: "#141414", height: 28, display: "flex", alignItems: "center", marginBottom: 16 }}>
                        {cat.label}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {cat.integrations.map((item) => (
                          <IntegrationCard key={item.id} item={item} style={{ padding: "20px 22px" }} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p style={{ fontSize: 18, fontWeight: 600, color: "#141414", height: 28, display: "flex", alignItems: "center", marginBottom: 16 }}>
                    {active.label}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {active.integrations.map((item) => (
                      <IntegrationCard key={item.id} item={item} style={{ padding: "20px 22px" }} />
                    ))}
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
