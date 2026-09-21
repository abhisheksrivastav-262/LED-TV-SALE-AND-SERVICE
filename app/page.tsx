import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck, ShieldCheck, Zap, BadgeCheck, Wrench, Star, MapPin } from "lucide-react";
import SectionHeading, { Reveal } from "@/components/SectionHeading";
import { CounterRow } from "@/components/AnimatedCounter";
import BrandsMarquee from "@/components/BrandsMarquee";
import FAQ from "@/components/FAQ";
import MapEmbed from "@/components/MapEmbed";
import CTABanner from "@/components/CTABanner";
import RealShopGallery from "@/components/RealShopGallery";
import { ServiceGrid, ServiceCtaStrip } from "@/components/ServiceBits";
import ReviewGrid, { GoogleRatingBadge } from "@/components/ReviewBits";
import { BUSINESS, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Professional LED TV Repair & Sales in Ghaziabad — 25+ Years Experts",
  description: "25+ years repairing all brands of LED TVs with genuine parts & doorstep service in Indirapuram, Ghaziabad. Sony audio repair, new & refurbished TV sales. Call 9810555308.",
};

const WHY = [
  { icon: ShieldCheck, t: "100% Genuine Parts", d: "OEM-grade panels, boards & backlights with bill and warranty. No duplicate parts, ever." },
  { icon: Zap, t: "Same-Day Doorstep Service", d: "Technician at your home today across Indirapuram & Ghaziabad, 9 AM – 9 PM, all 7 days." },
  { icon: BadgeCheck, t: "25+ Years Expertise", d: "Chip-level specialists for LED, Smart, OLED / QLED TVs plus Sony audio systems." },
  { icon: Wrench, t: "Transparent Pricing", d: "Free diagnosis with repair. Quote approved by you before any work starts." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 sm:pt-36 pb-14">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2000&auto=format&fit=crop"
            alt="Premium LED TV in modern living room"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 via-[#050816]/85 to-[#050816]" />
        </div>
        <div className="grid-bg absolute inset-0" />
        <div className="blob h-96 w-96 bg-[#00C2FF] left-[-120px] top-20" />
        <div className="blob h-96 w-96 bg-[#0066FF] right-[-120px] top-40" style={{ animationDelay: "-6s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold tracking-widest text-cyan-200 uppercase">
              <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" /> 5.0 Google Rated · 25+ Years Trusted
            </span>
            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              Professional LED TV <span className="text-gradient">Repair & Sales</span> in Ghaziabad
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              25+ years experience repairing all brands of LED TVs with genuine parts and doorstep service.
              Sony audio experts · New & refurbished TVs · All remotes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={BUSINESS.phoneHref} className="btn-neon flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-white">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href={BUSINESS.whatsapp} target="_blank" className="btn-ghost flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-cyan-100">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <Link href="/contact" className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-bold text-white hover:bg-white/10">
                <CalendarCheck className="h-5 w-5" /> Book Repair
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-slate-300/90">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-cyan-300" /> Indirapuram, Ghaziabad</span>
              <span>·</span><span>Mon–Sun 9 AM – 9 PM</span>
              <span>·</span><span className="text-amber-300 font-bold">⭐ 5.0 (9 Reviews)</span>
            </div>
          </Reveal>

          {/* floating trust cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Same-Day Repair", d: "Most faults fixed today" },
              { t: "Genuine Parts + Bill", d: "Warranty on every part" },
              { t: "All Brands + Sony Audio", d: "LED · OLED · QLED · Smart" },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass animate-floaty rounded-3xl p-5 text-center" style={{ animationDelay: `${i * 0.8}s` }}>
                  <p className="font-display font-bold text-white">{c.t}</p>
                  <p className="mt-1 text-sm text-slate-300/80">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REAL SHOP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <SectionHeading
          eyebrow="Visit Our Real Store"
          title={<>Our Actual Shop & <span className="text-gradient">Live Workshop</span></>}
          sub="No stock photos here — these are real photos of our Indirapuram store, repair benches and chip-level motherboard work. Full images shown without cropping."
        />
        <RealShopGallery />
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <SectionHeading
          eyebrow="What We Fix & Sell"
          title={<>Premium <span className="text-gradient">Services Grid</span></>}
          sub="Chip-level repair for every fault — plus new TVs, custom assembly and original remotes."
        />
        <ServiceGrid limit={6} />
        <ServiceCtaStrip />
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <SectionHeading eyebrow="Why Choose Us" title={<>Apple-Grade Service, <span className="text-gradient">Local Trust</span></>} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="glass card-3d h-full rounded-3xl p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#0066FF] shadow-[0_0_22px_rgba(0,194,255,0.5)]">
                  <w.icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="font-display mt-4 font-bold">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10"><CounterRow /></div>
      </section>

      {/* BRANDS */}
      <section className="py-14">
        <SectionHeading eyebrow="All Brands" title={<>TV Brands <span className="text-gradient">We Repair</span></>} sub="Sony · Samsung · LG · Mi · OnePlus · Panasonic · Toshiba · Vu · TCL · Philips & more" />
        <BrandsMarquee />
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <SectionHeading eyebrow="Before / After" title={<>Repair <span className="text-gradient">Transformations</span></>} sub="Dead panel → factory-fresh display. Backlight, motherboard & panel faults restored in-house." />
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass overflow-hidden rounded-3xl">
              <div className="real-frame h-72 bg-[#02040f]">
                <Image src="/images/real/motherboard-repair.webp" alt="TV opened for chip-level motherboard repair — full photo without crop" width={900} height={700} className="!h-full !w-full !object-contain" loading="lazy" />
              </div>
              <p className="p-4 text-sm font-semibold">BEFORE — Opened faulty LED TV: SMPS + main-board diagnosis <span className="ml-2 rounded-full bg-emerald-400/20 px-2 py-0.5 text-[11px] text-emerald-300">REAL PHOTO</span></p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass overflow-hidden rounded-3xl">
              <div className="relative h-72 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1400&auto=format&fit=crop" alt="Repaired LED TV working perfectly after service" fill sizes="50vw" className="object-cover" loading="lazy" />
              </div>
              <p className="p-4 text-sm font-semibold">AFTER — Perfect display, colour-calibrated & tested 40+ points</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <SectionHeading eyebrow="Customer Love" title={<>⭐ 5.0 Rated <span className="text-gradient">Reviews</span></>} />
        <GoogleRatingBadge />
        <div className="mt-8"><ReviewGrid limit={3} /></div>
        <Reveal className="mt-8 text-center">
          <Link href="/reviews" className="btn-ghost inline-block rounded-full px-7 py-3 font-bold text-cyan-100">Read All Reviews</Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <SectionHeading eyebrow="Good To Know" title={<>Frequently Asked <span className="text-gradient">Questions</span></>} />
        <FAQ items={FAQS.slice(0, 6)} />
      </section>

      <CTABanner />

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-20">
        <SectionHeading eyebrow="Find Us" title={<>Visit Our <span className="text-gradient">Store</span></>} sub={BUSINESS.address} center />
        <MapEmbed />
      </section>
    </>
  );
}
