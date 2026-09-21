"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, BadgeCheck, MessageCircle } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import { Reveal } from "./SectionHeading";

export default function ReviewGrid({ limit }: { limit?: number }) {
  const list = limit ? REVIEWS.slice(0, limit) : REVIEWS;
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((r, i) => (
        <Reveal key={i} delay={(i % 3) * 0.08}>
          <motion.figure
            whileHover={{ y: -8, rotateX: 3 }}
            className="glass card-3d flex h-full flex-col rounded-3xl p-6"
          >
            <div className="flex gap-1 text-amber-300">
              {Array.from({ length: r.stars }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-amber-300" />
              ))}
            </div>
            <blockquote className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-200/90">
              “{r.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
              <span className="font-display grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#00C2FF] to-[#0066FF] text-sm font-bold text-white">
                {r.name.charAt(0)}
              </span>
              <span>
                <span className="flex items-center gap-1 text-sm font-bold text-white">
                  {r.name} <BadgeCheck className="h-4 w-4 text-cyan-300" />
                </span>
                <span className="text-xs text-slate-400">{r.area} · Google Review</span>
              </span>
            </figcaption>
          </motion.figure>
        </Reveal>
      ))}
    </div>
  );
}

export function GoogleRatingBadge() {
  return (
    <div className="glass mx-auto flex w-fit items-center gap-4 rounded-3xl px-8 py-5">
      <span className="font-display text-5xl font-bold text-gradient">5.0</span>
      <span>
        <span className="flex gap-1 text-amber-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-300" />
          ))}
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-sm text-slate-300">
          <Image src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=100&auto=format&fit=crop" alt="Google" width={18} height={18} className="rounded-full" />
          Google Rating · 9 Reviews
        </span>
      </span>
      <a href="https://www.google.com/maps/search/?api=1&query=LED+TV+Sale+and+Service+Indirapuram+Ghaziabad" target="_blank" className="btn-neon ml-2 hidden rounded-full px-5 py-2.5 text-sm font-bold text-white sm:block">
        Review Us
      </a>
    </div>
  );
}

export function WhatsappIcon() { return <MessageCircle className="h-4 w-4" />; }
