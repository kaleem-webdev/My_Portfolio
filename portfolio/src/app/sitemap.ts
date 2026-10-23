import type { MetadataRoute } from "next";
import { navLinks, site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

// One entry per real page. URLs match each page's canonical tag exactly.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastUpdated);
  return navLinks.map((l) => ({
    url: absoluteUrl(l.href),
    lastModified,
    changeFrequency: l.href === "/" || l.href === "/projects" ? "monthly" : "yearly",
    priority: l.href === "/" ? 1 : l.href === "/contact" ? 0.7 : 0.8,
  }));
}
