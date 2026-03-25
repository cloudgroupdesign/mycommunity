import Image from "next/image";
import { ChevronDown } from "@geist-ui/icons";

export default function Navbar() {
  return (
    <header className="border-b border-[#e5e6ea] h-16 flex items-center px-6 w-full sticky top-0 bg-white z-50">
      {/* Left — Logo */}
      <div className="flex flex-1 items-center">
        <Image
          src="/logo.png"
          alt="My Community"
          width={210}
          height={36}
          priority
          className="h-9 w-auto object-contain"
        />
      </div>

      {/* Center — Nav */}
      <nav className="flex flex-1 items-center justify-center gap-6">
        <button className="flex items-center gap-1.5 px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Продукти
          <ChevronDown size={14} />
        </button>
        <button className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Ціни
        </button>
        <button className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Відгуки
        </button>
        <button className="px-1 py-1 text-[14px] font-medium text-[#111827] hover:text-[#29abe2] transition-colors">
          Інтеграції
        </button>
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
