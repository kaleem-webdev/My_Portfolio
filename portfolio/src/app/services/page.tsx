import { JsonLd } from "@/components/JsonLd";
import { Services } from "@/components/Services";
import { PageBanner } from "@/components/PageBanner";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Web development services by Kaleem Ullah: custom websites, Laravel backend development, REST API integration, responsive frontends, maintenance and WordPress.",
  path: "/services",
});

export default function Page() {
  return (
    <div className="pt-16">
      <PageBanner
        label="Services"
        title={<>Web Development <em>Services</em></>}
        description="How I can help: custom websites, Laravel back ends, APIs and ongoing maintenance."
      />
      <Services />
      <JsonLd data={breadcrumbJsonLd("/services")} />
    </div>
  );
}
