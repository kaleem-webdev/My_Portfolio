import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/data/site";
import "./globals.css";

// Fonts are self-hosted (src/app/fonts) so the site builds offline and makes
// no third-party requests. Geist / Instrument Serif are open-source (OFL).
const geistSans = localFont({
  src: "./fonts/Geist.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMono.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const display = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
});

const title = `${site.name} | ${site.title}`;

// NOTE: no `alternates.canonical` here on purpose. A canonical set in the root
// layout is inherited by every page and would tell Google that all pages are
// duplicates of the home page. Each page sets its own (see src/lib/seo.ts).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Kaleem Ullah",
    "Full-Stack Web Developer",
    "Laravel developer",
    "PHP developer",
    "React developer",
    "Next.js developer",
    "Pakistan",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Optional: set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (and/or the Bing one) in
  // Vercel to the token Search Console gives you. Nothing is rendered if unset.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal,.reveal[data-variant]{opacity:1!important;transform:none!important;filter:none!important}.split .word{opacity:1!important;transform:none!important}.eyebrow-line{transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
