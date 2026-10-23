import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatedHeading } from "./AnimatedHeading";
import { Reveal } from "./ui";

/**
 * Themed hero banner for inner pages: dark card, drifting orange glow, dot
 * grid, breadcrumb and an animated <h1>. Used once per page.
 */
export function PageBanner({
  title,
  label,
  description,
  ghost,
}: {
  /** The page's <h1>. Wrap the accent word in <em>. */
  title: ReactNode;
  /** Short page name, used in the breadcrumb. */
  label: string;
  description: string;
  /** Big outlined background word (defaults to `label`). */
  ghost?: string;
}) {
  return (
    <section aria-label={`${label} banner`} className="px-5 pt-6 sm:px-8">
      <div className="banner-in relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-white sm:px-12 md:py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_80%_90%_at_80%_15%,#000,transparent)]"
        />
        <div
          aria-hidden
          className="animate-drift absolute -right-20 -top-28 size-96 rounded-full bg-accent/35 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-drift absolute -bottom-36 left-1/4 size-72 rounded-full bg-[#ff922b]/15 blur-3xl [animation-delay:-7s]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 right-6 hidden select-none font-display text-[7rem] italic leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.12)] md:block lg:text-[9rem]"
        >
          {ghost ?? label}
        </span>

        <div className="relative max-w-3xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/60">
              <li>
                <Link href="/" className="transition hover:text-[#ff922b]">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="text-[#ff922b]">
                {label}
              </li>
            </ol>
          </nav>

          <AnimatedHeading
            as="h1"
            baseDelay={250}
            className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl [&_em]:text-[#ff922b]"
          >
            {title}
          </AnimatedHeading>

          <span
            aria-hidden
            className="draw-x mt-7 block h-[3px] w-24 rounded-full bg-accent"
          />
          <Reveal delay={550}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              {description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
