import { Play } from "@geist-ui/icons";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-16 pt-20 pb-[120px] w-full">
      <div className="flex flex-col gap-10 items-center justify-center max-w-[1080px] w-full px-6">
        {/* Text block */}
        <div className="flex flex-col gap-8 items-center text-center w-full">
          <h1 className="font-semibold text-[72px] leading-[78px] text-[#141414] tracking-tight w-full">
            Єдина система
            <br />
            управління бізнесом
            <br />
            для підприємців
          </h1>
          <p className="font-normal text-[18px] leading-[30px] text-[#4b5563] max-w-[680px]">
            My Community об&apos;єднує продажі, комунікації, задачі, команди,{" "}
            <br />
            виробництво, фінанси та аналітику в одному зручному просторі.{" "}
            <br />
            Без хаосу. Без десятків сервісів.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 items-center">
          <button className="bg-[#29abe2] flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-[20px] leading-8 hover:bg-[#1f96cc] transition-colors whitespace-nowrap">
            Записатися на демо-перегляд
          </button>
          <button className="bg-white border border-[#e5e6ea] flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[20px] leading-8 text-[#141414] hover:bg-gray-50 transition-colors whitespace-nowrap">
            <Play size={16} />
            Переглянути демо
          </button>
        </div>
      </div>

      {/* Hero media placeholder */}
      <div className="bg-white border-2 border-[#e5e6ea] rounded-2xl w-[1080px] h-[604px] flex items-center justify-center text-[#e5e6ea]">
        {/* Photo / Video goes here */}
      </div>
    </section>
  );
}
