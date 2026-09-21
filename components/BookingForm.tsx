"use client";
import { useState } from "react";
import { Send } from "lucide-react";

const BRAND_OPTS = ["Sony", "Samsung", "LG", "Mi / Xiaomi", "OnePlus", "TCL", "Vu", "Philips", "Panasonic", "Toshiba", "Other"];
const SIZE_OPTS = ['32 inch', '40 inch', '43 inch', '50 inch', '55 inch', '65 inch+', 'Audio System', 'Other'];

export default function BookingForm() {
  const [f, setF] = useState({ name: "", phone: "", brand: "Samsung", size: "43 inch", issue: "", address: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*New Repair Booking — LED TV SALE AND SERVICE*%0A` +
      `----------------------------%0A` +
      `*Name:* ${encodeURIComponent(f.name)}%0A` +
      `*Phone:* ${encodeURIComponent(f.phone)}%0A` +
      `*Brand:* ${encodeURIComponent(f.brand)}%0A` +
      `*TV Size:* ${encodeURIComponent(f.size)}%0A` +
      `*Issue:* ${encodeURIComponent(f.issue)}%0A` +
      `*Address:* ${encodeURIComponent(f.address)}`;
    window.open(`https://wa.me/917065674716?text=${msg}`, "_blank");
  };

  const input =
    "w-full rounded-2xl border border-cyan-300/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-300/60 focus:shadow-[0_0_20px_rgba(0,194,255,0.25)]";

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold">Book a <span className="text-gradient">Repair Visit</span></h3>
      <p className="mt-1 text-sm text-slate-400">Fill & submit — opens WhatsApp with your booking ready to send.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input required placeholder="Your Name *" value={f.name} onChange={set("name")} className={input} />
        <input required pattern="[0-9+ ]{10,15}" placeholder="Phone Number *" value={f.phone} onChange={set("phone")} className={input} />
        <select value={f.brand} onChange={set("brand")} className={input}>
          {BRAND_OPTS.map((b) => <option key={b} className="bg-slate-900">{b}</option>)}
        </select>
        <select value={f.size} onChange={set("size")} className={input}>
          {SIZE_OPTS.map((b) => <option key={b} className="bg-slate-900">{b}</option>)}
        </select>
        <textarea required rows={3} placeholder="Problem — e.g. no display, backlight issue, no sound… *" value={f.issue} onChange={set("issue")} className={`${input} sm:col-span-2`} />
        <textarea required rows={2} placeholder="Full Address with landmark *" value={f.address} onChange={set("address")} className={`${input} sm:col-span-2`} />
      </div>
      <button type="submit" className="btn-neon mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-white">
        <Send className="h-5 w-5" /> Send Booking on WhatsApp
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">Message format — Name / Phone / Brand / TV Size / Issue / Address</p>
    </form>
  );
}
