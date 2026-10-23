import { JsonLd } from "@/components/JsonLd";
import { Experience } from "@/components/Experience";
import { PageBanner } from "@/components/PageBanner";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Work experience of Kaleem Ullah as a web developer at BM Global, IT Genesis and Murick Technologies, building Laravel applications and responsive frontends.",
  path: "/experience",
});

export default function Page() {
  return (
    <div className="pt-16">
      <PageBanner
        label="Experience"
        title={<>Work <em>Experience</em></>}
        description="Where I’ve worked and what I’ve built, from frontend internship to Laravel development."
      />
      <Experience />
      <JsonLd data={breadcrumbJsonLd("/experience")} />
    </div>
  );
}
