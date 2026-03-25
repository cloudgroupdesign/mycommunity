export default function Team() {
  return (
    <section className="w-full flex flex-col items-center px-6 py-24">
      <div className="w-full flex flex-col gap-14 items-center" style={{ maxWidth: 1080 }}>
        <div className="flex flex-col gap-8 items-center text-center w-full">
          <h2 className="font-semibold text-[54px] leading-[64px] text-[#141414] tracking-tight">
            Команда Maybutne Consulting
          </h2>
          <p className="font-normal text-[18px] leading-[30px] text-[#727272] max-w-[820px]">
            Розробники My Community — власники консалтингової компанії Maybutne
            Consulting, які більше 10 років працювали з реальними бізнесами та
            впроваджували різні CRM, ERP і системи управління.
          </p>
        </div>
        <div className="bg-white border-2 border-[#e5e6ea] rounded-2xl w-full h-[528px]" />
      </div>
    </section>
  );
}
