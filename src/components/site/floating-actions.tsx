import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 sm:inset-x-auto sm:right-5 sm:bottom-6 sm:px-0">
      <div className="pointer-events-auto mx-auto flex max-w-md items-center justify-end gap-3 sm:flex-col">
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
            "Hello BDL, I would like to send a case.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="tap flex flex-1 items-center justify-center gap-2 rounded-2xl bg-navy px-4 py-3 font-display text-sm font-semibold text-white shadow-lift transition-colors hover:bg-amber hover:text-navy-deep sm:flex-none"
        >
          <MessageCircle aria-hidden className="size-5" />
          <span className="sm:sr-only">WhatsApp</span>
        </a>
        <a
          href={`tel:+91${SITE.phone}`}
          aria-label={`Call ${SITE.phone}`}
          className="tap flex flex-1 items-center justify-center gap-2 rounded-2xl bg-amber px-4 py-3 font-display text-sm font-semibold text-navy-deep shadow-lift transition-colors hover:bg-navy hover:text-white sm:flex-none"
        >
          <Phone aria-hidden className="size-5" />
          <span className="sm:sr-only">Call</span>
        </a>
      </div>
    </div>
  );
}
