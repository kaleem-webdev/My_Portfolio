import type { Metadata } from "next";
import { navLinks, site } from "@/data/site";

const defaultTitle = `${site.name} | ${site.title}`;

/**
 * Builds complete, per-page metadata. Every page gets its own canonical URL,
 * Open Graph and Twitter tags. (A child page that defines `openGraph` replaces
 * the layout's, so everything is repeated here on purpose.)
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Omit for the home page. */
  title?: string;
  description: string;
  /** Path starting with "/", e.g. "/about". */
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : defaultTitle;
  const image = {
    url: "/images/og.jpg",
    width: 1200,
    height: 630,
    alt: `${site.name}, ${site.title}`,
  };
  return {
    title: title ?? { absolute: defaultTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

/**
 * Absolute URL for a path, written exactly the way Next.js writes the canonical
 * tag: no trailing slash anywhere (the home page is just the bare domain).
 */
export function absoluteUrl(path: string) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export function breadcrumbJsonLd(path: string) {
  const here = navLinks.find((l) => l.href === path);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      ...(here && path !== "/"
        ? [{ "@type": "ListItem", position: 2, name: here.label, item: absoluteUrl(path) }]
        : []),
    ],
  };
}
