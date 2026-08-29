import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/layout";
import { AreasServed, TrustBar } from "@/components/site/sections";
import { ContactBlock } from "@/components/site/contact-block";

const title = "Contact Our Dental Laboratory in Guwahati | Send a Case";
const description =
  "Send a case to Bishnu Dental Milling & Digital Laboratory, Ulubari, Guwahati. Call 9085076842 or 9854026842, WhatsApp us, or submit a clinic enquiry. Open Mon–Sat, 9 AM–7 PM.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Send a case or start a lab partnership"
        intro="Scans, impressions, dealer enquiries and technical questions — reach the team directly."
      />
      <TrustBar />
      <ContactBlock />
      <AreasServed />
    </SiteLayout>
  );
}
