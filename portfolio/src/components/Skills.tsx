import { skillGroups } from "@/data/site";
import { Icon, Reveal, SectionHeading } from "./ui";

export function Skills({ level = 2 }: { level?: 1 | 2 } = {}) {
  return (
    <section
      id="skills"
      className="border-y border-line bg-surface px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          level={level}
          eyebrow="Technical skills"
          title={
            <>
              The tools I <em className="text-accent">build</em> with.
            </>
          }
        >
          Grouped by area of the stack. Laravel and PHP are where I&apos;m
          strongest.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} variant={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 80}>
              <div className="group h-full rounded-3xl border border-line bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
                    <Icon name={g.icon} size={20} />
                  </span>
                  <h3 className="font-display text-2xl">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
