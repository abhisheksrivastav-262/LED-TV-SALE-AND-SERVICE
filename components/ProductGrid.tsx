"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, MessageCircle } from "lucide-react";
import { PRODUCTS, BUSINESS } from "@/lib/constants";
import { Reveal } from "./SectionHeading";

export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.map((p, i) => (
        <Reveal key={p.name} delay={(i % 3) * 0.08}>
          <motion.article whileHover={{ y: -8 }} className="glass card-3d overflow-hidden rounded-3xl">
            <div className="relative h-56 overflow-hidden">
              <Image src={p.img} alt={p.name} fill sizes="(max-width:768px)100vw,33vw" className="object-cover transition duration-700 hover:scale-110" loading="lazy" />
              <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-[#00C2FF] to-[#0066FF] px-3 py-1 text-[11px] font-bold text-white shadow-[0_0_18px_rgba(0,194,255,0.6)]">
                {p.tag}
              </span>
              <span className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold text-emerald-300 backdrop-blur">
                <BadgeCheck className="h-3.5 w-3.5" /> Warranty Included
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold">{p.name}</h3>
              <p className="text-gradient mt-1 text-xl font-bold">{p.price}</p>
              <ul className="mt-3 grid grid-cols-2 gap-1.5 text-[12.5px] text-slate-300/85">
                {p.specs.map((s) => (
                  <li key={s} className="rounded-lg bg-white/5 px-2.5 py-1.5">✓ {s}</li>
                ))}
              </ul>
              <a
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Namaste! Mujhe *${p.name}* (${p.price}) ke baare me enquiry karni hai. Details bhejein.`)}`}
                target="_blank"
                className="btn-neon mt-4 flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
              </a>
            </div>
          </motion.article>
        </Reveal>
      ))}
    </div>
  );
}
