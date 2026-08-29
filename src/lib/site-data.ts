export const SITE = {
  name: "Bishnu Dental Milling & Digital Laboratory",
  short: "BDL",
  tagline: "Quality you can trust, precision you can rely on.",
  phone: "9085076842",
  phoneAlt: "9854026842",
  whatsapp: "919085076842",
  email: "bishnudentallab999@gmail.com",
  address:
    "Ulubari South Sarania, Opp. Post Office, The Life Pharmacy Building, 2nd Floor, Ghy-781007, Assam, Guwahati",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Ulubari%20South%20Sarania%20Post%20Office%20Guwahati%20781007&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Ulubari+South+Sarania+Post+Office+Guwahati+781007",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Technology", to: "/technology" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    icon: "Crown",
    title: "Implant Crowns & Bridges",
    benefit: "Passive-fit restorations on all major implant platforms.",
    media: "product: single implant crown on titanium base",
  },
  {
    icon: "Layers",
    title: "Implant-Supported Overdenture Bars",
    benefit: "Milled bars engineered for stable, retrievable overdentures.",
    media: "product: milled overdenture bar on model",
  },
  {
    icon: "Wrench",
    title: "Screw-Retained Hybrid Dentures",
    benefit: "Full-arch hybrids with verified occlusion and clean emergence.",
    media: "product: screw-retained hybrid denture",
  },
  {
    icon: "Gem",
    title: "Zirconia Crowns & Bridges",
    benefit: "Multilayer zirconia with high strength and natural translucency.",
    media: "product: monolithic zirconia bridge",
  },
  {
    icon: "Sparkles",
    title: "IPS e.max",
    benefit: "Lithium disilicate for anterior aesthetics and minimal prep.",
    media: "product: e.max anterior veneers",
  },
  {
    icon: "Cog",
    title: "Custom Abutments",
    benefit: "Patient-specific emergence profiles milled to your scan.",
    media: "product: custom titanium abutments",
  },
  {
    icon: "Frame",
    title: "Paulo Malo / Titanium / Cr-Co Frameworks",
    benefit: "Rigid, lightweight frameworks for full-arch rehabilitation.",
    media: "product: titanium full-arch framework",
  },
  {
    icon: "Cpu",
    title: "CAD-CAM DMLS PFM",
    benefit: "Laser-sintered copings for consistent margins every time.",
    media: "product: DMLS copings tray",
  },
  {
    icon: "Link2",
    title: "Precision Attachments",
    benefit: "Attachment-retained partials with predictable retention.",
    media: "product: precision attachment partial",
  },
  {
    icon: "Printer",
    title: "3D Printing",
    benefit: "Models, surgical guides, try-ins and temporaries in hours.",
    media: "product: 3D printed models and guides",
  },
  {
    icon: "Smile",
    title: "All Acrylic Works",
    benefit: "Complete and partial dentures, repairs and relines.",
    media: "product: finished acrylic denture",
  },
] as const;

export const WHY_US = [
  {
    icon: "Target",
    title: "Precision & Fit",
    text: "Digitally verified margins and contacts — fewer chair-side adjustments.",
  },
  {
    icon: "Timer",
    title: "Fast Turnaround",
    text: "Scheduled case slots and courier logistics across North-East India.",
  },
  {
    icon: "Cpu",
    title: "Advanced Digital Technology",
    text: "CAD/CAM milling, DMLS and 3D printing under one roof.",
  },
  {
    icon: "ShieldCheck",
    title: "Biocompatible Materials",
    text: "Certified zirconia, lithium disilicate, titanium and Cr-Co only.",
  },
  {
    icon: "ClipboardCheck",
    title: "Strict Quality Control",
    text: "Multi-stage inspection with documented checks before dispatch.",
  },
  {
    icon: "Headset",
    title: "Direct Technical Support",
    text: "Talk to the technician handling your case, not a call centre.",
  },
] as const;

export const WORKFLOW = [
  {
    step: "01",
    title: "Scan or Impression",
    text: "Send an intraoral scan (STL/PLY) or a conventional impression — both workflows supported.",
    media: "video: intraoral scan file being imported into CAD",
  },
  {
    step: "02",
    title: "CAD Design",
    text: "Technicians design anatomy, margins and emergence, then share a design preview for approval.",
    media: "image: technician designing a crown in CAD software",
  },
  {
    step: "03",
    title: "Mill / Print",
    text: "5-axis milling, DMLS sintering or resin printing selected to suit the indication.",
    media: "video: 5-axis milling machine cutting a zirconia disc",
  },
  {
    step: "04",
    title: "Finish & QC",
    text: "Staining, glazing, fit verification on model, documented QC and dispatch.",
    media: "image: technician glazing zirconia under magnification",
  },
] as const;

export const GALLERY = [
  { title: "Full-Arch Screw-Retained Bridge", media: "case photo: full-arch screw-retained zirconia bridge on model" },
  { title: "All-on-X Hybrid Denture", media: "case photo: All-on-X hybrid denture, intaglio and buccal views" },
  { title: "Zirconia Crown & Bridge", media: "case photo: 3-unit zirconia bridge, polished" },
  { title: "Titanium Bar Overdenture", media: "case photo: milled titanium bar with overdenture" },
  { title: "Custom Abutments", media: "case photo: set of custom milled abutments" },
  { title: "IPS e.max Anteriors", media: "case photo: e.max anterior units on die model" },
] as const;

export const TEAM = [
  {
    name: "Jharilal Sahu",
    role: "Founder & Proprietor",
    detail: "30+ years in dental prosthetics",
    quote:
      "Every case that leaves this lab is one I would be comfortable seating myself. Fit is not negotiable.",
    media: "portrait: Jharilal Sahu, founder, in the lab",
  },
  {
    name: "Technical Lead — CAD/CAM",
    role: "Digital Design & Milling",
    detail: "Implant frameworks & full-arch cases",
    quote:
      "We design to the clinical situation, not to a template — and we confirm it with the dentist before milling.",
    media: "portrait: CAD/CAM technical lead at design station",
  },
  {
    name: "Technical Lead — Ceramics",
    role: "Aesthetics & Finishing",
    detail: "Zirconia layering and e.max characterisation",
    quote: "Shade matching is a conversation. Send us the photo and we will match it.",
    media: "portrait: ceramist finishing a restoration",
  },
] as const;

export const AREAS = [
  "Assam",
  "Meghalaya",
  "Arunachal Pradesh",
  "Nagaland",
  "Manipur",
  "Tripura",
  "Sikkim",
  "Nepal",
  "Bhutan",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Margins are consistently accurate and the contacts need almost no adjustment. Full-arch cases that used to take us three appointments now take two.",
    name: "Dr. A. Baruah, BDS, MDS",
    clinic: "Prosthodontist, Guwahati",
  },
  {
    quote:
      "We send scans in the evening and get the design preview back the next morning. Their team actually picks up the phone when we need a change.",
    name: "Dr. R. Lyngdoh",
    clinic: "Implant Practice, Shillong",
  },
  {
    quote:
      "Zirconia shade matching has been reliable across dozens of cases, and the titanium bars fit passively on the first try.",
    name: "Dr. S. Jamir",
    clinic: "Dental Clinic, Dimapur",
  },
] as const;

export const TRUST_ITEMS = [
  "Since 2000",
  "ISO Certified",
  "MSME Registered",
  "20+ Skilled Technicians",
] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
