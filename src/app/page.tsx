export const revalidate = 3600; // ISR: revalidate every hour

import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Hero from "@/components/sections/hero";
import Tasks from "@/components/sections/tasks";
import Features from "@/components/sections/features";
import Why from "@/components/sections/why";
import Integrations from "@/components/sections/integrations";
import CTA from "@/components/sections/cta";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Tasks />
        <Features />
        <Why />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
