"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "@geist-ui/icons";
import { useDemoModal } from "./modal-context";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 4);

      // Auto-hide only on mobile/tablet (< 1024px)
      if (window.innerWidth < 1024) {
        if (current > lastScrollY.current && current > 64) {
          // Scrolling down — hide
          setHidden(true);
        } else if (current < lastScrollY.current) {
          if (current < 100) {
            // Near top — always show
            setHidden(false);
          } else if (current > 200) {
            // Scrolling up, past hero zone — show with animation
            setHidden(false);
          }
          // Between 100–200px: maintain state to avoid confusion near hero
        }
      }
      lastScrollY.current = current;
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) setHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const { open: openModal, isOpen: modalOpen } = useDemoModal();

  // When modal opens — always reveal navbar so it's visible after modal closes
  useEffect(() => {
    if (modalOpen) setHidden(false);
  }, [modalOpen]);

  const scrollToFeatures = () => {
    if (pathname === "/") {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#features";
    }
  };

  const shadowClass = scrolled ? "shadow-[0_2px_12px_0_rgba(0,0,0,0.08)]" : "";
  const hideClass = hidden ? "-translate-y-full" : "translate-y-0";

  return (
    <>
      <header
        className={`border-b border-[#e5e6ea] w-full sticky bg-white z-50 ${shadowClass} ${hideClass}`}
        style={{
          top: "calc(-1 * env(safe-area-inset-top))",
          paddingTop: "env(safe-area-inset-top)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="h-[68px] lg:h-16 pt-1 lg:pt-0 flex items-center px-6 w-full">
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

        {/* Center — Nav (desktop only) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6">
          <button onClick={scrollToFeatures} className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors cursor-pointer">
            Продукти
          </button>
          <Link href="/prices" className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
            Ціни
          </Link>

          <Link href="/integrations" className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
            Інтеграції
          </Link>
          <Link href="/about" className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors whitespace-nowrap">
            Про нас
          </Link>
        </nav>

        {/* Right — CTA (desktop only) */}
        <div className="hidden lg:flex flex-1 justify-end">
          <button
            className="btn-primary"
            onClick={openModal}
            style={{
              background: "#29abe2",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "22px",
              padding: "9px 20px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Замовити демо
          </button>
        </div>

        {/* Burger (mobile + tablet) */}
        <button
          className="lg:hidden p-2 -mr-1 text-[#141414]"
          onClick={() => setMenuOpen(true)}
          aria-label="Відкрити меню"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={24} />
        </button>
        </div>
      </header>

      {/* Mobile/tablet full-screen sidebar */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[100] bg-white flex flex-col lg:hidden"
          style={{ animation: "slideInRight 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Навігаційне меню"
        >
          {/* Sidebar header */}
          <div
            className="flex items-center justify-between px-6 flex-shrink-0"
            style={{ paddingTop: "calc(env(safe-area-inset-top) + 4px)", minHeight: "calc(68px + env(safe-area-inset-top))" }}
          >
            <Image src="/logo.png" alt="My Community" width={210} height={36} className="h-9 w-auto object-contain" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-1 text-[#141414]"
              aria-label="Закрити меню"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links + socials */}
          <div className="flex flex-col px-6 flex-1 overflow-y-auto" style={{ paddingTop: 32 }}>
            <nav className="flex flex-col gap-[12px]">
              <button
                onClick={() => { scrollToFeatures(); setMenuOpen(false); }}
                className="flex items-center w-full text-left text-[#111827] font-medium hover:text-[#29abe2] transition-colors"
                style={{ fontSize: 36, height: 48 }}
              >
                Продукти
              </button>
              <Link
                href="/prices"
                className="flex items-center text-[#111827] font-medium hover:text-[#29abe2] transition-colors"
                style={{ fontSize: 36, height: 48 }}
                onClick={() => setMenuOpen(false)}
              >
                Ціни
              </Link>
              <Link
                href="/integrations"
                className="flex items-center text-[#111827] font-medium hover:text-[#29abe2] transition-colors"
                style={{ fontSize: 36, height: 48 }}
                onClick={() => setMenuOpen(false)}
              >
                Інтеграції
              </Link>
              <Link
                href="/about"
                className="flex items-center text-[#111827] font-medium hover:text-[#29abe2] transition-colors"
                style={{ fontSize: 36, height: 48 }}
                onClick={() => setMenuOpen(false)}
              >
                Про нас
              </Link>
            </nav>

            {/* Socials */}
            <div style={{ marginTop: 32 }}>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#101828", letterSpacing: 0, marginBottom: 6 }}>Слідкуйте за нами</p>
              <div className="flex flex-col" style={{ gap: 6 }}>
                {[
                  { name: "Facebook",  href: "#" },
                  { name: "Instagram", href: "#" },
                  { name: "YouTube",   href: "#" },
                  { name: "LinkedIn",  href: "#" },
                  { name: "Telegram",  href: "#" },
                ].map(({ name, href }) => (
                  <a key={name} href={href} className="flex items-center hover:text-[#29abe2] transition-colors" style={{ fontSize: 18, color: "#4b5563", height: 32 }} onClick={() => setMenuOpen(false)}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
