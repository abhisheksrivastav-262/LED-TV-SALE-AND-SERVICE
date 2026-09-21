import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceBits";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "All TV Repair Services — LED, OLED, Sony Audio & Doorstep",
  description: "12 premium services: LED/Smart/OLED repair, motherboard, panel, Sony audio, wall mount, doorstep service, remotes & custom TV assembly in Ghaziabad.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-10">
        <SectionHeading
          eyebrow="12 Premium Services"
          title={<>Everything Your TV Needs, <span className="text-gradient">One Trusted Shop</span></>}
          sub="Tap WhatsApp Enquire on any card for an instant quote. Same-day doorstep service, 9 AM – 9 PM."
        />
        <ServiceGrid />
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <SectionHeading eyebrow="FAQs" title={<>Service <span className="text-gradient">Questions</span></>} />
        <FAQ />
      </section>
      <CTABanner />
    </>
  );
}
