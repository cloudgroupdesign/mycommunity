export default function Footer() {
  return (
    <footer className="border-t border-[#e5e6ea] py-10 w-full">
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between">
        <span className="font-semibold text-[16px] text-[#141414]">
          MY COMMUNITY
        </span>
        <p className="text-[14px] text-[#727272]">
          © {new Date().getFullYear()} My Community. Всі права захищені.
        </p>
      </div>
    </footer>
  );
}
