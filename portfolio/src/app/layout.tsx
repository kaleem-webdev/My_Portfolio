import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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
    {
      path: "./fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const title = `${site.name} | ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  // Google Search Console verification
  verification: {
    google: "ZHTDSNTGEb6G09qeXL-UMxukxSkUfES4NjLpLjRtkWQ",
  },

  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Kaleem Ullah",
    "Full-Stack Web Developer",
    "Laravel developer",
    "PHP developer",
    "React developer",
    "Next.js developer",
    "Pakistan",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f5",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}