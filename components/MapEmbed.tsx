import { Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function MapEmbed({ tall = false }: { tall?: boolean }) {
  return (
    <div>
      <div className={`glass overflow-hidden rounded-3xl ${tall ? "h-[420px]" : "h-[320px]"}`}>
        <iframe
          title="Shop location map — 613G Nyay Khand 2, Indirapuram"
          src={`https://www.google.com/maps?q=${BUSINESS.mapLat},${BUSINESS.mapLng}&z=17&output=embed`}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <a
        href={BUSINESS.mapUrl}
        target="_blank"
        className="btn-neon mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white"
      >
        <Navigation className="h-4 w-4" /> Get Directions on Google Maps
      </a>
    </div>
  );
}
