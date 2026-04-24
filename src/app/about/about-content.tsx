import Image from "next/image";

const founders = [
  { name: "Анна Буркацька",      role: "COO", photo: "/anna-burkackaya.jpg"      },
  { name: "Денис Купраш",        role: "CMO", photo: "/denis-kuprash.jpg"        },
  { name: "Владислава Пилипенко",role: "CEO", photo: "/vladyslava-pylypenko.jpg" },
  { name: "Сергій Кулик",        role: "CTO", photo: null                        },
];

export default function AboutContent() {
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
            <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-normal text-[#4b5563]">
              Ми команда засновників консалтингової компанії{" "}
              <a
                href="https://mbtn.com.ua/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#ec693d] hover:text-[#c94e28] hover:underline transition-colors duration-200"
              >MAYBUTNE Consulting</a>{" "}
              з понад 10-річним досвідом роботи з бізнесами.
            </p>
            <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-normal text-[#4b5563]">
              Працюючи з різними організаціями, ми глибоко зрозуміли їхні реальні виклики.
              Цей досвід сформував наше бачення простого та ефективного управління.
            </p>
            <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-normal text-[#4b5563]">
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
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-semibold text-[#c0c0c0]">
                        {founder.name.charAt(0)}
                      </span>
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
    </>
  );
}
