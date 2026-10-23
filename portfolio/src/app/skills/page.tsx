import { JsonLd } from "@/components/JsonLd";
import { Skills } from "@/components/Skills";
import { PageBanner } from "@/components/PageBanner";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Technical Skills",
  description:
    "Kaleem Ullah's technical skills: PHP, Laravel, REST APIs and MySQL on the backend, plus HTML, CSS, JavaScript, React.js and Next.js on the frontend.",
  path: "/skills",
});

export default function Page() {
  return (
    <div className="pt-16">
      <PageBanner
        label="Skills"
        title={<>Technical <em>Skills</em></>}
        description="The languages, frameworks and tools I use to build reliable backends and polished frontends."
      />
      <Skills />
      <JsonLd data={breadcrumbJsonLd("/skills")} />
    </div>
  );
}
