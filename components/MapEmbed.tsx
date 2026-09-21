import { BUSINESS } from "@/lib/constants";

export default function MapEmbed({ tall = false }: { tall?: boolean }) {
  return (
    <div className={`glass overflow-hidden rounded-3xl ${tall ? "h-[420px]" : "h-[320px]"}`}>
      <iframe
        title="Shop location map"
        src={`https://www.google.com/maps?q=${BUSINESS.mapQuery}&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
