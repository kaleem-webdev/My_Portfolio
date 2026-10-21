import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { contact, projects, type Project } from "@/data/site";
import { GithubIcon, Reveal, SectionHeading } from "./ui";
import { ProjectThumb } from "./ProjectThumb";

function LinkButton({
  href,
  label,
  project,
  children,
  primary,
}: {
  href: string;
  label: string;
  project: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition";
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Add a link in src/data/site.ts"
        className={`${base} cursor-not-allowed border border-dashed border-line text-muted/70`}
      >
        {children}
        {label}
        <span className="sr-only"> for {project}: link not added yet</span>
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${project}`}
      className={`${base} ${
        primary
          ? "bg-foreground text-white hover:bg-accent"
          : "border border-foreground/15 hover:border-accent hover:text-accent"
      }`}
    >
      {children}
      {label}
    </a>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal as="article" delay={(index % 2) * 90} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5">
        <div className="relative aspect-[8/5] overflow-hidden bg-line">
          <div className="h-full w-full transition duration-500 group-hover:scale-[1.04]">
            {p.image ? (
              <Image
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                fill
                sizes="(min-width: 768px) 560px, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <ProjectThumb type={p.thumb} />
            )}
          </div>
          {p.placeholder && (
            <span className="absolute left-4 top-4 rounded-full bg-foreground/90 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
              Sample placeholder
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-display text-2xl sm:text-[1.7rem]">{p.title}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-muted">
            {p.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {p.tags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href={p.liveUrl} label="Live Demo" project={p.title} primary>
              <ArrowUpRight size={16} aria-hidden />
            </LinkButton>
            {(p.sourceUrl || p.placeholder) && (
              <LinkButton href={p.sourceUrl} label="Source Code" project={p.title}>
                <GithubIcon width={16} height={16} />
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const hasPlaceholders = projects.some((p) => p.placeholder);
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured projects"
          title={
            <>
              Selected <em className="text-accent">work</em>.
            </>
          }
        >
          {hasPlaceholders
            ? "These cards are sample placeholders showing the layout. Real project details, screenshots and links will replace them."
            : "A selection of projects I've built."}
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted transition hover:text-accent"
          >
            <GithubIcon width={18} height={18} />
            More on GitHub
            <ArrowUpRight size={16} aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
