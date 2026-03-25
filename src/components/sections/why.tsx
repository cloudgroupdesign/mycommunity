const problems = [
  {
    title: "Складні інтерфейси та дорогі системи",
    desc: "Більшість CRM та ERP систем розроблені для корпорацій і вимагають місяців впровадження та навчання персоналу.",
  },
  {
    title: "Рішення не адаптовані під реальні бізнес процеси",
    desc: "Готові рішення вимагають підстроювати бізнес під систему, а не навпаки. Кастомізація — дорога та складна.",
  },
  {
    title: "Розрізнені інструменти та ручна операційна робота",
    desc: "Більшість CRM та ERP систем розроблені для корпорацій і вимагають місяців впровадження та навчання персоналу.",
  },
];

export default function Why() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      <div className="w-full flex flex-col gap-14 items-center" style={{ maxWidth: 1080 }}>
        <div className="flex flex-col gap-8 items-center text-center w-full">
          <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
            Чому створено My Community
          </h2>
          <p className="font-normal text-[18px] leading-[30px] text-[#727272] max-w-[820px]">
            Розробники My Community — власники консалтингової компанії Maybutne
            Consulting, які більше 10 років працювали з реальними бізнесами та
            впроваджували різні CRM, ERP і системи управління.
          </p>
        </div>

        <div className="flex gap-4 items-stretch w-full">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e6ea] rounded-2xl flex flex-col flex-1 overflow-hidden h-[504px]"
            >
              <div className="flex-1 bg-white" />
              <div className="flex flex-col gap-4 pb-8 pt-7 px-7">
                <p className="font-semibold text-[18px] leading-7 text-[#141414]">
                  {item.title}
                </p>
                <p className="font-normal text-[16px] leading-6 text-[#727272]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-normal text-[18px] leading-[30px] text-[#727272] text-center max-w-[820px]">
          Саме тому було створено My Community — систему, де всі процеси
          логічні, легкі в управлінні та швидко адаптовані під реальний бізнес.
        </p>
      </div>
    </section>
  );
}
