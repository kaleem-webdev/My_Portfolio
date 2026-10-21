import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { contact, cvPath, portrait, site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./ui";

function CodeCard() {
  // Decorative illustration only: a generic Laravel snippet, not project code.
  return (
    <div
      aria-hidden
      className="animate-float w-[17.5rem] overflow-hidden rounded-2xl border border-white/10 bg-[#161514] shadow-2xl shadow-black/20 sm:w-72"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-white/40">
          PostController.php
        </span>
      </div>
      <pre className="overflow-hidden px-4 py-4 font-mono text-[11.5px] leading-6 text-white/80">
        <code>
          <span className="text-[#ff922b]">public function</span>{" "}
          <span className="text-[#ffd8a8]">store</span>($request)
          {"\n"}
          {"{"}
          {"\n"}
          {"  "}$data = $request-&gt;
          <span className="text-[#ffd8a8]">validate</span>([{"\n"}
          {"    "}
          <span className="text-[#8ce99a]">&apos;title&apos;</span> =&gt;{" "}
          <span className="text-[#8ce99a]">&apos;required&apos;</span>,{"\n"}
          {"  "}]);{"\n"}
          {"  "}
          <span className="text-[#ff922b]">return</span> Post::
          <span className="text-[#ffd8a8]">create</span>($data);
          <span className="caret text-accent">▍</span>
          {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36"
    >
      {/* subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(#d9d2c6_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_60%_at_65%_40%,#000,transparent)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted">
            <span
              aria-hidden
              className="size-2 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
            />
            {site.name} · {site.title}
          </p>

          <h1 className="font-display text-[2.9rem] leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
            Building <em className="text-accent">Modern,</em> Scalable Web
            Experiences.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m <strong className="font-semibold text-foreground">{site.name}</strong>
            , a Full-Stack Web Developer with approximately{" "}
            {site.experienceLabel} of experience and a strong focus on{" "}
            <strong className="font-semibold text-foreground">Laravel and PHP</strong>.
            I also build responsive, polished frontends with HTML, CSS,
            JavaScript, React.js and Next.js.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 font-medium text-white transition hover:bg-accent"
            >
              View My Projects
              <ArrowRight
                size={17}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-surface px-6 py-3.5 font-medium transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
            <a
              href={cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-medium text-muted underline-offset-4 transition hover:text-accent hover:underline"
            >
              <Download size={16} aria-hidden />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-accent"
            >
              <GithubIcon width={18} height={18} />
              github.com/{contact.githubHandle}
            </a>
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-accent"
              >
                <LinkedinIcon width={18} height={18} />
                LinkedIn
              </a>
            )}
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden />
              Lahore, Pakistan
            </span>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] lg:max-w-[26rem]">
            <div
              aria-hidden
              className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2.5rem] border border-accent/40"
            />
            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-line shadow-xl shadow-black/10">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                priority
                sizes="(min-width: 1024px) 26rem, 22rem"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 sm:-left-12">
              <CodeCard />
            </div>
            <div className="absolute -right-3 top-8 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg shadow-black/5 sm:-right-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                Focus
              </p>
              <p className="font-display text-xl leading-tight">
                Laravel <span className="text-accent">&amp;</span> PHP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
