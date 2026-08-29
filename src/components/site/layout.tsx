import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { FloatingActions } from "./floating-actions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingActions />
      <div aria-hidden className="h-16 sm:h-0" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-navy-deep text-white">
      <div className="container-page py-14 sm:py-20">
        <p className="eyebrow text-amber">{eyebrow}</p>
        <h1 className="h-display mt-3 max-w-3xl text-white">{title}</h1>
        <p className="body-lg mt-4 max-w-2xl text-white/75">{intro}</p>
      </div>
    </section>
  );
}
