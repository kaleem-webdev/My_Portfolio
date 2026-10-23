"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  Database,
  Globe,
  LayoutTemplate,
  Layers,
  Plug,
  Server,
  Settings,
  Smartphone,
  Wrench,
  type LucideProps,
} from "lucide-react";
import { AnimatedHeading } from "./AnimatedHeading";

/** Fades/slides children in once they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
  /** How the element enters: slides up (default), from a side, scales, un-blurs, or draws down. */
  variant?: "up" | "left" | "right" | "scale" | "blur" | "draw";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      data-variant={variant === "up" ? undefined : variant}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  children,
  level = 2,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  /** 1 when the section is the main content of its own page, otherwise 2. */
  level?: 1 | 2;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span aria-hidden className="eyebrow-line h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <AnimatedHeading
        as={level === 1 ? "h1" : "h2"}
        className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl"
      >
        {title}
      </AnimatedHeading>
      {children && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {children}
        </p>
      )}
    </Reveal>
  );
}

const icons = {
  server: Server,
  layout: LayoutTemplate,
  database: Database,
  wrench: Wrench,
  globe: Globe,
  plug: Plug,
  smartphone: Smartphone,
  settings: Settings,
  layers: Layers,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = icons[name];
  return <C aria-hidden {...props} />;
}

export function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={20}
      height={20}
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={20}
      height={20}
      {...props}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      width={20}
      height={20}
      {...props}
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.37A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.09.81.82-3.01-.2-.31a8.2 8.2 0 1 1 6.94 3.83Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-3.3-2.88c-.25-.43.25-.4.71-1.32.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1 2.57.13.16 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}
