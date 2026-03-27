import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SWRegister } from "@/components/shared/sw-register";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Community — Єдина система управління бізнесом",
  description:
    "My Community об'єднує продажі, комунікації, задачі, команди, виробництво, фінанси та аналітику в одному зручному просторі.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${inter.variable} antialiased`}>
      <body className="min-h-full">
        {children}
        <SWRegister />
      </body>
    </html>
  );
}
