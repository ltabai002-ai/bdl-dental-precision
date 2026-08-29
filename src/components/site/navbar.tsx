import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur transition-shadow",
        scrolled ? "border-border shadow-soft" : "border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-20">
        <Logo className="min-w-0" />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber after:transition-transform hover:text-navy hover:after:scale-x-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            hash="enquiry"
            className="tap hidden items-center rounded-xl bg-amber px-4 py-2.5 font-display text-sm font-semibold text-navy-deep shadow-soft transition-colors hover:bg-navy hover:text-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:inline-flex"
          >
            Send a Case
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="tap grid place-items-center rounded-xl border border-border text-navy lg:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-navy" }}
                inactiveProps={{ className: "text-foreground" }}
                className="tap flex items-center border-b border-border/70 py-3 font-display text-base font-semibold last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              hash="enquiry"
              className="tap mt-4 mb-2 inline-flex items-center justify-center rounded-xl bg-amber px-4 py-3 font-display text-base font-semibold text-navy-deep"
            >
              Send a Case / Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
