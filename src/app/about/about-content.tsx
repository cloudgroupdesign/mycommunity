const founders = [
  {
    name: "Андрій Коваленко",
    role: "CEO & Co-founder",
    initials: "АК",
    bg: "#eef2fc",
    color: "#1a3a7a",
  },
  {
    name: "Олена Мельник",
    role: "CTO & Co-founder",
    initials: "ОМ",
    bg: "#e8f5e9",
    color: "#1a4a25",
  },
  {
    name: "Дмитро Савченко",
    role: "CPO & Co-founder",
    initials: "ДС",
    bg: "#f3e8fd",
    color: "#5a1a7a",
  },
  {
    name: "Марія Бондаренко",
    role: "CMO & Co-founder",
    initials: "МБ",
    bg: "#fff8e1",
    color: "#7a4a00",
  },
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
            className="flex flex-col gap-5 items-center text-center"
            style={{ maxWidth: 720 }}
          >
            <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-normal text-[#4b5563]">
              My Community — це CRM та ERP-система для українських церков,
              громад і організацій. Ми об'єднуємо управління членами, задачами,
              комунікаціями та фінансами в єдиному просторі.
            </p>
            <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-normal text-[#4b5563]">
              Наша місія — позбавити лідерів громад від операційного хаосу, щоб
              вони могли зосередитися на головному: людях і розвитку спільноти.
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
                  className="w-full relative flex items-center justify-center"
                  style={{ aspectRatio: "3/4", background: founder.bg }}
                >
                  {/* Replace with <Image> when real photos are available */}
                  <span
                    className="text-[48px] font-semibold leading-none select-none"
                    style={{ color: founder.color, letterSpacing: "-0.01em" }}
                    aria-hidden="true"
                  >
                    {founder.initials}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1 px-6 py-5 text-center">
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
        </div>
      </section>
    </>
  );
}
