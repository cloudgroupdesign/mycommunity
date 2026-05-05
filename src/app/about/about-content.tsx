"use client";

import Image from "next/image";
import { useDemoModal } from "@/components/shared/modal-context";

const founders = [
  { name: "Анна Буркацька",      role: "COO", photo: "/anna-about.jpg"   },
  { name: "Денис Купраш",        role: "CMO", photo: "/denis-about.jpg"  },
  { name: "Владислава Пилипенко",role: "CEO", photo: "/vlada-ablou.jpg"  },
  { name: "Сергій Кулик",        role: "CTO", photo: "/sergey-about.png" },
];

export default function AboutContent() {
  const { open: openModal } = useDemoModal();
  return (
    <>
      {/* Hero */}
      <section className="w-full flex flex-col items-center px-4 md:px-6 pt-10 pb-14 md:pt-14 md:pb-20 lg:pt-[72px] lg:pb-[120px]">
        <div
          className="w-full flex flex-col items-center text-center gap-5 md:gap-7 lg:gap-8"
          style={{ maxWidth: 1080 }}
        >
          <h1 className="hero-h1">
            Команда, що&nbsp;будує
            <br />
            майбутнє бізнесу
          </h1>
          <p
            className="text-[16px] leading-[26px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[32px] font-normal text-[#727272]"
            style={{ maxWidth: 600 }}
          >
            Ми створюємо інструменти, які роблять управління бізнесом
            простим, прозорим і ефективним.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="w-full flex flex-col items-center px-4 md:px-6 py-14 md:py-20 lg:py-24">
        <div
          className="w-full flex flex-col gap-8 md:gap-12 items-center"
          style={{ maxWidth: 1080 }}
        >
          <div className="flex flex-col gap-4 md:gap-5 items-center text-center">
            <h2 className="section-h2">Чим ми займаємось</h2>
          </div>

          <div
            className="flex flex-col gap-6 items-center text-center"
            style={{ maxWidth: 680 }}
          >
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#4b5563]">
              Ми команда засновників консалтингової компанії{" "}
              <a
                href="https://mbtn.com.ua/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#ec693d] hover:text-[#c94e28] hover:underline transition-colors duration-200"
              >MAYBUTNE Consulting</a>{" "}
              з понад 10-річним досвідом роботи з бізнесами.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#4b5563]">
              Працюючи з різними організаціями, ми глибоко зрозуміли їхні реальні виклики.
              Цей досвід сформував наше бачення простого та ефективного управління.
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#4b5563]">
              Тому ми створили My Community.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="w-full flex flex-col items-center px-4 md:px-6 py-14 md:py-20 lg:py-24">
        <div
          className="w-full flex flex-col gap-10 md:gap-14"
          style={{ maxWidth: 1080 }}
        >
          <div className="flex flex-col gap-4 md:gap-5 items-center text-center">
            <h2 className="section-h2">Засновники</h2>
            <p
              className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#727272]"
              style={{ maxWidth: 580 }}
            >
              Люди, які стоять за продуктом
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="flex flex-col rounded-3xl border border-[#e5e6ea] overflow-hidden"
              >
                {/* Photo — full bleed, portrait */}
                <div
                  className="w-full relative bg-[#f0f0f0]"
                  style={{ aspectRatio: "3/4" }}
                >
                  {founder.photo ? (
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#f0f0f0]">
                      <svg
                        viewBox="0 0 120 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4/5"
                        aria-hidden
                      >
                        <ellipse cx="60" cy="42" rx="28" ry="28" fill="#d4d4d4" />
                        <path d="M6 140c0-29.823 24.177-54 54-54h0c29.823 0 54 24.177 54 54" fill="#d4d4d4" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-0.5 text-center px-5 pt-5 pb-6">
                  <p
                    className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-6 text-[#141414]"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {founder.name}
                  </p>
                  <p className="font-normal text-[14px] md:text-[15px] leading-[22px] text-[#727272]">
                    {founder.role}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="https://mbtn.com.ua/#team"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{
                display: "inline-block",
                background: "#141414",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                lineHeight: "24px",
                padding: "14px 32px",
                borderRadius: 12,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Про команду
            </a>
          </div>
        </div>
      </section>

      {/* Slogan CTA */}
      <section className="w-full px-4 md:px-8 pb-14 md:pb-20 lg:pb-24">
        <div
          style={{
            borderRadius: 24,
            overflow: "hidden",
            position: "relative",
            background: "#ffffff",
          }}
        >
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
          <div
            className="relative flex flex-col items-center text-center px-4 md:px-6"
            style={{ paddingTop: 64, paddingBottom: 80, gap: 20, zIndex: 1 }}
          >
            <h2 className="cta-h2">
              Система поважає вашу
              <br className="hidden md:block" />
              {" "}специфіку бізнесу
            </h2>
            <p
              className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#4b5563]"
              style={{ maxWidth: 480 }}
            >
              Налаштуйте систему під свої процеси — без зайвих компромісів і шаблонних рішень.
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
              Замовити демо
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
