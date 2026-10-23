import { JsonLd } from "@/components/JsonLd";
import { Projects } from "@/components/Projects";
import { PageBanner } from "@/components/PageBanner";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Websites built by Kaleem Ullah, including limo and chauffeur booking sites for Nashville, Atlanta and Florida and a Dubai technical services company.",
  path: "/projects",
});

export default function Page() {
  return (
    <div className="pt-16">
      <PageBanner
        label="Projects"
        title={<>Selected <em>Projects</em></>}
        description="Websites I’ve built, from booking platforms to service businesses."
      />
      <Projects />
      <JsonLd data={breadcrumbJsonLd("/projects")} />
    </div>
  );
}
