import { JsonLd } from "@/components/JsonLd";
import { About } from "@/components/About";
import { PageBanner } from "@/components/PageBanner";
import { Stats } from "@/components/Stats";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Learn about Kaleem Ullah, a Full-Stack Web Developer with about 2 years of experience in PHP and Laravel, MySQL, REST APIs and responsive React and Next.js interfaces.",
  path: "/about",
});

export default function Page() {
  return (
    <div className="pt-16">
      <PageBanner
        label="About"
        title={<>About <em>Kaleem Ullah</em></>}
        description="A full-stack developer focused on Laravel and PHP, building clean, maintainable web applications."
      />
      <About />
      <div className="pb-20 md:pb-28">
        <Stats />
      </div>
      <JsonLd data={breadcrumbJsonLd("/about")} />
    </div>
  );
}
