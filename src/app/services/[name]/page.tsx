import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { SERVICES, SERVICE_SLUGS, toServiceKey } from "@/lib/services";

export function generateStaticParams() {
  // Return slugs to match the URL format used in HomeService and Header
  return SERVICE_SLUGS.map((slug) => ({ name: slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const key = toServiceKey(name);
  const svc = key ? SERVICES[key] : null;

  return {
    title: svc ? `${svc.title} | Hexagon Scaffolding Inc.` : "Service",
    description: svc?.tagline ?? "Hexagon Scaffolding services.",
  };
}

export default async function Page(
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const key = toServiceKey(name);
  if (!key) return notFound();
  return <ServicePage service={SERVICES[key]} />;
}
