import { JsonLd } from "@/components/JsonLd";
import { Contact } from "@/components/Contact";
import { PageBanner } from "@/components/PageBanner";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Kaleem Ullah, Full-Stack Web Developer, by email, phone, WhatsApp, GitHub or LinkedIn, or send a message about your web project.",
  path: "/contact",
});

export default function Page() {
  return (
    <div className="pt-16">
      <PageBanner
        label="Contact"
        title={<>Contact <em>Kaleem Ullah</em></>}
        description="Have a project in mind? Send a message or reach me directly by email, phone or WhatsApp."
      />
      <Contact />
      <JsonLd data={breadcrumbJsonLd("/contact")} />
    </div>
  );
}
