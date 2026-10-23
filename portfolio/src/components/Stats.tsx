"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";
import { Reveal } from "./ui";

/** Counts up once when scrolled into view. Server HTML already holds the final number. */
function Counter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(to * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref} aria-label={`${prefix}${to}${suffix}`}>
      <span aria-hidden>
        {prefix}
        {n}
        {suffix}
      </span>
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Key numbers" className="px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              variant="scale"
              delay={i * 90}
              className={`p-6 sm:p-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i > 1 ? "border-t border-line lg:border-t-0" : ""
              } ${i > 0 ? "lg:border-l lg:border-line" : ""}`}
            >
              <dd className="font-display text-5xl leading-none tracking-tight sm:text-6xl">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 font-medium">{s.label}</dt>
              <p className="mt-1 text-sm text-muted">{s.note}</p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
