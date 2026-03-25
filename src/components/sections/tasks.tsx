const tasks = [
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
  {
    title: "Хаос у процесах і комунікаціях",
    desc: "Завдання губляться, відповідальні не зрозумілі, терміни зриваються. Менеджери витрачають більше часу на контроль, ніж на роботу.",
  },
];

export default function Tasks() {
  return (
    <section className="flex flex-col items-center py-24 w-full">
      <div className="flex flex-col gap-14 items-center justify-center max-w-[1080px] w-full px-6">
        {/* Info */}
        <div className="flex flex-col items-center text-center w-full">
          <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
            Які задачі вирішує система
          </h2>
        </div>

        {/* 3×2 grid */}
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
                {/* Photo / Video placeholder */}
                <div className="flex-1 bg-[#f9fafb] flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-sm size-[76px]" />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3 pb-8 pt-7 px-7">
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
