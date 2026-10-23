import { about, education } from "@/data/site";
import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

export function About({ level = 2 }: { level?: 1 | 2 } = {}) {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          level={level}
          eyebrow="About"
          title={
            <>
              Clean code, <em className="text-accent">solid</em> foundations.
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal variant="right" delay={120}>
            <dl className="divide-y divide-line rounded-3xl border border-line bg-surface">
              {about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-baseline justify-between gap-4 px-6 py-4"
                >
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                    {h.label}
                  </dt>
                  <dd className="text-right font-medium">{h.value}</dd>
                </div>
              ))}
              <div className="flex items-start gap-3 px-6 py-5">
                <GraduationCap
                  size={20}
                  className="mt-0.5 shrink-0 text-accent"
                  aria-hidden
                />
                <div>
                  <p className="font-medium">{education.degree}</p>
                  <p className="text-sm text-muted">{education.school}</p>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
