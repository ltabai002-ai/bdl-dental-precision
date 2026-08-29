import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/layout";
import { PartnerBand, SectionHeading, TrustBar, Workflow } from "@/components/site/sections";
import { MediaSlot } from "@/components/site/media";
import { Reveal } from "@/components/site/reveal";

const title = "Digital Dental Laboratory Technology | CAD/CAM & 3D Printing";
const description =
  "Inside our digital dental laboratory: intraoral scan intake, CAD design, 5-axis milling, DMLS sintering, 3D printing and documented quality control for clinics in North-East India.";

const EQUIPMENT = [
  { name: "5-Axis Milling", text: "Zirconia, PMMA, wax, titanium and Cr-Co discs.", media: "equipment: 5-axis milling unit" },
  { name: "DMLS Sintering", text: "Laser-sintered metal copings with consistent margins.", media: "equipment: DMLS metal printer" },
  { name: "Resin 3D Printing", text: "Models, guides, try-ins and provisionals.", media: "equipment: resin 3D printer with build plate" },
  { name: "Sintering & Glazing Furnaces", text: "Calibrated cycles for strength and shade stability.", media: "equipment: sintering furnace" },
  { name: "Scan Intake", text: "Open STL/PLY from all major intraoral scanners.", media: "equipment: desktop scanner with model" },
  { name: "QC Bench", text: "Magnification, fit checks and documented sign-off.", media: "equipment: QC bench with microscope" },
];

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/technology" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Technology,
});

function Technology() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Technology"
        title="A digital workflow you can audit"
        intro="Open-file scan intake, CAD design approval, precision manufacturing and documented QC — the same process on every case."
      />
      <TrustBar />
      <Workflow />

      <section className="section-y bg-background">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Equipment"
              title="Manufacturing under one roof"
              intro="No outsourcing of critical steps — milling, sintering, printing and finishing all happen in our Guwahati facility."
            />
          </Reveal>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPMENT.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 80}>
                <article className="h-full rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <MediaSlot label={e.media} ratio="16 / 10" />
                  <h3 className="h-card mt-4 text-navy">{e.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnerBand />
    </SiteLayout>
  );
}
