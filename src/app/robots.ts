import type { MetadataRoute } from "next";

const baseUrl = "https://hexagonscaffolding.com";

/** Required for static export (output: "export") so robots.txt is generated at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
