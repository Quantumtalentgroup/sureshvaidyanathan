import { motion } from "framer-motion";

const roles = [
  { org: "Novonix Limited", role: "Board Member" },
  { org: "Aspen Technology", role: "Advisory Board Member" },
  { org: "Access Life America", role: "Advisory Board Member" },
];

export function Boards() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-44 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <div className="eyebrow mb-5">Governance & Advisory</div>
          <h2 className="font-display text-4xl leading-tight font-light text-ivory md:text-5xl">
            Strategic governance.
            <br />
            <span className="italic text-gold">Long-term value.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/70">
            Active board and advisory contributions across publicly listed and
            high-growth enterprises — guiding innovation, governance, and
            long-horizon value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {roles.map((r, i) => (
            <motion.div
              key={r.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className={`border-t border-ivory/15 py-10 md:py-12 ${
                i > 0 ? "md:border-l md:pl-10" : "md:pr-10"
              } ${i < roles.length - 1 ? "md:pr-10" : ""}`}
            >
              <div className="text-[0.7rem] tracking-[0.28em] text-gold uppercase">
                {String(i + 1).padStart(2, "0")} / Role
              </div>
              <div className="mt-5 font-display text-2xl leading-tight font-light text-ivory md:text-3xl">
                {r.org}
              </div>
              <div className="mt-3 text-sm tracking-wide text-ivory/65">
                {r.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
