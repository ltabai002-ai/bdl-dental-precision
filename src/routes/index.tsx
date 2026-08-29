import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import {
  AreasServed,
  GalleryGrid,
  Hero,
  PartnerBand,
  QuickActions,
  ServicesGrid,
  Team,
  Testimonials,
  TrustBar,
  Workflow,
  WhyChooseUs,
} from "@/components/site/sections";
import { ContactBlock } from "@/components/site/contact-block";

const title = "Dental Lab in Guwahati | Bishnu Dental Milling & Digital Laboratory";
const description =
  "Digital dental laboratory in Guwahati, Assam serving dentists across North-East India — zirconia crowns, bridges, implant frameworks and full-arch restorations with CAD/CAM precision.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Bishnu Dental Milling & Digital Laboratory",
          description,
          telephone: "+919085076842",
          email: "bishnudentallab999@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Ulubari South Sarania, Opp. Post Office, The Life Pharmacy Building, 2nd Floor",
            addressLocality: "Guwahati",
            addressRegion: "Assam",
            postalCode: "781007",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:00-19:00",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <QuickActions />
      <TrustBar />
      <ServicesGrid limit={6} />
      <WhyChooseUs />
      <Workflow />
      <GalleryGrid />
      <Team />
      <AreasServed />
      <Testimonials />
      <PartnerBand />
      <ContactBlock />
    </SiteLayout>
  );
}
