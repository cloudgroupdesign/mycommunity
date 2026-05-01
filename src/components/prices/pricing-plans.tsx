"use client";

import { useState } from "react";
import DemoCTAButton from "@/components/shared/demo-cta-button";

// ── Icons ──────────────────────────────────────────────────────────────────

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.1l-2.78 1.46.53-3.1L1.5 4.25l3.1-.45z" />
  </svg>
);

const CheckCircle = ({ color }: { color: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="7.5" cy="7.5" r="7.5" fill={color} />
    <path d="M4 7.5l2.5 2.5 4.5-4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    style={{ flexShrink: 0, transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path d="M2.5 5l4.5 4 4.5-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Types ──────────────────────────────────────────────────────────────────

type FeatureGroup = {
  groupLabel?: string;
  isBundle?: boolean;
  bundleText?: string;
  items: string[];
};

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  composition: string;
  description: string;
  monthlyPrice: number;
  popular?: boolean;
  accent: string;
  accentLight: string;
  ctaVariant: "primary" | "outline";
  featureGroups: FeatureGroup[];
};

// ── Plan Data ──────────────────────────────────────────────────────────────

const plans: Plan[] = [
  {
    id: "start",
    name: "START",
    subtitle: "Основа продажів і задач",
    composition: "CRM + Проєкти та задачі",
    description: "Для бізнесу, який хоче навести порядок у клієнтах і щоденних процесах",
    monthlyPrice: 7,
    accent: "#367bf6",
    accentLight: "#eef2fc",
    ctaVariant: "outline",
    featureGroups: [
      {
        groupLabel: "CRM",
        items: [
          "Ліди та угоди",
          "Воронки продажів",
          "База клієнтів",
          "Замовлення та статуси",
          "Месенджери та маркетплейси",
          "AI-менеджер",
          "Кастомізація полів",
        ],
      },
      {
        groupLabel: "Проєкти та задачі",
        items: [
          "Постановка задач",
          "Дедлайни",
          "Відповідальні",
          "Контроль виконання",
        ],
      },
    ],
  },
  {
    id: "grow",
    name: "GROW",
    subtitle: "Фінанси та аналітика",
    composition: "CRM + Проєкти + Фінанси та склад",
    description: "Для бізнесу, який хоче бачити фінанси і приймати рішення на основі цифр",
    monthlyPrice: 12,
    popular: true,
    accent: "#29abe2",
    accentLight: "#e8f4fb",
    ctaVariant: "primary",
    featureGroups: [
      {
        isBundle: true,
        bundleText: "Все з START",
        items: [],
      },
      {
        groupLabel: "Фінанси та склад",
        items: [
          "Облік доходів і витрат",
          "Каталог товарів",
          "Складський облік",
          "Каси (готівка / безготівка)",
          "Баланс компанії",
          "Рух коштів",
          "Підключення з банками",
          "Аналітика продажів",
          "Конверсії в CRM",
          "Ефективність каналів",
          "Звіти по доходах і витратах",
          "Зв'язка CRM ↔ фінанси",
          "Шаблони платежів",
        ],
      },
    ],
  },
  {
    id: "pro",
    name: "PRO",
    subtitle: "Повне управління бізнесом",
    composition: "CRM + Проєкти + Фінанси + Виробництво + HR",
    description: "Для бізнесу з виробництвом і командою в єдиній системі",
    monthlyPrice: 18,
    accent: "#141414",
    accentLight: "#f0f0f0",
    ctaVariant: "outline",
    featureGroups: [
      {
        isBundle: true,
        bundleText: "Все з GROW",
        items: [],
      },
      {
        groupLabel: "Виробництво",
        items: [
          "Облік замовлень у виробництві",
          "Техкарти та циклограми",
          "Контроль ресурсів і матеріалів",
          "Планування завантаження",
          "Етапи виконання",
        ],
      },
      {
        groupLabel: "HR",
        items: [
          "База співробітників",
          "Ролі та доступи",
          "Облік робочого часу",
          "KPI та ефективність",
        ],
      },
    ],
  },
];

// ── Billing Toggle ──────────────────────────────────────────────────────────

function BillingToggle({ annual, onChange }: { annual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div style={{ display: "inline-flex", background: "#f5f5f7", borderRadius: 100, padding: 4, gap: 2 }}>
      {(["Місячна", "Річна"] as const).map((label, i) => {
        const active = annual === (i === 1);
        return (
          <button
            key={label}
            onClick={() => onChange(i === 1)}
            style={{
              background: active ? "#ffffff" : "transparent",
              borderRadius: 100,
              border: "none",
              padding: i === 1 ? "8px 18px 8px 22px" : "8px 22px",
              fontSize: 14,
              fontWeight: active ? 600 : 400,
              color: active ? "#141414" : "#727272",
              cursor: "pointer",
              boxShadow: active ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
              transition: "all 0.22s ease",
              display: "flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
            }}
          >
            {label}
            {i === 1 && (
              <span
                style={{
                  background: "transparent",
                  color: "#16a34a",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "2px 7px",
                  borderRadius: 20,
                  border: "1.5px solid #16a34a",
                  letterSpacing: "0.02em",
                  lineHeight: "16px",
                }}
              >
                −20%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ── Plan Card ──────────────────────────────────────────────────────────────

function PlanCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const [open, setOpen] = useState(false);
  const raw = annual ? plan.monthlyPrice * 0.8 : plan.monthlyPrice;
  const priceDisplay = Number.isInteger(raw) ? `${raw}` : raw.toFixed(1);
  const isOutline = plan.ctaVariant === "outline";

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        border: plan.popular ? "1.5px solid #29abe2" : "1.5px solid #e5e7eb",
        boxShadow: plan.popular
          ? "0 4px 24px rgba(41,171,226,0.10)"
          : "0 1px 6px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        padding: "22px 24px 24px",
        position: "relative",
      }}
    >
      {/* Popular badge — fixed height keeps alignment across cards */}
      <div style={{ height: 32, marginBottom: 14, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
        {plan.popular && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: "#29abe2",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: 20,
              letterSpacing: "0.03em",
            }}
          >
            <StarIcon />
            Найпопулярніший
          </div>
        )}
      </div>

      {/* Top section — fixed minHeight keeps price at same level regardless of accordion state */}
      <div style={{ minHeight: 185 }}>
        <p style={{ fontSize: 28, fontWeight: 600, color: "#141414", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 4 }}>
          {plan.name}
        </p>
        <p style={{ fontSize: 13, fontWeight: 400, color: "#9ca3af", lineHeight: "20px", marginBottom: 14 }}>
          {plan.subtitle}
        </p>

        {/* Composition pill */}
        <div
          style={{
            background: plan.popular ? "#e8f4fb" : "#f5f5f7",
            borderRadius: 8,
            padding: "6px 10px",
            marginBottom: 14,
          }}
        >
          <span style={{ fontSize: 12, color: plan.popular ? "#29abe2" : "#4b5563", fontWeight: 600, lineHeight: "18px" }}>
            {plan.composition}
          </span>
        </div>

        {/* Description */}
        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: "21px" }}>
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div style={{ paddingTop: 20, paddingBottom: 4 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
          <span style={{ fontSize: 34, fontWeight: 600, color: "#141414", lineHeight: 1, letterSpacing: "-0.02em" }}>
            ${priceDisplay}
          </span>
          <span style={{ fontSize: 13, color: "#9ca3af", marginLeft: 2 }}> / міс</span>
        </div>
        <p style={{ fontSize: 12, color: "#b0b7c3", marginTop: 5 }}>
          {annual ? "за користувача на рік" : "за користувача на місяць"}
        </p>
      </div>

      {/* CTA */}
      <DemoCTAButton
        style={{
          width: "100%",
          padding: "13px 0",
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
          border: isOutline ? "1.5px solid #e5e7eb" : "none",
          background: isOutline ? "transparent" : plan.accent,
          color: isOutline ? "#141414" : "#ffffff",
          transition: "opacity 0.18s",
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        Записатися на демо
      </DemoCTAButton>

      {/* Accordion toggle */}
      <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 13 }}>
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            gap: 8,
          }}
        >
          <span style={{ fontSize: 13, color: "#6b7280", fontWeight: 500 }}>
            Детальніше що входить
          </span>
          <ChevronIcon open={open} />
        </button>

        {/* Accordion content */}
        <div
          style={{
            maxHeight: open ? 900 : 0,
            overflow: "hidden",
            transition: "max-height 0.32s ease",
          }}
        >
          <div style={{ paddingTop: 16, display: "flex", flexDirection: "column", gap: 18 }}>
            {plan.featureGroups.map((group, gi) => (
              <div key={gi}>
                {group.isBundle ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                    <CheckCircle color="#29abe2" />
                    <span style={{ fontSize: 13, color: "#374151", fontWeight: 600, lineHeight: "20px" }}>
                      {group.bundleText}
                    </span>
                  </div>
                ) : (
                  <>
                    {group.groupLabel && (
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#b0b7c3",
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          marginBottom: 8,
                        }}
                      >
                        {group.groupLabel}
                      </p>
                    )}
                    <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                      {group.items.map((item) => (
                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                          <CheckCircle color="#29abe2" />
                          <span style={{ fontSize: 13, color: "#374151", lineHeight: "20px" }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────

export default function PricingPlans() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Billing toggle */}
      <section
        className="w-full px-4"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: 28, gap: 12 }}
      >
        <BillingToggle annual={annual} onChange={setAnnual} />
        <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center" }}>
          Тарифи{" "}
          <span style={{ color: "#6b7280", fontWeight: 500 }}>START, GROW</span> та{" "}
          <span style={{ color: "#6b7280", fontWeight: 500 }}>PRO</span>{" "}
          — до <span style={{ color: "#6b7280", fontWeight: 500 }}>20 користувачів</span> включно
        </p>
      </section>

      {/* Plan cards */}
      <section className="w-full px-4 md:px-6 pb-10 md:pb-12">
        <div
          className="w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4"
          style={{ maxWidth: 960 }}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} annual={annual} />
          ))}
        </div>
      </section>

      {/* Enterprise block */}
      <section className="w-full px-4 md:px-6 pb-14 md:pb-20">
        <div
          className="w-full mx-auto"
          style={{
            maxWidth: 960,
            background: "#f5f5f7",
            borderRadius: 16,
            padding: "28px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: "24px", maxWidth: 480 }}>
            Для команд від{" "}
            <span style={{ fontWeight: 600, color: "#141414" }}>20 користувачів</span>{" "}
            — діють спеціальні ціни і тариф розраховується індивідуально.
          </p>
          <DemoCTAButton
            style={{
              padding: "12px 28px",
              borderRadius: 12,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              border: "1.5px solid #d1d5db",
              background: "#ffffff",
              color: "#141414",
              transition: "opacity 0.2s",
            }}
          >
            Прорахувати тариф
          </DemoCTAButton>
        </div>
      </section>
    </>
  );
}
