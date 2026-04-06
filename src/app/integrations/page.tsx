export const revalidate = 86400; // ISR: revalidate daily

import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import IntegrationsContent from "./integrations-content";

export const metadata: Metadata = {
  title: "Інтеграції",
  description:
    "My Community інтегрується з Google Calendar, Zoom, Telegram, Viber, Meta, Amazon, eBay, Rozetka, Ringostat, Unitalk та іншими сервісами — без зайвих налаштувань.",
};

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <IntegrationsContent />
      </main>
      <Footer />
    </div>
  );
}
