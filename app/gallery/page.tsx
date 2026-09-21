import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery — Real Shop, Workshop & Repair Work Photos",
  description: "See our real Indirapuram store, live TV repair workshop and chip-level motherboard work plus premium installations.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-10">
        <SectionHeading
          eyebrow="Luxury Masonry Gallery"
          title={<>Real Work, <span className="text-gradient">Real Photos</span></>}
          sub="First 3 tiles are our actual shop photos — displayed fully without cropping. Tap any image for lightbox view."
        />
        <GalleryGrid />
      </section>
      <CTABanner />
    </>
  );
}
