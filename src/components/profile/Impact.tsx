import { motion } from "framer-motion";
import {
  Trophy,
  Plane,
  Banknote,
  TrendingUp,
  Activity,
  Scissors,
  Users,
  type LucideIcon,
} from "lucide-react";
import aviationImg from "@/assets/aviation.jpg";

type Item = {
  metric: string;
  headline: string;
  detail: string;
  icon: LucideIcon;
  span?: string;
};

const items: Item[] = [
  {
    metric: "#2",
    headline: "Largest US renewable diesel producer",
    detail:
      "Positioned Phillips 66 as the second-largest renewable diesel producer in the United States.",
    icon: Trophy,
    span: "md:col-span-7",
  },
  {
    metric: "0 → 20%",
    headline: "Of global SAF production",
    detail:
      "Expanded Sustainable Aviation Fuel capability from zero to approximately one-fifth of global output.",
    icon: Plane,
    span: "md:col-span-5",
  },
  {
    metric: "$3B+",
    headline: "Renewable energy capital",
    detail:
      "Led more than three billion dollars of renewable energy capital investment across the portfolio.",
    icon: Banknote,
    span: "md:col-span-4",
  },
  {
    metric: "$500M+",
    headline: "Refining cash margin improvement",
    detail:
      "Drove sustained, structural margin expansion across multi-site refining operations.",
    icon: TrendingUp,
    span: "md:col-span-4",
  },
  {
    metric: "$700M",
    headline: "Annual operational benefits",
    detail:
      "Generated nearly seven hundred million in annual operational improvements through disciplined execution.",
    icon: Activity,
    span: "md:col-span-4",
  },
  {
    metric: "$1B",
    headline: "Enterprise cost reduction",
    detail:
      "Delivered approximately one billion in enterprise-wide cost reduction initiatives.",
    icon: Scissors,
    span: "md:col-span-6",
  },
  {
    metric: "9,000+",
    headline: "Employees led across networks",
    detail:
      "Led organizations supporting more than nine thousand employees across multiple refinery networks.",
    icon: Users,
    span: "md:col-span-6",
  },
];

export function Impact() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-44 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 items-end gap-12 md:grid-cols-12">
          <div className="max-w-2xl md:col-span-7">
            <div className="eyebrow mb-5">Leadership Impact</div>
            <h2 className="font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
              Outcomes measured in
              <span className="italic text-gold"> billions</span>,
              <br />
              decisions measured in decades.
            </h2>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden border border-ivory/10 md:col-span-5"
          >
            <img
              src={aviationImg}
              alt="Aircraft wing above clouds at golden hour — sustainable aviation fuel"
              loading="lazy"
              width={1600}
              height={900}
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy-deep/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 p-4 text-[0.65rem] tracking-[0.28em] text-ivory/80 uppercase">
              Sustainable Aviation Fuel
            </figcaption>
          </motion.figure>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden bg-ivory/10 md:grid-cols-12">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.article
                key={it.headline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
                className={`group relative bg-navy-deep p-8 transition-colors duration-500 hover:bg-navy md:p-12 ${it.span ?? "md:col-span-6"}`}
              >
                <Icon
                  className="absolute top-8 right-8 text-gold/30 transition-colors duration-500 group-hover:text-gold/70 md:top-10 md:right-10"
                  size={28}
                  strokeWidth={1.2}
                  aria-hidden
                />
                <div className="font-display text-5xl leading-none font-light text-gold md:text-6xl">
                  {it.metric}
                </div>
                <h3 className="mt-6 text-base font-medium tracking-tight text-ivory md:text-lg">
                  {it.headline}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/65 md:text-[0.95rem]">
                  {it.detail}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
