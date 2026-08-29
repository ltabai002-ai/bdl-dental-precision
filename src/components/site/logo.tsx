import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Bishnu Dental Milling & Digital Laboratory — home"
      className={cn("flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-xl font-display text-sm font-bold tracking-tight",
          tone === "dark" ? "bg-amber text-navy-deep" : "bg-navy text-white",
        )}
      >
        BDL
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block font-display text-[0.95rem] font-bold tracking-tight sm:text-base",
            tone === "dark" ? "text-white" : "text-navy",
          )}
        >
          Bishnu Dental
        </span>
        <span
          className={cn(
            "block text-[0.65rem] tracking-[0.14em] uppercase",
            tone === "dark" ? "text-white/65" : "text-muted-foreground",
          )}
        >
          Milling &amp; Digital Lab
        </span>
      </span>
    </Link>
  );
}
