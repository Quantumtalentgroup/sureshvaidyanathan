import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "../components/profile/SmoothScroll";
import { Hero } from "../components/profile/Hero";
import { Narrative } from "../components/profile/Narrative";
import { Impact } from "../components/profile/Impact";
import { GlobalMap } from "../components/profile/GlobalMap";
import { Boards } from "../components/profile/Boards";
import { Philosophy } from "../components/profile/Philosophy";
import { Closing } from "../components/profile/Closing";
import { SectionDivider } from "../components/profile/SectionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suresh Vaidyanathan — EVP, Renewable Fuels & Aviation" },
      {
        name: "description",
        content:
          "Executive profile of Suresh Vaidyanathan — global energy leader in renewable fuels, sustainable aviation fuel, and enterprise transformation.",
      },
      {
        property: "og:title",
        content: "Suresh Vaidyanathan — EVP, Renewable Fuels & Aviation",
      },
      {
        property: "og:description",
        content:
          "Driving global energy transformation through renewable innovation, operational excellence, and enterprise-scale leadership.",
      },
      { property: "og:url", content: "https://sureshvaidyanathan.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://sureshvaidyanathan.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Suresh Vaidyanathan",
          jobTitle:
            "EVP, Renewable Fuels, Emerging Energy & Aviation",
          url: "https://sureshvaidyanathan.lovable.app/",
          email: "mailto:vaidyanth@hotmail.com",
          sameAs: ["https://www.linkedin.com/in/sureshvaidyanathan/"],
        }),
      },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <SmoothScroll>
      <main className="relative bg-navy-deep text-ivory">
        <Hero />
        <SectionDivider label="The Executive" />
        <Narrative />
        <SectionDivider label="Impact" />
        <Impact />
        <SectionDivider label="Global Reach" />
        <GlobalMap />
        <SectionDivider label="Governance" />
        <Boards />
        <SectionDivider label="Philosophy" />
        <Philosophy />
        <SectionDivider label="Connect" />
        <Closing />
      </main>
    </SmoothScroll>
  );
}
