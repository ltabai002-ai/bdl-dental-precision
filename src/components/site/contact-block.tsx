import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SERVICE_OPTIONS, SITE } from "@/lib/site-data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./sections";

type Errors = Partial<Record<"name" | "clinic" | "phone" | "email" | "message", string>>;

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/25";

export function ContactBlock() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};

    if (get("name").length < 2) next.name = "Please enter your name.";
    if (get("clinic").length < 2) next.clinic = "Please enter your clinic or company.";
    if (!/^[0-9+\-\s()]{8,15}$/.test(get("phone"))) next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Enter a valid email address.";
    if (get("message").length < 10) next.message = "Please add a few details about the case.";

    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="section-y bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Hours, address & case enquiries"
            intro="Send a scan, book a pickup, or ask a technical question — we reply the same working day."
          />
        </Reveal>

        <div className="mt-9 grid gap-6 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="h-card flex items-center gap-2 text-navy">
                <Clock aria-hidden className="size-5 text-amber" /> Opening hours
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                {SITE.hours.map((h) => (
                  <div key={h.day} className="flex flex-wrap justify-between gap-2 border-b border-border/70 pb-2 last:border-0">
                    <dt className="font-medium text-foreground">{h.day}</dt>
                    <dd className="text-muted-foreground">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="h-card text-navy">Reach the lab</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-amber" />
                  <span className="text-muted-foreground">{SITE.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-amber" />
                  <span>
                    <a href={`tel:+91${SITE.phone}`} className="tap inline-flex items-center font-medium text-navy hover:text-amber">
                      {SITE.phone}
                    </a>
                    <span className="mx-2 text-muted-foreground">/</span>
                    <a href={`tel:+91${SITE.phoneAlt}`} className="tap inline-flex items-center font-medium text-navy hover:text-amber">
                      {SITE.phoneAlt}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-amber" />
                  <a href={`mailto:${SITE.email}`} className="tap inline-flex items-center font-medium break-all text-navy hover:text-amber">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="scroll-mt-28">
            <form
              id="enquiry"
              noValidate
              onSubmit={onSubmit}
              className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="h-card text-navy">Send a case / enquire</h3>

              {sent && (
                <p
                  role="status"
                  className="mt-4 flex items-start gap-2 rounded-xl border border-navy/15 bg-navy/5 p-4 text-sm text-navy"
                >
                  <CheckCircle2 aria-hidden className="mt-0.5 size-5 text-amber" />
                  Thank you — your enquiry has been received. Our team will contact you on the next
                  working day.
                </p>
              )}

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" error={errors.name}>
                  <input id="name" name="name" type="text" autoComplete="name" className={inputClass} />
                </Field>
                <Field label="Clinic / Company" name="clinic" error={errors.clinic}>
                  <input id="clinic" name="clinic" type="text" autoComplete="organization" className={inputClass} />
                </Field>
                <Field label="Phone" name="phone" error={errors.phone}>
                  <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputClass} />
                </Field>
                <Field label="Email" name="email" error={errors.email}>
                  <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={inputClass} />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Service required" name="service">
                    <select id="service" name="service" className={inputClass} defaultValue="">
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                      <option value="Dealer / Distributor">Dealer / Distributor enquiry</option>
                    </select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Message" name="message" error={errors.message}>
                    <textarea id="message" name="message" rows={4} className={inputClass} />
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                className="tap mt-5 w-full rounded-xl bg-navy px-6 py-3.5 font-display text-base font-semibold text-white transition-colors hover:bg-amber hover:text-navy-deep"
              >
                Submit enquiry
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-8 block">
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Bishnu Dental Milling & Digital Laboratory location on Google Maps"
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
