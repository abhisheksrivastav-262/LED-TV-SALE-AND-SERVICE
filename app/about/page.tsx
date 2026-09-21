import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Users, Target, Eye, BadgeCheck } from "lucide-react";
import SectionHeading, { Reveal } from "@/components/SectionHeading";
import { CounterRow } from "@/components/AnimatedCounter";
import RealShopGallery from "@/components/RealShopGallery";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us — 25+ Years LED TV Experts in Ghaziabad",
  description: "Story of LED TV Sale and Service, Indirapuram Ghaziabad — 25+ years, genuine parts, same-day repair, mission & vision.",
};

const TIMELINE = [
  { yr: "2000", t: "The Beginning", d: "Started as Shree Siddhi Electronics — CRT & audio repair with a single workbench in Ghaziabad." },
  { yr: "2010", t: "LED Era Mastery", d: "Early adopters of LED / LCD chip-level repair — SMPS, inverter & main-board expertise." },
  { yr: "2016", t: "Smart TV + Sony Audio", d: "Became the go-to shop for Android Smart TVs and Sony home theatre / audio systems." },
  { yr: "2021", t: "Sales + Custom Assembly", d: "Launched new & refurbished TV sales plus custom TV assembly on order with warranty." },
  { yr: "Today", t: "5.0 Rated & Growing", d: "5000+ TVs repaired, 1000+ happy customers, same-day doorstep service across Ghaziabad." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="blob h-80 w-80 bg-[#00C2FF] left-[-100px] top-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Story"
            title={<>25+ Years of <span className="text-gradient">Trusted Repair Excellence</span></>}
            sub="Branch of Shree Siddhi Electronics — from a single workbench to Ghaziabad's 5.0-rated LED TV hospital."
          />
          <RealShopGallery />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-10">
        <SectionHeading eyebrow="Journey" title={<>The <span className="text-gradient">Timeline</span></>} />
        <div className="relative ml-3 border-l border-cyan-400/20 pl-8">
          {TIMELINE.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative pb-10">
                <span className="absolute -left-[43px] grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#00C2FF] to-[#0066FF] text-[11px] font-bold text-white shadow-[0_0_18px_rgba(0,194,255,0.6)]">
                  ✓
                </span>
                <p className="text-gradient font-display text-xl font-bold">{t.yr}</p>
                <h3 className="font-display mt-1 text-lg font-bold">{t.t}</h3>
                <p className="mt-1 text-sm text-slate-300/80">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <Target className="h-8 w-8 text-cyan-300" />
              <h3 className="font-display mt-3 text-2xl font-bold">Our Mission</h3>
              <p className="mt-2 text-slate-300/85">Repair over replace. Save customers money with honest chip-level repair, genuine parts and transparent pricing — every TV, every time.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-3xl p-8">
              <Eye className="h-8 w-8 text-cyan-300" />
              <h3 className="font-display mt-3 text-2xl font-bold">Our Vision</h3>
              <p className="mt-2 text-slate-300/85">Be NCR's most trusted electronics care brand — where every home thinks of us first for TV sales, service and honest advice.</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Users, t: "Expert Technicians", d: "Factory-trained, ESD-safe, 25-yr hands-on experience." },
            { icon: ShieldCheck, t: "Genuine Spare Parts", d: "OEM panels & boards with bill + warranty." },
            { icon: BadgeCheck, t: "Same-Day Promise", d: "Most repairs finished the same day, at your home." },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass card-3d rounded-3xl p-6 text-center">
                <c.icon className="mx-auto h-8 w-8 text-cyan-300" />
                <h4 className="font-display mt-3 font-bold">{c.t}</h4>
                <p className="mt-1 text-sm text-slate-300/80">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10"><CounterRow /></div>
      </section>

      <div className="py-6"><CTABanner /></div>
    </>
  );
}
