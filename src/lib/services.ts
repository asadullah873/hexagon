import type { StaticImageData } from "next/image";

// Import images (change .jpg to .png if your files are png)
import RentalImg from "@/assets/services/rental.png";
import SalesImg from "@/assets/services/sales.png";
import RepairImg from "@/assets/services/repair.png";
import InstallationImg from "@/assets/services/installation.png";
import EngineeringImg from "@/assets/services/engineering.png";
import LicensingImg from "@/assets/services/license.png";

export type ServiceKey =
  | "rental"
  | "sales"
  | "repair"
  | "installation"
  | "engineering"
  | "licensing";

export type ServiceDef = {
  slug: ServiceKey;
  title: string;
  image: StaticImageData;
  tagline: string;
  body: string[];
};

export const SERVICES: Record<ServiceKey, ServiceDef> = {
  rental: {
    slug: "rental",
    title: "Rental",
    image: RentalImg,
    tagline: "Explore the newest trends in property rentals.",
    body: [
      "Hexagon Scaffolding provides safe, flexible, and on-time scaffolding rentals without the burden of ownership. Whether your project runs for a few days or several months, we maintain a broad, clean, and fully inspected inventory ringlock, cuplock, and frame systems along with platforms, stairs, ladders, guardrails, toe boards, and accessories so crews can get to work immediately. Our team sizes your kit based on drawings or site details, offers straightforward daily, weekly, or monthly terms, and schedules delivery and pickup to match your program. Every item is checked for compliance, and our support team remains available throughout the hire to handle add-ons, swaps, and extensions.",
      "From commercial builds and façade upgrades to plant maintenance and event structures, renting with Hexagon means predictable logistics and equipment that’s ready to perform. If you need full assembly, our Installation service provides a turnkey build; if you’re managing your own crew, we hand over with clear component counts and safe-handling guidance. If anything changes mid-project, we scale with you and reconcile transparently at off-hire. Share your drawings and schedule, and we’ll turn around a precise rental proposal and mobilization plan often within hours."
    ],
  },
  sales: {
    slug: "sales",
    title: "Sales",
    image: SalesImg,
    tagline: "Get the latest trends and strategies in sales.",
    body: [
      "For contractors who prefer ownership and full control, Hexagon Scaffolding supplies durable, professional-grade systems designed to work hard across many projects. We help you select the right mix ringlock, cuplock, or frame so your crews can build faster with components that integrate smoothly with your existing fleet. You can purchase starter bundles for immediate capacity, expand later as your pipeline grows, or commission a tailored bill of materials to match specific job profiles. Core items are typically in stock with practical lead times on specialty components, and we support you after purchase with training tips and readily available spares.",
      "Buying from Hexagon is a straightforward process focused on ROI. We start by understanding the work you do, the heights and access types you encounter, and the preferences of your team. Then we present clear options and pricing, arrange phased or complete deliveries, and help onboard your crew so productivity rises from day one. If you need compatibility checks with gear you already own, send specs or photos and we’ll confirm the fit. When you’re ready, we’ll build a right-sized package that pays for itself project after project."
    ],
  },
  repair: {
    slug: "repair",
    title: "Repair",
    image: RepairImg,
    tagline: "Get the latest trends and strategies in repair.",
    body: [
      "Busy sites are tough on equipment, and small issues bent ledgers, seized jacks, worn platforms can quietly erode safety and productivity. Hexagon’s repair service restores your gear to safe working condition or identifies items that must be retired. We intake and inspect each component, tag it by pass/repair/retire, perform the necessary reconditioning and tests to the correct tolerances, and return a clear report so you have traceable documentation for audits and internal compliance.",
      "Our goal is to extend the life of your assets without compromising safety. We repair across brands, arrange logistics for bulk batches when needed, and prioritize turnaround so your kit gets back into circulation quickly. When an item shouldn’t return to site, we’ll say so plainly and recommend cost-effective replacements. Book a repair intake, send a representative sample, and we’ll outline the work, timeline, and cost so there are no surprises."
    ],
  },
  installation: {
    slug: "installation",
    title: "Installation",
    image: InstallationImg,
    tagline: "Learn about innovative installation techniques and tools.",
    body: [
      "When schedules are tight and site conditions are complex, Hexagon’s installation crews deliver scaffolds built right the first time. We plan with care, starting with a site walk, risk assessment, and method statement, then set out base prep, tie patterns, access routes, and load paths to keep the build safe and efficient. From façade access and full enclosures to interior birdcages, stair towers, and shoring, our trained erectors build under experienced supervision and hand over with tagging, usage notes, and an inspection schedule that keeps you compliant.",
      "Throughout the project, we remain responsive to changes, making adjustments as other trades progress and dismantling cleanly when work is complete. We coordinate with your program to minimize disruption, including night or weekend builds when required. If you also need design support or stamped calculations, our Engineering team steps in to provide drawings, optimization, and professional review. Share your drawings and dates, and we’ll return a practical build plan with a firm mobilization window."
    ],
  },
  engineering: {
    slug: "engineering",
    title: "Engineering",
    image: EngineeringImg,
    tagline: "Learn about innovative Engineering.",
    body: [
      "Good engineering saves time on site, reduces components, and keeps loads within limits. Hexagon pairs practical field experience with professional analysis to deliver drawings and calculations you can build with confidence. We model layouts that consider elevations, access routes, tie patterns, deck loading, uplift, bracing, and leg loads, then optimize for fewer parts and faster assembly without sacrificing safety. When regulations require it, we coordinate stamped drawings and reviews through our network of licensed engineers in the relevant jurisdiction.",
      "Our workflow is collaborative and fast. We start with a clear brief photos, measurements, constraints, and target usage then iterate concepts to balance cost, speed, and safety before issuing construction drawings, bills of materials, and method statements. As site conditions evolve, we turn revisions quickly and can issue as-built updates after installation. If your project involves unusual geometries, tight footprints, or phased builds, we’ll engineer a solution that works on paper and performs in the field."
    ],
  },
  licensing: {
    slug: "licensing",
    title: "Licensing",
    image: LicensingImg,
    tagline: "Stay informed about the latest licensing regulations and changes.",
    body: [
      "Permits and paperwork can slow projects more than the build itself. Hexagon helps you navigate licensing and compliance so your site stays productive and inspection-ready. We identify the approvals you need such as street or sidewalk occupancy and hoarding prepare the required documentation, and coordinate submissions with clients, general contractors, and local authorities. Throughout, we maintain method statements, risk assessments, handover tags, and inspection logs so records remain current for the duration of the project.",
      "Because requirements vary by city and scope, we tailor our approach and, where necessary, engage licensed professionals or specialist consultants to meet local rules. While we can’t control third-party timelines, complete and accurate applications reduce delays, and proactive scheduling helps inspections land when you need them. If you already have an internal safety team, we work alongside them to align standards and keep your project moving. Tell us where you’re building and what you’re planning; we’ll map the approvals path and handle the coordination."
    ],
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICES) as ServiceKey[];

// Accept /services/<Name> in any case (e.g., "Rental", "rental")
export function toServiceKey(raw: string): ServiceKey | null {
  const key = raw.trim().toLowerCase() as ServiceKey;
  return key in SERVICES ? key : null;
}
