import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/layout";
import { AreasServed, PartnerBand, Team, TrustBar, WhyChooseUs } from "@/components/site/sections";
import { MediaSlot } from "@/components/site/media";
import { Reveal } from "@/components/site/reveal";

const title = "About Our Dental Laboratory | Bishnu Dental, Guwahati";
const description =
  "Since 2000, Bishnu Dental Milling & Digital Laboratory has produced precision prosthetics for dental clinics across North-East India — ISO certified, MSME registered, 20+ technicians.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About BDL"
        title="A dental laboratory built for clinical partnership"
        intro="Two and a half decades of prosthetic craftsmanship, now delivered on a fully digital CAD/CAM floor in Guwahati."
      />
      <TrustBar />

      <section className="section-y bg-background">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="h-section text-navy">Our story</h2>
            <p className="mt-4 text-muted-foreground">
              Bishnu Dental Milling &amp; Digital Laboratory began in 2000 as a small prosthetic
              workshop serving a handful of Guwahati clinics. Today the lab runs 5-axis milling,
              DMLS sintering and resin printing under one roof, supporting implantologists,
              prosthodontists and multi-chair practices across the North-East.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our approach has not changed: every restoration is verified on model before dispatch,
              and every dentist speaks directly to the technician handling the case. That is what
              keeps remakes low and chair time short.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-5">
              {[
                { k: "26+", v: "Years in prosthetics" },
                { k: "20+", v: "Skilled technicians" },
                { k: "9", v: "Regions served" },
                { k: "ISO", v: "Certified processes" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-surface p-5">
                  <dt className="font-display text-2xl font-bold text-navy">{s.k}</dt>
                  <dd className="text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={80}>
            <MediaSlot ratio="4 / 3" label="facility: wide shot of the BDL digital lab floor" />
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <Team />
      <AreasServed />
      <PartnerBand />
    </SiteLayout>
  );
}
