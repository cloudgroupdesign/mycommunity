export default function CTA() {
  return (
    <section className="w-full" style={{ padding: "0 32px", paddingBottom: 0 }}>
      <div
        style={{
          borderRadius: 24,
          overflow: "hidden",
          position: "relative",
          background: "#ffffff",
        }}
      >
        {/* Градієнт — кути + нижній периметр, центральний овал чистий */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `
              radial-gradient(ellipse 58% 62% at   0%  95%, rgba(41,171,226,0.28)  0%, transparent 70%),
              radial-gradient(ellipse 52% 52% at  25% 102%, rgba(32,169,157,0.22)  0%, transparent 68%),
              radial-gradient(ellipse 52% 48% at  50% 118%, rgba(141,198,63,0.18)  0%, transparent 68%),
              radial-gradient(ellipse 52% 52% at  75% 102%, rgba(247,148,29,0.22)  0%, transparent 68%),
              radial-gradient(ellipse 58% 62% at 100%  95%, rgba(232,76,61,0.25)   0%, transparent 70%)
            `,
          }}
        />

        {/* Контент */}
        <div
          className="relative flex flex-col items-center text-center px-6"
          style={{ paddingTop: 96, paddingBottom: 168, gap: 28, zIndex: 1 }}
        >
          <h2
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: "78px",
              letterSpacing: "-0.01em",
              color: "#141414",
            }}
          >
            Почніть керувати бізнесом
            <br />
            розумніше вже сьогодні
          </h2>

          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: "30px",
              color: "#4b5563",
              maxWidth: 520,
            }}
          >
            Об&apos;єднайте всі процеси в одному місці та забудьте про хаос.
            Спробуйте My Community безкоштовно.
          </p>

          <button
            style={{
              marginTop: 8,
              background: "#29abe2",
              color: "#fff",
              fontSize: 18,
              fontWeight: 600,
              lineHeight: "28px",
              padding: "14px 36px",
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Записатися на демо
          </button>
        </div>
      </div>
    </section>
  );
}
