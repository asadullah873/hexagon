import type { MetadataRoute } from "next";
import { PRODUCT_NAMES, productHref } from "@/lib/products";
import { SERVICE_SLUGS } from "@/lib/services";

const baseUrl = "https://hexagonscaffolding.com";

/** Required for static export (output: "export") so sitemap is generated at build time. */
export const dynamic = "force-static";

/** Single lastModified value for sitemap entries (UTC). */
const lastModified = new Date();

/**
 * Static routes that exist in the app. Only include routes that have a page.
 * No /products or /services index pages — only dynamic segments.
 * Paths use trailing slashes to match next.config trailingSlash: true.
 */
const staticRoutes: Array<{
  path: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: number;
}> = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about/", changefreq: "monthly", priority: 0.8 },
  { path: "/contact/", changefreq: "monthly", priority: 0.8 },
  { path: "/our-team/", changefreq: "monthly", priority: 0.8 },
  { path: "/newsletter/", changefreq: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const { path, changefreq, priority } of staticRoutes) {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: changefreq,
      priority,
    });
  }

  // Product detail pages (from lib/products) — productHref returns /products/<slug>
  for (const productName of PRODUCT_NAMES) {
    const path = productHref(productName);
    entries.push({
      url: `${baseUrl}${path.endsWith("/") ? path : `${path}/`}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  // Service detail pages (from lib/services) — URL is /services/<slug>/
  for (const slug of SERVICE_SLUGS) {
    entries.push({
      url: `${baseUrl}/services/${slug}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  return entries;
}
