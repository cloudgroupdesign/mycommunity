const tasks = [
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Задачі та спілкування розпорошені, що створює плутанину.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ea463e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Втрата клієнтів, задач і контролю",
    desc: "Ліди та задачі губляться без єдиної системи.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f7a117" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Відсутність прозорої аналітики",
    desc: "Немає чітких даних для прийняття рішень.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#367bf6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <line x1="3" y1="3" x2="21" y2="21" />
      </svg>
    ),
  },
  {
    title: "Перевантаження власника операційкою",
    desc: "Рутина забирає час від розвитку бізнесу.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0fa3b1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Залежність від багатьох сервісів",
    desc: "Різні інструменти ускладнюють роботу команди.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b747f6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "Відсутність єдиного центру управління",
    desc: "Фінанси, продажі, задачі — у різних вкладках. Цілісної картини бізнесу немає.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2.5" strokeDasharray="3 2" />
        <circle cx="12" cy="3.5" r="1.5" />
        <circle cx="20.5" cy="12" r="1.5" />
        <circle cx="12" cy="20.5" r="1.5" />
        <circle cx="3.5" cy="12" r="1.5" />
        <line x1="12" y1="5" x2="12" y2="9.5" strokeDasharray="2 2" />
        <line x1="19" y1="12" x2="14.5" y2="12" strokeDasharray="2 2" />
        <line x1="12" y1="19" x2="12" y2="14.5" strokeDasharray="2 2" />
        <line x1="5" y1="12" x2="9.5" y2="12" strokeDasharray="2 2" />
      </svg>
    ),
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
              {/* Icon area */}
              <div className="bg-[#f9fafb] flex items-center justify-center flex-shrink-0 h-[160px] sm:h-[180px] lg:h-[200px]">
                <div className="bg-white rounded-2xl shadow-sm size-[76px] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              {/* Text area */}
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
