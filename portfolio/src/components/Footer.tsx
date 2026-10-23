import Link from "next/link";
import { contact, navLinks, site } from "@/data/site";
import { GithubIcon, LinkedinIcon, Reveal } from "./ui";
import { Year } from "./Year";

export function Footer() {
  return (
    <footer className="bg-foreground px-5 py-12 text-white sm:px-8">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl">
            {site.name}
            <span className="text-[#f76707]">.</span>
          </p>
          <p className="mt-2 text-white/60">{site.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-[#f76707]">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition hover:text-[#f76707]"
              >
                <GithubIcon width={15} height={15} />
                GitHub
              </a>
            </li>
            {contact.linkedin && (
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#f76707]"
                >
                  <LinkedinIcon width={15} height={15} />
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </nav>
      </Reveal>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/50">
        © <Year /> {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
