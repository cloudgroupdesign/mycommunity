"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "@geist-ui/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`border-b border-[#e5e6ea] h-16 flex items-center px-6 w-full sticky top-0 bg-white z-50 transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]" : ""}`}>
      {/* Left — Logo */}
      <div className="flex flex-1 items-center">
        <Link
          href="/"
          onClick={() => { if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <Image
            src="/logo.png"
            alt="My Community"
            width={210}
            height={36}
            priority
            className="h-9 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Center — Nav */}
      <nav className="flex flex-1 items-center justify-center gap-6">
        <button className="flex items-center gap-1.5 px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Продукти
          <ChevronDown size={14} />
        </button>
        <Link href="/prices" className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Ціни
        </Link>
        <button className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Відгуки
        </button>
        <Link href="/integrations" className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Інтеграції
        </Link>
        <Link href="#" className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors whitespace-nowrap">
          Про нас
        </Link>
      </nav>

      {/* Right */}
      <div className="flex flex-1 justify-end">
        <button className="px-4 py-2 text-[14px] font-medium text-[#29abe2] hover:opacity-80 transition-opacity">
          Увійти
        </button>
      </div>
    </header>
  );
}
