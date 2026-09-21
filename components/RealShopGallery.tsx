"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Store, Wrench, Cpu } from "lucide-react";
import { REAL_IMAGES } from "@/lib/constants";
import { Reveal } from "./SectionHeading";

const ICONS = [Store, Wrench, Cpu];

export default function RealShopGallery() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {REAL_IMAGES.map((r, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <Reveal key={r.src} delay={i * 0.1}>
            <motion.figure
              whileHover={{ y: -8 }}
              className="glass group overflow-hidden rounded-3xl transition-shadow hover:shadow-[0_20px_60px_rgba(0,194,255,0.25)]"
            >
              {/* No-crop frame: full image always visible via object-contain */}
              <div className="real-frame relative h-[260px] sm:h-[300px] bg-[#02040f]">
                <Image
                  src={r.src}
                  alt={r.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="!object-contain p-1"
                  priority={i === 0}
                />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-emerald-400/90 px-3 py-1 text-[11px] font-bold text-black">
                  <BadgeCheck className="h-3.5 w-3.5" /> REAL SHOP PHOTO
                </span>
              </div>
              <figcaption className="p-5">
                <p className="flex items-center gap-2 font-display text-[15px] font-bold text-white">
                  <Icon className="h-4 w-4 text-cyan-300" /> {r.title}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300/80">{r.desc}</p>
              </figcaption>
            </motion.figure>
          </Reveal>
        );
      })}
    </div>
  );
}
