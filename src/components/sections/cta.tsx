"use client";

import { useDemoModal } from "@/components/shared/modal-context";

export default function CTA() {
  const { open: openModal } = useDemoModal();
  return (
    <section className="w-full px-4 md:px-8" style={{ paddingBottom: 0 }}>
      <div
        style={{
          borderRadius: 24,
          overflow: "hidden",
          position: "relative",
          background: "#ffffff",
        }}
      >
        {/* Градієнт — кути + нижній периметр, центральний овал чистий */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `
              radial-gradient(ellipse 58% 62% at   0%  95%, rgba(41,171,226,0.28)  0%, transparent 70%),
              radial-gradient(ellipse 52% 52% at  25% 102%, rgba(32,169,157,0.22)  0%, transparent 68%),
              radial-gradient(ellipse 52% 48% at  50% 118%, rgba(141,198,63,0.18)  0%, transparent 68%),
              radial-gradient(ellipse 52% 52% at  75% 102%, rgba(247,148,29,0.22)  0%, transparent 68%),
              radial-gradient(ellipse 58% 62% at 100%  95%, rgba(232,76,61,0.25)   0%, transparent 70%)
            `,
          }}
        />

        {/* Контент */}
        <div
          className="relative flex flex-col items-center text-center px-4 md:px-6"
          style={{ paddingTop: 64, paddingBottom: 120, gap: 24, zIndex: 1 }}
        >
          <h2 className="cta-h2">
            Почніть керувати бізнесом
            <br className="hidden md:block" />
            {" "}розумніше вже сьогодні
          </h2>

          <p
            className="text-[15px] md:text-[16px] lg:text-[18px] leading-6 lg:leading-[30px] font-normal text-[#4b5563]"
            style={{ maxWidth: 520 }}
          >
            Об&apos;єднайте всі процеси в одному місці та забудьте про хаос.
            Спробуйте My Community безкоштовно.
          </p>

          <button
            className="btn-primary"
            onClick={openModal}
            style={{
              marginTop: 4,
              background: "#29abe2",
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "24px",
              padding: "14px 36px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Записатися на демо
          </button>
        </div>
      </div>
    </section>
  );
}
