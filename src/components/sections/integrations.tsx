const PLACEHOLDER_COUNT = 20;

export default function Integrations() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      {/* Заголовок */}
      <div className="w-full flex flex-col items-center text-center" style={{ maxWidth: 1080, marginBottom: 56 }}>
        <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
          Підключіться до улюблених сервісів
        </h2>
      </div>

      {/* Сітка карток — max 10 колонок, зафіксована по ширині */}
      <div
        className="w-full mx-auto"
        style={{ maxWidth: 1080 }}
      >
        <div
          className="grid gap-3 w-full"
          style={{ gridTemplateColumns: "repeat(10, 1fr)" }}
        >
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="border border-[#e5e6ea] rounded-2xl bg-white flex items-center justify-center"
              style={{ aspectRatio: "1 / 1" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
