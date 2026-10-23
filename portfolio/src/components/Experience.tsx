import { experience, site } from "@/data/site";
import { Reveal, SectionHeading } from "./ui";

export function Experience({ level = 2 }: { level?: 1 | 2 } = {}) {
  return (
    <section
      id="experience"
      className="border-y border-line bg-surface px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          level={level}
          eyebrow="Experience"
          title={
            <>
              About {site.experienceLabel} of <em className="text-accent">hands-on</em>{" "}
              work.
            </>
          }
        >
          From frontend internships to owning Laravel modules end to end on
          live client projects.
        </SectionHeading>

        <div className="relative">
          <Reveal
            variant="draw"
            className="absolute bottom-0 left-0 top-0 w-px bg-line"
          >
            {null}
          </Reveal>
          <ol className="relative space-y-6 pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} variant="left" delay={i * 80}>
              <span
                aria-hidden
                className="absolute -left-[7px] mt-2 size-3.5 rounded-full border-2 border-accent bg-surface"
              />
              <div className="rounded-3xl border border-line bg-background p-6 transition hover:border-accent/40 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-2xl sm:text-3xl">
                    {job.role}{" "}
                    <span className="text-accent">· {job.company}</span>
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed">
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
