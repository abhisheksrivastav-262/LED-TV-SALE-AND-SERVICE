import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ReviewGrid, { GoogleRatingBadge } from "@/components/ReviewBits";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Customer Reviews — 5.0 Google Rated TV Repair",
  description: "Read 5-star Google reviews for LED TV Sale and Service, Indirapuram Ghaziabad — same-day repair, genuine parts, honest pricing.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-10">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>⭐ 5.0 Google Rating — <span className="text-gradient">Loved by Ghaziabad</span></>}
          sub="Real reviews from Indirapuram, Makanpur, Nyay Khand & Vasundhara customers."
        />
        <GoogleRatingBadge />
        <div className="mt-8"><ReviewGrid /></div>
      </section>
      <CTABanner />
    </>
  );
}
