import { motion } from "framer-motion";

type Item = {
  metric: string;
  headline: string;
  detail: string;
  span?: string;
};

const items: Item[] = [
  {
    metric: "#2",
    headline: "Largest US renewable diesel producer",
    detail:
      "Positioned Phillips 66 as the second-largest renewable diesel producer in the United States.",
    span: "md:col-span-7",
  },
  {
    metric: "0 → 20%",
    headline: "Of global SAF production",
    detail:
      "Expanded Sustainable Aviation Fuel capability from zero to approximately one-fifth of global output.",
    span: "md:col-span-5",
  },
  {
    metric: "$3B+",
    headline: "Renewable energy capital",
    detail:
      "Led more than three billion dollars of renewable energy capital investment across the portfolio.",
    span: "md:col-span-4",
  },
  {
    metric: "$500M+",
    headline: "Refining cash margin improvement",
    detail:
      "Drove sustained, structural margin expansion across multi-site refining operations.",
    span: "md:col-span-4",
  },
  {
    metric: "$700M",
    headline: "Annual operational benefits",
    detail:
      "Generated nearly seven hundred million in annual operational improvements through disciplined execution.",
    span: "md:col-span-4",
  },
  {
    metric: "$1B",
    headline: "Enterprise cost reduction",
    detail:
      "Delivered approximately one billion in enterprise-wide cost reduction initiatives.",
    span: "md:col-span-6",
  },
  {
    metric: "9,000+",
    headline: "Employees led across networks",
    detail:
      "Led organizations supporting more than nine thousand employees across multiple refinery networks.",
    span: "md:col-span-6",
  },
];

export function Impact() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-44 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-2xl">
          <div className="eyebrow mb-5">Leadership Impact</div>
          <h2 className="font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
            Outcomes measured in
            <span className="italic text-gold"> billions</span>,
            <br />
            decisions measured in decades.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden bg-ivory/10 md:grid-cols-12">
          {items.map((it, i) => (
            <motion.article
              key={it.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
              className={`group bg-navy-deep p-8 transition-colors duration-500 hover:bg-navy md:p-12 ${it.span ?? "md:col-span-6"}`}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
