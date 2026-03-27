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
    <section className="w-full flex flex-col items-center px-4 md:px-6 py-14 md:py-20 lg:py-24">
      <div className="w-full flex flex-col gap-10 md:gap-14 items-center" style={{ maxWidth: 1080 }}>
        <div className="flex flex-col items-center text-center w-full">
          <h2 className="section-h2">
            Які задачі вирішує система
          </h2>
        </div>

        {/* Gap trick: border color as bg, gap-px creates 1px "borders" between cells */}
        <div className="border border-[#e5e6ea] rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full bg-[#e5e6ea] gap-px">
          {tasks.map((item, i) => (
            <div
              key={i}
              className="bg-white flex flex-col"
            >
              {/* Icon area — fixed height so all icons align; text starts at same position in every card */}
              <div className="bg-[#f9fafb] flex items-center justify-center flex-shrink-0 h-[160px] sm:h-[180px] lg:h-[200px]">
                <div className="bg-white rounded-2xl shadow-sm size-[76px]" />
              </div>
              {/* Text area — auto, grid makes the whole row equal so extra space is at the bottom */}
              <div className="flex flex-col gap-3 pb-7 pt-6 px-6 sm:px-7 flex-1">
                <p className="font-semibold text-[16px] sm:text-[17px] lg:text-[18px] leading-6 text-[#141414]">
                  {item.title}
                </p>
                <p className="font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-6 text-[#727272]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
