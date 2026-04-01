import Image from "next/image";

export type IntegrationItem = {
  id: string;
  name: string;
  desc: string;
  logo: string;
};

type Props = {
  item: IntegrationItem;
  className?: string;
  style?: React.CSSProperties;
};

export default function IntegrationCard({ item, className = "", style }: Props) {
  return (
    <div
      className={`flex items-start gap-4 bg-white border border-[#e5e6ea] rounded-2xl ${className}`}
      style={style}
    >
      <div
        className="flex-shrink-0 flex items-center justify-center overflow-hidden"
        style={{ width: 48, height: 48 }}
      >
        <Image
          src={item.logo}
          alt={item.name}
          width={96}
          height={96}
          quality={85}
          style={{ objectFit: "contain", width: 48, height: 48 }}
        />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-[15px] leading-6 text-[#141414] mb-1">{item.name}</p>
        <p className="integration-card-desc font-normal text-[14px] leading-5 text-[#727272]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
