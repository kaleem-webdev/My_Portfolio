"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { cvPath, navLinks, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape and lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`nav-in fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="font-display text-2xl tracking-tight"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors hover:text-foreground ${
                  isActive(l.href) ? "bg-accent-soft text-accent" : "text-muted"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={cvPath}
            download
            className="hidden items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-white transition hover:bg-accent sm:inline-flex"
          >
            <Download size={15} aria-hidden />
            Download CV
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-4rem)] overflow-y-auto bg-background px-5 pb-10 pt-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href} className="border-b border-line">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-4 font-display text-3xl ${
                    isActive(l.href) ? "text-accent" : ""
                  }`}
                >
                  {l.label}
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={cvPath}
            download
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 font-medium text-white"
          >
            <Download size={16} aria-hidden />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
