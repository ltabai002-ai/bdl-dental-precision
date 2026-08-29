import { cn } from "@/lib/utils";
import { ImageIcon, PlayCircle } from "lucide-react";

type MediaSlotProps = {
  label: string;
  ratio?: string;
  kind?: "image" | "video";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Labelled placeholder that reserves layout space (aspect-ratio => no CLS).
 * Replace with <img loading="lazy" width height /> or <video> when real media arrives.
 */
export function MediaSlot({
  label,
  ratio = "4 / 3",
  kind = "image",
  tone = "light",
  className,
}: MediaSlotProps) {
  const Icon = kind === "video" ? PlayCircle : ImageIcon;
  return (
    <div
      role="img"
      aria-label={`Media placeholder — ${label}`}
      style={{ aspectRatio: ratio }}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-dashed p-4 text-center",
        tone === "dark"
          ? "border-white/25 bg-white/5 text-white/70"
          : "border-border bg-muted text-muted-foreground",
        className,
      )}
    >
      <Icon aria-hidden className="size-6 opacity-70" />
      <span className="text-xs leading-snug font-medium sm:text-sm">{label}</span>
    </div>
  );
}
