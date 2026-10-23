import { services } from "@/data/site";
import { Icon, Reveal, SectionHeading } from "./ui";

export function Services({ level = 2 }: { level?: 1 | 2 } = {}) {
  return (
    <section id="services" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          level={level}
          eyebrow="Services"
          title={
            <>
              How I can <em className="text-accent">help</em>.
            </>
          }
        >
          Whether you&apos;re starting from scratch or improving something
          that already exists.
        </SectionHeading>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={(i % 3) * 90}>
              <div className="group h-full rounded-3xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5">
                <span className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="font-display text-2xl leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
