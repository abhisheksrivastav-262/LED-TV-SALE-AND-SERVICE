import { BRANDS } from "@/lib/constants";

export default function BrandsMarquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <div className="relative overflow-hidden py-2">
      <div className="animate-marquee flex w-max gap-4">
        {row.map((b, i) => (
          <span
            key={i}
            className="glass rounded-2xl px-8 py-4 font-display text-lg font-bold tracking-widest text-white/90"
          >
            {b}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050816] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050816] to-transparent" />
    </div>
  );
}
