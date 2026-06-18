import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "../components/profile/SmoothScroll";
import { Hero } from "../components/profile/Hero";
import { Narrative } from "../components/profile/Narrative";
import { Impact } from "../components/profile/Impact";
import { GlobalMap } from "../components/profile/GlobalMap";
import { Boards } from "../components/profile/Boards";
import { Philosophy } from "../components/profile/Philosophy";
import { Closing } from "../components/profile/Closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Suresh Vaidyanathan — EVP, Renewable Fuels, Emerging Energy & Aviation",
      },
      {
        name: "description",
        content:
          "Executive profile of Suresh Vaidyanathan — global energy leader in renewable fuels, sustainable aviation fuel, and enterprise transformation.",
      },
      {
        property: "og:title",
        content:
          "Suresh Vaidyanathan — EVP, Renewable Fuels, Emerging Energy & Aviation",
      },
      {
        property: "og:description",
        content:
          "Driving global energy transformation through renewable innovation, operational excellence, and enterprise-scale leadership.",
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
        <Narrative />
        <Impact />
        <GlobalMap />
        <Boards />
        <Philosophy />
        <Closing />
      </main>
    </SmoothScroll>
  );
}
