import IntegrationCard, { type IntegrationItem } from "@/components/shared/integration-card";

// One card slot: 370px width + 8px margin each side = 386px
// One set (5 cards): 5 × 386 = 1930px — used in CSS keyframes
const ROW_1: IntegrationItem[] = [
  { id: "google-calendar", name: "Google Calendar", desc: "Синхронізуйте зустрічі та події команди в реальному часі.",  logo: "/google-calendar-v2.png" },
  { id: "zoom",            name: "Zoom",            desc: "Запускайте відеодзвінки прямо з картки клієнта або угоди.", logo: "/zoom-v2.png" },
  { id: "telegram",        name: "Telegram",        desc: "Отримуйте сповіщення та відповідайте клієнтам прямо в Telegram.", logo: "/telegram-new.png" },
  { id: "viber",           name: "Viber",           desc: "Надсилайте повідомлення та сповіщення клієнтам через Viber.", logo: "/viber-v2.png" },
  { id: "meta",            name: "Meta",            desc: "Отримуйте ліди з Facebook Lead Ads та спілкуйтесь через Messenger.", logo: "/facebook-v2.png" },
];

const ROW_2: IntegrationItem[] = [
  { id: "amazon",    name: "Amazon",    desc: "Управляйте замовленнями Amazon Marketplace з єдиного кабінету.", logo: "/amazon-v2.png" },
  { id: "ebay",      name: "eBay",      desc: "Синхронізуйте товари та замовлення з міжнародним маркетплейсом.", logo: "/ebay-v2.png" },
  { id: "rozetka",   name: "Rozetka",   desc: "Обробляйте замовлення з найбільшого українського маркетплейсу.", logo: "/rozetka-new.png" },
  { id: "ringostat", name: "Ringostat", desc: "Відстежуйте дзвінки та автоматично прив'язуйте їх до клієнтів і угод.", logo: "/ringostat-v2.png" },
  { id: "unitalk",   name: "Unitalk",   desc: "IP-телефонія з автоматичною фіксацією дзвінків у картці клієнта.", logo: "/unitalk-v2.png" },
];

// 3× duplication — 3 × 1930px = 5790px, within GPU texture limits on Windows.
// Covers up to ~3860px viewport (2×one-set) which exceeds our 3024px cap.
const track1 = Array(3).fill(ROW_1).flat();
const track2 = Array(3).fill(ROW_2).flat();

// Білий градієнт-overlay для fade ефекту на краях.
// НЕ використовуємо mask-image / overflow:hidden на контейнері —
// вони обрізають box-shadow дочірніх елементів (те саме що було з мокапом).
const FADE_OVERLAY = "linear-gradient(to right, white 0%, transparent 8%, transparent 92%, white 100%)";

export default function Integrations() {
  return (
    // overflow-x: clip на секції — клiпає горизонтальний overflow треку,
    // але НЕ впливає на vertical overflow (тіні карток)
    <section className="py-24 bg-white w-full">
      {/* Заголовок + опис */}
      <div className="w-full mx-auto px-6 text-center flex flex-col items-center gap-5" style={{ maxWidth: 1080, marginBottom: 56 }}>
        <h2 className="section-h2">
          Підключіться до улюблених сервісів
        </h2>
        <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-[26px] lg:leading-[30px] font-normal text-[#727272]" style={{ maxWidth: 600 }}>
          My Community інтегрується з інструментами, які ви вже використовуєте — без зайвих налаштувань
        </p>
      </div>

      {/* Marquee wrapper — max 3024px, centered.
          НЕ має overflow — тіні карток вільно виходять вертикально.
          Горизонтальний клiп — через overflow-x:clip на секції.
          Fade ефект — білий gradient overlay (absolute, pointer-events:none). */}
      <div className="relative mx-auto w-full" style={{ maxWidth: 3024, overflowX: "clip" }}>

        {/* Білий fade overlay — поверх карток, тільки по краях, не обрізає тіні */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: FADE_OVERLAY, zIndex: 10 }}
        />

        {/* Рядок 1 — ліворуч */}
        <div className="relative py-2 w-full">
          <div className="integrations-track flex">
            {track1.map((item, i) => (
              <IntegrationCard
                key={i}
                item={item}
                className="integration-card flex-shrink-0"
                style={{ width: 370, padding: "22px 28px", margin: "0 8px" }}
              />
            ))}
          </div>
        </div>

        {/* Рядок 2 — праворуч */}
        <div className="relative py-2 w-full">
          <div className="integrations-track-rtl flex">
            {track2.map((item, i) => (
              <IntegrationCard
                key={i}
                item={item}
                className="integration-card flex-shrink-0"
                style={{ width: 370, padding: "22px 28px", margin: "0 8px" }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Кнопка */}
      <div className="flex justify-center" style={{ marginTop: 48 }}>
        <a
          href="/integrations"
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
          Дивитись всі інтеграції
        </a>
      </div>
    </section>
  );
}
