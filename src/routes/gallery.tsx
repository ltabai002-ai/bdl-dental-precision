import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/layout";
import { GalleryGrid, PartnerBand, Testimonials } from "@/components/site/sections";

const title = "Case Gallery | Dental Implant Lab North East India";
const description =
  "Case gallery from our dental implant lab in North East India — full-arch screw-retained bridges, All-on-X hybrids, zirconia crown and bridge, titanium bars and custom abutments.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Cases produced in our laboratory"
        intro="Representative work across implant, fixed and removable prosthetics. Tap a case to enlarge."
      />
      <GalleryGrid heading={false} />
      <Testimonials />
      <PartnerBand />
    </SiteLayout>
  );
}
