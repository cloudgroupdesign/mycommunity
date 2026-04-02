"use client";

import { useDemoModal } from "@/components/shared/modal-context";

export default function Why() {
  const { open: openModal } = useDemoModal();
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6 py-14 md:py-20 lg:py-24">
      <div className="w-full flex flex-col gap-8 md:gap-12" style={{ maxWidth: 1080 }}>

        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-5 items-center text-center">
          <h2 className="section-h2">
            Чим My Community відрізняється
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#727272]" style={{ maxWidth: 600 }}>
            Система, створена в Україні підприємцями для підприємців
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">

          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="rounded-3xl overflow-hidden flex flex-col lg:h-[424px]" style={{ background: "#eef2fc" }}>
              <div className="flex-1 flex flex-col items-center text-center pt-10 px-8 lg:pt-[64px] lg:px-[57px]">
                <div className="flex flex-col items-center" style={{ maxWidth: 400, width: "100%" }}>
                  <h3
                    className="font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[40px]"
                    style={{ color: "#1a3a7a", letterSpacing: "-0.01em" }}
                  >
                    Створена підприємцями для підприємців
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ color: "#1a3a7a", opacity: 0.7, lineHeight: "22px", marginTop: 16, marginBottom: 28 }}
                  >
                    Ми самі будували бізнес — тому кожна функція вирішує реальну задачу.
                  </p>
                </div>
              </div>
              <div className="h-[160px] lg:h-[191px] shrink-0" style={{ background: "#c7d7f9" }} />
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl overflow-hidden flex flex-col lg:h-[424px]" style={{ background: "#f3e8fd" }}>
              <div className="flex-1 flex flex-col items-center text-center pt-10 px-8 lg:pt-[64px] lg:px-[57px]">
                <div className="flex flex-col items-center" style={{ maxWidth: 400, width: "100%" }}>
                  <h3
                    className="font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[40px]"
                    style={{ color: "#5a1a7a", letterSpacing: "-0.01em" }}
                  >
                    Легка в управлінні та масштабуванні
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] lg:text-[16px]"
                    style={{ color: "#5a1a7a", opacity: 0.7, lineHeight: "22px", marginTop: 16, marginBottom: 28 }}
                  >
                    Інтуїтивний інтерфейс без навчання — система росте разом із вашим бізнесом.
                  </p>
                </div>
              </div>
              <div className="h-[160px] lg:h-[191px] shrink-0" style={{ background: "#dbb8f9" }} />
            </div>

          </div>

          {/* Bottom card — full width */}
          <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row lg:h-[400px]" style={{ background: "#fff8e1" }}>
            <div
              className="flex flex-col items-center justify-center text-center pt-10 pb-7 px-8 lg:px-10"
              style={{ flex: "0 0 50%" }}
            >
              <div className="flex flex-col items-center" style={{ maxWidth: 400 }}>
                <h3
                  className="font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[40px]"
                  style={{ color: "#7a4a00", letterSpacing: "-0.01em" }}
                >
                  Доступно, швидко і без посередників
                </h3>
                <p
                  className="text-[14px] md:text-[15px] lg:text-[16px]"
                  style={{ color: "#7a4a00", opacity: 0.7, lineHeight: "22px", marginTop: 16, marginBottom: 28 }}
                >
                  Доступна альтернатива міжнародним системам — впроваджуємо швидко і без посередників.
                </p>
              </div>
            </div>
            <div className="flex-1 min-h-[200px] lg:min-h-0" style={{ background: "#ffe0a0" }} />
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            className="btn-primary"
            onClick={openModal}
            style={{
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
