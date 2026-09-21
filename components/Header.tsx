"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, Menu, X, Tv } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-[0_8px_40px_rgba(0,194,255,0.15)]" : "bg-transparent"
      }`}
    >
      {/* top strip */}
      <div className="hidden md:block border-b border-cyan-400/10 bg-black/40 text-[12px] text-cyan-100/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <p>⭐ 5.0 Google Rated · {BUSINESS.hours}</p>
          <p className="truncate">{BUSINESS.address}</p>
        </div>
      </div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#00C2FF] to-[#0066FF] shadow-[0_0_28px_rgba(0,194,255,0.6)]">
            <Tv className="h-6 w-6 text-white" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-[15px] sm:text-lg font-700 font-bold tracking-wide">
              LED TV <span className="text-gradient">SALE AND SERVICE</span>
            </span>
            <span className="block text-[10px] sm:text-[11px] text-cyan-200/70">
              25+ Years Trusted Experts · Ghaziabad
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-sm text-slate-200/90 transition hover:bg-cyan-400/10 hover:text-white hover:shadow-[0_0_18px_rgba(0,194,255,0.35)]"
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            className="btn-ghost rounded-full px-4 py-2.5 text-sm font-semibold text-cyan-100"
          >
            WhatsApp
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="btn-neon flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
        </div>

        <button
          className="lg:hidden rounded-xl border border-cyan-300/20 p-2 text-cyan-100"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass-strong mx-3 mb-3 rounded-2xl p-3">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-[15px] hover:bg-cyan-400/10"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <a href={BUSINESS.whatsapp} target="_blank" className="btn-ghost rounded-xl px-4 py-3 text-center text-sm font-semibold">
              WhatsApp
            </a>
            <a href={BUSINESS.phoneHref} className="btn-neon rounded-xl px-4 py-3 text-center text-sm font-bold text-white">
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
