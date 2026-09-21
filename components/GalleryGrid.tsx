"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, BadgeCheck, Expand } from "lucide-react";
import { GALLERY } from "@/lib/constants";
import { Reveal } from "./SectionHeading";

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {GALLERY.map((g, i) => (
          <Reveal key={i} delay={0}>
            <button
              onClick={() => setActive(i)}
              className="glass group relative block w-full overflow-hidden rounded-2xl text-left"
            >
              {/* Real photos: contain (no crop). Stock: cover. */}
              {g.real ? (
                <div className="real-frame h-64 bg-[#02040f]">
                  <Image src={g.src} alt={g.title} width={800} height={600} className="!h-full !w-full !object-contain" loading="lazy" />
                </div>
              ) : (
                <div className="relative h-64 overflow-hidden">
                  <Image src={g.src} alt={g.title} fill sizes="(max-width:768px)50vw,33vw" className="object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
                </div>
              )}
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 to-transparent px-4 pb-3 pt-10 text-[13px] font-semibold">
                <span className="flex items-center gap-1.5">
                  {g.real && <BadgeCheck className="h-4 w-4 text-emerald-300" />}
                  {g.title}
                </span>
                <Expand className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <button className="absolute right-5 top-5 rounded-full border border-white/20 p-2 text-white" aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <motion.figure
              key={active}
              initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="real-frame max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#02040f]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh] w-full">
                <Image
                  src={GALLERY[active].src}
                  alt={GALLERY[active].title}
                  fill
                  sizes="90vw"
                  className={GALLERY[active].real ? "!object-contain" : "object-contain"}
                />
              </div>
            </motion.figure>
            <p className="absolute bottom-6 text-sm font-semibold text-white">{GALLERY[active].title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
