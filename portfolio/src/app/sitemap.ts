import type { MetadataRoute } from "next";
import { navLinks, site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

// One entry per real page.
// IMPORTANT: all `url` values MUST use absoluteUrl() so they match the
// <link rel="canonical"> tags exactly (no trailing-slash drift).
function priority(href: string): number {
  if (href === "/") return 1;
  if (href === "/projects") return 0.9; // primary portfolio content
  if (href === "/contact") return 0.8;
  return 0.7; // about, skills, experience, services
}

function changeFrequency(href: string): "monthly" | "yearly" {
  // Home and Projects change when new work is added; everything else is
  // essentially static biography content.
  return href === "/" || href === "/projects" ? "monthly" : "yearly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.lastUpdated);
  return navLinks.map((l) => ({
    url: absoluteUrl(l.href),
    lastModified,
    changeFrequency: changeFrequency(l.href),
    priority: priority(l.href),
  }));
}
