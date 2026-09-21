import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProductGrid from "@/components/ProductGrid";
import CTABanner from "@/components/CTABanner";
import { Reveal } from "@/components/SectionHeading";
import { Truck, ShieldCheck, BadgeIndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Buy LED / Smart / 4K TVs in Ghaziabad — New & Refurbished",
  description: "32 to 55 inch LED, Smart & 4K TVs plus refurbished TVs with warranty in Indirapuram Ghaziabad. WhatsApp enquiry, best price, same-day installation.",
};

export default function SalesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-8">
        <SectionHeading
          eyebrow="Premium Catalog"
          title={<>New & Refurbished <span className="text-gradient">TV Sales</span></>}
          sub="No payment gateway — just WhatsApp Enquiry for best price, warranty bill & same-day installation. Custom assembly on order available."
        />
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: BadgeIndianRupee, t: "Wholesale Prices", d: "Direct rates, no middlemen" },
            { icon: ShieldCheck, t: "Bill + Warranty", d: "1 yr new · 6 mo refurbished" },
            { icon: Truck, t: "Same-Day Install", d: "Free wall-mount demo available" },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="glass flex items-center gap-4 rounded-2xl p-4">
                <c.icon className="h-8 w-8 shrink-0 text-cyan-300" />
                <div><p className="font-bold">{c.t}</p><p className="text-sm text-slate-400">{c.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
        <ProductGrid />
      </section>
      <CTABanner />
    </>
  );
}
