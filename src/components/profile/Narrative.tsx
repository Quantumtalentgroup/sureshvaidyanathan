import { motion } from "framer-motion";
import refineryImg from "@/assets/refinery.jpg";

const paragraphs = [
  "Suresh Vaidyanathan is an accomplished global energy executive with extensive experience leading large-scale refining operations, renewable fuels growth strategies, sustainable aviation fuel expansion, and enterprise-wide modernization initiatives.",
  "Throughout his career, he has transformed complex businesses into high-performing organizations by combining operational discipline, strategic vision, capital investment expertise, and people-centered leadership.",
  "His leadership has influenced billions of dollars in energy infrastructure investments while improving profitability, reliability, operational performance, and long-term shareholder value.",
];

export function Narrative() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-44 lg:px-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="sticky top-32 space-y-10">
            <div>
              <div className="eyebrow mb-5">The Executive</div>
              <h2 className="font-display text-3xl leading-tight font-light text-ivory md:text-4xl">
                A career defined by
                <span className="italic text-gold"> transformation </span>
                at scale.
              </h2>
            </div>

            <motion.figure
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden border border-ivory/10"
            >
              <img
                src={refineryImg}
                alt="Refinery and renewable fuels infrastructure at twilight"
                loading="lazy"
                width={1600}
                height={900}
                className="aspect-[4/5] w-full object-cover grayscale-[15%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-5 text-[0.65rem] tracking-[0.28em] text-ivory/70 uppercase">
                Refining · Renewables · Scale
              </figcaption>
            </motion.figure>
          </div>
        </div>

        <div className="space-y-14 md:col-span-8">
          {paragraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-6"
            >
              <span className="absolute top-2 left-0 h-12 w-px bg-gold/70" />
              <p className="font-display text-2xl leading-[1.45] font-light text-ivory/90 md:text-3xl">
                {p}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
