import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site-data";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/75">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 max-w-xs text-sm">{SITE.tagline}</p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`${SITE.short} on ${label}`}
                className="tap grid place-items-center rounded-xl border border-white/15 text-white/80 transition-colors hover:border-amber hover:text-amber"
              >
                <Icon aria-hidden className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-amber"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
            Services
          </h2>
          <ul className="mt-4 space-y-1">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.title}>
                <Link
                  to="/services"
                  className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-amber"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-amber" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-amber" />
              <span>
                <a href={`tel:+91${SITE.phone}`} className="hover:text-amber">
                  {SITE.phone}
                </a>{" "}
                /{" "}
                <a href={`tel:+91${SITE.phoneAlt}`} className="hover:text-amber">
                  {SITE.phoneAlt}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-amber" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-amber">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-center text-xs text-white/55">
          © 2026 Bishnu Dental Milling &amp; Digital Laboratory.
        </p>
      </div>
    </footer>
  );
}
