"use client";

import {
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

/**
 * Splits heading text into words (keeping <em> etc. intact) so each word can
 * rise out of a mask in sequence. The text stays real, selectable HTML, so
 * search engines and screen readers read the heading normally.
 */
function split(node: ReactNode, counter: { i: number }): ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, k) => {
      if (part === "") return null;
      if (/^\s+$/.test(part)) return part;
      const i = counter.i++;
      return (
        <span key={k} className="word-mask">
          <span className="word" style={{ "--i": i } as CSSProperties}>
            {part}
          </span>
        </span>
      );
    });
  }
  if (Array.isArray(node)) {
    return node.map((n, k) => <Fragment key={k}>{split(n, counter)}</Fragment>);
  }
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    return cloneElement(el, undefined, split(el.props.children, counter));
  }
  return node;
}

export function AnimatedHeading({
  as: Tag = "h2",
  className = "",
  baseDelay = 0,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Extra delay in ms before the first word starts (useful in hero areas). */
  baseDelay?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

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
      { threshold: 0.2, rootMargin: "0px 0px -30px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`split ${className}`}
      style={{ "--base": `${baseDelay}ms` } as CSSProperties}
    >
      {split(children, { i: 0 })}
    </Tag>
  );
}
