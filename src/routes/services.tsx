import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/layout";
import { PartnerBand, ServicesGrid, Testimonials, TrustBar, WhyChooseUs } from "@/components/site/sections";

const title = "Dental Lab Services | Zirconia, Implant & CAD-CAM Work, Assam";
const description =
  "Zirconia crown lab in Assam offering implant crowns and bridges, overdenture bars, hybrid dentures, IPS e.max, custom abutments, DMLS PFM, 3D printing and acrylic work for dental clinics.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Fixed, removable and implant prosthetics"
        intro="A complete lab menu for dental clinics — digitally designed, precision milled and finished by hand."
      />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <PartnerBand />
    </SiteLayout>
  );
}
