"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDemoModal } from "@/components/shared/modal-context";

const founders = [
  { src: "/denis-block.png",  alt: "Денис"  },
  { src: "/anna-block.png",   alt: "Анна"   },
  { src: "/sergey-block.png", alt: "Сергій" },
  { src: "/vlada-block.png",  alt: "Влада"  },
];

export default function Why() {
  const { open: openModal } = useDemoModal();
  const [activeFounder, setActiveFounder] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % founders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

            {/* Card 1 — founders crossfade */}
            <div className="rounded-3xl overflow-hidden flex flex-col lg:h-[424px]" style={{ background: "#eef2fc" }}>
              <div className="lg:flex-1 flex flex-col items-center text-center pt-10 px-8 lg:pt-[64px] lg:px-[57px]">
                <div className="flex flex-col items-center" style={{ maxWidth: 400, width: "100%" }}>
                  <h3
                    className="font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[40px]"
                    style={{ color: "#1a3a7a", letterSpacing: "-0.01em" }}
                  >
                    Створена підприємцями<br className="hidden lg:block" /> на реальному досвіді
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] lg:text-[16px] mt-4 mb-5 lg:mb-7"
                    style={{ color: "#1a3a7a", opacity: 0.7, lineHeight: "22px" }}
                  >
                    Ми працювали з <span style={{ fontWeight: 700, opacity: 1, color: "#1a3a7a" }}>200+</span> бізнесами в консалтингу, тестували десятки CRM та інтеграцій і створили систему, яка реально закриває потреби компаній.
                  </p>
                </div>
              </div>
              <div className="relative shrink-0 h-[191px] w-full">
                {founders.map((founder, i) => (
                  <Image
                    key={founder.src}
                    src={founder.src}
                    alt={founder.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ opacity: i === activeFounder ? 1 : 0, transition: "opacity 1s ease-in-out" }}
                    priority={i === 0}
                  />
                ))}
              </div>
            </div>

            {/* Card 2 — analytics */}
            <div className="rounded-3xl overflow-hidden flex flex-col lg:h-[424px]" style={{ background: "#f3e8fd" }}>
              <div className="lg:flex-1 flex flex-col items-center text-center pt-10 px-8 lg:pt-[64px] lg:px-[57px]">
                <div className="flex flex-col items-center" style={{ maxWidth: 400, width: "100%" }}>
                  <h3
                    className="font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[40px]"
                    style={{ color: "#5a1a7a", letterSpacing: "-0.01em" }}
                  >
                    Легка в управлінні та<br className="hidden lg:block" /> масштабуванні
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] lg:text-[16px] mt-4 mb-5 lg:mb-7"
                    style={{ color: "#5a1a7a", opacity: 0.7, lineHeight: "22px" }}
                  >
                    Інтуїтивний інтерфейс без навчання — система росте разом із вашим бізнесом.
                  </p>
                </div>
              </div>
              {/* Photo — full bleed, same as card 1 */}
              <div className="relative shrink-0 h-[191px] w-full">
                <Image
                  src="/analytics.webp"
                  alt="Легка в управлінні"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>

          {/* Bottom card — full width */}
          <div className="rounded-3xl overflow-hidden flex flex-col lg:flex-row lg:h-[400px]" style={{ background: "#fff8e1" }}>
            <div className="lg:flex-1 flex flex-col items-center lg:justify-center text-center pt-10 pb-6 lg:pb-7 px-8 lg:px-10">
              <div className="flex flex-col items-center" style={{ maxWidth: 400 }}>
                <h3
                  className="font-semibold text-[22px] md:text-[26px] lg:text-[32px] leading-[30px] md:leading-[34px] lg:leading-[40px]"
                  style={{ color: "#7a4a00", letterSpacing: "-0.01em" }}
                >
                  Доступно, швидко і<br className="hidden lg:block" /> без посередників
                </h3>
                <p
                  className="text-[14px] md:text-[15px] lg:text-[16px] mt-4 mb-0 lg:mb-[28px]"
                  style={{ color: "#7a4a00", opacity: 0.7, lineHeight: "22px" }}
                >
                  Доступна альтернатива міжнародним системам — впроваджуємо швидко і без посередників.
                </p>
              </div>
            </div>
            <div className="relative min-h-[260px] lg:min-h-0 lg:w-[540px] lg:shrink-0">
              <Image
                src="/launch.webp"
                alt="Доступно, швидко і без посередників"
                fill
                quality={100}
                priority
                className="object-cover object-center scale-[1.1]"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
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
