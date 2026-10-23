import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui";

export function CtaBanner() {
  return (
    <section aria-label="Get in touch" className="px-5 py-20 sm:px-8 md:py-28">
      <Reveal variant="scale" className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-center text-white sm:px-12 md:py-20">
          <div
            aria-hidden
            className="animate-drift absolute -right-24 -top-24 size-72 rounded-full bg-accent/30 blur-3xl"
          />
          <h2 className="relative font-display text-4xl leading-tight sm:text-6xl">
            Have a project in mind?
            <br />
            <em className="text-[#ff922b]">Let&apos;s talk.</em>
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-white/70">
            Tell me what you&apos;re building and I&apos;ll get back to you with
            how I can help.
          </p>
          <Link
            href="/contact"
            className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-foreground transition hover:bg-accent hover:text-white"
          >
            Contact me
            <ArrowRight
              size={17}
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
