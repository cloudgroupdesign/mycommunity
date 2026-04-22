import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Продукти",   href: "/#features" },
  { label: "Ціни",       href: "/prices" },
  { label: "Інтеграції", href: "/integrations" },
  { label: "Про нас",    href: "/about" },
];

const socials = [
  {
    id: "facebook", name: "Facebook", href: "https://m.facebook.com/people/Maybutne-Consulting/61558223992122/",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.253h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" /></svg>,
  },
  {
    id: "instagram", name: "Instagram", href: "https://www.instagram.com/mbtn_consulting",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" /></svg>,
  },
  {
    id: "telegram", name: "Telegram", href: "https://t.me/mbtn_consulting",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z" /></svg>,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white w-full px-6">
      {/* Main */}
      <div className="w-full mx-auto" style={{ maxWidth: 1080, paddingTop: 96, paddingBottom: 40 }}>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-5" style={{ maxWidth: 280 }}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="My Community"
                width={160}
                height={40}
                className="h-8 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-[16px] lg:text-[14px]" style={{ lineHeight: 1.6, color: "#727272" }}>
              Сучасна ERP/CRM платформа для бізнесу. Оптимізуйте процеси та масштабуйтеся швидше.
            </p>
          </div>

          {/* Nav columns — < 640px: vertical; ≥ 640px tablet: justify-between; desktop: fixed gaps */}
          <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-start w-full lg:w-auto lg:gap-16 xl:gap-24 gap-8 flex-shrink-0">

            {/* Навігація */}
            <div>
              <p className="text-[16px] lg:text-[14px]" style={{ fontWeight: 600, color: "#141414", marginBottom: 20 }}>Навігація</p>
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link text-[16px] lg:text-[14px]" style={{ whiteSpace: "nowrap" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Соцмережі */}
            <div>
              <p className="text-[16px] lg:text-[14px]" style={{ fontWeight: 600, color: "#141414", marginBottom: 20 }}>Слідкуйте за нами</p>
              <ul className="flex flex-col gap-3">
                {socials.map(({ id, name, href, icon }) => (
                  <li key={id}>
                    <a
                      href={href}
                      className="social-link text-[16px] lg:text-[14px]"
                      data-social={id}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>{icon}</span>
                      <span style={{ whiteSpace: "nowrap" }}>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full mx-auto" style={{ maxWidth: 1080 }}>
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #e5e6ea", paddingTop: 40, paddingBottom: 56 }}
        >
          <p className="text-[14px] lg:text-[12px]" style={{ color: "#727272" }}>
            © {year} My Community. Усі права захищено.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Політика конфіденційності", href: "/privacy" },
              { label: "Умови використання",        href: "/terms" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="footer-link text-[14px] lg:text-[12px]">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
