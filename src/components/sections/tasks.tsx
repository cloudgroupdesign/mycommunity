const tasks = [
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Задачі та спілкування розпорошені, що створює плутанину.",
  },
  {
    title: "Втрата клієнтів, задач і контролю",
    desc: "Ліди та задачі губляться без єдиної системи.",
  },
  {
    title: "Відсутність прозорої аналітики",
    desc: "Немає чітких даних для прийняття рішень.",
  },
  {
    title: "Перевантаження власника операційкою",
    desc: "Рутина забирає час від розвитку бізнесу.",
  },
  {
    title: "Залежність від багатьох сервісів",
    desc: "Різні інструменти ускладнюють роботу команди.",
  },
  {
    title: "Назва шостої проблеми",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function Tasks() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      <div className="w-full flex flex-col gap-14 items-center" style={{ maxWidth: 1080 }}>
        <div className="flex flex-col items-center text-center w-full">
          <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
            Які задачі вирішує система
          </h2>
        </div>

        <div className="border border-[#e5e6ea] rounded-2xl overflow-hidden grid grid-cols-3 w-full">
          {tasks.map((item, i) => {
            const isLastRow = i >= 3;
            const isLastCol = (i + 1) % 3 === 0;
            return (
              <div
                key={i}
                className={[
                  "bg-white flex flex-col h-[384px] overflow-hidden",
                  !isLastRow ? "border-b border-[#e5e6ea]" : "",
                  !isLastCol ? "border-r border-[#e5e6ea]" : "",
                ].join(" ")}
              >
                <div className="flex-1 bg-[#f9fafb] flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-sm size-[76px]" />
                </div>
                <div className="flex flex-col gap-3 pb-8 pt-7 px-7 flex-shrink-0" style={{ height: 180 }}>
                  <p className="font-semibold text-[18px] leading-6 text-[#141414]">
                    {item.title}
                  </p>
                  <p className="font-normal text-[16px] leading-6 text-[#727272]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
