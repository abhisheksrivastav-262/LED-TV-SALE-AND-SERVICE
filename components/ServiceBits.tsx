"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Tv, Wifi, Sparkles, Speaker, Cpu, Monitor, PlugZap, Cable,
  Drill, House, Factory, Radio, ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";
import { Reveal } from "./SectionHeading";

const MAP: Record<string, LucideIcon> = {
  Tv, Wifi, Sparkles, Speaker, Cpu, Monitor, PlugZap, Cable, Drill, House, Factory, Remote: Radio,
};

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Tv;
  return <Icon className={className} />;
}

export function ServiceGrid({ limit }: { limit?: number }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 0.08}>
          <motion.article
            whileHover={{ y: -8 }}
            className="glass card-3d group h-full overflow-hidden rounded-3xl"
          >
            <div className="relative h-44 overflow-hidden">
              <Image src={s.img} alt={s.title} fill sizes="(max-width:768px)100vw,33vw" className="object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent" />
              <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#0066FF] text-white shadow-[0_0_22px_rgba(0,194,255,0.6)]">
                <ServiceIcon name={s.icon} />
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-300/80">{s.desc}</p>
              <a
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Namaste! Mujhe ${s.title} chahiye. Please quote bhejein.`)}`}
                target="_blank"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cyan-300 hover:text-cyan-100"
              >
                Enquire on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        </Reveal>
      ))}
    </div>
  );
}

export function ServiceCtaStrip() {
  return (
    <Reveal className="mt-8 text-center">
      <Link href="/services" className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3 font-bold text-cyan-100">
        View All 12 Services <ArrowRight className="h-4 w-4" />
      </Link>
    </Reveal>
  );
}
