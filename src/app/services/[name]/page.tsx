import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { SERVICES, SERVICE_SLUGS, toServiceKey } from "@/lib/services";
import type { Metadata } from "next";

const SERVICE_METADATA: Record<
  (typeof SERVICE_SLUGS)[number],
  Pick<Metadata, "title" | "description">
> = {
  rental: {
    title: "Scaffold Rental Newark NJ | Hexagon Scaffolding Rentals",
    description:
      "Get reliable scaffold rental Newark NJ with Hexagon Scaffolding. Access, swing stage & rope scaffold rental across New Jersey & New York.",
  },
  sales: {
    title: "Scaffolding Sales Newark NJ | Scaffold Supplier New Jersey",
    description:
      "Buy durable scaffolding equipment in Newark NJ. Hexagon Scaffolding offers high-quality systems, accessories, and safety gear across New Jersey & New York.",
  },
  repair: {
    title: "Scaffold Repair Newark NJ | Scaffolding Repair Services NJ",
    description:
      "Professional scaffold repair Newark NJ by Hexagon Scaffolding. Maintenance, motor scaffold repair & hoist repair services across NJ & New York.",
  },
  engineering: {
    title: "Scaffolding Engineering Services Newark NJ | Structural Design",
    description:
      "Expert scaffold engineering Newark NJ by Hexagon Scaffolding. Get drawings, load calculations & structural solutions in New Jersey & New York.",
  },
  installation: {
    title: "Scaffold Installation Newark NJ | Scaffolding Installation NJ",
    description:
      "Safe scaffold installation Newark NJ by Hexagon Scaffolding. OSHA-compliant setup, system & pipe scaffold installation across NJ & New York.",
  },
  licensing: {
    title: "Scaffolding Licensing Newark NJ | Scaffold Certification NJ",
    description:
      "Get scaffolding licensing Newark NJ with Hexagon Scaffolding. Certification, permits & OSHA training support across New Jersey & New York.",
  },
};

export function generateStaticParams() {
  // Return slugs to match the URL format used in HomeService and Header
  return SERVICE_SLUGS.map((slug) => ({ name: slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ name: string }> }
): Promise<Metadata> {
  const { name } = await params;
  const key = toServiceKey(name);
  if (!key) {
    return {
      title: "Service",
      description: "Hexagon Scaffolding services.",
    };
  }

  return SERVICE_METADATA[key];
}

export default async function Page(
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const key = toServiceKey(name);
  if (!key) return notFound();
  return <ServicePage service={SERVICES[key]} />;
}
