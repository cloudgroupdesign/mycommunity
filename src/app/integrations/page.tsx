"use client";

import { useState } from "react";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const categories = [
  {
    id: "all",
    label: "Всі інтеграції",
    integrations: [
      { id: "google-calendar", name: "Google Calendar", desc: "Синхронізація зустрічей та подій команди в реальному часі." },
      { id: "zoom",            name: "Zoom",            desc: "Запускайте відеодзвінки прямо з картки клієнта або угоди." },
      { id: "amazon",          name: "Amazon",          desc: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету." },
      { id: "nova-poshta",     name: "Nova Poshta API", desc: "Автоматичне створення ТТН та відстеження доставки Новою Поштою." },
      { id: "rozetka",         name: "Rozetka",         desc: "Обробляйте замовлення з найбільшого українського маркетплейсу." },
      { id: "telegram-bot",    name: "Telegram Bot",    desc: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram." },
      { id: "ebay",            name: "eBay",            desc: "Синхронізуйте товари та замовлення з міжнародним маркетплейсом." },
      { id: "google-drive",    name: "Google Drive",    desc: "Зберігайте та надавайте спільний доступ до документів команди." },
      { id: "stripe",          name: "Stripe",          desc: "Приймайте онлайн-платежі та керуйте підписками клієнтів." },
      { id: "prom",            name: "Prom.ua",         desc: "Синхронізуйте каталог товарів та замовлення з Prom.ua." },
      { id: "viber",           name: "Viber",           desc: "Надсилайте повідомлення та сповіщення клієнтам через Viber." },
      { id: "google-meet",     name: "Google Meet",     desc: "Проводьте відеозустрічі прямо з платформи без переключення." },
    ],
  },
  {
    id: "marketplaces",
    label: "Маркетплейси",
    integrations: [
      { id: "amazon",   name: "Amazon",   desc: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету." },
      { id: "rozetka",  name: "Rozetka",  desc: "Обробляйте замовлення з найбільшого українського маркетплейсу." },
      { id: "ebay",     name: "eBay",     desc: "Синхронізуйте товари та замовлення з міжнародним маркетплейсом." },
      { id: "prom",     name: "Prom.ua",  desc: "Синхронізуйте каталог товарів та замовлення з Prom.ua." },
    ],
  },
  {
    id: "messengers",
    label: "Месенджери",
    integrations: [
      { id: "telegram-bot", name: "Telegram Bot", desc: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram." },
      { id: "viber",        name: "Viber",        desc: "Надсилайте повідомлення та сповіщення клієнтам через Viber." },
    ],
  },
  {
    id: "video",
    label: "Відеозв'язок",
    integrations: [
      { id: "zoom",        name: "Zoom",         desc: "Запускайте відеодзвінки прямо з картки клієнта або угоди." },
      { id: "google-meet", name: "Google Meet",  desc: "Проводьте відеозустрічі прямо з платформи без переключення." },
    ],
  },
  {
    id: "productivity",
    label: "Продуктивність",
    integrations: [
      { id: "google-calendar", name: "Google Calendar", desc: "Синхронізація зустрічей та подій команди в реальному часі." },
      { id: "google-drive",    name: "Google Drive",    desc: "Зберігайте та надавайте спільний доступ до документів команди." },
    ],
  },
  {
    id: "payments",
    label: "Платежі",
    integrations: [
      { id: "stripe", name: "Stripe", desc: "Приймайте онлайн-платежі та керуйте підписками клієнтів." },
    ],
  },
  {
    id: "logistics",
    label: "Логістика",
    integrations: [
      { id: "nova-poshta", name: "Nova Poshta API", desc: "Автоматичне створення ТТН та відстеження доставки Новою Поштою." },
    ],
  },
];

function IntegrationCard({ item }: { item: { id: string; name: string; desc: string } }) {
  return (
    <div
      className="flex items-start gap-4 bg-white border border-[#e5e6ea] rounded-2xl"
      style={{ padding: "20px 22px" }}
    >
      <div
        className="flex-shrink-0 rounded-xl border border-[#e5e6ea] bg-[#f9fafb] mt-0.5"
        style={{ width: 48, height: 48 }}
      />
      <div className="min-w-0">
        <p className="font-semibold text-[15px] leading-6 text-[#141414] mb-1">{item.name}</p>
        <p className="font-normal text-[14px] leading-5 text-[#727272]">{item.desc}</p>
      </div>
    </div>
  );
}

export default function IntegrationsPage() {
  const [activeId, setActiveId] = useState("all");

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">

        {/* Hero */}
        <section className="w-full flex flex-col items-center text-center px-4 md:px-6 pt-10 pb-10 md:pt-16 md:pb-14 lg:pt-24 lg:pb-16">
          <div className="flex flex-col gap-4 md:gap-5 items-center" style={{ maxWidth: 640 }}>
            <h1 className="hero-h1">
              Інтеграції
            </h1>
            <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-6 md:leading-7 lg:leading-[30px] font-normal text-[#727272]">
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
                <p style={{ fontSize: 13, fontWeight: 600, color: "#727272", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
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
                        <p style={{ fontSize: 18, fontWeight: 600, color: "#141414", marginBottom: 14, lineHeight: "26px" }}>
                          {cat.label}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                          {cat.integrations.map((item) => (
                            <IntegrationCard key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p style={{ fontSize: 22, fontWeight: 600, color: "#141414", marginBottom: 20, lineHeight: "30px" }}>
                      {active.label}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {active.integrations.map((item) => (
                        <IntegrationCard key={item.id} item={item} />
                      ))}
                    </div>
                  </>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
