import Link from "next/link";
import { Phone, MapPin, Clock, Star, MessageCircle } from "lucide-react";
import { BUSINESS, NAV, SERVICES } from "@/lib/constants";

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-0 border-t border-cyan-400/10 bg-[#030613]">
      <div className="blob h-72 w-72 bg-[#0066FF] left-[-80px] top-0" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold">
            LED TV <span className="text-gradient">SALE AND SERVICE</span>
          </p>
          <p className="mt-2 text-sm text-cyan-100/70">{BUSINESS.tagline}</p>
          <p className="mt-3 flex items-center gap-1 text-sm text-amber-300">
            <Star className="h-4 w-4 fill-amber-300" /> {BUSINESS.rating} Google Rating ({BUSINESS.reviews})
          </p>
          <div className="mt-4 flex gap-2">
            <a href={BUSINESS.instagram} target="_blank" aria-label="Follow us on Instagram" className="btn-ghost grid h-10 w-10 place-items-center rounded-full">
              <InstagramIcon />
            </a>
            <a href={BUSINESS.whatsapp} target="_blank" aria-label="Chat on WhatsApp" className="btn-ghost grid h-10 w-10 place-items-center rounded-full">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href={BUSINESS.phoneHref} aria-label="Call us" className="btn-ghost grid h-10 w-10 place-items-center rounded-full">
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-display mb-4 text-sm font-bold uppercase tracking-widest text-cyan-200">Quick Links</p>
          <ul className="space-y-2 text-sm text-slate-300/90">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-cyan-300">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display mb-4 text-sm font-bold uppercase tracking-widest text-cyan-200">Services</p>
          <ul className="space-y-2 text-sm text-slate-300/90">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}><Link href="/services" className="hover:text-cyan-300">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-display mb-4 text-sm font-bold uppercase tracking-widest text-cyan-200">Contact</p>
          <a href={BUSINESS.phoneHref} className="flex items-center gap-2 font-bold text-white hover:text-cyan-300">
            <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
          </a>
          <p className="mt-2 text-slate-300/80">Also: 8800345308</p>
          <a href={BUSINESS.emailHref} className="mt-1 block break-all text-slate-300/80 hover:text-cyan-300">{BUSINESS.email}</a>
          <p className="mt-3 flex gap-2 text-slate-300/80"><MapPin className="h-4 w-4 shrink-0 text-cyan-300" /> {BUSINESS.address}</p>
          <p className="mt-3 flex gap-2 text-slate-300/80"><Clock className="h-4 w-4 shrink-0 text-cyan-300" /> {BUSINESS.hours}</p>
        </div>
      </div>
      <div className="relative border-t border-white/5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {BUSINESS.name} · Branch of Shree Siddhi Electronics · All rights reserved.
      </div>
    </footer>
  );
}
