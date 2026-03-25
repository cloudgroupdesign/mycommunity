// One card slot: 370px width + 8px margin each side = 386px
// One set (6 cards): 6 × 386 = 2316px — used in CSS keyframes
const ROW_1 = [
  { id: "google-calendar", name: "Google Calendar", desc: "Синхронізація зустрічей та подій команди в реальному часі." },
  { id: "zoom",            name: "Zoom",            desc: "Запускайте відеодзвінки прямо з картки клієнта або угоди." },
  { id: "amazon",          name: "Amazon",          desc: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету." },
  { id: "nova-poshta",     name: "Nova Poshta API", desc: "Автоматичне створення ТТН та відстеження доставки Новою Поштою." },
  { id: "rozetka",         name: "Rozetka",         desc: "Обробляйте замовлення з найбільшого українського маркетплейсу." },
  { id: "telegram-bot",    name: "Telegram Bot",    desc: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram." },
];

const ROW_2 = [
  { id: "ebay",         name: "eBay",         desc: "Синхронізуйте товари та замовлення з міжнародним маркетплейсом." },
  { id: "google-drive", name: "Google Drive", desc: "Зберігайте та надавайте спільний доступ до документів команди." },
  { id: "stripe",       name: "Stripe",       desc: "Приймайте онлайн-платежі та керуйте підписками клієнтів." },
  { id: "prom",         name: "Prom.ua",      desc: "Синхронізуйте каталог товарів та замовлення з Prom.ua." },
  { id: "viber",        name: "Viber",        desc: "Надсилайте повідомлення та сповіщення клієнтам через Viber." },
  { id: "google-meet",  name: "Google Meet",  desc: "Проводьте відеозустрічі прямо з платформи без переключення." },
];

// 8× duplication — covers viewport even at 10% browser zoom
const track1 = Array(8).fill(ROW_1).flat();
const track2 = Array(8).fill(ROW_2).flat();

function IntegrationCard({ item }: { item: { id: string; name: string; desc: string } }) {
  return (
    <div
      className="integration-card flex-shrink-0 flex items-start gap-4 bg-white border border-[#e5e6ea] rounded-2xl"
      style={{ width: 370, padding: "22px 28px", margin: "0 8px" }}
    >
      {/* Logo placeholder — замінити на <Image> коли будуть фото */}
      <div
        className="flex-shrink-0 rounded-xl border border-[#e5e6ea] bg-[#f9fafb] mt-0.5"
        style={{ width: 48, height: 48 }}
      />
      <div className="min-w-0">
        <p className="font-semibold text-[15px] leading-6 text-[#141414] mb-1">{item.name}</p>
        <p className="integration-card-desc font-normal text-[14px] leading-5 text-[#727272]">{item.desc}</p>
      </div>
    </div>
  );
}

const MASK = "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)";

export default function Integrations() {
  return (
    <section className="py-24 bg-white w-full">
      {/* Заголовок + опис */}
      <div className="w-full mx-auto px-6 text-center flex flex-col items-center gap-5" style={{ maxWidth: 1080, marginBottom: 56 }}>
        <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
          Підключіться до улюблених сервісів
        </h2>
        <p className="font-normal text-[18px] leading-[30px] text-[#727272]" style={{ maxWidth: 600 }}>
          My Community інтегрується з інструментами, які ви вже використовуєте — без зайвих налаштувань
        </p>
      </div>

      {/* Marquee wrapper — max 3024px, centered, clips horizontally */}
      <div className="mx-auto w-full" style={{ maxWidth: 3024, overflow: "clip", overflowClipMargin: "40px" }}>

        {/* Рядок 1 — ліворуч */}
        <div
          className="relative py-2 w-full"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        >
          <div className="integrations-track flex">
            {track1.map((item, i) => <IntegrationCard key={i} item={item} />)}
          </div>
        </div>

        {/* Рядок 2 — праворуч */}
        <div
          className="relative py-2 w-full"
          style={{ maskImage: MASK, WebkitMaskImage: MASK }}
        >
          <div className="integrations-track-rtl flex">
            {track2.map((item, i) => <IntegrationCard key={i} item={item} />)}
          </div>
        </div>

      </div>

      {/* Кнопка */}
      <div className="flex justify-center" style={{ marginTop: 48 }}>
        <button
          style={{
            background: "#141414",
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "24px",
            padding: "14px 32px",
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
          }}
        >
          Дивитись всі інтеграції
        </button>
      </div>
    </section>
  );
}
