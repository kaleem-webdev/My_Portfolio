import { skillGroups } from "@/data/site";

/** Endless, auto-scrolling strip of technologies (pauses on hover). */
export function TechMarquee() {
  const items = skillGroups.flatMap((g) => g.items);

  const row = (duplicate: boolean) => (
    <ul
      className={`flex shrink-0 items-center gap-3 pr-3 ${duplicate ? "marquee-dup" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {items.map((t) => (
        <li
          key={t}
          className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2.5 font-mono text-sm"
        >
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          {t}
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Technologies I work with" className="py-16 md:py-20">
      <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
