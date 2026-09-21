"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`${center ? "text-center" : "text-left"} mx-auto mb-10 max-w-3xl`}>
      <span className="glass inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200">
        {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {sub && <p className="mt-3 text-[15px] leading-relaxed text-slate-300/80">{sub}</p>}
    </Reveal>
  );
}
