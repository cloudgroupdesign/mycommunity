import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import Hero from "@/components/sections/hero";
import Team from "@/components/sections/team";
import Why from "@/components/sections/why";
import Tasks from "@/components/sections/tasks";
import Integrations from "@/components/sections/integrations";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Team />
        <Why />
        <Tasks />
        <Integrations />
      </main>
      <Footer />
    </div>
  );
}
