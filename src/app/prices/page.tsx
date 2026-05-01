export const revalidate = 86400; // ISR: revalidate daily

import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import PricingPlans from "@/components/prices/pricing-plans";

export const metadata: Metadata = {
  title: "Ціни",
  description:
    "Прозорі ціни на тарифні плани My Community. START, GROW, PRO — обирайте бандл під розмір і завдання вашого бізнесу.",
};

export default function PricesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">

        {/* Hero */}
        <section className="w-full flex flex-col items-center text-center px-4 md:px-6 pt-10 md:pt-14 lg:pt-[72px] pb-0">
          <div className="flex flex-col gap-4 md:gap-5 items-center" style={{ maxWidth: 640 }}>
            <h1 className="hero-h1">
              Прозорі ціни для вашого бізнесу
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-normal text-[#727272]">
              Обирайте бандл під свій бізнес. Ціни фіксовані — жодних прихованих платежів.{" "}
              <span className="text-[#141414] font-medium">
                Підключення відбувається після персональної демонстрації системи.
              </span>
            </p>
          </div>
          <p className="text-[15px] md:text-[16px] text-[#9ca3af]" style={{ marginTop: 56, marginBottom: 56 }}>
            Вартість розраховується{" "}
            <span className="font-medium text-[#6b7280]">за кожного користувача на місяць</span>.
          </p>
        </section>

        <PricingPlans />

      </main>
      <Footer />
    </div>
  );
}
