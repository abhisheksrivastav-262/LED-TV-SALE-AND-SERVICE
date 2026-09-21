import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import SectionHeading, { Reveal } from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import MapEmbed from "@/components/MapEmbed";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book Repair — Call, WhatsApp, Visit Store",
  description: "Book LED TV repair in Ghaziabad: call 9810555308, WhatsApp, or fill the form. Indirapuram store open Mon–Sun 9AM–9PM.",
};

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-12">
        <SectionHeading
          eyebrow="Get In Touch"
          title={<>Book Your <span className="text-gradient">Repair Visit</span></>}
          sub="Call, WhatsApp or send the form — your booking opens directly in WhatsApp, ready to send."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <a href={BUSINESS.phoneHref} className="btn-neon flex items-center gap-3 rounded-3xl p-6 font-bold text-white">
                <Phone className="h-8 w-8" />
                <span><span className="block text-xs font-medium opacity-80">CLICK TO CALL</span><span className="font-display text-2xl">{BUSINESS.phoneDisplay}</span></span>
              </a>
              <a href={BUSINESS.whatsapp} target="_blank" className="flex items-center gap-3 rounded-3xl bg-[#25D366] p-6 font-bold text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-[1.01] transition">
                <MessageCircle className="h-8 w-8" />
                <span><span className="block text-xs font-medium opacity-80">WHATSAPP US</span><span className="font-display text-2xl">Chat Instantly</span></span>
              </a>
              <div className="glass rounded-3xl p-6 text-sm">
                <p className="flex gap-2"><MapPin className="h-5 w-5 shrink-0 text-cyan-300" /> {BUSINESS.address}</p>
                <p className="mt-3 flex gap-2"><Clock className="h-5 w-5 shrink-0 text-cyan-300" /> {BUSINESS.hours}</p>
                <p className="mt-3">Second number: 8800345308</p>
                <p className="mt-3 flex gap-2"><Mail className="h-5 w-5 shrink-0 text-cyan-300" /> <a href={BUSINESS.emailHref} className="break-all hover:text-cyan-300">{BUSINESS.email}</a></p>
                <p className="mt-1 text-amber-300 font-bold">⭐ 5.0 Google Rating (9 Reviews)</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <BookingForm />
          </Reveal>
        </div>
        <div className="mt-8"><MapEmbed tall /></div>
      </section>
    </>
  );
}
