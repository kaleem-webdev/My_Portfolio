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
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/")}#person`,
    name: site.name,
    jobTitle: site.title,
    email: contact.email,
    url: absoluteUrl("/"),
    image: `${site.url}/images/kaleem-portrait.jpg`,
    sameAs: [contact.github, contact.linkedin].filter(Boolean),
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.name} | ${site.title}`,
    url: absoluteUrl("/"),
    author: { "@id": `${absoluteUrl("/")}#person` },
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
