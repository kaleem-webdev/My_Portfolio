import { Mail, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { GithubIcon, LinkedinIcon, Reveal, SectionHeading } from "./ui";
import { ContactForm } from "./ContactForm";

const items = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: <Mail size={20} aria-hidden />,
  },
  {
    label: "Pakistan phone",
    value: contact.phonePKDisplay,
    href: `tel:${contact.phonePK}`,
    icon: <Phone size={20} aria-hidden />,
  },
  {
    label: "UAE phone",
    value: contact.phoneAEDisplay,
    href: `tel:${contact.phoneAE}`,
    icon: <Phone size={20} aria-hidden />,
  },
  {
    label: "GitHub",
    value: `github.com/${contact.githubHandle}`,
    href: contact.github,
    icon: <GithubIcon width={20} height={20} />,
    external: true,
  },
  ...(contact.linkedin
    ? [
        {
          label: "LinkedIn",
          value: contact.linkedinLabel,
          href: contact.linkedin,
          icon: <LinkedinIcon width={20} height={20} />,
          external: true,
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-surface px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <em className="text-accent">together</em>.
            </>
          }
        >
          Have a project in mind or want to talk about an opportunity? Send a
          message or reach out directly.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="min-w-0">
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    {...(it.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-background p-4 transition hover:border-accent/50 hover:shadow-lg hover:shadow-black/5"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
                      {it.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-muted">
                        {it.label}
                      </span>
                      <span className="block break-all font-medium sm:break-words">
                        {it.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="min-w-0">
            <div className="rounded-3xl border border-line bg-background p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
