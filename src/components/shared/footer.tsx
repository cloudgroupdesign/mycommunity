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
    id: "facebook", name: "Facebook", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.253h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" /></svg>,
  },
  {
    id: "instagram", name: "Instagram", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" /></svg>,
  },
  {
    id: "youtube", name: "YouTube", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" /></svg>,
  },
  {
    id: "linkedin", name: "LinkedIn", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" /></svg>,
  },
  {
    id: "telegram", name: "Telegram", href: "#",
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
            <Image
              src="/logo.png"
              alt="My Community"
              width={160}
              height={40}
              className="h-8 w-auto object-contain object-left"
            />
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#727272" }}>
              Сучасна ERP/CRM платформа для українського бізнесу.
              Автоматизуйте процеси та ростіть ефективніше.
            </p>
          </div>

          {/* Nav columns — < 640px: vertical; ≥ 640px tablet: justify-between; desktop: fixed gaps */}
          <div className="flex flex-col sm:flex-row sm:justify-between lg:justify-start w-full lg:w-auto lg:gap-16 xl:gap-24 gap-8 flex-shrink-0">

            {/* Навігація */}
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#141414", marginBottom: 20 }}>Навігація</p>
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="footer-link" style={{ fontSize: 14, whiteSpace: "nowrap" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Соцмережі */}
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#141414", marginBottom: 20 }}>Слідкуйте за нами</p>
              <ul className="flex flex-col gap-3">
                {socials.map(({ id, name, href, icon }) => (
                  <li key={id}>
                    <a
                      href={href}
                      className="social-link"
                      data-social={id}
                      style={{ fontSize: 14, display: "flex", alignItems: "center", gap: 10 }}
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
          <p style={{ fontSize: 12, color: "#727272" }}>
            © {year} My Community. Усі права захищено.
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Політика конфіденційності", href: "/privacy" },
              { label: "Умови використання",        href: "/terms" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} className="footer-link" style={{ fontSize: 12 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
