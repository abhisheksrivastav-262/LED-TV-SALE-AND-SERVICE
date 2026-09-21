"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Reveal } from "./SectionHeading";

export default function CTABanner() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-20">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-12">
          <div className="blob h-64 w-64 bg-[#00C2FF] left-[-60px] top-[-60px]" />
          <div className="blob h-64 w-64 bg-[#0066FF] right-[-60px] bottom-[-60px]" />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display relative text-3xl font-bold sm:text-4xl"
          >
            TV Not Working? <span className="text-gradient">Same-Day Doorstep Repair</span>
          </motion.h2>
          <p className="relative mx-auto mt-3 max-w-xl text-slate-300">
            Call now — technician reaches your home today. Free diagnosis with repair, genuine parts, bill & warranty.
          </p>
          <div className="relative mt-7 flex flex-wrap justify-center gap-3">
            <a href={BUSINESS.phoneHref} className="btn-neon flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href={BUSINESS.whatsapp} target="_blank" className="btn-ghost flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-cyan-100">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a href="/contact" className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-bold text-white hover:bg-white/10">
              <CalendarCheck className="h-5 w-5" /> Book Repair
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
