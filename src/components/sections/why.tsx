export default function Why() {
  return (
    <section className="w-full flex flex-col items-center px-4 md:px-6 py-14 md:py-20 lg:py-24">
      <div className="w-full flex flex-col gap-8 md:gap-12" style={{ maxWidth: 1080 }}>

        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-5 items-center text-center">
          <h2 className="section-h2">
            Чим My Community відрізняється
          </h2>
          <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-normal text-[#727272]" style={{ maxWidth: 560 }}>
            Система, створена в Україні підприємцями для підприємців
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">

          {/* Top row — 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="rounded-2xl overflow-hidden flex flex-col lg:h-[404px]" style={{ background: "#eef2fc" }}>
              <div className="flex flex-col gap-3 px-7 pt-8 pb-6 lg:h-[60%]">
                <h3 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-tight" style={{ color: "#1a3a7a" }}>
                  Створена підприємцями для підприємців
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-6" style={{ color: "#1a3a7a", opacity: 0.7 }}>
                  Ми самі будували бізнес і знаємо, що потрібно насправді. Тому кожна функція вирішує реальну задачу, а не теоретичну.
                </p>
              </div>
              <div className="mx-6 flex-1 min-h-[180px] lg:flex-none lg:h-[40%] rounded-t-xl" style={{ background: "#c7d7f9" }} />
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden flex flex-col lg:h-[404px]" style={{ background: "#f3e8fd" }}>
              <div className="flex flex-col gap-3 px-7 pt-8 pb-6 lg:h-[60%]">
                <h3 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-tight" style={{ color: "#5a1a7a" }}>
                  Легка в управлінні та масштабуванні
                </h3>
                <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-6" style={{ color: "#5a1a7a", opacity: 0.7 }}>
                  Інтуїтивний інтерфейс без складного навчання. Система росте разом із вашим бізнесом — нові модулі підключаються коли потрібно.
                </p>
              </div>
              <div className="mx-6 flex-1 min-h-[180px] lg:flex-none lg:h-[40%] rounded-t-xl" style={{ background: "#dbb8f9" }} />
            </div>

          </div>

          {/* Bottom card — full width */}
          <div className="rounded-2xl overflow-hidden flex flex-col lg:flex-row lg:h-[404px]" style={{ background: "#fff8e1" }}>
            <div className="flex flex-col gap-4 px-9 pt-10 pb-10 lg:px-12 lg:py-14 justify-center" style={{ flex: "0 0 60%" }}>
              <h3 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] lg:leading-[32px] tracking-tight" style={{ color: "#7a4a00" }}>
                Доступно і швидко — без довгого впровадження
              </h3>
              <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-6" style={{ color: "#7a4a00", opacity: 0.7 }}>
                Доступна альтернатива міжнародним системам. Ми самі розробники — впроваджуємо під ваші потреби швидко, без посередників.
              </p>
            </div>
            <div className="flex-1 min-h-[200px] lg:min-h-0" style={{ background: "#ffe0a0" }} />
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
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
