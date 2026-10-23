import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/data/site";

// Next.js serves this with a 404 status and a noindex robots tag automatically.
export default function NotFound() {
  return (
    <section className="px-5 pb-24 pt-40 text-center sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Error 404
      </p>
      <h1 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">
        This page <em className="text-accent">doesn&apos;t exist</em>.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-muted">
        The link may be broken or the page may have moved. Try one of these
        instead.
      </p>
      <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-medium text-white transition hover:bg-accent"
      >
        Back to home
        <ArrowRight size={17} aria-hidden className="transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
