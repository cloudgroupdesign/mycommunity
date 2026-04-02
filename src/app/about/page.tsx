import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "Про нас",
  description:
    "My Community — команда, що будує єдину систему управління для українських церков, громад і організацій. Дізнайтесь більше про нас та наших засновників.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
