const integrations = [
  {
    id: "google-calendar",
    name: "Google Calendar",
    desc: "Синхронізація зустрічей та подій команди в реальному часі.",
  },
  {
    id: "zoom",
    name: "Zoom",
    desc: "Запускайте відеодзвінки прямо з картки клієнта або угоди.",
  },
  {
    id: "amazon",
    name: "Amazon",
    desc: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету.",
  },
  {
    id: "nova-poshta",
    name: "Nova Poshta API",
    desc: "Автоматичне створення ТТН та відстеження доставки Новою Поштою.",
  },
  {
    id: "rozetka",
    name: "Rozetka",
    desc: "Обробляйте замовлення з найбільшого українського маркетплейсу.",
  },
  {
    id: "telegram-bot",
    name: "Telegram Bot",
    desc: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram.",
  },
];

// Duplicated for seamless infinite loop
const items = [...integrations, ...integrations];

export default function Integrations() {
  return (
    <section className="py-24 bg-white overflow-hidden w-full">
      {/* Заголовок */}
      <div className="w-full mx-auto px-6 text-center" style={{ maxWidth: 1080, marginBottom: 56 }}>
        <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
          Підключіться до улюблених сервісів
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="relative py-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="integrations-marquee flex">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-start gap-4 bg-white border border-[#e5e6ea] rounded-2xl mx-2"
              style={{ width: 370, padding: "22px 28px" }}
            >
              {/* Logo placeholder — буде замінено на <Image> */}
              <div
                className="flex-shrink-0 rounded-xl border border-[#e5e6ea] bg-[#f9fafb] mt-0.5"
                style={{ width: 48, height: 48, flexShrink: 0 }}
              />
              <div className="min-w-0">
                <p className="font-semibold text-[15px] leading-6 text-[#141414] mb-1">
                  {item.name}
                </p>
                <p className="font-normal text-[14px] leading-5 text-[#727272]">
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
