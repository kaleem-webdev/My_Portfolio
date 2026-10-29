import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { TechMarquee } from "@/components/TechMarquee";
import { contact, site } from "@/data/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  description: site.description,
  path: "/",
});

export default function Home() {
  const personId = `${absoluteUrl("/")}#person`;
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.name,
    jobTitle: site.title,
    description: site.description,
    email: contact.email,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/kaleem-portrait.jpg"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    knowsAbout: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "React",
      "Next.js",
      "Full-Stack Web Development",
    ],
    sameAs: [contact.github, contact.linkedin].filter(Boolean),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} | ${site.title}`,
    description: site.description,
    url: absoluteUrl("/"),
    inLanguage: "en-US",
    author: { "@id": personId },
  };

  return (
    <>
      <Hero />
      <Stats />
      <TechMarquee />
      <Projects limit={3} />
      <CtaBanner />
      <JsonLd data={[person, website]} />
    </>
  );
}
