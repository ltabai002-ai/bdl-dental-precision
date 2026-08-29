# Dental Precision Lab

Build a complete, mobile-first, responsive B2B dental laboratory website for Bishnu Dental Milling & Digital Laboratory (BDL), a premium digital dental lab in Guwahati, Assam, India that manufactures custom dental prosthetics for dentists. I'm attaching a reference screenshot and my logo.

Use the attached reference screenshot for LAYOUT AND STRUCTURE INSPIRATION ONLY — its clean spacing, full-width hero, quick-action shortcut block, team cards, before/after showcase, prominent hours, and large embedded map. Do NOT copy its colors (beige/tan) or its patient-facing clinic messaging. This is a B2B lab selling to dentists, not a clinic selling to patients. Replace all content with the content below and use MY brand colors from the attached logo.

Two top priorities: (1) The 3-second test — a dentist must instantly understand this is a professional digital dental laboratory that makes crowns, bridges, and implant restorations for dental clinics, visible above the fold on a 375px phone. (2) Mobile-first — design the phone layout first, then scale up to tablet and desktop.

Audience — B2B: dentists, dental clinics, hospitals, prosthodontists, implant specialists. Write all copy for dental professionals (accuracy, fit, turnaround, materials, digital workflow, reliable partnership). No patient language like "your beautiful smile."

Brand colors (use exactly, from my logo): primary navy #1B3A6B, deep navy #122A4E, amber accent #E8A317, white #FFFFFF, light grey #F5F7FA, dark text #1A1F2E, muted grey #5B6472. Navy = trust/primary; amber = accents and CTA hover only, used sparingly. Fonts: "Poppins" (600/700) headings, "Inter" (400/500) body. Style: clean, spacious, premium, clinical-modern. Rounded corners 12–16px, soft shadows, generous whitespace, alternating white / light-grey / deep-navy sections. Product photos glow against dark navy sections.

Media: I will provide professional photos and videos. For every image/video, add a labeled placeholder describing what goes there (e.g. "hero: technician at milling machine", "product: zirconia crown & bridge"). Support a hero video with a static image fallback on mobile. Lazy-load images and prevent layout shift.

Homepage sections (in this order, inspired by the reference layout):

Sticky navbar — logo left; links Home, About, Services, Technology, Gallery, Contact; amber "Send a Case / Enquire" button; hamburger on mobile.
Hero (deep navy, full-width) — H1 "Precision Dental Prosthetics, Digitally Crafted"; subline "A trusted digital dental laboratory serving dentists across North-East India — crowns, bridges, zirconia, and full-arch implant restorations, delivered with accuracy you can rely on."; amber CTA "Send a Case" + outline "Explore Services"; trust strip "26+ Years · ISO Certified · CAD/CAM & 3D Printing"; hero video/image slot.
Quick-action shortcut block (like the reference's "everything in a click") — 3–4 cards: "Our Services", "Send a Case / Enquire", "WhatsApp Us", "Find Us on Map".
Trust bar — Since 2000 · ISO Certified · MSME Registered · 20+ Skilled Technicians.
Services grid — "Our Dental Lab Services": cards with icon + title + one-line benefit + small product-image slot. Services: Implant Crowns & Bridges; Implant-Supported Overdenture Bars; Screw-Retained Hybrid Dentures; Zirconia Crowns & Bridges; IPS e.max; Custom Abutments; Paulo Malo / Titanium / Cr-Co Frameworks; CAD-CAM DMLS PFM; Precision Attachments; 3D Printing; All Acrylic Works.
Why Choose Us (deep navy) — 6 icon blocks: Precision & Fit, Fast Turnaround, Advanced Digital Technology, Biocompatible Materials, Strict Quality Control, Direct Technical Support.
Technology / Digital Workflow — steps scan → design → mill/print → finish, each with an image/short-video slot.
Our Work / Gallery (like the reference's before/after showcase) — grid with lightbox; captioned slots: Full-Arch Screw-Retained Bridge, All-on-X Hybrid Denture, Zirconia Crown & Bridge, Titanium Bar Overdenture, Custom Abutments.
Meet the Team (like the reference's doctor cards) — founder card for "Jharilal Sahu, Founder & Proprietor" (30+ years experience) with a short quote, plus space for key technical team members.
Areas We Serve — pills: Assam, Meghalaya, Arunachal Pradesh, Nagaland, Manipur, Tripura, Sikkim, Nepal, Bhutan.
Testimonials — carousel of 3 dentist testimonials.
Dealer/Distributor enquiry band — "Become a Partner" CTA to contact form.
Hours + Contact + Map (like the reference's hours/map block) — hours Mon–Sat 9 AM–7 PM, Sun closed; address "Ulubari South Sarania, Opp. Post Office, The Life Pharmacy Building, 2nd Floor, Ghy-781007, Assam, Guwahati"; phone/WhatsApp 9085076842 / 9854026842; email bishnudentallab999@gmail.com; enquiry form (Name, Clinic/Company, Phone, Email, Service dropdown, Message); large embedded Google Map.
Footer (deep navy) — logo + tagline "Quality you can trust, precision you can rely on.", quick links, services, contact, social icons, "© 2026 Bishnu Dental Milling & Digital Laboratory."
Also create these inner pages reusing the same header, footer, and styling: About, Services, Technology, Gallery, Contact.

Functionality: mobile hamburger menu; sticky navbar; smooth scroll; scroll-reveal animations; gallery lightbox; testimonial slider; contact form with validation and a success message; sticky WhatsApp + click-to-call floating buttons (thumb-reachable on mobile, not covering the CTA).

Mobile-first requirements: 3-second test passes at 375px; all tap targets ≥44px; fluid typography with clamp(); body/inputs ≥16px; every layout collapses to one column on mobile; no horizontal scroll at 320px; correct input types (tel/email).

Technical & SEO: semantic HTML; accessible (good contrast, aria labels, keyboard nav); fast and lightweight; unique title + meta description per page; one H1 per page; alt text on all images; target keywords "dental lab in Guwahati", "dental laboratory North East India", "zirconia crown lab Assam", "digital dental laboratory", "dental implant lab North East".

Deliver a polished, premium, fully responsive site that looks like a high-end digital dental lab and clearly communicates trust and precision to dentists.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bdl-dental-precision.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1230f6ac-924a-4a2d-b998-54b74d1cbbfa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
