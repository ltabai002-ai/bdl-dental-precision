import { useEffect, useState, type ComponentType } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Cog,
  Cpu,
  Crown,
  Frame,
  Gem,
  Headset,
  Layers,
  Link2,
  MapPin,
  MessageCircle,
  Printer,
  Quote,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Target,
  Timer,
  Wrench,
  X,
} from "lucide-react";
import {
  AREAS,
  GALLERY,
  SERVICES,
  SITE,
  TEAM,
  TESTIMONIALS,
  TRUST_ITEMS,
  WHY_US,
  WORKFLOW,
} from "@/lib/site-data";
import { MediaSlot } from "./media";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Crown,
  Layers,
  Wrench,
  Gem,
  Sparkles,
  Cog,
  Frame,
  Cpu,
  Link2,
  Printer,
  Smile,
  Target,
  Timer,
  ShieldCheck,
  ClipboardCheck,
  Headset,
  Stethoscope,
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  center,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow", tone === "dark" ? "text-amber" : "text-navy/70")}>{eyebrow}</p>}
      <h2 className={cn("h-section mt-3", tone === "dark" ? "text-white" : "text-navy")}>{title}</h2>
      {intro && (
        <p className={cn("body-lg mt-3", tone === "dark" ? "text-white/70" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden
        className="absolute -top-32 -right-24 size-[28rem] rounded-full bg-navy/70 blur-3xl"
      />
      <div className="container-page relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-24">
        <div>
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1.5 text-amber">
            B2B Dental Laboratory · Guwahati, Assam
          </p>
          <h1 className="h-display mt-5 text-white">Precision Dental Prosthetics, Digitally Crafted</h1>
          <p className="body-lg mt-5 max-w-xl text-white/75">
            A trusted digital dental laboratory serving dentists across North-East India — crowns,
            bridges, zirconia, and full-arch implant restorations, delivered with accuracy you can
            rely on.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              hash="enquiry"
              className="tap inline-flex items-center justify-center rounded-xl bg-amber px-6 py-3.5 font-display text-base font-semibold text-navy-deep shadow-lift transition-colors hover:bg-white"
            >
              Send a Case
            </Link>
            <Link
              to="/services"
              className="tap inline-flex items-center justify-center rounded-xl border border-white/35 px-6 py-3.5 font-display text-base font-semibold text-white transition-colors hover:border-amber hover:text-amber"
            >
              Explore Services
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70">
            {["26+ Years", "ISO Certified", "CAD/CAM & 3D Printing"].map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-amber">·</span>}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-4">
          <MediaSlot
            tone="dark"
            kind="video"
            ratio="16 / 11"
            label="hero video (desktop) / static image fallback (mobile): technician at 5-axis milling machine"
            className="shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Quick action block --------------------------- */

const QUICK = [
  { title: "Our Services", text: "Full digital & analog lab menu", to: "/services" as const, icon: Stethoscope },
  { title: "Send a Case / Enquire", text: "Scan, impression or query", to: "/contact" as const, icon: ClipboardCheck },
] as const;

export function QuickActions() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Everything in a click"
            title="Start your case in seconds"
            intro="Built for busy clinics — reach the right team without hunting through the site."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map((q, i) => (
            <Reveal key={q.title} delay={i * 70}>
              <Link
                to={q.to}
                className="tap flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-navy/25 hover:shadow-lift"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy/8 text-navy">
                  <q.icon aria-hidden className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display font-semibold text-navy">{q.title}</span>
                  <span className="block text-sm text-muted-foreground">{q.text}</span>
                </span>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={140}>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tap flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-navy/25 hover:shadow-lift"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy/8 text-navy">
                <MessageCircle aria-hidden className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display font-semibold text-navy">WhatsApp Us</span>
                <span className="block text-sm text-muted-foreground">{SITE.phone}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={210}>
            <a
              href={SITE.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tap flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:border-navy/25 hover:shadow-lift"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy/8 text-navy">
                <MapPin aria-hidden className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display font-semibold text-navy">Find Us on Map</span>
                <span className="block text-sm text-muted-foreground">Ulubari, Guwahati</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Trust bar ------------------------------- */

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <ul className="container-page grid grid-cols-2 gap-4 py-7 text-center sm:grid-cols-4">
        {TRUST_ITEMS.map((item) => (
          <li key={item} className="font-display text-sm font-semibold text-navy sm:text-base">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------- Services -------------------------------- */

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Our Dental Lab Services"
            intro="Fixed, removable and implant prosthetics produced on a fully digital workflow — with conventional support where you need it."
          />
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Crown;
            return (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-11 place-items-center rounded-xl bg-navy text-white">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="h-card mt-4 text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.benefit}</p>
                  <MediaSlot label={s.media} ratio="16 / 9" className="mt-4" />
                </article>
              </Reveal>
            );
          })}
        </div>
        {limit && (
          <div className="mt-8">
            <Link
              to="/services"
              className="tap inline-flex items-center justify-center rounded-xl border border-navy px-6 py-3 font-display text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              View all services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------- Why choose ------------------------------- */

export function WhyChooseUs() {
  return (
    <section className="section-y bg-navy-deep text-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Why dentists partner with us"
            title="Built around fit, speed and accountability"
            intro="A lab partnership should reduce your chair time — not add to it."
          />
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Target;
            return (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-white/12 bg-white/5 p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-amber text-navy-deep">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="h-card mt-4 text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{w.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Workflow -------------------------------- */

export function Workflow() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Digital workflow"
            title="From scan to seated restoration"
            intro="Four controlled stages, documented at every handover."
          />
        </Reveal>
        <ol className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW.map((w, i) => (
            <Reveal key={w.step} as="li" delay={i * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="font-display text-sm font-bold tracking-widest text-amber">
                  {w.step}
                </span>
                <h3 className="h-card mt-2 text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
                <MediaSlot label={w.media} ratio="4 / 3" kind={w.media.startsWith("video") ? "video" : "image"} className="mt-4" />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------- Gallery -------------------------------- */

export function GalleryGrid({ heading = true }: { heading?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((v) => ((v ?? 0) + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setActive((v) => ((v ?? 0) - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="section-y bg-background">
      <div className="container-page">
        {heading && (
          <Reveal>
            <SectionHeading
              eyebrow="Case gallery"
              title="Our most recent work"
              intro="Selected cases produced in-house. Tap any case to view it larger."
            />
          </Reveal>
        )}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View case: ${g.title}`}
                className="group w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <MediaSlot label={g.media} ratio="4 / 3" className="rounded-none border-0 border-b border-dashed" />
                <span className="flex min-h-14 items-center px-5 py-3 font-display text-sm font-semibold text-navy group-hover:text-amber">
                  {g.title}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[active].title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/95 p-4"
          onClick={() => setActive(null)}
        >
          <div className="w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <MediaSlot tone="dark" ratio="16 / 10" label={GALLERY[active].media} />
            <p className="mt-4 text-center font-display text-base font-semibold text-white">
              {GALLERY[active].title}
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label="Previous case"
                onClick={() => setActive((v) => ((v ?? 0) - 1 + GALLERY.length) % GALLERY.length)}
                className="tap grid place-items-center rounded-xl border border-white/25 text-white hover:border-amber hover:text-amber"
              >
                <ChevronLeft aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setActive(null)}
                className="tap grid place-items-center rounded-xl bg-amber px-4 text-navy-deep"
              >
                <X aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next case"
                onClick={() => setActive((v) => ((v ?? 0) + 1) % GALLERY.length)}
                className="tap grid place-items-center rounded-xl border border-white/25 text-white hover:border-amber hover:text-amber"
              >
                <ChevronRight aria-hidden className="size-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------------------------- Team ---------------------------------- */

export function Team() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="People"
            title="Meet the team behind BDL"
            intro="Three decades of prosthetic experience, now running on a fully digital floor."
          />
        </Reveal>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft">
                <MediaSlot label={t.media} ratio="1 / 1" />
                <h3 className="h-card mt-4 text-navy">{t.name}</h3>
                <p className="text-sm font-medium text-amber">{t.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                <blockquote className="mt-4 border-l-2 border-amber pl-4 text-sm text-foreground/85 italic">
                  “{t.quote}”
                </blockquote>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Areas ---------------------------------- */

export function AreasServed() {
  return (
    <section className="section-y bg-background">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Coverage"
            title="Areas we serve"
            intro="Secure case pickup and dispatch across North-East India and neighbouring regions."
          />
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {AREAS.map((a) => (
              <li
                key={a}
                className="rounded-full border border-navy/15 bg-surface px-4 py-2 text-sm font-medium text-navy"
              >
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="section-y bg-navy-deep text-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading tone="dark" eyebrow="Feedback" title="What dentists say" />
        </Reveal>
        <Reveal delay={80}>
          <figure className="mt-8 rounded-2xl border border-white/12 bg-white/5 p-6 sm:p-9">
            <Quote aria-hidden className="size-8 text-amber" />
            <blockquote className="body-lg mt-4 text-white/85">“{t.quote}”</blockquote>
            <figcaption className="mt-5">
              <span className="block font-display font-semibold text-white">{t.name}</span>
              <span className="block text-sm text-white/60">{t.clinic}</span>
            </figcaption>
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="tap grid place-items-center rounded-xl border border-white/25 hover:border-amber hover:text-amber"
              >
                <ChevronLeft aria-hidden className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
                className="tap grid place-items-center rounded-xl border border-white/25 hover:border-amber hover:text-amber"
              >
                <ChevronRight aria-hidden className="size-5" />
              </button>
              <span className="ml-2 text-sm text-white/60" aria-live="polite">
                {i + 1} / {TESTIMONIALS.length}
              </span>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Partner band ------------------------------ */

export function PartnerBand() {
  return (
    <section className="bg-amber">
      <div className="container-page flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="h-section text-navy-deep">Become a Partner</h2>
          <p className="mt-2 max-w-xl text-navy-deep/80">
            Dealer and distributor enquiries welcome across North-East India, Nepal and Bhutan.
          </p>
        </div>
        <Link
          to="/contact"
          hash="enquiry"
          className="tap inline-flex items-center justify-center rounded-xl bg-navy-deep px-6 py-3.5 font-display text-base font-semibold text-white transition-colors hover:bg-white hover:text-navy-deep"
        >
          Talk to us
        </Link>
      </div>
    </section>
  );
}
